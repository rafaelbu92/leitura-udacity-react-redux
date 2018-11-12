import * as BackAPI from 'resources/backAPI'

const CATEGORIES_GET_ALL = 'CATEGORIES_GET_ALL'

const getAllCategories = () => {
    let result = new Promise(BackAPI.getAllCategories()).resolve()
    return result
}

export function getAll() {
    return {
        type: CATEGORIES_GET_ALL,
        payload: getAllCategories()
    }
}



