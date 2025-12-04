"use server";

import axios from "axios";
import crypto from "crypto";

interface BlogPost {
  title: string;
  slug: string;
  uuid: string;
  excerpt: string;
  content: string;
  featured_image_url: string;
  author_image_url: string;
  cta: string;
  status: string;
  author_name: string;
  tag: string;
  [key: string]: unknown;
  uid: string;
}

interface BlogResponse {
  status: boolean;
  userPostdata: BlogPost[];
}

const isBlogResponse = (data: unknown): data is BlogResponse => {
  return (
    typeof data === "object" &&
    data !== null &&
    "status" in data &&
    typeof (data as { status: unknown }).status === "boolean" &&
    "userPostdata" in data &&
    Array.isArray((data as { userPostdata: unknown }).userPostdata)
  );
};

export async function fetchBlogData(): Promise<BlogResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const apiSecret = process.env.NEXT_PUBLIC_API_SECRET;

  if (!baseUrl || !apiKey || !apiSecret) {
    throw new Error("Missing environment variables");
  }

  const timestamp = Date.now();
  const body = { timestamp };
  const payload = Buffer.from(JSON.stringify(body)).toString();
  const signature = crypto
    .createHmac("sha256", apiSecret)
    .update(payload)
    .digest("hex");

  const headers = {
    "X-AUTH-APIKEY": apiKey,
    "X-AUTH-SIGNATURE": signature,
    "X-AUTH-TIMESTAMP": timestamp.toString(),
    "Content-Type": "application/json",
    "x-host": "localhost:3000",
  };

  try {
    const response = await axios.get<BlogResponse>(
      `${baseUrl}/post/fetch-post`,
      {
        headers,
      }
    );

    if (!isBlogResponse(response.data)) {
      throw new Error("Invalid API structure");
    }

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching blog data:", error.message);
    } else {
      console.error("Unknown error fetching blog data:", error);
    }
    throw new Error("Failed to fetch blog data");
  }
}
