#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

WORK_DIR="$DIR/.gh-pages"
REPO=git@github.com:mleko/react-dev-ribbon.git
TARGET_BRANCH=gh-pages

webpack --config "${DIR}/webpack.config.js"

git clone "${REPO}" "$WORK_DIR"
cd "$WORK_DIR"
git checkout ${TARGET_BRANCH} || git checkout --orphan "${TARGET_BRANCH}"
git reset
git clean -df

cp ${DIR}/public_html/index.html "${WORK_DIR}/"
cp ${DIR}/dist/bundle.js "${WORK_DIR}/"

git add .

if [ `git diff --exit-code --staged --quiet` ]; then
    echo "No changes to push; exit."
    exit 0
fi

git commit -m "Deploy to GitHub Pages: `date +\"%Y-%m-%d %T\"`"
git push ${REPO} ${TARGET_BRANCH}
