import { Container, Grid, Avatar, Typography } from "@mui/material";
import styles from "./User.module.scss";
import classNames from "classnames";

export default function User({ name, avatar, size = 69, headingSize, hasWelcome = false }) {
  return (
    <div className={classNames(styles["user-container"])}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={5}>
            <Avatar
              className={classNames(styles.avatar)}
              alt="user-avatar"
              src={avatar}
              sx={{ width: size, height: size }}
            />
          </Grid>
          <Grid item xs={7}>
            <Typography variant={headingSize} className={classNames(styles.username)}>
              {name}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
