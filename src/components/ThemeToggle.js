import React from 'react';
import { useTheme } from '../ThemeContext';

function ThemeToggle() {
    const { isDarkMode, toggleTheme } = useTheme();

    const buttonStyle = {
        position: 'fixed',
        top: '90px',
        right: '20px',
        zIndex: 1000,
        background: 'linear-gradient(135deg, #f39c12, #e74c3c)',
        border: 'none',
        borderRadius: '50px',
        padding: '5px',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(243, 156, 18, 0.3)',
        animation: 'bounce 2s ease-in-out infinite',
        border: '2px solid rgba(255, 255, 255, 0.2)'
    };

    const circleStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: isDarkMode ? '#2d2d2d' : '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        color: isDarkMode ? '#f39c12' : '#e67e22'
    };

    // Add keyframes to document
    React.useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
            }
        `;
        document.head.appendChild(style);
        return () => style.remove();
    }, []);

    return (
        <button 
            style={buttonStyle} 
            onClick={toggleTheme}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(243, 156, 18, 0.5)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(243, 156, 18, 0.3)';
            }}
        >
            <div 
                style={circleStyle}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(180deg)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
            >
                {isDarkMode ? '🌙' : '☀️'}
            </div>
        </button>
    );
}

export default ThemeToggle;