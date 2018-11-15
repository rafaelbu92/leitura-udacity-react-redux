import { Button } from 'reactstrap'
import React, { Component } from 'react'
import './menu.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  { getPostsByCategory }  from 'posts/actions'


class Menu extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="menu-main">
                <div className="group-button">
                    <Button onClick={() => {
                        this.props.getPostsByCategory('react')
                        }} color="secondary" className="react-button">React</Button>
                    <Button onClick={() => {
                        this.props.getPostsByCategory('redux')
                        }} color="info" className="redux-button">Redux</Button>
                    <Button onClick={() => {
                        this.props.getPostsByCategory('udacity')
                        }} color="primary" className="udacity-button">Udacity</Button>
                </div>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getPostsByCategory }, dispatch)
}

export default connect(undefined, mapDispatchToProps)(Menu)
