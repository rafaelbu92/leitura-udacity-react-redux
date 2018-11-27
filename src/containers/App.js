import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from 'components/home/pages/Home'
import NewPost from 'components/newpost/pages/NewPost'
import DetailPost from 'components/detailpost/pages/DetailPost'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/posts/create" exact component={NewPost}/>
            <Route path="/posts/:id" exact component={DetailPost}/>
        </Switch>
    </BrowserRouter>
)

export default App
