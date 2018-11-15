import React, { Component } from 'react'
import { Form, FormGroup } from 'reactstrap'
import { connect } from 'react-redux'
import './cardscomponent.scss'


class CardComponent extends Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <ol>
                        {this.props.value.length ? (this.props.value.map((element, index) =>
                            <li key={index} className="list-cards">
                                <div className="cards-of-posts">
                                    <div className="post-time">{element.timestamp}</div>
                                    <div className="post-author">{element.author}</div>
                                    <div className="post-title">{element.title}</div>
                                    <div className="post-body">{element.body}</div>
                                </div>
                            </li>
                        )):(<div className="cards-of-posts">There are no posts of this category available. You can be the first one to post something in this category :D</div>)}
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

