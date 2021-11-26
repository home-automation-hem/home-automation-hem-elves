import * as React from "react";
import { Grid, Button, Container, Paper, Box } from "@mui/material";
import LoginComponent from '../../src/components/login/Login.jsx';

import Link from "../../src/components/link/Link";
import styles from '../../src/styles/LoginPage.module.scss';

export default function Login() {
    return (
        <div className={'wrapper'}>
            <Container  maxWidth="sm"
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
                        <LoginComponent />
                    </Paper>

                    <small>
                        Don't have an account? <a href={''}>Register today!</a>
                    </small>
                </Box>
            </Container>
        </div>
    );
};
