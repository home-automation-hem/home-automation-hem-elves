import styles from './SceneComposer.module.scss';
import { Container, Grid, Typography } from '@mui/material';
import Devices from '../devices/Devices.jsx';

export default function SceneComposer({ devices, rooms, selected, onScene }) {
  return (
    <div className={`${styles['scene-composer']}`}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography>Living Room</Typography>
          </Grid>
          <Grid item xs={12}>
            <Devices devices={devices} />
          </Grid>
          <Grid item xs={12}>
            <Typography>Bedroom</Typography>
          </Grid>
          <Grid item xs={12}>
            <Devices devices={devices} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
