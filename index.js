// 1. load all the urls from redirects.yaml
const YAML = require('yaml')
const fs = require('fs')
const path = require('path')

const redirectsFile = fs.readFileSync(path.join(__dirname, 'redirects.yaml'), 'utf-8')
const redirects = YAML.parse(redirectsFile)

// 2. generate an html page for each redirect url from template.html
const templateHTML = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf-8')

// 3. loop through all url redirects, and generate an html page
for(let [slug, url] of Object.entries(redirects)) {
    console.log("Generating html page for ", slug)

    const html = templateHTML.replaceAll('https://example.com', url)
    console.log(html);
}