// import React from "react";
// import Image from "next/image";
// import { fetchPageData, PageApiResponse } from "@/lib/page";

// const projects = [
//   {
//     title: "Stanmore",
//     location: "Stanmore",
//     img: "https://wip.tezcommerce.com:3304/admin/module/50/1729145215507.jfif",
//     link: "https://www.sinckotgroup.co.uk/our-projects/details/stanmore",
//   },
//   {
//     title: "Elmtree Court",
//     location: "Heston",
//     img: "https://wip.tezcommerce.com:3304/admin/module/50/1647598569026.jpg",
//     link: "https://www.sinckotgroup.co.uk/our-projects/details/elmtree-court",
//   },
//   {
//     title: "The Knot",
//     location: "Westgate",
//     img: "https://wip.tezcommerce.com:3304/admin/module/50/1647598615316.jpg",
//     link: "https://www.sinckotgroup.co.uk/our-projects/details/the-knot",
//   },
//   {
//     title: "Windermere Avenue",
//     location: "Wembley",
//     img: "https://wip.tezcommerce.com:3304/admin/module/50/1647598635434.jpg",
//     link: "https://www.sinckotgroup.co.uk/our-projects/details/windermere-avenue",
//   },
//   {
//     title: "Sinckot House",
//     location: "Sinckot House",
//     img: "https://wip.tezcommerce.com:3304/admin/module/50/1650290917375.jpg",
//     link: "https://www.sinckotgroup.co.uk/our-projects/details/sinckot-house-2",
//   },
//   {
//     title: "Quantock Court",
//     location: "Quantock Court",
//     img: "https://wip.tezcommerce.com:3304/admin/module/50/1650291399277.jpg",
//     link: "https://www.sinckotgroup.co.uk/our-projects/details/quantock-court-2",
//   },
//   {
//     title: "Hornton Street, Kensington",
//     location: "South Kensington High Street",
//     img: "https://wip.tezcommerce.com:3304/admin/module/50/1650291564298.jpeg",
//     link: "https://www.sinckotgroup.co.uk/our-projects/details/hornton-street-kensington-2",
//   },
//   {
//     title: "144 Station Road",
//     location: "Harrow",
//     img: "https://wip.tezcommerce.com:3304/admin/module/50/1655442628713.jpg",
//     link: "https://www.sinckotgroup.co.uk/our-projects/details/144-station-road",
//   },
//   {
//     title: "Acre House",
//     location: "Watford",
//     img: "https://wip.tezcommerce.com:3304/admin/module/50/1655443733576.jpg",
//     link: "https://www.sinckotgroup.co.uk/our-projects/details/acre-house",
//   },
// ];

// const OurProjects = async () => {
//   const UID = "6652975d-5beb-4587-91f5-33699616deca";
//   const res = await fetchPageData({ uid: UID });
//   const data =
//     res?.pageItemdataWithSubsection as PageApiResponse["pageItemdataWithSubsection"];
//   console.log("DATA======", res);
//   return (
//     <div className="our-projects mt-5" id="completed-projects">
//       <div className="container">
//         <div className="block-heads">
//           <h5>
//             <span
//               dangerouslySetInnerHTML={{
//                 __html: res.pagedata?.description || "No description",
//               }}
//             />
//             {res.pagedata?.title}
//           </h5>

//         </div>

//         <div className="row">
//           {projects.map((project, index) => (
//             <div key={index} className="col-md-4">
//               <a href={project.link}>
//                 <div className="project-image">
//                   <img src={project.img} alt={project.title} />
//                 </div>
//                 <div className="project-over">
//                   {project.location}
//                   <h5>{project.title}</h5>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurProjects;

import React from "react";
import Image from "next/image";
import { fetchPageData, PageApiResponse } from "@/lib/page";
import Link from "next/link";

const OurProjects = async () => {
  const UID = "6652975d-5beb-4587-91f5-33699616deca";
  const res = await fetchPageData({ uid: UID });

  const data =
    res?.pageItemdataWithSubsection as PageApiResponse["pageItemdataWithSubsection"];

  console.log("data", data);

  return (
    <div className="our-projects mt-5" id="completed-projects">
      <div className="container">
        <div className="block-heads">
          <h5>
            <span
              dangerouslySetInnerHTML={{
                __html: res.pagedata?.description || "No description",
              }}
            />
            {res.pagedata?.title}
          </h5>
        </div>

        <div className="row">
          {data?.map((item) => (
            <div key={item.id} className="col-md-4">
              <Link href={`/our-projects/details/${item.cta}`}>
                <div className="project-image">
                  <Image
                    src={item.image || "/images/No_Image_Available.jpg"}
                    alt={item.title}
                    width={400}
                    height={400}
                  />
                </div>

                <div className="project-over">
                  {item.title}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.shortDescription || "No description",
                    }}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
