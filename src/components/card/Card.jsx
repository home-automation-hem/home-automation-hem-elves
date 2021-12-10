import React, {useRef} from 'react';
import styles from './Card.module.scss';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

export default function Index({ autoplay, iconUrl, onClick, outlined = false }) {
  const isVideo = iconUrl.includes('videos') ||  iconUrl.includes('mp4');

  return (
    <Card className={styles.card} variant={outlined ? 'outlined' : ''}>
      {iconUrl ? (
        isVideo ? (
          <video width={'100%'} src={iconUrl} autoPlay={autoplay ? 'autoplay' : null} alt="iconUrl" />
        ) : <img width={'40%'} src={iconUrl} alt="iconUrl" />
      ) : ''}
    </Card>
  );
}
