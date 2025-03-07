const setSecurityHeaders = (req, res, next) => {
  res.setHeader(
    'Permissions-Policy', 
    'browsing-topics=(), interest-cohort=()'
  );
  next();
};

module.exports = setSecurityHeaders; 