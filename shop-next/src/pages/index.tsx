import { styled } from "@/styles";
import { HomeContainerNext, Product } from "@/styles/pages/home";
import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";

import camiseta1 from "../assets/tshirt/1.png";
import camiseta2 from "../assets/tshirt/2.png";
import camiseta3 from "../assets/tshirt/3.png";

const Button = styled("button", {
  backgroundColor: "$green500",
  padding: "4px 8px",
  borderRadius: 4,

  "&:hover": {
    filter: "brightness(0.8)",
  },
});
import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  });

  return (
    <HomeContainerNext ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span> R$ 79,90 </span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span> R$ 79,90 </span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span> R$ 79,90 </span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span> R$ 79,90 </span>
        </footer>
      </Product>
    </HomeContainerNext>
  );
}
