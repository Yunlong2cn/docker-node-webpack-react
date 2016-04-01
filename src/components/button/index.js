import React, { Component } from 'react'
import classNames from 'classname'

export default class Button extends Component {
	render() {
		const {block, styleName, className, children, ...others} = this.props
		const classes = classNames({
			'mui-btn': true,
			['mui-btn-' + styleName]: styleName,
			['mui-btn-block']: block,
			[className]: className
		})
		return  <button className={classes} {...others}>{children}</button>
	}
}