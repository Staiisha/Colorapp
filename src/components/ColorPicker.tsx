import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import chroma from 'chroma-js';
import './style/style.scss';

interface ColorPickerProps {
    onColorChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onColorChange }) => {
    const [color, setColor] = useState('#3498db');
    const [palette, setPalette] = useState<string[]>([]);

    const handleChange = (newColor: any) => {
        setColor(newColor.hex);
        onColorChange(newColor.hex);
    };


    useEffect(() => {
        const colors = chroma.scale([color, '#fff']) 
            .mode('lab') 
            .colors(5); 

        setPalette(colors);
    }, [color]);

    return (
        <div className="color-picker">
            <SketchPicker color={color} onChange={handleChange} />

       
            <div className="palette">
                <h3>Гармоничные оттенки:</h3>
                <div className="shades">
                    {palette.map((shade, index) => (
                        <div
                            key={index}
                            className="shade"
                            style={{ backgroundColor: shade }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ColorPicker;