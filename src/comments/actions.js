import { createAction } from 'utils/actions'
import { actions } from 'constants/ActionTypes'

const edit = createAction(actions.COMMENTS_EDIT)
const remove = createAction(actions.COMMENTS_REMOVE)
const save = createAction(actions.COMMENTS_SAVE)
const vote = createAction(actions.COMMENTS_VOTE)
const getAll = createAction(actions.COMMENTS_GET_ALL)
const requestEdit = createAction(actions.COMMENTS_REQUEST_EDIT)
const requestGetAll = createAction(actions.COMMENTS_REQUEST_GET_ALL)
const requestRemove = createAction(actions.COMMENTS_REQUEST_REMOVE)
const requestSave = createAction(actions.COMMENTS_REQUEST_SAVE)
const requestVote = createAction(actions.COMMENTS_REQUEST_VOTE)

export { edit,
         remove,
         save,
         vote,
         getAll,
         requestEdit,
         requestGetAll,
         requestRemove,
         requestSave,
         requestVote }
