const STO = require("./schemaToObject.js");

const schema = `{
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "age": {
        "type": "integer",
        "minimum": 10,
        "maximum": 100
      },
      "married": {
        "type": "boolean"
      }
    },
    "required": [
      "name",
      "age",
      "married"
    ]
  }`;

  console.log(STO.generator(schema));