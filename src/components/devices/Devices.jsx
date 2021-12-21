import styles from './Devices.module.scss';
import { Grid, Chip, Typography, Container } from '@mui/material';
import Card from '../card/Card.jsx';

//todo: remove variant as prop
export default function Devices({ devices }) {
  devices = [];
  devices = [
    { iconUrl: '/images/bulb.svg', title: 'on' },
    { iconUrl: '/images/bulb.svg', title: 'off'},
    { iconUrl: '/images/plug.svg', title: 'off' },
    { iconUrl: '/images/plug.svg', title: 'offline' },
    // { iconUrl: '/images/plus.svg', title: '' },
  ];

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
              variant={device.title}
              outlined={idx === devices.length - 1}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
