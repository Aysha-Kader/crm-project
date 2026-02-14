import { verifyTokenService } from "../services/tokenServices.js";

const verifyToken = (req, res, next) => {

  try {

    
    const authHeader = req.headers.authorization;

    if (!authHeader) {

      return res.status(401).json({
        message: "No token provided"
      });

    }

    
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    
    const decoded = verifyTokenService(token);

    
    req.user = decoded;

    next();

  } catch (error) {

    return res.status(401).json({
      message: "Invalid token"
    });

  }

};

export default verifyToken;
