const express = require("express");
const router = express.Router();

class SightingsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    //MAIN ALL TO /
    router.get("/", this.controller.getAll.bind(this.controller));
    router.post("/", this.controller.insertOne.bind(this.controller));

    // ROUTES TO sightingID
    router.get("/:sightingId", this.controller.getOne.bind(this.controller));
    router.delete("/:sightingId", this.controller.deleteOne.bind(this.controller));
    router.put("/:sightingId", this.controller.editOne.bind(this.controller));

    //COMMENTS ROUTE
    router.get("/:sightingId/comments", this.controller.getAllComments.bind(this.controller));
    router.post("/:sightingId/comments", this.controller.insertOneComment.bind(this.controller));

    return router;
  }
}

module.exports = SightingsRouter;
