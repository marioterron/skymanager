function authInterceptor (storageService) {
  function addToken (config) {
    const token = storageService.getToken()
    if (token) {
      config.headers = config.headers || {}
      config.headers.Authorization = 'JWT ' + token
    }
    return config
  }

  return {
    request: addToken
  }
}

module.exports = authInterceptor
