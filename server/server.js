import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

const PORT = process.env.PORT || 3001;

export const server = async () => { // eslint-disable-line import/prefer-default-export
  try {
    const app = express();
    const staticFiles = express.static(path.join(__dirname, '../dist'));

    app.use(cors());
    app.use(bodyParser.json({ limit: '20mb' }));
    app.use(staticFiles);

    app.get('/*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
    });

    app.listen(PORT, () => {
      console.log(`Visit http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};
