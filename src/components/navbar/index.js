import React, { Component } from 'react'
import classNames from 'classname'
import Icon from '../icon'

export default class Navbar extends Component {
	static contextProps = {
		router: React.PropTypes.object.isRequired
	}

	render() {
		const {left, right, chevron, className, children, ...others} = this.props
		const classes = classNames({
			'mui-bar': true,
			'mui-bar-nav': true,
			[className]: className
		})
		return <div className={classes} {...others}>
			<h1 className="mui-center mui-title">{children}</h1>
			{(right=>{
				if(right) {
					return typeof right === 'string' ? <button className="mui-btn mui-btn-blue mui-btn-link mui-pull-right">
						{right}
					</button> : <a className="mui-icon mui-icon-bars mui-pull-right"></a>
				}
			})(right)}
			{(left => {
				if (left) {
					const onClick = left.onClick ? e=>left.onClick : e=>window.history.go(-1)
					return left.title ? <button className="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left">
						<Icon name="left-nav"/>
						{left.title}
					</button> : <a className="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onClick={e=>onClick()}></a>
				}
			})(left) }
		</div>
	}
}