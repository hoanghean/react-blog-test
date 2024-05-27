npm install gh-pages --save-dev

"homepage" : "https://hoanghean.github.io"

"predeploy":"npm run build",
"deploy":"gh-pages -d build"

npm run deploy