import dotenv from "dotenv";

dotenv.config();

export const RANDOM_URI = process.env.RANDOM_URI || "http://some-endpoint.com/api"
export const PORT = process.env.PORT || 3000;