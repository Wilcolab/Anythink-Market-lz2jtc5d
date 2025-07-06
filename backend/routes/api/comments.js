/**
 * @route GET /post/:postId
 * @description Get all comments for a specific post, sorted by creation date (newest first)
 * @param {string} req.params.postId - The ID of the post to retrieve comments for
 * @returns {Object[]} 200 - An array of comment objects
 * @returns {Object} 500 - Error message if fetching comments fails
 */

/**
 * @route DELETE /:commentId
 * @description Delete a comment by its ID
 * @param {string} req.params.commentId - The ID of the comment to delete
 * @returns {Object} 200 - Success message if comment is deleted
 * @returns {Object} 404 - Error message if comment is not found
 * @returns {Object} 500 - Error message if deleting comment fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey github copilot, please help me write a route to get all comments for a specific post.
router.get("/post/:postId", async (req, res) => {
  const { postId } = req.params;
  try {
    const comments = await Comment.find({ postId }).sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});
// add another endpoint to delete a comment 
router.delete("/:commentId", async (req, res) => {
    const { commentId } = req.params;
    try {
        const deletedComment = await Comment.findByIdAndDelete(commentId);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.status(500).json({ error: "Failed to delete comment" });
    }
});