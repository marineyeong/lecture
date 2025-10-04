import List from './List';

export default function Lists({ todoData, setTodoData }) {
  return (
    <div>
      {todoData.map((data) => (
        <List
          id={data.id}
          title={data.title}
          completed={data.completed}
          todoData={todoData}
          setTodoData={setTodoData}
        />
      ))}
    </div>
  );
}
