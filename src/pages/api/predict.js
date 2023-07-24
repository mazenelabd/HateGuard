import axios from 'axios';

const handler = async (req, res) => {
    const { inputText } = req.body;
    const url = `${process.env.API_BASE_URL}predict`;
    const headers = {
        'Authorization': process.env.SECRET,
        'Content-Type': 'application/json',
    };
  
    try {
        const response = await axios.post(url, { data: [inputText] }, { headers });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

export default handler;
