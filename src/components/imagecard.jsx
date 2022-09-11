import React from 'react'
import styles from "./imagecard.module.css";

function imagecard() {
    return (
        <div className={styles.img_card}>
            <div className={styles.title}>
                Create Product
            </div>
            <img
                className={styles.img_con}
                src="./dashboard.JPG" alt="" srcset="" />
        </div>
    )
}

export default imagecard