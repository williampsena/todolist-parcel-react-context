import React, { createContext, FunctionComponent, useReducer } from 'react'
import { TaskContextState, TaskState } from './types'
import { TaskReducer } from './reducer'
import {
  addTask,
  toggleTask,
  clearTasks,
  changeFilters
} from './actions'

export const TaskContext = createContext<TaskContextState | null>(null)

interface TaskContextProviderProps {
  initialState: TaskState
  children: any
}

export const TaskContextProvider: FunctionComponent<
  TaskContextProviderProps
> = ({ initialState, children }) => {
  const [state, dispatch] = useReducer(TaskReducer, initialState)

  const props: TaskContextState = {
    dispatch,
    state,
    actions: {
      addTask: addTask(dispatch),
      toggleTask: toggleTask(dispatch),
      clearTasks: clearTasks(dispatch),
      changeFilters: changeFilters(dispatch)
    }
  }

  return (
    <TaskContext.Provider value={{ ...props }}>{children}</TaskContext.Provider>
  )
}

export default {
  TaskContext,
  TaskContextProvider
}
