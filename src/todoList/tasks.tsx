import React, { FunctionComponent, useContext, useMemo } from 'react'
import { TaskContext } from '~/contexts/tasks'
import { Task } from '~/contexts/tasks/types'

const ToDoListTasks: FunctionComponent = () => {
  const { actions, state } = useContext(TaskContext)
  const {
    tasks,
    filters: { status }
  } = state

  const filteredTasks = useMemo(
    () =>
      typeof status !== 'boolean'
        ? tasks
        : tasks.filter(t => t.done === status),
    [tasks, status]
  )

  const handleToggleDone = task => () => actions.toggleTask(task)

  const renderIcon = task => {
    const cssClass = task.done ? 'fas fa-dot-circle' : 'far fa-circle'

    return (
      <span className="panel-icon" key={task.done}>
        <i className={cssClass} />
      </span>
    )
  }

  const renderItem = (task: Task, i: number) => {
    return (
      <div key={i} className="panel-block">
        <a onClick={handleToggleDone(task)}>
          {renderIcon(task)}
          <span>{task.name}</span>
        </a>
      </div>
    )
  }

  return <React.Fragment>{filteredTasks.map(renderItem)}</React.Fragment>
}

export default ToDoListTasks
