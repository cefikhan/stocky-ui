import React from 'react'
import Imagecard from './imagecard'
import styles from "./Language.module.css"

function Pages() {
    return (
        <div className={styles.prt}>
            <p className={styles.intro}>Multi Language Support</p>
            <div className={styles.img_box}>
                <div>
                    <img
                        className={styles.imgc}
                        src="./flags/Flag_of_the_United_Kingdom.png" alt="" />
                    <p className={styles.lng_p}>English</p>
                </div>

                <div>
                    <img
                        className={styles.imgc}
                        src="./flags/France.png" alt="" />
                    <p className={styles.lng_p}>French</p>
                </div>

                <div>
                    <img
                        className={styles.imgc}
                        src="./flags/uae.png" alt="" />
                    <p className={styles.lng_p}>Arabic</p>
                </div>

                <div>
                    <img
                        className={styles.imgc}
                        src="./flags/italy.jpg" alt="" />
                    <p className={styles.lng_p}>Italian</p>
                </div>

                <div>
                    <img
                        className={styles.imgc}
                        src="./flags/spain.png" alt="" />
                    <p className={styles.lng_p}>Spain</p>
                </div>

                <div>
                    <img
                        className={styles.imgc}
                        src="./flags/china.jpg" alt="" />
                    <p className={styles.lng_p}>Chinese</p>
                </div>

            </div>


            <div className={styles.img_box2}  >
                <div>
                    <img
                        className={styles.imgc}
                        src="./flags/indonesia.jpg" alt="" />
                    <p className={styles.lng_p}>Indoesian</p>
                </div>

                <div>
                    <img
                        className={styles.imgc}
                        src="./flags/thai.png" alt="" />
                    <p className={styles.lng_p}>Thai</p>
                </div>

                <div>
                    <img
                        className={styles.imgc}
                        src="./flags/russia.jpg" alt="" />
                    <p className={styles.lng_p}>Russian</p>
                </div>


                <div>
                    <img
                        className={styles.imgc}
                        src="./flags/india.jpg" alt="" />
                    <p className={styles.lng_p}>Hindi</p>
                </div>


                <div>
                    <img
                        className={styles.imgc}
                        src="./flags/turkey.jpg" alt="" />
                    <p
                        className={styles.lng_p}
                    >Turkish</p>
                </div>

            </div>
        </div>
    )
}

export default Pages