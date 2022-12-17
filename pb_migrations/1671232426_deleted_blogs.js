migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5ut02svkts5xf7z");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "5ut02svkts5xf7z",
    "created": "2022-12-16 22:47:01.438Z",
    "updated": "2022-12-16 22:47:01.438Z",
    "name": "blogs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ns04hgtm",
        "name": "blog_id",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 5,
          "max": 5,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5dewfquc",
        "name": "blog_title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 250,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "remk7efh",
        "name": "blog_author",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 255,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "iotkjdas",
        "name": "blog_post",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
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
})
