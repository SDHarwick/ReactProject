import React, {Component} from 'react';



class LeftNav extends Component {
  render() {

    return (
	    <div>
			<div id="left_nav_block">
				<p><img src="./src/assets/editor_blocks.png" alt="Blocks" /></p><p>Blocks</p>
			</div>
			<div id="left_nav_block">
				<p><img src="./src/assets/editor_styles.png" alt="Styles" /></p><p>Styles</p>
			</div>
			<div id="left_nav_block">
				<p><img src="./src/assets/editor_preview.png" alt="Preview" /></p><p>Preview</p>
			</div>
		</div>
    );
  }
}
export default LeftNav;