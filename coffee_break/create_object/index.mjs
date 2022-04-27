import jsf from 'json-schema-faker'
import fs from 'fs';

const createObjectFile = (object, schema) => {
	const schemaAsObject = JSON.parse(schema);

	let noOfData = 5;
	for (let i = 0; i < noOfData; i++) {
		const obj = jsf.generate(schemaAsObject);
		let sobj = JSON.stringify(obj)
		sobj = sobj + '\n';

		fs.appendFile('obj.txt', sobj, function (err) {
			if (err) throw err;
		});
	}
};

export default createObjectFile;