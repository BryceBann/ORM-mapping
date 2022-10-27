const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll()
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  // Tag.findByPk or findOne??
});

router.post('/', (req, res) => {
  // create a new tag what you mean
  Tag.create()
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update()
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy() //needs a where to delete??
});

module.exports = router;
