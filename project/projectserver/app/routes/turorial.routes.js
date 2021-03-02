module.exports = app => {
  const bloodreg = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", bloodreg.create);

  // Retrieve all Tutorials
  router.get("/", bloodreg.findAll);

  // Retrieve all published Tutorials
  //router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", bloodreg.findOne);

  // Update a Tutorial with id
  router.put("/:id", bloodreg.update);

  // Delete a Tutorial with id
  router.delete("/:id", bloodreg.delete);

  // Delete all Tutorials
  router.delete("/", bloodreg.deleteAll);

  app.use('/api/tutorials', router);
};
