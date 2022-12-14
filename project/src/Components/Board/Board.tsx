import React, { useEffect, useState } from "react";
import { MoreHorizontal } from "react-feather";

import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import CustomInput from "../CustomInput/CustomInput";

import "./Board.css";
import { IBoard, ICard } from "../../Interfaces/Kanban";

interface BoardProps {
  autor: string;
  board: IBoard;
  addCard: (boardId: number, title: string) => void;
  removeBoard: (boardId: number) => void;
  removeCard: (boardId: number, cardId: number) => void;
  onDragEnd: (boardId: number, cardId: number) => void;
  onDragEnter: (boardId: number, cardId: number) => void;
  updateCard: (boardId: number, cardId: number, card: ICard) => void;
  updateBoard: (boards: any) => void;
}

function Board(props: BoardProps) {
  const {
    board,
    addCard,
    removeBoard,
    removeCard,
    onDragEnd,
    onDragEnter,
    updateCard,
    autor,
    updateBoard,
  } = props;
  const [showDropdown, setShowDropdown] = useState(false);

  // my notes

  const [valueTitle, setValueTitle] = useState(false);
  const [inputValueTitle, setInputValueTitle] = useState('');


  const [titleName, setTitleName] = useState(board.title)




  const returnInputValueTitle = (event: any) => {
    setInputValueTitle(event.target.value);
  }

  const setNewTitleName = (value: string) => {
    setValueTitle(!valueTitle)
    board.title = inputValueTitle
    setTitleName(inputValueTitle);
  }
  useEffect(() => {
    updateBoard(board)
  }, [board.title])


  // const setNewTitleName = (value: string) => {
  //   setValueTitle(!valueTitle)
  //   setTitleName(inputValueTitle)

  // }
  const changeTitile: any = <div className="container__mutable-value">
    <input
      defaultValue={inputValueTitle}
      onChange={(event) => returnInputValueTitle(event)}
      type="text"
      className='mutable-value' />
    <button onClick={() => setNewTitleName(inputValueTitle)} className='mutable-inputBtn'>Change
      Title</button>
  </div >;
  const dopMenu = () => {
    setShowDropdown(true);
    setValueTitle(!valueTitle)
  }




  return (
    //   <Droppable droppableId={props.droppableId}>
    //   {(provided: any) => (
    //     <div className={props.className}
    //           ref={provided.innerRef}
    //           {...provided.droppableProps}
    //           {...provided.droppablePlaceholder}>
    //             {props.children}
    //     </div>
    //   )}
    // </Droppable>
    <div
      className="board"

    >
      <div className="board-inner" key={board?.id}>
        <div className="board-header">
          <p className="board-header-title">
            {valueTitle ? changeTitile : titleName}
            <span>{board?.cards?.length || 0}</span>
          </p>
          <div
            className="board-header-title-more"
            onClick={() => dopMenu()}
          >
            <MoreHorizontal />
            {showDropdown && (
              <Dropdown
                class="board-dropdown"
                onClose={() => setShowDropdown(false)}
              >
                <p onClick={() => removeBoard(board?.id)}>Delete Board</p>
              </Dropdown>
            )}
          </div>
        </div>
        <div className="board-cards custom-scroll">
          {board?.cards?.map((item) => (
            <Card
              key={item.id}
              card={item}
              boardId={board.id}
              removeCard={removeCard}
              onDragEnter={onDragEnter}
              onDragEnd={onDragEnd}
              updateCard={updateCard}
              autor={autor}
            />
          ))}
          <CustomInput
            text="+ Add Card"
            placeholder="Enter Card Title"
            displayClass="board-add-card"
            editClass="board-add-card-edit"
            onSubmit={(value: string) => addCard(board?.id, value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Board;
