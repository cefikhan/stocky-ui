import React from 'react'
import Imagecard from './imagecard'
import styles from "./Pages.module.css"

function Pages() {
    return (
        <div className={styles.prt}>
            <p className={styles.intro}>Apps & Pages</p>
            <span className={styles.title} >Product Pages > > > ></span>
            <div className={styles.container}>
                <Imagecard />
                <Imagecard />
                <Imagecard />
                <Imagecard />
            </div>
        </div>
    )
}

export default Pages