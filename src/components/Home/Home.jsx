import { Box, CircularProgress, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../shared/Navbar";
import ProductsCards from "./ProductsCards";

const Home = () => {
  const [products, setProducts] = useState({});
  const [totalProducts, setTotalProducts] = useState(0);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [searchInputText, setSearchInputText] = useState("");

  const fetchProductsData = (skip = 0, searchInputText) => {
    if (searchInputText) {
      fetch(
        `https://dummyjson.com/products/search?q=${searchInputText}&limit=9&skip=${skip}`
      )
        .then((res) => res.json())
        .then((res) => {
          setIsDataLoading(true);
          setProducts(res.products);
          setTotalProducts(res.total);
          setIsDataLoading(false);
        });
    } else {
      fetch(`https://dummyjson.com/products?limit=9&skip=${skip}`)
        .then((res) => res.json())
        .then((res) => {
          setIsDataLoading(true);
          setProducts(res.products);
          setTotalProducts(res.total);
          setIsDataLoading(false);
        });
    }
  };

  const fetchSearchedProducts = (searchText) => {
    setIsDataLoading(true);
    fetch(`https://dummyjson.com/products/search?q=${searchText}&limit=9`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
        setTotalProducts(res.total);
        setIsDataLoading(false);
      });
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <>
      <Navbar
        fetchSearchedProducts={fetchSearchedProducts}
        searchInputText={searchInputText}
        setSearchInputText={setSearchInputText}
      />
      <Container>
        {isDataLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              my: 10,
            }}
          >
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          <ProductsCards
            products={products}
            fetchProductsData={fetchProductsData}
            totalProducts={totalProducts}
            searchInputText={searchInputText}
          />
        )}
      </Container>
    </>
  );
};

export default Home;
