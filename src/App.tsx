import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';

const App: React.FC = () => {
    const [selectedColor, setSelectedColor] = useState('#3498db');

    return (
        <div className="app">
            <h1>Генератор цветовых палитр</h1>
            <ColorPicker onColorChange={setSelectedColor} />
            <p className="selected-color">Выбранный цвет: <span style={{ color: selectedColor }}>{selectedColor}</span></p>
        </div>
    );
};

export default App;