const greeting = require('./main.js')

if (typeof document !== "undefined") {
    document.write(greeting)
} else {
    console.log(greeting)
}
