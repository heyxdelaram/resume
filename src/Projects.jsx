import Tag from "./components/Tag";

const Projects = () => {
  return (
    <div className="my-10">
      <h5 className="text-2xl font-semibold">💻 Projects</h5>

      <p className="text-center my-5">--- Code ---</p>
      <div>
        {/* Face Recognition App */}
        <div>
          <p>
            <span className="text-3xl">&#8640; </span>
            <a
              href="https://github.com/heyxdelaram/face-recognition-app"
              target="blank"
            >
              Face Recognition App
            </a>
          </p>
          <div className="flex flex-wrap">
            <Tag str="🟡 Javascript" />
            <Tag str="🔵 ReactJS" />
            <Tag str="🟢 NodeJS" />
            <Tag str="🟢 ExpressJS" />
            <Tag str="🐘 PostgreSQL" />
          </div>
          <p className="read-the-docs mt-2">
            This application uses Clarifai API ( a machine learning API ) that
            has a login and signup page, database , etc. After logging in, the
            user can enter a image URL in order for the API to detect a face in
            the provided image. This project covered a wide range of full-stack
            technology
          </p>
        </div>

        {/* Bank App */}
        <div>
          <p>
            <span className="text-3xl">&#8640; </span>
            <a
              href="https://github.com/heyxdelaram/bank-standalone-app.git"
              target="blank"
            >
              Bank Desktop App
            </a>
          </p>
          <div className="flex flex-wrap">
            <Tag str="☕ Java" />
            <Tag str="🟠 SQL" />
            <Tag str="🏌️‍♂️ Swing" />
          </div>
          <p className="read-the-docs mt-2">
            This was a university final assignment and a team project.
            <br /> The objective was to create a real and functional bank
            application that had panels for customers, employees and the central
            bank (for tracking transactions). It helped me develop a decent
            knowledge in Java, Mysql and Database Design.
          </p>
        </div>

        {/* Robot Search */}
        <div>
          <p>
            <span className="text-3xl">&#8640; </span>
            <a
              href="https://heyxdelaram.github.io/robot-search-app/"
              target="blank"
            >
              Robot Search Filter
            </a>
          </p>
          <div className="flex flex-wrap">
            <Tag str="🟡 Javascript" />
            <Tag str="🔵 ReactJS" />
          </div>
          <p className="read-the-docs mt-2">
            By building this small application I was able to understand the core
            concepts of Rest APIs, AJAX, the React framework, npm and JSON. A
            simple yet effective project
          </p>
        </div>
        {/* Live Chat */}
        <div>
          <p>
            <span className="text-3xl">&#8640; </span>
            <a
              href="https://heyxdelaram.framer.website/projects/live-chat-app"
              target="blank"
            >
              Live Chat
            </a>
          </p>
          <div className="flex flex-wrap">
            <Tag str="🟡 Javascript" />
            <Tag str="🔵 ReactJS" />
            <Tag str="🔥 Firebase" />
            <Tag str="🍃 Tailwind" />
          </div>
          <p className="read-the-docs mt-2">
            This project was inspired by the live chat feature on Youtube. The
            idea is to build a platform for any user to chat with all other
            users in one Chatroom.
          </p>
        </div>
        {/* Wordle */}
        <div>
          <p>
            <span className="text-3xl">&#8640; </span>
            <a href="https://github.com/heyxdelaram/wordle.git" target="blank">
              Wordle Clone
            </a>
          </p>
          <div className="flex flex-wrap">
            <Tag str="🟡 Javascript" />
            <Tag str="🔵 ReactJS" />
          </div>
          <p className="read-the-docs mt-2">
            A clone of the Worlde game which has an implentation of most
            features and rules that are applied.
          </p>
        </div>
        {/* UI Design */}
        <p className="text-center my-5">--- Design ---</p>
        <div>
          <p>
            <span className="text-3xl">&#8640; </span>
            <a
              href="https://www.figma.com/proto/NN8ws9TE6zuQKMBlPwAmNe/Hamghadam-Logo-Design-Project?type=design&node-id=1-9&t=SHNOxT1XEtdi054v-1&scaling=min-zoom&page-id=0%3A1&mode=design"
              target="blank"
            >
              Logo Design
            </a>
          </p>
          {/* <p className="read-the-docs">
            A logo for a club called &quot;همقدم&quot;
          </p> */}
          <div className="flex flex-wrap">
            <Tag str="✒️ Illustrator" />
          </div>
        </div>
        <div>
          <p>
            <span className="text-3xl">&#8640; </span>
            <a href="https://simlacky.com/" target="blank">
              UI Design
            </a>
          </p>
          <p className="read-the-docs">
            I designed the UI for a business website called &quot;سیم لاکی&quot;
          </p>
          <div className="flex flex-wrap">
            <Tag str="📷 Photoshop" />
          </div>
        </div>
        <div>
          <p>
            <span className="text-3xl">&#8640; </span>
            <a
              href="https://www.figma.com/proto/cTtlrJJG10zEoRNrQxCjq5/!deally?node-id=222-328&t=LR1LxQghj1vLxoii-1&scaling=min-zoom&content-scaling=fixed&page-id=222%3A327&starting-point-node-id=448%3A2083&show-proto-sidebar=1"
              target="blank"
            >
              Mobile UI Design
            </a>
          </p>
          <p className="read-the-docs">
            UI Design of a mobile application with the original idea of an{" "}
            <i>idea sharing</i> app
          </p>
          <div className="flex flex-wrap">
            <Tag str="🟣 Figma" />
            <Tag str="✒️ Illustrator" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
