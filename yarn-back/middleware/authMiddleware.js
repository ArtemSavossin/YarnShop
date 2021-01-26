import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;
  console.log(req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (e) {
      console.log(e.message);
      res.status(401);
      throw new Error('Ошибка токена доступа, перезайдите в аккаунт');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Ошибка токена доступа, перезайдите в аккаунт');
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Нет достпупа к этой информации');
  }
};

export { protect, admin };
