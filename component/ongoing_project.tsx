import { fetchPageData, PageApiResponse } from "@/lib/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OngoingProject = async () => {
  const UID = "beedf60c-7439-43bc-acbf-4e201bd15f19";
  const res = await fetchPageData({ uid: UID });
  const data =
    res?.pageItemdataWithSubsection as PageApiResponse["pageItemdataWithSubsection"];
  // console.log("DATA======", data);
  return (
    <div className="ongoing-project mb-5" id="current-projects">
      <div className="container">
        <div className="block-heads">
          <div className="short_des"
            dangerouslySetInnerHTML={{
              __html: res.pagedata?.description || "No description",
            }}
          />
          <h5>{res.pagedata?.title}</h5>
        </div>

        <div className="row">
          {/* Image Section */}
          <div className="col-md-6 col-sm-12">
            <Image
              className="img-fulid ongoing-img"
              src={
                res.pagedata?.cover_image_url ||
                "/images/No_Image_Available.jpg"
              }
              alt="Ongoing project"
              width={400}
              height={400}
            />
          </div>

          {/* Text Section */}
          <div className="col-md-6 col-sm-12">
            <h4 className="des-title">{data[0]?.title}</h4>

            {/* <p className="cc">
              A seafront property, it overlooks the town’s extensive sandy beach
              and the Irish Sea. To the north lie Lancaster, Morecambe and the
              Lake District, while the popular resorts of Blackpool and Lytham
              St Annes lie just a few miles to the south. Closer still are all
              of Cleveleys’ own attractions and amenities: shops and
              supermarkets, a cinema and a wealth of bars and restaurants.
              <br />
              <br />
              The property previously served as a nursing home but it is now the
              subject of an ambitious conversion scheme that will see the
              creation of 29 high quality apartments. Upon completion, they will
              offer buyers and tenants some of the most desirable modern
              accommodation in the town.
            </p> */}

            <div
              className="ongoing-text3"
              dangerouslySetInnerHTML={{
                __html: data[0]?.shortDescription || "No description",
              }}
            />

            <Link href={`/${data[0]?.cta}`}>View Project</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingProject;
