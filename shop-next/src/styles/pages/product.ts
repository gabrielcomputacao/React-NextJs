import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",
  maxWidth: 1100,
  margin: "0 auto",
});
export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 576,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  display: "flex",
  alignItems: "center",
  height: "calc(656px - 0.5rem)",
  borderRadius: 8,
  padding: "0.25rem",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  h1: {
    fontSize: "$xl2",
    color: "$gray300",
  },

  span: {
    marginTop: "1rem",
    display: "block",
    fontSize: "$xl2",
    color: "$green300",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "$md",
    lineHeight: 1.6,
    color: "$gray300",
  },

  button: {
    marginTop: "auto",
    backgroundColor: "$green500",
    border: 0,
    color: "White",
    borderRadius: 8,
    padding: "1.25rem",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "$md",

    "&:hover": {
      backgroundColor: "$green300",
    },
  },
});
