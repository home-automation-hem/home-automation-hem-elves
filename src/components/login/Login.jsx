import styles from "./Login.module.scss";
import { TextField, Button, Grid, InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

export default function Login() {
  return (
    <form className={styles.login-form}>
      <Grid container rowSpacing={1} justifyContent={"center"} sx={{padding: '38px'}}>
        <Grid  item xs = {10} >
          <TextField 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            sx={{ backgroundColor: "#F8F8F8", width: "100%" }}
          />
        </Grid>
        <Grid  item xs = {10} >
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            sx={{ backgroundColor: "#F8F8F8", width: "100%" }}
          />
        </Grid>
        <Grid item xs={10}>
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "#7441F3", color: "white" }}
            className={styles.form_button}
          >
            LOGIN
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
