import React from 'react';
import styles from './Card.module.scss';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

export default function Index({ iconUrl, onClick, outlined = false }) {
  return (
    <Card className={styles.card} variant={outlined ? 'outlined' : ''}>
      {iconUrl ? <img width={'40%'} src={iconUrl} alt="" /> : ''}
    </Card>
  );
}
