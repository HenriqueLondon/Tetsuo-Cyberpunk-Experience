import React from 'react';

const RadarChart: React.FC = () => {
    // Configuration for the radar chart
    const size = 300;
    const center = size / 2;
    const radius = 100;
    
    // Labels matching the reference image
    const axes = [
        { label: "3DS", angle: -90, value: 0.8 },
        { label: "AP", angle: -18, value: 0.6 },
        { label: "AE", angle: 54, value: 0.9 },
        { label: "PS", angle: 126, value: 0.7 },
        { label: "AI", angle: 198, value: 0.85 }
    ];

    // Helper to calculate coordinates
    const getPoint = (angle: number, value: number) => {
        const rad = (angle * Math.PI) / 180;
        const x = center + radius * value * Math.cos(rad);
        const y = center + radius * value * Math.sin(rad);
        return `${x},${y}`;
    };

    // Generate path for the data shape
    const dataPath = axes.map(axis => getPoint(axis.angle, axis.value)).join(' ');

    // Generate grid lines (concentric pentagons)
    const levels = [0.25, 0.5, 0.75, 1];

    return (
        <div className="relative flex justify-center items-center">
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
                {/* Grid Lines */}
                {levels.map((level, i) => (
                    <polygon
                        key={i}
                        points={axes.map(axis => getPoint(axis.angle, level)).join(' ')}
                        fill="none"
                        stroke="#333"
                        strokeWidth="1"
                    />
                ))}

                {/* Axis Lines */}
                {axes.map((axis, i) => {
                    const end = getPoint(axis.angle, 1);
                    return (
                        <line
                            key={i}
                            x1={center}
                            y1={center}
                            x2={end.split(',')[0]}
                            y2={end.split(',')[1]}
                            stroke="#333"
                            strokeWidth="1"
                        />
                    );
                })}

                {/* Data Shape */}
                <polygon
                    points={dataPath}
                    fill="rgba(200, 60, 0, 0.5)" // Burnt orange color
                    stroke="#e64a19"
                    strokeWidth="2"
                    className="drop-shadow-[0_0_10px_rgba(230,74,25,0.5)]"
                />

                {/* Labels */}
                {axes.map((axis, i) => {
                    // Push labels out a bit further than radius 1
                    const labelPoint = getPoint(axis.angle, 1.25); 
                    const [x, y] = labelPoint.split(',').map(Number);
                    return (
                        <text
                            key={i}
                            x={x}
                            y={y}
                            fill="#888"
                            fontSize="12"
                            fontFamily="monospace"
                            textAnchor="middle"
                            alignmentBaseline="middle"
                        >
                            {axis.label}
                        </text>
                    );
                })}
            </svg>
        </div>
    );
};

export default RadarChart;