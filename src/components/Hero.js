import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2';
import ListItem from './ListItem';

const apiPros = [
    'Using a state-of-the-art transformer model.',
    'Over 90% Accuracy.',
    'Fast API Response.',
    'Able to classify multiple sentences in one request.',
];

const Hero = () => {
    return (
        <Grid container spacing={2} mb={10}>
            <Grid sm={6} md={8} sx={{ order: {xs: 2, sm: 1} }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'center',
                }}>
                    <Typography
                        variant='h5'
                        sx={{
                            mt: 1,
                            mb: {xs: 0.5, sm: 1},
                            fontWeight: '700',
                            textAlign: { xs: 'center', sm: 'left' },
                            fontSize: {
                                xs: 'h6.fontSize',
                                sm: 'h5.fontSize',
                            },
                            maxWidth: '600px',
                        }}
                        color='#333333'
                    >
                    Powerful text classification API to safeguard your platform from hate speech and offensive language.
                    </Typography>
                
                    <ul style={{ listStyle: 'none', marginLeft: 0, paddingLeft: 0 }}>
                        {
                            apiPros.map((text, key) => 
                                <ListItem text={text} key={key} />
                            )
                        }
                    </ul>

                </Box>
            </Grid>
            <Grid xs={12} sm={6} md={4} sx={{ order: {xs: 1, sm: 2} }}>
                <Box sx={{
                    mt: 2,
                    overflow: 'hidden',
                    textAlign: {xs: 'center', md: 'right'},
                    width: '100%',
                }}>
                    <Image
                        src={'/images/share-love-not-hate.jpg'}
                        width={288}
                        height={432}
                        alt='human holding a paper saying share love not hate'
                        style={{
                            borderRadius: '10px',
                            overflow: 'hidden',
                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
                            opacity: '0.9',
                        }}
                        priority
                    />
                </Box>
            </Grid>
        </Grid>
    );
};

export default Hero;
