import React, { FunctionComponent } from 'react'
import ToDoListInput from './input'
import ToDoListTasks from './tasks'
import ToDoListFooter from './footer'
import { TaskContextProvider } from '~/contexts/tasks'
import ToDoListClearTasks from './clear'

const initialState = { tasks: [], filters: {} }

const Home: FunctionComponent = () => (
  <TaskContextProvider initialState={initialState}>
    <section className="hero is-light is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="box">
            <nav className="panel is-light">
              <p className="panel-heading">Task Manager</p>
              <ToDoListInput />
              <ToDoListTasks />
              <ToDoListFooter />
              <ToDoListClearTasks />
            </nav>
          </div>
        </div>
      </div>
    </section>
  </TaskContextProvider>
)

export default Home
