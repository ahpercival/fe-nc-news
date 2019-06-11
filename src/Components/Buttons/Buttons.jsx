import React from 'react'
import { Link } from '@reach/router'

const Button = props => (
    <Link className={props.className + ' btn btn-primary'} to={props.to}>{props.children}</Link>
)

export default Button