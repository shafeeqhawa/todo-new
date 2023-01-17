const express = require("express")
const router = express.Router()
const controllers = require("../controllers")
const middlewares = require("../../middlewares")

router.post("/", controllers.register)
router.post("/login", controllers.login)
router.get("/", middlewares.isAuth , controllers.index)  //farah
router.delete("/", middlewares.isAuth, controllers.destroy) // Shafeeq
router.get("/:id", middlewares.isAuth, controllers.userInoformations)


/*
router.put("/", controllers.update) // yamen
router.patch("/", controllers.restPassword) // Mais
router.delete("/", controllers.destroy) // Shafeeq
*/


module.exports = router