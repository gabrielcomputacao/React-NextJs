import { styled } from "@/styles";
import { HomeContainerNext, Product } from "@/styles/pages/home";
import Image from "next/image";

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

export default function Home() {
  return (
    <HomeContainerNext>
      <Product>
        <Image src={camiseta1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span> R$ 79,90 </span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span> R$ 79,90 </span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span> R$ 79,90 </span>
        </footer>
      </Product>
    </HomeContainerNext>
  );
}
