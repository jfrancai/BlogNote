import { writeFileSync, readFileSync, readdirSync, Dirent } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as cheerio from 'cheerio';
import MarkdownIt from 'markdown-it'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __src = __dirname + "/../src";

const markdown: MarkdownIt = MarkdownIt({html: true});

(() => {
	const dirs: string[] | Buffer[] | Dirent[] = readdirSync(__src + '/zet');

	const templateHtml: string | Buffer = readFileSync(__src + '/template.html');
	const indexHtml: string | Buffer = readFileSync(__src + '/index.html');

	const index = cheerio.load(indexHtml);
	dirs.forEach((folder: string) => {
		const template = cheerio.load(templateHtml);
		const notePath: string = __src + "/zet/" + folder + "/README.md";
		try {
			const mdNote: string = readFileSync(notePath, 'utf8');
			const htmlNote = markdown.render(mdNote);

			template('div').append(htmlNote);
			index('ul').append(`<li><a href="${folder}">${folder} </a></li>`);

			writeFileSync(__dirname + '/zet/' + folder + ".html", template.html());
		}
		catch (e: any)
		{
			console.log(e);
		}
	});
	writeFileSync(__dirname + '/index.html', index.html());
})()
