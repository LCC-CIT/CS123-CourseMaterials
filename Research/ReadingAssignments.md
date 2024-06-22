<h1>Elements of AI Reading Notes</h1>

[TOC]

# Reading Speed Estimates

Average reading speeds: 

- 183 wpm reading out loud
- 238 wpm reading silently

But, this is technical reading which requires pausing to absorb what you read, so I'm using 150 wpm for estimates.

# Week 1: Intro to AI

## Elements of AI Ch. 1: What is AI? 
6,100 words, 40 minutes read, 15 minutes for exercises

- How should we define AI?  2,559 words
- Related fields. 1,019 words
- Philosophy of AI. 1,490 words

## Elements of AI Ch. 2: AI Problem Solving 
5,300 words,  35  minute read, 60 minutes for exercises

- Search and problem solving. 2,181 words

- Solving problems with AI. 643 words

- Search and Games. 2,546 words
  Notes:

  - Assigning values to the nodes (not squares) in the tic-tac-toe game tree. Nodes with:
    - 3 Xs in a row = +1
    - 3 Os in a row = -1
    - Full board, no winner = 0

  - These values can be applied in advance. 
    - Parents of winning nodes: when it is X's or O's turn and they have the opportunity to make a winning move, the +1 or -1 value can be assigned.
    - Grandparents(?) of winning nodes: the nodes that lead to the nodes above can also be assigned +1 or -1 values. These are nodes with paths that <u>can</u> lead to a win, if the player makes the right moves.


  The determination of optimal moves depends on having <u>built the game tree in advance</u>.

# Week 2: History and Application of AI

## Elements of AI Ch. 3: Real World AI
26 minutes

- Odds and Probability. 2,002 words, 10 minutes
- The Bayes rule. 1,783 words, 9 minutes
- Naive Bayes classification. 1,392 words, 7 minutes

