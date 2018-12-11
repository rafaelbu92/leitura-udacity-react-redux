import React, { Component, Fragment } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect, Link } from 'react-router-dom'
import './editComment.scss'
import { connect } from 'react-redux'
import { getCommentById, editComment } from '../../../comments/actions'


class EditComment extends Component {

    constructor(){
        super()
        this.state = {
            commentEdited: false,
            id: '',
            title: '',
            author: '',
            body: '',
            category: '',
            timestamp: null,
            voteScore: null,
            deleted: undefined,
            commentCounts: null
        }
        this.handleTitleChanges = this.handleTitleChanges.bind(this)
        this.handleAuthorChanges = this.handleAuthorChanges.bind(this)
        this.handleBodyChanges = this.handleBodyChanges.bind(this)
        this.handleCategoryChanges = this.handleCategoryChanges.bind(this)
        this.submitEditedForm = this.submitEditedForm.bind(this)
    }

    handleTitleChanges(event) {
        this.setState({ title: event.target.value })
    }

    handleAuthorChanges(event) {
        this.setState({ author: event.target.value })
    }

    handleBodyChanges(event) {
        this.setState({ body: event.target.value })
    }

    handleCategoryChanges(event) {
        this.setState({ category: event.target.value })
    }

    componentDidMount(){
        this.props.getCommentByIdAction(this.props.match.params.id)
    }

    submitEditedForm(event) {
        event.preventDefault()
        this.props.editCommentAction(this.state.id, this.state)
        this.setState({ CommentEdited: true })
    }

    update(edittedCategory){
        this.setState(
            {category: edittedCategory}
        )
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.comment.title !== undefined){
            if((prevState.title !== '' && nextProps.post.title !== prevState.title)
                || (prevState.author !== '' && nextProps.post.author !== prevState.author)
                || (prevState.body !== '' && nextProps.post.body !== prevState.body)){
                return{
                    title:prevState.title,
                    author:prevState.author,
                    body:prevState.body
                }
            }
            return{
                id:nextProps.comment.id,
                timestamp:nextProps.comment.timestamp,
                title:nextProps.comment.title,
                author:nextProps.comment.author,
                body:nextProps.comment.body,
                voteScore:nextProps.comment.voteScore
            }
        }

    }

    render(){
        console.log('edit comment', this.props)
        console.log('edit comment', this.state)
        if (this.state.commentEdited) {
            return (<Redirect to={'/'} />)
        }else{
            return(
                <Fragment>
                    <div className="header-post">
                        edição do COMMENT
                    </div>
                    <div className="container-detail-post">
                        <Form onSubmit={this.submitEditedForm}>
                            <FormGroup>
                                <Label>Título</Label>
                                <Input type="text" onChange={this.handleTitleChanges} defaultValue={this.state.title}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Autor</Label>
                                <Input type="text" onChange={this.handleAuthorChanges} defaultValue={this.state.author}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Conteúdo do Comment</Label>
                                <Input type="text" onChange={this.handleBodyChanges} defaultValue={this.state.body}/>
                            </FormGroup>
                            <Button type="submit">Finalizar edição</Button>
                            <Link className="btn btn-secondary udacity-button" to={'/'}>Voltar</Link>
                        </Form>
                      </div>
                </Fragment>
            )

        }
    }
}

function mapDispatchToProps(dispatch){
    return {
        editCommentAction: (id, comment) => dispatch(editComment(id, comment)),
        getCommentByIdAction: (id) => dispatch(getCommentById(id))
    }
}

function mapStateToProps(state){
    return {
        comment: state.comments.value
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditComment)
