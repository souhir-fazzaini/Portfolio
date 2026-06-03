import React, { useState } from 'react';
import './works.css';

import Image3 from '../../assets/CSFAG/capture.png';
import Image4 from '../../assets/CSFAG/Screenshot 2024-08-12 000505.png';
import csfag3 from '../../assets/CSFAG/Screenshot 2024-08-12 000601.png';
import csfag4 from '../../assets/CSFAG/Screenshot 2024-08-12 000519.png';
import csfag5 from '../../assets/CSFAG/Screenshot 2024-08-12 180418.png';
import Image5 from '../../assets/Arru/login.png';
import Image6 from '../../assets/Arru/capture6Priph2.png';
import Arru3 from '../../assets/Arru/capture8Priph2.png';
import Arru4 from '../../assets/Arru/capture7Priph2.png';
import Arru5 from '../../assets/Arru/capture13priph2.png';
import Arru6 from '../../assets/Arru/capture15pr8ph2.png' ;
import Emanagement1 from '../../assets/employee management/capture1.png';
import Emanagement2 from '../../assets/employee management/capture2.png';
import Emanagement3 from '../../assets/employee management/capture3.png';
import addexpense from '../../assets/exepense/add_expense.png';
import expense from '../../assets/exepense/expenses.png';
import chat1 from '../../assets/ia/chat1.png';
import chat2 from '../../assets/ia/chat2.png';
import chat3 from '../../assets/ia/chat3.png';
import chat4 from '../../assets/ia/chat4.png';
import smartService from '../../assets/SmartService/smartService.png';
import smartService1 from '../../assets/SmartService/smartService1.png';
import smartService3 from '../../assets/SmartService/smartService3.png';
import login from '../../assets/Blog_symfony/login.png';
import page1 from '../../assets/Blog_symfony/page1.png';
import page2 from '../../assets/Blog_symfony/page2.png';
import page3 from '../../assets/Blog_symfony/page3.png';

import {FaGithub, FaImages, FaVideo} from "react-icons/fa"; // Import GitHub icon

const Works = () => {
    const projects = [

        {
            images: [Image3, Image4, csfag3, csfag4, csfag5], // Images of the second project
            description: "Training Management:",
            additionalDescription: "This project focuses on managing training sessions efficiently, allowing users to schedule, track attendance, and generate certificates for participants. The application enhances operational efficiency and provides a user-friendly interface.",
            videoLink: "https://drive.google.com/file/d/1JQwJ_PReqEmzXtlgJXFDc6PrWLKyPCyk/view?usp=sharing" // Replace with your video link
        },

        {
            images: [Image5, Image6, Arru3, Arru4, Arru5, Arru6], // Images of the third project
            description: "Priphiq2",
            additionalDescription: "Integrated geolocation services for managing and visualizing projects, improving tracking accuracy and enabling real-time updates for 100+ projects. Built Laravel modules for project and user management, improving efficiency for many users and projects.",
            githubLink: "https://github.com/souhir-fazzaini/PROJECT-MANAGEMENT" // Replace with your GitHub link
        },
        {
            images: [Emanagement1, Emanagement2, Emanagement3], // Images of the third project
            description: "Employee Management",
            additionalDescription: "The Employee Management System (EMS) is a web application that enables HR personnel to manage employee and department data efficiently.",
            githubLink: "https://github.com/souhir-fazzaini/Employee-Management-System" // Replace with your GitHub link
        },
        {
            images: [addexpense, expense], // Images of the third project
            description: "AI-Powered Expense Management Application",
            additionalDescription:"Plateforme de gestion des dépenses alimentée par l'IA qui automatise le suivi et la catégorisation des frais. Fournit des insights financiers en temps réel et des tableaux de bord intuitifs pour optimiser la gestion des dépenses.",
            githubLink: "https://github.com/souhir-fazzaini/expense-predictor" // Replace with your GitHub link
        },
        {
            images: [chat1, chat2, chat3, chat4], // Images of the third project
            description: "Developed a web application for AI-powered chat and user management with conversation history",
            githubLink: "https://github.com/souhir-fazzaini/Ollama_front" // Replace with your GitHub link
        },
        {
            images: [smartService, smartService3, smartService1 ], // Images of the third project
            description: "SmartService is a fullstack web application for online service booking, allowing users to discover, book, and review professional services.",
            githubLink: "https://github.com/souhir-fazzaini/SmartService-AI-Platform_backend" // Replace with your GitHub link
        },
        {
            images: [login, page1, page2, page3], // Images of the third project
            description: "Développement d'un blog avec espace administration sous Symfony 7, incluant : gestion des articles/catégories/commentaires avec Doctrine ORM, authentification utilisateur avec rôles (ROLE_ADMIN), interface admin EasyAdmin, architecture MVC",
            githubLink: "https://github.com/souhir-fazzaini/Symfony-Blog-Platform" // Replace with your GitHub link
        },

    ];

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0); // State to track the current project index
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the current image index in modal
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    const showImages = (index) => {
        setCurrentProjectIndex(index);
        setCurrentImageIndex(1); // Reset image index when opening modal
        setIsModalOpen(true); // Open the modal when clicking "Show Images"
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % projects[currentProjectIndex].images.length); // Go to the next image
    };

    const prevImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + projects[currentProjectIndex].images.length) % projects[currentProjectIndex].images.length); // Go to the previous image
    };

    return (
        <section id="works">
            <span className="workTitle">Portfolio</span>

            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-section" key={index}>
                        <div className="slide-container">
                            <div className="image-frame">
                                <img src={project.images[0]} alt="slide" className="square-img" />
                                <div className="overlay">

                                </div>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>{project.description}</p>
                            <p style={{height: '100px', overflow: 'hidden'}}>{project.additionalDescription}</p>
                            <div className="project-buttons">
                            { index===0 ? ( // Si c'est le troisième projet (index 2)
                                    <a href={project.videoLink} target="_blank" rel="noopener noreferrer"
                                       className="icon-button github-button">
                                        <FaVideo size={24}/> {/* Icône GitHub */}
                                    </a>
                                ) : (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                       className="icon-button video-button">
                                        <FaGithub size={24}/> {/* Icône vidéo pour les autres projets */}
                                    </a>
                                )}
                                <button onClick={() => showImages(index)} className="icon-button images-button">
                                    <FaImages size={24}/> {/* Icône Images */}
                                </button>
                            </div>


                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for displaying images */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-image-container">
                            <button onClick={prevImage} className="arrow-button">{"<"}</button>
                            <img src={projects[currentProjectIndex].images[currentImageIndex]} alt={`Project ${currentProjectIndex} - ${currentImageIndex}`} className="modal-image" />
                            <button onClick={nextImage} className="arrow-button">></button>
                        </div>
                        {/* Close Button */}
                        <button onClick={closeModal} className="close-button">Close</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Works;
