import * as BackAPI from 'resources/backPostAPI'
// const POSTS_EDIT = 'POSTS_EDIT'
// const POSTS_SAVE = 'POSTS_SAVE'
// const POSTS_VOTE = 'POSTS_VOTE'
// const POSTS_REMOVE = 'POSTS_REMOVE'
// const POSTS_GET_ALL = 'POSTS_GET_ALL'
// const POSTS_NEW_COMMENT = 'POSTS_NEW_COMMENT'
// const POSTS_REMOVE_COMMENT = 'POSTS_REMOVE_COMMENT'


// const save = {type:POSTS_SAVE}
// const edit = {type:POSTS_EDIT}
// const vote = {type:POSTS_VOTE}
// const remove = {type:POSTS_REMOVE}

function removePost(id) {
    return disptach => {
        BackAPI.removePost(id).then( resp => {
            disptach({
                type: 'POSTS_REMOVE',
                payload: resp
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

export { getAllPosts, getPostsByCategory, savePost, removePost, editPost, getPostById }

// const getAllByCategory = {type:POSTS_GET_ALL_BY_CATEGORY}
// const newComment = {type:POSTS_NEW_COMMENT}
// const removeComment = {type:POSTS_REMOVE_COMMENT}



