const mongoose = require("mongoose");

const connectionRequestSchema = new mongoose.Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
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

  // Check if fromUserId is same as toUserId
  if (connectionRequest.fromUserId.equals(connectionRequest.toUserId)) {
    throw new Error("Cannot send connection request to yourself !!");
  }

  next();
});

// compound INDEXING:
connectionRequestSchema.index({ fromUserId: 1, toUserId: 1 });

const ConnectionRequestModel = new mongoose.model(
  "ConnectionRequest",
  connectionRequestSchema,
);

module.exports = ConnectionRequestModel;
