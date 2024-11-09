const express = require("express")

const router = express.Router()

const userController = require("../controller/userController")

router.get("/test",userController.testing)
router.post("/appointment",userController.createUserRequestForAppointment)

router.get("/all-appointments",userController.getAllAppointments)
router.put("/approve-appointment",userController.updateRequest)

module.exports = router;