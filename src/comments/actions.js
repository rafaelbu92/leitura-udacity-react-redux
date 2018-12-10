import * as BackAPI from 'resources/backCommentAPI'

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

function getAllComments(id) {
    return disptach => {
        BackAPI.getAllComments(id).then( resp => {
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

