cd dist

cp index.html 404.html

currentDate=`date`

git init
git add -A
git commit -m "deploy $currentDate"
