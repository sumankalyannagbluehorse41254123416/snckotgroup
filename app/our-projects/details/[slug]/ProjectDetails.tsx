// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function ProjectClient({ pageData, slug }: any) {
//   const [activeTab, setActiveTab] = useState("indoor");

//   return (
//     <div>
//       <div
//         className="banner-image-new"
//         style={{
//           backgroundImage:
//             "url('https://wip.tezcommerce.com:3304/admin/module/50/1650080047851.jpg')",
//         }}>
//         <div className="banner-hover">
//           <h1 className="banner-hover-text">Elmtree Court</h1>
//           <h4 className="banner-hover-text2">Heston (Hounslow borough)</h4>
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

//       <div className="pOverview" id="overview">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6 poLeft">
//               <h5>Overview</h5>
//               <p>
//                 A high quality new residential building in Heston, Hounslow with
//                 a mix types of units ranging from Studio Apartments to 3
//                 Bedrooms apartments. Some of the flats feature Terraces and
//                 Balconies that provide a break in the façade and social amenity
//                 space. The property features gated and secured parking area and
//                 is well connected via the public transport.
//               </p>
//             </div>

//             <div className="col-md-6">
//               <ul className="pOverviewList">
//                 <li>
//                   30<span>Amenities & Facilities</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ------------------ Highlights Section ------------------ */}
//       <div className="phighlights" id="highlights">
//         <div className="row">
//           <div className="container">
//             {/* TAB BUTTONS */}
//             <div className="tab tabbtn">
//               <div className="phTabs">
//                 <ul className="phdoor">
//                   <li className="ph1">
//                     {/* <button
//                       className={`tablinks ${
//                         activeTab === "indoor" ? "active" : ""
//                       }`}
//                       onClick={() => setActiveTab("indoor")}>
//                       INDOOR AMENITIES
//                     </button> */}
//                     <Link
//                       href="#"
//                       className={`tablinks ${
//                         activeTab === "indoor" ? "active" : ""
//                       }`}
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setActiveTab("indoor");
//                       }}>
//                       INDOOR AMENITIES
//                     </Link>
//                   </li>

//                   <li className="ph1">
//                     {/* <button
//                       className={`tablinks ${
//                         activeTab === "outdoor" ? "active" : ""
//                       }`}
//                       onClick={() => setActiveTab("outdoor")}>
//                       OUTDOOR AMENITIES
//                     </button> */}
//                     <a
//                       href="#"
//                       className={`tablinks ${
//                         activeTab === "indoor" ? "active" : ""
//                       }`}
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setActiveTab("outdoor");
//                       }}>
//                       OUTDOOR AMENITIES
//                     </a>
//                   </li>

//                   <li className="ph1">
//                     {/* <button
//                       className={`tablinks ${
//                         activeTab === "other" ? "active" : ""
//                       }`}
//                       onClick={() => setActiveTab("other")}>
//                       OTHER SERVICES
//                     </button> */}
//                     <a
//                       href="#"
//                       className={`tablinks ${
//                         activeTab === "indoor" ? "active" : ""
//                       }`}
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setActiveTab("other");
//                       }}>
//                       INDOOR AMENITIES
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* TAB CONTENT */}
//             <div className="phMatr">
//               {/* INDOOR */}
//               {activeTab === "indoor" && (
//                 <div id="indoor-amenities" className="tabcontent phlink ani-0">
//                   <h3>INDOOR AMENITIES</h3>
//                   <ul>
//                     <li>Integrated Millers and Bosch appliances</li>
//                     <li>Engineering wood flooring</li>
//                     <li>Granite/Quartz kitchen worktop</li>
//                     <li>Porcelanosa tiles and mosaic in bathroom</li>
//                     <li>Dedicated parking space</li>
//                     <li>All flats wheelchair accessible</li>
//                     <li>Sustainable design and construction</li>
//                     <li>Improved thermal and acoustic efficiency</li>
//                     <li>High insulation levels</li>
//                     <li>High efficiency A* condensing boilers</li>
//                     <li>Robust detailing for thermal bridging</li>
//                     <li>Reduced flow shower fittings</li>
//                     <li>High grade sustainable materials</li>
//                     <li>Low voltage light fittings</li>
//                     <li>Provision of cycle storage</li>
//                     <li>Landscaping/SUDS drainage system</li>
//                     <li>Lift access to all floors</li>
//                   </ul>
//                 </div>
//               )}

//               {/* OUTDOOR */}
//               {activeTab === "outdoor" && (
//                 <div id="outdoor-amenities" className="tabcontent phlink ani-1">
//                   <h3>OUTDOOR AMENITIES</h3>
//                   <ul>
//                     <li>Communal garden with plants & pathways</li>
//                     <li>Paved access to main entrance</li>
//                     <li>24Hrs CCTV in car park and entrance</li>
//                     <li>Keyless video entry system</li>
//                     <li>Secured gated car park & play area</li>
//                     <li>Dedicated parking space</li>
//                     <li>Security coded gated parking entrance</li>
//                     <li>Recycling of existing building materials</li>
//                     <li>Waste management & recycling facilities</li>
//                   </ul>
//                 </div>
//               )}

//               {/* OTHER SERVICES */}
//               {activeTab === "other" && (
//                 <div id="other-services" className="tabcontent phlink ani-2">
//                   <h3>OTHER SERVICES</h3>
//                   <ul>
//                     <li>Southall Station, 1.8 miles</li>
//                     <li>Hounslow West tube station, 0.8 miles</li>
//                     <li>Bedfont Lakes Country Park</li>
//                     <li>Hounslow Urban Farm</li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ------------------ Gallery ------------------ */}
//       <div className="pGallery" id="gallery">
//         <div className="container">
//           <div className="block2 mb-5">
//             <h5>
//               <span>RESIDENTIAL PROJECT IMAGES</span>Gallery
//             </h5>
//           </div>

//           <div className="row">
//             <div className="col-md-6">
//               <div className="videoFrame">
//                 <img src="https://wip.tezcommerce.com:3304/admin/module/50/1650080503368.jpg" />
//               </div>
//             </div>

//             <div className="col-md-6">
//               <ul className="pgalImages">
//                 {[
//                   "1650080503368",
//                   "1650081438852",
//                   "1650081457374",
//                   "1650092474513",
//                   "1650092533296",
//                   "1650092616434",
//                   "1650092652108",
//                 ].map((img) => (
//                   <li key={img}>
//                     <img
//                       src={`https://wip.tezcommerce.com:3304/admin/module/50/${img}.jpg`}
//                     />
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ------------------ Location ------------------ */}
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
//             loading="lazy"></iframe>
//         </div>
//       </div>
//     </div>
//   );
// }
