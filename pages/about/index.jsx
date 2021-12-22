import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from '../../src/components/header/Header.jsx';
import User from '../../src/components/user/User.jsx';
import Time from '../../src/components/time/Time.jsx';
import Weather from '../../src/components/weather/Weather.jsx';
import Thermostat from '../../src/components/thermostat/Thermostat.jsx';
import Scenes from '../../src/components/scenes/Scenes.jsx';
import Cameras from '../../src/components/cameras/Cameras.jsx';
import Rooms from '../../src/components/rooms/Rooms.jsx';
import Energy from '../../src/components/energy/Energy.jsx';
import Devices from '../../src/components/devices/Devices.jsx';
import Modal from '../../src/components/modal/Modal.jsx';

export default function About() {
  let rooms = [
    { iconUrl: '/images/sunny.svg', title: 'Living room'},
    { iconUrl: '/images/alarm-clock.svg', title: 'Bedroom' },
    { iconUrl: '/images/shower.svg', title: 'Toilet'},
    { iconUrl: '/images/tea-cup.svg', title: 'Patio' },
    { iconUrl: '/images/rock.svg', title: 'Bathroom' },
    { iconUrl: '/images/plus.svg', title: 'Create new' },
  ];

  let cards = [
    { iconUrl: '/images/sunny.svg', outlined: false },
    { iconUrl: '/images/alarm-clock.svg', outlined: false },
    { iconUrl: '/images/shower.svg', outlined: false },
    { iconUrl: '/images/tea-cup.svg', outlined: false },
    { iconUrl: '/images/rock.svg', outlined: false },
    { iconUrl: '/images/plus.svg', outlined: true },
  ];

  let cameras = [
    { videoUrl: '/videos/balcony.mp4' },
    { videoUrl: '/videos/bathroom.mp4' },
    { videoUrl: '/videos/front-door.mp4' },
    // { videoUrl: '/videos/garden.mp4' },
    { videoUrl: '/videos/kitchen.mp4' },
    // { videoUrl: '/videos/living room 2.mp4' },

    { videoUrl: '/videos/balcony.mp4' },
    { videoUrl: '/videos/bathroom.mp4' },
  ];

  let devices = [
    { iconUrl: '/images/bulb.svg', title: 'on' },
    { iconUrl: '/images/bulb.svg', title: 'off'},
    { iconUrl: '/images/plug.svg', title: 'off' },
    { iconUrl: '/images/plug.svg', title: 'offline' },
    // { iconUrl: '/images/plus.svg', title: '' },
  ];

  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Header
        left={<User />}
        right={
          <React.Fragment>
            <Weather />
            <Time />
          </React.Fragment>
        }
      />

      <Modal
        handleClose={() => setOpen(false)}
        title={"kris test"}
        buttonText={"btn txt"}
        open={open} />

      <Devices devices={devices} />

      <Container
        minWidth="xs"
        maxWidth="100%"
        sx={{ backgroundColor: '#F8F8F8' }}
        p={0}
      >
        <Grid container justifyContent="center" xs={12}>
          <Grid item xs={6}>
          <Thermostat/>
          </Grid>

          <Grid item xs={6}>
            <Scenes cards={cards} />
          </Grid>

          <Grid item xs={6}>
            <Cameras cameras={cameras} hasButton={true} />
          </Grid>

          <Grid item xs={6}>
            <Energy />
          </Grid>

          <Grid item xs={6}>
            <Rooms rooms={rooms}/>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
//iconUrl={'/images/rainy.svg'} outlined={true}
{/* <Button variant="contained" component={Link} noLinkStyle href="/">
    🏠 Home
  </Button> */}