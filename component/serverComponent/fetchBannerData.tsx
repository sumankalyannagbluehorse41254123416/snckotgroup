import { fetchBannerData } from "@/lib/banner";
import Banner from "../Banner";

const BannerPart = async () => {
  const uid = "c6e50c15-9074-49f3-b4f4-083121c3f4b5";
  const banner = await fetchBannerData(uid);

  return (
    <main>
      <Banner banner={banner} />
    </main>
  );
};

export default BannerPart;
