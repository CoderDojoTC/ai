function setup() {
    const canvas = createCanvas(400, 300);
    canvas.parent('canvas-container');
    background(255);
    strokeWeight(2);
    
    // Draw Nodes
    // Input Layer
    drawNodes(width * 0.2, height / 2, 4, "Input");
    
    // Hidden Layer
    drawNodes(width * 0.5, height / 2, 3, "Hidden");
    
    // Output Layer
    drawNodes(width * 0.8, height / 2, 2, "Output");
    
    // Draw Edges
    // Between Input and Hidden
    connectLayers(width * 0.2, height / 2, 4, width * 0.5, height / 2, 3);
    
    // Between Hidden and Output
    connectLayers(width * 0.5, height / 2, 3, width * 0.8, height / 2, 2);
  }
  
  function drawNodes(x, y, numNodes, label) {
    let gap = 40; // vertical gap between nodes
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
  