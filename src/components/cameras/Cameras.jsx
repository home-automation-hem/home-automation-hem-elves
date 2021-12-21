import React, {useState} from 'react';
import styles from './Cameras.module.scss';
import Card from '../card/Card.jsx';
import { Grid } from '@mui/material';

export default function Cameras ({ cameras, hasButton = false }) {
  const [current, setCurrent] = useState('');

  return (
    <div className={styles.wrapper}>
      <Grid container  width={700} height={383} display={'flex'} justifyContent={'flex-end'}>
        <Card
          autoPlay={true}
         
          iconUrl={current?.videoUrl || '/videos/balcony.mp4'}
          outlined={hasButton}
        />
        {cameras.map((camera, idx) => (
          <Grid
            item
            xs={2}
            key={camera.idx}
         
        height={'18%'}
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
