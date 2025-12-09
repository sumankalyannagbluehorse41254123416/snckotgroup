// "use client";

// import Image from "next/image";
// import React, { FC, useEffect, useState } from "react";
// import { fetchPageData } from "../action/page";
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

// interface pageData {
//   title: string;
//   cover_image_url?: string;
//   description: string;
//   html: string;
// }

// interface PageApiResponse {
//   status: boolean;
//   pagedata: pageData;
//   pageItemdataWithSubsection: Section[];
// }

// const SinckotCapitalPage: FC = () => {
//   const [pageData, setPageData] = useState<PageApiResponse | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   useEffect(() => {
//     async function capitalPage() {
//       try {
//         setLoading(true);
//         const UID = "eb4d09d1-373c-46e2-8e7c-c8c3940fa6ce";
//         const res = await fetchPageData({ uid: UID });
//         console.log("Page Data ===>", res);
//         setPageData(res as any);
//       } catch (error) {
//         console.error("Error fetching page data:", error);
//         setError("Failed to load page data");
//       } finally {
//         setLoading(false);
//       }
//     }
//     capitalPage();
//   }, []);
//   const data = pageData?.pagedata;
//   console.log("data", data);
//   return (
//     <section className="section white-section">
//       <div className="grey-shape">
//         <div className="icon-container fixed border-radius"></div>
//       </div>

//       <div className="section-container">
//         <div className="container">
//           <div id="post-wrapper" className="row">
//             <div id="content" className="col-md-12 col-sm-12 col-xs-12">
//               <div className="blog-container wow fadeIn clearfix mb-5">
//                 <div className="post-media">
//                   <a href="#">
//                     <Image
//                       className="img-responsive"
//                       src={
//                         data?.cover_image_url ||
//                         "/images/No_Image_Available.jpg"
//                       }
//                       alt="Banner"
//                       width={1200}
//                       height={600}
//                     />
//                   </a>
//                   <div className="icon-container border-radius"></div>
//                 </div>

//                 <div
//                   className="clearfix"
//                   dangerouslySetInnerHTML={{
//                     __html: data?.description || "NO description available",
//                   }}
//                 />
//               </div>

//               <div className="clearfix"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SinckotCapitalPage;
import Image from "next/image";
import { fetchPageData } from "../action/pageAction";
import type { PageApiResponse } from "../action/pageAction";

const SinckotCapitalPage = async () => {
  const UID = "eb4d09d1-373c-46e2-8e7c-c8c3940fa6ce";

  const res = await fetchPageData({ uid: UID });
  // console.log("Page Data ===>", res);
  // const res: PageApiResponse = apiRes.data;
  // const res = apiRes.data as PageApiResponse;
  const data = res?.pagedata as PageApiResponse["pagedata"];
  // console.log("data**************", data);

  return (
    <section className="section white-section">
      <div className="grey-shape">
        <div className="icon-container fixed border-radius"></div>
      </div>

      <div className="section-container">
        <div className="container">
          <div id="post-wrapper" className="row">
            <div id="content" className="col-md-12 col-sm-12 col-xs-12">
              <div className="blog-container wow fadeIn clearfix mb-5">
                {/* Banner Image */}
                <div className="post-media">
                  <Image
                    className="img-responsive"
                    src={
                      data?.cover_image_url || "/images/No_Image_Available.jpg"
                    }
                    alt={data?.title ?? "Banner"}
                    width={1200}
                    height={600}
                  />
                  <div className="icon-container border-radius"></div>
                </div>

                {/* Description HTML */}
                <div
                  className="clearfix"
                  dangerouslySetInnerHTML={{
                    __html: data?.description || "NO description available",
                  }}
                />
              </div>

              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinckotCapitalPage;
