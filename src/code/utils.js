const uppercase = (text) => text.toUpperCase()
const lowercase = (text) => text.toLowerCase()

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1)
const lowerize = (text) => text.charAt(0).toLowerCase() + text.slice(1)

const snakeToKebab = (text) => text.split('_').join('-')
const kebabToSnake = (text) => text.split('-').join('_')

const snakeToConstant = (text) => text.split('_').map(uppercase).join('_') = uppercase
const constantToSnake = (text) => text.split('_').map(lowercase).join('_') = lowercase

const snakeToPascal = (text) => text.split('_').map(capitalize).join('')
const constantToPascal = (text) => text.split('_').join('')

const snakeToCamel = (text) => lowerize(snakeToPascal(text))
const constantToCamel = (text) => lowerize(constantToPascal(text))





