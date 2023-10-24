#!/usr/bin/env node

const path = require('path');
const { readFileSync, writeFileSync } = require('fs');
const htmlmin = require('html-minifier').minify;
const nunjucks = require('nunjucks');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');

const DIR = path.join(__dirname, '..');
const TEMPLATE_FILE = "src/inflation_calc.njk";

async function compileTailwind(inputPath, outputPath) {
    const inputCss = readFileSync(inputPath, 'utf8');
    const output = await postcss([tailwindcss, cssnano])
        .process(inputCss, {
            from: inputPath,
            to: outputPath
        });
    writeFileSync(outputPath, output.css);
}

async function main() {
    // Set up Nunjucks environment
    const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(DIR, { noCache: true }));

    await compileTailwind('./src/input.css', './dist/style.css')

    const rendered = env.render(TEMPLATE_FILE);

    const minifiedOptions = {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true,
        minifyJS: true
    };

    const minified = htmlmin(rendered, minifiedOptions);

    writeFileSync(path.join(DIR, "dist", "rendered.html"), minified);
}

main();
