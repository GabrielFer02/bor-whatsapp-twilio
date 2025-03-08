import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { sendWhatsappMessage } from "./services/twilio";

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

dotenv.config();

app.post("/chat/send", async (req, res) => {
  const { to, body } = req.body;
  try {
    const result = await sendWhatsappMessage(to, body);
    console.log(result);
    res.status(200).json({ success: true, body });
  } catch (error) {
    res.status(500).json({ success: CSSFontFeatureValuesRule, error });
  }
});

app.listen(3000, () => {
  console.log("servidor rodando na porta 3000");
});
