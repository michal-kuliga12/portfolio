import { useState } from "react";
import wavesDivider from "./assets/wavesOpacity.svg";
import profilePic from "./assets/profile-pic.webp";
import bookShopImg from "./assets/book-shop.webp";
import hairdreeserSalonImg from "./assets/hairdresser-salon.webp";
import TechIcon from "./components/TechIcon";
import ExpressIcon from "./components/ExpressIcon";
import "./style.scss";
import { Link } from "react-router-dom";
import {
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiJavascript,
  DiCss3,
  DiMysql,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { ReactSVG } from "react-svg";
import GithubIcon from "./components/GithubIcon";
import NextjsIcon from "./components/NextjsIcon";
import LinkedinIcon from "./components/LinkedinIcon";
import SassIcon from "./components/SassIcon";
import MongoIcon from "./components/MongoIcon";
import NodejsIcon from "./components/NodejsIcon";
import ReactIcon from "./components/ReactIcon";
import JavaScriptIcon from "./components/JavaScriptIcon";
import HtmlIcon from "./components/HtmlIcon";
import CssIcon from "./components/CssIcon";
import MySqlIcon from "./components/MySqlIcon";
import GitIcon from "./components/GitIcon";
import TypeScriptIcon from "./components/TypeScriptIcon";
import PhoneIcon from "./components/PhoneIcon";
import MailIcon from "./components/MailIcon";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  //https://www.linkedin.com/in/micha%C5%82-kuliga-65a781269/
  //"https://github.com/michal-kuliga12"
  return (
    <div className="app">
      <div className="container">
        <nav>
          <p>Michał Kuliga</p>
          <div className="icons">
            <Link
              aria-label="Github"
              className="icon"
              to="https://github.com/michal-kuliga12"
            >
              <GithubIcon />
            </Link>
            <Link
              aria-label="Linkedin"
              className="icon"
              to="https://www.linkedin.com/in/micha%C5%82-kuliga12/"
            >
              <LinkedinIcon />
            </Link>
          </div>
        </nav>
        <div className="content">
          <section className="aboutMe">
            <div className="wrapper">
              <div className="profile">
                <h2 className="name">Michał Kuliga</h2>
                <h3>Front-end Developer</h3>
                <p>
                  I am a graduate of mechatronics and self-taught web developer
                  focused on creating full stack web applications. I am mainly
                  using JavaScript for creating such applications but also open
                  for investing time in learning new technologies. I am
                  consistent and ambitious person with good solving problem
                  skills and attention to detail. I am communicative and ready
                  for working with team. I am looking for my first commercial
                  experience in a job that would allow me to improve myself in
                  web development and create more complex projects.
                </p>
              </div>
              <div className="picture">
                <img width={300} height={449} src={profilePic} alt="" />
              </div>
            </div>
            <div className="contact">
              <p className="contactItem">
                <span>
                  <MailIcon />
                </span>{" "}
                <span>mkuliga72@gmail.com</span>
              </p>
              <p className="contactItem">
                <span>
                  <PhoneIcon />
                </span>{" "}
                <span>+48 536 241 899</span>
              </p>
            </div>
          </section>
          <section className="technologies">
            <div className="divider">
              <img src={wavesDivider} alt="" />
            </div>
            <h3>Technologies</h3>
            {/* <div className="technologyList">
              <TechIcon
                stylingClass="technology"
                title="Next.js"
                component={<NextjsIcon />}
              />
              <TechIcon
                stylingClass="technology"
                title="Node.js"
                component={<DiNodejsSmall />}
              />
              <TechIcon
                stylingClass="technology"
                title="React.js"
                component={<DiReact />}
              />
              <TechIcon
                stylingClass="technology"
                title="Express.js"
                component={<ExpressIcon />}
              />
              <TechIcon
                stylingClass="technology"
                title="JavaScript"
                component={<DiJavascript />}
              />
              <TechIcon
                stylingClass="technology"
                title="HTML"
                component={<DiHtml5 />}
              />
              <TechIcon
                stylingClass="technology"
                title="CSS"
                component={<DiCss3 />}
              />
              <TechIcon
                stylingClass="technology"
                title="MySQL"
                component={<DiMysql />}
              />
              <TechIcon
                stylingClass="technology"
                title="MongoDB"
                component={<DiMongodb />}
              />
              <TechIcon
                stylingClass="technology"
                title="GIT"
                component={<DiGit />}
              />
            </div> */}
            <div className="technologyList">
              <TechIcon
                stylingClass="technology"
                title="Next.js"
                component={<NextjsIcon />}
              />
              <TechIcon
                stylingClass="technology"
                title="React.js"
                component={<ReactIcon />}
              />
              <TechIcon
                stylingClass="technology"
                title="Node.js"
                component={<NodejsIcon />}
              />
              <TechIcon
                stylingClass="technology"
                title="Express.js"
                component={<ExpressIcon />}
              />
              <TechIcon
                stylingClass="technology"
                title="TypeScript"
                component={<TypeScriptIcon />}
              />
              <TechIcon
                stylingClass="technology"
                title="JavaScript"
                component={<JavaScriptIcon />}
              />
              <TechIcon
                stylingClass="technology"
                title="HTML"
                component={<HtmlIcon />}
              />
              <TechIcon
                stylingClass="technology"
                title="CSS"
                component={<CssIcon />}
              />
              <TechIcon
                stylingClass="technology"
                title="MySQL"
                component={<MySqlIcon />}
              />
              <TechIcon
                stylingClass="technology"
                title="MongoDB"
                component={<MongoIcon />}
              />
              <TechIcon
                stylingClass="technology"
                title="GIT"
                component={<GitIcon />}
              />
            </div>
          </section>
          <section className="projects">
            <h3>My projects</h3>
            {/* <p></p> */}
            <Link
              to="https://book-shop-mishiio.vercel.app/"
              className="project"
            >
              <div className="img">
                <img width={500} height={343} src={bookShopImg} alt="" />
              </div>
              <div className="details">
                <div className="info">
                  <h4>Book shop web application</h4>
                  <div className="usedTechnologies">
                    <TechIcon
                      stylingClass="technology"
                      title="x"
                      component={<ReactIcon />}
                    />
                    <TechIcon
                      stylingClass="technology"
                      title="x"
                      component={<JavaScriptIcon />}
                    />
                    <TechIcon
                      stylingClass="technology"
                      title="x"
                      component={<SassIcon />}
                    />
                    <TechIcon
                      stylingClass="technology"
                      title="x"
                      component={<NodejsIcon />}
                    />
                    <TechIcon
                      stylingClass="technology"
                      title="x"
                      component={<ExpressIcon />}
                    />
                    <TechIcon
                      stylingClass="technology"
                      title="x"
                      component={<MongoIcon />}
                    />
                  </div>
                  <p className="desc">
                    Full stack application where user can register account and
                    order books. The goal was to make UI minimalistic, intuitive
                    and accessible for any devices. Some functionalities were
                    secured only for admin access.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to="https://salon-fryzjerski-pi.vercel.app/"
              className="project"
            >
              <div className="img">
                <img
                  width={500}
                  height={343}
                  src={hairdreeserSalonImg}
                  alt=""
                />
              </div>
              <div className="details">
                <div className="info">
                  <h4>LaBella - Hairdresser's salon</h4>
                  <div className="usedTechnologies">
                    <TechIcon
                      stylingClass="technology"
                      title="x"
                      component={<NextjsIcon />}
                    />
                    <TechIcon
                      stylingClass="technology"
                      title="x"
                      component={<JavaScriptIcon />}
                    />
                    <TechIcon
                      stylingClass="technology"
                      title="x"
                      component={<SassIcon />}
                    />
                    <TechIcon
                      stylingClass="technology"
                      title="x"
                      component={<MongoIcon />}
                    />
                  </div>
                  <p className="desc">
                    Full stack application which was practical part of my
                    engineer project and also opportunity to get familiar with
                    Next.js. Topic of the project was to make work support
                    application for examplary business.
                  </p>
                </div>
              </div>
            </Link>
          </section>
        </div>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
