// import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { PropTypes } from 'prop-types'
import { Button, Card, CardActions, CardMedia, Container, Grid, Typography } from '@mui/material'
import useCart from '../hooks/useCart.js'

export default function Products({ products }) {

  const { cart, addToCart, removeFromCart } = useCart();

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id);
  };

  return (
    <Grid 
      container 
      spacing={5}
      sx={{ 
        width: "95vw", 
        margin: "0 auto", 
        padding: "2rem 0",
        paddingRight: 5
      }}
    >  
      {
        products.map(product => {
          const isProductInCart = checkProductInCart(product);
          return (
          <Grid item lg={3} md={4} sm={6} xs={12} key={product.id}>
            <Card 
              sx={{
                boxShadow: "0 0 15px 5px rgba(0, 0, 0, 0.2)",
                outline: "1px solid black"
              }}
            >
              <CardMedia
                component="img"
                image={product.thumbnail}
                alt={product.title}
                sx={{ 
                  objectFit: "cover",
                  aspectRatio: "16/9", 
                  display: "block"           
                }}
              />
              <Container 
                sx={{
                  color: "white",
                   backgroundColor: "#202020",
                   p: 1.5
                   }}
                  >
                <Typography>{`${product.title} - $${product.price}`}</Typography>
                <CardActions>
                <Button 
                  variant='contained'
                  color={isProductInCart ? "error" : "success"}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }}
                >
                  {
                    isProductInCart 
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon  />
                  }   
                </Button>
              </CardActions>
              </Container>      
            </Card>  
          </Grid>
        )})
      }
    </Grid>
  )
}

Products.propTypes = {
  products: PropTypes.array
}