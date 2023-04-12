"use client"

import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"

export default function Todo(todo) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)

  // Create inline loading UI
  const isMutating = isFetching || isPending

  async function handleChange() {
    setIsFetching(true)
    // Mutate external data source
    await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
      method: "PUT",
      body: JSON.stringify({ completed: !todo.completed }),
    })
    setIsFetching(false)

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh()
    })
  }

  return (
    <li style={{ opacity: !isMutating ? 1 : 0.7 }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleChange}
        disabled={isPending}
      />
      {todo.title}
    </li>
  )
}
