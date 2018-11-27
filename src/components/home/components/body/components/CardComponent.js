import React, { Component } from 'react'
import { Form, FormGroup, Button, Collapse, Card, CardBody } from 'reactstrap'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './cardscomponent.scss'
import  { getAllPosts }  from 'posts/actions'
import { removePost, editPost } from '../../../../../posts/actions'



class CardComponent extends Component {

    constructor(){
        super()
        this.state = {
            isOpen: []
        }
        this.toggle = this.toggle.bind(this)
    }


    deletePost(id){
        this.props.deletePostAction(id)
    }

    componentDidUpdate() {
        if (this.state.isOpen.length < this.props.value.length) {
            const isOpen = [].concat(this.props.value.map(() => false))
            this.setState({ isOpen })
        }
    }

    toggle(targetIndex){
        this.setState(({ isOpen }) => {
            const newIsOpen = [].concat(isOpen).map((item, index) => {
                if (targetIndex === index) {
                    return !item
                }
                return item
            })
            return { isOpen: newIsOpen }
        })
    }

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <Form>
                    <div className="new-post-button">
                    <Link to={'/posts/create'}>
                        <Button color="secondary">Create new post</Button>
                    </Link>
                    </div>
                    <FormGroup>
                        <ol>
                            {this.props.value.length ? (this.props.value.map((element, index) =>
                                <li key={index} className="list-cards">
                                    <div className="cards-of-posts">
                                        <div className="edit-post-button">
                                        <Link to={`/posts/${element.id}`}>
                                            <Button size="sm" outline color="primary">detail</Button>
                                        </Link>
                                        </div>
                                        <Button onClick={() => this.deletePost(element.id)} className="delete-post-button" size="sm" outline color="primary">
                                            delete
                                        </Button>
                                        <div className="post-title-value">{element.title}</div>
                                        <div className="author-info-grp">
                                            <div className="post-author-title">posted by:</div>
                                            <div className="post-author-value">{element.author}</div>
                                            <div className="post-time-value">{element.timestamp}</div>
                                        </div>
                                        <div className="post-body-value">{element.body}</div>
                                        <Button className="comments-button" color="secondary" onClick={() => this.toggle(index)}>Comments</Button>
                                        <Collapse isOpen={this.state.isOpen[index]}>
                                            <Card>
                                                <CardBody>
                                                    {element.body}
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
        initialPostsAction: () => dispatch(getAllPosts()),
        deletePostAction:(id) =>  dispatch(removePost(id)),
        editPostAction:(id, post) =>  dispatch(editPost(id, post))
    }
}

function mapStateToProps(state){
    return {
        value: state.posts.value
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardComponent)

