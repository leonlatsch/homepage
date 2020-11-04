@echo off

cd dist

echo leonlatsch.dev > CNAME

echo "[*] Pushing gh-pages branch"
git init
git add -A
git commit -m deploy

git push -f git@github.com:leonlatsch/homepage.git master:gh-pages

cd ..

echo "[*] Done"