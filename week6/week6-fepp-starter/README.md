### Iteration 6
2. 
    What is the purpose of userSchema.statics.login in userModel.js?
    - To define a custom static method on the userSchema that encapsulates the login logic.

    Compare User.findOne({ email }) to this.findOne({ email }). When and why do we use this instead of the model's name?
    - User is used when explicitly referring to the imported User-schema, if logic for managing User-schema is done on controllers or other parts of the application where the model is imported.

    - "this" is used when referring to the User-schema on custom static methods, if logic for managing User-schema is encapsulated on the custom static methods.

    Why is bcrypt imported in userController.js and not in userModel.js? 
    - Because bcrypt-methods are used
    in userController.
    
3. 
     - In our project, we will likely use both approaches for managing schemas, as the logic for handling schemas was implemented before these methods were introduced. Refactoring is unlikely to provide significant benefits.

### Iteration 7

1. What is the purpose of userSchema.statics.signup in userModel.js?

    - To define a custom static method on the userSchema that encapsulates the signup logic, such as creating a new user after performing validations or hashing the password.

2. Compare User.create({ email, password: hash }) to this.create({ email, password: hash }). When and why do we use this instead of the model's name?

    - User.create({ email, password: hash }) is used when explicitly referring to the User model, typically in controllers or other parts of the application where the model is imported.

    - this.create({ email, password: hash }) is used within a static method on the schema (e.g., userSchema.statics.signup) because this refers to the model bound to the schema. This makes the method reusable and avoids hardcoding the model name, allowing flexibility if the model is renamed or reused in other contexts.

3. Why is validator imported in userController.js and not in userModel.js?

    - Validator is imported in userController.js because it is typically used to validate user input from requests, such as checking if an email is valid, before interacting with the model. Input validation is usually handled in the controller to ensure data is clean before being passed to the database layer.

4. Discuss which approach you plan to use for your project and explain why.
    - In our project, we will likely use both approaches for managing schemas, as the logic for handling schemas was implemented before these methods were introduced. Refactoring is unlikely to provide significant benefits.