import React, { Component } from 'react'
import classNames from 'classname'

export default class Button extends Component {
	render() {
		const {styleName, className, children, ...others} = this.props
		const classes = classNames({
			'mui-btn': true,
			['mui-btn-' + styleName]: styleName,
			[className]: className
		})
		return  <button className={classes} {...others}>{children}</button>
	}
}