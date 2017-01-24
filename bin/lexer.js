const fs = require('fs')
const Latin = require('parse-latin')
const inspect = require('unist-util-inspect')
const filepath = process.argv[2]
const source = fs.createReadStream(filepath)

source.on('data', data => {
  const tree = new Latin().parse(data.toString())
  console.log(inspect(tree))
})