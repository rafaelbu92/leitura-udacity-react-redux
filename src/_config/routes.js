import React from 'react'
import { Route, Switch } from 'react-router'
import { Provider } from 'react-redux'
import {ConnectedRouter} from 'connected-react-router/immutable'


import { combineLinkedRoutes, combineRoutes } from 'utils/routes'
import  {newpostRoutes} from 'components/newpost/routes'
import {appRoutes} from 'containers/routes'


import {history} from './history'
import {store} from './store'


const systemRoutes = combineRoutes(
    appRoutes,
    newpostRoutes
)

const routes = combineLinkedRoutes(systemRoutes)

const Routes = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                {systemRoutes.map((route, index) => <Route { ...route } exact key={ index }/>)}
            </Switch>
        </ConnectedRouter>
    </Provider>
)

export { routes }
export default Routes
