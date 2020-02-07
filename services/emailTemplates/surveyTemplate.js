module.exports = question => {
  // return `
  // <html>
  //   <body>
  //     <div style="text-align: center">
  //       <h1>Help us improve!</h1>
  //       <p>${question}</p>
  //       <a href="https://localhost:3000">Yes</a>
  //       <a href="https://localhost:3000">No</a>
  //     </div>
  //   </body>
  // </html>

  // `;
  return `
    <div style="text-align: center">
      <h1>Help us improve!</h1>
      <p>${question}</p>
      <a href="https://localhost:3000">Yes</a>
      <a href="https://localhost:3000">No</a>
    </div>
  `;
};
