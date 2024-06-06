const TechnicalSkills = () => {
  return (
    <div className="TechnicalSkills">
      <div className="sectionHeading">
        <h1>Technical Skills</h1>
      </div>
      <br />
      <div className="sectionContent">
        <h2>Evidence of Technical Skills</h2>
        <p>
          <strong>Situation:</strong> During my third-year Applications Development course at Cape Peninsula University of Technology, we were required to develop a web application for a local non-profit organization. The application needed to manage volunteer registrations, event scheduling, and donations.
        </p>
        <p>
          <strong>Task:</strong> My task was to design and implement the backend of the web application, ensuring robust functionality and seamless integration with the frontend.
        </p>
        <p>
          <strong>Action:</strong> I chose to use Node.js with Express for the server-side development due to its efficiency and scalability. I set up a RESTful API to handle CRUD operations for volunteers, events, and donations. For the database, I used MongoDB, leveraging Mongoose for schema management and data validation. I also implemented user authentication and authorization using JWT (JSON Web Tokens) to ensure secure access to the application.
        </p>
        <p>
          <strong>Result:</strong> The backend I developed performed reliably under various testing scenarios, providing a solid foundation for the web application. The project was completed on time, and the non-profit organization was impressed with the applications performance and ease of use. Our professors highlighted the technical robustness of our solution, and we received high marks for the project.
        </p>
        <br />
        <h2>Reflection on Technical Skills</h2>
        <p>
          Reflecting on this experience, I realized the importance of choosing the right tools and technologies to meet project requirements. This project enhanced my skills in backend development, database management, and implementing security measures.
        </p>
        <p>
          I also learned the value of thorough testing and debugging to ensure the reliability and performance of the application. This experience has made me more proficient in developing full-stack applications and confident in my ability to tackle complex technical challenges.
        </p>
        <br />
      </div>
    </div>
  );
};

export default TechnicalSkills;
