const mongoose = require('mongoose');

mongoose.connect('your-mongodb-connection-string')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express();
app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
