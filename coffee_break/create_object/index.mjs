import jsf from 'json-schema-faker'

const createObjectFile = (object, schema) => {
	const schemaAsObject = JSON.parse(schema);

	let noOfData = 5;
	for (let i = 0; i < noOfData; i++) {
		const obj = jsf.generate(schemaAsObject);
		console.log(obj);
	}
};

export default createObjectFile;