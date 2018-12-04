import React, { Component, Fragment } from 'react'
import { Form, FormGroup, Button, Collapse, Card, CardBody } from 'reactstrap'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './cardscomponent.scss'
import  { getAllPosts }  from 'posts/actions'
import { removePost, editPost, getPostsByCategory, votePost } from '../../../../../posts/actions'
import { getAllCategories } from '../../../../../categories/actions'



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
        this.props.getAllCategoriesAction()
        this.props.initialPostsAction()
    }

    votePost(id, option){
        this.props.votePostAction(id, option)
        console.log(this.props)
    }

    componentDidMount(){
        this.props.getAllCategoriesAction()
        this.props.initialPostsAction()
    }

    componentDidUpdate() {
        if (this.state.isOpen.length < this.props.post.length) {
            const isOpen = [].concat(this.props.post.map(() => false))
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
        const posts = this.filterList() // ---> looping
        const { voteScore } = this.props
        return (
            <Fragment>
                <Link className="btn btn-primary udacity-button" to={`/`}>
                    Todos
                </Link>
                <div className="menu-main">
                    <div className="group-beuutton">
                        <ul>
                            {this.props.category.categories ? this.props.category.categories.map((element, index) =>
                            <li key={index}>
                                <Link className="btn btn-primary udacity-button" to={`${element.path}`}>
                                    {element.name}
                                </Link>
                            </li>
                            ):(<div>Failed bringing button</div>)}
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <Form>
                        <div className="new-post-button">
                            <Link className="btn btn-secondary udacity-button" to={'/posts/create'}>
                                Create new post
                            </Link>
                        </div>
                        <FormGroup>
                            <ol>
                                {posts.length ? posts.map((element, index) =>
                                    <li key={index} className="list-cards">
                                        <div className="cards-of-posts">
                                            <div className="edit-post-button">
                                                <Link className="btn btn-primary udacity-button" to={`/posts/${element.id}`}>
                                                    detail
                                                </Link>
                                            </div>
                                            <Button onClick={() => this.deletePost(element.id)} className="delete-post-button" size="sm" outline color="primary">
                                                delete
                                            </Button>
                                            <Button onClick={() => this.votePost(element.id,'upVote')} className="delete-post-button" size="sm" outline color="primary">
                                                UpVote
                                            </Button>
                                            <Button onClick={() => this.votePost(element.id,'downVote')} className="delete-post-button" size="sm" outline color="primary">
                                                DownVote
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
                                ):(<div className="list-cards"><div className="cards-of-posts">There are no posts of this category available. You can be the first one to post something in this category :D</div></div>)}
                            </ol>
                        </FormGroup>
                    </Form>
                </div>
            </Fragment>
        )
    }

    filterList = () => {
        const { match, post = [] } = this.props
        const { params: { category = '' }} = match
        if (category.length && post.length) {
            return post.filter(post => post.category === category)
        }
        return post
    }

}


function mapDispatchToProps(dispatch){
    return {
        getAllCategoriesAction: () => dispatch(getAllCategories()),
        initialPostsAction: () => dispatch(getAllPosts()),
        deletePostAction:(id) =>  dispatch(removePost(id)),
        editPostAction:(id, post) =>  dispatch(editPost(id, post)),
        getPostsByCategoryAction: (category) => dispatch(getPostsByCategory(category)),
        votePostAction:(id, option) => dispatch(votePost(id, option))
    }
}

function mapStateToProps(state){
    return {
        post: state.posts.value,
        category: state.categories.value
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardComponent)
