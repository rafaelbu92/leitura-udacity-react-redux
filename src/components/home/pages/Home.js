import React, { Component, Fragment } from 'react'
import { Navbar } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAll } from 'categories/actions'

class Home extends Component {
    render() {
        console.log(this.props)
        return (
        <div>
            <Fragment>
                <div onClick={this.props.getAll}>
                    hello
                </div>
            </Fragment>
            <Fragment>
                <Navbar>
                    {this.props.value && this.props.value.map((element, index) => (
                        <div key={index}>
                            {element.name}
                        </div>
                    ))}
                </Navbar>
            </Fragment>
        </div>
        )
    }

}


function mapStateToProps(state){
    return {
        value: state.category.value
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getAll }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
