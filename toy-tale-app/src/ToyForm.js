import React, { Component } from 'react'

class ToyForm extends Component {
    render() {
        return(
            <div>
                <form onSubmit={(e) => this.props.addToy(e)}>
                    <input type="text" name="name" placeholder="name" />
                    <input type="text" name="image" placeholer="image" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
export default ToyForm