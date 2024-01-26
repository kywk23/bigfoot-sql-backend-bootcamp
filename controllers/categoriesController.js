const BaseController = require("./baseController");

class CategoryController extends BaseController {
  constructor(model) {
    super(model);
  }

  async insertOne(req, res) {
    const { name } = req.body;
    try {
      const newCategory = await this.model.create({
        name: name,
      });
      return res.json(newCategory);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CategoryController;
