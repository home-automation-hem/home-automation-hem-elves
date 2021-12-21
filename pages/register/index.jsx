import * as React from "react";
import { Grid, Button, Container, Paper, Box } from "@mui/material";
import Register from '../../src/components/register/Register.jsx';
import styles from '../../src/styles/LoginPage.module.scss';
import Link from 'next/link';

// todo: try RegisterPage, Index if tests fail
export default function RegisterPage() {
  return (
    <div className={styles.wrapper}>
      <Container
        maxWidth="sm"
        sx={{
          '& > :not(style)': {
            mt: "50%",
          },
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: "column",
            '& > :not(style)': {
              m: 1,
              minWidth: 128,
              minHeight: 128,
            },
          }}
        >
          <Paper elevation={1}>
            <Register />
          </Paper>

          <small>
            Already registered?&nbsp;
            <Link href={'/login'}>
              <a>Go to login.</a>
            </Link>
          </small>
        </Box>
      </Container>
    </div>
  );
};
