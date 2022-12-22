const {sequelize} = require('./db')
const {Item} = require('./models/index')
const {items} = require('./seedData')
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

    test('Can find Item', async () => {
        const testItem = await Item.findByPk(1)
        expect(testItem.title).toEqual("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
    })

    test('Can update Item', async () => {
        const testItem = await Item.findByPk(1)
        const updatedItem = await testItem.update({
            title: "update"
        })
        expect(updatedItem.title).toEqual("update")
        expect(updatedItem.price).toEqual(109.95)
    })

    test('Can delete Item', async () => {
        const testItem = await Item.findByPk(1)
        await testItem.destroy()
        const foundItems = await Item.findAll()
        expect(foundItems.length).toEqual(0)
    })
})