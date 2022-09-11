import React from 'react'
import styles from "./Connection.module.css"
function connection() {
    return (
        <div className={styles.prt}>

            <div className={styles.leftp}>
                <p className={styles.intro}>
                    The Best Connection
                </p>
                <p className={styles.subd}  >
                    Stronger & better connection ever
                </p>

                <a
                    className={styles.anch}
                    href="">Visit our Support Portal</a>

            </div>

            <div className={styles.rightp}>
                <img className={styles.imgd} src="./connection.JPG" alt="" />
            </div>

        </div>
    )
}

export default connection