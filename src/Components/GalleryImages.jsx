// function GalleryImages() {
//   // Array of image URLs
//   const images = [
//     "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?t=st=1715171411~exp=1715175011~hmac=358c4fca484026d1b456b0ad14ccab0a8d2d63e933e8d692e37edfad367b405d&w=740",
//     "image2.jpg",
//     "image3.jpg",
//   ];

//   function openModal(imageUrl) {
//     const modalCheckbox = document.getElementById("my_modal_7");
//     const modalImage = document.querySelector(".modal img");
//     modalImage.src = imageUrl;
//     modalCheckbox.checked = true;
//   }

//   return (
//     <div>
//       <div className="gallery">
//         {images.map((imageUrl, index) => (
//           <img
//             key={index}
//             src={imageUrl}
//             alt={`Image ${index + 1}`}
//             className="gallery-image"
//             onClick={() => openModal(imageUrl)}
//           />
//         ))}
//       </div>

//       {/* Modal */}
//       <input type="checkbox" id="my_modal_7" className="modal-toggle" />
//       <div className="modal" role="dialog">
//         <div className="modal-box">
//           {/* Replace with img tag to display the image */}
//           <img src="" alt="Enlarged Image" />
//         </div>
//         <label className="modal-backdrop" htmlFor="my_modal_7">
//           Close
//         </label>
//       </div>
//     </div>
//   );
// }

// export default GalleryImages;

