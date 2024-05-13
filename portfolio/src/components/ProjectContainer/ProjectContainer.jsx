import React from 'react'
import './ProjectContainer.css'
import ProjectItem from '../Project-item/ProjectItem';
const ProjectContainer = () => {
    const projectEle = [
        {
            img: '../../assets/SpiderMan/1122387.jpg',
             title: "Fackbook",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laborum qui distinctio odit? Iusto, iste sunt veniam officiis non eveniet optio, sapiente inventore illum nihil, quia animi veritatis eos dolore?",
            link: "www.google.com"
        },
        {
            img: '../../assets/SpiderMan/spider.jpg',
             title: "Fackbook",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laborum qui distinctio odit? Iusto, iste sunt veniam officiis non eveniet optio, sapiente inventore illum nihil, quia animi veritatis eos dolore?",
            link: "www.google.com"
        },
        {
            img: '../../assets/SpiderMan/spider.jpg',
             title: "Fackbook",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laborum qui distinctio odit? Iusto, iste sunt veniam officiis non eveniet optio, sapiente inventore illum nihil, quia animi veritatis eos dolore?",
            link: "www.google.com"
        },
        {
            img: '../../assets/SpiderMan/spider.jpg',
             title: "Fackbook",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laborum qui distinctio odit? Iusto, iste sunt veniam officiis non eveniet optio, sapiente inventore illum nihil, quia animi veritatis eos dolore?",
            link: "www.google.com"
        },
        {
            img: '../../assets/SpiderMan/spider.jpg',
             title: "Fackbook",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laborum qui distinctio odit? Iusto, iste sunt veniam officiis non eveniet optio, sapiente inventore illum nihil, quia animi veritatis eos dolore?",
            link: "www.google.com"
        },
        {
            img: '../../assets/SpiderMan/spider.jpg',
             title: "Fackbook",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laborum qui distinctio odit? Iusto, iste sunt veniam officiis non eveniet optio, sapiente inventore illum nihil, quia animi veritatis eos dolore?",
            link: "www.google.com"
        }

    ];
    return (
        <div className="projectContainer" id='projects'>
            <h1>Projects</h1>
            <p>Here are some projects which I've done to make lives easier:</p>
            <div className="projectContainer_projects">
                {projectEle.map((project, index) => (
                    <ProjectItem
                        key={index}
                        img={project.img}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectContainer;