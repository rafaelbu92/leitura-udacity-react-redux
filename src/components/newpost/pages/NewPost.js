import React, { Component, Fragment } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {Link} from 'react-router-dom'
import './newPost.scss'
import { connect } from 'react-redux'
import  { savePost }  from 'posts/actions'
import { routes } from '_config/routes'


class NewPost extends Component {

    constructor(){
        super()
        this.state = {
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

    submitForm(event) {
        event.preventDefault()
        this.props.savePostAction(this.state)
    }
    render(){
        return(
            <Fragment>
                <div className="header-post">
                    Crie seu post!!
                </div>
                <div className="container-new-post">
                    <Form onSubmit={this.submitForm}>
                        <FormGroup>
                            <Label>Título do post</Label>
                            <Input onChange={this.handleTitleChanges}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Autor</Label>
                            <Input onChange={this.handleAuthorChanges}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Categoria</Label>
                            <Input type="select" name="select" id="exampleSelect" onChange={this.handleCategoryChanges}>
                                <option>Selecione uma opção</option>
                                <option value="react">React</option>
                                <option value="redux">Redux</option>
                                <option value="udacity">Udacity</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Conteúdo do post</Label>
                            <Input type="textarea" name="text" id="exampleText" onChange={this.handleBodyChanges}/>
                        </FormGroup>
                        <Button type="submit">Postar</Button>
                        <Link  className="btn btn-secondary" to={routes.main}>
                            Cancelar
                        </Link>
                    </Form>
                </div>
            </Fragment>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        savePostAction: (post) => dispatch(savePost(post))
    }
}

function mapStateToProps(state){
    return {
        value: state.posts.value
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
