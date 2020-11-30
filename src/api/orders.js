class Order {
  constructor(id, item, item_level, item_options, observation, user_account, state, created) {
    this.id = id
    this.item = item
    this.item_level = item_level
    this.item_options = item_options
    this.observation = observation
    this.user_account = user_account
    this.state = state
    this.created = created
  }
}

export default {
  getAll(cb) {
    setTimeout(() => cb(_orders), 100)
  },
  getbyId(order_id, cb) {
    let order = new Order
    order = _orders.find(({ id }) => id == order_id)
    setTimeout(() => cb(order), 100)
    console.log('orders_api-findbyId', order)
  },
}

const _orders = [
  {
    "id": 1,
    "item": {
      "id": 1,
      "name": "Black Dragon Set",
      "item_category": {
        "id": 1,
        "name": "Set",
        "state": true
      },
      "state": true
    },
    "item_level": 13,
    "item_options": 1,
    "observation": "lorem ipsum dolor color",
    "user_account": {
      "id": 2,
      "nickname": "Administrator"
    },
    "state": true,
    "created": Date.now()
  },
  {
    "id": 2, "item": { "id": 1, "name": "Black Dragon Set", "item_category": { "id": 1, "name": "Set", "state": true }, "state": true }
    , "item_level": 0, "item_options": 2, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }, "state": true, "created": Date.now()
  },
  {
    "id": 3, "item": { "id": 2, "name": "Dark Soul Set", "item_category": { "id": 1, "name": "Set", "state": true }, "state": true }
    , "item_level": 13, "item_options": 1, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }, "state": true, "created": Date.now()
  },
  {
    "id": 4, "item": { "id": 2, "name": "Dark Soul Set", "item_category": { "id": 1, "name": "Set", "state": true }, "state": true }
    , "item_level": 0, "item_options": 2, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }, "state": true, "created": Date.now()
  },
  {
    "id": 5, "item": { "id": 3, "name": "Red Spirit Set", "item_category": { "id": 1, "name": "Set", "state": true }, "state": true }
    , "item_level": 13, "item_options": 1, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }, "state": true, "created": Date.now()
  },
  {
    "id": 6, "item": { "id": 3, "name": "Red Spirit Set", "item_category": { "id": 1, "name": "Set", "state": true }, "state": true }
    , "item_level": 0, "item_options": 2, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }, "state": true, "created": Date.now()
  },
  {
    "id": 7, "item": { "id": 4, "name": "Wing of Illusion", "item_category": { "id": 2, "name": "Wings", "state": true }, "state": true }
    , "item_level": 13, "item_options": 1, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }, "state": true, "created": Date.now()
  },
  {
    "id": 8, "item": { "id": 4, "name": "Wing of Illusion", "item_category": { "id": 2, "name": "Wings", "state": true }, "state": true }
    , "item_level": 0, "item_options": 2, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }, "state": true, "created": Date.now()
  },
  {
    "id": 9, "item": { "id": 5, "name": "Wing of Dimension", "item_category": { "id": 2, "name": "Wings", "state": true }, "state": true }
    , "item_level": 0, "item_options": 2, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }, "state": true, "created": Date.now()
  },
  {
    "id": 10, "item": { "id": 5, "name": "Wing of Dimension", "item_category": { "id": 2, "name": "Wings", "state": true }, "state": true }
    , "item_level": 13, "item_options": 1, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }, "state": true, "created": Date.now()
  },
  {
    "id": 11, "item": { "id": 6, "name": "Wing of Eternal", "item_category": { "id": 2, "name": "Wings", "state": true }, "state": true }
    , "item_level": 13, "item_options": 1, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }, "state": true, "created": Date.now()
  },
  {
    "id": 12, "item": { "id": 6, "name": "Wing of Eternal", "item_category": { "id": 2, "name": "Wings", "state": true }, "state": true }
    , "item_level": 0, "item_options": 2, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }, "state": true, "created": Date.now()
  },
  {
    "id": 13, "item": { "id": 7, "name": "Vicious Dragon Set", "item_category": { "id": 3, "name": "Set Ancient", "state": true }, "state": true }
    , "item_level": 0, "item_options": 2, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }, "state": true, "created": Date.now()
  },
  {
    "id": 14, "item": { "id": 7, "name": "Vicious Dragon Set", "item_category": { "id": 3, "name": "Set Ancient", "state": true }, "state": true }
    , "item_level": 13, "item_options": 3, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }, "state": true, "created": Date.now()
  },
  {
    "id": 15, "item": { "id": 8, "name": "Aruane Guardian Set", "item_category": { "id": 3, "name": "Set Ancient", "state": true }, "state": true }
    , "item_level": 0, "item_options": 2, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }, "state": true, "created": Date.now()
  },
  {
    "id": 16, "item": { "id": 8, "name": "Aruane Guardian Set", "item_category": { "id": 3, "name": "Set Ancient", "state": true }, "state": true }
    , "item_level": 13, "item_options": 3, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }, "state": true, "created": Date.now()
  },
  {
    "id": 17, "item": { "id": 9, "name": "Muren Storm Crow Set", "item_category": { "id": 3, "name": "Set Ancient", "state": true }, "state": true }
    , "item_level": 13, "item_options": 2, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }, "state": true, "created": Date.now()
  },
  {
    "id": 18, "item": { "id": 9, "name": "Muren Storm Crow Set", "item_category": { "id": 3, "name": "Set Ancient", "state": true }, "state": true }
    , "item_level": 0, "item_options": 2, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }, "state": true, "created": Date.now()
  },
  {
    "id": 19, "item": { "id": 10, "name": "Hades's Sphinx", "item_category": { "id": 4, "name": "Set Lucky", "state": true }, "state": true }
    , "item_level": 13, "item_options": 1, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }, "state": true, "created": Date.now()
  },
  {
    "id": 20, "item": { "id": 10, "name": "Hades's Sphinx", "item_category": { "id": 4, "name": "Set Lucky", "state": true }, "state": true }
    , "item_level": 13, "item_options": 1, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }, "state": true, "created": Date.now()
  },
  {
    "id": 21, "item": { "id": 11, "name": "Dione's Silk", "item_category": { "id": 4, "name": "Set Lucky", "state": true }, "state": true }
    , "item_level": 13, "item_options": 1, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }, "state": true, "created": Date.now()
  },
  {
    "id": 22, "item": { "id": 11, "name": "Dione's Silk", "item_category": { "id": 4, "name": "Set Lucky", "state": true }, "state": true }
    , "item_level": 13, "item_options": 1, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }, "state": true, "created": Date.now()
  },
  {
    "id": 23, "item": { "id": 12, "name": "Moros's Scale", "item_category": { "id": 4, "name": "Set Lucky", "state": true }, "state": true }
    , "item_level": 0, "item_options": 1, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }, "state": true, "created": Date.now()
  },
  {
    "id": 24, "item": { "id": 12, "name": "Moros's Scale", "item_category": { "id": 4, "name": "Set Lucky", "state": true }, "state": true }
    , "item_level": 13, "item_options": 1, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }, "state": true, "created": Date.now()
  },
]