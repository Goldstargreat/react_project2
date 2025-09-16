import React from "react";

const reservedNotifications = [
    {
        id: 1,
        message: "Hello! Today's Schedule."
    },
    {
        id: 2,
        message: "웹 프로그래밍 응용 수업에 집중해주세요."
    },
    {
        id: 3,
        message: "GIT에 COMMIT하고 수업을 마치겠습니다."
    }

];

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        notifications: []
        }
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
        return(
            <div>

            </div>
        );
    }
}
export default NotificationList;