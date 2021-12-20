import styles from './Header.module.scss';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import React from 'react';

export default function Header({ left, right }) {
  return (
    <div className={`${styles['header-wrapper']}`}>
      <Container maxWidth="xl" className={styles.container}>
        <Paper sx={{position: 'relative', left:'181px', top: '46px'}} variant='elevation' elevation={3} >
          <Grid container xs={12}>
            <Grid
              sx={{ display: 'flex', alignItems: 'flex-start' }}
              className={styles.left}
              item
              xs={6}
            >
              <React.Fragment>{left}</React.Fragment>
              {/* <p> Welcome home,</p>
              <h1>John Doe</h1> */}
            </Grid>

            <Grid
              sx={{ display: 'flex', alignItems: 'flex-end' }}
              className={styles.right}
              item
              xs={6}
            >
              <React.Fragment> {right}</React.Fragment>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
