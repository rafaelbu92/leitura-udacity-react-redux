import history from './history'
import { Provider } from 'react-redux'
import { store } from './store'
import { ConnectedRouter } from 'connected-react-router/lib/immutable';


const systemRoutes = combineROutes(

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
