  
  //Javacript for responsive navigation menu
  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");
  menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");}
  );
  
  // Swiper initialization code
  
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'cube',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  });
  for (let i = 1; i <= 6; i++) {
  document.getElementById(`text${i}`).addEventListener('input', function() {
  generateQRCode(i);
  });
  // Add event listeners for color input fields in the first slide
  document.getElementById('backgroundColor1').addEventListener('input', function() {
  generateQRCode(1);
  });
  document.getElementById('dotsColor1').addEventListener('input', function() {
  generateQRCode(1);
  });
  document.getElementById('cornersSquareColor1').addEventListener('input', function() {
  generateQRCode(1);
  });
  // Add event listener for dotsType select element in the first slide
  document.getElementById('dotsType1').addEventListener('change', function() {
  generateQRCode(1);
  });
  document.getElementById('cornersSquareType1').addEventListener('change', function() {
  generateQRCode(1);
  });
  const qrCodes = {};
  function downloadQRCode(index) {
      if (qrCodes[index]) {
          qrCodes[index].download({
              name: `qr-code-${index}`,
              extension: "png"
          });
      }
  }
  
  function generateQRCode(index) {
      const text = unescape(encodeURIComponent(document.getElementById(`text${index}`).value));
      
      let backgroundColor = "#e9ebee";
      let dotsColor = "#4267b2";
      let cornersSquareColor = "#4267b2";
      let dotsType = "square";
      let cornersSquareType = "dot";
      let dotsGradient = null;
      let image = null;
  
      if (index === 1) {
          backgroundColor = document.getElementById(`backgroundColor${index}`).value;
          dotsColor = document.getElementById(`dotsColor${index}`).value;
          cornersSquareColor = document.getElementById(`cornersSquareColor${index}`).value;
          dotsType = document.getElementById(`dotsType${index}`).value;
          cornersSquareType = document.getElementById(`cornersSquareType${index}`).value;
          if (qrCodes[index]) {
                  qrCodes[index].update({cornersSquareOptions: {type: cornersSquareType}});
              }
          console.log(`cornersSquareType: ${cornersSquareType}`);
  
      } else if (index === 2) {
          backgroundColor = "#fcfffd";
          dotsColor = "#f601d1";
          cornersSquareColor = "#f44d05";
          dotsType = "extra-rounded";
          dotsGradient = {
              type: "linear",
              rotation: 0.5,
              colorStops: [
                  { offset: 0, color: "#f601d1" },
                  { offset: 1, color: "#f44d05" }
              ]
          };
      }
      
      else if (index === 3) {
          backgroundColor = "#f2f1ff";
          dotsColor = "#000000";
          cornersSquareColor = "#134ac8";
          dotsType = "extra-rounded";
          
      }
      else if (index === 4) {
          backgroundColor = "#f2f306";
          dotsColor = "#000000";
          cornersSquareColor = "#d31933";
          dotsType = "dots";
      }
      else if (index === 5) {
          backgroundColor = "#ffffff";
          dotsColor = "#1f91cd";
          cornersSquareColor = "#1f91cd";
          dotsType = "dots";
          cornersSquareType = "extrarounded-";
  
      }
      else if (index === 6) {
          backgroundColor = "#ffffff";
          dotsColor = "#1f91cd";
          cornersSquareColor = "#2d9f4c";
          dotsGradient = {
              type: "linear",
              rotation: 0.5,
              colorStops: [
                  { offset: 0, color: "#2d9f4c" },
                  { offset: 1, color: "#2d9f4c" }
              ]
          };
      }
      
      if (qrCodes[index]) {
  qrCodes[index].update({
      data: text,
      dotsOptions: {
          color: dotsColor,
          type: dotsType
      },
      
      cornersSquareOptions: {
          color: cornersSquareColor,
      },
      backgroundOptions: {
          color: backgroundColor,
      },
  });
  } else {
  const qrCode = new QRCodeStyling({
      width: 200,
      height: 200,
      data: text,
      dotsOptions: {
          color: dotsColor,
          type: dotsType,
          gradient: dotsGradient,
      },
  
      cornersDotOptions: {
          size: 0.5,
          type: dotsType
      },
  
      
      backgroundOptions: {
          color: backgroundColor,
      },
  
      cornersSquareOptions: {
          color: cornersSquareColor,
          type: cornersSquareType,
      },
  
      imageOptions: {
          hideBackgroundDots: true,
          imageSize: 0.4,
          crossOrigin: "anonymous",
          margin: 0,
          source: image
      },
  });
  
  qrCode.append(document.getElementById(`qr-code-container${index}`));
  qrCodes[index] = qrCode;
  }
  }
  }