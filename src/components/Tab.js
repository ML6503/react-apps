import React, { useState } from "react";

export default function Tab({ children }) {
  const [highilightStyle, setHighlightStyle] = useState({
    left: 0,
    opacity: 0
  });

  function moveHighlight(e) {
    // update highliteStyle to move the highlight
    setHighlightStyle({ left: e.nativeEvent.layerX - 150 });
  }

  function hideHighlight(e) {
    setHighlightStyle({
      opacity: 0,
      left: e.nativeEvent.layerX - 150
    });
  }
  return (
    <div className="tab" onMouseMove={moveHighlight} onMouseOut={hideHighlight}>
      <div className="highilight" style={highilightStyle} />
      {children}
    </div>
  );
}
