export const getOtherData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/2")
  return res.json()
}

async function Test() {
  const data2 = await getOtherData()

  return <h2>data2: {data2.title}</h2>
}

export default Test
