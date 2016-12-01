//--------------------------------------------|
// REACT COMPONENT: App
//--------------------------------------------|
// Load up our React component: App

import React, { Component } from 'react';

class App extends Component {
	constructor() {
		super();
		this.state = {
			txt: 'Lets get started!'
		}
	}

	update(e) {
		this.setState({
			txt: e.target.value
		})
	}

	render() {
		let txt = this.state.txt;
		return (
			<div className="app">
				<p><input type="text" onChange={this.update.bind(this)} /></p>
				<h1>{txt}</h1>
			</div>
		);
	}
}

export default App;
