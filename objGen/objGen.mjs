const jsf = require("json-schema-faker");

function generator(schema) {
	const schemaAsObject = JSON.parse(schema);

	const obj = jsf.generate(schemaAsObject);

	return obj;
}

module.exports = { generator };
