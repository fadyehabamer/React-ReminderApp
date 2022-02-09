import React, { Component } from 'react';
import './add.css'

export default class Add extends Component {
  state = {
    id: Math.floor(Math.random() * 1000),
    name: '',
    daysLeft: ''
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    // console.log([e.target.id]);
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  addItem = (e) => {
    // console.log(this.state)
    e.preventDefault();

    this.props.addItem(this.state)
    this.setState({
      id: Math.floor(Math.random() * 1000)
    })

  }


  render() {
    return (
      <form>
        <input type="text" required id="name" placeholder="NAME" onChange={this.handleChange} />
        <input type="number" min="1" required id="daysLeft" placeholder="Days Left" onChange={this.handleChange} />
        <input type="submit" onClick={this.addItem} value="Add" />
      </form>

    )
  }
}
