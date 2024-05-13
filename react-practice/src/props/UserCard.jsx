import './card.css'
import PropsTypes from 'prop-types';

function User(props) {
  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
      <img className="img" src={props.profile} />
      <h2>{props.name}</h2>
      <h3>{props.city}</h3>
      <p>{props.discription}</p>
      <div className="btn">
        <button className="msg">Message</button>
        <button className="msg outline">Following</button>
      </div>
      <div className="skills">
        <h6 >Skills</h6>
        <ul>
          {props.skills.map((e, i) => (
            <li key={i}>{e}</li>
          ))

          }
        </ul>
      </div>

    </div>
  )
}

export const UserCard = () => {
  return (
    <>
      {/* <User name="Surya" city="Dharmapuri" discription="Front-end Developer"
        skills={["HTML", "CSS", "JAVA SCRIPT", "BOOTSTRAP", "REACT JS", "NODE JSON", "EXPRESS JS", "MONGO DB"]}
        online={true} profile="../image/caption america.jpg" /> */}

      {userData.map((e, i) => (
        <User key={i} 
        name={e.name} 
        city={e.city} 
        discription={e.discription} 
        skills={e.skills} 
        online={e.online} 
        profile={e.profile} 

        />
      ))
      }
    </>
  )
}


User.prototype={
  name:PropsTypes.string.isRequired,
  city:PropsTypes.string.isRequired,
  discription:PropsTypes.string.isRequired,
  skills:PropsTypes.arrayOf(PropsTypes.string).isRequired,
  profile:PropsTypes.string.isRequired,
  online:PropsTypes.bool.isRequired,
  
}
let userData = [
  {
    name: "surya",
    city: "Dharmapuri",
    discription: "Front-end Developer",
    skills: ["HTML", "CSS", "JAVA SCRIPT", "BOOTSTRAP", "REACT JS", "NODE JSON", "EXPRESS JS", "MONGO DB"],
    online: true,
    profile: '../image/blackpanther.jpg'
  }, {
    name: "surya",
    city: "Dharmapuri",
    discription: "Front-end Developer",
    skills: ["HTML", "CSS", "JAVA SCRIPT", "BOOTSTRAP", "REACT JS", "NODE JSON", "EXPRESS JS", "MONGO DB"],
    online: true,
    profile: '../image/blackpanther.jpg'
  }, {
    name: "surya",
    city: "Dharmapuri",
    discription: "Front-end Developer",
    skills: ["HTML", "CSS", "JAVA SCRIPT", "BOOTSTRAP", "REACT JS", "NODE JSON", "EXPRESS JS", "MONGO DB"],
    online: true,
    profile: '../image/blackpanther.jpg'
  }, {
    name: "surya",
    city: "Dharmapuri",
    discription: "Front-end Developer",
    skills: ["HTML", "CSS", "JAVA SCRIPT", "BOOTSTRAP", "REACT JS", "NODE JSON", "EXPRESS JS", "MONGO DB"],
    online: true,
    profile: '../image/blackpanther.jpg'
  }, {
    name: "surya",
    city: "Dharmapuri",
    discription: "Front-end Developer",
    skills: ["HTML", "CSS", "JAVA SCRIPT", "BOOTSTRAP", "REACT JS", "NODE JSON", "EXPRESS JS", "MONGO DB"],
    online: true,
    profile: '../image/blackpanther.jpg'
  }, {
    name: "surya",
    city: "Dharmapuri",
    discription: "Front-end Developer",
    skills: ["HTML", "CSS", "JAVA SCRIPT", "BOOTSTRAP", "REACT JS", "NODE JSON", "EXPRESS JS", "MONGO DB"],
    online: true,
    profile: '../image/blackpanther.jpg'
  }, {
    name: "surya",
    city: "Dharmapuri",
    discription: "Front-end Developer",
    skills: ["HTML", "CSS", "JAVA SCRIPT", "BOOTSTRAP", "REACT JS", "NODE JSON", "EXPRESS JS", "MONGO DB"],
    online: true,
    profile: '../image/blackpanther.jpg'
  }, {
    name: "surya",
    city: "Dharmapuri",
    discription: "Front-end Developer",
    skills: ["HTML", "CSS", "JAVA SCRIPT", "BOOTSTRAP", "REACT JS", "NODE JSON", "EXPRESS JS", "MONGO DB"],
    online: true,
    profile: '../image/blackpanther.jpg'
  }
]