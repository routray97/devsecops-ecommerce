const router = require("express").Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");
const verifyToken = require("../middleware/verifyToken");
const verifyAdmin = require("../middleware/verifyAdmin"); // ✅ coming soon in Part 2

// Public
router.get("/", getAllProducts);
router.get("/:id", getProductById);

// Protected Admin Routes
router.post("/", verifyToken, verifyAdmin, createProduct);       // ✅ admin only
router.put("/:id", verifyToken, verifyAdmin, updateProduct);     // ✅ admin only
router.delete("/:id", verifyToken, verifyAdmin, deleteProduct);  // ✅ admin only

module.exports = router;
