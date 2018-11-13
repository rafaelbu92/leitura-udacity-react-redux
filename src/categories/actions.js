import axios from 'axios'

const CATEGORIES_GET_ALL = 'CATEGORIES_GET_ALL'

const api = 'http://localhost:3001/'


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export function getAll() {
    return disptach => {
        fetch(`${api}categories`, { headers })
        .then(res => res.json(res))
        .then(
            resp => disptach({
                type: 'CATEGORIES_GET_ALL',
                payload: resp
            })
        )
    }
}



