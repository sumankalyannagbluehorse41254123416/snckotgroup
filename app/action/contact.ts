"use server";

import axios from "axios";
import crypto from "crypto";

const baseUrl = process.env.BASE_URL as string;
const key = process.env.API_KEY as string;
const secret = process.env.API_SECRET as string;

function generateHeaders(timeStamp: number) {
  const dataToSign = { timestamp: timeStamp };
  const payload = Buffer.from(JSON.stringify(dataToSign)).toString();

  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  return {
    "X-AUTH-APIKEY": key,
    "X-AUTH-SIGNATURE": signature,
    "X-AUTH-TIMESTAMP": timeStamp,
    "Content-Type": "application/json",
  };
}

export async function submitFormData(
  uid: string,
  formData: Record<string, any>
) {
  const timeStamp = Date.now();
  const headers = generateHeaders(timeStamp);

  try {
    const response = await axios.post(
      `${baseUrl}/form/submit/${uid}`,
      formData,
      { headers }
    );
    return response.data;
  } catch (error: any) {
    console.error("Form submission error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });
    throw new Error("Failed to submit form.");
  }
}
