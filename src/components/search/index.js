import React, {Component} from 'react'

export default class Search extends Component {
	render() {
		return <div className="mui-input-row mui-search">
			<input type="search" className="mui-input-clear" placeholder=""/>
			<span className="mui-icon mui-icon-clear mui-hidden"></span>
			<span className="mui-placeholder">
				<span className="mui-icon mui-icon-search"></span>
				<span></span>
			</span>
		</div>
	}
}