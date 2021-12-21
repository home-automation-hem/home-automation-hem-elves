import styles from './Devices.module.scss';
import { Grid, Chip, Typography } from '@mui/material';
import Card from '../card/Card.jsx';

export default function Devices({ devices }) {
  return (
    <div className={`${styles['devices-wrapper']}`}>
      <Grid container width={802} height={403} display={'flex'} justifyContent={'center'}>
        {devices.map((device, idx) => (
          <Grid
            p={2}
            item
            xs={4}
            md={4}
            maxWidth={267}
            minHeight={201}
          >
            <Card
              key={idx}
              iconUrl={device.iconUrl}
              title={device.title}
              variant={device.title} />
          </Grid>
        ))}
          <Card
            iconUrl={'/images/plus.svg'}
            title={''}
            variant={''}
            outlined={true}/>
      </Grid >
    </div>
  );
}
