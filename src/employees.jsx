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
const element = (
    <ul style={{'color':'blue', 'fontSize': '24px'}}>
        <li>{alice}</li>
        <li>{mason}</li>
        <li>{hayley}</li>
        <li>{omar.toUpperCase()}</li>
        <li>{leonard}</li>
        <li>{athena}</li>
        <li>{klara}</li>
        <li>{henry}</li>
        <li>{riley}</li>
        <li>{jasper}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))