function GalleryImages() {
  const images = [
    "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?t=st=1715171411~exp=1715175011~hmac=358c4fca484026d1b456b0ad14ccab0a8d2d63e933e8d692e37edfad367b405d&w=740",
    "https://img.freepik.com/free-photo/mixed-fried-meat-with-pomegranate-sauce_140725-3461.jpg?t=st=1715173215~exp=1715176815~hmac=53a51c22ffc81e7eb86748c2a567bb9186a295bf14736172e3f3c9b1e96df3f0&w=740",
    "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481522.jpg?t=st=1715172924~exp=1715176524~hmac=46f8acc7bf871dde1e67b365155765210496cf506a589ce9e264a7647dda6852&w=740",
    "https://img.freepik.com/free-photo/grilled-meat-veggies-wooden-plate-generated-by-ai_188544-10123.jpg?t=st=1715173468~exp=1715177068~hmac=7e209f19dd0071120ca4154149ac2e5c6fcd47ae1a79b032b8c20e7048d5b750&w=740",
    "https://img.freepik.com/free-photo/restaurant-hall-with-bright-color-sitting-furniturs-panoramic-windows_114579-1521.jpg?t=st=1715173998~exp=1715177598~hmac=83854d2b682130bf634e51129658a20e86a39318dbf9310825f7e4fc82a7f672&w=740",
    "https://img.freepik.com/free-photo/pasta-meal-plate-with-eggs-raw-pasta_176474-6898.jpg?t=st=1715173494~exp=1715177094~hmac=59a529a7f289943db3a818f0da78a99749eb1ec14c88e4a6ae937c8c29c78bb7&w=740",
    "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?t=st=1715171411~exp=1715175011~hmac=358c4fca484026d1b456b0ad14ccab0a8d2d63e933e8d692e37edfad367b405d&w=740",
    "https://img.freepik.com/free-photo/grilled-beef-burger-with-fresh-tomato-cheese-salad-generated-by-artificial-intelligence_188544-127596.jpg?t=st=1715173853~exp=1715177453~hmac=b44975b3e4a885c3bfb8dc1315a221c5590cf18d2fd2b8c4038338b2dff5f883&w=740",
    "https://img.freepik.com/free-photo/top-view-fried-chicken-with-variety-three-sauces_23-2148646572.jpg?t=st=1715173693~exp=1715177293~hmac=de5c77c1fec51d2cf724c477b1973dd8f7a8eb47893dd4ec9b816f35f033411b&w=740",
    "https://img.freepik.com/free-photo/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_140725-8504.jpg?t=st=1715173135~exp=1715176735~hmac=e5a4a5623efd74d7f70c9aa32f5811525d07f1abf26f9e6363928344d08ad076&w=740",
    "https://img.freepik.com/free-photo/two-slices-lavash-doner_140725-2329.jpg?t=st=1715173916~exp=1715177516~hmac=44ae5a807de858fcd385a00e0a034da2199fef7f0ed216bd09f9ef481ac0c7a1&w=740",
    "https://img.freepik.com/free-photo/top-view-fried-chicken-with-sauce-french-fries_23-2148646626.jpg?t=st=1715173603~exp=1715177203~hmac=42d0ba19f67dd199502ff39620ce69759d4c99c20a1a960c565be26cf8214893&w=740",
    "https://img.freepik.com/free-photo/plate-food-with-bowl-salad-bowl-salad_1340-25331.jpg?t=st=1715173938~exp=1715177538~hmac=2d0d9794ded1d3899d08a5721e143941f017fc46354b051d9d2e25ffe0e0edfa&w=740",
    "https://img.freepik.com/free-photo/cocktail-wooden-table-restaurant_23-2147936121.jpg?t=st=1715173158~exp=1715176758~hmac=58f631ca064ed870a1a28735a34230428002b3da4b4681b41a4d4ee4dbcb2394&w=740",
    // food
    "https://img.freepik.com/free-photo/grilled-beef-burger-with-fries-cheese-tomato-generative-ai_188544-8466.jpg?t=st=1715173532~exp=1715177132~hmac=9a5a5eb8a82599484b58fd7eef5aae5304fdee01015f93d059ab0da4be6fceab&w=740",
    "https://img.freepik.com/free-photo/restaurant-table-with-two-couches-near-window_140725-8459.jpg?t=st=1715172891~exp=1715176491~hmac=f28c90a293ada1487a99d8f26d779f406b77d59f875d5001752e230fe4f4d4e3&w=740",
    "https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg?t=st=1715173261~exp=1715176861~hmac=bd589684437ff0c7294bf11eb460b3e00b1e32d58e7eace7b5bc96344f5f25b6&w=740",
    "https://img.freepik.com/free-photo/sitting-table-with-chairs-yellow-sofa-restaurant-with-panoramic-view_114579-1523.jpg?t=st=1715172952~exp=1715176552~hmac=a9361bcfa925c6f52410b716013b69308dca7e24f1337df823c0c4aa5733495f&w=740",
    "https://img.freepik.com/free-photo/pasta-meal-plate-with-eggs-raw-pasta_176474-6898.jpg?t=st=1715173494~exp=1715177094~hmac=59a529a7f289943db3a818f0da78a99749eb1ec14c88e4a6ae937c8c29c78bb7&w=740",
    "https://img.freepik.com/free-photo/restaurant-room-with-paintings-walls_140725-6310.jpg?t=st=1715174084~exp=1715177684~hmac=a5cbc9b0d99ad2ec4c7e3ccdd91d2970b7eb8ee60005a9bd996cfd5f55b98a98&w=740",
    "https://img.freepik.com/free-photo/craft-beef-burger-french-fries-wooden-table-melting-chesses-isolated-black-background-ai-generative_157027-1745.jpg?t=st=1715173770~exp=1715177370~hmac=6bfaa910f60cc339af2b128e2de50961b1c8ee81f82958e1a74d00e16216d061&w=740",
    "https://img.freepik.com/free-photo/modern-restaurant-with-various-places_140725-9587.jpg?t=st=1715172988~exp=1715176588~hmac=b4ce893a1e7837f7651be746699eb00c5a29b0536e702828919040b706da107c&w=740",
    "https://img.freepik.com/free-photo/fresh-buffalo-chicken-wings-with-savory-dip-appetizer-generative-ai_188544-8118.jpg?t=st=1715173671~exp=1715177271~hmac=12bceed228a51d6ab23b42633f365e4beb742ec5e82be858c3b98893ccfeb9a5&w=740",
    "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?t=st=1715173726~exp=1715177326~hmac=047f42a85cc409098ed8df5d7690f3b33497f8dc9d7050a7c9791734f3f04002&w=740",
    // Add more image URLs as needed
  ];

  function openModal(imageUrl) {
    const modalCheckbox = document.getElementById("my_modal_7");
    const modalImage = document.querySelector(".modal img");
    modalImage.src = imageUrl;
    modalCheckbox.checked = true;
  }

  return (
    <>
      <h2 className="mb-3 text-3xl font-bold text-center p-10 text-black">
        Gallery
      </h2>
      <div className="pl-8 pr-8 pb-8  grid grid-cols-2  md:grid-cols-4 gap-2 md:gap-4">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="gallery-image  cursor-pointer"
            onClick={() => openModal(imageUrl)}
          />
        ))}

        {/* Modal */}
        <input
          type="checkbox"
          id="my_modal_7"
          className="modal-toggle hidden"
        />
        <div className="modal fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="modal-box bg-gray-300 p-4  rounded-lg">
            {/* Replace with img tag to display the image */}
            <img src="" className="max-h-full h-96 " />
            <label
              className="bg-gray-300 absolute top-0 right-0  text-4xl  cursor-pointer"
              htmlFor="my_modal_7"
            >
              ⨯
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default GalleryImages;
