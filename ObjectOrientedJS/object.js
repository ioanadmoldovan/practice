class User {
  // constructor() = the function that is gonna fire whenever we create a new user
  constructor (email, name) {
    this.email = email
    this.name = name
  }
  login () {
    console.log(this.email, 'just logged in')
  }
  logout () {
    console.log(this.name, 'just logged out')
  }
}

const userOne = new User('john@gmail.com', 'John')
const userTwo = new User('george@gmail.com', 'George')

// the new keyword:
// - creates a new empty object
// - sets the value of 'this' to the new empty object
// - class constructor method

/*
const userOne = {
  email: 'John@gmail.com',
  name: 'John',
  login () {
    console.log(this.email, 'has logged in')
  },
  logout () {
    console.log(this.email, 'has logged out')
  }
}
// login & logout - methods
console.log(userOne.name)
console.log(userOne.login())
userOne.name = 'Jane'
userOne['name'] = 'John' // use when it's dynamic
userOne.age = '25' // addon properties; it's better not to add extra properties later, but to create the property even if you don't know the value

let prop = 'name'
console.log(userOne[prop])

prop = 'email'
console.log(userOne[prop]) // userOne.prop doesn't exist
*/

/* spaghetti code
// user 1
const userOneEmail = 'one.john@gmail.com'
const userOneName = 'John'
const userOneFriends = [ 'Jane' ]

// user 2
const userTwoEmail = 'two.jane@gmail.com'
const userTwoName = 'Jane'
const userTwoFriends = [ 'George' ]

// user 3
const userThreeEmail = 'three.george@gmail.com'
const userThreeName = 'George'
const userThreeFriends = [ 'John' ]

const login = email => console.log('the user is logged in')

const logout = email => console.log('the user is logged out')

const logFriends = friends => {
  friends.forEach(friend => {
    console.log(friend)
  })
}
*/
