import styled from 'styled-components';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export const StyledNavigateBeforeIcon = styled(NavigateBeforeIcon)`
    height: 100%;
    width: 100%;
`

export const StyledNavigateNextIcon = styled(NavigateNextIcon)`
    height: 100%;
    width: 100%;
`

export const PaginationComponent = styled.div `
    width: 150px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
`

export const PreviousPageButton = styled.button `
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12.5px;
    padding: 0;
    outline: none;
    border: none;
    box-shadow: 1px 1px 3px;
    position: absolute;
    top: 27px;
    left: 10px;
    transition: all 0.2s;
    :hover{
        cursor: pointer;
        background-color: #dfe1e5;
        transform: scale(1.1);
    }
`

export const NextPageButton = styled.button `
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12.5px;
    padding: 0;
    outline: none;
    border: none;
    box-shadow: 1px 1px 3px;
    position: absolute;
    top: 27px;
    right: 10px;
    transition: all 0.2s;
    :hover{
        cursor: pointer;
        background-color: #dfe1e5;
        transform: scale(1.1);
    }
`

export const PageComponent = styled.div `
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    box-shadow: 2px 2px 4px;
    position: relative;
`

export const PageComponentTop = styled.div `
    width: 100%;
    height: 50%;
    border-radius: 30px 30px 0 0;
    background-color: ${props => props.color};
`
export const PageComponentBottom = styled.div `
    width: 100%;
    height: 50%;
    border-radius: 0 0 30px 30px;
    background-color: white;
`

export const PageComponentCenter = styled.div `
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    position: absolute;
    background-color: #ffffff;
    border: 3px solid #111111;
    box-shadow: 1px 1px 3px #111111;
`