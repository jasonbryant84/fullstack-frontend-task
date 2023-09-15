import { useContext, useState, useRef } from 'react';
import styled from 'styled-components';


import { ShapeContext } from '../utils/context';
import { RectangleDimensionsProps } from '../utils/interfaces';
import Button from '../components/Button';

interface StyleFormProps {
    ref: React.MutableRefObject<HTMLInputElement>;
}

export default function Form() {
    const { updateRectangles } = useContext(ShapeContext);
    const formRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [error, setError] = useState<string | null>(null);

    const handleFormSubmission = () => {
        let validSubmission: boolean = false;
        const form = formRef?.current;
        const inputs = form.querySelectorAll('input');
        const formData: RectangleDimensionsProps = {
            name: '',
            dimensions: { top: null, left: null, height: null, width: null}
        };

        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            const name: string = input.name;
            const value = input.value;

            if (!value.length) {
                setError('All fields are required')
                break
            }

            if (name === 'name') {
                formData.name = value;
            } else {
                if (parseFloat(value) < 0 || isNaN(parseFloat(value))) {
                    setError(`${input.getAttribute('data-name')} is not a valid integer`)
                    break
                }

                formData.dimensions[name] = parseInt(value);
            }

            // If we've made it to the end of the loop withotu breaking we have valid inputs
            validSubmission = i === inputs.length - 1
        }

        if (validSubmission) {
            updateRectangles(formData)
            setError('')
        }
    }

    return (
        <StyledForm ref={formRef}>
            <div className='flex flex-col field-container w-full  mb-[16px]'>
                <span>Name of Shape</span>
                <input name='name' data-name='Name shape' placeholder='Enter shape name'></input>
            </div>
            
            <div className='flex flex-row justify-between field-container w-full  mb-[16px]'>
                <div className='half flex flex-col'>
                    <span>Height</span>
                    <input name='height' data-name='Height' placeholder='Enter height'></input>
                </div>
                <div className='half flex flex-col'>
                    <span>Width</span>
                    <input name='width' data-name='Width'placeholder='Enter width'></input>
                </div>
            </div>
            
            <div className='flex flex-row justify-between field-container w-full mb-[40px]'>
                <div className='half flex flex-col'>
                    <span>X position</span>
                    <input name='left' data-name='X position' placeholder='Enter X value'></input>
                </div>
                <div className='half flex flex-col'>
                    <span>Y position</span>
                    <input name='top' data-name='Y position' placeholder='Enter Y value'></input>
                </div>
            </div>

            <div className='relative'>
                <Button 
                    label='Create New Shape'
                    handleClick={() => handleFormSubmission()}
                    isFormSubmit={true}
                />
                {error && <span id='error'>{error}</span>}
            </div>
        </StyledForm>
    )
}

const StyledForm = styled.form<StyleFormProps>`
    .field-container {
        span {
            color: #4E5D78;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px; 
        }

        input {
            color: #4E5D78;
            width: 100%;

            display: flex;
            height: 50px;
            padding: 12px 16px;
            justify-content: center;
            align-items: center;

            border-radius: 6px;
            border: 1px solid #F1F2F4;
            background: #F7F8F9;
            box-shadow: 0px 2px 2px 0px rgba(10, 31, 68, 0.12) inset;

            &::placeholder {
                font-family: 'Matter Regular', sans-serif;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 24px;
                color: #B0B7C3;
            }
        }

        .half {
            width: calc(50% - 8px);
        }
    }

    #error {
        position: absolute;
        color: #EB5757;
        margin: 10px;
    }
`;