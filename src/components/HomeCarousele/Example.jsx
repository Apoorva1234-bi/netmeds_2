import React from 'react';

const data = [
    { id: "1", img: "../../assets/Images/homePage/img1.jpg" },
    { id: "2", img: "../../assets/Images/homePage/img2.jpg" },
    { id: "3", img: "../../assets/Images/homePage/img3.jpg" },
    { id: "4", img: "../../assets/Images/homePage/img4.jpg" },
    { id: "5", img: "../../assets/Images/homePage/img5.jpg" },
    { id: "6", img: "../../assets/Images/homePage/img6.gif" },
    { id: "7", img: "../../assets/Images/homePage/img7.jpg" },
    { id: "8", img: "../../assets/Images/homePage/img8.jpg" },
];

const Example= () => (
    <div>
        {data.map(item => (
            <img key={item.id} src={item.img} alt={`Image ${item.id}`} />
        ))}
    </div>
);

export default Example;
