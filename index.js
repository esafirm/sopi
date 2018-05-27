#!/usr/bin/env node

const request = require('request')

const url = process.argv[2]

if(!url){
    console.log('Please input the url first ❌')
    return 
}

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

    console.log('images', images)

    const fs = require('fs')
    images.forEach(image => {
        var file = fs.createWriteStream(`${process.cwd()}/${image}.jpg`);
        request.get(`https://cf.shopee.co.id/file/${image}`).pipe(file)
    });

    console.log('Completed ✅')
})
