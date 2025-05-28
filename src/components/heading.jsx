import { useState } from "react";
import { MdAddBox } from "react-icons/md";
function Heading({ clickEvent }) {
  const [name, setName] = useState("");
  const [duedate, setDueDate] = useState("");
  const handleOnName = (event) => {
    setName(event.target.value);
  };
  const handleOnDate = (event) => {
    setDueDate(event.target.value);
  };

  const handleOnButtonClikced = () => {
    clickEvent(name, duedate);
    setName("");
    setDueDate("");
  };
  return (
    <div className="container kg-btn">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="enter todo here"
            value={name}
            onChange={handleOnName}
          />
        </div>
        <div className="col-4">
          <input type="date" value={duedate} onChange={handleOnDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success dan"
            onClick={handleOnButtonClikced} //ikkada endhuk function laga pass chestunam manam ah input and date mida depend ayi untam so,ah
            //  arguments ni pass cheyali...uttiga cheste just event print avthadi..
          >
            <MdAddBox />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Heading;
// import { useRef } from "react";
// import { MdAddBox } from "react-icons/md";
//
// function Heading({ clickEvent }) {
// const nameRef = useRef(null);
// const dateRef = useRef(null);
//
// const handleOnButtonClicked = () => {
// const name = nameRef.current.value;
// const duedate = dateRef.current.value;
// clickEvent(name, duedate);
//
// Clear the input fields
// nameRef.current.value = "";
// dateRef.current.value = "";
// };
//
// return (
// <div className="container kg-btn">
{
  /* <div className="row"> */
}
{
  /* <div className="col-6"> */
}
{
  /* <input */
}
// type="text"
// placeholder="enter todo here"
// ref={nameRef}
// />
{
  /* </div> */
}
{
  /* <div className="col-4"> */
}
{
  /* <input */  
}
// type="date"
// ref={dateRef}
// />
{
  /* </div> */
}
{
  /* <div className="col-2"> */
}
{
  /* <button */
}
// type="button"
// className="btn btn-success dan"
// onClick={handleOnButtonClicked}
// >
{
  /* <MdAddBox /> */
}
{
  /* </button> */
}
{
  /* </div> */
}
{
  /* </div> */
}
{
  /* </div> */
}
// );
// }
//
// export default Heading;
//
