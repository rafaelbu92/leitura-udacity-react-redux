import React, { Component, Fragment } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import './newComment.scss'
import { connect } from 'react-redux'
import { addComment } from '../../../comments/actions'


class NewComment extends Component {

    constructor() {
        super()
        this.state = {
            commentPublished: false,
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

    componentDidMount() {
    }

    submitForm(event) {
        event.preventDefault()
        this.props.saveCommentAction(this.state, this.props.match.params.id)
        this.setState({ commentPublished: true })
    }
    render() {
        if (this.state.commentPublished) {
            return (<Redirect to={`/${this.props.match.params.category}/${this.props.match.params.id}`} />)
        } else {
            return(<Fragment>
                <div className="header-post">
                    Create COMMENT
                </div>
                <div className="container-new-post">
                    <Form onSubmit={this.submitForm}>
                        <FormGroup>
                            <Label>Comment Title</Label>
                            <Input onChange={this.handleTitleChanges}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Author</Label>
                            <Input onChange={this.handleAuthorChanges}>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Comment body</Label>
                            <Input type="textarea" name="text" id="exampleText" onChange={this.handleBodyChanges}>
                            </Input>
                        </FormGroup>
                        <Button type="submit">Create</Button>
                        <Link to={`/${this.props.match.params.category}/${this.props.match.params.id}`}>
                            <Button>Cancel</Button>
                        </Link>
                    </Form>
                </div>
            </Fragment>)
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveCommentAction: (comment, idPost) => dispatch(addComment(comment, idPost))
    }
}

function mapStateToProps(state) {
    return {
        comment: state.comments.value
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewComment)
