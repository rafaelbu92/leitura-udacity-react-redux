import {createAction as reduxAction} from 'redux-actions'

import { config } from '_config/config'

const createAction = name => reduxAction(`${config.app.namespace.toUpperCase()}_${name.toUpperCase()}`)
const getAction = name => `${config.app.namespace.toUpperCase()}_${name.toUpperCase()}`

export { createAction, getAction }
