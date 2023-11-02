import { ImageContainerSucces, SucessContainer } from "@/styles/pages/sucess";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { stripe } from "../lib/stripe";
import Head from "next/head";

interface SucessProps {
  customerName: string;
  product: string;
}

export default function Success({ customerName, product }: SucessProps) {
  return (
    <>
      <Head>
        <title> Compra Efetuada | Shop React and Next</title>
        {/* os indexadores de busca nao indexam essa pagina */}
        <meta name="robots" content="noindex" />
      </Head>
      <SucessContainer>
        <h1>Compra Efetuada!</h1>

        <ImageContainerSucces></ImageContainerSucces>

        <p>
          Parabens <strong>{customerName}</strong> ! Sua compra foi efetuada com
          sucesso!
        </p>

        <Link href="/">Voltar ao Catalogo</Link>
      </SucessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      notFound: true,
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {});

  const customerName = session.customer_details?.name;

  return {
    props: {
      customerName,
    },
  };
};
