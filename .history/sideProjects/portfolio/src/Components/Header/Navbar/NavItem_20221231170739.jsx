import React from 'react'

export default function NavItem(props) {
  return (
    <li class="nav-item">
        <a className="nav-link" href="#">{props.text}</a>
    </li>
  )
}
