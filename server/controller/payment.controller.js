import Razorpay from "razorpay";
import crypto, { Hmac } from "crypto";

const RAZORPAY_SECRET_KEY = process.env.RAZORPAY_SECRET_KEY;
const RAZORPAY_ID_KEY = process.env.RAZORPAY_ID_KEY;

function generateSignature(orderId, paymentId, secretKey) {
  const hmac = crypto.createHmac("sha256", secretKey);
  const data = `${orderId}|${paymentId}`;
  hmac.update(data);

  const generatedSignature = hmac.digest("hex");
  return generatedSignature;
}

const order = (req, res) => {
  let instance = new Razorpay({
    key_id: RAZORPAY_ID_KEY,
    key_secret: RAZORPAY_SECRET_KEY,
  });
  const { amount } = req.body;

  var options = {
    amount: amount, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };

  instance.orders.create(options, function (err, order) {
    if (err) {
      return res.send({ code: 500, message: err });
    }

    return res.send({ code: 200, message: "order created", data: order });
  });
};

/*----------------->>Varify payment<<-----------------*/
const verify = async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  const generated_signature = generateSignature(
    razorpay_order_id,
    razorpay_payment_id,
    RAZORPAY_SECRET_KEY
  );

  if (generated_signature === razorpay_signature) {
    return res.status(200).json({
      success: true,
      message: "Payment successful",
      downloadUrl: `${process.env.BASE_URL}/api/payment/download`,
    });
  }
};

const ping = (req, res) => {
  res.send("PONG");
};

export { order, verify, ping };
// ====================DOWNLOAD================
import path from "path";
import fs from "fs";

const downloadFile = (req, res) => {
  // OPTIONAL: yahan paymentId / token verify bhi kar sakte ho
  const filePath = path.join(process.cwd(), "downloads", "project-code.zip");

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "File not found" });
  }

  res.download(filePath, "project-code.zip");
};

export { downloadFile };
import axios from "axios";

export const downloadFromGithub = async (req, res) => {
  const { repo, branch } = req.project;

  const zipUrl = `https://api.github.com/repos/${repo}/zipball/${branch}`;

  const response = await axios.get(zipUrl, {
    responseType: "stream",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  res.setHeader(
    "Content-Disposition",
    `attachment; filename="project-code.zip"`
  );

  response.data.pipe(res);
};
