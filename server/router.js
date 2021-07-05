const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const path = require('path')

router.post('/upload', async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ success: false, message: 'No files were uploaded' })
    }
    const file = req.files.image
    
    const filePath = path.join('uploads', `${uuidv4()}.png`)
    const fullFilePath = path.join(__dirname, '../', filePath)

    file.mv(fullFilePath, (err) => {
      if (err) return res.status(500).json({ success: false, message: 'Failed to save file' })
      res.json({ success: true, url: filePath })
    })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
