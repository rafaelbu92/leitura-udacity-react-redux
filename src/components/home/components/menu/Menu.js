import { Button } from 'reactstrap'
import React, { Component } from 'react'
import './menu.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  { getByCategory, getAll }  from 'posts/actions'


class Menu extends Component {
    render() {
        return (
            <div className="menu-main">
                <div className="group-button">
                    <Button onClick={this.props.getAll} color="secondary" className="react-button">React</Button>
                    <Button onClick={this.props.getByCategory('Redux')} color="info" className="redux-button">Redux</Button>
                    <Button onClick={this.props.getByCategory('Udacity')} color="primary" className="udacity-button">Udacity</Button>
                </div>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getByCategory, getAll }, dispatch)
}

export default connect(undefined, mapDispatchToProps)(Menu)
