import * as http from 'http';
import { readFileSync, readdirSync, Dirent } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const HOST: string = '0.0.0.0';
const PORT: number = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = http.createServer();

function getNoteUri(): string[] {

	const dirs: string[] | Buffer[] | Dirent[] = readdirSync(__dirname + '/zet');

	const ret: string[] = new Array(dirs.length);
	dirs.forEach((file: string, index: number) => {
		ret[index]	= '/zet/' + file.substring(0, file.length - 5) + ".html";
	})
	return ret;
}

server.on('request', (req: http.IncomingMessage, res: http.ServerResponse) => {

	let data: string | Buffer = "not found"; 
	let status: number = 404;

	let index: number = -1;
	let uri: string = req.url ? req.url : "/";

	const URIs: string[] = getNoteUri();

	if (req.url == '/' && req.method === 'GET') {
		data = readFileSync(__dirname + '/index.html');
	}
	else if ((index = URIs.indexOf(uri)) > -1) {
		data = readFileSync(__dirname + URIs[index]);
	}

	res.writeHead(status, {
		'Content-Type': 'text/html',
	})
	return res.end(data);
})

server.listen(PORT, HOST, () => {
	console.log(`Server running at http://${HOST}:${PORT}/`);
})
