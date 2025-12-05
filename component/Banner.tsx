// "use client";
// import Link from "next/link";
// import { fetchBannerData } from "@/lib/banner";
// import { FC, useEffect, useState } from "react";
// import Image from "next/image";
// interface BannerItem {
//   id: number;
//   title: string;
//   description: string;
//   desktopImage: string;
// }

// const Banner: FC = () => {
//   const [banner, setBanner] = useState<BannerItem | null>(null);
//   useEffect(() => {
//     async function bannerData() {
//       try {
//         const UID = "c6e50c15-9074-49f3-b4f4-083121c3f4b5";
//         const Data = await fetchBannerData(UID);

//         // console.log("UIData****", Data);
//         setBanner(Data);
//       } catch (error) {
//         console.error("Error fetching banner data:", error);
//       }
//     }
//     bannerData();
//   }, []);
//   if (!banner) {
//     return <div>Loading banner...</div>;
//   }
//   return (
//     <div className="banner container-fluid">
//       <div>
//         <div className="row">
//           <div className="banner-text col-md-6 col-sm-6">
//             <h2>{banner?.title}</h2>

//             <div
//               className="pt-3"
//               dangerouslySetInnerHTML={{ __html: banner?.description }}
//             />

//             <button className="banner-box mt-2">
//               <Link href="#footer" className="banner-btn">
//                 CONTACT US
//               </Link>
//               <span>
//                 <i className="fa fa-angle-right"></i>
//               </span>
//             </button>
//           </div>

//           <div
//             className="banner-image col-md-6 col-sm-6"
//             style={{ paddingRight: 0 }}>
//             <img
//               className="banner-image2 img-fulid"
//               src={banner?.desktopImage}
//               alt="image"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import Image from "next/image";
import Link from "next/link";

interface BannerItem {
  id: number;
  title: string;
  description: string;
  desktopImage: string;
}
interface BannerProps {
  banner: BannerItem;
}

const Banner = ({ banner }: BannerProps) => {
  return (
    <div className="banner container-fluid">
      <div>
        <div className="row">
          <div className="banner-text col-md-6 col-sm-12">
            <h2>{banner.title}</h2>

            <div
              className="pt-3"
              dangerouslySetInnerHTML={{ __html: banner.description }}
            />

            <button className="banner-box mt-2">
              <Link href="#footer" className="banner-btn">
                CONTACT US
              </Link>
              <span>
                <i className="fa fa-angle-right"></i>
              </span>
            </button>
          </div>

          <div
            className="banner-image col-md-6 col-sm-12"
            style={{ paddingRight: 0 }}>
            {/* <Image
              className="banner-image2 img-fulid"
              src={banner.desktopImage}
              alt={banner.title}
              width={600}
              height={400}
            /> */}
            <img className="banner-image2 img-fulid" src="/images/sinckot_home_right.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
