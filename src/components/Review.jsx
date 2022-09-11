import React from 'react'
import styles from "./Review.module.css"
import { BsFillStarFill } from "react-icons/bs"
function Review() {
    return (
        <div className={styles.box}>
            <div className={styles.hdr} >
                <div className={styles.review}>
                    <span>
                        {
                            Array(5).fill(null).map((u, i) => {
                                return <BsFillStarFill className={styles.iconst} />
                            })
                        }
                    </span>
                    <span style={{ fontSize: "1.05rem" }}>(5.0)</span>
                    <span
                        style={{ opacity: "0.7" }}
                    >for</span>
                    <span style={{ fontSize: "1.05rem" }}> Customer Support</span>
                </div>
                <div className={styles.reviewinfo}>
                    by <span>StudioWorks</span> 2 months ago
                </div>
            </div>

            <div className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem unde corporis vero odit ea at enim esse itaque laudantium asperiores perferendis excepturi natus deserunt nam ipsam omnis exercitationem illum, adipisci rerum similique ratione nulla ducimus quo necessitatibus. Sed explicabo error recusandae in animi fugit aspernatur quidem! Consectetur facilis cupiditate earum! Sit quae explicabo dicta tenetur obcaecati inventore voluptatum, sapiente modi voluptates vel voluptatibus accusantium tempora id est consequuntur tempore voluptatem corrupti nisi aperiam eligendi! Consectetur eaque animi reprehenderit eveniet dolores obcaecati error quo similique deleniti. Dolore asperiores laboriosam saepe deserunt, quo impedit velit nostrum illum tempora perspiciatis quis adipisci hic.
            </div>


        </div>
    )
}

export default Review