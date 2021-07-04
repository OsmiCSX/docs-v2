#!/usr/bin/env sh

# abort on errors
set -e

# build npm
yarn build

# add commit
git add build -f

echo "Commit message for gh-pages commit?"
read pagecommit

git commit -m "deploy: $pagecommit"

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git subtree push --prefix build origin gh-pages
#git push origin `git subtree split --prefix dist master`:gh-pages --force
