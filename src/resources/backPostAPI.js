const api = 'http://localhost:3001/'


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': 'auth'
}

const getAllPosts = () => {
    return fetch(`${api}posts`, { headers })
        .then(res => res.json())
}

const getPostsByCategory = category =>{
    return fetch(`${api}${category}/posts`, { headers })
        .then((res) => res.json())}

export { getAllPosts, getPostsByCategory }
