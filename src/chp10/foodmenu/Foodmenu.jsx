import React from "react";
import './foodmenu.css';
import img1 from './pic/bibimbap.jpg';
import img2 from './pic/ramen.jpg';
import img3 from './pic/pizza.jpg';
import img4 from './pic/salad.jpg';
import img5 from './pic/sushi.jpg';
import img6 from './pic/steak.jpg';
import img7 from './pic/tteokbokki.jpg';
import img8 from './pic/hamburger.jpg';

const menus = [
    { id: 1, name: "비빔밥", category: "한식", price: "8,000원", pic: img1 },
    { id: 2, name: "라멘", category: "일식", price: "9,500원", pic: img2 },
    { id: 3, name: "피자", category: "양식", price: "15,000원", pic: img3 },
    { id: 4, name: "샐러드", category: "건강식", price: "7,000원", pic: img4 },
    { id: 5, name: "스시", category: "일식", price: "12,000원", pic: img5 },
    { id: 6, name: "스테이크", category: "양식", price: "23,000원", pic: img6 },
    { id: 7, name: "떡볶이", category: "분식", price: "5,000원", pic: img7 },
    { id: 8, name: "햄버거", category: "패스트푸드", price: "6,500원", pic: img8 },
];

function Foodmenu() {
    return (
        <div className="menu-container">
            <h2 className="menu-title">🍽️ 오늘의 음식 메뉴 🍽️</h2>
            <div className="card-container">
                {menus.map((menu) => (
                    <div key={menu.id}>
                        <img src={menu.pic} alt={menu.name} className="menu-img" />
                        <div className="menu-info">
                            <h3>{menu.name}</h3>
                            <p>{menu.category}</p>
                            <p className="menu-price">{menu.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}
export default Foodmenu;
