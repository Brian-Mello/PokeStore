import { push } from 'connected-react-router';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/footer';
import Header from '../../components/header';
import StoreCard from '../../components/StoreCard';
import { Main, StoreComponent } from '../../style/globalStyled';
import { routes } from '../Router';

class PokeStore extends Component {

    render(){
        const { goToFireStore, goToWaterStore } = this.props

        return (
            <StoreComponent>
                <Header 
                    pageName={"Poke Store"} 
                    gradient={ "linear-gradient(to right, #e6963f, #3fbee5, #5f3cc6, #969696, #969696, #5f3cc6, #3fbee5, #e6963f)"}
                    inputStyle={"outlined"}
                />
                <Main>
                    <StoreCard 
                        background="linear-gradient(to right, #e6963f, #af680a)"
                        backgroundHover="linear-gradient(to right, #af680a, #e6963f)"
                        name="Fire Store"
                        color="#FFFFFF"
                        onClick={goToFireStore}
                    />
                    <StoreCard 
                        background="linear-gradient(to right, #3fbee5, #008eb3)"
                        backgroundHover="linear-gradient(to right, #008eb3, #3fbee5)"
                        name="Water Store"
                        color="#FFFFFF"
                        onClick={goToWaterStore}
                    />
                                        <StoreCard 
                        background="linear-gradient(to right, #5f3cc6, #230f94)"
                        backgroundHover="linear-gradient(to right, #230f94, #5f3cc6)"
                        name="Ghost Store"
                        color="#FFFFFF"
                    />
                    <StoreCard 
                        background="linear-gradient(to right, #969696, #686868)"
                        backgroundHover="linear-gradient(to right, #686868, #969696)"
                        name="Steel Store"
                        color="#FFFFFF"
                    />
                    {/* <button onClick={goToFireStore}>Fire Store</button>
                    <button onClick={goToWaterStore}>Water Store</button> */}
                </Main>
                <Footer gradient={ "linear-gradient(to right, #e6963f, #3fbee5, #5f3cc6, #969696, #969696, #5f3cc6, #3fbee5, #e6963f)" } textColor={"#FFFFFF"}/>
            </StoreComponent>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    goToFireStore: () => dispatch(push(routes.fireStore)), 
    goToWaterStore: () => dispatch(push(routes.waterStore))
})

export default connect(
    null,
    mapDispatchToProps
) (PokeStore);