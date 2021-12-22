import styles from './SceneComposer.module.scss'
import {Container, Grid, Typography} from '@mui/material'

export default function SceneComposer({device, rooms, selected, onScene}) {
    return(<div className={`${styles['scene-composer']}`}>
<Container>
    <Grid container>
        <Grid item xs={12}><Typography>Living Room</Typography></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}><Typography>Bedroom</Typography></Grid>
        <Grid item xs={12}></Grid>
    </Grid>
</Container>
    </div>
    );
}