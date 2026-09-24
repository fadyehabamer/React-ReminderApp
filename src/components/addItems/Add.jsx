import React, { Component } from 'react';
import './add.css'

export default class Add extends Component {
  state = {
    name: '',
    daysLeft: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  // Handled on the form's submit (not the button's click) so the browser's
  // `required` / `min` validation runs before we get here.
  addItem = (e) => {
    e.preventDefault();
    const name = this.state.name.trim();
    const daysLeft = Number(this.state.daysLeft);
    if (!name || !Number.isInteger(daysLeft) || daysLeft < 1) return;

    this.props.addItem({ name, daysLeft })
    this.setState({ name: '', daysLeft: '' })
  }


  render() {
    return (
      <form onSubmit={this.addItem}>
        <input type="text" required id="name" placeholder="NAME" aria-label="Reminder name" value={this.state.name} onChange={this.handleChange} />
        <input type="number" min="1" step="1" required id="daysLeft" placeholder="Days Left" aria-label="Days left" value={this.state.daysLeft} onChange={this.handleChange} />
        <input type="submit" value="Add" />
      </form>

    )
  }
}
