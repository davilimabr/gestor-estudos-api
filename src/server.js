import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API ouvindo em http://localhost:${PORT}`));
