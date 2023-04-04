import Test from "../components/test"
import styles from "./homepage.module.css"

function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles["main-title"]}>Home Page</h1>
      <Test />
    </div>
  )
}

export default HomePage
