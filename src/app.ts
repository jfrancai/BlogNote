import * as http from 'http';
import { readFileSync, readdirSync, Dirent } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const hostname: string = '127.0.0.1';
const port: number = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = http.createServer();

function getNoteUri(): string[] {

	const dirs: string[] | Buffer[] | Dirent[] = readdirSync(__dirname + '/zet');

	const ret: string[] = new Array(dirs.length);
	dirs.forEach((file: string, index: number) => {
		ret[index]	= file.substring(0, file.length - 5);
	})
	return ret;
}

server.on('request', async (req: http.IncomingMessage, res: http.ServerResponse) => {
	let data: string | Buffer = "not found"; 
	let status: number = 404;

	let index: number = -1;
	let uri: string = req.url ? req.url : "/";

	const URIs: string[] = getNoteUri();

	if (req.url == '/' && req.method === 'GET') {
		data = readFileSync(__dirname + '/index.html');
	}
	else if ((index = URIs.indexOf(uri.substring(1, uri.length))) > -1) {
		data = readFileSync(__dirname + '/zet/' + URIs[index] + '.html');
	}
	res.writeHead(status, {
		'Content-Type': 'text/html',
	})
	return res.end(data);
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
})
