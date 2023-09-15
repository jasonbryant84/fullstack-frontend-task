import { MouseEvent, useEffect, useRef, useState } from 'react';

import styled, { StyleSheetManager } from 'styled-components';

interface StyledDivProps {
    height: number;
    width: number;
    top: number;
    left: number;
}

export interface RectangleDimensionsProps {
    name: string;
    dimensions: StyledDivProps;
    setMouseCoords?: Function;
}

const handleOnMouseMove = (event: MouseEvent, name: string, setMouseCoords: Function | undefined, rectangleRef: any) => {
    if(setMouseCoords) {
        const rect = rectangleRef?.current?.getBoundingClientRect();
        if (rect) {
            const x = event.clientX - rect.left;
            const y = rect.bottom - event.clientY;

            setMouseCoords({ name, x, y })
        }
    }
}

const handleOnMouseLeave = (setMouseCoords: Function | undefined) => {
    if(setMouseCoords) {
        setMouseCoords({
            name: null,
            x: null,
            y: null
        })
    }
}

export default function Rectangle({ name, dimensions, setMouseCoords } : RectangleDimensionsProps) {
    const rectangleRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const [divStyles, setDivStyles] = useState({
        height: 0,
        width: 0,
        top: 0,
        left: 0,
    });

    useEffect(() => {
        setDivStyles({
            ...dimensions
        });
    }, []);
    
    if (!dimensions) return null
    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'top'}>
            <StyledDiv
                ref={rectangleRef}
                className='bg-blue'
                {...divStyles}
                onMouseMove={(e) => handleOnMouseMove(e, name, setMouseCoords, rectangleRef)}
                onMouseLeave={() => handleOnMouseLeave(setMouseCoords)}
            />
        </StyleSheetManager>
    )
}

const StyledDiv = styled.div<StyledDivProps>`
    display: flex;
    height: ${(props) => `${props.height}px` || 'auto'};
    width: ${(props) => `${props.width}px` || 'auto'};
    top: ${(props) => `${props.top}px` || 'auto'};
    left: ${(props) => `${props.left}px` || 'auto'};
    position: absolute;

    &:hover {
        border: 1px solid #0948EA;
    }
`;