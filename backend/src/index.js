const express = require('express');
const cors = require('cors');
const sequelize = require('./config');
const User = require('./models/User')(sequelize);
const Company = require('./models/Company');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from HRMS Backend!');
});

app.use('/api/users', userRoutes);
sequelize.sync().then(() => {
    console.log('Database synced');

    app.listen(port, () => {
      console.log(`HRMS Backend running on port ${port}`);
    });
});