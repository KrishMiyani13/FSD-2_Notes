// You  are  developing  a  MongoDB-based  application  using 
// Mongoose. You need to define a userSchema that includes various 
// validation rules to ensure data integrity and consistency. 
// 1.  Define  a  Mongoose  schema  called  userSchema  with  the following fields and validation requirements: 
// o username: 
// ▪ Required and must be between 4 and 20 characters long. 
// ▪ Must start with letters and end with digits. 
// ▪ Should  be  trimmed  of  any  leading  or  trailing spaces. 
// ▪ Should be converted to uppercase before saving. 
// o email: 
// ▪ Required, must be unique across the collection. 
// ▪ Must follow the standard email format. 
// o age: 
// ▪ Must be a number between 18 and 65. 
// o role: 
// ▪ Must be either 'user' or 'admin'. 
// ▪ Should default to 'user' if not provided.
const mg = require("mongoose");
// Connect to MongoDB
mg.connect("mongodb://127.0.0.1:27017/lju1234").then(
    () => { console.log("Success") }
).catch((error) => { console.error(error) });
// 1. Define the Mongoose schema with advanced validation rules
const userSchema = new mg.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,                     // Removes leading/trailing spaces
        minlength: [4, 'Username must be at least 4 characters long'],
        maxlength: [20, 'Username must be at most 20 characters long'],
        uppercase: true,                // Converts to uppercase automatically before saving
        validate: {
            // Regex: Starts with letters (^[A-Za-z]+), followed by anything (.*), ends with digits ([0-9]+$)
            validator: function(v) {
                return /^[A-Za-z]+.*[0-9]+$/.test(v);
            },
            message: 'Username must start with letters and end with digits!'
        }
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,                   // Ensures email is unique across the collection
        trim: true,
        lowercase: true,                // Forces emails to lowercase
        validate: {
            // Standard email format validation regex
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    age: {
        type: Number,
        min: [18, 'Age must be at least 18'],
        max: [65, 'Age cannot be more than 65']
    },
    role: {
        type: String,
        enum: {
            values: ['user', 'admin'],
            message: '{VALUE} is not a valid role. Choose user or admin.'
        },
        default: 'user'                 // Defaults to 'user' if not provided
    },
    date: { 
        type: Date, 
        default: () => new Date()       // Dynamic default date function
    }
});
// Create the model
const User = mg.model("User", userSchema);
// Example test function to test the validations
const createDoc = async () => {
    try {
        const userData = [
            { 
                username: "  alex99  ",     // Will be trimmed to "alex99" and saved as "ALEX99"
                email: "alex@example.com", 
                age: 25, 
                role: "user" 
            },
            { 
                username: "adminUser123",   // Starts with letters, ends with digits
                email: "admin@example.com", 
                age: 40, 
                role: "admin" 
            }
        ];
        const result = await User.insertMany(userData);
        console.log("Successfully saved validated users:", result);
    }
    catch (err) {
        console.log("Validation or Insertion Error: " + err.message);
    }
}
createDoc();