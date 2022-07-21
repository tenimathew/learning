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

edit docusaurus.config.js

baseUrl: "/learning/" //repo name
organizationName: "tenimathew", // GitHub user name
projectName: "learning", //repo name
trailingSlash: false,
deploymentBranch: "gh-pages",

```git
git init
git add .
git commit -m "first commit"
git remote add origin git@github.com:tenimathew/learning.git
git remote -v
git push -u origin main --force
GIT_USER=tenimathew yarn deploy
```
