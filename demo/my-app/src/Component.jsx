import React from 'react'

class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = { Number: 0 }
    }
    increment = () => {
        console.log(this.state.Number + 1);
        this.setState({Number:this.state.Number +1})
    }


}

export default Component