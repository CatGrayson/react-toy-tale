import React from 'react'
import ToyForm from './ToyForm'

const ToyHeader = (props) => {
    return (
        <div id="toy-header">
            <h1>Toy Tale</h1>
            <ToyForm addToy={props.addToy} />
            <br/>
            <button onClick={() => props.filterLike()}>Filter by Like</button>
        </div>
    )
}
export default ToyHeader