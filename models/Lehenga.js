import { Schema, model, models } from "mongoose";

const LehengaSchema = new Schema({
    clientName: String,
    contactNumber: String,
    date: String,
    waistCircumference: String,
    hipCircumference: String,
    lehengaLength: String,
    bottomHem: String,
    bustCircumference: String,
    underbustCircumference: String,
    blouseLength: String,
    shoulderWidth: String,
    sleeveLength: String,
    sleeveCircumference: String,
    frontNeckLineDepth: String,
    backNeckLineDepth: String,
    dupattaLength: String,
    dupattaWidth: String,
    lehengaStyle: String,
    blouseStyle: String,
    embroideryPreference: String,
    fabricChoice: String,
    colour: String,
    additionalNotes: String,
});

const Lehenga = models.Lehenga || model("Lehenga", LehengaSchema);

export default Lehenga;
