import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";

import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  /*  
    caso fosse usar uma rota interna do front end

    const router = useRouter() 
  
  */

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      /* 
        Daria um push usando o router do proprio next para uma url para o usuario ser levado ate ela
        Nesse caso usou o window do js porque é uma rota externa a aplicação 
        que cairia na rota do stripe

      router.push('/checkout') */

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("falha ao conectar checkout!!");
    }
  }

  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>isLoading...</p>;
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image
          src={product.imageUrl}
          alt="imagem Camiseta"
          height={480}
          width={520}
        />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession}>
          Comprar Agora
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_OtnTxwLXoHmhcU" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any> = async ({ params }) => {
  const productId = String(params?.id);

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount ? price.unit_amount / 100 : 10),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
  };
};
