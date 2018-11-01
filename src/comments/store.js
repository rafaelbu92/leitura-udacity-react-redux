import { List, Map, Record } from 'immutable'

const store = Record({
    list: List(),
    loading: false,
    comment: Map()
})()

export { store }
