# Resources for teaching AI to Students Ages 8-18
We aspire to have a collection of AI activities for students
that are both safe and fun.  There are many AI demos available
but many of them are trained on a wide range of data that could
include adult content.  So we need to be cautious before we recomend
a specific site.

With that said, here are some demonstrations that can be both safe and
fun.  We hope you will try them out and let us know what activities are
useful in your mentoring and classrooms.

#### Quickdraw (with Google)
This fun game challenges kids to draw a picure of a named item.  The students
have 20 seconds to draw the item.  As they draw the computer says "I see X"
or "I see Y".  If the computer guesses correctly you go on to the next item.
You get six items in a session.  Sample items are cup, clock, cellphone, lighthouse, bear etc.
[QuickDraw](https://quickdraw.withgoogle.com/)

#### Teachable Machine
This Google site is a great way to teach simple machine learning to students.
Although it works on images and sounds, we use it mostly in the image mode.
The site assumes you have a web camera and can hold items up to the camera for
gathering training images.  Students can hold up apple, a cell phone and
a book and see if the computer can learn the images and then classify a new
image.
[Teachable Machine](https://teachablemachine.withgoogle.com)

#### Google Tensorflow Playground
This site is excellent for helping you visualize
how neural networks classify object.  The interactive
tool allows you to change the number of neurons and
layers in a neural network and see how these changes
impact a simple classifier.
[Google Tensorflow Playground](http://playground.tensorflow.org/)

#### AI and Ethics for Middle School
This is a cirriculum designed by MIT professor Blakeley H. Payne.
The cirriculum focuses on topics such as training, classification and bias.
<br/>
[AI for Middle School (Course Description()](https://www.media.mit.edu/projects/ai-ethics-for-middle-school/overview/)
<br/>
[AI for Middle School (Google Docs)](https://docs.google.com/document/d/1e9wx9oBg7CR0s5O7YnYHVmX7H7pnITfoDxNdrSGkp60/edit#heading=h.ictx1ljsx0z4)

#### Chatbots for Kids
Chatbots can be fun, but there are many concerns about chatbots with feedback that
generate bias and adult content.  Althogh we recomend adult supervision for all chatbots, here is one that is relativly benign.
https://www.pandorabots.com/mitsuku/

If you are interested in writing your own chatbot for a classroom activity, here are some guildlines:
[Chatbot Design for Kids](https://www.invisionapp.com/inside-design/chatbot-design-kids/)

#### Story Generation
We are continually looking for a kid safe version of an AI story generator.  If you have students that are 18 or older than you might try the Talk to Transformer
demonstration.  Since a small percent of their traning set is fan fiction that does
have adult content, please be careful.
[Talk to Transformer (the free version currently shut down)](http://talktotransformer.com)

#### Teaching AI Book
This book is written from the perspective of a teacher without a strong
background in AI.  It includes many useful references.
[Teaching AI: Exploring New Frontiers for Learning by Michelle Zimmerman](https://id.iste.org/resources/product?id=4209&format=Book&name=Teaching+AI)

#### Conversational AI
Both chatbots and Alexa apps (called "skills") are examples of conversational AI.
Designing AI for the classroom is currently difficult.
[Amazon Alexa Confersational AI](https://developer.amazon.com/en-US/alexa/alexa-skills-kit/conversational-ai)

## Deep Learning Videos

### The 3Blue 1 Brown Series by Grant Sanderson
This series has some of the best video production value of all the intoductary videos
on deep learning.  
It is part of the high quality [Three Blue One Brown series](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) set of videos done by [Grant Sanderson](https://www.3blue1brown.com/about) of Stanford University and the Kahn Academy.  The videos include many animated visual explainations that use both motion and color to describe mathematics.

#### What is a neural network?
The example used is the popular MNIST hand written digit recognition example.  What we call the "Hello world" of AI.  It walks though the process of representing digits in a 28X28 matrix of values for each digit and passing the images through a deep learing neural network.
This video covers the concepts of

1. image recognition
2. digit recognition
3. image pixels
4. pixel brightness
5. grayscale values
6. neural networks
7. input layers
8. hidden layers
9. output layers
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

At the end they also add a footnote on how ReLU is more common than Sibmoid.
[What is a neural network?]
https://www.youtube.com/watch?time_continue=5&v=aircAruvnKk&feature=emb_logo

#### Gradient descent, how neural networks learn
This is the second video.  It includes concepts such as

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

#### References from videos:
[Neural Networks and Deep Learning by Michael Nielsen]
(http://neuralnetworksanddeeplearning.com/) this is a free online book.  Michael's strategy is to promote a deep understanding of the core concepts and their relationships rather than memorizing a shallow defintions of hundreds of terms.


[CS231n](http://cs231n.stanford.edu/slides/2017/cs231n_2017_lecture1.pdf)
[video](https://www.youtube.com/watch?v=vT1JzLTH4G4)
