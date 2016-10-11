const fs = require('fs');

const app = module.exports = require('./app');

const options = process.env.WIDGET_OPTIONS ?
	JSON.parse(unescape(process.env.WIDGET_OPTIONS)) : {};

const getOutput =
	// convert to promise if not already
	Promise.all([app.constructor(options)])
	.then(values => values[0]);

getOutput.then(HTML =>
	fs.writeFile('output.html', HTML, err => {
		if (err) {
			console.error('Error writing output HTML file. However that happened.');
			throw err;
		}
		// console.log('Wrote output HTML file:', HTML);
	})
);
