const express = require('express');
const cors = require('cors');

const route = require('./routes');

const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());
route(app);

app.listen(port, () => {
	console.log('Server is running on port: ', port);
});
