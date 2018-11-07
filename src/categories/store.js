import { createStore } from 'redux'

const categoriesStore = createStore({
    listOfCategories: []
})()

export { categoriesStore }
