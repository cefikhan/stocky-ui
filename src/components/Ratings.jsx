import React from 'react'
import styles from "./Ratings.module.css"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
function Ratings() {
    const [value, setValue] = React.useState(2);
    return (
        <div className={styles.prt}>
            <div className={styles.leftpb}>
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >

                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        size="large"
                    />
                </Box>
                <div className={styles.en}>Dont forget to give a 5 star rating</div>
            </div></div>
    )
}

export default Ratings