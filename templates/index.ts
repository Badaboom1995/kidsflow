#!/usr/bin/env node

const fs = require("fs-extra")
const ejs = require("ejs")
const argv = require("yargs-parser")(process.argv.slice(2))
const path = require("path")

const main = () => {
  // 1. Welcome log
  console.log("Generating template...")
  try {
    // 2. Destructure args from argv and set _ array to variable "data"
    const { _: leftovers, out, fn } = argv
    console.log(leftovers)
    // 3. Add the args we want to use in the .ejs template
    // to an object
    const data = {
      fn,
      leftovers,
    }

    // 4. Create an empty options object to pass to the
    // ejs.renderFile function (we are keeping defaults)
    const options = {}

    // 5. Check that the required flags are in
    if (!out || !fn) {
      console.error("--out and --fn flag required")
      process.exit(1)
    }

    // 6. Set our ejs template file, nominating it to read the
    // sibling "main.ejs" file sibling in the same directory
    const filename = path.join(__dirname, `./${leftovers[0]}.ejs`)

    // 7. Run the renderFile, passing the required args
    // as outlined on the package docs.
    ejs.renderFile(filename, data, options, function (err, str) {
      // str => Rendered HTML string
      if (err) {
        console.error(err)
      }

      // 8. Write file to --out path
      const outputFile = path.join(process.cwd(), out)
      fs.ensureFileSync(outputFile)
      fs.outputFileSync(outputFile, str)
    })
  } catch (err) {
    console.error(err)
  }
}

main()

// https://dev.to/okeeffed/build-your-own-code-generator-in-javascript-1fh1


// generate ['duck', 'comp', 'ftr', 'style', 'util', 'service', 'hook', 'page'] 'Name'