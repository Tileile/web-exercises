const bcrypt = require('bcrypt')


const password = 'fen&5f2'; // 

// Function to hash a password
async function hashPassword(pwd) {

    try {
        // Generate a salt with 10 rounds (you can adjust this number)
        const salt = await bcrypt.genSalt(10);

        // Hash the password using the generated salt
        const hashedPwd = await bcrypt.hash(pwd, salt);

        console.log('Password:', pwd);
        console.log('Salt:', salt);
        console.log('Hashed Password:', hashedPwd);

        return hashedPwd
    } catch (error) {
        console.error('Error:', error);
    }
}



// Function to compare a password with a hash
async function comparePassword(password) {
    const hashedPassword = await hashPassword(password);
    // Call the function to hash the password
    const isMatch = await bcrypt.compare(password, hashedPassword);
    try {
        // Compare the input password with the stored hashed password
        if (isMatch) {
            console.log('Password is correct.');
        } else {
            console.log('Password is incorrect.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function to compare the password
comparePassword(password);

// Hash password synchronously with 10 salt rounds
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(password, salt);

console.log('Synchronous Hashed Password:', hashedPassword);