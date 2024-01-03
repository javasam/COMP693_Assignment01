import ReactDOM from "express/lib/view.js";
let alice = 'Alice Anderson';
let mason = 'Mason Mitchell';
let hayley = 'Hayley Uncharted';
let omar = 'Omar Sparkle';
let leonard = 'Leonard Stardust';
let athena = 'Athena Prosper';
let klara = 'Klara Orbit';
let henry = 'Henry Swift';
let riley = 'Riley Blaze';
let jasper = 'Jasper Dynamic';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, alice), /*#__PURE__*/React.createElement("li", null, mason), /*#__PURE__*/React.createElement("li", null, hayley), /*#__PURE__*/React.createElement("li", null, omar.toUpperCase()), /*#__PURE__*/React.createElement("li", null, leonard), /*#__PURE__*/React.createElement("li", null, athena), /*#__PURE__*/React.createElement("li", null, klara), /*#__PURE__*/React.createElement("li", null, henry), /*#__PURE__*/React.createElement("li", null, riley), /*#__PURE__*/React.createElement("li", null, jasper));
ReactDOM.render(element, document.getElementById('content'));