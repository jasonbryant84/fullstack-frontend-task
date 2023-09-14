import { useContext } from 'react';
import styled from 'styled-components';

import { ShapeContext } from '../utils/context';
import { MouseCoordsProps } from '../utils/interfaces';
import Button from '../components/Button';

interface CreateWidgetProps {
    mouseCoords: MouseCoordsProps;
}

export default function CreateWidget({ mouseCoords }: CreateWidgetProps) {
    const { name, x, y } = mouseCoords;
    const { handleShowModal } = useContext(ShapeContext);

    return (
        <StyledDiv>
            <div className="title flex justify-center items-center h-[80px]">
                Details
            </div>

            <div className="shapeName flex justify-center items-center h-[48px]">
                {name || '--'}
            </div>

            <div className="mouseX flex justify-center items-center h-[48px]">
                Mouse X - {x}
            </div>

            <div className="mouseY flex justify-center items-center h-[48px]">
                Mouse Y - {y}
            </div>

            <div className="btn flex justify-center items-center h-[113px] px-[32px]">
                <Button 
                    label="+ Add a Shape"
                    handleClick={() => handleShowModal(true)}
                />
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    position: absolute;
    right: 30px;
    bottom: 30px;
    border-radius: 10px;
    height: 336px;
    width: 224px;
    font-family: 'Matter Regular';

    fill: var(--solid-white, #FFF);
    border: 1px solid #F1F2F4;
    box-shadow: 0px 16px 24px rgba(10, 31, 68, 0.08);

    & > div:not(:last-child) {
        color: #4E5D78;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        border-bottom: 1px solid #F1F2F4;
    }

    & > div:first-child {
        color: #0948EA;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px; 
        font-family: 'Matter Medium';
    }
`;