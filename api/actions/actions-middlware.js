function validateActionFields(req, res, next) {
    const { project_id, description, notes } = req.body;
    if (!project_id || !description || !notes) {
      res.status(400).json({ message: 'Project ID, description, and notes are required' });
    } else {
      next();
    }
  }
  
  module.exports = validateActionFields;
  










