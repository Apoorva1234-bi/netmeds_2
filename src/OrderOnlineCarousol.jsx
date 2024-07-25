// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';

// export default function OrderOnlineCarousol(){
//     return(

//         <div>
//  <Carousel data-bs-theme="dark">
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="public\OrderOnline\1.jpg"
//           alt="First slide"
//         />

//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="public\OrderOnline\2.jpg"
//           alt="Second slide"
//         />

//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="public\OrderOnline\3.jpg"

//           alt="Third slide"
//         />

//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="public\OrderOnline\4.jpg"
//           alt="Second slide"
//         />

//       </Carousel.Item>
//     </Carousel>

//     <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="public\OrderOnline\5.jpg"
//           alt="Second slide"
//         />

//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="public\OrderOnline\6.jpg"
//           alt="Second slide"
//         />

//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="public\OrderOnline\7.jpg"
//           alt="Second slide"
//         />

//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="public\OrderOnline\8.jpg"
//           alt="Second slide"
//         />

//       </Carousel.Item>

//         </div>
//     )
// }

import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import one from "../public/OrderOnline/one.jpg";
import two from "../public/OrderOnline/two.jpg";
import three from "../public/OrderOnline/three.jpg";
import four from "../public/OrderOnline/four.jpg";
import five from "../public/OrderOnline/five.gif";
import six from "../public/OrderOnline/six.jpg";
import seven from "../public/OrderOnline/seven.jpg";

function OrderOnlineCarousol() {
  return (
    <div>
      <UncontrolledCarousel
        items={[
          {
            key: 1,
            src: one
          },
          {
            key: 2,
            src: two
          },
          {
            key: 3,
            src: three
          },
          {key: 4,
            src: four},
          {key: 5,
            src: five},
          {key: 6,
            src: six},
            {key: 7,
                src: seven}
        ]}
      />
    </div>
  );
}

export default OrderOnlineCarousol;
