interface TechObject {
  title: String,
  experience: Number
}


interface CreateUserData{
  name?: String,
  email: String,
  password: String,
  techs?: Array<String | TechObject>
}

function createUser({name, email, password, techs}: CreateUserData){
  const user = {
    name,
    email,
    password,
    techs
  }

  return user;
}

export default createUser;