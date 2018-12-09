import * as BackAPI from 'resources/backCommentAPI'
const COMMENTS_EDIT = 'COMMENTS_EDIT'
const COMMENTS_REMOVE = 'COMMENTS_REMOVE'
const COMMENTS_SAVE = 'COMMENTS_SAVE'
const COMMENTS_VOTE = 'COMMENTS_VOTE'
const COMMENTS_GET_ALL = 'COMMENTS_GET_ALL'


const edit = { type: COMMENTS_EDIT }
const remove = { type: COMMENTS_REMOVE }
const save = { type: COMMENTS_SAVE }
const vote = { type: COMMENTS_VOTE }
const getAll = { type: COMMENTS_GET_ALL }

function voteComment(id, option){
    return disptach => {
        BackAPI.voteComment(id, option).then( resp => {
            disptach({
                type: 'COMMENTS_VOTE',
                payload: resp
            })
        })
    }
}

function deleteComment(id) {
    return disptach => {
        BackAPI.deleteComment(id).then( resp => {
            disptach({
                type: 'COMMENTS_REMOVE',
                payload: resp
            })
        })
    }
}

function getAllComments() {
    return disptach => {
        BackAPI.getAllComments().then( resp => {
            disptach({
                type: 'COMMENTS_GET_ALL',
                payload: resp
            })
        })
    }
}

function getCommentById(id){
    return disptach => {
        BackAPI.getComment(id).then( resp => {
            disptach({
                type: 'COMMENTS_GET_BY_ID',
                payload: resp
            })
        })
    }
}


function addComment(comment) {
    return disptach => {
        BackAPI.addComment(comment).then( resp => {
            disptach({
                type: 'COMMENTS_SAVE',
                payload: resp
            })
        })
    }
}

function editComment(id, comment) {
    return disptach => {
        BackAPI.editComment(id, comment).then( resp => {
            disptach({
                type: 'COMMENT_EDIT',
                payload: resp
            })
        })
    }
}

export { getAllComments, addComment, deleteComment, editComment, getCommentById, voteComment }

