import React, {Component} from 'react'
import {Navbar} from '../../components'
export default class View extends Component {
	render() {
		return <div className="mui-views">
			<div className="mui-view">
				<Navbar>设置</Navbar>
				<div className="mui-pages">
					<div className="mui-page"></div>
					<div className="mui-page"></div>
				</div>
			</div>
		</div>
	}
}