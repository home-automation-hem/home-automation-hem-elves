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

  let devicesGrouped = devices.reduce(function(results, dev) {
    (results[dev.roomId] = results[dev.roomId] || []).push(dev);
    return results;
  }, {})

  let data = [];
  for (let count = 0; count < Object.keys(devicesGrouped).length; count++) {
    let indexes = Object.keys(devicesGrouped);
    let i = indexes[count];
    let group = [...devicesGrouped[i]];

    let el = (
      <div key={count}>
        <span>
          {rooms.find(room => Number(room.id) === Number(group[0].roomId)).name}
        </span>
        <Devices devices={group} value={selected} onScene={onScene} />
      </div>
    )

    data.push(el)
  }

  let element = (
    <Typography>
      {chunked.map(cards => {
        return (<>
            <Scenes cards={cards}/>
            <Devices devices={devices} value={selected} onScene={onScene} />
          </>
        );
      })}
    </Typography>
  )

  return (
    <div className={`${styles['scene-composer']}`}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            {element}
          </Grid>
          <Grid item xs={12}>
           <span>Devices by room id</span>
           {data}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
