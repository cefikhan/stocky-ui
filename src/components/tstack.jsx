import React from 'react'
import styles from "./tstack.module.css"
function tstack() {
    return (
        <div className={styles.prt}>

            <p className={styles.intro}>What We Used In This Template?
            </p>

            <div className={styles.imgcontainer}>
                <img src="./bootstrap.JPG" alt="" />

                <img src="./laravel.JPG" alt="" srcset="" />

                <img src="./vue.JPG" alt="" />
            </div>
        </div>
    )
}

export default tstack