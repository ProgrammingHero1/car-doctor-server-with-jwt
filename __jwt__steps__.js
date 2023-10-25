/****
 * install jsonwebtoken
 * jwt.sign (payload, secret, {expiresIn:})
 * token client 
 * 
 * 
*/


/***
 * how to store token in the client side
 * 1. memory --> ok type
 * 2. local storage -->ok type (XSS)
 * 3. cookies: http only
*/

/**
 * 1. set cookies with http only. for development secure: false, 
 * 
 * 2. cors
 * app.use(cors({
    origin: ['http://localhost:5174'],
    credentials: true
}));
 * 
 * 3. client side axios setting
 * in axios set withCredentials: true
*/

