npm install gh-pages --save-dev

"homepage" : "https://username.github.io/repo_name"

"predeploy":"npm run build"

"deploy":"gh-pages -d build"

npm run deploy