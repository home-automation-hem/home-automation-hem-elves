import styles from "./Weather.module.scss";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
export default function Weather({ degrees = 22, type = "/images/cloudy.svg" }) {
  return (
  <div className={`${styles["weather-wrapper"]}`}>
    <Grid container xs={12} >
      <Grid item xs={6} sx={{display:'flex', justifyContent: 'flex-end'}} >
        <img width={'35%'}  src={type}></img>
      </Grid>
      <Grid item xs={6}>
        <Typography>
          <h1 className={styles.heading}>Weather</h1>
          <h1 className={styles.degrees}>{degrees}°</h1>
        </Typography>
      </Grid>
    </Grid>
    </div>
  );
}
