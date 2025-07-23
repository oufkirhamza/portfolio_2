import React from 'react';
import { 
    SiReact, 
    SiJavascript, 
    SiTypescript, 
    SiNodedotjs, 
    SiLaravel, 
    SiPhp, 
    SiMysql, 
    SiTailwindcss, 
    SiBootstrap,
    SiGithub,
    SiGit,
    SiExpo,
    SiReactrouter,
    SiChartdotjs,
    SiJquery,
    SiCss3,
    SiHtml5,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiDocker,
    SiAwsfargate,
    SiVercel,
    SiNetlify,
    SiFigma,
    SiAdobephotoshop,
    SiVisualstudiocode,
    SiPostman
} from 'react-icons/si';

const techIcons = {
    'React.js': SiReact,
    'React': SiReact,
    'JavaScript': SiJavascript,
    'TypeScript': SiTypescript,
    'Node.js': SiNodedotjs,
    'Laravel': SiLaravel,
    'PHP': SiPhp,
    'MySQL': SiMysql,
    'Tailwind CSS': SiTailwindcss,
    'Bootstrap': SiBootstrap,
    'GitHub': SiGithub,
    'Git': SiGit,
    'Expo React Native': SiExpo,
    'React Navigation': SiReactrouter,
    'Chart.js': SiChartdotjs,
    'jQuery': SiJquery,
    'CSS3': SiCss3,
    'HTML5': SiHtml5,
    'PostgreSQL': SiPostgresql,
    'MongoDB': SiMongodb,
    'Redis': SiRedis,
    'Docker': SiDocker,
    'AWS': SiAwsfargate,
    'Vercel': SiVercel,
    'Netlify': SiNetlify,
    'Figma': SiFigma,
    'Photoshop': SiAdobephotoshop,
    'VS Code': SiVisualstudiocode,
    'Postman': SiPostman,
    'JWT Authentication': SiNodedotjs,
    'RESTful API': SiNodedotjs,
    'AsyncStorage': SiReact,
    'Expo Location': SiExpo,
    'GitHub API': SiGithub
};

const techColors = {
    'React.js': 'text-blue-400',
    'React': 'text-blue-400',
    'JavaScript': 'text-yellow-400',
    'TypeScript': 'text-blue-500',
    'Node.js': 'text-green-400',
    'Laravel': 'text-red-500',
    'PHP': 'text-purple-400',
    'MySQL': 'text-blue-600',
    'Tailwind CSS': 'text-cyan-400',
    'Bootstrap': 'text-purple-500',
    'GitHub': 'text-gray-400',
    'Git': 'text-orange-500',
    'Expo React Native': 'text-blue-600',
    'React Navigation': 'text-blue-400',
    'Chart.js': 'text-pink-400',
    'jQuery': 'text-blue-500',
    'CSS3': 'text-blue-400',
    'HTML5': 'text-orange-500',
    'PostgreSQL': 'text-blue-700',
    'MongoDB': 'text-green-500',
    'Redis': 'text-red-600',
    'Docker': 'text-blue-500',
    'AWS': 'text-orange-400',
    'Vercel': 'text-gray-300',
    'Netlify': 'text-teal-400',
    'Figma': 'text-purple-400',
    'Photoshop': 'text-blue-600',
    'VS Code': 'text-blue-500',
    'Postman': 'text-orange-500',
    'JWT Authentication': 'text-green-400',
    'RESTful API': 'text-green-400',
    'AsyncStorage': 'text-blue-400',
    'Expo Location': 'text-blue-600',
    'GitHub API': 'text-gray-400'
};

const TechStack = ({ technologies, layout = 'grid', showIcons = true, showLabels = true }) => {
    if (layout === 'inline') {
        return (
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => {
                    const IconComponent = techIcons[tech];
                    const colorClass = techColors[tech] || 'text-gray-400';
                    
                    return (
                        <div 
                            key={index}
                            className="flex items-center gap-2 px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700/50 hover:border-gray-600 transition-colors"
                        >
                            {showIcons && IconComponent && (
                                <IconComponent className={`${colorClass} text-sm`} />
                            )}
                            {showLabels && (
                                <span className="text-gray-300 text-sm font-medium">{tech}</span>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {technologies.map((tech, index) => {
                const IconComponent = techIcons[tech];
                const colorClass = techColors[tech] || 'text-gray-400';
                
                return (
                    <div 
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700/50 hover:border-gray-600 transition-all hover:scale-105 group"
                    >
                        {showIcons && IconComponent && (
                            <IconComponent 
                                className={`${colorClass} text-xl group-hover:scale-110 transition-transform`} 
                            />
                        )}
                        {showLabels && (
                            <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                                {tech}
                            </span>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default TechStack;
