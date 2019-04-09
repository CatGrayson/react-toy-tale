import React, { Component } from 'react'
import ToyCard from './ToyCard.js'

class ToyContainer extends Component {
    render() {
        return (
            <div>
                <p>Andy Needs Your Help</p>
                <br/>
                <button id="new-toy-btn">Add a New Toy</button>
                <div className="toy-collection">
                    {this.props.toys.map(toy => <ToyCard toy={toy} updateLike={this.props.updateLike} />)}
                </div>
            </div>
        )
    }     
}
export default ToyContainer