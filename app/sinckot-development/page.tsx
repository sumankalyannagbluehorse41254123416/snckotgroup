import Image from "next/image";
import { fetchPageData, PageApiResponse } from "../action/pageAction";

const DevelopmentPage = async () => {
  const UID = "53b9656d-5324-46ea-84e3-ba8b5f9a9891";
  const res = await fetchPageData({ uid: UID });
  const data = res?.pagedata as PageApiResponse["pagedata"];
  // console.log("Data ====", data);
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
                <div className="post-media">
                  <a href="/about-us/group-profile/profit-centre/#">
                    <Image
                      className="img-responsive"
                      src={
                        data?.cover_image_url ||
                        "/images/No_Image_Available.jpg"
                      }
                      alt="Development Banner"
                      width={1200}
                      height={600}
                    />
                  </a>
                  <div className="icon-container border-radius"></div>
                </div>

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

export default DevelopmentPage;
