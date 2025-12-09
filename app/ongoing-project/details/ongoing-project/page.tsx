import { fetchPageData, PageApiResponse } from "@/app/action/pageAction";
import Image from "next/image";

const ProjectDetails = async () => {
  const UID = "39b35a38-e050-4cad-8072-fc39a44758d5";
  const res = await fetchPageData({ uid: UID });

  const pageData = res?.pagedata as PageApiResponse["pagedata"];
  const sections =
    res?.pageItemdataWithSubsection as PageApiResponse["pageItemdataWithSubsection"];
  const subsections = sections[0]
    ?.subsections as PageApiResponse["subsections"];
  const subsections1 = sections[1]
    ?.subsections as PageApiResponse["subsections"];
  const review = res?.editReviedata as PageApiResponse["editReviedata"];

  // console.log("Subsections", res);

  return (
    <div>
      <div
        className="banner-image-new"
        style={{
          backgroundImage:
            "url('https://wip.tezcommerce.com:3304/admin/module/50/1728556414834.jpg')",
        }}>
        {/* <Image
          className="backgroundImage"
          alt=""
          src={pageData?.cover_image_url || "/images/No_Image_Available.jpg"}
          width={1800}
          height={600}
        /> */}
        <div className="banner-hover">
          <h1 className="banner-hover-text">{pageData?.title}</h1>
          <div
            className="banner-hover-text2"
            dangerouslySetInnerHTML={{ __html: pageData?.description }}
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

      <div className="pOverview" id="overview">
        <div className="container">
          <div className="row">
            <div className="col-md-6 poLeft">
              <h5>{sections[0]?.title}</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: sections[0]?.shortDescription || "No description",
                }}
              />
            </div>

            {/* <div className="col-md-6">
              <ul className="pOverviewList">
                <li>
                  93 <span>Amenities & Facilities</span>
                </li>
                <li>
                  200+ <span>Apartments</span>
                </li>
                <li>
                  2/3 <span>BHK Homes</span>
                </li>
                <li>
                  2 <span>Towers</span>
                </li>
              </ul>
            </div> */}
            <div className="col-md-6">
              <ul className="pOverviewList">
                {subsections?.map((item) => (
                  <li key={item.id}>
                    {item.title}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.description || "No description",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Highlights ---------- */}
      <div className="phighlights" id="highlights">
        <div className="container">
          <div className="block2 mb-5">
            <h5>
              <span>RESIDENTIAL FLAT FEATURES</span>Highlights
            </h5>
          </div>

          <div className="row">
            <div className="container">
              <div className="tab tabbtn">
                <div className="phTabs">
                  <ul className="phdoor">{/* dynamic tabs can go here */}</ul>
                </div>
              </div>

              <div className="phMatr">{/* dynamic content here */}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pGallery" id="gallery">
        <div className="container">
          <div className="block2 mb-5">
            <h5>
              <span>{sections[1]?.title}</span>
              Gallery
            </h5>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="videoFrame">
                <img src={sections[1]?.image} />
              </div>
            </div>

            <div className="col-md-6">
              <ul className="pgalImages">
                <li>
                  <img src={subsections1[0].image} />
                </li>
                <li>
                  <img src={subsections1[1].image} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Location ---------- */}
      <div className="pLocation" id="lacation">
        <div className="block2 mb-5">
          <h5>
            <span>{sections[2]?.title}</span>Location
          </h5>
        </div>

        <div className="pLocationMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2354.2329474826747!2d-3.04178452323809!3d53.83872057243615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b437ca6ac7603%3A0x51d217895cd49700!2sWaterside%2C%20Blackpool%2C%20UK!5e0!3m2!1sen!2sin!4v1729236405730!5m2!1sen!2sin"
            width="600"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"></iframe>
        </div>
        {/* 
        <div className="container">
          <div className="mapAnchors">
            <h6>Waterside Cleveleys</h6>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2354.2329474826747!2d-3.04178452323809!3d53.83872057243615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b437ca6ac7603%3A0x51d217895cd49700!2sWaterside%2C%20Blackpool%2C%20UK!5e0!3m2!1sen!2sin!4v1729236405730!5m2!1sen!2sin"
              width="600"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"></iframe>
          </div>
        </div> */}
      </div>

      {/* ---------- Reviews ---------- */}
      <div className="pReviews" id="review">
        <div className="container">
          <div className="block2 mb-5">
            <h5>
              <span>WHAT THEY SAY</span>
              {sections[3]?.title}
            </h5>
          </div>

          <div className="row">
            <ul className="pReviewsList">
              <li>
                <div
                  className="prMatr"
                  dangerouslySetInnerHTML={{
                    __html: review[0]?.comment || "No description",
                  }}
                />

                <div className="prPic">
                  <Image
                    alt="Review Profile"
                    src={sections[3]?.image || "/images/No_Image_Available.jpg"}
                    width={50}
                    height={50}
                  />
                  <div className="prName">{review[0]?.author_name}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
