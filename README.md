# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

Install [Node.js](https://nodejs.org/en/download/)

```node
npm config set fetch-retry-mintimeout 20000
npm config set fetch-retry-maxtimeout 120000

npx create-docusaurus@latest my-website classic

cd my-website
npx docusaurus start
```

Open [http://localhost:3000](http://localhost:3000)

```git
git init
git add .
git commit -m "first commit"
git push -u origin main
GIT_USER=tenimathew yarn deploy
```

Generate token for password
