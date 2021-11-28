import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/link/Link";
import Login from "../../src/components/login/Login.jsx";
import Time from "../../src/components/time/Time";

export default function About() {
  return (
    <Container maxWidth="sm">
        <Time />

        <Grid container justifyContent="center">
        <Grid item>
          <Button variant="contained" component={Link} noLinkStyle href="/">
            🏠 Home
          </Button>
         <Login/>
        </Grid> 
      </Grid>
    </Container>
  );
}
