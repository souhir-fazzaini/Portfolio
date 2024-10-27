import React, { useState } from 'react';
import './works.css';
import Image0 from '../../assets/helpygo/logo.png';
import Image1 from '../../assets/helpygo/Afficer liste des offres (4).png';
import Image2 from '../../assets/helpygo/Ajouter une vente (4).png';
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
            githubLink: "https://github.com/souhir-fazzaini/Employee-Management-System" // Replace with your GitHub link
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
                            <p>{project.additionalDescription}</p>
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
