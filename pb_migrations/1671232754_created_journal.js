migrate((db) => {
  const collection = new Collection({
    "id": "zwd3jo41kxn1ps3",
    "created": "2022-12-16 23:19:14.266Z",
    "updated": "2022-12-16 23:19:14.266Z",
    "name": "journal",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "h8jnk93s",
        "name": "journal_author",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gfqgj4lt",
        "name": "journal_title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 255,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "akhk2xan",
        "name": "journal_post",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 1000,
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zwd3jo41kxn1ps3");

  return dao.deleteCollection(collection);
})
