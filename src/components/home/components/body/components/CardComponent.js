import React, { Component } from 'react'
import { Form, FormGroup, Button, Collapse, Card, CardBody } from 'reactstrap'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './cardscomponent.scss'
import  { getAllPosts }  from 'posts/actions'
import { routes } from '../../../../../_config/routes'


class CardComponent extends Component {

    constructor(){
        super()
        this.state = {
            isOpen: false
        }
        this.toggle = this.toggle.bind(this)
    }

    componentDidMount(){
        this.props.initialPosts()
    }

    toggle(){
        this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
    }

    render() {
        const { isOpen } = this.state
        return (
            <div className="container">
                <Form>
                    <div className="new-post-button">
                        <Link to={routes.createPost}>
                            <Button color="secondary">Create new post</Button>
                        </Link>
                    </div>
                    <FormGroup>
                        <ol>
                            {this.props.value.length ? (this.props.value.map((element, index) =>
                                <li key={index} className="list-cards">
                                    <div className="cards-of-posts">
                                        <div className="post-title-value">{element.title}</div>
                                        <div className="author-info-grp">
                                            <div className="post-author-title">posted by:</div>
                                            <div className="post-author-value">{element.author}</div>
                                            <div className="post-time-value">{element.timestamp}</div>
                                        </div>
                                        <div className="post-body-value">{element.body}</div>
                                        <Button className="comments-button" color="secondary" onClick={this.toggle}>Comments</Button>
                                        <Collapse isOpen={isOpen}>
                                            <Card>
                                                <CardBody>
                                                    comments
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </div>
                                </li>
                            )):(<div className="list-cards"><div className="cards-of-posts">There are no posts of this category available. You can be the first one to post something in this category :D</div></div>)}
                        </ol>
                    </FormGroup>
                </Form>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch){
    return {
        initialPosts: () => dispatch(getAllPosts())
    }
}

function mapStateToProps(state){
    return {
        value: state.posts.value
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardComponent)

