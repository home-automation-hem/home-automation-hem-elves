import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/link/Link";
import Paper from '@mui/material/Paper';
import styles from '../../src/styles/LoginPage.module.scss';
import Box from '@mui/material/Box';

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
                            width: 128,
                            height: 128,
                        },
                    }}
                >

                    {/*todo */}
                    {/*    <LoginComponent>*/}
                    <Paper elevation={3}>
                        {/*<input type="text"/>*/}
                        {/*<input type="text"/>*/}
                    </Paper>

                    <small>
                        Don't have an account? <a href={''}>Register today!</a>
                    </small>
                </Box>
            </Container>
        </div>
    );
};
