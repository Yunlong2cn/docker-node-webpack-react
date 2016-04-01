import React, { Component } from 'react'
import classNames from 'classname'

export default class Aside extends Component {

	static contextTypes = {
		router: React.PropTypes.object.isRequired
	}

	render() {
		const {active, fixed, className, children, ...others} = this.props
		const classes = classNames({
			'mui-off-canvas-left': true,
			'mui-transitioning': true,
			'mui-active': active,
			[className]: className
		})

		const zIndex = active ? fixed ? 9999 : 0 : -1
		const visibility = active ? 'visible' : fixed ? 'visible' : 'hidden'
		const translate3d = active ? 0 : fixed ? -263 : 0

		return <aside className={classes} ref="aside" style={{
				zIndex: zIndex,
				visibility: visibility,
				transform: 'translate3d(' + translate3d + 'px, 0px, 0px)'
			}}>
			<div className="mui-scroll-wrapper">
				<div className="mui-scroll" style={{
					transform: 'translate3d(0px, 0px, 0px) translateZ(0px)',
				}}>{children}</div>
			</div>
		</aside>
	}
}