// import React from "react";
// import { fetchPageData } from "@/lib/page";
// import { fetchBlogData } from "@/lib/blog";
// import PropertySectionClient from "../Property_Development";

// // ===== TYPES =====
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
//   description: string;
//   html: string;
// }

// // Updated to match common API response patterns
// interface PageApiResponse {
//   status: boolean;
//   data?: {
//     pagedata: Page;
//     pageItemdataWithSubsection: Section[];
//   };
//   pagedata?: Page;
//   pageItemdataWithSubsection?: Section[];
//   // Add other possible properties from your API
//   message?: string;
//   success?: boolean;
// }

// interface BlogPost {
//   title: string;
//   slug: string;
//   uuid: string;
//   excerpt: string;
//   content: string;
//   featured_image_url: string;
//   cta: string;
//   tag: string;
// }

// interface PropertySectionProps {
//   pageData: PageApiResponse;
//   blogPosts: BlogPost[];
//   loading?: boolean;
//   error?: string | null;
// }

// const PropertySection = async () => {
//   try {
//     const UID = "4ba0f595-0db4-4a9a-a973-b67e68a417c2";

//     // Fetch data in parallel
//     const [pageResponse, blogResponse] = await Promise.all([
//       fetchPageData({ uid: UID }),
//       fetchBlogData(),
//     ]);

//     // Only first 3 blog posts
//     const blogPosts = blogResponse.userPostdata.slice(0, 3);

//     return (
//       <PropertySectionClient
//         pageData={pageResponse as any}
//         blogPosts={blogPosts}
//         loading={false}
//         error={null}
//       />
//     );
//   } catch (error) {
//     console.error("Error fetching data:", error);

//     return (
//       <PropertySectionClient
//         pageData={null}
//         blogPosts={[]}
//         loading={false}
//         error="Failed to load page data"
//       />
//     );
//   }
// };

// export default PropertySection;
