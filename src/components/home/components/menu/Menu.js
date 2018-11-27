import { Button } from 'reactstrap'
import React, { Component } from 'react'
import './menu.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  { getPostsByCategory, getAllPosts }  from 'posts/actions'


class Menu extends Component {
    render() {
        return (
            <div className="menu-main">
                <div className="group-button">
                    <Button onClick={() => {
                        this.props.getAllPosts()
                    }} color="primary" className="udacity-button">Todos</Button>
                    <Button onClick={() => {
                        this.props.getPostsByCategory('react')
                    }} color="primary" className="react-button">React</Button>
                    <Button onClick={() => {
                        this.props.getPostsByCategory('redux')
                    }} color="primary" className="redux-button">Redux</Button>
                    <Button onClick={() => {
                        this.props.getPostsByCategory('udacity')
                    }} color="primary" className="udacity-button">Udacity</Button>
                </div>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getPostsByCategory, getAllPosts }, dispatch)
}

export default connect(undefined, mapDispatchToProps)(Menu)
