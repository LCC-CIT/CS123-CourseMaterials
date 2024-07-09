---
title: ML
description: Machine Learning
keywords: ML
generator: Typora
author: Brian Bird
---

<h1>Machine Learning</h1>

**CS123, Intro to AI**

| Topics                                                       |                                 |
| ------------------------------------------------------------ | ------------------------------- |
| Overview of AI                                               | Generative AI                   |
| AI Problem Solving Revisited<br />Machine Learning&mdash;Part 1<br />Applications of AI | Prompt engineering              |
| <mark>Machine Learning&mdash;Part 2</mark><br />History of AI | Custom chatbot creation         |
| Neural networks and deep learning                            | Social and ethical issues of AI |



<h2>Table of Contents</h2>

[TOC]

# Introduction

## What's Happening

- Due by this coming Sunday:

  - Forum for questions related to the lecture (for online students)
  - Elements of AI, Ch. 4, Machine Learning, Exercises
  - Quiz over the lectures

## Review

### Bayes' Rule

Bayes rule can be used to train a system on a data set such as:

- Correlation of cancer imaging tests to actual cases of cancer.
- Filtering email spam
- Doing sentiment analysis

This is one method for doing *supervised* *machine learning*.



# Machine Learning

Machine learning is a subfield of AI that uses algorithms trained on data sets. These models are capable of <u>predicting</u> outcomes and <u>classifying</u> information.

## Models

When talking about Machine Learning (ML), people often use the term *model*. This term can refer to either:

-  Aa machine learning algorithm and methodology for training it.
- A machine learning algorithm that has been trained using data.

**Example of a model:** The *naive Bayes classifier* for detecting spam assigned weights (probabilities) to a set of words. This set of weights along with the algorithm for using them to classify an email message constitute a trained *model*.

## Types of ML

### Supervised learning 

An AI system is trained using labeled data; which means the data has been categorized in some way to indicate what it represents. 

**Example**: email spam detection.

A model is trained on emails that have already been classified as spam or not spam. After training the model can be used to classify new emails as either spam or not spam.

### Unsupervised learning

The system is trained on *unlabeled data* and tries to find similarities, differences, patterns, and structure in data by itself. The system will then classify the samples in the data set according to its own categories.

**Example:** customer segmentation in marketing. 

A business might use data about their customers, such as age, location, and purchasing behavior to determine which customers are similar to each other. Unsupervised learning algorithms, such as k-means clustering, can be used to automatically find patterns in this data and group similar customers together.



### Reinforcement learning

The AI system isn't given any training data, instead it acts as an autonomous agent that accumulates data from trial-and-error attempts to solve a problem or make a decision. It uses algorithms that learn from outcomes and decide which action to take next. After each action, the algorithm receives feedback that helps it determine whether the choice it made was correct, neutral or incorrect.

**Example:** autonomous robots in industrial automation. 

Industrial robots can be programmed to perform tasks such as picking up objects or assembling parts. The robots start with little to no knowledge about how to perform these tasks. As a robot attempts to perform a task, it is given positive rewards for successful actions (like correctly assembling a part) and negative rewards for unsuccessful actions (like dropping an object). Over time, the robots learn to perform their tasks more efficiently by maximizing their successes and minimizing their mistakes. This is all done without explicit programming for each specific task.



## Supervised Learning Models

We've already seen Bayes's rule, which is a statistical methodology (aka model). Here are some others. These can be used for *prediction* and/or *classification*.

### Nearest Neighbor (K-NN)

K-NN, where K represents the number of "Nearest Neighbors" to consider". In this methodology, things (or people) are classified based on a number of predetermined features and grouped (classified) based on the similarity of those features.

**Example:** Real estate comparative market analysis.

Training: A realtor looks at the recent selling price of homes similar to the one they are selling and sets a selling price based on those similar homes. In order to train an ML model to do this, the pertinent characteristics of a home (location, number of beds and baths, etc.) need to be identified and represented numerically so that they can be compared mathematically.

Inference (classification): A home that hasn't sold yet can have its market value estimated by comparing it to several (k) other homes with similar characteristics (NN).

**Example:** Character recognition.

<details>
  <summary>What do you think the steps would be to train a model for Handwritten Character Recognitions(HCR) using the MNIST data set?</summary>
<b>Training the Model</b>
<ul>
<li>Data Collection: Gather a large dataset of handwritten characters, each labeled with their correct character (such as MNIST).</li>
<li>Feature Extraction: Convert each handwritten character into a feature vector. This could involve various techniques such as pixel intensity, edge detection, or even more complex methods.</li>
<li>Model Training: The K-NN algorithm doesn’t require an explicit training step. Instead, it stores all the feature vectors and their corresponding labels.</li>
<b>Classification Using the Trained Model</b>
<ul>
<li>New Character Introduction: When a new, unknown handwritten character is introduced, convert it into a feature vector using the same method used during training.</li>
<li>Distance Calculation: The K-NN algorithm calculates the distance between the new character and all the known characters in the training set.</li>
<li>Finding Nearest Neighbors: The algorithm identifies the ‘k’ closest known characters to the new character.</li>
<li>Majority Voting: The new character is assigned the label that is most common among its ‘k’ nearest neighbors.</li>
</details>



### Statistical Models

These methods use mathematical statistics for prediction and/or classification.

#### Bayesian Models

We have already seen an application of naive Bayes classification. There are other ML techniques that use Bayes' rule in other ways.

#### Regression

##### Linear Regression



##### Logistic Regression



### Tree-Based Models

#### Decision Trees

#### Random Forrests





# Reference

[10 Machine Learning Methods that Every Data Scientist Should Know](https://medium.com/towards-data-science/10-machine-learning-methods-that-every-data-scientist-should-know-3cc96e0eeee9)&mdash;Jorge Castañón, Towards Data Science on Medium, 2019.

[8 Machine Learning Models Explained in 20 Minutes](https://www.datacamp.com/blog/machine-learning-models-explained)&mdash;Natassha Selvaraj, DataCamp, 2022.

[What is supervised learning?](https://www.ibm.com/topics/supervised-learning)&mdash;IBM

[What is unsupervised learning?](https://www.ibm.com/topics/unsupervised-learning)&mdash;IBM

[What is reinforcement learning?](https://www.ibm.com/topics/reinforcement-learning)&mdash;IBM

---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI lecture notes by [Brian Bird](https://profbird.dev), written in <time>2024</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 