import React, { Component } from 'react'
import classNames from 'classname'
import immutable from 'immutable'
import Aside from './aside'
import Inner from './inner'
// fixed 同 Aside, Inner 中的 fixed 一个概念，用于标识主界面是否固定

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
				// const a = immutable.Map(child)
				// const b = a.update('props', active => ({active: active}))
				// console.log('child', b)
				// return b
				const {children, ...others} = child.props
				if (child.type.name == 'Aside') {
					return <Aside active={active} fixed={fixed} {...others} key={i}>{children}</Aside>
				}
				if (child.type.name == 'Inner') {
					return <Inner active={active} fixed={fixed} {...others} key={i}>{children}</Inner>
				}
				return child
			})
		}</div>
	}
}

OffCanvas.Aside = Aside
OffCanvas.Inner = Inner