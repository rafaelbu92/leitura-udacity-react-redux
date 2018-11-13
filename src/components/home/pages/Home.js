import React, { Component } from 'react'
import { Navbar } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAll } from 'categories/actions'
import PropTypes from 'prop-types'

class Home extends Component {
    render() {
        return (
            <Navbar>
                <div onClick={this.props.getAll}>hello</div>
                <div>
                    {this.props.value.categories && this.props.value.categories.map((element, index) => (
                        <div key={index}>
                            {element.name}
                        </div>
                    ))}
                </div>
            </Navbar>
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
