import { Document, Schema, model, models } from "mongoose"

export interface Image extends Document {
	title: string
	transformationType: string
	publicId: string
	secureUrl: string
	width?: number
	height?: number
	config?: object
	transformationUrl?: string
	aspectRatio?: string
	color?: string
	prompt?: string
	author: {
		_id: string
		firstname: string
		lastname: string
	} // Assuming this is the ID of the user
	createdAt?: Date
	updatedAt?: Date
}

const ImageSchema = new Schema({
	title: { type: String, required: true },
	transformationType: { type: String, required: true },
	publicId: { type: String, required: true },
	secureUrl: { type: URL, required: true },
	width: { type: Number },
	height: { type: Number },
	config: { type: Object },
	transformationUrl: { type: URL },
	aspectRatio: { type: String },
	color: { type: String },
	prompt: { type: String },
	author: { type: Schema.Types.ObjectId, ref: "User" },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
})

// Reuse the existing image model if it already exists
const Image = models?.Image || model("Image", ImageSchema)

export default Image
