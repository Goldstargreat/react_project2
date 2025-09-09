import React from "react";
import UserInfo from "./UserInfo";
import './Comment.css'
const users = [
    {
        name: "홍금보",
        comment: "날라차기를 합니다.",
        avatarUrl: "https://www.afa-academy.com/wp-content/uploads/2025/01/18th-Sammo-HUNG.jpg "
    },
    {
        name: "견자단",
        comment: "영춘권을 합니다.",
        avatarUrl: "https://cdn.topstarnews.net/news/photo/201804/397809_43372_1513.jpg "
    },
    {
        name: "트럼프",
        comment: "마약선을 폭격한다.",
        avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/1/16/Official_Presidential_Portrait_of_President_Donald_J._Trump_%282025%29.jpg "
    }
];

function Comment() {
    const currentDate = new Date();
    return(
      <div>
          {
              users.map((user) => {
                          return(
                              <div className="comment" >
                                  <UserInfo user = {user}/>
                                  <div className="comment-text">
                                      {user.comment}
                                  </div>
                                  <div className= "comment-date">
                                      {currentDate.toLocaleDateString()}
                                  </div>
                              </div>
                );
            })
          }
      </div>
    );
}

export default Comment;