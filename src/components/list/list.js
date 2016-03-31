import React, { Component } from 'react'
import classNames from 'classname'

export default class List extends Component {
	render() {
		const {className, children, ...others} = this.props
		const classes = classNames({
			'mui-table-view': true,
			[className]: className
		})
		return  <ul className={classes} {...others}>{children}</ul>
	}
}