import React from 'react'
import styles from "./stocky.module.css"
import { AiFillCheckCircle } from "react-icons/ai"
function stocky() {
    return (
        <div className={styles.prt}>
            <h1>Stocky</h1>
            <p className={styles.intro}>Introducing <span style={{ fontSize: "70px", color: "purple", fontWeight: "bold" }}>Stocky</span> The Best Inventory With Pos Management Software</p>
            <div className={styles.listcontainer}>
                <ul >
                    <li><AiFillCheckCircle className={styles.icon_style} />Mail notification system added</li>
                    <li><AiFillCheckCircle className={styles.icon_style} />Uses Structured & Customizable Sass Code</li>
                    <li><AiFillCheckCircle className={styles.icon_style} />Integrated with Vuex,Vue Router</li>
                    <li><AiFillCheckCircle className={styles.icon_style} />Dark Version Included</li>
                    <li><AiFillCheckCircle className={styles.icon_style} />Easy POS and Dynamic Dashboard</li>
                    <li><AiFillCheckCircle className={styles.icon_style} />Laravek Api + Pure Vue Js, No JQuery</li>
                    <li><AiFillCheckCircle className={styles.icon_style} />Clean and Organized Code</li>
                </ul>
                <ul>
                    <li><AiFillCheckCircle className={styles.icon_style} />Well Documented Code</li>
                    <li><AiFillCheckCircle className={styles.icon_style} />RTL Support Added</li>
                    <li><AiFillCheckCircle className={styles.icon_style} />6 Months Support</li>
                    <li><AiFillCheckCircle className={styles.icon_style} />Life Time Free Updates</li>
                    <li><AiFillCheckCircle className={styles.icon_style} />And Many more inside</li>
                    <li><AiFillCheckCircle className={styles.icon_style} />14 languages Supported</li>
                </ul>
            </div>
            <div className={styles.dashboardContainer}>
                <img src="./dashboard.JPG" alt="" srcset="" />
            </div>
        </div>
    )
}

export default stocky