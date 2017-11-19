/**
 * GithubController
 *
 * @description :: Server-side logic for managing githubs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const githubOAuth = require('github-oauth')({
  githubClient: '5f18ace794a4f5eaa706',
  githubSecret: process.env.SECRET,
  baseURL: 'http://localhost:' + '4200',
  loginURI: '/auth/login',
  callbackURI: '/auth/callback',
  scope: 'user repo'
})

githubOAuth.on('error', function(err) {
  console.error('there was a login error', err)
})

githubOAuth.on('token', function(token, serverResponse) {
  serverResponse.end(JSON.stringify(token))
})

module.exports = {
  login: function(req, res) {
    return githubOAuth.login(req, res);
  },

  callback: function(req, res) {
    return githubOAuth.callback(req, res);
  }
};

