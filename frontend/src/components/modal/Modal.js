// import React from 'react';

// export const SimpleDialog = ({ open, onClose, title, content }) => {
//   if (!open) return null;

//   const dialogStyle = {
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     backgroundColor: '#FFF',
//     padding: '20px',
//     zIndex: 1000,
//   };

//   const backdropStyle = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0,0,0,0.7)',
//     zIndex: 1000,
//   };

//   return (
//     <>
//       <div style={backdropStyle} onClick={onClose}></div>
//       <div style={dialogStyle}>
//         <h3>{title}</h3>
//         <p>{content}</p>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </>
//   );
// };
