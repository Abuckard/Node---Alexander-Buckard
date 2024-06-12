export const requireAdmin = (req, res, next) => {
    if (global.currentUser && global.currentUser.admin) {
        next(); // Användaren är en administratör
    } else {
        res.status(403).send('Access denied. Admins only.');
    }
};