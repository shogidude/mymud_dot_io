import React from 'react';

// based on https://stackoverflow.com/questions/40515142/how-to-make-a-sticky-footer-in-react

var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "12px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}

var phantom = {
display: 'block',
padding: '12px',
height: '60px',
width: '100%',
}

function PlayFooter({ children }) {
  return (
      <div>
          <div style={phantom} />
          <div style={style}>
              { children }
          </div>
      </div>
  )
}

export default PlayFooter