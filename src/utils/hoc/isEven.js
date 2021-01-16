const moduloBy = require("./moduloBy");

const moduloByEven = moduloBy(2);

const isEven = (x) => moduloByEven(x) === 0;

module.exports = isEven;
