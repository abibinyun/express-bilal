const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads" });
const productControllerV2 = require("./controller");

router.get("/product", upload.single("image"), productControllerV2.index);
router.get("/product/:id", upload.single("image"), productControllerV2.view);
router.post("/product", upload.single("image"), productControllerV2.post);
router.put("/product/:id", upload.single("image"), productControllerV2.update);
router.delete("/product/:id", upload.single("image"), productControllerV2.destroy);

module.exports = router;
