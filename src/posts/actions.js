import * as BackAPI from 'resources/backPostAPI'

function votePost(id, option){
    return (disptach, getState) => {
        BackAPI.votePost(id, option).then(resp => {
            const { posts } = getState()
            const allPosts = [].concat(posts.value)
            const postIndex = allPosts.findIndex(post => post.id === resp.id)
            if (postIndex >= 0) {
                allPosts.splice(postIndex, 1, resp)
                disptach({
                    type: 'POSTS_VOTE',
                    payload: { allPosts, post: resp }
                })
            }
        })
    }
}

function removePost(id) {
    return (disptach, getState) => {
        BackAPI.removePost(id).then(resp => {
            disptach({
                type: 'POSTS_REMOVE',
                payload: getState().posts.value.filter(post => post.id !== resp.id)
            })
        })
    }
}

function getAllPosts() {
    return disptach => {
        BackAPI.getAllPosts().then( resp => {
            disptach({
                type: 'POSTS_GET_ALL',
                payload: resp
            })
        })
    }
}

function getPostById(id){
    return disptach => {
        BackAPI.getPostById(id).then( resp => {
            disptach({
                type: 'POSTS_GET_BY_ID',
                payload: resp
            })
        })
    }
}

function getPostsByCategory(category) {
    return disptach => {
        BackAPI.getPostsByCategory(category).then( resp => {
            disptach({
                type: 'POSTS_GET_ALL_BY_CATEGORY',
                payload: resp
            })
        })
    }
}

function savePost(post) {
    return disptach => {
        BackAPI.savePost(post).then( resp => {
            disptach({
                type: 'POSTS_SAVE',
                payload: resp
            })
        })
    }
}

function editPost(id, post) {
    return disptach => {
        BackAPI.editPost(id, post).then( resp => {
            disptach({
                type: 'POSTS_EDIT',
                payload: resp
            })
        })
    }
}

export { getAllPosts, getPostsByCategory, savePost, removePost, editPost, getPostById, votePost }




