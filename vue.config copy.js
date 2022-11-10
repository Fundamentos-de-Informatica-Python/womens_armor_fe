module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
};

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/'
}