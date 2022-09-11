import React from 'react'
import styles from "./dashboard.module.css"
function Dashboard() {
    return (
        <div className={styles.prt}>
            <p className={styles.intro}>
                Check Out Dashboard Layouts
            </p>
            <div className={styles.dashboardContainer}>
                <img src="./dashboard.JPG" alt="" srcset="" />
            </div>

            <div className={styles.container} >
                <div className={styles.description}>
                    Light Dashboard
                </div>
            </div>
            <div className={styles.dashboardContainer}>
                <img src="./darkdashboard.JPG" alt="" srcset="" />
            </div>

            <div className={styles.container} >
                <div className={styles.description}>
                    Dark Dashboard
                </div>
            </div>
        </div>
    )
}

export default Dashboard