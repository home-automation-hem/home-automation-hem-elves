import styles from './SceneComposer.module.scss';
import { Container, Grid, Typography } from '@mui/material';
import Devices from '../devices/Devices.jsx';
import Rooms from '../rooms/Rooms.jsx';

export default function SceneComposer({ devices, rooms, selected, onScene }) {
  //state of selection should be in the parent component
  //value is the selected scene
  //useMemo to optimize the grouping
  //rooms how to vsualize for each room devixe
  return (
    <div className={`${styles['scene-composer']}`}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography></Typography>
          </Grid>
          <Grid item xs={12}>
            <Devices devices={devices} value={selected} onScene={onScene} />
          </Grid>
          <Grid item xs={12}>
            <Typography></Typography>
          </Grid>
          <Grid item xs={12}>
            <Devices devices={devices} value={selected} onScene={onScene} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
