import { useTranslation } from "react-i18next";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import img4 from "../assets/img4.svg";
import img5 from "../assets/img5.svg";

function SlideshowData() {
  const { t } = useTranslation();
  const title1 = t("hero-title-1");
  const description1 = t("hero-description-1");
  const title2 = t("hero-title-2");
  const description2 = t("hero-description-2");
  const title3 = t("hero-title-3");
  const description3 = t("hero-description-3");
  const title4 = t("hero-title-4");
  const description4 = t("hero-description-4");
  const title5 = t("hero-title-5");
  const description5 = t("hero-description-5");

  const slideshowData = [
    {
      image: img1,
      title: title1,
      description: description1,
    },
    {
      image: img2,
      title: title2,
      description: description2,
    },
    {
      image: img3,
      title: title3,
      description: description3,
    },
    {
      image: img4,
      title: title4,
      description: description4,
    },
    {
      image: img5,
      title: title5,
      description: description5,
    },
  ];

  return slideshowData;
}

export default SlideshowData;
