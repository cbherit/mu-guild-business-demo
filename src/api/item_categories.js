class ItemCategory {
  constructor(id, name, state) {
    this.id = id
    this.name = name
    this.state = state
  }
}

export default {
  getAll() {
    return _item_categories.filter(item_category => item_category.state == true)
  },
}

const _item_categories = [
  { "id": 1, "name": "Set", "state": true },
  { "id": 2, "name": "Wings", "state": true },
  { "id": 3, "name": "Set Ancient", "state": true },
  { "id": 4, "name": "Set Lucky", "state": true },
]
