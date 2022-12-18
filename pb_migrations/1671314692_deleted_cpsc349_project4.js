migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7p3m0g6ouog1wq5");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "7p3m0g6ouog1wq5",
    "created": "2022-12-17 22:00:55.766Z",
    "updated": "2022-12-17 22:02:09.760Z",
    "name": "cpsc349_project4",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
