import { useContext, useState } from "react";
import "./FaqAccordion.scss";
import { MainContext } from "../../../context/mainProvider";

const FaqAccordion = () => {
  const [isOpen, setIsOpen] = useState(null);
  const { darkMode } = useContext(MainContext);
  console.log(darkMode);
  // questions data
  const questions = [
    {
      id: 1,
      title: "Is this product good quality",
      info: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      title: "Is this product good quality",
      info: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 3,
      title: "Is this product good quality",
      info: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 4,
      title: "Is this product good quality",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.lorem lorem lorem lorem lorem",
    },
    {
      id: 5,
      title: "Is this product good quality",
      info: "Lorem ipsum dolor sit amet.",
    },
  ];

  const handleToggle = (id) => {
    setIsOpen((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="faq-accordion">
      {questions.map((data) => (
        <div
          key={data.id}
          className={`question ${isOpen === data.id ? "open" : ""}`}
          onClick={() => handleToggle(data.id)}
        >
          <div className="before-open">
            <h3>{data.title}</h3>
            {isOpen === data.id && <p className="content">{data.info}</p>}
          </div>
          <span
            className="material-symbols-outlined"
            style={{ color: `${darkMode === true ? "#5b5b5b" : "#f1f1f1"}` }}
          >
            {isOpen === data.id ? "do_not_disturb_on" : "add_circle"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
