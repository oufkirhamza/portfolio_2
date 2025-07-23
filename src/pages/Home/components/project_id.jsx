import React, { useContext, useState, useEffect } from 'react';
import { MyContext } from "../../../utils/contextProvider";
import { useParams, useNavigate } from 'react-router-dom';
import { MdArrowBack, MdLaunch, MdCode, MdCalendarToday, MdPerson, MdCategory } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechStack from "../../../components/TechStack";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectDetails = () => {
    const { projects } = useContext(MyContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const project = projects.find((project) => project.id === id);
    const currentIndex = projects.findIndex((project) => project.id === id);
    const nextProject = projects[currentIndex + 1] || projects[0];
    const prevProject = projects[currentIndex - 1] || projects[projects.length - 1];

    useEffect(() => {
        window.scrollTo(0, 0);
        if (project) {
            setSelectedImage(0);
        }
    }, [project]);

    useGSAP(() => {
        if (project) {
            gsap.fromTo(".project-header",
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
            );

            gsap.fromTo(".project-content",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
            );

            gsap.fromTo(".tech-item",
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.6, delay: 0.4, stagger: 0.1, ease: "back.out(1.7)" }
            );
        }
    }, [project]);

    if (!project) {
        return (
            <div className="min-h-screen bg-[#060a21] text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    const openLightbox = (index) => {
        setSelectedImage(index);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setSelectedImage((prev) => (prev - 1 + project.images.length) % project.images.length);
    };
    // scroll to top when entring the page 
    return (
        <div className="min-h-screen bg-[#060a21] text-white">
            {/* Header Section */}
            <div className="project-header relative pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb */}
                    {/* <Breadcrumb
                        items={[
                            { label: 'Home', href: '/', icon: null },
                            { label: 'Projects', href: '/#projects' },
                            { label: project.title }
                        ]}
                    /> */}

                    {/* Navigation */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors w-fit"
                        >
                            <MdArrowBack size={20} />
                            <span>Back to Projects</span>
                        </button>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                            <button
                                onClick={() => navigate(`/project/${prevProject.id}`)}
                                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm"
                            >
                                ← Previous Project
                            </button>
                            <button
                                onClick={() => navigate(`/project/${nextProject.id}`)}
                                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm"
                            >
                                Next Project →
                            </button>
                        </div>
                    </div>

                    {/* Project Title and Info */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div>
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-4">
                                    {project.category}
                                </span>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{project.title}</h1>
                                <p className="text-xl text-gray-300 mb-6">{project.subtitle}</p>
                            </div>

                            {/* Project Meta Info */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-2 text-gray-300">
                                    <MdCalendarToday className="text-blue-400" />
                                    <span className="text-sm">Year: {project.year}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <MdPerson className="text-blue-400" />
                                    <span className="text-sm">Role: {project.role}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <MdCategory className="text-blue-400" />
                                    <span className="text-sm">Timeline: {project.timeline}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                    <span className="text-sm">Status: {project.status}</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium"
                                    >
                                        <MdLaunch size={20} />
                                        View Live
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors font-medium"
                                    >
                                        <FaGithub size={20} />
                                        View Code
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Main Project Image */}
                        <div className="relative">
                            <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
                                <img
                                    src={project.images[selectedImage]}
                                    alt={project.title}
                                    className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openLightbox(selectedImage)}
                                />
                            </div>

                            {/* Image Thumbnails */}
                            {project.images.length > 1 && (
                                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                                    {project.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                                                selectedImage === index
                                                    ? 'border-blue-400 scale-105'
                                                    : 'border-gray-600 hover:border-gray-400'
                                            }`}
                                        >
                                            <img
                                                src={image}
                                                alt={`${project.title} ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="project-content px-4 sm:px-6 lg:px-8 pb-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Description */}
                            <section>
                                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                                    <p className="text-gray-300 leading-relaxed">{project.detailedDescription}</p>
                                </div>
                            </section>

                            {/* Features */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {project.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700/50"
                                        >
                                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Challenges */}
                            {/* <section>
                                <h2 className="text-2xl font-bold mb-6">Challenges & Solutions</h2>
                                <div className="space-y-4">
                                    {project.challenges.map((challenge, index) => (
                                        <div
                                            key={index}
                                            className="p-4 bg-gradient-to-r from-orange-900/20 to-red-900/20 border-l-4 border-orange-400 rounded-r-lg"
                                        >
                                            <p className="text-gray-300">{challenge}</p>
                                        </div>
                                    ))}
                                </div>
                            </section> */}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Technologies */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
                                <TechStack
                                    technologies={project.technologies}
                                    layout="grid"
                                    showIcons={true}
                                    showLabels={true}
                                />
                            </section>

                            {/* Project Navigation */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6">Other Projects</h2>
                                <div className="space-y-4">
                                    <button
                                        onClick={() => navigate(`/project/${prevProject.id}`)}
                                        className="w-full p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 hover:border-gray-600 transition-all group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={prevProject.images[0]}
                                                alt={prevProject.title}
                                                className="w-12 h-12 rounded-lg object-cover"
                                            />
                                            <div className="text-left">
                                                <p className="text-sm text-gray-400">Previous</p>
                                                <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                                                    {prevProject.title}
                                                </p>
                                            </div>
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => navigate(`/project/${nextProject.id}`)}
                                        className="w-full p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 hover:border-gray-600 transition-all group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={nextProject.images[0]}
                                                alt={nextProject.title}
                                                className="w-12 h-12 rounded-lg object-cover"
                                            />
                                            <div className="text-left">
                                                <p className="text-sm text-gray-400">Next</p>
                                                <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                                                    {nextProject.title}
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {isLightboxOpen && (
                <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4">
                        <button
                            onClick={closeLightbox}
                            className="absolute  top-4 right-4 z-[999999] w-12 aspect-square bg-black/50  hover:bg-black/70 text-4xl rounded-full flex items-center justify-center text-white transition-colors"
                        >
                            ×
                        </button>
                    <div className="relative max-w-6xl max-h-[full] overflow-y-auto">
                        <img
                            src={project.images[selectedImage]}
                            alt={`${project.title} ${selectedImage + 1}`}
                            className="max-w- object-center rounded-lg"
                        />
                        {project.images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                                >
                                    ←
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                                >
                                    →
                                </button>
                            </>
                        )}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {project.images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${
                                        selectedImage === index ? 'bg-white' : 'bg-white/50'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;