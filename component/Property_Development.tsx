"use client";
import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchPageData } from "@/lib/page";
import { fetchBlogData } from "@/lib/blog";

// ===== TYPES =====
interface Subsection {
  id: number;
  title: string;
  description?: string;
  image?: string;
}

interface Section {
  title: string;
  shortDescription?: string;
  image?: string;
  subsections?: Subsection[];
}

interface Page {
  title: string;
  cover_image_url?: string;
  description: string;
  html: string;
}

interface PageApiResponse {
  status: boolean;
  pagedata: Page;
  pageItemdataWithSubsection: Section[];
}

interface BlogPost {
  title: string;
  slug: string;
  uuid: string;
  excerpt: string;
  content: string;
  featured_image_url: string;
  cta: string;
  tag: string;
}

const PropertySection: FC = () => {
  const [pageData, setPageData] = useState<PageApiResponse | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPage() {
      try {
        setLoading(true);
        const UID = "4ba0f595-0db4-4a9a-a973-b67e68a417c2";
        const response = await fetchPageData({ uid: UID });
        // console.log("Page Data ===>", response);
        setPageData(response as any);
      } catch (error) {
        console.error("Error fetching page data:", error);
        setError("Failed to load page data");
      } finally {
        setLoading(false);
      }
    }

    loadPage();
  }, []);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const response = await fetchBlogData();
        // console.log("Blog Data ===>", response);

        // Only first 3 blog posts
        setBlogPosts(response.userPostdata.slice(0, 3));
        // setBlogPosts([
        //   response.userPostdata[0],
        //   response.userPostdata[1],
        //   response.userPostdata[2],
        // ]);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    }

    loadBlogs();
  }, []);

  const data = pageData?.pagedata;
  const sectionData = pageData?.pageItemdataWithSubsection;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!pageData) return <div>No property data found</div>;

  return (
    <div className="container">
      <div className="row">
        {/* LEFT IMAGE */}
        <div className="property-image col-md-6 col-sm-12 mt-5">
          <Image
            className="img-fulid"
            src={data?.cover_image_url || ""}
            alt="image"
            width={400}
            height={400}
          />
        </div>

        <div className="property-text col-md-6 col-sm-12">
          <h2>{data?.title}</h2>

          <div
            className="pt-2"
            dangerouslySetInnerHTML={{
              __html: data?.description || "<p>No description available</p>",
            }}
          />

          {sectionData?.map((section, index) => (
            <div key={index} className="property-section mt-5">
              <div className="property-section-img">
                <Image
                  className="img-fulid"
                  src={section.image || ""}
                  alt={section.title}
                  width={300}
                  height={300}
                />
                {/* <img className="img-fulid" src="/images/mission.png" alt="" /> */}
              </div>

              <div className="property-section-text">
                <h4>{section.title}</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      section.shortDescription ||
                      "<p>No description available</p>",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row mt-5">
        {blogPosts.length > 0 ? (
          blogPosts.map((post, index) => (
            <div key={index} className="col-md-4 col-sm-12 mb-4">
              <div className="property-banner">
                <Image
                  className="img-fulid"
                  src={post.featured_image_url}
                  alt={post.title}
                  width={100}
                  height={100}
                />
              </div>

              <div className="property-banner-text">
                <h4>{post.title}</h4>

                <p className="text-center">
                  <em>{post.tag}</em>
                </p>

                <p
                  className="p-2 text-center"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <Link href={post.cta || "#"}>
                  <i className="fa fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div>No blog posts available</div>
        )}
      </div>
    </div>
  );
};

export default PropertySection;

// "use client";
// import React, { FC } from "react";
// import Link from "next/link";
// import Image from "next/image";

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

// interface PageApiResponse {
//   status: boolean;
//   pagedata: Page;
//   pageItemdataWithSubsection: Section[];
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

// interface PropertySectionClientProps {
//   pageData: PageApiResponse | null;
//   blogPosts: BlogPost[];
//   loading?: boolean;
//   error?: string | null;
// }

// const PropertySectionClient: FC<PropertySectionClientProps> = ({
//   pageData,
//   blogPosts,
//   loading = false,
//   error = null,
// }) => {
//   const data = pageData?.pagedata;
//   const sectionData = pageData?.pageItemdataWithSubsection;

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!pageData) return <div>No property data found</div>;

//   return (
//     <div className="container">
//       <div className="row">
//         {/* LEFT IMAGE */}
//         <div className="property-image col-md-6 col-sm-6 mt-5">
//           <Image
//             className="img-fulid"
//             src={data?.cover_image_url || ""}
//             alt="image"
//             width={400}
//             height={400}
//           />
//         </div>

//         <div className="property-text col-md-6 col-sm-6">
//           <h2>{data?.title}</h2>

//           <div
//             className="pt-2"
//             dangerouslySetInnerHTML={{
//               __html: data?.description || "<p>No description available</p>",
//             }}
//           />

//           {sectionData?.map((section, index) => (
//             <div key={index} className="property-section mt-5">
//               <div className="property-section-img">
//                 <Image
//                   className="img-fulid"
//                   src={section.image || ""}
//                   alt={section.title}
//                   width={80}
//                   height={80}
//                 />
//               </div>

//               <div className="property-section-text">
//                 <h4>{section.title}</h4>
//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html:
//                       section.shortDescription ||
//                       "<p>No description available</p>",
//                   }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="row mt-5">
//         {blogPosts.length > 0 ? (
//           blogPosts.map((post, index) => (
//             <div key={index} className="col-md-4 col-sm-12 mb-4">
//               <div className="property-banner">
//                 <Image
//                   className="img-fulid"
//                   src={post.featured_image_url}
//                   alt={post.title}
//                   width={100}
//                   height={100}
//                 />
//               </div>

//               <div className="property-banner-text">
//                 <h4>{post.title}</h4>

//                 <p className="text-center">
//                   <span>{post.tag}</span>
//                 </p>

//                 <p
//                   className="p-2 text-center"
//                   dangerouslySetInnerHTML={{ __html: post.content }}
//                 />

//                 <Link href={post.cta || "#"}>
//                   <i className="fa fa-arrow-circle-right"></i>
//                 </Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div>No blog posts available</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PropertySectionClient;
