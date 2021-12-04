import React from 'react';
import styles from "./Card.module.scss";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

export default function Index({ iconUrl, onClick, outlined = false }) {
  return (
    <Card className={styles.card} variant={outlined ? 'outlined' : ''}>
      <Grid container>
        <Grid item xs={3}>
          {
            iconUrl ? <img width={'25%'} src={iconUrl} alt=""/> : ""
          }

        </Grid>
      </Grid>
    </Card>
  );
}
