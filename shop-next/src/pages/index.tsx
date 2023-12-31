import { styled } from "@/styles";
import { HomeContainerNext, Product } from "@/styles/pages/home";
import Image from "next/image";
import Head from "next/head";
import { useKeenSlider } from "keen-slider/react";

const Button = styled("button", {
  backgroundColor: "$green500",
  padding: "4px 8px",
  borderRadius: 4,

  "&:hover": {
    filter: "brightness(0.8)",
  },
});
import Link from "next/link";
import "keen-slider/keen-slider.min.css";
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
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
    <>
      <Head>
        <title> Home | Shop React and Next</title>
      </Head>
      <HomeContainerNext ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <strong>{product.name}</strong>
                  <span> {product.price} </span>
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainerNext>
    </>
  );
}

/* 
   SSR - server side rendering

export const getServerSideProps: GetServerSideProps


  SSG - static site generation

export const getStaticProps: GetStaticProps

*/

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((prod) => {
    const price = prod.default_price as Stripe.Price;
    return {
      id: prod.id,
      name: prod.name,
      imageUrl: prod.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount ? price.unit_amount / 100 : 10),
    };
  });

  return {
    props: { products },
  };
};
