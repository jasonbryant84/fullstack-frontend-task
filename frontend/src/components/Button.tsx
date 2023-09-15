import styled, { StyleSheetManager } from 'styled-components';

interface StyledButtonProps {
    isFormSubmit?: boolean;
    isCloseBtn?: boolean;
}

interface ButtonProps {
    label?: string;
    handleClick: Function;
    isFormSubmit?: boolean;
    isCloseBtn?: boolean;
}

const handleButtonClick = (handleClick: Function) => {
    handleClick()
}

export default function Button({ label, handleClick, isFormSubmit, isCloseBtn }: ButtonProps) {
    return (
        <StyleSheetManager
            shouldForwardProp={
                (prop) => prop !== 'isFormSubmit' && prop !== 'isCloseBtn'
            }
        >
            <StyledButton
                onClick={() => handleButtonClick(handleClick)}
                isFormSubmit={isFormSubmit}
                isCloseBtn={isCloseBtn}
            >
                {label}    
                {isCloseBtn && <img src='./svgs/Cross.svg' alt="My SVG" />}
            </StyledButton>
        </StyleSheetManager>
    )
}

const StyledButton = styled.div<StyledButtonProps>`
    position: ${(props) => (props.isCloseBtn ? 'absolute' : 'relative')};
    top: ${(props) => (props.isCloseBtn ? '16px' : 'auto')};
    right: ${(props) => (props.isCloseBtn ? '16px' : 'auto')};
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: ${(props) => (props.isCloseBtn ? '40px' : '48px')};
    width: ${(props) => (props.isCloseBtn ? '40px' : '100%')};
    border-radius: 24px;
    background: ${(props) => (
        props.isFormSubmit ? '#0948EA' : props.isCloseBtn ? '#F1F2F4': '#EB5757'
    )};
    color: white;

    font-family: 'Matter Medium';
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;

    &:hover {
        cursor: pointer;
    }
`;