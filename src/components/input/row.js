import React, { Component } from 'react'
import classNames from 'classname'

import Input from './input'

export default class Row extends Component {
	render() {
		const {label, type, placeholder, className, children, ...others} = this.props
		const classes = classNames({
			'mui-input-row': true,
			[className]: className
		})
		const text = children ? children : label
		return <div className={classes} {...others}>
			{(text => {
				if (text) {
					return <label>{text}</label>
				}
			})(text) }
			<Input type={type} placeholder={placeholder}/>
		</div>
	}
}