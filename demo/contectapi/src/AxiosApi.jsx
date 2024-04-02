// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// function AxiosApi() {
//   let [photo, setPhoto] = useState([])
//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/photos")
//       .then(data => setPhoto(data.data))
//       .catch(err => console.log(err))
//   }, [])
//   return (
//     <>
//         <h1>USING AXIOS HTTP REQUEST</h1>
//         {
//           photo.map(e=>{
//           return  <div>
//           <img src={e.url} height={"150px"} width={"160px"}/>
//             {/* <p>{e.title}</p>
//             <p>{e.id}</p> */}
//           </div>
//           })
//         }
//     </>
//   )
// }

// export default AxiosApi












import React, { useEffect, useState } from 'react'
import axios from 'axios';

function AxiosApi() {
  const [product, setProduct] = useState([])
  useEffect(() => {

    // fetch("https://dummyapi.online/api/products")
    //   .then(res => res.json())
    //   .then(data => setProduct(data))
    //   .catch(err => console.log(err))

    axios.get("https://dummyapi.online/api/products")
      .then(data => setProduct(data.data))
      .catch(err => console.log(err))

  }, [])
  return (
    <>

      <h1>This is a Product FetchApi</h1>
      {
        product.map(e => {
          return <div>

            <dd>Brand: {e.brand}
              <li>Item Name : {e.name}</li>
              <li>Price: {e.basePrice}</li>
              <img src={e.thumbnailImage} height={"100px"} width={"200px"} />
            </dd>
            <br />

          </div>

        })
      }


    </>
  )
}

export default AxiosApi













