migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7p3m0g6ouog1wq5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l9uy4cdp",
    "name": "jounrals",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7p3m0g6ouog1wq5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l9uy4cdp",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
