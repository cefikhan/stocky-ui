import React from 'react'
import styles from "./End.module.css";
import { FaHeart } from "react-icons/fa"

function End() {


    return (

        <div className={styles.prt}>
            <div className={styles.leftp}>
                <p className={styles.intro}>
                    Thanks for choosing us
                </p>
                <p className={styles.subd}  >
                    < FaHeart className={styles.faic} />
                </p>

                <p
                    className={styles.anch}
                    href="">We love our customers</p>
            </div>







        </div>

    )
}

export default End