import * as BackAPI from 'resources/backCommentAPI'

function voteComment(id, option){
    return (disptach, getState) => {
        BackAPI.voteComment(id, option).then(resp => {
            const { comments } = getState()
            const allComments = [].concat(comments.value)
            const commentIndex = allComments.findIndex(comment => comment.id === resp.id)
            if (commentIndex >= 0) {
                allComments.splice(commentIndex, 1, resp)
                disptach({
                    type: 'COMMENTS_VOTE',
                    payload: { allComments, comment: resp }
                })
            }
        })
    }
}

function deleteComment(id) {
    return (disptach, getState) => {
        BackAPI.deleteComment(id).then(resp => {
            const { comments } = getState()
            const allComments = [].concat(comments.value)
            const commentIndex = allComments.findIndex(comment => comment.id === resp.id)
            if (commentIndex >= 0) {
                allComments.splice(commentIndex, 1, resp)
                disptach({
                    type: 'COMMENTS_REMOVE',
                    payload: { allComments, comment: resp }
                })
            }
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


function addComment(comment, idPost) {
    return (disptach) => {
        BackAPI.addComment(comment, idPost).then( resp => {
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

