   // Re-measure the payment iframe height once the card fields are ready (Safari)
   export function resizePaymentFrame(frame) {
     frame.style.height = frame.contentWindow.document.body.scrollHeight + "px";
   }
