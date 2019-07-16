import React, { Component } from 'react'
import './App.css'
import Counter from './components/Counter'
import Form from './components/Form'
class App extends Component {
  state = {
    count: 0,
    form: {
      name: '',
      surname: '',
      age: ''
    }
  }
  decrement = () => {
    this.setState(prevState => {
      return {
        count: prevState.count === 0 ? 0 : (prevState.count -= 1)
      }
    })
  }
  increment = () => {
    this.setState(prevState => {
      return {
        count: (prevState.count += 1)
      }
    })
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <Counter count={this.state.count} min={this.decrement} max={this.increment} />
        <Form
          handleChange={this.handleChange}
          name={this.state.name}
          surname={this.state.surname}
          age={this.state.age}
        />
      </div>
    )
  }
}
export default App
