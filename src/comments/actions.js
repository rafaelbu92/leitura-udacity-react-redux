import { createAction } from 'utils/actions'
import { actions } from 'constants/ActionTypes'

const edit = createAction(actions.COMMENTS_EDIT)
const remove = createAction(actions.COMMENTS_REMOVE)
