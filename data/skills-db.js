const skills = [
  {text: 'Javascript', yes: true, _id:123456},
  {text: 'Python', yes: false, _id: 678910},
  {text: 'Node.js', yes: true, _id:922902},
  {text: 'React', yes: false, _id:987654}
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the skills
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}
