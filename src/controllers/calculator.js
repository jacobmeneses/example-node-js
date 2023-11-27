
/**
 * @swagger
 * /calculator/interest:
 *   get:
 *     summary: Computes interest given rate, days, and amount
 *     responses:
 *          200:
 *             description: Interest amount
 *             content:
 *               application/json:
 *             example:
 *               interest: 111.1111111111
 */
const getInterest = (ctx) => {
    const amount = parseFloat(ctx.query.m) || 0;
    const rate = parseFloat(ctx.query.r) || 0;
    const days = parseFloat(ctx.query.d) || 0;

    ctx.body = { interest: amount * rate * days / 360.00 }
};

module.exports = {
    getInterest,
};