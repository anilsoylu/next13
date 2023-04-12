import React from "react"
import Todo from "./todo"

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  const todos = await res.json()
  return todos
  // const todos: Todo[] = await res.json()
  // return todos
}

async function HomePage() {
  const todos = await getTodos()
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  )
}

export default HomePage
