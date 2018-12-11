import React, { Component, Fragment } from 'react'
import { CardBody, Card, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { Link, Redirect} from 'react-router-dom'
import './detailComment.scss'
import { connect } from 'react-redux'
import { getCommentById, voteComment, deleteComment } from '../../../comments/actions'


let timeout = null;

class DetailComment extends Component {

    constructor(){
        super()
        this.state = {
            commentEdited: false,
            commentToEdit: {},
            isOpen: false
        }
        this.handleTitleChanges = this.handleTitleChanges.bind(this)
        this.handleAuthorChanges = this.handleAuthorChanges.bind(this)
        this.handleBodyChanges = this.handleBodyChanges.bind(this)
        this.handleCategoryChanges = this.handleCategoryChanges.bind(this)
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

    voteComment(id, option){
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            this.props.voteCommentAction(id, option)
            this.props.getCommentByIdAction(id)

        }, 250)
    }

    deleteComment(id){
        this.props.deleteCommentAction(id)
        this.setState({ commentEdited: true })
    }


    componentDidMount(){
        this.props.getCommentByIdAction(this.props.match.params.id)
    }

    submitForm(event) {
        event.preventDefault()
        this.props.saveCommentAction(this.state)
        this.setState({ commentEdited: true })
    }

    render(){
        console.log(this.props.comment)
        if (this.state.commentEdited) {
            return (<Redirect to={'/'} />)
        }else{
            return(
                <Fragment>
                    <div className="header-post">
                        Comment Details
                    </div>
                    <div className="container-detail-post">
                        <Card>
                            <Button onClick={() => this.deleteComment(this.props.comment.id)} className="delete-comment-button" size="sm" outline color="primary">
                                Delete
                            </Button>
                            <Button onClick={() => this.voteComment(this.props.comment.id,'upVote')} className="delete-comment-button" size="sm" outline color="primary">
                                Like COMMENT
                            </Button>
                            <Button onClick={() => this.voteComment(this.props.comment.id,'downVote')} className="delete-comment-button" size="sm" outline color="primary">
                                Unlike COMMENT
                            </Button>
                            <CardBody>
                                <CardTitle>
                                    <div>Author</div>
                                </CardTitle>
                                <CardSubtitle>{this.props.comment.author}</CardSubtitle>
                                <div>Body</div>
                                <div>{this.props.comment.body}</div>
                                <div>Score votes</div>
                                <div>{this.props.comment.voteScore}</div>
                            </CardBody>
                        </Card>
                        <Link className="btn btn-primary button" to={`/comments/edit/${this.props.comment.id}`}>
                            Edit
                        </Link>
                        <Link className="btn btn-primary button" to={`/`}>
                            Back
                        </Link>
                    </div>
                </Fragment>
            )

        }
    }

}

function mapDispatchToProps(dispatch){
    return {
        getCommentByIdAction: (id) => dispatch(getCommentById(id)),
        voteCommentAction:(id, option) => dispatch(voteComment(id, option)),
        deleteCommentAction:(id) => dispatch(deleteComment(id))
    }
}

function mapStateToProps(state){
    return {
        comment: state.comments.value
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailComment)
