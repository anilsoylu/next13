import React from "react"
import Test from "../components/test"

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

async function HomePage() {
  const data = await getData()
  return (
    <>
      <h1>Data Fetching: {data.title}</h1>
      <Test />
    </>
  )
}

export default HomePage
