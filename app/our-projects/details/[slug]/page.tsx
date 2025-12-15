// "use client";
// import { fetchPageData } from "@/app/action/pageAction";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// export interface PageApiResponse {
//   pagedata: {
//     title: string;
//     description: string;
//     cover_image_url: string;
//   };
//   pageItemdataWithSubsection: Section[];
// }

// export interface Section {
//   title: string;
//   shortDescription?: string;
//   description?: string;
//   image?: string;
//   subsections?: {
//     title: string;
//     description: string;
//     image?: string;
//   }[];
// }

// export default function ProjectPage() {
//   const [activeTab, setActiveTab] = useState("indoor");
//   const params = useParams();
//   const slug = params.slug as string;

//   const [pageData, setPageData] = useState<PageApiResponse | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const res = await fetchPageData({ uid: slug });
//         // console.log("Page Data ===&&&&&&&&&&&&&&&&&&&&&&&&&&>", res);

//         setPageData({
//           pagedata: res.pagedata as PageApiResponse["pagedata"],
//           pageItemdataWithSubsection:
//             res.pageItemdataWithSubsection as Section[],
//         });
//         const data = res?.pagedata;
//         const section = res?.pageItemdataWithSubsection;
//         // console.log("data ++++", data);
//         // console.log("section ++++", section);
//       } catch (err: any) {
//         setError(err.message || "Failed to load project data.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (slug) fetchData();
//   }, [slug]);

//   if (loading) return <div className="container py-5">Loading...</div>;
//   if (error || !pageData)
//     return (
//       <div className="container py-5 text-danger">
//         {error || "No data found"}
//       </div>
//     );
//   const { pagedata, pageItemdataWithSubsection } = pageData;
//   // console.log(
//   //   "pageItemdataWithSubsection *******************",
//   //   pageItemdataWithSubsection
//   // );
//   const overviewSection = pageItemdataWithSubsection.find(
//     (s) => s.title.toLowerCase() === "overview"
//   );
//   // console.log("overrrrrrr", overviewSection);
//   const highlightsSection = pageItemdataWithSubsection.find(
//     (s) => s.title.toLowerCase() === "highlights"
//   );
//   const gallerySection = pageItemdataWithSubsection.find(
//     (s) => s.title.toLowerCase() === "gallery"
//   );
//   const indoorSub = highlightsSection?.subsections?.find((sub) =>
//     sub.title.toLowerCase().includes("indoor")
//   );

//   const highlightUls =
//     indoorSub?.description.match(/<ul[\s\S]*?<\/ul>/gi) || [];

//   // console.log({ highlightUls });

//   const outdoorSub = highlightsSection?.subsections?.find((sub) =>
//     sub.title.toLowerCase().includes("outdoor")
//   );
//   // console.log("*****************", outdoorSub);

//   const highlightUls2 =
//     outdoorSub?.description.match(/<ul[\s\S]*?<\/ul>/gi) || [];

//   // console.log({ highlightUls2 });
//   // console.log("outdoorSub******************", outdoorSub);
//   const otherSub = highlightsSection?.subsections?.find((sub) =>
//     sub.title.toLowerCase().includes("other")
//   );
//   const highlightUls3 =
//     otherSub?.description.match(/<ul[\s\S]*?<\/ul>/gi) || [];
//   // console.log({ highlightUls3 });

//   const mainGalleryImage = gallerySection?.image;
//   const galleryImages =
//     gallerySection?.subsections
//       ?.filter((sub) => sub.image)
//       .map((sub) => sub.image!) || [];

//   return (
//     <div>
//       <div
//         className="banner-image-new"
//         style={{
//           backgroundImage: `url('${
//             pagedata.cover_image_url || "/fallback-banner.jpg"
//           }')`,
//         }}>
//         <div className="banner-hover">
//           <h1 className="banner-hover-text">{pagedata.title}</h1>
//           <h4
//             className="banner-hover-text2"
//             dangerouslySetInnerHTML={{ __html: pagedata.description }}
//           />
//           <p className="project-tag"></p>
//         </div>
//       </div>

