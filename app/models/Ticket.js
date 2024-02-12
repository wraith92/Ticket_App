import mongoose, { Schema } from "mongoose";

// Check if MongoDB URI is provided
if (!process.env.MONGODB_URI) {
  console.error('MongoDB URI not found in environment variables.');
  process.exit(1); // Exit the application if MongoDB URI is not set
}

// Connect to MongoDB with provided URI and options
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

// Define the schema for Ticket
const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

// Load or define the Ticket model
let Ticket;

try {
  Ticket = mongoose.model('Ticket');
} catch (error) {
  Ticket = mongoose.model('Ticket', ticketSchema);
}

export default Ticket;
