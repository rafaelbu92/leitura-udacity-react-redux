import BackAPI from 'resources/backAPI.ts'

const categoriesStore = (state = [], action) => {
    switch(ReduxActions.type) {
        case 'CATEGORIES_GET_ALL':
            const allCategories = BackAPI.getAllCategories()
            state = allCategories
            return state
        default:
            return state
    }
}
