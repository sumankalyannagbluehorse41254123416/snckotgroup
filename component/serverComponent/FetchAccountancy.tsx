// import { fetchPageData } from "@/lib/page";
// import Accountancy from "../Accountancy";

// export default async function FetchAccountancy() {
//   const response = await fetchPageData({
//     uid: "6c88a1fe-b519-48e5-9a11-e6b775659b36",
//     host: "www.sinckotgroup.co.uk",
//   });

//   const pagedata = response?.data?.pagedata;
//   const section = response?.data?.pageItemdataWithSubsection?.[0];
//   console.log("Section ===>", pagedata);
//   if (!pagedata || !section) return <h2>No Data Found</h2>;

//   return <Accountancy pagedata={pagedata} section={section} />;
// }
import { fetchPageData } from "@/lib/page";
import Accountancy from "../Accountancy";

export default async function FetchAccountancy() {
  const UID = "6c88a1fe-b519-48e5-9a11-e6b775659b36";
  const response = await fetchPageData({ uid: UID });

  const pagedata = response?.pagedata;
  const section = response?.pageItemdataWithSubsection?.[0];

  if (!pagedata || !section) return <h2>No Data Found</h2>;

  return <Accountancy pagedata={pagedata} section={section} />;
}
