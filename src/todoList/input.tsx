import React, {
  FunctionComponent,
  useState,
  useContext,
  ChangeEvent,
  KeyboardEvent
} from 'react'
import { Task } from '~/contexts/tasks/types'
import { TaskContext } from '~/contexts/tasks'

const initialState = {
  name: '',
  done: false
}

const ToDoListInput: FunctionComponent = () => {
  const { actions } = useContext(TaskContext)
  const [task, setTask] = useState<Task>(initialState)

  const handleOnTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setTask({ name: value, done: false })
  }

  const onKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (task && event.key === 'Enter') {
      actions.addTask(task)
      setTask(initialState)
    }
  }

  return (
    <div key="input" className="panel-block">
      <p className="control has-icons-left">
        <input
          id="task"
          className="input"
          type="text"
          placeholder="Whats needs to be done?"
          value={task.name}
          onChange={handleOnTextChange}
          onKeyUp={onKeyUp}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-tasks" aria-hidden="true" />
        </span>
      </p>
    </div>
  )
}

export default ToDoListInput
