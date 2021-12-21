import React from 'react';
import styles from './Card.module.scss';
import Card from '@mui/material/Card';
import { Container, Typography, Chip } from '@mui/material';

export default function Index({ autoPlay, title, variant, iconUrl, outlined = false }) {
  const isVideo = iconUrl?.includes('videos') ||  iconUrl?.includes('mp4');
  const style = null;

  if (variant === "off") {}
  else if (variant === "offline") {}
  else if (variant === "on") {}

  return (
    <Card className={styles.card} variant={outlined ? 'outlined' : ''}>
      <Typography variant="h3">{title}</Typography>
      {iconUrl ? (
        isVideo ? (
          <video
            width={'100%'}
            src={iconUrl}
            autoPlay={autoPlay ? 'autoplay' : null}
            autoplay={autoPlay ? 'autoplay' : null}
            alt="iconUrl" />
        ) : <React.Fragment>

            { variant === "offline" ? <Chip label={"!"} /> : '' }

          <img width={'40%'} src={iconUrl} alt="iconUrl" />
        </React.Fragment>
      ) : <img width={'40%'} src={iconUrl} alt="iconUrl" /> }
    </Card>
  );
}
