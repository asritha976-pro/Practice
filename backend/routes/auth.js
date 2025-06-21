const authRouter = require('express').Router();
const authController = require('../controllers/authController');
const {authLimiter} = require('../middlewares/rateLimiterMiddleware')
// const {authenticate} = require('../middlewares/authMiddleware');
// const {requiredRole} = require('../middlewares/verifyRoleMiddleware');

authRouter.post('/signup',authLimiter,authController.signup);
// userRouter.patch('/balance',userController.modifyInitialBalance);
authRouter.post('/login',authLimiter,authController.login);

module.exports = authRouter;