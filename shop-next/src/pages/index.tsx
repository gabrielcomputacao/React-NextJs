import { styled } from "@/styles";

const Button = styled("button", {
  backgroundColor: "$rocketseat",
  padding: "4px 8px",
  borderRadius: 4,

  "&:hover": {
    filter: "brightness(0.8)",
  },
});

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <Button> Enviar </Button>
    </div>
  );
}
