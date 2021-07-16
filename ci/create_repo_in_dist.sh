cd dist

cp index.html 404.html

currentDate=`date`

git config user.name "Leon Latsch"
git config user.email "dev.leonlatsch@gmail.com"

git init
git add -A
git commit -m "deploy $currentDate"
