import history from './history'
import { Provider } from 'react-redux'
import { store } from './store'


const systemRoutes = combineROutes(

    )


const routes = combineLinkedRoutes(systemRoutes)

const Routes = () => (
    <Provider store={store}>

    </Provider>
)
