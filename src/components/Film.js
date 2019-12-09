import React, { Component } from 'react'

class Film extends Component {

render() {
  return (
    <li className="Film">
    <h4><a href={this.props.url}>{this.props.name}</a></h4>
    </li>
  )
}

}

export default Film
