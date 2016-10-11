const log = (...args) => console.log('übersicht-boilerplate:', ...args);
// to be able to differentiate widget output in console

const app = module.exports = {

	options: {
		key: 'value'
	},

	constructor(options) {
		Object.assign(app.options, options);

		log('options', app.options);

		const data = app.getData();
		const HTML = app.getHTML(data);

		return HTML;
		// expects string with output HTML or a promise resolving to it
	},

	getData: () => ({
		date: new Date()
	}),

	getHTML: data => new Promise(res =>
		res(`
			<div class="container">
				<h1>übersicht-boilerplate</h1>
				<p>edit <code>übersicht-boilerplate/src/app.js</code></p>
				<p>${data.date}</p>
			</div>
		`)
	)
};
