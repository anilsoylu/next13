import React from "react"
import styles from "./styles.module.css"

function Test() {
  return (
    <div className={styles.container}>
      <h1 className={styles["main-title"]}>Test</h1>
    </div>
  )
}

export default Test
