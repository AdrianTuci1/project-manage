const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new mongoose.Schema(
    {
        "name": String, // Name of the project
        "tasks": [
          {
            "_id": String,
            "title": String, // Title of the task
            "status": String, // Current status of the task (e.g., "To Do", "In Progress", "Done")
            "priority": String, // Priority of the task (e.g., "High", "Medium", "Low")
            "due_date": Date, // Due date for the task
            "assigned_to": String // User assigned to the task (optional)
          }
        ],
        "status": String, // Overall project status (e.g., "Active", "Completed", "On Hold")
        "priority": String, // Overall project priority (e.g., "High", "Medium", "Low")
        "image": String // URL or path to an image representing the project (optional)
      }
      
)

const projectModel = mongoose.model("project", projectSchema)

module.exports = projectModel;