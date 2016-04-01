import React, { Component } from 'react'
import classNames from 'classname'

export default class List extends Component {
	render() {
		const {chevron, inverted, className, children, ...others} = this.props
		const classes = classNames({
			'mui-table-view': true,
			'mui-table-view-chevron': chevron,
			'mui-table-view-inverted': inverted,
			[className]: className
		})
		return  <ul className={classes} {...others}>{children}</ul>
	}
}