---
title: AI Overview
description: Overview of Artificial Intelligence.
keywords: AI
generator: Typora
author: Brian Bird
---

<h1>Overview of AI Part 2</h1>

**CS123, Intro to AI**

| Topics                            |                                 |
| --------------------------------- | ------------------------------- |
| <mark>Overview of AI</mark>       | Generative AI                   |
| History and application of AI     | Prompt engineering              |
| Machine Learning                  | Custom chatbot creation         |
| Neural networks and deep learning | Social and ethical issues of AI |



<h2>Table of Contents</h2>

[TOC]

# Introduction

## What's Happening

- Reading and exercises, any questions?

  - You can ask on Discord too.
  
- This week's due dates:

  - Introduce yourself survey: **Today**
  - Join a team: Sunday **or sooner!** 
    - **Join the Discord server** so you can communicate with your team.
    
  - Elements of AI Ch. 1 and 2 exercises: Sunday
  - Quiz over the lectures: Sunday

- Next week  
  History of AI (lecture), Real world applications of AI (reading)

  - No class on Thursday, July 4th
  - Elements of AI Ch. 3 exercises: Sunday
  - Quiz over the lecture: Sunday
  - Team project on applications of AI: Sunday  
    **Start working on this as soon as your team is formed.**

  

## Review

- What are some definitions of AI?
- What is symbolic AI?
- What is an Artificial Neural Network?
- How does generative AI work?
- What are narrow and general AI?
  - Does AGI exist yet?

# Tests of Artificial Intelligence

### Reasoning Tests

"Reasoning" in AI doesn't necessarily refer to the *way* a system solves a problem, but the *kind* of problem it is able to solve. In AI, reasoning refers to making inferences, drawing conclusions or solving problems based on some kind of data input.

Games like chess and logic problems have been long been some of the standard ways to test the reasoning capabilities of AI systems.

#### Chess

This has been one of the traditional tests of reasoning. It was a significant milestone in the development of AI when IBM's Deep Blue beat the world champion chess player, Garry Kasparov in 1997[^1].

#### Logic Problems

