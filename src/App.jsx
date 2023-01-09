import React,{useState,useEffect,useCallback} from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css'
import { AnswersList, Chats } from './components/index';
import FormDialog from './components/forms/FormDialog';
import { useTour } from '@reactour/tour';
import { Button } from '@material-ui/core';

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataset, setDataset] = useState({});
  const [open, setOpen] = useState(false);
  const { setIsOpen } = useTour();

  const handleOpen = useCallback(() => {
    setOpen(true)
  },[setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false)
  },[setOpen]);

  const addChats = useCallback((chat) => {
    setChats(prevChats => {
      return [...prevChats, chat]
    })
  },[setChats]);


  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    addChats({
      text: defaultDataset[nextQuestionId].question,
      type: "question"
    });
   
    setAnswers(defaultDataset[nextQuestionId].answers)
    setCurrentId(nextQuestionId)
  }

  const selectAnswer = useCallback((selectedAnswer, nextQuestionId) => {
    switch (true) {
      case (nextQuestionId === 'contact'):
      handleOpen();
      break;
      case /https:*/.test(nextQuestionId):
        console.log("リンク")
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_black';
        a.click();
        break;
      default:
        addChats({
          text: selectedAnswer,
          type: 'answer'
        })
        setTimeout(() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]), 500)
        break;
    }
  },[answers]);

  useEffect(() =>{
    displayNextQuestion(currentId,defaultDataset[currentId])
  },[])


  useEffect(() => {
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });

  return (
      <section className="c-section">
          <Button onClick={() => setIsOpen(true)}>ガイド開始！</Button>
          <div className="c-box">
            <Chats chats={chats} />
            <AnswersList answers={answers} select={selectAnswer}/>
            <FormDialog open={open} handleOpen={handleOpen} handleClose={handleClose}/>
          </div>
      </section>
  )
}

export default App;