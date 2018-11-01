import { createAction } from 'utils/actions'
import { actions } from 'constants/ActionsTypes'


const edit = createAction(actions.POSTS_EDIT)
const save = createAction(actions.POSTS_SAVE)
const vote = createAction(actions.POSTS_VOTE)
const remove = createAction(actions.POSTS_REMOVE)
const getAll = createAction(actions.POSTS_GET_ALL)
const getAllByCategory = createAction(actions.POSTS_GET_ALL_BY_CATEGORY)
const newComment = createAction(actions.POSTS_NEW_COMMENT)
const removeComment = createAction(actions.POSTS_REMOVE_COMMENT)
const requestEdit = createAction(actions.POSTS_REQUEST_EDIT)
const requestGetAll = createAction(actions.POSTS_REQUEST_GET_ALL)
const requestGetAllByCategory = createAction(actions.POSTS_REQUEST_GET_ALL_BY_CATEGORY)
const requestRemove = createAction(actions.POSTS_REQUEST_REMOVE)
const requestSave = createAction(actions.POSTS_REQUEST_SAVE)
const requestVote = createAction(actions.POSTS_REQUEST_VOTE)


export {
    edit,
    getAll,
    getAllByCategory,
    newComment,
    remove,
    removeComment,
    requestEdit,
    requestGetAll,
    requestGetAllByCategory,
    requestRemove,
    requestSave,
    requestVote,
    save,
    vote
}

