import React, { Component, Fragment } from 'react'
import { CardBody, Card, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import { Redirect} from 'react-router-dom'
import './detailPost.scss'
import { connect } from 'react-redux'
import { getPostById } from '../../../posts/actions'


class DetailPost extends Component {

    constructor(){
        super()
        this.state = {
            postEdited: false,
            postToEdit: {}
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
    }

    submitForm(event) {
        event.preventDefault()
        this.props.savePostAction(this.state)
        this.setState({ postEdited: true })
    }
    render(){
        console.log(this.props.match.params.id)
        if (this.state.postEdited) {
            return (<Redirect to={"/"} />)
        }else{
            return(
                <Fragment>
                    <div className="header-post">
                        Detalhamento do POST
                    </div>
                    <div className="container-detail-post">
                        <Card>
                            <CardBody>
                                <CardTitle>{}</CardTitle>
                                <CardSubtitle>{}</CardSubtitle>
                                <CardText>{}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </Fragment>
            )

        }
    }
}

function mapDispatchToProps(dispatch){
    return {
        getPostByIdAction: (id) => dispatch(getPostById(id))
    }
}

function mapStateToProps(state){
    return {
        value: state.posts.value
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPost)
