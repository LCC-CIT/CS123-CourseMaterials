---
title: Problem Solving
description: Solving problems with AI
keywords: AI, state, state-space, transition, game tree, minimax
generator: Typora
author: Brian Bird
---

<h1>Problem Solving Revisited</h1>

**CS123, Intro to AI**

| Topics                                                       |                                 |
| ------------------------------------------------------------ | ------------------------------- |
| Overview of AI                                               | Generative AI                   |
| <s>History and applications of AI</s> <br /><mark>AI Problem Solving Revisited</mark><br />Machine Learning&mdash;Part 1<br />Applications of AI | Prompt engineering              |
| History of AI <br />Machine Learning&mdash;Part 2            | Custom chatbot creation         |
| Neural networks and deep learning                            | Social and ethical issues of AI |



<h2>Table of Contents</h2>

[TOC]

# Introduction

## What's Happening

- No class Thursday.
- Reading and exercises, any questions?

  - Use Discord exercise-questions channel to get and give help!
- Due this Sunday:

  - "Your turn" forum for online students.
  - Quiz over the lecture (lecture notes).
  - Extra credit quiz on problem solving.
  - Elements of AI Ch. 3 exercises
  - Team project on applications of AI.

## Review and Errata

- Tests of AI systems:
  - What is meant by "reasoning"?
  - What are some reasoning tests.
  - What is the *Turing test*?
  - What is the point of the *octopus test*?  
    
    **Error correction:**
    There was an AI hallucination (I used AI to get a rough draft) in the original version of last week's notes on the octopus test. I've corrected that part of the notes. Take a look at [the new version](https://lcc-cit.github.io/CS123-CourseMaterials/LectureNotes/CS123-Topic01-3-OverviewPart2.html).
- What are some concerns about AI in these categories:
  - Ethical Issues
  - Social Issues

  - Privacy Issues

  - Philosophical Issues of Personhood and Humanity

# Problem Solving Revisited

Since quite a few students had difficulty with the AI problems solving exercise in ch. 2 of *Elements of AI*, we are going to go over those concepts again.

## Search and Problem Solving

Many problems can be thought of as search problems. We normally think of searching as a way to solve problems like finding a web site, finding a book in a library, or finding a product in an online store. But search can also be used to find the shortest route on a road map or the best sequence of moves to win a game.

The kinds of problems we solve with AI can be classified according to the problem's *environment[^1]* One way of classifying environments is by number of *agents*[^2]

Two types of search problems (there are more than two) are:

- Problems with only one agent&mdash;a route finding problem is an example.
- Problems with two agents&mdash;a two-player game is an example.

### Single-Agent Problems

**River Crossing Problems**

If you search the internet you will find a lot of different logic puzzles involving getting things (or people, animals or other entities) across a river. These are examples of *single agent* problems since there is only one agent (you, the problem solver) directing the action. 

They are search problems since you search the *state-space*[^3] to find the minimum number of *transitions*[^4] between states that will solve the problem.

- Ch.2 of *Elements of AI* describes the "Chicken, feed, and fox" problem.
- Look at a solution to  the [Zombies and humans river crossing problem](https://lcc-cit.github.io/CS123-CourseMaterials/LectureNotes/Topic-01-4-ZombieCrossingSolution.html).

### Two-Agent Problems

**Game Playing Problems**

Two-player games are examples of *two-agent* problems.

- Ch. 2 of Elements of AI describes making a game tree for tic-tac toe that can be searched using the *minimax algorithm*[^5] in order to find winning moves.
- These [notes from the Australian National University](https://gitlab.cecs.anu.edu.au/pages/2021-S1/courses/comp1100/lectures/09-2-Game_Trees.pdf) describe making a game tree for the game of nim, assigning values to nodes, and searching the tree for winning moves.



# Reference

- [Elements of AI](https://www.elementsofai.com/)&mdash;The University of Helsinki and MinnaLearn, 2024. 
  Chapter 2 "AI Problem Solving"
- [Understand Types of Environments in Artificial Intelligence](https://www.aitude.com/understand-types-of-environments-in-artificial-intelligence/)&mdash;Sandeep Kumar, 2020.

[^1]: The *environment* of the problem is made up of the things in the world that surrounds the problem.
[^2]: An *agent* is someone or something that is directing the actions.
[^3]: State-space
[^4]: A *transition* is the change from one state to another within the state-space.
[^5]: The *minimax algorithm* is used to search a tree (a type of computer data structure) to find paths through branches with either minim or maximum values.



---

[![Creative Commons License](Images/cc-by-sa-88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI lecture notes by [Brian Bird](https://profbird.dev), written in <time>2024</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 
