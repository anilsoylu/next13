import React from "react"

export const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  return res.json()
}

export async function generateMetadata() {
  const data = await getData()
  return {
    title: data.title,
    description: data.body.slice(0, 160),
  }
}

export function HomePage() {
  const data = getData()
  console.log(data)
  return <div>Data Fetching</div>
}

export default HomePage
