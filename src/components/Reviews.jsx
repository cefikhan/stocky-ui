import Review from "./Review"
import styles from "./Reviews.module.css"

function Reviews() {
    return (
        <div className={styles.prt}>
            <p className={styles.intro}>Our Customer Reviews</p>
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
        </div>
    )
}

export default Reviews