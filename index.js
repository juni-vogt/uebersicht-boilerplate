//
// Widget description
//

_: (() => this.options = {

	key: 'value'

})(),

command: `
	WIDGET_OPTIONS=${escape(JSON.stringify(this.options))}
	cd ./uebersicht-boilerplate/ && bash ./src/command.sh
`,

refreshFrequency: 1000,

render: output => output,

// todo: put style in its own file
style: `
	// put position on top for accessibility
	top: 40px
	left: 20px

	-webkit-font-smoothing: antialiased // nicer font rendering
	font: 14px sans-serif;

	.container
		background: #ccc
		border-radius: 4px
		overflow: hidden
		padding: 0 1.25em .75em

`
