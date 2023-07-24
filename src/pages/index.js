import Detection from '@/components/Detection';
import { Container } from '@mui/material';
import RequestAccess from '@/components/RequestAccess';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Grid from '@mui/material/Unstable_Grid2';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>HateGuard</title>
                <meta name="description" content="Hate speech detection API" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth='lg'>
                <Navbar />
                <Hero />
                <Grid container spacing={2}>
                    <Grid xs={12} sm={10} md={6} sx={{mx: 'auto'}}>
                        <Detection />
                    </Grid>
                    <Grid xs={12} sm={10} md={6} sx={{mx: 'auto'}}>
                        <RequestAccess />
                    </Grid>
                </Grid>
                <Footer />
            </Container>
        </>
    );
}
