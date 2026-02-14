import mongoose from "mongoose";

const caseSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      
    },
    assignedTo: String,
      
    
    priority: { type: String, default: "medium" },
    status: { type: String, default: "open" }
  },
  { timestamps: true }
);

export default mongoose.model("Case", caseSchema);
