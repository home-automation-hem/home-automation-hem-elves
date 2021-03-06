import styles from './Devices.module.scss';
import { Grid, Chip, Typography, Container } from '@mui/material';
import Card from '../card/Card.jsx';

export default function Devices({ devices  }) {
  return (
    <div className={`${styles['devices-wrapper']}`}>
      <Grid container width={802} height={403} display={'flex'} justifyContent={'center'}>
        {devices?.map((device, idx) => (
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

// (
//   device.title?.toLowerCase() === "off" ||
//   device.title?.toLowerCase() === "offline" ||
//   device.title?.toLowerCase() === "on"
// ) ? ( ... ) : null