import React, { Component } from 'react'
import classNames from 'classname'

export default class Icon extends Component {
	render() {
		const {chevron, className, children, ...others} = this.props
		const classes = classNames({
			'mui-icon': true,
			['mui-icon-' + name]: name,
			[className]: className
		})
		return <span className={classes}></span>
	}
}