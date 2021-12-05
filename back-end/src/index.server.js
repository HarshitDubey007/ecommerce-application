const express = require('express')
const app = express()
const env = require('dotenv')
const mongoose = require('mongoose')


// router
const userRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin/auth')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart')
//environment variable 

env.config();


// mongoose connection 
//const uri = "mongodb+srv://dbUser:<password>@cluster0.fqkuj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.fqkuj.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {console.log('Database Connected')})



app.use(express.json())
app.use('/api', userRoutes)
app.use('/api', adminRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)
app.use('/api', cartRoutes)




app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
})