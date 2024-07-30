<h1>How Does a GPT AI Work?</h1>

<h2>Contents</h2>

[TOC]

## Overview

A Geneartive Pretrained Transformer (GPT), like ChatGPT, works by taking a prompt (often a question) as input, and generating a response (an answer) based on statistical probabilities.

- It is *generative* because it generates some kind of output, like text. 
- It is *petained* because it uses a data model that has been trained through machine learning.
- It is a *transformer* because it uses an Artificial Neural Network (ANN) with a transformer architecture.



## Training an LLM

A GPT AI uses a special kind of database called a Large Language Model (LLM). An LLM is a type of Artifical Neural Network (ANN), more commonly called just a neural network.

### Neural Netowrks

Neural networks are loosely modeled on the way neurons and synapses in the brain work. A neural netowrk can have many (hundereds of billions of inputs and hundreds of thousands of outputs).

![Colored_neural_network](/Users/birdb/Library/CloudStorage/GoogleDrive-birdb@lanecc.edu/My Drive/College/AiTaskforce/Colored_neural_network.svg)

*[By Glosser.ca - Own work, Derivative of File:Artificial neural network.svg, CC BY-SA 3.0](https://commons.wikimedia.org/w/index.php?curid=24913461)*

### Machine Learning

Machine learning is a branch of artificial intelligence and computer science that focuses on the develpment of algorithms that allow a computer to learn from data in a way similar to the way humans learn. 

Here are some characteristics of machine learning:

- It is more efficient than programming.

- It requires large ammounts of data, in the case of LLMs, this is texts (millions of them).
- Statistical relationships between words and the text are represented in the structure of the neural network that is built.
- Training can be:
  - Supervised: data is categorized or labeled in advance by humans.
  - Unsupervised: the program looks for patterns in unlabeled data and does the categorizaiton itself.
  - Reinforcement: training happens through trial and error with some kind of reward for generating desired output

 

## Using an LLM

A GPT chatbot uses the pretrained LLM to predict the most probable output for text input from a user.

The process of generating output is iterative. This is what the chatbot does

1. Based on the prompt, what are the top five most likely candidates for the first word in the response. Pick one randomly.
2. Based on the prompt plus the words in the response so far, what are the five most likely candidates for the next word in the response, pick one randomly.  
   Repeat #2 until there is a low probability of there being a next word.



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png) ](http://creativecommons.org/licenses/by-sa/4.0/)
These notes on GPT AI, written in<time>2024</time> by [Brian Bird](https://profbird.dev), are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

---
