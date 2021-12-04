import React from 'react';
import styles from "./Card.module.scss";
import * as mCard from '@mui/material/Card';
import Grid from '@mui/material/Grid';

function Card({ iconUrl, outlined = false }) {
  return (
    <mCard variant={outlined ? 'outlined' : ''}>
      <Grid container xs={12} >
        <Grid item xs={6}>
          {
            outlined ? <img width={'25%'} src={iconUrl} alt=""/> : ""
          }

        </Grid>
      </Grid>
    </mCard>
  );
}

export default Card;