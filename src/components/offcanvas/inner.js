import React, { Component } from 'react'

export default class Inner extends Component {
	render() {
		const { active, fixed, title, onClick, children } = this.props
		const translate3d = active ? fixed ? 0 : 263 : 0;
		return <div className="mui-inner-wrap mui-transitioning" style={{
				transform: 'translate3d(' + translate3d + 'px, 0px, 0px)'
			}}>
			<header className="mui-bar mui-bar-nav">
				<a className="mui-icon mui-action-menu mui-icon-bars mui-pull-left" onClick={onClick}></a>
				<h1 className="mui-title">{title}</h1>
			</header>
			<div className="mui-content mui-scroll-wrapper">
				<div className="mui-scroll">{children}</div>
			</div>
			<div className="mui-off-canvas-backdrop" onClick={onClick}></div>
		</div>
	}
}