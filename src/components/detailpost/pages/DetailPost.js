import React, { Component, Fragment } from 'react'
import { CardBody, Card, CardTitle, CardSubtitle, Collapse, Button } from 'reactstrap'
import { Link, Redirect} from 'react-router-dom'
import './detailPost.scss'
import { connect } from 'react-redux'
import { getPostById, votePost } from '../../../posts/actions'
import {getAllComments} from '../../../comments/actions'


let timeout = null;

class DetailPost extends Component {

    constructor(){
        super()
        this.state = {
            postEdited: false,
            postToEdit: {},
            isOpen: false
        }
        this.handleTitleChanges = this.handleTitleChanges.bind(this)
        this.handleAuthorChanges = this.handleAuthorChanges.bind(this)
        this.handleBodyChanges = this.handleBodyChanges.bind(this)
        this.handleCategoryChanges = this.handleCategoryChanges.bind(this)
        this.toggle = this.toggle.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    handleTitleChanges(event){
        this.setState({title:event.target.value})
    }

    handleAuthorChanges(event){
        this.setState({author:event.target.value})
    }

    handleBodyChanges(event){
        this.setState({body:event.target.value})
    }

    handleCategoryChanges(event){
        this.setState({category:event.target.value})
    }

    votePost(id, option){
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            this.props.votePostAction(id, option)
            this.props.getPostByIdAction(id)

        }, 250)
    }


    componentDidMount(){
        this.props.getPostByIdAction(this.props.match.params.id)
        this.props.getAllCommentsAction(this.props.match.params.id)
    }

    submitForm(event) {
        event.preventDefault()
        this.props.savePostAction(this.state)
        this.setState({ postEdited: true })
    }

    render(){
        console.log(this.props)
        if (this.state.postEdited) {
            return (<Redirect to={'/'} />)
        }else{
            return(
                <Fragment>
                    <div className="header-post">
                        Post Details
                    </div>
                    <div className="container-detail-post">
                        <Card>
                            <Button onClick={() => this.votePost(this.props.post.id,'upVote')} className="delete-post-button" size="sm" outline color="primary">
                                UpVote
                            </Button>
                            <Button onClick={() => this.votePost(this.props.post.id,'downVote')} className="delete-post-button" size="sm" outline color="primary">
                                DownVote
                            </Button>
                            <CardBody>
                                <CardTitle>
                                    <div>Title</div>
                                </CardTitle>
                                <CardTitle>{this.props.post.title}</CardTitle>
                                <CardSubtitle>
                                    <div>Author</div>
                                </CardSubtitle>
                                <CardSubtitle>{this.props.post.author}</CardSubtitle>
                                <div>Body</div>
                                <div>{this.props.post.body}</div>
                                <div>Score votes</div>
                                <div>{this.props.post.voteScore}</div>
                                <div>Comment numbers</div>
                                <div>{this.props.post.commentCount}</div>
                            </CardBody>
                        </Card>
                        <Button className="comments-button" color="secondary" onClick={() => this.toggle()}>Comments</Button>
                            <Collapse isOpen={this.state.isOpen}>
                                <Card>
                                    <CardBody>
                                        <ol>
                                            {this.props.comments.length ? this.props.comments.map((comment, index) =>
                                                <li key={index} className="list-comments">
                                                    <div>{comment.timestamp}</div>
                                                    <div>{comment.author}</div>
                                                    <div>{comment.body}</div>
                                                    <div>{comment.voteScore}</div>
                                                </li>
                                            ):(<div className="list-comments"><div className="cards-of-posts">There are no commnets yet in this post :(</div></div>)}
                                        </ol>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        <Link className="btn btn-primary udacity-button" to={`/posts/edit/${this.props.post.id}`}>
                            Editar
                        </Link>
                        <Link className="btn btn-primary udacity-button" to={`/`}>
                            Voltar
                        </Link>
                    </div>
                </Fragment>
            )

        }
    }

    toggle = () => {
        this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
    }

}

function mapDispatchToProps(dispatch){
    return {
        getPostByIdAction: (id) => dispatch(getPostById(id)),
        getAllCommentsAction:(id) => dispatch(getAllComments(id)),
        votePostAction:(id, option) => dispatch(votePost(id, option))
    }
}

function mapStateToProps(state){
    return {
        post: state.posts.value,
        comments: state.comments.value
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPost)
