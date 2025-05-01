import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Header = () => (
  <header className="bg-dark text-white p-3 d-flex justify-content-between">
    <h1>My Portfolio</h1>
    <nav>
      <Link to="/" className="text-white mx-2">Home</Link>
      <Link to="/about" className="text-white mx-2">About Me</Link>
      <Link to="/education" className="text-white mx-2">Education</Link>
      <Link to="/projects" className="text-white mx-2">Projects</Link>
      <Link to="/contact" className="text-white mx-2">Contact</Link>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="bg-light text-center p-3 mt-5">
    <p>&copy; {new Date().getFullYear()} My Portfolio</p>
  </footer>
);

const Home = () => (
  <div className="container mt-4 d-flex flex-column align-items-center" style={{ height: "80vh" }}>
    <h2 style={{ fontSize: "4rem", fontWeight: "bold", marginTop: "2rem" }}>Hello and Welcome!</h2>
    <h3 style={{ fontSize: "2rem", fontWeight: "normal", marginTop: "1rem" }}>My Name is Carl</h3>
    <img
      src="https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/476496214_9620895977942328_3104424207683260055_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEerT2SAUH2oBvbTYzK2nnCxTLqE_umgX_FMuoT-6aBfwTMVLh--2c5Es7KjETfCWM-IJ3cyhZG__dLTxvckd35&_nc_ohc=3OsgIt-TrE0Q7kNvwGUnzzg&_nc_oc=Adn9nrfIUCo7QmNeaGAwHXchCMM-vL280VnZnOE_Z4_8YWuteSjUOrbxYnWjT5N0V6c&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=pDQW4RKVR7aYD_3rGgJMoQ&oh=00_AfFYh8vpQdSPTxeK94Q7AOxj7i-68uMVLoFWKoomQ9zvtg&oe=68183243"
      alt="Welcome Image"
      style={{ width: "300px", height: "300px", borderRadius: "50%", marginTop: "1rem" }}
    />
    <p className="text-center">
      Welcome to my portfolio! I'm excited to share my work, experiences, and passions with you. This space is a reflection of my journey—filled with projects I've built, challenges I've overcome, and the skills I've developed along the way. Whether you're a potential client, employer, or fellow creative, I hope you'll find something here that resonates with you.
    </p>
    <p className="text-center">
      Feel free to explore the different sections to learn more about who I am and what I do. From my latest work to insights into how I approach problems, everything you see here represents my commitment to growth and creativity. If something catches your eye or you'd like to connect, don’t hesitate to reach out—I’d love to hear from you!
    </p>
  </div>
);

const About = () => (
  <div className="container mt-4 d-flex flex-column align-items-center" style={{ height: "80vh" }}>
    <h2 style={{ fontSize: "4rem", fontWeight: "bold", marginTop: "2rem" }}>About Me</h2>
    <p className="text-center">
    Hi, I’m Carl Manuel V. Gonzales, a third-year Bachelor of Science in Information Technology student with a growing passion for technology, problem-solving, and innovation. I’m currently honing my skills in areas such as web development, software engineering, and database management, while continuously exploring new tools and technologies that can bring ideas to life.
    </p>
    <p className="text-center">
    Throughout my academic journey, I’ve worked on various projects that have challenged me to think critically and creatively. I enjoy turning concepts into practical solutions, whether it's building responsive websites or developing simple applications. I’m eager to keep learning, collaborate with like-minded individuals, and eventually contribute to impactful projects in the tech industry. Outside of tech, I enjoy riding my motorcycle and taking pictures of the places i have been, which helps keep me inspired and balanced.
    </p>
  </div>
);

const Education = () => (
  <div className="container mt-4 d-flex flex-column align-items-center" style={{ height: "80vh" }}>
    <h2 style={{ fontSize: "4rem", fontWeight: "bold", marginTop: "2rem" }}>Education</h2>
    <ul>
      <li>Pamantasan ng Cabuyao - Bachelor of Science in Information Technology</li>
      <li>Online Courses: HTML, CSS, Java, JavaScript, PHP</li>
    </ul>
  </div>
);

const Projects = () => (
  <div className="container mt-4 d-flex flex-column align-items-center" style={{ height: "80vh" }}>
    <h2 style={{ fontSize: "4rem", fontWeight: "bold", marginTop: "2rem" }}>Projects</h2>
    <ul>
      <li>
        <strong>Portfolio Website:</strong> A personal site showcasing my works.
      </li>
      <li>
        <strong>Reservation System:</strong> A system used by private resorts to manage their reservations.
      </li>
      <li>
        <strong>Gallery:</strong> A website to post pictures taken in different places.
      </li>
    </ul>
  </div>
);

const Contact = () => (
  <div className="container mt-4 d-flex flex-column align-items-center" style={{ height: "80vh" }}>
    <h2 style={{ fontSize: "4rem", fontWeight: "bold", marginTop: "2rem" }}>Contacts</h2>
    <ul>
      <li>
        <strong>Email:</strong> carlmanuelg@gmail.com
      </li>
      <li>
        <strong>Phone Number:</strong> 09282983940
      </li>
      <li>
        <strong>Facebook:</strong> carl manuel gonzales
      </li>
      <li>
        <strong>Instagram:</strong> cmgonzales
      </li>
    </ul>
  </div>
);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
