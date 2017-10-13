import React, {Component} from 'react';
import Controls from './Controls.jsx';
import ReactQuill from 'react-quill';

function editBlock () {
  
};

class Template extends Component {
	constructor(props) {
		const defaultText = (
			<div>
				<h3>This is a basic template. Start by adding your logo and some stellar content. </h3>
				<p>You can drag content blocks from the left to add sections to your template. Then, you can customize your template's colors and fonts to match your own by clicking "Styles" in the left navigation.</p>
				<p>Don't forget to add images to the header to brand your email just the way you want. </p>
				<p>When you're done, you can send your template as a newsletter campaign or use it in an automated email flow. We'll save your design in case you want to tweak it later. Happy emailing!</p>
		  	</div>
		);

		super(props);
		this.state = {value: 'This is a text block. Click here to edit it...'};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render() {

	const Block = ['text', 'img', 'divider'];

  	const defaultText = (
		<div>
			<h3>This is a basic template. Start by adding your logo and some stellar content. </h3>
			<p>You can drag content blocks from the left to add sections to your template. Then, you can customize your template's colors and fonts to match your own by clicking "Styles" in the left navigation.</p>
			<p>Don't forget to add images to the header to brand your email just the way you want. </p>
			<p>When you're done, you can send your template as a newsletter campaign or use it in an automated email flow. We'll save your design in case you want to tweak it later. Happy emailing!</p>
	  	</div>
	);

  	const TextInput = (
		<ReactQuill value={this.state.value} onChange={this.handleChange} />
	);



    return (
    	<div id="full_template">
		    <div id="header_container"> 
				<div id="controls">
					<Controls />
				</div>
				<h2> September 2015 Newsletter</h2>
			</div>
			<div id="img_container">
			</div>
			<div id="body_container">
				<div id="controls">
					<Controls />
				</div>
				<div id="text_block">
					<form>
					{TextInput}
					</form>
				</div>
			</div>
		</div>
    );
  }
}
export default Template;