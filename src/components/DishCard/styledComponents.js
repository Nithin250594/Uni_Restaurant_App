import styled from 'styled-components'

export const DishItem = styled.li`
  border: 2px solid #bfbfbf;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  padding: 10px;
`
export const DishType = styled.img`
  height: 35px;
  width: 35px;
  align-self: flex-start;
  margin-right: 0px;
`
export const DishDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 7px;
  align-self: flex-start;
  @media screen and (max-width: 768px) {
    width: 40%;
    margin-left: 10px;
  }
`

export const DishName = styled.h1`
  font-size: 18px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-bottom: 0px;
  margin-top: 0px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`

export const DishCost = styled.p`
  font-size: 16px;
  font-weight: 600;
  font-family: 'Roboto';
  color: #595454;
  margin-bottom: 0px;
  margin-top: 7px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const DishDescription = styled.p`
  color: #94928e;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 7px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const CountDiv = styled.div`
  background-color: green;
  border-radius: 15px;
  color: white;
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 21px;
    width: 145px;
    height: 50px;
    padding: 10px;
    border-radius: 25px;
  }
`
export const CountButton = styled.button`
  font-size: 21px;
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 38px;
  }
`
export const CustomizeText = styled.p`
  color: #4f2dcc;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const DishAvailableText = styled(CustomizeText)`
  color: #d62931;
  margin-top: 0px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`

export const Calories = styled.p`
  color: orange;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Roboto';
  width: 20%;
  @media screen and (max-width: 768px) {
    width: 30%;
    font-size: 18px;
    margin-left: 10px;
  }
`

export const DishImg = styled.img`
  height: 90%;
  width: 180px;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    width: 30%;
    height: 60%;
    align-self: flex-start;
  }
`
