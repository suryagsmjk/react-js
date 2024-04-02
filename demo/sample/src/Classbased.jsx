import React from 'react'

class ClassComponent extends React.Component() {
    constructor(props) {
        super(props)
        this.state = { Number: 0 }
    }
    increment = () => {
        console.log(this.state.Number + 1);
        this.setState({ Number: this.state.Number + 1 })
    }
    render(){
    return (

        <div>
            <h1>this is Class Component</h1>
            <h2>{this.state.Number}</h2>
            <button onClick={this.state.increment}>INC</button>
        </div>
    )
}
} 

export default Classbased

