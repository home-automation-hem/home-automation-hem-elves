import React from 'react';
import styles from "./Card.module.scss";
import * as mCard from '@mui/material/Card';

function Card({ iconUrl, outlined = false }) {
  return (
    <mCard variant={outlined ? 'outlined' : ''}>
      123
      <CardCon
    </mCard>
  );
}

export default Card;