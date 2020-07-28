import React from "react";
import { Loading, Triangle, LoadingContainer } from "./styled";

function Loader ( ) {
    return (
        <LoadingContainer>   
            <svg width="150" height="150" viewBox="0 0 40 60">
                <Triangle 
                    fill="none" 
                    stroke="black" 
                    stroke-width="1"
                    points="16,1 32,32 1,32"
                />
                <Loading x="4" y="45" fill="black">Loading</Loading>
            </svg>
        </LoadingContainer>
    )
}

export default Loader;