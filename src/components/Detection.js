import { useState } from 'react';
import { Alert, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Prediction from './Prediction';

console.log('process.env.API_BASE_URL', process.env.API_BASE_URL);
const Detection = () => {
    const [inputText, setInputText] = useState('');
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handlePredict = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);

        try {
            const response = await fetch('/api/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputText }),
            });
            
            if(response.status !== 200) throw new Error('Something went wrong');
            const data = await response.json();

            setPrediction(data[0]);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
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
                }}
                color='primary'
            >
                Try It Out
            </Typography>

            <form onSubmit={handlePredict}>
                <TextField
                    label="Write your sentence..."
                    variant="outlined"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    sx={{
                        mt: 3,
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
                    Predict
                </LoadingButton>
            </form>

            {error && (
                <Alert severity="error">
                    Something Went Wrong. Please, try again later.
                </Alert>
            )}
            {prediction && (
                <>
                    <Typography
                        variant='subtitle2'
                        color='textPrimary'
                        mt={1}
                    >
                        {
                            prediction.label==='Neither'
                                ? 'Most likely, your sentence doesn\'t contain hate speech'
                                : `Most likely, your sentence contain ${prediction.label}`
                        }
                    </Typography>
                    {Object.keys(prediction).map((label) =>
                        (label !== 'label') &&
                            <Prediction label={label} value={prediction[label]} key={label} />
                    )}
                </>
            )}
        </>
    );
};

export default Detection;
