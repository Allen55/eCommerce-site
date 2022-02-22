import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Container = styled.div`
    height: 60px;
    
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    
`

//
// Left Side
//
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const SearchContainer = styled.div`
    border: .05px solid lightgrey;
    font-size:14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 25px;
`

const Input = styled.input`
    border: none;
`
//
// Center Area
//
const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;

`
//
// Right Side
//
const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <SearchIcon style={{color: "gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>YARELI</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Stack spacing={2} direction="row">
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </Stack>
                </MenuItem>
            </Right>
        </Wrapper>    
    </Container>
  )
}

export default Navbar