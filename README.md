## Sopi

Sopi is a Shopee image downloader. 

## Motivation 

I can't download Shopee product images! Why they make it so hard!

## Installation

```
$ npm i -g sopi
```

Or just use NPX

```
$ npx sopi ... 
```

## Usage

```
Usage: sopi <url> <options>

  Options:

    -V, --version        output the version number
    -o, --output <path>  set the output directory
    -nn, --no-numbering  disable auto numbering
    -h, --help           output usage information
```

## Example 

```
$ sopi https://shopee.co.id/Jaket-Bomber-Metalik-Anak-i.1902863.53878688 -o ~/Desktop
```

with NPX:

```
$ npx sopi https://shopee.co.id/Jaket-Bomber-Metalik-Anak-i.1902863.53878688 -o ~/Desktop
```

This will download "Jaket Bomber" images to `~/Desktop` directory

## License 

MIT @ Esa Firman