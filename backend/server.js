const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// routes
const gamesRouter = require('./routes/gameRoutes')

const app = express();
const dbUrl = 'mongodb+srv://root:eastood0009@cluster0-cnaau.mongodb.net/test?retryWrites=true&w=majority';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

app.get('/', (req,res) => {
    res.status(200).json({message: 'Games!'})
})

mongoose.connect(dbUrl, options, () => console.log('Connected to DB!') )


app.use(bodyParser.json())
app.use(cors())
app.use(gamesRouter)

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running on port: ${port}`))
