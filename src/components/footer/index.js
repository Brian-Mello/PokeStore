import React from 'react'
import {FooterComponent, CopyrightText} from './styled';

function Footer(props) {
    return (
        <FooterComponent gradient={props.gradient} color={props.color}>
            <CopyrightText textColor={props.textColor}>Copyright © {new Date().getFullYear()} <b>Brian Mello design Limited.</b></CopyrightText>
        </FooterComponent>
    )
}

export default Footer;