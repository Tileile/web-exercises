/*data model
{
    "name": "Matti Seppänen",
    "email": "matti@example.com",
    "password": "M@45mtg$",
    "phone_number": "+358401234567",
    "gender": "Male",
    "date_of_birth": "2000-01-15",
    "membership_status": "Active"
  }
*/

let userArray = [];
let nextId = 1;

// Get all users
const getAll = () => {
  return userArray;
};

// Add a new user
const addOne = (name, email, password, phone_number, gender, date_of_birth, membership_status) => {
  if (!name || !email || !password || !phone_number || !gender || !date_of_birth || !membership_status) {
    return false;
  }
  const newUser = {
    id: nextId++,
    name: name,
    email: email,
    password: password,
    phone_number: phone_number,
    gender: gender,
    date_of_birth: date_of_birth,
    membership_status: membership_status,
  };
  userArray.push(newUser);
  return newUser;
};

// Find a user by ID
const findById = (id) => {
  const user = userArray.find((user) => user.id === Number(id));
  if (user) {
    return user;
  } else return false;
};

// Update a user's information by ID
const updateOneById = (id, updatedData) => {
  const user = findById(id);
  if (user) {
    if (updatedData.name) {
      user.name = updatedData.name;
    }
    if (updatedData.email) {
      user.email = updatedData.email;
    }
    if (updatedData.password) {
      user.password = updatedData.password;
    }
    if (updatedData.phone_number) {
      user.phone_number = updatedData.phone_number;
    }
    if (updatedData.gender) {
      user.gender = updatedData.gender;
    }
    if (updatedData.date_of_birth) {
      user.date_of_birth = updatedData.date_of_birth;
    }
    if (updatedData.membership_status) {
      user.membership_status = updatedData.membership_status;
    }
    return user;
  }
  return false;
};

// Delete a user by ID
const deleteOneById = (id) => {
  const user = findById(id);
  if (user) {
    const initialLength = userArray.length;
    userArray = userArray.filter((user) => user.id !== Number(id));
    return userArray.length < initialLength;
  } else return false;
};

// Sample test run
if (require.main === module) {
  let result = addOne(
    "Matti Seppänen",
    "matti@example.com",
    "M@45mtg$",
    "+358401234567",
    "Male",
    "2000-01-15",
    "Active"
  );
  console.log(result);

  result = addOne(
    "John Doe",
    "john@example.com",
    "securepassword123",
    "+358409876543",
    "Male",
    "1985-05-22",
    "Inactive"
  );
  console.log(result);

  console.log(`getAll called: ${getAll()}`);
  console.log(`findById called: ${findById(2)}`);
  console.log(
    `updateById called: ${updateOneById(2, {
      name: "Jane Doe",
      email: "jane@example.com",
      phone_number: "+358401234555",
      membership_status: "Active",
    })}`
  );
  console.log(`findById called after item updated: ${findById(2)}`);
  console.log(`deleteById called: ${deleteOneById(2)}`);
  console.log(`findById called after item deleted: ${findById(2)}`);
}

module.exports = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

