import React from 'react'
import { Route, Switch } from 'react-router'
import history from './history'
import { Provider } from 'react-redux'
import { store } from './store'
import { combineLinkedRoutes, combineRoutes } from 'utils/routes'
import { ConnectedRouter } from 'connected-react-router/lib/immutable'


const systemRoutes = combineRoutes(

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
