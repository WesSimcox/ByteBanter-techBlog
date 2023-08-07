// Middleware to enforce user authentication for protected routes
function ensureAuthenticated(req, res, next) {
    if (!req.session.isAuthenticated) {
        res.redirect('/login');
    } else {
        next();
    }
}

module.exports = ensureAuthenticated;