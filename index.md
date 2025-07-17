// display raact elemnts
import React from "react";

const Mock = () => {
return React.createElement(
"p",
{ style: { color: "blue" } },
"The answer is Malla Reddy College"
);
};

const App = () => {
return React.createElement(
"div",
null,
React.createElement("h1", { style: { color: "red" } }, "Welcome to Naik"),
React.createElement(Mock)
);
};

export default App;
//props
import React from "react";
import Student from "./student";
import Training from "./training";

const App = () => {
return (

<div>
<Student data={{ name: "narasimha" }} />
<Student
data={{ name: "naik", age: "20", collage: "mrcet", branch: "cse-G" }}
/>
<Training data={{ course: "full stack developer" }} />
</div>
);
};

export default App;
//traning comp
import React from "react";

const training = (props) => {
return (

<div>
<p>{props.data.course}</p>
</div>
);
};

export default training;
//student comp
import React from "react";

const Student = (props) => {
const { name, age, collage, branch } = props.data || {};
return (

<div>
<h1>{name}</h1>
{age && <p>Age: {age}</p>}
{collage && <p>collage: {collage}</p>}
{branch && <p>branch: {branch}</p>}
</div>
);
};

export default Student;

const sum = (a, b) => {
return a + b;
};

console.log(sum(2, 3)); // 5
//app.js props

import React from "react";
import Mango from "./mango";
import "./mango.css";

const mangoData = [
{
image: "./3d.jpg",
intro: "This is a mango",
name: "Alphonso Mango",
price: 299,
},
{
image: "./3d.jpg",
intro: "Sweet and juicy",
name: "Kesar Mango",
price: 249,
},
{
image: "./3d.jpg",
intro: "Perfect for smoothies",
name: "Totapuri Mango",
price: 199,
},
{
image: "./3d.jpg",
intro: "Aromatic and rich",
name: "Langra Mango",
price: 279,
},
{
image: "./3d.jpg",
intro: "King of mangoes",
name: "Badami Mango",
price: 259,
},
{
image: "./3d.jpg",
intro: "Fiberless delight",
name: "Himsagar Mango",
price: 239,
},
{
image: "./3d.jpg",
intro: "Seasonal favorite",
name: "Neelam Mango",
price: 229,
},
{
image: "./3d.jpg",
intro: "Juicy treat",
name: "Dasheri Mango",
price: 219,
},
{
image: "./3d.jpg",
intro: "Delightful flavor",
name: "Banganapalli Mango",
price: 269,
},
];

const App = () => {
return (

<div>
<h2 className="mango-heading">Mango Universe</h2>
<Mango mangoList={mangoData} />
</div>
);
};

export default App;
//mango.js
import React from "react";
import "./mango.css";

const Mango = ({ mangoList }) => {
return (

<div className="mango-grid">
{mangoList.map((mango, index) => (
<div className="mango-card" key={index}>
<img src={mango.image} alt={mango.name} />
<h3>{mango.name}</h3>
<p>{mango.intro}</p>
<p>₹{mango.price}</p>
</div>
))}
</div>
);
};

export default Mango;
//mango.css
.mango-grid {
display: grid;
grid-template-columns: repeat(3, 1fr); /_ 3 horizontal (columns) _/
grid-auto-rows: auto; /_ auto row height _/
gap: 20px;
padding: 20px;
justify-items: center;
justify-content: center;
}

.mango-card {
background-color: #fff;
padding: 10px;
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
text-align: center;
width: 200px;
}

.mango-card img {
width: 100%;
height: 200px;
object-fit: cover;
border-radius: 8px;
}
.mango-container {
display: flex;
flex-wrap: wrap; /_ allow wrapping if screen is small _/
gap: 20px;
justify-content: center; /_ center the items _/
padding: 20px;
}

.mango-card {
background-color: #fff8e1;
border-radius: 10px;
padding: 15px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
width: 220px;
text-align: center;
transition: transform 0.2s ease;
}

.mango-card:hover {
transform: scale(1.05);
}

.mango-card img {
border-radius: 8px;
width: 100%;
height: 200px;
object-fit: cover;
}
.mango-heading {
background-color: #ffcc80;
color: #4e342e;
font-size: 28px;
margin: 0;
padding: 15px 0;
text-align: center; /_ center the text _/
width: 100%; /_ full width _/
box-sizing: border-box; /_ include padding in width _/
font-family: "Segoe UI", sans-serif;
}
//student map.stundent
import React from "react";

const Student = ({ studentd }) => {
if (studentd.yearsofjoining === 2019 && studentd.yearsofpassout === 2018) {
return <h1>{studentd.name} passed within the time period</h1>;
} else {
return <h1>{studentd.name} did not pass within the time period</h1>;
}
};

export default Student;
//app.js map
import React from "react";
import Student from "./student";

const studentd = [
{
name: "naik",
course: "cse",
yearsofjoining: 2019,
yearsofpassout: 2012,
},
{
name: "kittu",
course: "mca",
yearsofjoining: 2019,
yearsofpassout: 2012,
},
{
name: "sai",
course: "ece",
yearsofjoining: 2019,
yearsofpassout: 2012,
},
{
name: "rahul",
course: "eee",
yearsofjoining: 2019,
yearsofpassout: 2012,
},
];

function App() {
return (

<div>
{studentd.map((studentd) => (
<Student studentd={studentd} />
))}
</div>
);
}

export default App;
//app.js product
import React from "react";
import Product from "./product";

const productd = [
{
name: "laptop",
price: "300",
},

{
name: "mobile",
price: "200",
},

{
name: "earphones",
price: "399",
},

{
name: "watches",
price: "400",
},
];

function App() {
return (

<div>
{productd.map((productd) => (
<Product name={productd.name} price={productd.price} />
))}
</div>
);
}

export default App;
//product.js
function product({ name, price }) {
return (

<div>
<h1>{name}</h1>
<p>price:{price}</p>
</div>
);
}

export default product;
//usestates
import React from "react";
import { useState } from "react";

const Counter = () => {
let [count, setCounter] = useState(0);
console.log(count);
const incrementEvent = () => {
setCounter(count + 1);
console.log(count);
};
const decrementEvent = () => {
setCounter(count - 1);
console.log(count);
};

return (
<React.Fragment>
<button onClick={incrementEvent}>+</button>

<div id="root">{count}</div>
<button onClick={decrementEvent}>-</button>
</React.Fragment>
);
};

export default Counter;
//app.js usestats
import React from "react";
import Counter from "./Counter";
import "./Counter.css";

const App = () => {
return <Counter />;
};

export default App;
