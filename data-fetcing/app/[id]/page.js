import React from "react"

export const getAllPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
}

export const getSinglePosts = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.json()
}

export async function generateMetadata({ params }) {
  const post = await getSinglePosts(params.id)
  return { title: post.title }
}

async function BlogPage({ params }) {
  console.log("Inside the page: ", params.id)
  const data = await getSinglePosts(params.id)

  return (
    <>
      <h1>Title: {data.title}</h1>
    </>
  )
}

export default BlogPage

export async function generateStaticParams() {
  console.log("Inside generateStaticParams")

  const posts = await getAllPosts()
  return posts.map((post) => ({ params: { id: `${post.id}` } }))
}
