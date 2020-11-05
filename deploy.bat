@echo off

cd dist

<NUL set /p=[*] Preparing assets... 
copy index.html 404.html > NUL
echo Done

<NUL set /p=[*] Pushing gh-pages branch... 
git init > NUL
git add -A > NUL
git commit -m "deploy %DATE%" > NUL
git push -f git@github.com:leonlatsch/homepage.git master:gh-pages
echo Done

cd ..

echo [*] Deploy Complete