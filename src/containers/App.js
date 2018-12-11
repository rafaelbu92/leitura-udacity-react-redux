import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NewPost from 'components/newpost/pages/NewPost'
import NewComment from 'components/newcomment/pages/NewComment'
import DetailPost from 'components/detailpost/pages/DetailPost'
import DetailComment from 'components/detailcomment/pages/DetailComment'
import EditPost from 'components/editpost/pages/EditPost'
import EditComment from 'components/editcomment/pages/EditComment'
import CardComponent from '../components/home/components/body/components/CardComponent'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={CardComponent}/>
            <Route path="/posts/create" exact component={NewPost}/>
            <Route path="/comments/create/:id" exact component={NewComment}/>
            <Route path="/:category/:id" exact component={DetailPost}/>
            <Route path="/posts/edit/:id" exact component={EditPost}/>
            <Route path="/comments/:id" exact component={EditComment}/>
            <Route path="/:category" exact component={CardComponent}/>
        </Switch>
    </BrowserRouter>
)

export default App
