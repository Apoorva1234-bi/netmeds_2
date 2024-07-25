// import React from "react";
// import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";
// import himalaya from "../public/OrderOnline/himalaya.jpg";
// import dabur from "../public/OrderOnline/dabur.jpg";
// import digene from "../public/OrderOnline/digene.jpg";
// import Beardo from "";
// import Drema  from "";
// import Gillette from "";
// import Mcaffeine from "";
// import Pilgrim from "";
// import TheManCompany from "";
// import Wishcare from "g";
// import Zlade from "";


// function BannerCarousel() {
//   return (
//     <div className="MainBannerCarousel">
//       <Container fluid>
//         <Row>
//           <Col>
//             <UncontrolledCarousel
//               items={[
//                 {
//                   key: 1,
//                   src: himalaya,
//                   caption:himalaya
//                 },
//                 {
//                   key: 2,
//                   src: dabur
//                 },
//                 {
//                   key:3 ,
//                   src:digene
//                 }

//                 // {
//                 //   key: 4,
//                 //   src:Beardo
//                 // },

//                 // {
//                 //   key:5 ,
//                 //   src:Drema
//                 // },

//                 // {
//                 //   key: 6,
//                 //   src:Gillette
//                 // },

//                 // {
//                 //   key: 7,
//                 //   src:Mcaffeine
//                 // },

//                 // {
//                 //   key:8 ,
//                 //   src:Pilgrim
//                 // },

//                 // {
//                 //   key: 9,
//                 //   src:TheManCompany
//                 // },

//                 // {
//                 //   key: 10,
//                 //   src:Wishcare
//                 // },

//                 // {
//                 //   key: 11,
//                 //   src:Zlade
//                 // }
//               ]}
//             />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   )

// }

// export default BannerCarousel;


// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// const CardSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const cards = [
//     { name: 'himalaya', image: 'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/himalaya.jpg?v=14' },
//     { name: 'dabur', image: 'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dabur.jpg?v=14' },
//     { name: 'digene', image: 'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/digene.jpg?v=14' },
//     { name: 'inlife', image: 'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/inlife.jpg?v=14' },
//     { name: 'GNC', image: 'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/gnc.jpg?v=14' },
//     {name:'Fast-up', image:'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/fast-up.jpg?v=14'},
//     {name:'HeartKart', image:'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/healthkart.jpg?v=14'}
   
//   ];

//   return (
//     <Slider {...settings}>
//       {cards.map((card, index) => (
//         <div key={index}>
//           <div style={{ padding: '8px' }}>
//             <img src={card.image} alt={card.name} style={{ width: '50%' }} />
//             <h3 style={{ textAlign: 'center' }}>{card.name}</h3>
//           </div>
//         </div>
//       ))}
//     </Slider>
//   );
// }

// export default CardSlider;




// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// const CardSlider = () => {
//   const settings = {
 
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,  // Number of cards to show at once
//     slidesToScroll: 1,  // Number of cards to scroll at a time
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const cards = [
//     { name: 'himalaya', image: 'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/himalaya.jpg?v=14' },
//         { name: 'dabur', image: 'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dabur.jpg?v=14' },
//         { name: 'digene', image: 'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/digene.jpg?v=14' },
//         { name: 'inlife', image: 'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/inlife.jpg?v=14' },
//         { name: 'GNC', image: 'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/gnc.jpg?v=14' },
//         {name:'Fast-up', image:'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/fast-up.jpg?v=14'},
//         {name:'HeartKart', image:'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/healthkart.jpg?v=14'}
 
//   ];

//   return (
//     <Slider {...settings}>
//       {cards.map((card, index) => (
//         <div key={index}>
//           <div style={{ padding: '10px' }}>
//             <img src={card.image} alt={card.name} style={{ width: '100%' }} />
//             <h3 style={{ textAlign: 'center' }}>{card.name}</h3>
//           </div>
//         </div>
//       ))}
//     </Slider>
//   );
// }

// export default CardSlider;





import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  const settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    { name: 'himalaya', image: 'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/himalaya.jpg?v=14' },
    { name: 'dabur', image: 'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dabur.jpg?v=14' },
    { name: 'digene', image: 'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/digene.jpg?v=14' },
    { name: 'inlife', image: 'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/inlife.jpg?v=14' },
    { name: 'GNC', image: 'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/gnc.jpg?v=14' },
    {name:'Fast-up', image:'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/fast-up.jpg?v=14'},
    {name:'HeartKart', image:'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/healthkart.jpg?v=14'}
    // Add more cards as needed
  ];

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index} style={{ padding: '10px' }}>
          <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
            <img src={card.image} alt={card.name} style={{ width: '100%', borderRadius: '5px' }} />
            <h3 style={{ margin: '10px 0 0', fontSize: '16px' }}>{card.name}</h3>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default CardSlider;