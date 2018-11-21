import React, { Component } from 'react'
import { Form, FormGroup, Button, Collapse, Card, CardBody } from 'reactstrap'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './cardscomponent.scss'
import  { getAllPosts }  from 'posts/actions'
import { routes } from '../../../../../_config/routes'


class CardComponent extends Component {

    constructor(){
        super()
        this.state = {
            isOpen: []
        }
        this.toggle = this.toggle.bind(this)
    }

    componentDidMount(){
        this.props.initialPosts()
    }

    componentDidUpdate() {
        if (this.state.isOpen.length < this.props.value.length) {
            const isOpen = [].concat(this.props.value.map(() => false))
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
        return (
            <div className="container">
                <Form>
                    <div className="new-post-button">
                        <Link to={routes.createPost}>
                            <Button color="secondary">Create new post</Button>
                        </Link>
                    </div>
                    <FormGroup>
                        <ol>
                            {this.props.value.length ? (this.props.value.map((element, index) =>
                                <li key={index} className="list-cards">
                                    <div className="cards-of-posts">
                                        <div className="post-title-value">{element.title}</div>
                                        <div className="author-info-grp">
                                            <div className="post-author-title">posted by:</div>
                                            <div className="post-author-value">{element.author}</div>
                                            <div format="DD/MM/YYYY" className="post-time-value">{element.timestamp}</div>
                                        </div>
                                        <div className="post-body-value">{element.body}</div>
                                        <Button className="comments-button" color="secondary" onClick={() => this.toggle(index)}>Comments</Button>
                                        <Collapse isOpen={this.state.isOpen[index]}>
                                            <Card>
                                                <CardBody>
                                                    <p>aaaaaaaaaaaaaa</p>
                                                    <p>aaaaaaa</p>
                                                    <p>aaaaaaaaaaaa</p>
                                                    <p>aaaaaaaaaa</p>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </div>
                                </li>
                            )):(<div className="list-cards"><div className="cards-of-posts">There are no posts of this category available. You can be the first one to post something in this category :D</div></div>)}
                        </ol>
                    </FormGroup>
                </Form>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch){
    return {
        initialPosts: () => dispatch(getAllPosts())
    }
}

function mapStateToProps(state){
    return {
        value: state.posts.value
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardComponent)

