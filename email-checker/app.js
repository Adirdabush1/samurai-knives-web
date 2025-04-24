const checkEmail = require('./utils.js')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Enter your name: ', (name) => {
  rl.question('Enter your email: ', (email) => {
    if (checkEmail(email)) {
      console.log(`✅ Hey ${name}, your email looks good!`)
    } else {
      console.log(`❌ Hmm... "${email}" doesn't look like a valid email.`)
    }
    rl.close()
  })
})
