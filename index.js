#!/usr/bin/env node

const program = require('commander');

program
    .usage('<url> <options>')
    .version('1.0.0')
    .option('-o, --output <path>', 'set the output directory')
    .option('-nn, --no-numbering', 'disable auto numbering')
    .parse(process.argv)

const url = program.args[0]

function showErrorMessage() {
    console.log('Please input the url first ❌')
    console.log('\n')
    console.log(program.outputHelp())
    process.exit(0)
}

if (!url) {
    showErrorMessage();
    return
}

const urlParser = require('url')
const parsedUrl = urlParser.parse(url)

if (!parsedUrl.hostname) {
    showErrorMessage();
    return
}

const request = require('request')

const lastDotPos = url.lastIndexOf('.')
const itemId = url.substring(lastDotPos + 1)

const sub = url.substring(0, lastDotPos)
const shopId = sub.substring(sub.lastIndexOf('.') + 1)

const completeUrl = `https://shopee.co.id/api/v2/item/get\?itemid\=${itemId}\&shopid\=${shopId}`

console.log('complete: ', completeUrl)

request.get(completeUrl, (_, res, body) => {
    console.log('Request complete ✅')
    const parsed = JSON.parse(body)
    const images = parsed.item.images

    const disableAutoNumbering = program.numbering
    const outputDirectory = program.output ? program.output : process.cwd()
    const fs = require('fs')

    images.forEach((image, index) => {
        let fileName = `${outputDirectory}/${disableAutoNumbering ? index : image}.jpg`
        let file = fs.createWriteStream(fileName)
        request.get(`https://cf.shopee.co.id/file/${image}`).pipe(file)
    });

    console.log(`Downloaded ${images.length} iamge(s)`)
    console.log('Completed ✅')
})
