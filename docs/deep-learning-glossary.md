# Deep Learning Glossary

## Core Concepts
1. Code vs. neural networks Detrministic Functions vs. Probalistic Functions
2. Neural Network
2. Training Weights
3. Error Functions
4. Gradient Decent
5. Testing a Neural Network
6. Types of Neural Networks

## Detailed Concepts
1. Image recognition
2. Digit recognition
3. Image pixels
4. Pixel brightness
5. Grayscale values
6. Neural networks - overall components
7. Input layers
8. Hidden layers
9. Output layers
9. Weights
9. Bias Nodes
11. Counting Parameters
10. activation
11. activation functions
12. probability
13. decomposition
14. training
15. weighted sums
16. normalization
17. the sigmoid function
18. bias
19. parameter counting (sum of weights and bias)
20. vector representations
21. matrix representations
22. linear algebra
23. transformation functions.
1. review of prior video in handwritten digit recognition and the structure of a neural network model
2. the training process
3. labels in the training set
4. generalization
5. test data (what you network has never seen before)
6. testing the precision of test data
7. MNIST training database (LeCun, Cortes, and Burges) [MNIST database](http://yann.lecun.com/exdb/mnist/)
8. Finding minima like in Calculus where the slop is zero
9. Slop of zero is a miniumum of an error
10. Random initialization of weights
11. A cost function - a way of telling a neural network how it can improve
12. Adding the squares of the differences
13. Averaging the cost of the error functions for all input data
14. Finding the lowest cost and minimumization using a 2D visualization
15. Using the slope as a hint on how to adjust the weights
16. The setting slope (derative) to zero to find a minium cost
17. Balls rolling down a hill metaphore and local miniums
18. The role of step size when moving toward a minimum cost
19. Moving to a 2D input model and a 3D error function
20. Gradient function and direction of steepest decent
21. Finding the right downhill direction vector
22. Reference to the backpropagation algorithm (next video)
23. Association of learning to cost function minimumization
24. Why smoothness of a cost function is critical for gradient decent to work and how using decimal values for activation node values is important
25. How our hope of looking for components of a line in each layer didn't work at all
26. The neural network does not "understand" the shape - it can't draw any shape.  There is no interpretpetable knowledge in the individual weights.
27. This is old technology - based on a multi-layer perceptron - we can do better with modern algorithms
28. This primitive approach is "dumb" - but required for us to understand modern variations like CNN and LSTM
