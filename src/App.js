import React, { Component } from 'react';
import './App.css';
import CanvasJSReact from './assets/canvasjs.react';
//var CanvasJSReact = require('./assets/canvasjs.react');
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {	
  render() {
    const options = {
      title: {
        text: "Basic Column Chart in React"
      },
      data: [{				
                type: "column",
                dataPoints: [
                    { label: "Apple",  y: 10  },
                    { label: "Orange", y: 15  },
                    { label: "Banana", y: 25  },
                    { label: "Mango",  y: 30  },
                    { label: "Grape",  y: 28  },
                    { label: "Strawberry",  y: 21 },
                    { label: "Lemon",  y: 51 },
                    { label: "Jaca",  y: 18 },
                    { label: "Uva",  y: 24 },
                    { label: "Melancia",  y: 81 },
                    { label: "Maracujá",  y: 28 },
                    { label: "Romã",  y: 8 },
                    { label: "Jabuticaba",  y: 42 }
                ]
       }]
   }
		
   return (
      <div>
        <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
      </div>
    );
  }
}

export default App;
