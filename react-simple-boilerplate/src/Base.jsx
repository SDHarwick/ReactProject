import React, {Component} from 'react';
import LeftNav from './LeftNav.jsx';
import Blocks from './Blocks.jsx';
import Template from './TemplateBuilder.jsx';

class Base extends Component {
  render() {
    return (
	    <div id="base-container">
	      	<div id="l_sidebar">
				<LeftNav />
			</div>
			<div id="l_col">
				<h4> Drag blocks to add them:</h4>
				<div id="blocks">
					<Blocks />
				</div>
			</div>
			<div id="r_col">
				<Template />
			</div>
	    </div>
    );
  }
}

export default Base;