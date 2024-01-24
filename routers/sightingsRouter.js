const express = require("express");
const router = express.Router();

class SightingsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    //MAIN ALL TO /
    //get request
    router.get("/", this.controller.getAll.bind(this.controller));
    //post (adding) request
    router.post("/", this.controller.insertOne.bind(this.controller));

    // ROUTES TO sightingID
    router.get("/:sightingId", this.controller.getOne.bind(this.controller));
    // delete
    router.delete("/:sightingId", this.controller.deleteOne.bind(this.controller));
    //edit request
    router.put("/:sightingId", this.controller.editOne.bind(this.controller));
    return router;
  }
}

module.exports = SightingsRouter;
