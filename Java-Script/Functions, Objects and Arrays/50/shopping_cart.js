// Define the array of cart items
const cart = [
    { name: "Product 1", price: 10, quantity: 2 },
    { name: "Product 2", price: 20, quantity: 3 },
    { name: "Product 3", price: 15, quantity: 1 },
  ];
  
  // Function to calculate the total price using forEach
  function calculateTotalPrice(cart) {
    let totalPrice = 0;
  
    cart.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
  
    return totalPrice;
  }
  
  // Calculate the total price and log it to the console
  const total = calculateTotalPrice(cart);
  console.log("Total Price:", total);