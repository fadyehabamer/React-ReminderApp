import React, { Component } from 'react';
import Todo from './components/todoItems/Todo';
import Add from './components/addItems/Add';

import "./App.css"

export default class App extends Component {
  // Sequential ids: the old Math.random() * 1000 ids could collide, giving
  // duplicate React keys and deleting two reminders with one click.
  nextId = 4

  state = {
    items: [
      { id: 1, name: 'Study React', daysLeft: 22 },
      { id: 2, name: 'Study OOP', daysLeft: 23 },
      { id: 3, name: 'Grad. Project', daysLeft: 24 }
    ]
  }

  deleteItemFirst = (id) => {
    // console.log(id);
    let i = this.state.items.findIndex(item => item.id === id)
    if (i === -1) return  // splice(-1, 1) would delete the last item
    let newitems = [...this.state.items]
    newitems.splice(i, 1)
    this.setState({
      items: newitems
    })
  }

  deleteItemSecond = (id) => {
    // console.log(id);
    let newitems = this.state.items.filter(item => {
      return item.id !== id   // * false -> remove   // * True --> keep
    })
    this.setState({
      items: newitems
    })
  }

  addItem = (item) => {
    const newItem = { ...item, id: this.nextId++ }
    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }))
  }




  render() {
    return (
      <div className="App">
        <h1> Reminder App </h1>
        <Todo todos={this.state.items} deleteItemFirst={this.deleteItemFirst} deleteItemSecond={this.deleteItemSecond} />
        <Add addItem={this.addItem} />
      </div>);
  }
}
