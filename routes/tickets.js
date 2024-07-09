/**
 * @swagger
 * tags:
 *   name: Tickets
 *   description: Ticket management
 */

const express = require("express");
const {
  createTicket,
  getTickets,
  updateTicket,
  addLog,
  completeTicket
} = require("../controllers/ticketsController");
const router = express.Router();
const auth = require("../middleware/autthMiddleware");

/**
 * @swagger
 * /api/tickets:
 *   post:
 *     summary: Create a new ticket
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deviceId:
 *                 type: string
 *               issue:
 *                 type: string
 *               priority:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ticket created successfully
 *       400:
 *         description: Bad request
 */
router.post("/", auth, createTicket);

/**
 * @swagger
 * /api/tickets:
 *   get:
 *     summary: Get all tickets
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all tickets
 *       400:
 *         description: Bad request
 */
router.get("/", auth, getTickets);

/**
 * @swagger
 * /api/tickets/{id}:
 *   put:
 *     summary: Update a ticket
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ticket ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deviceId:
 *                 type: string
 *               issue:
 *                 type: string
 *               status:
 *                 type: string
 *               priority:
 *                 type: string
 *               assignedTo:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ticket updated successfully
 *       400:
 *         description: Bad request
 */
router.put("/:id", auth, updateTicket);

/**
 * @swagger
 * /api/tickets/{id}/logs:
 *   put:
 *     summary: Add a log to a ticket and mark it as resolved
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ticket ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Log added successfully
 *       400:
 *         description: Bad request
 */
router.put('/:id/logs', auth, addLog);

/**
 * @swagger
 * /api/tickets/{id}/complete:
 *   put:
 *     summary: Mark a ticket as completed
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ticket ID
 *     responses:
 *       200:
 *         description: Ticket marked as completed successfully
 *       400:
 *         description: Bad request
 */
router.put('/:id/complete', auth, completeTicket);

module.exports = router;
