import React from 'react'
import {FooterComponent, CopyrightText} from './styled';

function Footer(props) {
    return (
        <FooterComponent color={props.color}>
            <CopyrightText>Copyright © {new Date().getFullYear()} <b>Brian Mello design Limited.</b></CopyrightText>
        </FooterComponent>
    )
}

export default Footer;