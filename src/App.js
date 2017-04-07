import React, { Component } from 'react';
import {Header, Footer} from './common'
import {Tab, Section, Table} from './components'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Tab/>
        <Section/>
        <Table/>
        <Footer/>
      </div>
    );
  }
}

export default App;
