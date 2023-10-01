const errorMiddleware = (error, req, res, next) => {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
};
module.exports = errorMiddleware;
