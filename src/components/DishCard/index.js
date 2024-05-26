import {useContext} from 'react'
import CartContext from '../../CartContext'
import {
  DishType,
  DishItem,
  DishDetails,
  DishName,
  DishCost,
  DishDescription,
  CountDiv,
  CountButton,
  CustomizeText,
  Calories,
  DishImg,
  DishAvailableText,
} from './styledComponents'

const logosStickers = {
  veg:
    'https://res.cloudinary.com/dg14m0ern/image/upload/v1716537361/veg_logo.png',
  nonveg:
    'https://res.cloudinary.com/dg14m0ern/image/upload/v1716537361/non_veg_logo.png',
}

const DishCard = ({dishItem}) => {
  const {cartCounts, incrementCount, decrementCount} = useContext(CartContext)
  const dishCount = cartCounts[dishItem.dishId] || 0
  const isCustomizeAvailable =
    dishItem.addonCat.length > 0 ? 'Customizations available' : ''

  const isVegLogo =
    dishItem.dishType === 2 ? logosStickers.veg : logosStickers.nonveg

  return (
    <DishItem>
      <DishType src={isVegLogo} alt="veg_or_Non-veg" />
      <DishDetails>
        <DishName>{dishItem.dishName}</DishName>
        <DishCost>SAR {dishItem.dishPrice}</DishCost>
        <DishDescription>{dishItem.dishDescription}</DishDescription>
        {dishItem.dishAvailability ? (
          <CountDiv>
            <CountButton onClick={() => decrementCount(dishItem.dishId)}>
              -
            </CountButton>
            {dishCount}
            <CountButton onClick={() => incrementCount(dishItem.dishId)}>
              +
            </CountButton>
          </CountDiv>
        ) : (
          <DishAvailableText> Not available</DishAvailableText>
        )}

        {dishItem.addonCat.length > 0 && (
          <CustomizeText>{isCustomizeAvailable}</CustomizeText>
        )}
      </DishDetails>
      <Calories>{dishItem.dishCalories} Calories</Calories>
      <DishImg src={dishItem.DishImg} alt={dishItem.dishName} />
    </DishItem>
  )
}

export default DishCard
