import { Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';

const Navbar = () => {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Image
                    src={'/images/hateguard-logo.png'}
                    width={50}
                    height={50}
                    alt='HateGuard logo'
                />
                <Typography
                    variant='h1'
                    sx={{
                        fontWeight: { xs: '700' },
                        fontSize: {
                            xs: 'h4.fontSize',
                            sm: 'h3.fontSize',
                        },
                        ml: -3.5,
                        width: '100%',
                        letterSpacing: '1px',
                        textAlign: {
                            xs: 'right',
                            md: 'center',
                        },
                    }}
                    color='primary'
                >
                    HateGuard
                </Typography>
            </Box>
            <Divider />
        </>
    );
};

export default Navbar;
