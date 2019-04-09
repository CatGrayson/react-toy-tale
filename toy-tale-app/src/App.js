import React, { Component } from 'react'
import {toys} from './resources/toys'
import ToyHeader from './ToyHeader'
import ToyContainer from './ToyContainer'
import './index.css'

class App extends Component {

    state = {
      toys: toys,
      filtered: []
    }

    updateLike = (toy) => {
      const updatedToys = this.state.toys.map(stateToy === toy ? {...toy, likes: ++toy.likes} : stateToy)

      this.setState({
        toys: updatedToys
      })
    }
  
    filterLike = () => {
      const toys = this.state.toys.filter(toy => toy.likes > 0)

      this.setState({
        filtered: toys
      })
    }

    addToy = (e) => {
      e.preventDefault()

      const toy = {
        name: e.target.name.value,
        image: e.target.image.value,
        likes: 0
      }

      this.setState({
        toys: [...this.state.toys, toy]
      })
    }

    render() {
      return (
        <div className="App">
          <ToyHeader filterLike={this.filterLike} addToy={this.addToy} />
         <ToyContainer toys={this.state.filtered.length === 0 ? this.state.toys : this.state.filtered} updateLike={this.updateLike} addToy={this.addToy} />
        </div>
      );
    }
}

export default App
