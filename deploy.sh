cd dist

cp index.html 404.html

currentDate=`date`

git init
git add -A
git commit -m "deploy $currentDate"
git push -f git@github.com:leonlatsch/homepage.git master:gh-pages

cd ..
