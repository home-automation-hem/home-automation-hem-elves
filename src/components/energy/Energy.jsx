import { ComposedChart, Line, Area, XAxis, CartesianGrid } from 'recharts';
import { Grid, Select, Typography, MenuItem } from '@mui/material';
import { useState } from 'react';
import styles from './Energy.module.scss';

export default function Energy({
  data = [
    { energy: 1, hour: 13 },
    { energy: 10, hour: 14 },
    { energy: 3, hour: 15 },
    { energy: 8, hour: 16 },
    { energy: 2, hour: 17 },
    { energy: 0, hour: 18 },
  ],
}) {
  //eventually we will get the menu to work
  const [time, setTime] = useState('');

  const selectMenuHandler = (e) => {
    setTime(e.target.value);
  };
  return (
    <div>
      <Grid container>
        <Grid item>
          <Typography variant="h4">Energy</Typography>
        </Grid>
        <Grid item className={styles.selectWrapper}>
          <Select
            className={styles.select}
            value={0}
            onChange={selectMenuHandler}
            displayEmpty
          >
            <MenuItem value={0}>This week</MenuItem>
            {/* {menu.map(item => {
              return <MenuItem value={item.value} key={item.label}>{item.label}</MenuItem>
              })} */}
          </Select>
        </Grid>
      </Grid>
      <Grid item className={styles.chart}>
        <ComposedChart
          width={803}
          height={389}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid horizontal={0} strokeDasharray="6" />
          <XAxis dataKey="hour" />
          <Area  dataKey="energy" type="monotone" fill="#DF54A7"/>
          <Line
            type="monotone"
            dataKey="energy"
            stroke="#E150A6"
            strokeWidth={3}
            dot={{ strokeWidth: 6 }}
          />
        </ComposedChart>
      </Grid>
    </div>
  );
}
