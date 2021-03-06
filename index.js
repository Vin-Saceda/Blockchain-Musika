const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('./routes/index.js')

const app = express()  
const router = express.Router() 


router.use(bodyParser.urlencoded({ extended: false })) 
router.use(bodyParser.json())  

const url = require('./url/key')

mongoose.connect(url.mongoURI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log('DB Connected')).catch(err => console.log(err))

let port = 5000 || process.env.PORT  

routes(router) 	
app.get('/', (req, res) => {
    res.json('Heroku Deployment Success!')
})
const corsOptions = {
    // origin: ['http://localhost:3000', 'https://arcane-journey-33417.herokuapp.com'],
    origin: 'http://localhost:3000',
	credentials:true,
}

app.use(cors(corsOptions))	 
app.use(bodyParser.json())

app.use('/api', router)  

app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'), function() {
  	console.log('Node app is running on port', app.get('port'))
})