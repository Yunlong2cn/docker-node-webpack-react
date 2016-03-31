import React, { Component } from 'react'
import classNames from 'classname'
import Badge from '../badge'


export default class Text extends Component {
	render() {
		const {to, badge, className, children, ...others} = this.props
		const classes = classNames({
			'mui-table-view-cell': true,
			[className]: className
		})
		return  <li className={classes} {...others}>
		{children}
		{(
			badge => {
				if(badge) {
					return typeof badge === "string" ? <Badge>{badge}</Badge>:<Badge styleName={badge.style}>{badge.text}</Badge>
				}
			}
		)(badge)}
		</li>
	}
}