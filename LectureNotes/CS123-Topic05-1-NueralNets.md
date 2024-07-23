---
title: Neural Nets
description: Artificial Neural Networks
keywords: AI
generator: Typora
author: Brian Bird
---

<h1>Artificial Neural Netowrks</h1>

**CS123, Intro to AI**

| Topics                                                       |                                                |
| ------------------------------------------------------------ | ---------------------------------------------- |
| Overview of AI                                               | <mark>Neural networks</mark> and deep learning |
| AI Problem Solving Revisited<br />Machine Learning&mdash;Part 1<br />Applications of AI | Generative AI + Prompt engineering             |
| Machine Learning&mdash;Part 2                                | Custom chatbot creation                        |
| History of AI + Midterm                                      | Social and ethical issues of AI  <br />Final   |



<h2>Table of Contents</h2>

[TOC]

# Introduction

## What's Happening this Week

Due this Sunday (the usual):

- Forum post with questions, answers and comments for online students
  (Part of your participation grade)
- Exercises on Neural Networks
- Quiz over the lectures

# Artificial Neural Networks (ANN)

## Description

### Neural Networks in the Brain

<img src="Images/BrainNeuralNetworkAndNeuron.jpg" alt="BrainNeuralNetworkAndNeuron" style="zoom:24%;" />

A biological neural network consists of interconnected neurons that communicate through axons, dendrites and synapses to process and transmit information. The dendrites are inputs to the neuron and the axon is the output of the neuron. The connection points are synapses. This intricate web of connections forms the basis for learning, memory, and behavior in living organisms.



## Perceptrons

A perceptron is modeled on a single neuron. 

<img src="Images/general-diagram-of-perceptron-for-supervised-learning_4.webp" alt="general-diagram-of-perceptron-for-supervised-learning_4" style="zoom:75%;" />

( &sum; is a the mathematical symbol for summation&mdash;aka addition.)

#### Mathematical Model

linear combination = intercept + weight1 × input1 + ... + weight6 × input6 (where ... is shorthand notation meaning that the sum include all the terms from 1 to 6).

- The *weights* are used as multipliers on the *inputs* of the neuron, which are added up.
- The *intercept* term is like the intercept in linear regression. This can be thought of as a fixed additional charge.

##### Activation Function

Once the linear combination has been computed, the neuron takes the linear combination and puts it through an activation function. Typical examples of the activation function include:

- Step function: if the value of the linear combination is greater than zero, send a pulse (ON), otherwise do nothing (OFF)
- Sign function: similar to the step function, but the output will be either +1 or -1.
- Sigmoid (logistic) function: a “soft” version of the step function.

<img src="Images\Activation-Functions.png" style="zoom:50%;" />



## Artificial Neural Networks (ANN)

<img src="Images/ART_Artificial_intelligence_Neural_network_explain.png" alt="ART_Artificial_intelligence_Neural_network_explain" style="zoom:40%;" />

An artificial neural network (ANN) is a computational model inspired by the structure and function of neural networks found in the brain. Each node, or "neuron", has multiple inputs, but one output. The nodes are arranged in layers and are interconnected layers. The input layer gets the input data to be processed, the hidden layers do processing and send data to an output layer.

### Characteristics

- Information processing and storage (memory) are both done in the same place instead of memory and processing being separated.
- Processing is done simultaneously (in parallel) across many neurons instead of sequentially. 

#### Discussion

- How is parallel processing in an ANN done?

  - Parallel processing in digital computers:
    - Time-slice
    - Multiple cores

  - Different types of processing units in consumer PCs:
    - CPU: typically 4 to 16 cores
      - GPU: NVIDIA GPUs can have hundreds or thousands of CUDA (Compute Unified Device Architecture) cores.
      - NPU: Typically have 10 to 20 cores.

- Where is data in an ANN stored?

  - In a biological neural network, it is stored in the neurons
  - In an ANN it is ultimately stored in the computer's memory.



### Elements of AI Examples

- Discuss the X and O classifier

  - Are some of the O pixels the same as some of the X pixels?
  - How would the neurons be connected?
  - Could this be done with a perceptron?

- Discuss the happy or sad face classifier

  - Does it make a difference whether faces are drawn so they fill the whole grid?
  - What if faces have different proportions?

  



## Backpropegation

### In a Perceptron

![Perceptron_work](Images/Perceptron_work.webp)

### In an ANN

Backpropagation is a method used in artificial neural networks to improve their accuracy. It works in the following steps:

1. **Forward Pass**: The network processes input data to produce an output.
2. **Error Calculation**: The network's output is compared to the actual target to find the error.
3. **Backward Pass**: The error is sent back through the network to adjust the weights, reducing the error.

This process repeats until the network's predictions become accurate.





## Convolutional Neural Networks (CNN)

Their key property is that they can detect image features such as bright or dark (or specific color) spots, edges in various orientations, patterns, and so on

## Generative Adversarial Networks (GAN)

 two networks compete against each other. One of the networks is trained to generate images like the ones in the training data – it is called the generative network. The other network’s task is to separate images generated by the first network from real images from the training data – this one is called the adversarial network. These two combined then make up a generative adversarial network or a GAN.



# Reference

## Articles and Tutorials

[What is a Perceptron: A Beginners Guide for Perceptron](https://www.simplilearn.com/tutorials/deep-learning-tutorial/perceptron)&mdash;Mayank Banoula, SimpliLearn, 2023.

[Deep Learning](https://www.deeplearningbook.org/)&mdash;Ian Goodfellow, Yoshua Bengio, Aaron Courville, MIT Press, 2016

[Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/)&mdash;Michael A. Nielsen, Determination Press, 2015

## Interactive Web Pages

[Tensorflow Playground](http://playground.tensorflow.org/)&mdash;Tinker with a neural network in your browser.

- [Understanding neural networks with TensorFlow Playground](https://cloud.google.com/blog/products/ai-machine-learning/understanding-neural-networks-with-tensorflow-playground)&mdash;Kaz Sato, Google Cloud, 2016.

[Machine Learning Playground](https://ml-playground.com)&mdash;Experiment with multiple ML models

[Perceptron Visualizer](https://perceptrondemo.com/)

[CNN Explainer](https://poloclub.github.io/cnn-explainer/)



---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI lecture notes by [Brian Bird](https://profbird.dev), written in <time>2024</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

Note: GPT-4 and GPT-4o were used to draft parts of these notes.