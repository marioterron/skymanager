const User = require(__base + 'models/User')

module.exports = (req, res) => {
  const { username, password } = req.body
  const account = new User({ username })

  User.register(account, password, err => {
    if (err) {
      return res.status(500).json({success: false, msg: 'Error! Username already exists.'})
    }
    res.status(200).json({success: true, msg: 'Successful! Created new user.'})
  })
}
