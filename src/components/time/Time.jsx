import React, {useEffect, useState} from 'react';
import { Typography } from '@mui/material';
import styles from './Time.module.scss';

export default function Time() {
    const [now, setNow] = useState(new Date());

    //https://www.w3resource.com/javascript-exercises/javascript-date-exercise-35.php
    function minutesWithLeadingZeros(date) {
        return (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    }

    function hoursWithLeadingZeros(date) {
        return (date.getHours() < 10 ? '0' : '') + date.getHours();
    }

    useEffect(() => {
        setInterval(() => setNow(new Date()), 1000);
    }, []);

    return (
        <div className={styles['time-wrapper']}>
            <Typography variant="h6" component="small" gutterBottom className={styles.title}>
                Time
            </Typography>

            <div>
                <Typography variant="h1" component="div" gutterBottom>
                    {hoursWithLeadingZeros(now)}:{minutesWithLeadingZeros(now)}
                </Typography>
            </div>
        </div>
    );
};
