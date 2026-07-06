const mg = require("mongoose");

// Connect to your local MongoDB database
mg.connect("mongodb://127.0.0.1:27017/lju1234").then(
    () => { console.log("Database Connected Successfully") }
).catch((error) => { console.error(error) });

// 1. Define the userSchema with explicit validation rules
const userSchema = new mg.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true, // Ensures no duplicate emails in the database
        trim: true,
        lowercase: true,
        validate: {
            // Standard regular expression to check valid email formatting
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: 'The email address is not valid.'
        }
    },
    product: {
        type: String,
        required: [true, 'Product is required'],
        trim: true,
        validate: {
            // Regex: ^[a-zA-Z0-9]+$ matches only letters and numbers
            validator: function(v) {
                return /^[a-zA-Z0-9]+$/.test(v);
            },
            message: 'It is not a valid alphanumeric code.'
        }
    }
});

// Create the Model
const User = mg.model("User", userSchema);

// Helper function to generate completely random alphanumeric strings
const generateRandomString = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.random() * chars.length);
    }
    return result;
};

// 2. Write the asynchronous function to create and save random data
const createDoc = async () => {
    try {
        // Generate random email and product values to satisfy validation
        const randomEmail = `user_${generateRandomString(5)}@example.com`;
        const randomProductCode = generateRandomString(8); // e.g., "A1b2C3d4"

        const randomUserData = new User({
            email: randomEmail,
            product: randomProductCode
        });

        // Save the document into the collection
        const result = await randomUserData.save();
        console.log("Successfully created dynamic user document:");
        console.log(result);
    }
    catch (err) {
        console.log("Error Occurred: " + err.message);
    }
};

// Execute the function
createDoc();
