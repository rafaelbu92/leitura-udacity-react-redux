import React, { Component, Fragment } from 'react'
import { Form, FormGroup, Button } from 'reactstrap'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './cardscomponent.scss'
import  { getAllPosts }  from 'posts/actions'
import { removePost, editPost, getPostsByCategory, votePost } from '../../../../../posts/actions'
import { getAllCategories } from '../../../../../categories/actions'
import { getAllComments } from '../../../../../comments/actions'

let timeout = null

class CardComponent extends Component {

    deletePost(id){
        this.props.deletePostAction(id)
        this.props.getAllCategoriesAction()
        this.props.initialPostsAction()
    }

    votePost(id, option){
        clearTimeout(timeout)
        timeout = setTimeout(() => this.props.votePostAction(id, option), 250)
    }

    componentDidMount(){
        this.props.getAllCategoriesAction()
        this.props.initialPostsAction()
    }

    render() {
        const posts = this.filterList() // ---> looping
        return (
            <Fragment>
                <Link className="btn btn-primary udacity-button" to={`/`}>
                    All
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
                        <Button onClick={() => this.orderPosts()}>Order by vote numbers</Button>
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
                                            <div>number of comments</div>
                                            <div>{element.commentCount}</div>
                                            <div>vote numbers</div>
                                            <div>{element.voteScore}</div>
                                            <div className="author-info-grp">
                                                <div className="post-author-title">posted by:</div>
                                                <div className="post-author-value">{element.author}</div>
                                                <div className="post-time-value">{element.timestamp}</div>
                                            </div>
                                            <div className="post-body-value">{element.body}</div>
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

    orderPosts = () => {
        //this.props.getAllCommentsPerPostAction(id)
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
        votePostAction:(id, option) => dispatch(votePost(id, option)),
        getAllCommentsPerPostAction:(id) => dispatch(getAllComments(id))
    }
}

function mapStateToProps(state){
    return {
        post: state.posts.value,
        category: state.categories.value,
        comments: state.comments.value
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardComponent)
