import { styled } from "@/styles";
import { HomeContainerNext, Product } from "@/styles/pages/home";
import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";

const Button = styled("button", {
  backgroundColor: "$green500",
  padding: "4px 8px",
  borderRadius: 4,

  "&:hover": {
    filter: "brightness(0.8)",
  },
});
import "keen-slider/keen-slider.min.css";
import { stripe } from "../lib/stripe";
import { GetServerSideProps } from "next";
import Stripe from "stripe";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  });

  return (
    <HomeContainerNext ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Product className="keen-slider__slide" key={product.id}>
            <Image src={product.imageUrl} width={520} height={480} alt="" />

            <footer>
              <strong>{product.name}</strong>
              <span> {product.price} </span>
            </footer>
          </Product>
        );
      })}
    </HomeContainerNext>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((prod) => {
    const price = prod.default_price as Stripe.Price;
    return {
      id: prod.id,
      name: prod.name,
      imageUrl: prod.images[0],
      price: price.unit_amount ? price.unit_amount / 100 : 10,
    };
  });

  return {
    props: { products },
  };
};
