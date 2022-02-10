import {CanvasJSChart} from 'canvasjs-react-charts'

const options = {
  theme: "dark2",
  animationEnabled: true,
  exportFileName: "New Year Resolutions",
  title:{
    text: "TOKENOMICS", 
    fontWeight: "bolder",
    fontColor: "#008B8B",
    fontFamily: "tahoma",        
    
    fontSize: 50,
    padding: 10        
  },
  legend:{
    fontSize: 20,
  },
  height:800,
  backgroundColor: "transparent",
  data: [{
    type: "doughnut",
    // type: "pie",
    showInLegend: false,
    legendText: "{label}",
    toolTipContent: "{label}: <strong>{y}%</strong>",
    indexLabel: "{y}%",
    indexLabelPlacement: "outside",
    dataPoints: [
      { y: 10, label: "TAX" },
      { y: 55, label: "TEAM" },
      { y: 5, label: "MARKETING WALLET" },
      { y: 10, label: "DEV WALLET" },
      { y: 8, label: "PRIVATE PRESALE" },
      { y: 12, label: "PUBLIC PRESALE" }
    ]
  }]
}
export default function HeaderComponent() {
  return (
		<div>
			<CanvasJSChart options = {options}
			/>
		</div>
  )
}