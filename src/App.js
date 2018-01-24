import React, { Component } from 'react';
import './App.css';
import MyForm from './MyForm';
import DataDisplay from './DataDisplay';
import { HashRouter, Route } from 'react-router-dom'
import { setJSON } from './util/IPFS.js'

class App extends Component {
  constructor() {
    super();
    this.state = { title: "", message: "", list: [] }
  }
  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  }
  handleMsg = (e) => {
    this.setState({ message: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const timeStamp = Math.floor(Date.now());
    const { title, message } = this.state;
    const hash = await setJSON({ title, message, timeStamp });
    this.setState({ list: [...this.state.list, hash] })
  }
  render() {
    const { title, msg, list } = this.state
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to IPFS</h1>
          </header>
          <Route exact path="/" render={() => <MyForm
            title={title}
            msg={msg}
            list={list}
            handleTitle={this.handleTitle}
            handleMsg={this.handleMsg}
            handleSubmit={this.handleSubmit} />} />
          <Route path="/ipfs/:id" component={DataDisplay} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
