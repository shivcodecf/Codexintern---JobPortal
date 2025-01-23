import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
    try {
        const token = req.cookies.token; // Read token from cookies
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated. Token is missing.",
                success: false,
            });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if (!decoded) {
            return res.status(401).json({
                message: "Invalid token",
                success: false,
            });
        }

        req.id = decoded.userId; // Attach userId to the request object
        next(); // Call the next middleware or controller
    } catch (error) {
        console.error("Authentication error:", error.message);
        return res.status(500).json({
            message: "Authentication failed due to a server error.",
            success: false,
        });
    }
};

export default isAuthenticated;
