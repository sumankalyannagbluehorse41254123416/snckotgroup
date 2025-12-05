import { fetchPageData, PageApiResponse } from "@/lib/page";
import Image from "next/image";
const InfoSection = async () => {
  const UID = "0e71f50b-7fd6-4170-8326-bd68bb9c7035";
  const res = await fetchPageData({ uid: UID });
  const data =
    res?.pageItemdataWithSubsection as PageApiResponse["pageItemdataWithSubsection"];
  // console.log("Data ====", data);
  return (
    <div className="container mb-3">
      <div className="row">
        {/* Column 1 */}
        <div className="col-md-4 col-sm-12">
          <h3 className="who pb-3">{data[0]?.title}</h3>
          {/* {data[0]?.shortDescription && (
            <p
              dangerouslySetInnerHTML={{ __html: data[0]?.shortDescription }}
            />
          )} */}
          <div
            dangerouslySetInnerHTML={{
              __html: data[0]?.shortDescription || "No description",
            }}
          />
        </div>

        {/* Column 2 */}
        <div className="col-md-4 col-sm-12">
          <h3 className="who pb-3">{data[1]?.title}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: data[1]?.shortDescription || "No description",
            }}
          />
        </div>

        {/* Column 3 */}
        <div className="col-md-4 col-sm-12">
          <h3 className="who pb-3">{data[2]?.title}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: data[2]?.shortDescription || "No description",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
