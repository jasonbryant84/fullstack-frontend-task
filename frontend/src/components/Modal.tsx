import { useContext } from 'react';
import styled from 'styled-components';

import { ShapeContext } from '../utils/context';
import Form from '../components/Form';
import Button from '../components/Button';

const handleClick = (event: any) => {
    // Stop bubble up
    event.stopPropagation();
}

export default function Modal() {
    const { handleShowModal } = useContext(ShapeContext);

    return (
        <StyledModal onClick={(e) => handleClick(e)}>
            <div id='modalHeader' className='flex px-[48px] h-[104px]'>
                <h2 className='mt-[40px]'>Create a shape</h2>
            </div>
            <div className='px-[48px] pt-[24px]'>
                <Form />
                <Button handleClick={() => handleShowModal(false)} isCloseBtn />
            </div>
        </StyledModal>
    )
}

const StyledModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    width: 562px;
    height: 522px;
    border-radius: 8px;
    border: 1px solid var(--outline-grey-light, #F1F2F4);
    background: var(--solid-white, #FFF);
    box-shadow: 0px 16px 24px 0px rgba(10, 31, 68, 0.08);

    #modalHeader {
        border-bottom : 1px solid var(--outline-grey-light, #F1F2F4);

        h2 {
            font-family: 'Matter Medium';
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            line-height: 40px;
            color: #0A1F44;
            
        }
    }

    & input {
        display: flex;
        width: 464px;
        height: 48px;
        padding: 12px 16px;
        justify-content: center;
        align-items: center;
    }
`;