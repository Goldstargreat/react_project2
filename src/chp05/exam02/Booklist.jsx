import React from "react";
import Book from "./Book";
import './Booklist.css'

const books = [
    {
        title: "소플의 처음 만난 리액트",
        author: "이인제",
        coverImage: "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791169211697.jpg"
    },
    {
        title: "孫子兵法",
        author: "손자",
        coverImage: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791170612162.jpg"
    },
    {
        title: "And then There were none",
        author: "아가사 크리스티",
        coverImage: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9788960177758.jpg"
    }
];

function Booklist(){
    return(
      <div className={"bookListWrapper"}>
          {
              books.map((book) => {
                  return(
                      <Book
                            title={book.title}
                            author={book.author}
                            coverImage={book.coverImage}
                      />
                  )
              })

          }
      </div>
    );

}



export default Booklist;