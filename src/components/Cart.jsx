import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { Box, Button, Card, CardMedia, List, ListItem, Typography } from '@mui/material';
import useCart from '../hooks/useCart.js';
import { PropTypes } from 'prop-types';

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <ListItem>
      <Card>
        <CardMedia 
          component="img"
          src={thumbnail} 
          alt={title}
          sx={{
            aspectRatio: "16/9",
            width: "100%"
          }}
        />
        <Box sx={{padding: 1}}>
          <Typography>
            <strong>{title}</strong> - ${price}
          </Typography>

          <Box sx={{display: "flex", gap: 1}}>
            <Typography>
              <small>Qty: {quantity}</small>
            </Typography>
            <button onClick={addToCart}>+</button>
          </Box>
        </Box>   
      </Card>
    </ListItem>
  )
  
}

export default function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <Box
        component="label"
        sx={{
          alignItems: "center",
          background: "#09f",
          borderRadius: "9999px",
          cursor: "pointer",
          display: "flex",
          height: "32px",
          justifyContent: "center",
          padding: "4px",
          position: "absolute",
          right: "8px",
          top: "8px",
          transition: "all .3s ease",
          width: "32px",
          zIndex: "9999",
          "&:hover": {
            scale: "1.1"
          },
          "& ~ input:checked ~ .cart": {
            height: "100%",
            display: "block"
          }
        }}
        htmlFor={cartCheckboxId}>
        <CartIcon />
      </Box>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <Box
        className='cart'
        component="aside"
        sx={{
          overflow: "scroll",
          color: "white",
          background: "#000",
          display: "none",
          padding: "0",
          position: "fixed",
          right: "0px",
          top: "0px",
          width: "300px",
          zIndex: "1"
        }}
      >
        <List>
          {
            cart.map(product => (
              <CartItem 
                key={product.id} 
                addToCart={() => addToCart(product)}
                {...product}
              />
            ))
          }
        </List>  
        <Button 
            variant='contained' 
            color="error" 
            onClick={clearCart}
            sx={{display: "block", margin: "0 auto", mb: 2}}
          >
            <ClearCartIcon  />
          </Button>    
      </Box>
    </>
  )
}

CartItem.propTypes = {
  thumbnail: PropTypes.string, 
  price: PropTypes.number, 
  title: PropTypes.string, 
  quantity: PropTypes.number, 
  addToCart: PropTypes.func,
}