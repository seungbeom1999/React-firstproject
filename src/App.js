import { useState } from "react";
import "./App.css";
function App() {
  // 빈 값 세팅하기
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [list, setList] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      detail: "열심히 하기",
      isDone: false,
    },
  ]);
  // 값 넣기
  const addTitle = (event) => {
    return setTitle(event.target.value);
  };
  const addDetail = (event) => {
    return setDetail(event.target.value);
  };

  const addList = (e) => {
    e.preventDefault();
    const newList = {
      id: crypto.randomUUID(),
      title,
      detail,
      isDone: false,
    };
    setList([...list, newList]);
    setTitle("");
    setDetail("");
  };
  console.log(list);
  // const workingList = list.filter((item) => {
  //   item.isDone === false;
  // });
  // const DoneList = list.filter((item) => {
  //   item.isDone === true;
  // });
  return (
    <>
      <header>
        todo List
        <div>
          제목 : <input value={title} onChange={addTitle} />
          &nbsp; 내용 : &nbsp;
          <input value={detail} onChange={addDetail} /> &nbsp;
          <button onClick={addList}>제출하기</button>
        </div>
      </header>
      <main>
        <h2>Working...</h2>
        <div className="workingList">
          {list.map((item) => {
            return (
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            );
          })}
        </div>
        <h2>Done...</h2>
        <div className="doneList">
          {list.map((item) => {
            return (
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
