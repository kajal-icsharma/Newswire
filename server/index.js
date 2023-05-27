const express = require('express'),
	mongoose = require('mongoose');
const app = express();
const cors = require('cors');

mongoose
	.connect('mongodb+srv://sharmakajal1920:kajal-1234@cluster0.bpqdjtp.mongodb.net/?retryWrites=true&w=majority')
	.then(() => console.log('DB Connected!'))
	.catch((error) => console.log(error));

app.use(express.json());
app.use(cors());
const newsRoutes = require('./routes/news');
app.use(newsRoutes);

app.listen(3002, () => {
	console.log('server started at port 3002');
});