import React, { Component } from 'react'
import classNames from 'classname'

export default class Badge extends Component {
	render() {
		const {styleName, className, children, ...others} = this.props
		const classes = classNames({
			'mui-badge': true,
			['mui-badge-' + styleName]: styleName,
			[className]: className
		})
		return  <span className={classes} {...others}>{children}</span>
	}
}