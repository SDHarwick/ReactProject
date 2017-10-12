import React, {Component} from 'react';

class Blocks extends Component {
  render() {
    return (
	    <div>
		    <div id="single_block" draggable="true">
				<p>A</p>
				<p>Text</p>
			</div> 
			<div id="single_block" draggable="true">
				<p id="block-img">📷</p>
				<p>Image</p>
			</div>
				<div id="single_block" draggable="true">
				<p>Divider</p>
			</div>
		</div>
    );
  }
}
export default Blocks;