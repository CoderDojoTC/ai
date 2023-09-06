let numLayersSlider;
let numNeuronsSlider;
let parameterCount = 0;

let numLayers = 3;  // Default number of layers (including Input and Output)
let numNeurons = 4; // Default number of neurons in each layer

function setup() {
  createCanvas(800, 400);
  background(255);
  
  numLayersSlider = createSlider(2, 5, 3);
  numLayersSlider.position(10, 10);
  numLayersSlider.input(updateNetwork);
  
  numNeuronsSlider = createSlider(2, 10, 4);
  numNeuronsSlider.position(10, 40);
  numNeuronsSlider.input(updateNetwork);
  
  updateNetwork();
}

function updateNetwork() {
  background(255);
  
  numLayers = numLayersSlider.value();
  numNeurons = numNeuronsSlider.value();
  
  let layerPositions = Array.from({length: numLayers}, (_, i) => map(i, 0, numLayers - 1, 0.2, 0.8) * width);
  
  parameterCount = 0;
  
  for (let i = 0; i < layerPositions.length; i++) {
    let label = "Hidden";
    if (i === 0) label = "Input";
    else if (i === layerPositions.length - 1) label = "Output";
    
    drawNodes(layerPositions[i], height / 2, numNeurons, label);
  }
  
  for (let i = 0; i < layerPositions.length - 1; i++) {
    connectLayers(layerPositions[i], height / 2, numNeurons, layerPositions[i + 1], height / 2, numNeurons);
    parameterCount += numNeurons * numNeurons; // Adding weights
  }
  
  parameterCount += (numLayers - 1) * numNeurons; // Adding biases
  
  // Show labels and parameter count
  textSize(16);
  textAlign(LEFT, CENTER);
  text('Number of Layers:', numLayersSlider.x * 1.5, numLayersSlider.y);
  text('Number of Neurons:', numNeuronsSlider.x * 1.5, numNeuronsSlider.y);
  textAlign(CENTER, CENTER);
  text('Total Parameter Count: ' + parameterCount, width / 2, height - 20);
}

function drawNodes(x, y, numNodes, label) {
  let gap = 40;
  let startY = y - ((numNodes - 1) * gap) / 2;
  for (let i = 0; i < numNodes; i++) {
    ellipse(x, startY + i * gap, 20, 20);
  }
  textSize(16);
  textAlign(CENTER, CENTER);
  text(label, x, y + ((numNodes + 1) * gap) / 2);
}

function connectLayers(x1, y1, numNodes1, x2, y2, numNodes2) {
  let gap1 = 40;
  let gap2 = 40;
  let startY1 = y1 - ((numNodes1 - 1) * gap1) / 2;
  let startY2 = y2 - ((numNodes2 - 1) * gap2) / 2;
  for (let i = 0; i < numNodes1; i++) {
    for (let j = 0; j < numNodes2; j++) {
      line(x1, startY1 + i * gap1, x2, startY2 + j * gap2);
    }
  }
}
