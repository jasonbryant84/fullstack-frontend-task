"use client";

import ShapeContextProvider from '../utils/context';
import Canvas from '../components/Canvas';

const Home = () => {
    return (
        <main>
            <ShapeContextProvider>
                <Canvas />
            </ShapeContextProvider>
        </main>
    )
}

export default Home