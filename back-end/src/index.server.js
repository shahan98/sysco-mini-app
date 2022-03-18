const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');

env.config();

//mongodb connection
mongoose
	.connect(
		`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.febis.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => {
		console.log('Database Connected!');
	});

app.use(bodyParser());
app.use('/api', authRoutes);
app.use('/api', adminRoutes);

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});
