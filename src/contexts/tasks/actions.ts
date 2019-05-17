import { Task } from './types'
import { Dispatch } from 'react'
import { TaskActionType, ActionTypes } from './reducer'

export const addTaskAction = (dispatch: Dispatch<TaskActionType>) => (
  task: Task
) => dispatch({ type: ActionTypes.ADD_TASK, payload: task })

export const toggleTaskAction = (dispatch: Dispatch<TaskActionType>) => (
  task: Task
) => dispatch({ type: ActionTypes.TOGGLE_TASK, payload: task })

export const clearTasksAction = (dispatch: Dispatch<TaskActionType>) => () =>
  dispatch({ type: ActionTypes.CLEAR_TASKS })

export const changeFiltersAction = (dispatch: Dispatch<TaskActionType>) => (
  status?: boolean
) => dispatch({ type: ActionTypes.FILTER, payload: status })

export default {
  addTaskAction,
  toggleTaskAction,
  clearTasksAction,
  changeFiltersAction
}
