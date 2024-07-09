/**
 * @swagger
 * tags:
 *   name: Devices
 *   description: Device management
 */

const express = require("express");
const {
  addDevice,
  getDevices,
  updateDevice,
} = require("../controllers/deviceController");
const router = express.Router();
const auth = require("../middleware/autthMiddleware");

/**
 * @swagger
 * /api/devices:
 *   post:
 *     summary: Add a new device
 *     tags: [Devices]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *               model:
 *                 type: string
 *               serialNumber:
 *                 type: string
 *               assignedUser:
 *                 type: string
 *               location:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Device added successfully
 *       400:
 *         description: Bad request
 */
router.post("/", auth, addDevice);

/**
 * @swagger
 * /api/devices:
 *   get:
 *     summary: Get all devices
 *     tags: [Devices]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all devices
 *       400:
 *         description: Bad request
 */
router.get("/", auth, getDevices);

/**
 * @swagger
 * /api/devices/{id}:
 *   put:
 *     summary: Update a device
 *     tags: [Devices]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The device ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *               model:
 *                 type: string
 *               serialNumber:
 *                 type: string
 *               assignedUser:
 *                 type: string
 *               location:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Device updated successfully
 *       400:
 *         description: Bad request
 */
router.put("/:id", auth, updateDevice);

module.exports = router;
