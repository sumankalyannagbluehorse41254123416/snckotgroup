import Image from "next/image";
import { fetchPageData, PageApiResponse } from "../action/pageAction";

const McKinsley = async () => {
  const UID = "9a8e6eeb-9759-4757-846c-717565c278ed";
  const res = await fetchPageData({ uid: UID });
  const data = res?.pagedata as PageApiResponse["pagedata"];
  const section =
    res?.pageItemdataWithSubsection as PageApiResponse["pageItemdataWithSubsection"];
  const subsection = section[2]?.subsections as PageApiResponse["subsections"];
  // console.log("Data ====", subsection);

  return (
    <section className="section white-section">
      <div className="grey-shape">
        <div className="icon-container fixed border-radius"></div>
      </div>

      <div className="section-container">
        <div className="container">
          <div id="post-wrapper" className="row">
            <div id="content" className="col-md-12 col-sm-812 col-xs-12">
              <div className="blog-container wow fadeIn clearfix">
                <div className="post-media">
                  <a href="https://www.sinckotgroup.co.uk/about-us/group-profile/profit-centre/#">
                    <Image
                      className="img-responsive"
                      src={
                        data?.cover_image_url ||
                        "/images/No_Image_Available.jpg"
                      }
                      alt="Who"
                      width={800}
                      height={600}
                    />
                  </a>
                </div>

                <div className="clearfix"></div>

                <p>
                  <strong>{data?.title}</strong>
                </p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: data?.description || "No description available",
                  }}
                />

                <p>
                  <strong>{section[0]?.title}</strong>
                </p>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      section[0]?.shortDescription ||
                      "No description available",
                  }}
                />

                <p>
                  <strong>{section[1]?.title}</strong>
                </p>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      section[1]?.shortDescription ||
                      "No description available",
                  }}
                />

                {/* <p>
                  <i
                    dangerouslySetInnerHTML={{
                      __html: subsection[0]?.description || "No description",
                    }}
                  />
                </p> */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: subsection[0]?.description || "No description",
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      section[2]?.shortDescription ||
                      "No description available",
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

export default McKinsley;
