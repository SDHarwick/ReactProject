import React, {Component} from 'react';

class Template extends Component {
  render() {
    return (
    	<div id="full_template">
		    <div id="header_container"> 
				<div id="controls">
					<div id="edit_block"> <button>✎</button>
					</div>
					<div id="delete_block"> 🗑
					</div>
					<div id="clone_block"> Clone
					</div>
				</div>
				<h2> September 2015 Newsletter</h2>
			</div>
			<div id="img_container">
			</div>
			<div id="body_container">
				<div id="controls">
					<div id="edit_block"> <button>✎</button>
					</div>
					<div id="delete_block"> 🗑
					</div>
					<div id="clone_block"> Clone
					</div>
				</div>
				<p> <h3>This is a basic template. Start by adding your logo and some stellar content. </h3>
				You can drag content blocks from the left to add sections to your template. Then, you can customize your template's colors and fonts to match your own by clicking "Styles" in the left navigation. <br></br><br></br>

				Don't forget to add images to the header to brand your email just the way you want. <br></br><br></br>

				When you're done, you can send your template as a newsletter campaign or use it in an automated email flow. We'll save your design in case you want to tweak it later. Happy emailing!
				</p>
			</div>
		</div>
    );
  }
}
export default Template;