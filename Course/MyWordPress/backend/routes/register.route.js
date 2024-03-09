const express = require('express');
const accountController = require('../controller/admin/account.controller');

const router = express.Router()

router.post("/", async (req, res) => {
  try {
    const tokenResponse = await accountController.register(req.body);
    res.status(200).json({ token: tokenResponse.token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;