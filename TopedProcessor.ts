import * as req from "request";

interface TopedInfo {
    sellerName: string,
    product: string,
    url: string
}

export function process(url: string) {
    getHtml(url)
}

function getHtml(url: string) {
    req.get({ uri: url }, (err, res, bod) => {
        console.log('response body', bod)
    })
}

function sanitizeUrl(url: string) {
    if (!url) {
        throw Error('Empty url')
    }
    const finalUrl = url.replace('/^(https?\:)?\/\/(www\.)?tokopedia\.com/i', 'https://www.tokopedia.com')
}

function findItems(url: string): TopedInfo {
    const regex = 'https\:\/\/www\.tokopedia\.com\/([a-zA-Z0-9\_]{3,20})\/(.+)'
    const found = url.match(regex)

    if (found == null) {
        throw Error('Invalid Tokopedia url')
    }

    return {
        sellerName: found[1],
        product: found[2],
        url: url
    }
}