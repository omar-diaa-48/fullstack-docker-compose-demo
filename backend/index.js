const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config();

const app = express();

const PORT = process.env.PORT

app.use(cors());
app.use(express.json())

app.get('/products', (req, res) => {
    const products = [{ id: 1, title: 'T-shirt', price: 40 }, { id: 2, title: 'Jacket', price: 110 }]
    res.json(products)
})

app.listen(PORT, () => console.log(`Backend is running on port ${PORT}`))