import React, { Component } from 'react';
import Loading from './components/Loading';
import LottoComponent from './components/LottoComponent';

export default class App extends Component {
  state = {
    loaded: false
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        loaded: true
      })
    }, 3000);
  }

  render(){
    return (
      this.state.loaded ? <LottoComponent/> : <Loading/>
    );
  }
}