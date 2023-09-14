/* General Interfaces */
export interface MouseCoordsProps {
    name: string | null;
    x: number | null;
    y: number | null;
}

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