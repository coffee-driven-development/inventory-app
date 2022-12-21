const {sequelize} = require('./db')
const {Sauce, Item} = require('./models/index')
const {sauces, items} = require('./seedData')
import "regenerator-runtime/runtime.js"

describe('Sauce, Item Models', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true })
    })

    test('Can create Item', async () => {
        const testItem = await Item.create(items[0])
        expect(testItem.title).toEqual("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
        expect(testItem.price).toEqual(109.95)
        expect(testItem.description).toEqual("Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday")
        expect(testItem.category).toEqual("men's clothing")
        expect(testItem.image).toEqual("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg")
    })
})