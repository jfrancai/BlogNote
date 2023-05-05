import * as http from 'http';
import * as fs from 'fs';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as cheerio from 'cheerio';
import MarkdownIt from 'markdown-it'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const markdown: MarkdownIt = MarkdownIt({html: true});
const hostname: string = '127.0.0.1';
const port: number = 3000;

const server = http.createServer();

server.on('request', async (req: http.IncomingMessage, res: http.ServerResponse) => {
	if (req.method === 'GET') {
		let data: string | Buffer;
		let status: number;
		if (req.url === '/')
		{
			data = fs.readFileSync(__dirname + '/index.html');
			status = 200;
			const dirs: string[] | Buffer[] | fs.Dirent[] = fs.readdirSync(__dirname + '/zet');

			const $ = cheerio.load(data);
			dirs.forEach((file: string) => {
				$('ul').append(`<li><a href="${file}">${file} </a></li>`);
			});
			data = $.html();
		}
		else if (req.url)
		{
			try
			{
				data = await convertMarkdownToHtml(req.url);
				status = 200;
			}
			catch (e: any)
			{
				status = 404;
				data = "not found 0";
			}
		}
		else
		{
			status = 404;
			data = "not found 1";
		}
		res.writeHead(status, {
			'Content-Type': 'text/html',
		})
		return res.end(data);
	}
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
})

async function convertMarkdownToHtml(zetId: string): Promise< string > {
	try {
		// mardown source
		const content: string = await readFile(__dirname + "/zet"+ zetId + "/README.md", 'utf8');
		const rendered = markdown.render(content);
		const template: string | Buffer = fs.readFileSync(__dirname + '/template.html');
		const $ = cheerio.load(template);
		$('div').append(rendered);
		return $.html();
	}
	catch (e: any)
	{
		console.log(e);
		throw e;
	}
}
