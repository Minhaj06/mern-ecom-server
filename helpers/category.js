exports.validCategory = (name) => {
  return new Promise((resolve, resject) => {
    if (!name.trim()) {
      return res.json({ error: "Category name is required" });
    }

    const existingCategory = Category.findOne({ name });
    if (existingCategory) {
      return res.json({ error: "Category already exists" });
    }
  });
};
