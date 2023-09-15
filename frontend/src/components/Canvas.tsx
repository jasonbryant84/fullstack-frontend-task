import { useContext, useState } from 'react';

import { ShapeContext } from '../utils/context';
import { MouseCoordsProps } from '../utils/interfaces';
import Modal from '../components/Modal';
import Rectangle from '../components/Rectangle';
import CreateWidget from '../components/CreateWidget';

const handleWidgetClick = (event: any) => {
    // Stop bubble up
    event.stopPropagation();
}

const handleCanvasClick = (showModal: boolean, handleShowModal: Function) => {
    const temp = !showModal;
    handleShowModal(temp);
}

const Canvas = () => {
    const { rectangles, showModal, handleShowModal } = useContext(ShapeContext);

    // Going with Prop drill over context management (only one layer down)
    // and used only in one place unlike modal hide/show logic and 
    // rectangle management
    const [mouseCoords, setMouseCoords] = useState<MouseCoordsProps>({
        name: null,
        x: null,
        y: null,
    });
    
    return (
        <div
            className="portugal w-screen h-screen"
            onClick={() => handleCanvasClick(showModal, handleShowModal)}
        >
            {rectangles?.map((rectangle, key) => {
                return <Rectangle
                    key={key}
                    name={rectangle.name}
                    dimensions={rectangle.dimensions}
                    setMouseCoords={setMouseCoords}
                />
            })}

            <CreateWidget
                mouseCoords={mouseCoords}
                onClick={handleWidgetClick}
            />

            {showModal && <Modal />}
        </div>
    )
}

export default Canvas