import styles from "./Slide.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

import img1 from "../assets/img_shop_digital.jpeg";
import img2 from "../assets/img_shop_fashion.jpeg";
import img3 from "../assets/img_shop_grocery.jpeg";

export default function Slide() {
  return (
    <>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        className={styles.carouselWrapper}
        showThumbs={false}
        showStatus={false}
      >
        {slidesData.map((slide, index) => (
          <div key={index} className={styles.carouselSlide}>
            <img src={slide.imgSrc} alt={`slide-${index}`} />
            <div className={styles.textArea}>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <Link to={slide.link}>
                바로가기 <AiOutlineArrowRight className={styles.arrow} />
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}

const slidesData = [
  {
    imgSrc: img1,
    title: "신속한 업무처리!",
    description: "다양한 디지털 상품을 둘러보세요.",
    link: "/Digital",
  },
  {
    imgSrc: img2,
    title: "물빠진 청바지!",
    description: "이제 막 도착한 패션 청바지를 구경해 보세요.",
    link: "/Fashion",
  },
  {
    imgSrc: img3,
    title: "신선한 식품!",
    description: "농장 직배송으로 더욱 신선한 식료품을 만나보세요.",
    link: "/grocery",
  },
];
