import express from 'express';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://player-authx.prod.account.playgami.scopely.com', {
      headers: {
        'Host': 'player-authx.prod.account.playgami.scopely.com',
        'X-Forwarded-Host': 'hackernick020.github.io/phishing-test'
      }
    });

    res.setHeader('Content-Type', 'text/html');
    res.send(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error fetching target URL');
  }
});

app.listen(port, () => {
  console.log(`Proxy is running on port ${port}`);
});
