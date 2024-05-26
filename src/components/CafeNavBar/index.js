import {useState, useContext, useEffect} from 'react'
import {
  NavBar,
  CafeLogo,
  CartContainer,
  MyOrdersText,
  CartLogo,
  CartCount,
} from './styledComponents'
import CartContext from '../../CartContext'

const CafeNavBar = () => {
  const {cartCounts} = useContext(CartContext)
  const totalCount = Object.values(cartCounts).reduce(
    (sum, count) => sum + count,
    0,
  )
  const [restaurantName, setRestaurantName] = useState('')

  useEffect(() => {
    const fetchRestaurantLogo = async () => {
      const dishesApiUrl =
        'https://run.mocky.io/v3/72562bef-1d10-4cf5-bd26-8b0c53460a8e'
      const options = {
        method: 'GET',
      }
      try {
        const response = await fetch(dishesApiUrl, options)
        const data = await response.json()
        setRestaurantName(data[0].restaurant_name)
      } catch (error) {
        console.error('Failed to fetch data:', error)
      }
    }
    fetchRestaurantLogo()
  }, [])

  return (
    <NavBar>
      <CafeLogo>{restaurantName}</CafeLogo>
      <CartContainer>
        <MyOrdersText>My Orders</MyOrdersText>
        <CartLogo />
        <CartCount>{totalCount}</CartCount>
      </CartContainer>
    </NavBar>
  )
}

export default CafeNavBar
