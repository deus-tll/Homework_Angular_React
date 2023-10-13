import { useState } from "react";
import AuthorInfo from "./components/AuthorInfo";
import WorkList from "./components/WorkList";
import WorkInfo from "./components/WorkInfo";

const FirstTask = () => {
  const authorData = {
    fullname: "Ві́льям Шекспі́р",
    birth: "26 квітня, 1564р.",
    death: "23 квітня, 1616р.",
    nationality: "Англієць"
  };

  const worksData = [
    {
      title: "Ромео і Джульєтта",
      genre: "Трагедія",
      year: "1597",
      description: "Ромео і Джульєтта розповідає історію двох молодих людей, кожен із сім'ї з Верони, що стоять один проти одного. У випадковій зустрічі, Ромео і Джульєтта зустрічаються і шалено закохуються. Однак сім’я Джульєти вже має для неї домовлений шлюб."
    },
    {
      title: "Гамлет",
      genre: "Трагедія",
      year: "1600",
      description: "Дія цієї п'єси відбувається в Данії. У ній розповідається, як принц Гамлет здійснює помсту своєму дядькові королю Клавдію, убивці попереднього короля, Гамлетового батька, та нового чоловіка Гамлетової матері, королеви Гертруди. У п'єсі яскраво відтворено протікання справжнього й удаваного божевілля, яке проявляється то в глибокому смутку, то в шаленій люті. Серед її тем також зрада, помста і моральне падіння."
    }
  ];

  const [author, setAuthor] = useState(authorData);
  const [works, setWorks] = useState(worksData);
  const [selectedWork, setSelectedWork] = useState(null)

  const handleWorkClick = (work) => setSelectedWork(work);

  return (
    <>
      <AuthorInfo author={author} />
      <WorkList works={works} onWorkClick={handleWorkClick} />
      {selectedWork && <WorkInfo work={selectedWork} />}
    </>
  );
};

export default FirstTask;