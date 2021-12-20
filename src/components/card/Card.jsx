import React from 'react';
import styles from './Card.module.scss';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

export default function Index({ autoPlay, title, iconUrl, outlined = false }) {
   const isVideo = iconUrl?.includes('videos') ||  iconUrl?.includes('mp4');

  return (
    <Card className={styles.card} variant={outlined ? 'outlined' : ''}>
      <Typography variant="h3">{title}</Typography>
      {iconUrl ? (
        isVideo ? (
          <video width={'100%'}
                 src={iconUrl}
                 autoPlay={autoPlay ? 'autoplay' : null}
                 autoplay={autoPlay ? 'autoplay' : null}
                 alt="iconUrl" />
        ) : <img width={'40%'} src={iconUrl} alt="iconUrl" />
      ) : <img width={'40%'} src={iconUrl} alt="iconUrl" />}
    </Card>
  );
}
