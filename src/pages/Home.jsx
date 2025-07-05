import { useState } from "react";
import Filter from "../components/Filter";
import HeadingSecondary from "../components/HeadingSecondary";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("");
  return (
    <>
      <Hero />
      <div id="productList">
        <HeadingSecondary
          heading="Our Product"
          description={{
            first: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            second: "Enim neque ipsam nulla quibusdam distinctio",
          }}
        />
      </div>
      <Filter
        searchText={searchText}
        setSearchText={setSearchText}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <ProductList sortOption={sortOption} searchText={searchText} />
    </>
  );
}
