import React, { Component } from 'react'
import classNames from 'classname'

export default class Card extends Component {
	render() {
		const {className, children, ...others} = this.props
		const classes = classNames({
			'mui-card': true,
			[className]: className
		})
		return  <div className={classes} {...others}>{children}</div>
	}
}