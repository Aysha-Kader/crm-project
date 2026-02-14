import jwt from "jsonwebtoken";

export const generateToken = (payload) => {

  try {

    const token = jwt.sign(

      payload,

      process.env.JWT_SECRET,

      {
        expiresIn: "4d"
      }

    );

    return token;

  } catch (error) {

    console.error("Token generation failed");

    throw error;

  }

};



export const verifyTokenService = (token) => {

  try {

    const decoded = jwt.verify(

      token,

      process.env.JWT_SECRET

    );

    return decoded;

  } catch (error) {

    console.error("Token verification failed");

    throw error;

  }

};
