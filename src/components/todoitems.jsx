import Todo from "./Todo-item";
const TodoItems = ({ items, onDelete }) => {
  return (
    <div className="items-container">
      {items.map((item) => (
        <Todo
          todoName={item.name}
          todoDate={item.duedate}
          key={`${item.name}-${item.duedate}`}
          onDeleteClick={onDelete}
        >
          {" "}
          // Ensure unique key
        </Todo>
      ))}
    </div>
  );
};
export default TodoItems;
