const jwt = require("jsonwebtoken");

async function generateAccessToken(payload: any) {
  return jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: "1d" });
}

async function checkAuthentication(request: any) {
  try {
    const accessToken = request.headers.authorization.split(" ")[1];
    const jwtResponse = jwt.verify(
      String(accessToken),
      process.env.ACCESS_TOKEN
    );
    return jwtResponse;
  } catch (error) {
    return false;
  }
}

async function decryptAccessToken(accessToken : string) {
  return jwt.verify(accessToken, process.env.ACCESS_TOKEN, (err : any, decoded : any) => {
    if (err) {
      console.error("Token verification failed:", err);
      return;
    }
    return decoded;
  });
}

export { generateAccessToken, checkAuthentication, decryptAccessToken };
