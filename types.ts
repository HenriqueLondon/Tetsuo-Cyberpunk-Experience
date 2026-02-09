// Define the structure of a chat message for the Gemini terminal
export interface ChatMessage {
    id: string;
    role: 'user' | 'model';
    text: string;
    timestamp: Date;
    isError?: boolean;
}

// Props for the GlitchText component
export interface GlitchTextProps {
    text: string;
    as?: 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'div';
    className?: string;
}

// Props for the Navigation component
export interface NavItem {
    label: string;
    href: string;
    isActive?: boolean;
}

// Props for Portfolio Items
export interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
    size: 'small' | 'large' | 'tall' | 'wide';
}
