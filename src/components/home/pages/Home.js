import React, { Component } from 'react'
import { Navbar } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getAll} from 'categories/actions'

class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <Navbar>
                <div onClick={this.props.getAll}>hello</div>
                {this.props.category.map((i,index) => (<div key={index}>{i}</div>))}
            </Navbar>
        )
    }

}

function mapStateToProps(state){
    return {
        category: state.category
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getAll }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
