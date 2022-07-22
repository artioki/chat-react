import ChatFixed, {createMessage} from "./components/ChatFixed/ChatFixed";
import {useState} from "react";



function App() {

  const onClick = (numberButoon) =>{
    let message = `вы нажали на кнопку:${numberButoon}`
    return createMessage(numberButoon,(<p>{message}</p>),undefined)
  }
  const [messeges, setMesseges] = useState(
    [
      {key:2,message:
          <>
            <h1>
              Здравствуйте
            </h1>
            <p>
              Сотрудники службы поддержки mos.ru ответят на вопросы о работе портала, окажут помощь в получении госуслуг и поиске информации
            </p>
          </>
      },
      {key:3,message:
          <>
            <button onClick={()=>setMesseges((state) => [...state,onClick(1)])}> кнопка1 </button>
            <button onClick={()=>setMesseges((state) => [...state,onClick(2)])}> кнопка2 </button>
            <button onClick={()=>setMesseges((state) => [...state,onClick(3)])}> кнопка3 </button>
          </>
      },
      {key:1,message:"Бродит, говорят, по зоне ходячая " +
          "аномалия — непьющий и некурящий сталкер. Приманивается на запах молочка или " +
          "манной каши. Способ дистанционного обнаружения — на расстоянии 200 метров от объекта " +
          "счетчик Гейгера зашкаливает.",you:false},
    ]);
  const inputCallback = (element)=>{
    setMesseges(
      [...messeges,{message:element.current.value,you:true}]
    )
  }
  return (
    <ChatFixed submitCallback={inputCallback} messeges={messeges}/>
  );
}

export default App;
