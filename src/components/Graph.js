import React from 'react'
import CanvasJSReact from "../canvas/canvasjs.react"
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Graph = ({x_label,y_label,x_coordinates,y_coordinates}) => {
    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year ;
        return time;
      }
    var data=[]
    x_coordinates.map((x, i) =>data.push({label: timeConverter(x),y: Math.round(y_coordinates[i] * 100) / 100}))
    console.log(data)
    var d = new Date();
    d.setDate(d.getDate() - x_label);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title:{
            text: "Chart showing "+y_label+" reports from "+d.getDate()+"/"+d.getMonth()+ 1 +"/"+d.getFullYear()+" to "+today
        },
        axisY: {
            includeZero: true
        },
        data: [{
            type: "column", 
            indexLabel: "{y}",
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: data
        }]
    }
    return (
        <div>
            <CanvasJSChart options = {options} />
        </div>
    )
}

export default Graph
