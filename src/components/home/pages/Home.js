import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllCategories } from 'categories/actions'
import Menu from '../components/menu/Menu'
import Body from '../components/body/Body'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
                <Body/>
            </Fragment>
        )
    }

}


function mapDispatchToProps(dispatch){
    return bindActionCreators({ getAllCategories }, dispatch)
}

export default connect(mapDispatchToProps)(Home)
