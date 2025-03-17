import React, { useState } from "react";
import "./MobileFollowers2.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import image from "../../assets/person.jpeg";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image3.jpeg";
import plusLogo from "../../assets/Group 99.png";
import editlogo from "../../assets/edit-05.png";
import publicLogo from "../../assets/Group 596.png";
import backlogo from "../../assets/arrow-right-circle.png";
import settingsLogo from "../../assets/image-Photoroom (100) 1.png";
import { FiSearch } from "react-icons/fi";

const MobileFollowers2 = () => {
  const [profilePic] = useState(image);
  const [collabs] = useState(10);
  const [connections] = useState(50);
  const [name] = useState("John Doe");
  const [title] = useState("Software Engineer || Web Developer");
  const [address] = useState("Gurgaon , Haryana, India");
  const [buttons] = useState(["Message", "Connect"]);
  const [isExpanded, setIsExpanded] = useState(false);

  const [fullAboutText] = useState(
    "Passionate developer with experience in web and mobile development. I specialize in React, Node.js, and building scalable applications. Love to work on open-source projects and contribute to the tech community."
  );

  const toggleExpand = () => setIsExpanded(!isExpanded);
  const maxLength = 100;
  const displayedText = isExpanded
    ? fullAboutText
    : fullAboutText.slice(0, maxLength) +
      (fullAboutText.length > maxLength ? "..." : "");

  // Image Slider Functionality
  const images = [image1, image2, image3, image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 3 ? 0 : prevIndex + 1
    );
  };

  // Experience Data
  const experiencesData = [
    {
      title: "Farewell",
      subtitle: "Backstage Handler",
      description:
        "The actual idea of Unisphere was of The Founder Himanshu who worked for months to...",
    },
    {
      title: "Fresher party",
      subtitle: "UI/UX Designer",
      description:
        "The actual idea of Unisphere was of The Founder Himanshu who worked for months to...",
    },
    {
      title: "Feast",
      subtitle: "UI/UX Designer",
      description:
        "The actual idea of Unisphere was of The Founder Himanshu who worked for months to...",
    },
    {
      title: "Workshop",
      subtitle: "Event Coordinator",
      description:
        "The actual idea of Unisphere was of The Founder Himanshu who worked for months to...",
    },
    {
      title: "Conference",
      subtitle: "Speaker",
      description:
        "The actual idea of Unisphere was of The Founder Himanshu who worked for months to...",
    },
  ];

  /// Skills section data

  const [interest, setInterest] = useState([
    "UI/UX",
    "JAVA",
    "CSS",
    "C++",
    "Python",
    "V+",
    "Figma",
    "Photoshop",
  ]);

  const [color, setColor] = useState([
    "#F3FDF4",
    "#FDF9F9",
    "#eaead6",
    "#F7F7F7",
  ]);

  // Collab Data

  const [collaboratorName] = useState("Jane Smith");
  const [education] = useState([
    "B.Tech in CS",
    "M.Tech in AI",
    "10th",
    "12th",
  ]);
  const [subCollaborators] = useState(["Alice", "Bob", "Charlie"]);
  const [paragraph] = useState("Passionate about coding and problem-solving.");

  return (
    <div className="mainParent">
      <div className="container">
        {/* Whole profile section containing name and all till buttons  */}

        <div className="whole-profile-section">
          <div className="top-nav-section">
            <img src={backlogo} className="backLogo" alt="" />
            <div className="search">
              <FiSearch className="search-icon" /> {/* Search Icon */}
              <input type="text" placeholder="Search" />
            </div>
            <img src={settingsLogo} className="settingsLogo" alt="" />
          </div>
          <div className="profile-header">
            <div className="imageContainer">
              <img src={profilePic} alt="Profile" className="profile-pic" />
                <h5 className="verified">Verified</h5>
               
            </div>
          <div className="parent-collabs-connection">
          <img src={editlogo} className="edit-logo" alt="" />
          <div className="collabsDetails">
              <h4>Collabs</h4> <span>{collabs}</span>
            </div>
            <div className="connectionsDetails">
              <h4>Connections</h4>
              <span>{connections}</span>
            </div>
          </div>
          </div>

          <div className="profile-info">
            <h2>{name}</h2>
            <p>{title}</p>
            <p>{address}</p>
          </div>

          <div className="profile-buttons">
            {buttons.map((btn, index) => (
              <button key={index} className="btn">
                {btn}
              </button>
            ))}
          </div>
        </div>
        {/* Goal Section */}
        <div className="aboutAndgoal-section">
          <h3>Your Plan and Goal</h3>
          <p>
            {displayedText}
            <span>
              {fullAboutText.length > maxLength && (
                <button className="aboutAndgoal-button" onClick={toggleExpand}>
                  {isExpanded ? "See Less" : "See More"}
                </button>
              )}
            </span>
          </p>
        </div>

        {/* Analytics Section */}
        <div className="main-analytics-parent">
          <div className="anlaytic-main-section">
            <h3>Analytics</h3>
            <div className="analytics-container">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
        {/* 
        About Section  */}

        <div className="aboutAndgoal-section">
        <div className="about-headingAndEdit">
              <h3>About</h3>
              <img src={editlogo} className="edit-logo" alt="" />
            </div>
          <p>
            {displayedText}
            <span>
              {fullAboutText.length > maxLength && (
                <button className="aboutAndgoal-button" onClick={toggleExpand}>
                  {isExpanded ? "See Less" : "See More"}
                </button>
              )}
            </span>
          </p>
        </div>
        {/* Upload Section with Image Slider */}
        <div className="slider-box">
          <h2>Upload</h2>
          <div className="down-slider-con">
            <IoIosArrowBack className="left-btn" onClick={prevSlide} />
            <div className="slide-track">
              {images
                .slice(currentIndex, currentIndex + 3)
                .map((image, index) => (
                  <div   key={index}  className="each-slide">
                    <img
                    
                      src={image}
                      alt="Slide"
                      className="slide-img"
                    />
                    <p>the actual idea..... </p>
                  </div>
                ))}
            </div>
            <IoIosArrowForward className="right-btn" onClick={nextSlide} />
          </div>
        </div>
        {/* 
        Experience section */}

        <div className="slider-box">
          <h2>Experience</h2>
          <div className="down-slider-con">
            <IoIosArrowBack className="left-btn" onClick={prevSlide} />
            <div className="slide-track" 
          
            >
              {experiencesData
                .slice(currentIndex, currentIndex + 3)
                .map((data, index) => (
                  <div
                  style={{ backgroundColor: color[index % color.length] }}
                  key={index} className="experince-inner-div">
                    <h3>{data.title} </h3>
                    <h5> {data.subtitle} </h5>
                    <p>{data.description} </p>
                  </div>
                ))}
            </div>
            <IoIosArrowForward className="right-btn" onClick={nextSlide} />
          </div>
        </div>

        {/* skills section  */}

        <div className="main-wrapper-section">
          <div className="heading-and-logos">
            <h3>Skills</h3>
            <div className="logos">
              <img src={plusLogo} className="add-logo" alt="" />
              <img src={editlogo} className="edit-logo" alt="" />
            </div>
          </div>
          <div className="content-and-arrow">
            <IoIosArrowBack className="left-btn" onClick={prevSlide} />

            <div className="suggested-tags">
              {interest.map((skill, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: color[index % color.length] }}
                  className="tag"
                >
                  {skill}
                </div>
              ))}
            </div>
            <IoIosArrowForward className="right-btn" onClick={nextSlide} />
          </div>
        </div>

        {/* Collab Section */}

        <div className="main-collabs-section">
          <div className="heading-and-logos">
            <h3>Collabs</h3>
            <div className="logos">
              <img src={plusLogo} className="add-logo" alt="" />
              <img src={editlogo} className="edit-logo" alt="" />
            </div>
          </div>
          <div className="second-div-arrowAndContent">
            <IoIosArrowBack className="left-btn" onClick={prevSlide} />

            <div className="innerDiv-onlyContent">
              <div className="left">
                <div className="collabratorCard">
                  <div className="collab-image">
                    <img src={image} alt="" />
                  </div>
                  <div className="collabratorDetails">
                    <h4>{collaboratorName}</h4>
                    <div className="education">
                      {education.slice(0, 2).map((val, index) => (
                        <h6 key={index}>{val}</h6>
                      ))}
                    </div>
                    <div className="subCollabrators">
                      (
                      {subCollaborators.map((val, index) => (
                        <h6 key={index}>{val},</h6>
                      ))}
                      )
                    </div>
                  </div>
                </div>
                <div className="para">
                  <p>{paragraph}</p>
                </div>
              </div>
              <div className="right">
                <img src={image} alt="" />
              </div>
            </div>
            <IoIosArrowForward className="right-btn" onClick={nextSlide} />
          </div>
        </div>

        {/* Interest Section */}

        <div className="main-wrapper-section">
          <div className="heading-and-logos">
            <h3>Interests</h3>
            <div className="logos">
              <img src={plusLogo} className="add-logo" alt="" />
              <img src={editlogo} className="edit-logo" alt="" />
            </div>
          </div>
          <div className="content-and-arrow">
            <IoIosArrowBack className="left-btn" onClick={prevSlide} />

            <div className="suggested-tags">
              {interest.map((skill, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: color[index % color.length] }}
                  className="tag"
                >
                  {skill}
                </div>
              ))}
            </div>
            <IoIosArrowForward className="right-btn" onClick={nextSlide} />
          </div>
        </div>

        {/* Education Section */}

        <div className="main-education">
          <div className="upper-education">
            <div className="education-headingAndEdit">
              <h3>Education</h3>
              <img src={editlogo} className="edit-logo" alt="" />
            </div>
            <div className="buttons-section">
              {education.map((edu, index) => (
                <button key={index} className="btn">
                  {edu}
                </button>
              ))}
            </div>
          </div>
          <img className="public-logo" src={publicLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MobileFollowers2;
