import { useState } from 'react';
import axios from 'axios';
import { Alert, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

const RequestAccess = () => {
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponse(0);
        try {
            if(email=='' || reason=='') throw new Error('Empty fields');

            await axios.post('/api/sendEmail', { email, reason });
            setEmail('');
            setReason('');
            setLoading(false);
            setResponse(3);
        } catch (error) {
            console.log('Error while sending email: \n', error);
            setLoading(false);
            (email=='' || reason=='') ? setResponse(1) : setResponse(2);
        }
    };

    return (
        <>
            <Typography
                variant='h1'
                sx={{
                    fontWeight: '700',
                    fontSize: 'h4.fontSize',
                    textAlign: 'center',
                    mt: {xs:6, md: 0},
                }}
                color='primary'
            >
              Request API Access
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Your email..."
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                        mt: 3,
                        width: '100%',
                    }}
                    required
                    type='email'
                />
                <TextField
                    label="Request reason..."
                    variant="outlined"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    sx={{
                        mt: 1.5,
                        width: '100%',
                    }}
                    required
                />
                <LoadingButton
                    size="large"
                    type="submit"
                    variant="outlined"
                    loading={loading}
                    disabled={loading}
                    sx={{
                        display: 'block',
                        mt: 1,
                        mx: 'auto',
                    }}
                >
                  Request
                </LoadingButton>
            </form>
            {(response !== 0) && (
                (response !== 3) ? (
                    <Alert severity="error">
                        {(response === 1)
                            ? 'Please, fill all empty fields'
                            : 'Something Went Wrong. Please, try again later.'
                        }
                    </Alert>
                ) : (
                    <Alert severity="success">Your request has been sent successfully!</Alert>
                )
            )}
        </>
    );
};

export default RequestAccess;
