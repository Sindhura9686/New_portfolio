
import projImg1 from "../Components/Assets/img/project-img1.png";
import major from "../Components/Assets/img/major.jpeg";
import Mini from "../Components/Assets/img/Mini.jpeg";
import colorSharp2 from "../Components/Assets/img/color-sharp2.png";
import 'animate.css';

import "swiper/css";


export const Projects = () => {

  const projects = [
    // {
    //   id:1,
    //   image: projImg1,
    //   title: "Home Automation",
    //   demo: "",
    
    // },
    {
        id:2,
        image: Mini,
        title: "Movement based street light system",
        demo: "/final_poster.pdf",
      
    },
    {
        id:3,
        image: major,
        title: "Smart Street Light System",
        demo: "/final_major_project.pdf",
      
    },
    
  ];

  return (
    <section id="projects">
        <div className="skill-bx">
        <h2>
            Projects
        </h2>

        <div className="portfolio_container">
            {
                projects.map(({id,image,title,demo}) => {
                    return(
                        <article key={id} className="portfolio_item">
                        <div className="portfolio_item.image">
                          <img src={image} alt={title}/>
                        </div>
                       <h3>{title}</h3>
                       <div className="portfolio_item-cta">

                       <button key={id}>
                    <a href={demo} target="_blank" rel="noopener noreferrer">
                         DEMO
                    </a>
                </button>
                       </div>
                      </article>
                    )
                })
            }
            </div>
        </div>
    </section>
  )
}
