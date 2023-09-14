import { ReactNode, createContext, useState } from "react";

import { MouseCoordsProps } from "./interfaces";

/* Context Setup */
interface ContextType {
  rectangles: any[];
  updateRectangles: Function;
  showModal: boolean;
  handleShowModal: Function;
}

export const ShapeContext = createContext<ContextType>({
  rectangles: [
      {
          name: 'Shape 1',
          dimensions: { top: 10, left: 10, height: 352, width: 360 }
      }, {
          name: 'Shape 2',
          dimensions: { top: 100, left: 200, height: 352, width: 300 }
      }, {
          name: 'Shape 3',
          dimensions: { top: 600, left: 600, height: 40, width: 90 }
      }
  ],
  updateRectangles: () => {},
  showModal: true,
  handleShowModal: () => {}
});

/* General Interfaces */
export interface StyledDivProps {
    [key: string]: number | null;
    height: number | null;
    width: number | null;
    top: number | null;
    left: number | null;
}

export interface RectangleDimensionsProps {
    name: string;
    dimensions: StyledDivProps;
    setMouseCoords?: Function;
}


/* Context Provider */
interface ShapeContextProviderProps {
  children?: ReactNode;
}

const ShapeContextProvider = ({
  children
}: ShapeContextProviderProps) => {
    const [rectangles, setRectangles] = useState<RectangleDimensionsProps[]>([]);
    const updateRectangles = (newRectangle: RectangleDimensionsProps) => {
        setRectangles((prevRectangles) => [...prevRectangles, newRectangle]);
        setShowModal(false);
    }

    const [showModal, setShowModal] = useState<boolean>(false);
    const handleShowModal = (value: boolean) => {
        setShowModal(value);
    }


  return (
    <ShapeContext.Provider
      value={{
        rectangles,
        updateRectangles,
        showModal,
        handleShowModal,
      }}
    >
      {children}
    </ShapeContext.Provider>
  );
};

export default ShapeContextProvider;
