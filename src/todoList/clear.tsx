import React, { useContext } from 'react'
import { TaskContext } from '~contexts/tasks'

const ToDoListClearTasks = () => {
  const { actions } = useContext(TaskContext)

  const handleClear = () => actions.clearTasks()

  return (
    <p className="panel-block">
      <button
        className="button is-danger is-outlined is-fullwidth"
        onClick={handleClear}
      >
        <i className="icon fas fa-trash" />
        Clear
      </button>
    </p>
  )
}

export default ToDoListClearTasks
