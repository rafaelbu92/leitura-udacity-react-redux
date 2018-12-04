import React, { Component, Fragment } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect, Link } from 'react-router-dom'
import './editPost.scss'
import { connect } from 'react-redux'
import { getPostById, editPost } from '../../../posts/actions'


class EditPost extends Component {

    constructor(){
        super()
        this.state = {
            postEdited: false,
            title: '',
            author: '',
            body: '',
            category: ''
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

    componentDidMount(){
        this.props.getPostByIdAction(this.props.match.params.id)
    }

    submitForm(event) {
        event.preventDefault()
        this.props.editPostAction(this.state)
        this.setState({ postEdited: true })
    }
    render(){
        console.log(this.props.post.title)
        if (this.state.postEdited) {
            return (<Redirect to={'/'} />)
        }else{
            return(
                <Fragment>
                    <div className="header-post">
                        edição do POST
                    </div>
                    <div className="container-detail-post">
                        <Form  onSubmit={this.submitForm}>
                            <FormGroup>
                                <Label>Título do post</Label>
                                <Input onChange={this.handleTitleChanges}>{this.props.post.title}</Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Autor</Label>
                                <Input onChange={this.handleAuthorChanges}>{this.props.post.author}</Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Conteúdo do Post</Label>
                                <Input onChange={this.handleAuthorChanges}>{this.props.post.body}</Input>
                            </FormGroup>
                        </Form>
                        <Button type="submit">Finalizar edição</Button>
                        <Link className="btn btn-secondary udacity-button" to={'/'}>Voltar</Link>
                    </div>
                </Fragment>
            )

        }
    }
}

function mapDispatchToProps(dispatch){
    return {
        editPostAction: (id, post) => dispatch(editPost(id, post)),
        getPostByIdAction: (id) => dispatch(getPostById(id))
    }
}

function mapStateToProps(state){
    return {
        post: state.posts.post
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
