import { ImageContainerSucces, SucessContainer } from "@/styles/pages/sucess";
import Link from "next/link";

export default function Success() {
  return (
    <SucessContainer>
      <h1>Compra Efetuada!</h1>

      <ImageContainerSucces></ImageContainerSucces>

      <p>
        Parabens <strong>Gabriel</strong> ! Sua compra foi efetuada com sucesso!
      </p>

      <Link href="/">Voltar ao Catalogo</Link>
    </SucessContainer>
  );
}
