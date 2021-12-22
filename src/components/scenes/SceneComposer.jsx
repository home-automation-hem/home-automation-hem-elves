import styles from './SceneComposer.module.scss';
import { Container, Grid, Typography } from '@mui/material';
import Devices from '../devices/Devices.jsx';
import Card from '../card/Card.jsx';
import Scenes from './Scenes.jsx'
import _ from 'lodash';


export default function SceneComposer({ devices, rooms, selected, onScene }) {
  //state of selection should be in the parent component
  //value is the selected scene
  //useMemo to optimize the grouping
  //rooms how to visualize for each room device


const chunked = _.chunk(rooms, 1);

// console.log(chunked);
  
  return (
    <div className={`${styles['scene-composer']}`}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography>
                  {chunked.map(cards => {
                    return (<>
                      <Scenes
                      cards={cards}
                      /> <Devices devices={devices} value={selected} onScene={onScene} /></>
                    );
                  })}  
            </Typography>
           
          </Grid>
          <Grid item xs={12}>
            
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
