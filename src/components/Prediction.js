import PropTypes from 'prop-types';

import { Box, LinearProgress, Typography } from '@mui/material';

const Prediction = ({ label, value}) => {
    return (
        <>
            <LinearProgress variant="determinate" value={value * 100} sx={{ mt: 2 }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                    variant='subtitle2'
                    color='textPrimary'
                >
                    {label}
                </Typography>
                <Typography
                    variant='subtitle2'
                    color='textPrimary'
                >
                    {parseFloat(value * 100).toFixed(2)}%
                </Typography>
            </Box>
        </>
    );
};

Prediction.propTypes = {
    label: PropTypes.string,
    value: PropTypes.number,
};
export default Prediction;
