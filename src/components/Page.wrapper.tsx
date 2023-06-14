import React from "react";
import { Header } from "./Header.comp.tsx";
import { Footer } from "./Footer.comp.tsx";
import { Container, Grid } from "@mui/material";

interface Props {
    children: React.ReactNode;
}

export const PageWrapper: React.FC<Props> = (props) => {
    const {} = props;

    return (
        <>
            <Container maxWidth="lg" sx={{minHeight: "60vh"}}>
                <Grid container direction="column" justifyContent="space-between" gap={6}>
                    <Grid item>
                        <Header />
                    </Grid>
                    <Grid item>
                        {props.children}
                    </Grid>
                    <Grid item>
                        <Footer />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
