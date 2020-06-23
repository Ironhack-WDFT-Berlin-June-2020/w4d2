const greet = () => {
    return 'hello';
}

const goodBye = () => {
    return 'goodbye';
}

// exporting multiple functions
module.exports = {
    hello: greet,
    bye: goodBye
}