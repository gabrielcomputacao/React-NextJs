import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>20,00</span>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          quia, in, dolores inventore, laboriosam debitis nostrum dignissimos
          facere saepe labore doloribus eos fugit? Quae, quasi hic? Laudantium
          debitis voluptatibus repellendus.{" "}
        </p>
        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
