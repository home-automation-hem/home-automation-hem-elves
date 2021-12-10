import React, {useState} from 'react';
import styles from './Cameras.module.scss';
import Card from '../card/Card.jsx';
import { Grid } from '@mui/material';

export default function Cameras ({ cameras, hasButton = false }) {
  const [current, setCurrent] = useState('');

  return (
    <div>
     <Card
       autoPlay={true}
       width={500}
       height={400}
       iconUrl={current?.videoUrl || ''}
       outlined={hasButton}
     />

      <Grid container width={802} height={403}>
        {cameras.map((camera, idx) => (
          <Grid
            item
            xs={4}
            md={4}
            width={267}
            height={201}
            sx={{ backgroundColor: '#EBE6F7' }}
          >
            <div onClick={() => setCurrent(camera)}>
              <Card
                autoPlay={false}
                key={idx}
                iconUrl={camera.videoUrl}
                outlined={hasButton}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
