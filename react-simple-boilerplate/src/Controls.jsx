import React, {Component} from 'react';

class Controls extends Component {
  render() {
    return (
	    <div>
			<div id="edit_block"> <button>✎</button>
			</div>
			<div id="delete_block"> 🗑
			</div>
			<div id="clone_block"> Clone
			</div>
		</div>
    );
  }
}
export default Controls;