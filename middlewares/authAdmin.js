export const requireAdmin = (req, res, next) => {
    if (global.currentUser && global.currentUser.admin) {
        next(); 
    } else {
        res.status(403).send('Access denied. Admins only.');
    }
};