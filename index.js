const express =  require('express');
const mongoose = require('mongoose');
const app = express();
const signUp = require('./routes/signUp'); 
const logIn = require('./routes/login');
const stripeRoute = require('./routes/stripeRoute');
const cookieParser = require('cookie-parser');
const {requireAuth} = require('./middleware/authentication');
const logOut = require('./routes/logOut');

app.use(express.json());
app.use(cookieParser());

const dbURI = 'mongodb+srv://Fawad:shaun1234@cluster1.c7amp.mongodb.net/stripe-api-Implementation?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then(() => {console.log("connected to MongoDB");})
  .catch((err) => console.log(err));

app.use('/api/signUp/',signUp);
app.use('/api/logIn/',logIn);
app.get('/api/stripe/',requireAuth, (req, res) => res.json('/stripe'));
app.use('/stripe',stripeRoute);
app.use('/api/logOut',logOut);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{console.log(`Server is ready at PORT ${PORT}`);});