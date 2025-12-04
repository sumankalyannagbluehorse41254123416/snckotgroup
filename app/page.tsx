import SinclairBanner from "@/component/Accountancy";
// import Banner from "@/component/Banner";
import InfoSection from "@/component/container";
import OngoingProject from "@/component/ongoing_project";
import OurProjects from "@/component/OurProjects";
import PropertySection from "@/component/Property_Development";
import FetchAccountancy from "@/component/serverComponent/FetchAccountancy";
import BannerPart from "@/component/serverComponent/fetchBannerData";

export default function Home() {
  return (
    <>
      <BannerPart />
      <PropertySection />

      {/* <SinclairBanner /> */}
      <FetchAccountancy />
      <InfoSection />
      <OurProjects />
      <OngoingProject />
    </>
  );
}
