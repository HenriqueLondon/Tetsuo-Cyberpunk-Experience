import React from 'react';
import { GlitchTextProps } from '../types';

/**
 * GlitchText Component
 * Wraps text in a container that applies the CSS-based glitch effect defined in index.html.
 * Uses the data-text attribute to create the pseudo-element layers.
 */
const GlitchText: React.FC<GlitchTextProps> = ({ text, as: Tag = 'span', className = '' }) => {
    return (
        <Tag 
            className={`glitch-wrapper relative inline-block ${className}`} 
            data-text={text}
        >
            <span className="relative z-10">{text}</span>
        </Tag>
    );
};

export default GlitchText;