- River crossing problem:
  Three humans and three zombies are on one side of a river. They all need to get to the other side. There is one rowboat.

  - The boat can only carry two of them for each crossing.
  - At least one of them has to be in the boat to row it.
  - Only the boat can be used to cross the river (no wading or swimming).
  - If the zombies on either side of the river outnumber the humans, they will kill them.

  (The traditional problem was about cannibals and missionaries, but that seems a bit inappropriate by today's standards. This version[^2] is the same problem but with different characters.)


  Here is a [state-space solution from ChatGPT](../Research/ZombiesAndHumansSolution.html) (GPT 4o model).

  

##### Your Turn: Try your own logic test

Do you know a good logic puzzle? If not do a web search, or make one up and try it on a GTP chatbot of your choice.

Here are some that I tried: [Attempts to Stump a GPT Chatbot](../Research/TryingToStumpGenerativeAI.html)

### The Turing Test

This test was proposed by Alan Turing in 1950 in order to answer the question: "can computers think?". Since the meaning of the word think is hard to define, he proposed this test as a type of definition. In his test, a human evaluator judges a text-only, human language conversation between a human and a machine. If the evaluator can't distinguish the machine from the human, the machine is said to have passed the test. The test doesn't depend on the machine's ability to give correct answers, but on how closely its answers resemble those a human would give. The Turing Test has been influential and widely debated in the philosophy of artificial intelligence.

#### Your Turn: Let's Do the Turning Test

I (your instructor) will play the part of two personas, "A" and "B". Using the Zoom chat, take turns asking questions of A or B. Your instructor will use a chatbot to answer one and will answer the other himself.

### The Octopus Test

The "Octopus Test" proposed by Bender and Koller[^3] is a thought experiment in their paper challenging the idea that AI truly understands language. They imagine an AI trained on all texts about octopuses but lacks data on their jar-opening ability. If asked about this, the AI wouldn’t be able to provide a correct answer because it hasn’t been trained on that specific piece of information.

This experiment highlights the limitations of AI based on LLMs (Large Language Models) and emphasizes that these models don’t truly understand language or have knowledge about the world. They can only generate responses based on the patterns they’ve learned from their training data.



# Dangers of AI

Sure, here's an outline of the dangers of AI, including ethical, social, privacy, and philosophical issues:

1. **Ethical Issues**
   - **Bias**: AI systems can unintentionally perpetuate and amplify existing biases.
   - **Data Exploitation**: AI's ability to gather and analyze massive quantities of data can lead to exploitation of personal information.
   - **Decision Accountability**: With generative AI in particular, there is a lack of transparency in AI decision-making processes, leading to accountability issues.
   - **Environmental Impact**: The energy consumption of AI systems can have significant environmental implications.

2. **Social Issues**
   - **Job Automation**: AI could lead to high unemployment rates due to automation of work.
   - **Socio-economic Inequality**: The rise in unemployment and AI bias can create socio-economic inequality.
   - **Abuse of Data and Loss of Control**: There's a risk of misuse of data collected by AI systems.
   - **Financial Instability**: Rapid advancements in AI could lead to financial instability.

3. **Privacy Issues**
   - **Data Persistence**: Data can exist longer than the human subjects that created it.
   - **Data Repurposing**: Data can be used beyond their originally intended purpose.
   - **Covert Metadata Collection Practices**: AI systems can collect metadata without users' knowledge.
   - **Limited Built-In Security Features**: AI models often have limited security features, increasing the risk of data breaches.

4. **Philosophical Issues of Personhood and Humanity**
   - **AI Consciousness and Agency**: There's a debate on whether AI can exhibit personhood, including consciousness and agency.
   - **Moral and Legal Status of AI**: If AI systems can achieve consciousness and personhood, what will the moral and legal rights of these systems be?
   - **Impact on Humanness**: If AI systems appear to be human and we treat them as human, even though they are machines, will people begin to think of each other as machines? Will our concept of personhood be diminished? See "You are not a parrot" by Emily Bender.

### Your turn: What are some concerns you have about AI?



# Reference

- *Artificial Intelligence, A Modern Approach*&mdash;2010, 3rd Ed. Pearson

- [Elements of AI](https://www.elementsofai.com/)&mdash;The University of Helsinki and MinnaLearn

- [Understanding the Different Types of Artificial Intelligence](https://www.ibm.com/blog/understanding-the-different-types-of-artificial-intelligence/)&mdash;IBM

- [The Turing Test](https://en.wikipedia.org/wiki/Turing_test)&mdash;Wikipedia

- [You are Not a Parrot](https://nymag.com/intelligencer/article/ai-artificial-intelligence-chatbots-emily-m-bender.html)&mdash;Emily Bender, New York magazine

- [Climbing towards NLU: On Meaning, Form and Understanding in the Age of Data](https://aclanthology.org/2020.acl-main.463.pdf)&mdash;Bender and Koller  
  - [Video and slide presentation by the authors on SlidesLive](https://slideslive.com/38929214/climbing-towards-nlu-on-meaning-form-and-understanding-in-the-age-of-data)

- [To Dissect an Octopus: Making Sense of the Form/Meaning Debate](https://julianmichael.org/blog/2020/07/23/to-dissect-an-octopus.html)&mdash;Juan Michael



[^1]: https://en.wikipedia.org/wiki/Deep_Blue_versus_Garry_Kasparov
[^2]: The "Humans and Zombies" version of the river crossing problem is from [Humans, Zombies, & Other Problems crossing the river](https://mathcommunities.org/river-crossing-problems/) by Spencer Brown.
[^3]: In "Climbing towards NLU: On Meaning, Form, and Understanding in the Age of Data" Emily M. Bender and Alexander Koller argue that a system trained only on form has, a priori, no way to learn meaning. They discuss the success of LLMs on many NLP tasks and the hype that these models are being described as “understanding” language or capturing “meaning”. They argue that a clear understanding of the distinction between form and meaning will help guide the field towards better science around natural language understanding.

---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI Lecture Notes by [Brian Bird](https://profbird.dev), written in <time>2024</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 