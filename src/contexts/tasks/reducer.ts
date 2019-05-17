import { TaskState } from "./types"

export enum ActionTypes {
  ADD_TASK = "add_task",
  CLEAR_TASKS = "clear_tasks",
  TOGGLE_TASK = "toggle_task",
  FILTER = 'filter_task'
}

export type TaskActionType = {
  type: ActionTypes
  payload?: any
}

export const initialState: TaskState = {
  tasks: [],
  filters: {}
}

export function TaskReducer(state = initialState, action: TaskActionType) {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case ActionTypes.CLEAR_TASKS:
      return {
        ...state,
        tasks: []
      }
    case ActionTypes.TOGGLE_TASK:
      const index = state.tasks.indexOf(action.payload)

      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, index),
          { ...action.payload, done: !action.payload.done },
          ...state.tasks.slice(index + 1)
        ]
      }
    case ActionTypes.FILTER:
      return {
        ...state,
        filters: {
          status: action.payload
        }
      }
    default:
      return state
  }
}
