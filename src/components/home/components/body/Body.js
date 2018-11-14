import React, { Component } from 'react'
import './body.scss'
import CardComponent from './components/CardComponent'


class Body extends Component {
    render() {
        return (
            <div className="container">
                <CardComponent/>
            </div>
        )
    }

}

export default Body
