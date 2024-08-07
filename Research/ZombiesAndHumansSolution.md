---
title: Zombies
description: Zombie and human river crossing problem.
keywords: Logic problem, AI test, state-space, transitions
generator: Typora
author: Brian Bird
---

<h1>Solution to the Zombies and Humans Problem</h1>

**CS123, Intro to AI**

<h2>Table of Contents</h2>

[TOC]

# The Problem

<img src="Images\TwoZombiesRowingABoatInMoonlight.png" style="zoom:50%;" />
Three humans and three zombies are on one side of a river. They all need to get to the other side. There is one rowboat.

- The boat can only carry two of them for each crossing.
- At least one of them has to be in the boat to row it.
- Only the boat can be used to cross the river (no wading or swimming).
- If the zombies on either side of the river outnumber the humans, they will kill them.

# The Solution

This solution was generated by ChatGPT using the GPT 4o model on 6/26/2024.
There were numerous errors in the notation, which I cleaned up, and I rewrote much of the explanation, but the solution was correct.

### State Representation:

Each state can be represented as a tuple (H, Z, B), where:

- H is the number of humans on the starting bank.
- Z is the number of zombies on the starting bank.
- B indicates the position of the boat (1 for starting bank, 0 for the other bank).

We only need to keep track of the number of individuals on the starting bank, since we know that if they are not on the starting bank, they are on the other bank.

### Initial State

(3, 3, 1) All the individuals and the boat are on the starting bank.

### Goal State

(0, 0, 0) All of the individuals and the boat are on the other bank.

### State Transitions

Possible transitions are based on moving 1 or 2 individuals across the river. Here are the legal transitions:

1. (H, Z, 1 ) → (H−1, Z, 0) if one human crosses.
2. (H, Z, 1) → (H−2, Z, 0) if two humans cross.
3. (H, Z, 1) → (H, Z−1, 0) if one zombie crosses.
4. (H, Z, 1) → (H, Z−2, 0) if two zombies cross.
5. (H, Z, B) → (H−1, Z−1, 0) if one human and one zombie cross.

There are five more legal transitions going in the opposite direction.

All transitions must respect the constraints: at no point should zombies outnumber humans on either bank.

### Solution Path

We can use Breadth-First Search (BFS) to find the shortest path from the initial state to the goal state. Here is a step-by-step solution:

1. Initial state: (3, 3, 1)
2. Move two zombies: (3, 1, 0)
3. Move one zombie back: (3, 2, 1)
4. Move two zombies: (3,0,0) 
5. Move one zombie back: (3, 1, 1)
6. Move two humans: (1, 1, 0)
7. Move one zombie and one human back: (2, 2, 1)
8. Move two humans: (0, 2, 0)
9. Move one zombie back: (0, 3, 1)
10. Move two zombies: (0,1,0)
11. Move one zombie back: (0,2,1)
12. Move two zombies: (0,0,0)

### State Space and Transitions

There are many possible solutions, but the shortest solution requires just eleven one-way trips across the river. Note that there is more than one solution with 11 one-way trips.

```bat
    (3, 3, 1)
 -> (3, 1, 0)
 -> (3, 2, 1)
 -> (3, 0, 0)
 -> (3, 1, 1)
 -> (1, 1, 0)
 -> (2, 2, 1)
 -> (0, 2, 0)
 -> (0, 3, 1)
 -> (0, 1, 0)
 -> (0, 2, 1)
 -> (0, 0, 0)
```

### Explanation of Steps

**Initial state:** All humans and zombies are on the starting bank.

1. **Move two zombies:** Reduces risk of outnumbering on the other bank.
2. **Move one zombie back:** Ensures boat returns without imbalance.
3. **Move two zombies:** Ensures safety and moves towards the goal.
4. **Move one zombie back:** Prepares boat for next safe crossing.
5. **Move two humans:** Starts balancing out humans.
6. **Move one zombie and one human back:** Balances both banks.
7. **Move two humans:** Nears completion by safely moving humans.
8. **Move one zombie back:** Prepares final safe moves.
9. **Move two zombies:** Moves towards goal with balance.
10. **Move one zombie back:** Ensures safe final state.
11. **Move two zombies:** Reaches the goal state with everyone safe.

This step-by-step method ensures that at no point are the humans outnumbered by the zombies on either bank, thus solving the problem.

---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI course materials by [Brian Bird](https://profbird.dev), written in <time>2024</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 