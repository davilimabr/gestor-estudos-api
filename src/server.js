import app from './app.js';
import sequelize from './config/database.js';

const PORT = process.env.PORT || 3000;
(async () => {
  await sequelize.sync(); // em prod, use migrations
  app.listen(PORT, () => console.log(`API ouvindo em http://localhost:${PORT}`));
})();
