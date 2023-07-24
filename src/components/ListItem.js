import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const ListItem = ({ text }) => {
    return (
        <li>
            <Box sx={{
                display: 'flex',
            }}>
                <Image src={'/images/list-bullet.png'} height={20} width={20} alt='list bullet' />
                <Typography
                    variant='h6'
                    sx={{
                        ml: 0.5,
                        mb: 0.8,
                        fontWeight: '500',
                        textAlign: 'left',
                        fontSize: {
                            xs: 'body2.fontSize',
                            sm: 'body1.fontSize',
                        },
                    }}
                    color='#3E5060'
                >
                    {text}
                </Typography>
            </Box>
        </li>
    );
};

ListItem.propTypes = {
    text: PropTypes.string,
};

export default ListItem;
