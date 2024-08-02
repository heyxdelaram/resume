import Tag from "./components/Tag";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  return (
    <div className="my-10">
      <h5 className="text-2xl font-semibold">💻 Projects</h5>

      <p className="text-center my-5">--- Code ---</p>
      <div>
        {/* Resume */}
        <div>
          <p>
            <span className="text-3xl">&#8640; </span>
            <a href="/">This Website 👇</a>
          </p>
          <div className="flex flex-wrap">
            <Tag str="🟡 Javascript" />
            <Tag str="🔵 ReactJS" />
            <Tag str="🟣 Vite" />
          </div>
        </div>
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

        {/* AI Summarizer */}
        <Modal show={openModal2} onClose={() => setOpenModal2(false)}>
          <Modal.Header>AI Summarization with OpenAI</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                As Artificial Intelligence (AI) technology continues to advance,
                it is becoming an integral part of various digital products and
                services. From virtual assistants to recommendation engines,
                AI-powered tools have the potential to assist humans by
                automating and reducing the amount of time needed to accomplish
                certain tasks.
                <br />
                One example is to summarize lengthy texts in order to have a
                clear understanding of the overall content in a short amount of
                tiime. This can be done via one of OpenAI API's which I have
                applied to this project.
              </p>
              <video class="w-full max-h-80" autoPlay>
                <source src="/ai-sum.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Just One Paste Away
                <br />
                Users can utilize this service by providing a link to the
                considered content. The summarization will be taken care of and
                displayed once generated. Also the link will be saved in the
                local storage so the summary can be accessed easily anytime
                after closing the website by just clicking on it. I've also
                enabled links to be copied to the clipboard if necessary.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <a
              href="https://summarizer-openai.netlify.app/"
              className="font-bold hover:bg-gray-200 rounded-full px-4 py-2"
              target="blank"
            >
              Website
            </a>
            <a
              href="https://github.com/heyxdelaram/ai-summarizer"
              className="font-bold hover:bg-gray-200 rounded-full px-4 py-2"
              target="blank"
            >
              Source
            </a>
          </Modal.Footer>
        </Modal>
        <div>
          <p>
            <span className="text-3xl">&#8640; </span>
            <a
              className="bg-transparent hover:bg-zinc-700"
              onClick={() => setOpenModal2(true)}
              target="blank"
            >
              AI Summarization with OpenAI
            </a>
          </p>
          <div className="flex flex-wrap">
            <Tag str="🟡 Javascript" />
            <Tag str="🔵 ReactJS" />
          </div>
          <p className="read-the-docs mt-2">
            Sumz website is a service provider which allows users to use the
            openAI article summarizer api through a fully fledged website with a
            nice-looking UI which will allow users to easily access the service.
          </p>
        </div>
        {/* Live Chat */}
        <div>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Live Chat</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  This project was inspired by Youtube's live chat feature. The
                  idea is to build a platform for any user to chat with all
                  other users in one Chatroom.
                </p>
                <video class="w-full max-h-80" autoPlay>
                  <source src="/live-chat.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  All You Need Is A Google Account
                  <br />
                  Firstly, users must "Sign in" via their google account. Once
                  signed in, the Chatroom will be displayed and users can start
                  chatting. Once the discussion is over, users can "Log out"
                  however all previous messages will be displayed once they sign
                  back in.
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <a
                href="https://github.com/heyxdelaram/superchat-app.git"
                className="font-bold hover:bg-gray-200 rounded-full px-4 py-2"
                target="blank"
              >
                Source
              </a>
            </Modal.Footer>
          </Modal>
          <p>
            <span className="text-3xl">&#8640; </span>
            <a
              className="bg-transparent hover:bg-zinc-700"
              onClick={() => setOpenModal(true)}
              // href="https://heyxdelaram.framer.website/projects/live-chat-app"
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
