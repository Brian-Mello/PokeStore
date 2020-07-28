import React from 'react'
import { HeaderComponent, HeaderLogoComponent, HeaderSearchComponent, HeaderMenuComponent, Logo, Title, StyledTextfield, MaterialButton  } from './styled';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function Header(props) {
    return (
        <HeaderComponent color={props.color} position={props.position}>
            <HeaderLogoComponent>
                <Logo fontFamily={props.fontFamily}>
                    <Title>{props.pageName}</Title>
                    {props.icon}
                </Logo>
            </HeaderLogoComponent>
            <HeaderSearchComponent>
                <StyledTextfield 
                    id="outlined-basic" 
                    value={props.value} 
                    onChange={props.onChange} 
                    variant={props.inputStyle}
                    placeholder={props.placeholder}
                    color='primary'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        )
                    }}
                />
            </HeaderSearchComponent>
            <HeaderMenuComponent>
                <MaterialButton variant="contained" color={props.buttonColor} onClick={props.onClick}>{props.buttonText}<NavigateNextIcon/></MaterialButton>
            </HeaderMenuComponent>
        </HeaderComponent>
    )
}

export default Header;