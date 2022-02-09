import React, { Component } from 'react';
import Todo from './components/todoItems/Todo';
import Add from './components/addItems/Add';

import "./App.css"

export default class App extends Component {
  state = {
    items: [
      { id: Math.floor(Math.random() * 1000), name: 'Study React', daysLeft: 22 },
      { id: Math.floor(Math.random() * 1000), name: 'Study OOP', daysLeft: 23 },
      { id: Math.floor(Math.random() * 1000), name: 'Grad. Project', daysLeft: 24 }
    ]
  }

  deleteItemFirst = (id) => {
    // console.log(id);
    let newitems = this.state.items;
    let i = newitems.findIndex(item => item.id === id)
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
    let newitems = this.state.items
    newitems.push(item)
    this.setState({
      items: newitems
    })
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
