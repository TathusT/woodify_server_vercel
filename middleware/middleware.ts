import { Request, Response, NextFunction } from 'express';
const jwt = require("jsonwebtoken");

const checkMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header not provided' });
    }
    const accessToken = authHeader.split(" ")[1];

    if (!accessToken) {
      return res.status(401).json({ message: 'Access token not provided' });
    }

    const jwtResponse = jwt.verify(accessToken, process.env.ACCESS_TOKEN as string);
    // req.user = jwtResponse; /// กลับมาดู
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default checkMiddleware;
