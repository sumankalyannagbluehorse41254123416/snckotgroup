import axios from "axios";
import crypto from "crypto";

interface BannerItem {
  id: number;
  title: string;
  slug: string;
  uuid: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  status: string;
  [key: string]: unknown;
}

interface BannerResponse {
  status: boolean;
  message: string;
  singlebannerData: BannerItem[];
}

const isBannerResponse = (data: unknown): data is BannerResponse => {
  if (
    typeof data === "object" &&
    data !== null &&
    "status" in data &&
    "singlebannerData" in data
  ) {
    const d = data as Record<string, unknown>;
    return (
      typeof d.status === "boolean" &&
      Array.isArray(d.singlebannerData) &&
      (d.singlebannerData.length === 0 ||
        typeof (d.singlebannerData as BannerItem[])[0]?.title === "string")
    );
  }
  return false;
};

export async function fetchBannerData(uid: string): Promise<BannerItem> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const timeStamp = Date.now();
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const secret = process.env.NEXT_PUBLIC_API_SECRET;

  if (!key || !secret) {
    throw new Error("Missing API_KEY or API_SECRET");
  }

  const body = { timestamp: timeStamp };
  const payload = Buffer.from(JSON.stringify(body)).toString();
  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  const headers = {
    "X-AUTH-APIKEY": key,
    "X-AUTH-SIGNATURE": signature,
    "X-AUTH-TIMESTAMP": timeStamp.toString(),
    "Content-Type": "application/json",
    "x-host": "localhost:3000",
  };

  const response = await axios.get<BannerResponse>(
    `${baseUrl}/banner/fetch-single-banner/${uid}`,
    { headers }
  );

  if (!isBannerResponse(response.data)) {
    console.error("Invalid response structure:", response.data);
    throw new Error("Invalid API response structure");
  }

  return response.data.singlebannerData[0];
}
