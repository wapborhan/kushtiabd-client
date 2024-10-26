import QuestCard from "./QuestCard";

const QuestAns = () => {
  const quest = [
    { id: 1 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];
  return (
    <>
      <div className="search">Serch</div>
      <div className="questlist mt-5 shadow-md m-5 border-2 border-primary">
        {quest.map(({ id }) => {
          return <QuestCard key={id} />;
        })}
      </div>
    </>
  );
};

export default QuestAns;
