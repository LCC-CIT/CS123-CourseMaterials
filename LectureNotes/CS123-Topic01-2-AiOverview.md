---

title: AI Overview
description: Overview of Artificial Intelligence.
keywords: AI
generator: Typora
author: Brian Bird
---

<h1>Overview of Artificial Intelligence</h1>

<h2>Part 1</h2>

**CS123, Intro to AI**

| Topics                            |                                 |
| --------------------------------- | ------------------------------- |
| <mark>Overview of AI</mark>       | Generative AI                   |
| History and application of AI     | Prompt engineering              |
| Machine Learning                  | Custom chatbot creation         |
| Neural networks and deep learning | Social and ethical issues of AI |



<h2>Table of Contents</h2>

[TOC]

# What is AI?

AI, or *Artificial Intelligence*, is a field of computer science that aims to create computer systems capable of doing things that would normally require human intelligence. These things include: thinking, reasoning, learning, using natural language, problem solving, and decision making[^1].

We need to know the definitions of words so that we can understand each other. Here is the dictionary definition of Intelligence:

## What is intelligence?

> 1) The ability to learn or understand or to deal with new or trying situations.
>    Also : the skilled use of reason.
> 2) The ability to apply knowledge to manipulate one's environment or to think abstractly as measured by objective criteria (such as tests)  
>    &mdash;[Merriam-Webster Dictionary](https://www.merriam-webster.com/dictionary/intelligence)

### Your Turn: How would you define intelligence?

Is your definition different from the dictionary definition?

Later we will discus whether or not current AI systems are really intelligent.



# Types of AI

There are two major types of AI: *symbolic AI* and *artificial neural networks* (ANN). There are also hybrid systems that use both symbolic AI and ANNs.

AI can also be categorized into two categories: *narrow AI* and *general AI*.

## Symbolic AI vs. ANNs

### Symbolic AI

- Also known as classical or Good Old Fashioned AI (GOFAI).

- It focuses on processing and manipulating symbols or concepts, rather than numerical data.

- Uses logic-based programming, where rules and algorithms are used to make decisions.

- The decision-making is transparent. The reasoning process can be traced back to the logical rules that were applied.

- Simplified example from the medical field, diagnosing a patient's symptoms:  

  ```pseudocode
  IF patient has a fever AND patient has a cough AND patient has difficulty breathing THEN patient may have pneumonia.
  ```

- In "Essentials of AI", you will see an example application of AI for playing tic-tac-toe in which a decision tree is built and an algorithm is used to follow branches of the tree to find moves that will lead to winning the game.

  We'll work through a similar example together in the next class.



### Artificial Neural Networks

- Also known as connectionism. 
- A computer model inspired by the structure and function of  neural networks in the brain. It uses a network of connections to map data input data to a desired output.
- Neural networks are built using machine learning, in which they are trained an large amounts of data that contains examples of the things the neural network should recognize and process
- They are not transparent. It is very difficult (if not impossible) to determine which set of connections were followed to reach a given decision.
- Example, image recognition:  
  <img src="Images\PigeonNeuralNet.png" alt="PigeonNeuralNet" style="zoom:33%;" />

#### Generative AI 

- Can create "original" content such as text, images, video, audio, or software code in response to a user's prompt.

- Uses Deep learning models (LLMs), which work by identifying and encoding the patterns and relationships in huge amounts of data encoded into an ANN.

- Unlike GOFAI, which makes predictions based on data by applying rules, generative AI is trained to create new data using a sophisticated ANN, which means that the process by which it operates is not transparent.

  #### GPT Chatbots

  A Generative Pretrained Transformer (GPT) chatbot produces a string of output words, based on a prompt by using probability to predict the next most likely word:

  - Input: The chatbot receives a user’s prompt or instruction.
  - Tokenization: The AI model breaks apart the input into more manageable tokens (words or parts of words).
  - Probability Calculation: The model calculates the probability of each possible next word (or token) based on the data set it was trained on.
  - Word Selection: The model selects the next word with the highest probability, but with some randomness thrown in to simulate creativity.
  - Response Generation: This process is repeated until a complete response is generated.
  - Output: The generated response is returned to the user.

### Narrow AI

These are systems designed to perform a specific task and can only operate under a limited set of constraints. 

#### Examples of Narrow AI

- **Digital Voice Assistants**: Siri, Alexa, and Google Assistant are examples of Narrow AI. They understand and respond to voice commands and can perform specific tasks like setting alarms, making phone calls, and answering questions.

- **Recommendation Systems**: The recommendation algorithms used by platforms like Netflix, Amazon, and Spotify are examples of Narrow AI. They analyze your past behavior and preferences to suggest content you might like.

- **Email Filtering**: Email services use Narrow AI to filter out spam and categorize emails into different folders.

- **Weather Forecasting**: Narrow AI is used in predicting weather conditions based on a vast amount of meteorological data.

- **Image Recognition Systems**: These are used in self-driving cars to recognize traffic signs, pedestrians, and other vehicles.

#### Your Turn: Can you think of other examples of narrow AI?



### General AI

Also known as AGI (*Artificial General Intelligence*) are systems that possess the ability to perform any intellectual task that a human being can do. They can understand, learn, adapt, and implement knowledge in different domains. This type of AI is purely theoretical at this point with no practical examples in use today.

#### Is chatGPT a General AI System?

ChatGPT is not an example of General AI. It's actually Narrow AI. While it's quite advanced and can generate human-like text based on prompts, it's still designed for a specific task: text generation. It doesn't have an understanding of the world in the way humans do, and it can't apply knowledge from one domain to another in the way a human would. It operates based on patterns in the data it was trained on and doesn't have understanding[^3] of the text it generates.



# Tests of Artificial Intelligence

### Reasoning Tests

#### Chess

This has been one of the traditional tests of reasoning. It was a significant milestone in the development of AI when IBM's Deep Blue beat the world champion chess player [cite].

#### Logic Problems

- The traveling salesman

- River crossing problem 
  Three humans and three zombies are on one side of a river. They all need to get to the other side. There is one rowboat.

  - The boat can only carry two of them for each crossing.
  - At least one of them has to be in the boat to row it.
  - Only the boat can be used to cross the river (no wading or swimming).
  - If the zombies on either side of the river outnumber the humans, they will kill them.

  (The traditional problem was about cannibals and missionaries, but that seems a bit inappropriate by todays standards. This version[^2] is the same problem but with different characters.)

##### Your Turn: Try your own logic test

Do you know a good logic puzzle? If not do a web search, or make one up and try it on a GTP chatbot of your choice.

### The Turing Test

This test was proposed by Alan Turing in 1950 in order to answer the question: "can computers think?". Since the meaning of the word think is hard to define, so he proposed a test as a type of definition. In his test, a human evaluator judges a text-only, human language conversation between a human and a machine. If the evaluator can't distinguish the machine from the human, the machine is said to have passed the test. The test doesn't depend on the machine's ability to give correct answers, but on how closely its answers resemble those a human would give. The Turing Test has been influential and widely debated in the philosophy of artificial intelligence.

#### Your Turn: Let's Do the Turning Test

I (your instructor) will play the part of two personas, "A" and "B". Using the Zoom chat, take turns asking questions of A or B. Your instructor will use a chatbot to answer one and will answer the other himself.

### The Octopus Test

The "Octopus Test" proposed by Bender and Koller is a thought experiment in their paper challenging the idea that AI truly understands language. They imagine an AI trained on all texts about octopuses but lacks data on their jar-opening ability. If asked about this, the AI wouldn’t be able to provide a correct answer because it hasn’t been trained on that specific piece of information.

This experiment highlights the limitations of AI base on LLMs (Large Language Models) and emphasizes that these models don’t truly understand language or have knowledge about the world. They can only generate responses based on the patterns they’ve learned from their training data.



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
   - **Impact on Humanness**: If AI systems appear to be human and we treat them as human, even though they are machines, will people begin to think of each other as machines? Will our concept of personhood be diminished?

### Your turn: What are some concerns you have about AI?



# Reference

- *Artificial Intelligence, A Modern Approach*&mdash;2010, 3rd Ed. Pearson

- [Elements of AI](https://www.elementsofai.com/)&mdash;The University of Helsinki and MinnaLearn

- [Understanding the Different Types of Artificial Intelligence](https://www.ibm.com/blog/understanding-the-different-types-of-artificial-intelligence/)&mdash;IBM

- [The Turing Test](https://en.wikipedia.org/wiki/Turing_test)&mdash;Wikipedia

- [You are Not a Parrot](https://nymag.com/intelligencer/article/ai-artificial-intelligence-chatbots-emily-m-bender.html)&mdash;New York magazine

- [Climbing towards NLU: On Meaning, Form and Understanding in the Age of Data](https://aclanthology.org/2020.acl-main.463.pdf)&mdash;Bender and Koller  
  - [Video and slide presentation by the authors on SlidesLive](https://slideslive.com/38929214/climbing-towards-nlu-on-meaning-form-and-understanding-in-the-age-of-data)

- [To Dissect an Octopus: Making Sense of the Form/Meaning Debate](https://julianmichael.org/blog/2020/07/23/to-dissect-an-octopus.html)&mdash;Juan Michael



[^1]: The definition of *Artificial Intelligence* is not actually agreed upon by computer scientists. The definition given in these notes in my own synthesis of commonly given definitions, such as those listed in Russell and Norvig. An alternate definition, given in "Elements of AI" is a system that is autonomous and adaptive.
[^2]: The "Humans and Zombies" version of the river crossing problem is from [Humans, Zombies, & Other Problems crossing the river](https://mathcommunities.org/river-crossing-problems/) by Spencer Brown.
[^3]: In "Climbing towards NLU: On Meaning, Form, and Understanding in the Age of Data" Emily M. Bender and Alexander Koller argue that a system trained only on form has a priori no way to learn meaning. They discuss the success of large neural language models on many NLP tasks and the hype that these models are being described as “understanding” language or capturing “meaning”. They argue that a clear understanding of the distinction between form and meaning will help guide the field towards better science around natural language understanding.

---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI Lecture Notes by [Brian Bird](https://profbird.dev), written in <time>2024</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 