const dotenv = require("dotenv")
dotenv.config();
const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require("swagger-ui-express")

const paymentRoute = require("./paymentRoute");
const { logger } = require("./config/winston");

const app = express();
app.use(express.json())
app.use(cors());


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'node js projects in mongodb',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://localhost:7000/'
            }
        ]
    },

    apis: ['./app.js'], // files containing annotations as above
};
const openapiSpecification = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
/**
* @swagger
* /:
*   get:
*     description: This api is used to check api is working or not 
*     responses:
*       200:
*         description: To test get method .
*/


app.get('/', (req, res) => {
    res.send("hello everyone")
})

app.use('/api', paymentRoute)


const port = process.env.PORT
app.listen(port, () => {
    logger.info(`app is running on port ${port}`);
})
