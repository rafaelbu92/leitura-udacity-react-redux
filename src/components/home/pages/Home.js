import React, { Component, Fragment } from 'react'
import MainPage from '../components/mainpage/MainPage'
import Filters from '../components/filters/Filters'

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            comments:[],
            categories:['React', 'Redux', 'Udacity']
        }
    }

    componentDidMount(){
        const comments = this.getComments()
        const categories = this.getCategories()
        this.setState({comments, categories})
    }

    render() {
        const { comments, categories } = this.state
        return (
            <Fragment>
                <Filters categories={categories}/>
                <MainPage comments={comments}/>
            </Fragment>
        )
    }

    async getComments(){

    }

    async getCategories(){

    }
}

export default Home
