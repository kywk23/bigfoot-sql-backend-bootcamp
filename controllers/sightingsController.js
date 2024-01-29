const BaseController = require("./baseController");

class SightingsController extends BaseController {
  constructor(model, commentModel, categoryModel) {
    super(model);
    this.commentModel = commentModel;
    this.categoryModel = categoryModel;
  }

  // Retrieve specific sighting
  async getOne(req, res) {
    const { sightingId } = req.params;
    try {
      const sighting = await this.model.findByPk(sightingId, {
        include: this.categoryModel,
      });
      return res.json(sighting);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getAll(req, res) {
    try {
      const output = await this.model.findAll({
        include: this.categoryModel,
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async insertOne(req, res) {
    //base on frontend naming convention
    const { date, location, notes, selectedCategoryId } = req.body;
    try {
      // Create new sighting
      const newSighting = await this.model.create({
        date: new Date(date),
        location: location,
        notes: notes,
      });
      const selectedCategories = await this.categoryModel.findAll({
        where: {
          id: selectedCategoryId,
        },
      });
      console.log(selectedCategories);
      // Associated new sighting with selected categories
      await newSighting.setCategories(selectedCategories);
      // Respond with new sighting
      return res.json(newSighting);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async deleteOne(req, res) {
    const { sightingId } = req.params;
    try {
      const deleteSighting = await this.model.destroy({
        where: {
          id: sightingId,
        },
      });
      return res.json(deleteSighting);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async editOne(req, res) {
    const { sightingId } = req.params;
    const { location, notes } = req.body;
    try {
      const editSighting = await this.model.update(
        {
          location: location,
          notes: notes,
        },
        {
          where: {
            id: sightingId,
          },
        }
      );
      console.log(`edit is,`, editSighting);
      const output = await this.model.findByPk(sightingId);
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }

  // Gets all comments of a given sighting
  async getAllComments(req, res) {
    const { sightingId } = req.params;

    try {
      const comment = await this.commentModel.findAll({
        where: {
          sightingId: sightingId,
        },
      });
      return res.json(comment);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async insertOneComment(req, res) {
    const { sightingId } = req.params;
    const { content } = req.body;

    try {
      // Create new sighting
      const newComment = await this.commentModel.create({
        sightingId: Number(sightingId),
        content: content,
      });

      return res.json(newComment);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = SightingsController;
