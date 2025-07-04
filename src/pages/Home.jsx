import HeadingSecondary from "../components/HeadingSecondary";
import Hero from "../components/Hero";
import Product from "../components/Product";

export default function Home() {
  return (
    <>
      <Hero />
      <HeadingSecondary
        heading="Our Product"
        description={{
          first: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          second: "Enim neque ipsam nulla quibusdam distinctio",
        }}
      />
      <Product />
    </>
  );
}
