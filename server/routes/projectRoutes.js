module.exports = function(app){
var projectController = require('../controllers/projectController');

app
.route("/projects")
.get(projectController.listAll)
.post(projectController.createProject)

app
.route("/projects/:id")
.put(projectController.updateProject)
.delete(projectController.deleteProject)
};

