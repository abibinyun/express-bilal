const path = require("path");
const fs = require("fs");
const Product = require("./model");
const { Op } = require("sequelize");

const index = async (req, res) => {
  let { search } = req.query;
  if (search) {
    await Product.sync();
    let products = await Product.findAll({
      where: {
        name: {
          [Op.like]: `${search}`,
        },
      },
    });
    res.send(products);
  } else {
    await Product.sync();
    let products = await Product.findAll({});
    res.send(products);
  }
};

const view = async (req, res) => {
  let id = req.params.id;
  await Product.sync();
  let products = await Product.findOne({ where: { id: id } });
  res.send(products);
};

const destroy = async (req, res) => {
  let id = req.params.id;
  await Product.sync();
  await Product.destroy({ where: { id: id } });
  res.send("product is delete");
};

const post = async (req, res) => {
  const { users_id, name, price, stock, status } = req.body;
  const image = req.file;
  if (image) {
    const target = path.join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
    try {
      await Product.sync();
      const result = await Product.create({ users_id, name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}` });
      res.send(result);
    } catch (e) {
      res.send(e);
    }
  }
};

const update = async (req, res) => {
  const { users_id, name, price, stock, status } = req.body;
  const image = req.file;
  let id = req.params.id;
  if (image) {
    const target = path.join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
    try {
      await Product.sync();
      await Product.update({ users_id, name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}` }, { where: { id: id } });
      res.send("product is update");
    } catch (e) {
      res.send(e);
    }
  } else {
    try {
      await Product.sync();
      await Product.update({ users_id, name, price, stock, status }, { where: { id: id } });
      res.send("product is update");
    } catch (e) {
      res.send(e);
    }
  }
};

module.exports = {
  index,
  view,
  post,
  update,
  destroy,
};
