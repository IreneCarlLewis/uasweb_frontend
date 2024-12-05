import Comment from "../models/commentModel.js";

// Get all comments for a specific product
export const getComments = async (req, res) => {
    const { productId } = req.params; // Assuming productId is passed in the URL

    try {
        const comments = await Comment.find({ productId });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new comment
export const addComment = async (req, res) => {
    const { productId, userId, commentText } = req.body;

    try {
        const newComment = new Comment({
            productId,
            userId,
            comment: commentText
        });

        await newComment.save();
        res.status(201).json({
            message: "Comment added successfully!",
            comment: newComment
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Edit an existing comment
export const editComment = async (req, res) => {
    const { commentId } = req.params;
    const { commentText } = req.body;

    try {
        const updatedComment = await Comment.findByIdAndUpdate(
            commentId,
            { comment: commentText },
            { new: true } // Return the updated document
        );

        if (!updatedComment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        res.status(200).json({
            message: "Comment updated successfully",
            comment: updatedComment
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a comment
export const deleteComment = async (req, res) => {
    const { commentId } = req.params;

    try {
        const deletedComment = await Comment.findByIdAndDelete(commentId);

        if (!deletedComment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
