// import Image from "next/image";

// const SinclairBanner = ({}) => {
//   return (
//     <div className="sinclair-banner container-fluid mt-5">
//       <div className="container">
//         <div className="row">
//           {/* Left Image */}
//           <div className="col-md-6 col-sm-6">
//             <Image
//               className="img-fluid sinclair-image"
//               src="https://wip.tezcommerce.com:3304/admin/module/50/1649745278803.png"
//               alt="image"
//               width={600}
//               height={400}
//             />
//           </div>

//           {/* Right Content */}
//           <div className="sinclair-text col-md-6 col-sm-6">
//             <h3>
//               <span>Accountancy, Tax Planning & Business Advisory</span>
//               <br />
//               Sinclair McKinsley
//             </h3>

//             <p>
//               We provide expert accountancy, tax, corporate and financial
//               advisory services to high-profile entrepreneurial SMEs, large
//               corporates and high net-worth individuals. We keep it personal by
//               enabling you to concentrate on expressing your talent while
//               depending on ours for accountancy and financial planning.
//             </p>

//             {/* List */}
//             <div className="sinclair-text-item">
//               <ul>
//                 <li>
//                   <i className="fa fa-check-circle"></i>
//                   <a href="#">Services for Business</a>
//                 </li>
//                 <li>
//                   <i className="fa fa-check-circle"></i>
//                   <a href="#">Services for individuals</a>
//                 </li>
//                 <li>
//                   <i className="fa fa-check-circle"></i>
//                   <a href="#">Sector Specialisms</a>
//                 </li>
//                 <li>
//                   <i className="fa fa-check-circle"></i>
//                   <a href="#">International</a>
//                 </li>
//               </ul>
//             </div>

//             {/* Contact Box */}
//             <div className="sinclair-contact">
//               <div className="sinclair-icon">
//                 <i className="fa fa-volume-control-phone"></i>
//               </div>
//               <div className="contact-box">
//                 <h4 className="pt-3">12/7 Support Team</h4>
//                 <h2>0208 427 8787</h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SinclairBanner;
import Image from "next/image";

interface Subsection {
  id: number;
  title: string;
  description?: string;
  image?: string;
  slug?: string;
}

interface Section {
  title: string;
  shortDescription?: string;
  image?: string;
  subsections?: Subsection[];
}

interface PageData {
  title: string;
  cover_image_url?: string;
  shortDescription?: string;
}

interface AccountancyProps {
  pagedata: PageData;
  section: Section;
}

const Accountancy = ({ pagedata, section }: AccountancyProps) => {
  return (
    <div className="sinclair-banner container-fluid mt-5">
      <div className="container">
        <div className="row">
          {/* Left Image */}
          <div className="col-md-6 col-sm-6">
            <Image
              className="img-fluid sinclair-image"
              src={pagedata.cover_image_url ?? ""}
              alt={pagedata.title}
              width={600}
              height={400}
            />
          </div>

          {/* Right Content */}
          <div className="sinclair-text col-md-6 col-sm-6">
            <h3>
              <span>{pagedata.title}</span>
              <br />
              {section.title}
            </h3>

            {/* Description */}
            {section.shortDescription && (
              <div
                dangerouslySetInnerHTML={{ __html: section.shortDescription }}
              />
            )}

            {/* Subsection List */}
            <div className="sinclair-text-item">
              <ul>
                {(section.subsections ?? []).map((item) => (
                  <li key={item.id}>
                    <i className="fa fa-check-circle"></i>
                    <a href={item.slug ? `/${item.slug}` : "#"}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Box */}
            <div className="sinclair-contact">
              <div className="sinclair-icon">
                <i className="fa fa-volume-control-phone"></i>
              </div>
              <div className="contact-box">
                <h4 className="pt-3">12/7 Support Team</h4>
                <h2>0208 427 8787</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountancy;
