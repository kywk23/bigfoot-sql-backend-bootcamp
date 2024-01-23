const BaseController = require("./baseController");

class SightingsController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Retrieve specific sighting
  async getOne(req, res) {
    const { sightingId } = req.params;
    try {
      const sighting = await this.model.findByPk(sightingId);
      return res.json(sighting);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async insertOne(req, res) {
    const { date, location, notes } = req.body;
    try {
      // Create new sighting
      const newSighting = await this.model.create({
        date: new Date(date),
        location: location,
        notes: notes,
      });
      // Respond with new sighting
      return res.json(newSighting);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async deleteOne(req, res) {
    const { sightingId } = req.params;
    try {
      // Use sightingId in your delete operation
      const deleteSighting = await this.model.destroy({
        where: {
          id: sightingId,
        },
      });
      // Respond with new sighting
      return res.json(deleteSighting);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = SightingsController;
