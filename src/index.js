const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-koa');

const app = new Koa();
const router = new Router();

// Setup Swagger JSDoc
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Koa.js OpenAPI Example',
      version: '1.0.0',
      description: 'A simple example of Koa.js with OpenAPI 3',
    },
};

const options = {
    swaggerDefinition,
    apis: [ './src/controllers/calculator.js' ], // Point to the file that defines the routes
};

const swaggerSpec = swaggerJSDoc(options);

// Middleware to serve Swagger UI
// app.use(swaggerUi.serve);
//app.use(swaggerUi.setup(swaggerSpec));

// Middleware
app.use(bodyParser());

const calculator = require('./controllers/calculator');

router.get('/example', (ctx) => {
    ctx.body = { message: 'another' }
})
router.get('/calculator/interest', (ctx) => calculator.getInterest(ctx))


app.use(router.routes());
app.use(router.allowedMethods());
const port = process.env.EXAMPLE_PORT;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});