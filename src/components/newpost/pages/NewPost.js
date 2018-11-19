import React, { Component, Fragment } from 'react'
import { Form, FormGroup, Label,Input, Button } from 'reactstrap'
import './newPost.scss'
import { connect } from 'react-redux'


class NewPost extends Component {
    render(){
        return(
            <Fragment>
                <div className="header-post">
                    Crie seu post!!
                </div>
                <div className="container-new-post">
                    <Form>
                        <FormGroup>
                            <Label>Título do post</Label>
                            <Input/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Autor</Label>
                            <Input/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Categoria</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>React</option>
                                <option>Redux</option>
                                <option>Udacity</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Conteúdo do post</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                        <Button>Postar</Button>
                        <Button>Cancelar</Button>
                    </Form>
                </div>
            </Fragment>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {

    }
}

function mapStateToProps(state){
    return {
        value: state.posts.value
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
