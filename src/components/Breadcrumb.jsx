import React from 'react';
import { MdChevronRight, MdHome } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
    const navigate = useNavigate();

    const handleClick = (item) => {
        if (item.onClick) {
            item.onClick();
        } else if (item.href) {
            if (item.href.startsWith('#')) {
                const element = document.querySelector(item.href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                navigate(item.href);
            }
        }
    };

    return (
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {index > 0 && (
                        <MdChevronRight className="text-gray-500" size={16} />
                    )}
                    <button
                        onClick={() => handleClick(item)}
                        className={`flex items-center gap-1 hover:text-white transition-colors ${
                            index === items.length - 1 
                                ? 'text-white font-medium cursor-default' 
                                : 'hover:text-blue-400'
                        }`}
                        disabled={index === items.length - 1}
                    >
                        {item.icon && <item.icon size={16} />}
                        {item.label}
                    </button>
                </React.Fragment>
            ))}
        </nav>
    );
};

export default Breadcrumb;
