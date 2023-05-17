import React from "react";
// import QRCode from "react-qr-code";
import QRCode from "qrcode.react";

import google from './google.png'

const QRGenerator = () => {

    const value = 'Test QR Code';
    const size = 400;

    const qrCodeOptions = {
        width: 300,
        fgColor: "#0e8f07",
        bgColor: "#FFFFFF",
        logoImage: google, 
        logoWidth: 8000,
      };
    
      const imageSettings = {
        src: google, 
        x: null,  
        y: null, 
        height: null, 
        width: null, 
        excavate: true,
      };
      return (
        <div>
          <QRCode size={size} value={value} imageSettings={imageSettings}{...qrCodeOptions} />
        </div>
      );
}

export default QRGenerator;