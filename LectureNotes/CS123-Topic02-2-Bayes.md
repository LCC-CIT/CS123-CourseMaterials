---
title: Bayes
description: An explanation of Bayes' rule.
keywords: Bayes
generator: Typora
author: Brian Bird
---

<h1>Bayes' Rule</h1>

**CS123, Intro to AI**

| Topics                                      |                                 |
| ------------------------------------------- | ------------------------------- |
| Overview of AI                              | Generative AI                   |
| <mark>History and applications of AI</mark> | Prompt engineering              |
| Machine Learning                            | Custom chatbot creation         |
| Neural networks and deep learning           | Social and ethical issues of AI |



<h2>Table of Contents</h2>

[TOC]

# Bayes' Rule

Bayes’ Rule is a theorem in probability and statistics that describes a way to update the probabilities of predictions when given new evidence. It’s named after Thomas Bayes, who provided the first mathematical formulation of the rule in the eighteenth century.

At its core, Bayes’ Rule is about learning from experience. It provides a mathematical framework for integrating new evidence (new likelihoods) into our prior beliefs and predictions (prior odds). It is used in a wide range of disciplines, including medicine, psychology, and artificial intelligence.

## Prior odds

**Definition**
assessment of odds before adding new information.

**Example**  
The odds of rain in Eugene[^1] are 146:219.

## Likelihood ratio

**Definition**
The probability of the *observation* in the case of the *event* of interest divided by the probability of the observation in the case of no event, where:

- *Observation* is an actual occurrence of the thing being predicted.  
  In our example: rain.
- *Event* is the indicator that the observation will happen.  
  In our example: clouds.

The likelihood ration is where the new information comes in. It is a second set of probabilities that gives us new information about the original probability.

**Example**  
The new information is the probability that clouds in the morning predict rain later in the day.

(This is not real data and is different from the example in the book)

- Odds of rain after clouds are 7:2  
   (7 out of 9 chance of a correct prediction).
- Odds of rain after a clear sky are 1:8  
  (1 out of 9 chance of a false positive).

Likelihood of rain on days it is cloudy is:  7/9 &divide; 1/9 = 7
(I chose the odds so that the math is easy, the denominators don't always have to be the same.)

## Posterior odds

**Definition**
This is the end result. The new odds that are calculated after the new information has been added.

Bayes' Formula:
posteriorOdds = priorOdds * likelihoodRatio

**Example**
146:219 * 7 = 1022:219 or (82.4% chance). 
This is the odds of rain on days it is cloudy in the morning.



# Reference

[Thomas Bayes](https://en.wikipedia.org/wiki/Thomas_Bayes)&mdash;Wikipedia

[Bayes' Rule - Explained for Beginners](https://www.freecodecamp.org/news/bayes-rule-explained/)&mdash;FreeCodeCamp

[An Intuitive (and Short) Explanation of Bayes’ Theorem](https://betterexplained.com/articles/an-intuitive-and-short-explanation-of-bayes-theorem/)&mdash;Better Explained



[^1]: [Number of Days per Month/Year with Rainfall](https://www.weather.gov/media/pqr/climate/ClimateBookEugene/pg78.pdf)&mdash;National Weather Service

---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI lecture notes by [Brian Bird](https://profbird.dev), written in <time>2024</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 