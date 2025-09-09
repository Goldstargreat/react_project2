import React from "react";
function Avatar(props) {
    return(
        <img
            className = "avatar"
            src = {props.user.avatarUrl}
        />
    );
}
export default Avatar;