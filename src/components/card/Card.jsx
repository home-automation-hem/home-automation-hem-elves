import React from 'react';
import styles from './Card.module.scss';
import Card from '@mui/material/Card';
import { Container, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';

export default function Index({ autoPlay, title, variant, iconUrl, outlined = false }) {
  const isVideo = iconUrl?.includes('videos') ||  iconUrl?.includes('mp4');
  const style = null;

  // if (variant === "off") {}
  // else if (variant === "offline") {}
  // else if (variant === "on") {}

  return (
    <Card className={styles.card} variant={outlined ? 'outlined' : ''}>
      <Typography variant="h3">{title}</Typography>
      {variant?.toLowerCase() === "offline".toLowerCase() ? <Chip label={"!"} /> : null}
      {iconUrl ? (
        isVideo ? (
          <video
            width={'100%'}
            src={iconUrl}
            autoPlay={autoPlay ? 'autoplay' : null}
            autoplay={autoPlay ? 'autoplay' : null}
            alt="iconUrl" />
        ) : <img width={'40%'} src={iconUrl} alt="iconUrl" />
      ) : <img width={'40%'} src={iconUrl} alt="iconUrl" />}
    </Card>
  );
}
