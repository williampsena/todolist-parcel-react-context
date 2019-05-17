import React, {
  FunctionComponent,
  useContext,
  useState,
  useEffect,
  useMemo
} from 'react'
import { css } from 'glamor'
import { TaskContext } from '~/contexts/tasks'

const ToDoListFooter: FunctionComponent = () => {
  const { state, actions } = useContext(TaskContext)
  const [status, setStatus] = useState<boolean>(null)
  const { tasks } = state

  useEffect(() => {
    // TODO: Just to show how to use hooks useEffect and useState!
    actions.changeFilters(status)
  }, [status])

  const summary = useMemo(
    () => ({
      done: tasks.filter(x => x.done).length,
      left: tasks.filter(x => !x.done).length
    }),
    [tasks]
  )

  const handleSetFilter = (filter?: boolean) => () => setStatus(filter)

  const renderFilters = () => {
    const cssClass = (filter: boolean) =>
      filter === filter
        ? 'button is-small is-dark is-selected'
        : 'button is-small'

    const filters = [
      { label: 'All', value: null },
      { label: 'Active', value: false },
      { label: 'Completed', value: true }
    ]

    return (
      <div className="buttons has-addons">
        {filters.map(filter => (
          <button
            key={filter.label}
            className={cssClass(filter.value)}
            onClick={handleSetFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="panel-block" {...styles}>
      <nav className="level">
        <div className="level-left">
          <strong className="count">{summary.left}</strong>
          items left
        </div>
        <div className="level-right">{renderFilters()}</div>
      </nav>
    </div>
  )
}

const styles = css({
  '& .level': {
    width: 'calc(100%)'
  },
  '& .count': {
    padding: '0.5rem'
  }
})

export default ToDoListFooter
