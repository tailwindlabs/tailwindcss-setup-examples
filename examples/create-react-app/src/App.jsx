import React, { useState } from 'react';
import classed from 'classed-components';

const useToogle = (defaultValue = false) => {
    const [bool, setBool] = useState(defaultValue);

    return [bool, () => setBool(oldValue => !oldValue)]
}

const Wrapper = classed.div([
    'min-h-screen flex items-center justify-center',
    ({ hasBackground }) => ({ 'bg-purple-500': hasBackground })
])

const H1 = classed.h1(({ hasBackground }) => [
    'text-5xl font-bold',
    hasBackground ? 'text-white' : 'text-purple-500',
])

const Button = classed.button(({ hasBackground }) => {
    const hoverColor = hasBackground ? 'purple-500' : 'white'
    const color = hasBackground ? 'white' : 'purple-500'

    return [
        'text-sm px-4 py-2 leading-none border rounded',
        `text-${color}`,
        `border-${color}`,
        'hover:border-transparent',
        `hover:text-${hoverColor}`,
        `hover:bg-${color}`,
    ]
})

const App = () => {
    const [backgroundEnabled, toogleBackground] = useToogle();

    return (
        <Wrapper hasBackground={backgroundEnabled}>
            <div>
                <H1 hasBackground={backgroundEnabled}>Hello from Tailwind.</H1>
                <Button onClick={toogleBackground} hasBackground={backgroundEnabled}>Toogle!</Button>
            </div>
        </Wrapper>
    );
}

export default App;
