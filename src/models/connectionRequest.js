const mongoose = require("mongoose");

const connectionRequestSchema = new mongoose.Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // reference to the "User" collection
      required: true,
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      required: true,

      enum: {
        values: ["ignored", "interested", "rejected", "accepted"],
        message: "{VALUE} is not a valid status!",
      },
    },
  },
  { timestamps: true },
);

// Schema Validations - 'pre' ## NEVER USE ARROW FUNC HERE
connectionRequestSchema.pre("save", function (next) {
  const connectionRequest = this;

  if (this.fromUserId.equals(this.toUserId)) {
    throw new Error("Cannot send connection request to yourself !!");
  }
});

// compound INDEXING:
connectionRequestSchema.index({ fromUserId: 1, toUserId: 1 });

const ConnectionRequestModel = new mongoose.model(
  "ConnectionRequest",
  connectionRequestSchema,
);

module.exports = ConnectionRequestModel;
