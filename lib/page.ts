// import axios from "axios";
// import crypto from "crypto";

// interface Subsection {
//   id: number;
//   title: string;
//   description?: string;
//   image?: string;
// }

// interface Section {
//   title: string;
//   shortDescription?: string;
//   image?: string;
//   subsections?: Subsection[];
// }

// interface Page {
//   title: string;
//   cover_image_url?: string;
// }

// export interface PageApiResponse {
//   status: boolean;
//   pagedata: Page;
//   pageItemdataWithSubsection: Section[];
// }

// export interface ApiResponse {
//   success?: boolean;
//   data?: PageApiResponse;
//   pageItemdataWithSubsection?: Section[];

//   [key: string]: unknown;
// }

// interface FetchPageDataParams {
//   uid: string;
//   host?: string;
// }

// export async function fetchPageData({
//   uid,
//   host = "localhost:3000",
// }: FetchPageDataParams): Promise<ApiResponse> {
//   const timeStamp = Date.now();

//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//   const key = process.env.NEXT_PUBLIC_API_KEY;
//   const secret = process.env.NEXT_PUBLIC_API_SECRET;

//   if (!baseUrl || !key || !secret) {
//     throw new Error(
//       "Missing environment variables: BASE_URL, API_KEY, or API_SECRET."
//     );
//   }

//   const body = { timestamp: timeStamp };
//   const payload = JSON.stringify(body);

//   const signature = crypto
//     .createHmac("sha256", secret)
//     .update(payload)
//     .digest("hex");

//   const headers = {
//     "X-AUTH-APIKEY": key,
//     "X-AUTH-SIGNATURE": signature,
//     "X-AUTH-TIMESTAMP": timeStamp.toString(),
//     "Content-Type": "application/json",
//     "x-host": host,
//   };

//   try {
//     const response = await axios.get<ApiResponse>(
//       `${baseUrl}/page/fetch-single-page/${uid}`,
//       { headers }
//     );
//     return response.data;
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       console.error("Page Data Fetch Error:", {
//         message: error.message,
//         status: error.response?.status,
//         statusText: error.response?.statusText,
//         data: error.response?.data,
//       });
//     } else if (error instanceof Error) {
//       console.error("Unexpected error:", error.message);
//     } else {
//       console.error("Unknown error type while fetching page data.");
//     }
//     throw new Error("Page Data: Failed to fetch page.");
//   }
// }
import axios from "axios";
import crypto from "crypto";

interface Subsection {
  id: number;
  title: string;
  description?: string;
  image?: string;
  slug?: string;
}

interface Section {
  id: number;
  cta: string;
  title: string;
  shortDescription?: string;
  image?: string;
  subsections?: Subsection[];
  [key: string]: string | number | Subsection[] | undefined;
}

interface Page {
  title: string;
  cover_image_url?: string;
  shortDescription?: string;
  description: string;
  subsections: Subsection[];
}

export interface ApiResponse {
  status: boolean;
  pagedata: Page;
  pageItemdataWithSubsection: Section[];
}
export interface PageApiResponse {
  status: boolean;
  pagedata: Page;
  pageItemdataWithSubsection: Section[];
  subsections: Subsection[];
}
export interface ApiResponse {
  data: PageApiResponse;
  success?: boolean;
  message?: string;
  [key: string]: unknown;
}

interface FetchPageDataParams {
  uid: string;
  host?: string;
}

export async function fetchPageData({
  uid,
  host = "localhost:3000",
}: FetchPageDataParams): Promise<ApiResponse> {
  const timeStamp = Date.now();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const secret = process.env.NEXT_PUBLIC_API_SECRET;

  if (!baseUrl || !key || !secret) {
    throw new Error(
      "Missing environment variables: BASE_URL, API_KEY, or API_SECRET."
    );
  }

  const body = { timestamp: timeStamp };
  const payload = JSON.stringify(body);

  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  const headers = {
    "X-AUTH-APIKEY": key,
    "X-AUTH-SIGNATURE": signature,
    "X-AUTH-TIMESTAMP": timeStamp.toString(),
    "Content-Type": "application/json",
    "x-host": host,
  };

  try {
    const response = await axios.get<ApiResponse>(
      `${baseUrl}/page/fetch-single-page/${uid}`,
      { headers }
    );

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Page Data Fetch Error:", {
        message: error.message,
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
      });
    } else if (error instanceof Error) {
      console.error("Unexpected error:", error.message);
    } else {
      console.error("Unknown error type while fetching page data.");
    }

    throw new Error("Page Data: Failed to fetch page.");
  }
}
