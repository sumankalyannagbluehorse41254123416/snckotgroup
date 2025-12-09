import { fetchPageData } from "@/lib/page";
import Image from "next/image";
import { PageApiResponse } from "../action/pageAction";
import Link from "next/link";

const SolomonsPage = async () => {
  const UID = "8e80937c-4a86-4247-b209-afe8e19231ad";
  const res = await fetchPageData({ uid: UID });
  const data = res?.pagedata as PageApiResponse["pagedata"];
  // console.log("Res ====", res);
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
                  <Link href="/about-us/group-profile/profit-centre/#">
                    <Image
                      className="img-responsive"
                      src={
                        data?.cover_image_url ||
                        "/images/No_Image_Available.jpg"
                      }
                      alt="Solomons Banner"
                      width={1200}
                      height={600}
                    />
                  </Link>
                  <div className="icon-container border-radius"></div>
                </div>

                <div
                  className="clearfix"
                  dangerouslySetInnerHTML={{
                    __html: data?.description || "No description available",
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

export default SolomonsPage;
