import app from "./app.js";
import { config } from "dotenv";
import mongoDbConfig from "./config/db.config.js";
process.env.DOTENV_CONFIG_QUIET = "true";
import { v2 } from "cloudinary";
config();
/*----------------->> Cloudinary configuration<<-----------------*/
v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const port = process.env.PORT || 5000;
app.listen(port, async () => {
  await mongoDbConfig();
  console.log(`app is running on http://locathost:${port}`);
});
