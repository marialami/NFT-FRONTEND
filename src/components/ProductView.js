import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from './Announcement'
import Footer from './Footer'
import Navbar from './Navbar'

function ProductView() {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrap>
            <ImgContainer>
                <Image src='/images/TonyHawk.png' />
            </ImgContainer>
            <InfoContainer>
                <Title> Tony Hawk </Title>
                <Description> Un bello NFT </Description>
                <Price> 10000000 bitcoin </Price> 
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color='black' />
                        <FilterColor color='darkblue' />
                        <FilterColor color='gray' />
                    </Filter>
                    <Filter>
                        <FilterTitle> Size </FilterTitle>
                        <FilterSize>
                            <FilterSizeOption> XS </FilterSizeOption>
                            <FilterSizeOption> S </FilterSizeOption>
                            <FilterSizeOption> M </FilterSizeOption>
                            <FilterSizeOption> L </FilterSizeOption>
                            <FilterSizeOption> XL </FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount> 1 </Amount>
                        <Add />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrap>
        <Footer />
    </Container>
  )
}

export default ProductView

const Container = styled.div `

`

const Wrap = styled.div `
    padding: 50px;
    display: flex;
`

const ImgContainer = styled.div `
    flex: 1;
`

const Image = styled.img `
    width: 100%;
    height: 90vh;
    object-fit: cover;
`

const InfoContainer = styled.div `
    flex: 1;
    padding: 0 50px;
`

const Title = styled.h1 `
    font-weight: 200;
`

const Description = styled.p `
    margin: 20px 0;
` 

const Price = styled.span `
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div `
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div `
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span `
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div `
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`

const FilterSize = styled.select `
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option `

`

const AddContainer = styled.div `
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const AmountContainer = styled.div `
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span `
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`

const Button = styled.button `
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`