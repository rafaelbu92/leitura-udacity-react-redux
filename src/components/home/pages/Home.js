import React, { Component } from 'react'
import MainPage from '../components/mainpage/MainPage'
import Filters from '../components/filters/Filters'
import { Navbar } from 'reactstrap'
import { connect } from 'react-redux'
import * as backAPI from '../../../resources/backAPI'

class Home extends Component {

    componentDidMount(){
        console.log(this.props)
    }

    render() {
        return (
            <Navbar>
                <div></div>
            </Navbar>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    listOfCategories: () => dispatch(backAPI.getAllCategories())
  })

const mapStateToProps = (state, props) => ({
    listOfCategories: state.listOfCategories
  })
export default connect(mapDispatchToProps, mapStateToProps)(Home)
