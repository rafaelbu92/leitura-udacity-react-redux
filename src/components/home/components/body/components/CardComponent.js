import React, { Component } from 'react'
import { Form, FormGroup } from 'reactstrap'
import { connect } from 'react-redux'
import './cardscomponent.scss'


class CardComponent extends Component {
    render() {
        console.log('card', this.props.value)
        return (
            <Form>
                <FormGroup>
                    <ol>
                        {this.props.value && this.props.value.map((element, key) =>
                            <li className="list-cards" id={key}>
                                <div className="cards-of-posts">
                                    <div className="post-time">{element.timestamp}</div>
                                    <div className="post-author">{element.author}</div>
                                    <div className="post-title">{element.title}</div>
                                    <div className="post-body">{element.body}</div>
                                </div>
                            </li>
                        )}
                    </ol>
                </FormGroup>
            </Form>
        )
    }

}



function mapStateToProps(state){
    return {
        value: state.posts.value
    }
}

export default connect(mapStateToProps)(CardComponent)

