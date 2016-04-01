import React, { Component } from 'react'
import classNames from 'classname'
import immutable from 'immutable'
import Aside from './aside'
import Inner from './inner'

export default class OffCanvas extends Component {
	render() {
		const {active, fixed, className, children, ...others} = this.props
		const classes = classNames({
			'mui-off-canvas-wrap': true,
			'mui-draggable': true,
			'mui-slide-in': fixed,
			'mui-active': active,
			[className]: className
		})
		return <div className={classes} {...others}>{
			children.map((child, i) => {
				return immutable.Map(child)
				.set('props', immutable.Map(child.props)
					.set('active', active)
					.set('fixed', fixed)
					.toObject()
				).toObject()
			})
		}</div>
	}
}

OffCanvas.Aside = Aside
OffCanvas.Inner = Inner