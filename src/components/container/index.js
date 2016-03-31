import React, { Component } from 'react'
import classNames from 'classname'

export default class Container extends Component {
	render() {
		const {className, children, ...others} = this.props
		const classes = classNames({
			'mui-content': true,
			[className]: className
		})
		return <div className={classes}>{children}</div>
	}
}