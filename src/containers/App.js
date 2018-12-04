import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NewPost from 'components/newpost/pages/NewPost'
import DetailPost from 'components/detailpost/pages/DetailPost'
import EditPost from 'components/editpost/pages/EditPost'
import CardComponent from '../components/home/components/body/components/CardComponent';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={CardComponent}/>
            <Route path="/posts/create" exact component={NewPost}/>
            <Route path="/posts/:id" exact component={DetailPost}/>
            <Route path="/posts/edit/:id" exact component={EditPost}/>
            <Route path="/:category" exact component={CardComponent}/>
        </Switch>
    </BrowserRouter>
)

export default App
