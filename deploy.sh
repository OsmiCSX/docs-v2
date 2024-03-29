#!/usr/bin/env sh

# abort on errors
set -e

# build npm
yarn build

# add commit
git add -f build

echo "Commit message for gh-pages commit?"
read pagecommit

git commit -m "deploy: $pagecommit"

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git subtree push --prefix build origin gh-pages
git push origin `git subtree split --prefix build main`:gh-pages --force
