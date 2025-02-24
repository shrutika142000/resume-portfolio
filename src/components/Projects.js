import React from "react";

function Projects() {
  const projects = [
    {
      title: "BMI Calculator",
      description:
        "This project has been created by using HTML , CSS  , JAVASCRIPT .",
      icon: "fa-solid fa-heart-pulse",
      projectLink: "https://bmicalciproject.netlify.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "This project has been created by using HTML , CSS , BOOTSTRAP 5 , JAVASCRIPT , REACT JS.",
      icon: "fa-solid fa-user-tie",
      projectLink: "https://my-resume-portfolio-website.netlify.app/",
    },
    {
      title: "Fitness Vibe Website",
      description:
        "This project has been created by using HTML , CSS , BOOTSTRAP 5 , JAVASCRIPT , REACT JS. ",
      icon: "fa-solid fa-dumbbell",
      projectLink: "https://fitness-vibe.netlify.app/",
    },
    {
      title: "Sweet Cafe Website",
      description:
        "This project has been created by using HTML, CSS, BOOTSTRAP 5, JAVASCRIPT, REACT JS, AI.",
      icon: "fa-solid fa-mug-saucer",
      projectLink: "https://sweet-cafe-website.netlify.app/",
    },

    {
      title: "Ms. Foodie Restarant Website",
      description:
        "This project has been created by using HTML , CSS , BOOTSTRAP 5, JAVASCRIPT, REACT JS, AI. ",
      icon: "fa-solid fa-utensils",
      projectLink: "https://ms-foodie-restaurant.netlify.app/",
    },
    {
      title: "UX/UI Design Projects",
      description:
        "Explore my UX/UI design projects, including a Food Delivery App, Ladies' Fashion App and Online Furniture Website. Click the button below to view my full UX/UI portfolio!",
      image: "/images/UXUI img.webp", // Add image path
      projectLink: "https://shrutikajuvale.designfolio.me/",
    },
  ];

  return (
    <section id="projects" className="projects bg-light p-5">
      <div className="container">
        <h2 className="section-title text-center mt-5">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="card-img-top mb-3"
                      style={{ height: "200px", objectFit: "cover" }} // Adjust image size
                    />
                  ) : (
                    <i className={`${project.icon} fa-3x mb-3`}></i> // Fallback to icon
                  )}
                  {/* Adding Icon */}
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>Click Me</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
