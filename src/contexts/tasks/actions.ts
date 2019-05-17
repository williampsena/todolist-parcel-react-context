import { Task } from './types'
import { Dispatch } from 'react'
import { TaskActionType, ActionTypes } from './reducer'

export const addTask = (dispatch: Dispatch<TaskActionType>) => (
  task: Task
) => dispatch({ type: ActionTypes.ADD_TASK, payload: task })

export const toggleTask = (dispatch: Dispatch<TaskActionType>) => (
  task: Task
) => dispatch({ type: ActionTypes.TOGGLE_TASK, payload: task })

export const clearTasks = (dispatch: Dispatch<TaskActionType>) => () =>
  dispatch({ type: ActionTypes.CLEAR_TASKS })

export const changeFilters = (dispatch: Dispatch<TaskActionType>) => (
  status?: boolean
) => dispatch({ type: ActionTypes.FILTER, payload: status })

export default {
  addTask,
  toggleTask,
  clearTasks,
  changeFilters
}
