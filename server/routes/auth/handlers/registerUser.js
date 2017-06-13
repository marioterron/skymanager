const User = require(__base + 'models/User')

module.exports = (req, res) => {
  const { username, password } = req.body
  const account = new User({ username })

  User.register(account, password, err => {
    if (err) {
      return res.json({success: false, msg: 'Error! Username already exists.'})
    }
    return res.json({success: true, msg: 'Successful! Created new user.'})
  })
}
