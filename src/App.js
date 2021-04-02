// create your App component here
import React, { Component} from 'react';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      list: []
    }
  }
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json').then( resp => resp.json() ).then( json => {
      this.setState({
        list: json
      })
    })
  }

  render() {
    return (
        <h1>hi ca nha yeu cua kem</h1>
    )
  }


}
