import React from 'react';
import styles from './Rooms.module.scss';
import { Grid } from '@mui/material';
import Card from '../card/Card';

export default function Rooms({ rooms }) {
  return (
    <div className={styles['rooms-wrapper']}>
      <Grid container width={802} height={403}>
        {rooms.map((room, idx) => (
          <Grid
            item
            xs={4}
            md={4}
            width={267}
            height={201}
            sx={{ backgroundColor: '#EBE6F7' }}
          >
            <Card key={idx} title={room.title} iconUrl={room.iconUrl} outlined={room.iconUrl} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
