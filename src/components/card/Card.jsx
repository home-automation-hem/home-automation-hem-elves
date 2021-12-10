import React, {useRef} from 'react';
import styles from './Card.module.scss';
import Card from '@mui/material/Card';

export default function Index({ autoPlay, title, iconUrl, outlined = false }) {
  const isVideo = iconUrl.includes('videos') ||  iconUrl.includes('mp4');

  return (
    <Card className={styles.card} variant={outlined ? 'outlined' : ''}>
      <h3>{title}</h3>
      {iconUrl ? (
        isVideo ? (
          <video width={'100%'}
                 src={iconUrl}
                 autoPlay={autoPlay ? 'autoplay' : null}
                 autoplay={autoPlay ? 'autoplay' : null}
                 alt="iconUrl" />
        ) : <img width={'40%'} src={iconUrl} alt="iconUrl" />
      ) : ''}
    </Card>
  );
}