//       <div className="projectTabs">
//         <div className="container">
//           <ul>
//             <li>
//               <a href="#overview">Overview</a>
//             </li>
//             <li>
//               <a href="#highlights">Highlights</a>
//             </li>
//             <li>
//               <a href="#gallery">Gallery</a>
//             </li>
//             <li>
//               <a href="#lacation">Location</a>
//             </li>
//             <li>
//               <a href="#review">Reviews</a>
//             </li>
//             <li>
//               <a href="#footer">Enquiry</a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Overview Section */}
//       <div className="pOverview" id="overview">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6 poLeft">
//               <h5>{overviewSection?.title}</h5>
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     overviewSection?.shortDescription ||
//                     "No overview available.",
//                 }}
//               />
//             </div>
//             <div className="col-md-6">
//               <ul className="pOverviewList">
//                 {overviewSection?.subsections?.map((sub, i) => (
//                   <li key={i}>
//                     {sub.title}
//                     <span
//                       dangerouslySetInnerHTML={{
//                         __html: sub.description || "",
//                       }}
//                     />
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {highlightsSection && (
//         <div className="phighlights" id="highlights">
//           <div className="row">
//             <div className="container">
//               <div className="block2 mb-5">
//                 <h5>
//                   <span>RESIDENTIAL FLAT FEATURES</span>
//                   {highlightsSection?.title}
//                 </h5>
//               </div>

//               {/* TAB BUTTONS */}
//               <div className="tab tabbtn">
//                 <div className="phTabs">
//                   <ul className="phdoor">
//                     {/* INDOOR ONLY IF EXISTS */}
//                     {indoorSub && (
//                       <li className="ph1">
//                         <a
//                           href="#"
//                           className={`tablinks ${
//                             activeTab === "indoor" ? "active" : ""
//                           }`}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setActiveTab("indoor");
//                           }}>
//                           {indoorSub.title}
//                         </a>
//                       </li>
//                     )}

//                     {/* OUTDOOR ONLY IF EXISTS */}
//                     {outdoorSub && (
//                       <li className="ph1">
//                         <a
//                           href="#"
//                           className={`tablinks ${
//                             activeTab === "outdoor" ? "active" : ""
//                           }`}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setActiveTab("outdoor");
//                           }}>
//                           {outdoorSub.title}
//                         </a>
//                       </li>
//                     )}

//                     {/* OTHER ONLY IF EXISTS */}
//                     {otherSub && (
//                       <li className="ph1">
//                         <a
//                           href="#"
//                           className={`tablinks ${
//                             activeTab === "other" ? "active" : ""
//                           }`}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setActiveTab("other");
//                           }}>
//                           {otherSub.title}
//                         </a>
//                       </li>
//                     )}
//                   </ul>
//                 </div>
//               </div>

//               {/* TAB CONTENT */}
//               <div className="phMatr">
//                 {/* INDOOR */}
//                 {activeTab === "indoor" && indoorSub && (
//                   <div
//                     id="indoor-amenities"
//                     className="tabcontent phlink ani-0">
//                     <h3>{indoorSub.title}</h3>
//                     <div className="content-box">
//                       {highlightUls.map((ul, i) => (
//                         <div
//                           key={i}
//                           dangerouslySetInnerHTML={{ __html: ul }}></div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* OUTDOOR */}
//                 {activeTab === "outdoor" && outdoorSub && (
//                   <div
//                     id="outdoor-amenities"
//                     className="tabcontent phlink ani-1">
//                     <h3>{outdoorSub.title}</h3>
//                     <div className="content-box">
//                       {highlightUls2.map((ul, i) => (
//                         <div
//                           key={i}
//                           dangerouslySetInnerHTML={{ __html: ul }}></div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* OTHER */}
//                 {activeTab === "other" && otherSub && (
//                   <div id="other-services" className="tabcontent phlink ani-2">
//                     <h3>{otherSub.title}</h3>
//                     <div className="content-box">
//                       {highlightUls3.map((ul, i) => (
//                         <div
//                           key={i}
//                           dangerouslySetInnerHTML={{ __html: ul }}></div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Gallery Section */}
//       <div className="pGallery" id="gallery">
//         <div className="container">
//           <div className="block2 mb-5">
//             <h5>
//               <span>RESIDENTIAL PROJECT IMAGES</span>
//               {gallerySection?.title}
//             </h5>
//           </div>
//           <div className="row">
//             <div className="col-md-6">
//               <div className="videoFrame">
//                 {mainGalleryImage ? (
//                   <img src={mainGalleryImage} alt="Main project" />
//                 ) : (
//                   <div className="bg-light text-center p-5">No main image</div>
//                 )}
//               </div>
//             </div>
//             <div className="col-md-6">
//               <ul className="pgalImages">
//                 {galleryImages.length > 0 ? (
//                   galleryImages.map((img, i) => (
//                     <li key={i}>
//                       <img src={img} alt={`Gallery ${i + 1}`} />
//                     </li>
//                   ))
//                 ) : (
//                   <p>No gallery images available.</p>
//                 )}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Location Section (Static for now - can be made dynamic later) */}
//       <div className="pLocation" id="lacation">
//         <div className="block2 mb-5">
//           <h5>
//             <span>TW5 0LF</span>Location
//           </h5>
//         </div>
//         <div className="pLocationMap">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.5745655994474!2d-0.3790599!3d51.48432295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487672cd0922b7ab%3A0x2e442223d0e6fbd8!2sNew%20Heston%20Rd%2C%20Hounslow%20TW5%200LF%2C%20UK!5e0!3m2!1sen!2sin!4v1655452857434!5m2!1sen!2sin"
//             width="100%"
//             height="450"
//             loading="lazy"
//             title="Project Location"></iframe>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { fetchPageData } from "@/app/action/pageAction";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export interface PageApiResponse {
  pagedata: {
    title: string;
    description: string;
    cover_image_url: string;
  };
  pageItemdataWithSubsection: Section[];
}

export interface Section {
  title: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  subsections?: {
    title: string;
    description: string;
    image?: string;
  }[];
}

export default function ProjectPage() {
  const [activeTab, setActiveTab] = useState("indoor");
  const params = useParams();
  const slug = params.slug as string;

  const [pageData, setPageData] = useState<PageApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetchPageData({ uid: slug });

        setPageData({
          pagedata: res.pagedata as PageApiResponse["pagedata"],
          pageItemdataWithSubsection:
            res.pageItemdataWithSubsection as Section[],
        });
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to load project data.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchData();
  }, [slug]);

  if (loading) return <div className="container py-5">Loading...</div>;
  if (error || !pageData)
    return (
      <div className="container py-5 text-danger">
        {error || "No data found"}
      </div>
    );

  const { pagedata, pageItemdataWithSubsection } = pageData;

  const overviewSection = pageItemdataWithSubsection.find(
    (s) => s.title.toLowerCase() === "overview"
  );

  const highlightsSection = pageItemdataWithSubsection.find(
    (s) => s.title.toLowerCase() === "highlights"
  );

  const gallerySection = pageItemdataWithSubsection.find(
    (s) => s.title.toLowerCase() === "gallery"
  );

  const indoorSub = highlightsSection?.subsections?.find((sub) =>
    sub.title.toLowerCase().includes("indoor")
  );

  const highlightUls =
    indoorSub?.description.match(/<ul[\s\S]*?<\/ul>/gi) || [];

  const outdoorSub = highlightsSection?.subsections?.find((sub) =>
    sub.title.toLowerCase().includes("outdoor")
  );

  const highlightUls2 =
    outdoorSub?.description.match(/<ul[\s\S]*?<\/ul>/gi) || [];

  const otherSub = highlightsSection?.subsections?.find((sub) =>
    sub.title.toLowerCase().includes("other")
  );

  const highlightUls3 =
    otherSub?.description.match(/<ul[\s\S]*?<\/ul>/gi) || [];

  const mainGalleryImage = gallerySection?.image;

  const galleryImages =
    gallerySection?.subsections
      ?.filter((sub) => sub.image)
      .map((sub) => sub.image!) || [];

  return (
    <div>
      <div
        className="banner-image-new"
        style={{
          backgroundImage: `url('${
            pagedata.cover_image_url || "/fallback-banner.jpg"
          }')`,
        }}>
        <div className="banner-hover">
          <h1 className="banner-hover-text">{pagedata.title}</h1>
          <h4
            className="banner-hover-text2"
            dangerouslySetInnerHTML={{ __html: pagedata.description }}
          />
        </div>
      </div>

      <div className="projectTabs">
        <div className="container">
          <ul>
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#highlights">Highlights</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#lacation">Location</a>
            </li>
            <li>
              <a href="#review">Reviews</a>
            </li>
            <li>
              <a href="#footer">Enquiry</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Overview */}
      <div className="pOverview" id="overview">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5 poLeft">
              <h5>{overviewSection?.title}</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    overviewSection?.shortDescription ||
                    "No overview available.",
                }}
              />
            </div>

            <div className="col-lg-6 col-md-7">
              <ul className="pOverviewList">
                {overviewSection?.subsections?.map((sub, i) => (
                  <li key={i}>
                    {sub.title}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: sub.description || "",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      {highlightsSection && (
        <div className="phighlights" id="highlights">
          <div className="row">
            <div className="container">
              <div className="block2 mb-5">
                <h5>
                  <span>RESIDENTIAL FLAT FEATURES</span>
                  {highlightsSection.title}
                </h5>
              </div>

              {/* Tabs */}
              <div className="tab tabbtn">
                <div className="phTabs">
                  <ul className="phdoor">
                    {indoorSub && (
                      <li className="ph1">
                        <a
                          href="#"
                          className={`tablinks ${
                            activeTab === "indoor" ? "active" : ""
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveTab("indoor");
                          }}>
                          {indoorSub.title}
                        </a>
                      </li>
                    )}

                    {outdoorSub && (
                      <li className="ph1">
                        <a
                          href="#"
                          className={`tablinks ${
                            activeTab === "outdoor" ? "active" : ""
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveTab("outdoor");
                          }}>
                          {outdoorSub.title}
                        </a>
                      </li>
                    )}

                    {otherSub && (
                      <li className="ph1">
                        <a
                          href="#"
                          className={`tablinks ${
                            activeTab === "other" ? "active" : ""
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveTab("other");
                          }}>
                          {otherSub.title}
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Tab Content */}
              <div className="phMatr">
                {activeTab === "indoor" && indoorSub && (
                  <div className="tabcontent phlink ani-0">
                    <h3>{indoorSub.title}</h3>
                    <div className="content-box">
                      {highlightUls.map((ul, i) => (
                        <div key={i} dangerouslySetInnerHTML={{ __html: ul }} />
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "outdoor" && outdoorSub && (
                  <div className="tabcontent phlink ani-1">
                    <h3>{outdoorSub.title}</h3>
                    <div className="content-box">
                      {highlightUls2.map((ul, i) => (
                        <div key={i} dangerouslySetInnerHTML={{ __html: ul }} />
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "other" && otherSub && (
                  <div className="tabcontent phlink ani-2">
                    <h3>{otherSub.title}</h3>
                    <div className="content-box">
                      {highlightUls3.map((ul, i) => (
                        <div key={i} dangerouslySetInnerHTML={{ __html: ul }} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery */}
      <div className="pGallery" id="gallery">
        <div className="container">
          <div className="block2 mb-5">
            <h5>
              <span>RESIDENTIAL PROJECT IMAGES</span>
              {gallerySection?.title}
            </h5>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="videoFrame">
                {mainGalleryImage ? (
                  <Image
                    src={mainGalleryImage}
                    alt="Main project image"
                    width={800}
                    height={600}
                  />
                ) : (
                  <div className="bg-light text-center p-5">No main image</div>
                )}
              </div>
            </div>

            <div className="col-md-6">
              <ul className="pgalImages">
                {galleryImages.length > 0 ? (
                  galleryImages.map((img, i) => (
                    <li key={i}>
                      <Image
                        src={img}
                        alt={`Gallery ${i + 1}`}
                        width={300}
                        height={200}
                      />
                    </li>
                  ))
                ) : (
                  <p>No gallery images available.</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="pLocation" id="lacation">
        <div className="block2 mb-5">
          <h5>
            <span>TW5 0LF</span>Location
          </h5>
        </div>

        <div className="pLocationMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.5745655994474!2d-0.3790599!3d51.48432295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487672cd0922b7ab%3A0x2e442223d0e6fbd8!2sNew%20Heston%20Rd%2C%20Hounslow%20TW5%200LF%2C%20UK!5e0!3m2!1sen!2sin!4v1655452857434!5m2!1sen!2in"
            width="100%"
            height="450"
            loading="lazy"
            title="Project Location"
          />
        </div>
      </div>
    </div>
  );
}
