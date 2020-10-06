var orm = require("../config/orm");

var burger = {
    read: () => orm.read("burgers"),
    create: (cols, vals) => orm.create("burgers", cols, vals),
    update: (objColVals, condition) => orm.update("burgers", objColVals, condition),
    delete: condition => orm.delete("burgers", condition)
}

module.exports = burger;