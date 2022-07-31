import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import React from "react";

const ProductsCards = ({
  products,
  fetchProductsData,
  totalProducts,
  searchInputText,
}) => {
  const [page, setPage] = React.useState(1);
  const totalPageCount = Math.ceil(totalProducts / 9);

  const handlePageChange = (event, value) => {
    setPage(value);

    let skipProducts = value * 9 - 9;
    fetchProductsData(skipProducts, searchInputText);
  };

  return (
    <Container sx={{ my: 10 }}>
      {Array.isArray(products) && (
        <Grid container spacing={4}>
          {products?.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card
                sx={{
                  maxWidth: 345,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  image={product?.thumbnail}
                />
                <CardContent sx={{}}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center", my: 2 }}
                  >
                    {product?.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product?.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ mt: "auto", display: "block", p: 0 }}>
                  <Typography
                    variant="h4"
                    sx={{ pl: 2, color: "#050f2c", fontWeight: "bold", mb: 2 }}
                  >
                    ${product.price}
                  </Typography>
                  <Box
                    sx={{
                      bgcolor: "#226089",
                      p: 2,
                      display: "flex",
                      gap: ".5em",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        bgcolor: "#0099cc",
                        boxShadow: "none",
                        "&: hover": {
                          bgcolor: "#226089",
                        },
                      }}
                    >
                      Buy Now
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        bgcolor: "#caccd1",
                        boxShadow: "none",
                        "&: hover": {
                          bgcolor: "#226089",
                        },
                      }}
                    >
                      Details
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Pagination
          count={totalPageCount}
          page={page}
          onChange={handlePageChange}
        />
      </Box>
    </Container>
  );
};

export default ProductsCards;
