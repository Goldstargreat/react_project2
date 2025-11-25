import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import WelcomDialog from "./chp13/ex01/WelcomDialog";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <div>
            {/* 첫 번째 다이얼로그 */}
            <WelcomDialog
                title="어서오세요 (첫 번째)"
                message="우리 사이트에 방문하신 것을 환영합니다."
            />
            {/* 두 번째 다이얼로그 */}
            <WelcomDialog
                title="알림 (두 번째)"
                message="오늘의 새로운 소식을 확인해 보세요."
            />
            {/* 세 번째 다이얼로그 */}
            <WelcomDialog
                title="감사합니다! (세 번째)"
                message="다음에 또 방문해주세요!"
            />
        </div>
    </React.StrictMode>
);

reportWebVitals();
