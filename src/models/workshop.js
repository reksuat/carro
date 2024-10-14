import { Schema, model } from "mongoose";

const workshopSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    address: {
        type: Object, required: true,  minLength: 8, maxLength: 8,
        required: true
    },
    specialties: {
        type: [String],
        required: true
    }
})
const Workshop = model("Workshop", workshopSchema);

export default Workshop;
