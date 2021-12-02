import styles from './Thermostat.module.scss';
import CircularProgress from '@mui/material/CircularProgress';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import { ComposedChart, Line } from 'recharts';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

//degrees' range should be from 15° to 50°
// backdropFilter is not working, put oppacity to see the container
export default function Thermostat({
  data = [
    { temperature: 15, hour: 12 },
    { temperature: 30, hour: 13 },
    { temperature: 12, hour: 14 },
    { temperature: 38, hour: 15 },
    { temperature: 15, hour: 16 },
    { temperature: 19, hour: 17 },
  ],
}) {
  const [temp, setTemp] = useState(15);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const minTemp = 15;
  const maxTemp = 50;

  // Create handleIncrement event handler
  const handleIncrement = () => {
    if (temp + 1 <= maxTemp) {
        setTemp((prevTemp) => prevTemp + 1);
        setButtonDisabled(false);
    } 
    
    return setButtonDisabled(true);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    if (temp - 1 >= minTemp) {
      setTemp((prevTemp) => prevTemp - 1);
      setButtonDisabled(true);
    }

    return setButtonDisabled(true);
  };

  return (
    <div>
      <Grid container width={802} height={402}>
        <Grid
          item
          xs={12}
          sx={{
            background: 'linear-gradient(284.07deg, #EC6953 0%, #DF53A8 100%)',
            borderRadius: '15px 15px 0px 0px',
            height: '55%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <CircularProgress
            sx={{ display: 'flex', position: 'absolute', zIndex: 1 }}
            thickness={2.5}
            size={450}
            variant="determinate"
            value={temp}
            style={{ color: 'white', transform: 'rotate(180deg)' }}
          />
          <CircularProgress
            sx={{ display: 'flex', position: 'absolute' }}
            thickness={2.5}
            size={450}
            variant="determinate"
            value={50}
            style={{ color: '#B84C62', transform: 'rotate(180deg)' }}
          />
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              zIndex: 1,
              alignItems: 'center',
              top: '17%',
            }}
          >
            <RemoveCircleOutlinedIcon
             
              onClick={handleDecrement}
              value={50}
              fontSize="large"
              className={styles.button}
            />
            <h1 className={styles.temperature}>{temp}°</h1>
            <AddCircleOutlinedIcon
              
              onClick={handleIncrement}
              value={15}
              fontSize="large"
              className={styles.button}
            />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            background: 'linear-gradient(284.07deg, #EC6953 0%, #DF53A8 100%)',
            backdropFilter: 'blur(52px)',
            borderRadius: '0px 0px 15px 15px',
            height: '45%',
          }}
          className={styles.chart}
        >
          <h1 className={styles.heading}> TEMPERATURE GRAPH</h1>
          <ComposedChart
            width={802}
            height={200}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            {' '}
           
            <Line type="monotone" dataKey="temperature" stroke="white" />
          </ComposedChart>
        </Grid>
      </Grid>
    </div>
  );
}
