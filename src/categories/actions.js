import * as BackAPI from 'resources/backAPI'


export function getAll() {
    return disptach => {
        BackAPI.getAllCategories().then(
            resp => disptach({
                type: 'CATEGORIES_GET_ALL',
                payload: resp
            }
        ))
    }
}



