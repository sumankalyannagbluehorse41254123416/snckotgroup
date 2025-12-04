import { fetchPageData } from "@/lib/page";
import React from "react";

const About = async () => {
  const UID = "5847da9e-c040-4f8d-a04b-a61aaa3a1745";
  const res = await fetchPageData({ uid: UID });
  // console.log("About", res);

  return (
    <>
      <h3>{res.pagedata?.title}</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: res.pagedata?.description,
        }}
      />
    </>
  );
};

export default About;
