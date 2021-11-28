import { Container, Grid, Avatar, Typography } from "@mui/material";
import styles from "./User.module.scss";
import classNames from "classnames";

export default function User({ name, avatar, size = 69 }) {
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
          <Grid item xs={4}>
            <Avatar
              className={classNames(styles.avatar)}
              alt="user-avatar"
              src={avatar}
              sx={{ width: size, height: size }}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" className={classNames(styles.username)}>
              {name}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
