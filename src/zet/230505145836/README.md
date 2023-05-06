# TypeScript Installation

Init of the project :

```bash
npm init -y
```

How to install typescript as a dev depency :

```bash
npm install typescript --save-dev
```

To compile TS to Js :

```bash
npx tsc src/app.ts --outDir dist
```

How to create a tsconfig.json

```json
{
	"compilerOptions": {
		"outDir": "dist",
		"target": "ES2023",
		"strict": true
	},
	"files": [
		"src/app.ts"
	]
}
```

[TS bible](https://www.typescriptlang.org/tsconfig)
