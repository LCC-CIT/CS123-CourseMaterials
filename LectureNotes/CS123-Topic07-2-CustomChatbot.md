---
title: Chatbot
description: How to create a custom chatbot
keywords: AI, chatbot, copilot studio
generator: Typora
author: Brian Bird
---

<h1>Creating a Custom Chatbot</h1>

**CS123, Intro to AI**

| Topics                                                       |                                              |
| ------------------------------------------------------------ | -------------------------------------------- |
| Overview of AI                                               | Neural networks and deep learning            |
| AI Problem Solving Revisited<br />Machine Learning&mdash;Part 1<br />Applications of AI | Generative AI +Prompt engineering            |
| Machine Learning&mdash;Part 2                                | RAG &  <mark>Custom chatbot creation</mark>  |
| History of AI + Midterm                                      | Social and ethical issues of AI  <br />Final |



<h2>Contents</h2>

[TOC]

# Copilot Studio

## Tips

### Generative AI Responses

- To get your copilot to use generative AI to respond, go to Settings, Generative AI, and click the radio button labeled "Generative (preview)" 

- In order to get the copilot to use my web site, in "Overview" I had to turn off "Allow the AI to use its own general knowledge (preview)".



### Greeting

The initial greeting comes from the topic: conversation start. You can edit it in the conversation flow.

### Authentication

These are the options

- None

- Teams

  If you want to use OneDrive as a knowledge source, you have to use Microsoft Entra ID,  
  But, then you won't be able to publish to a web site!

- Manual

### Knowledge Sources

The sources that are <u>not</u> enterprise data source are:

- Public web sites (must be indexed by Bing)
- Files
- OneDrive folders&mdash;Requires Microsoft Entra ID (Teams and Office 365)



#### Index for Searching

All knowledge source depend on the source for searching. This means the files need to have their content indexed. It happens different ways in different knowledge sources:

- Web site: your site needs to be indexed by Bing. This can take days (or more) and depends on getting your site ready according to the [Bing Webmaster](https://www.bing.com/webmasters) requirements.
- Files: will be made searchable by Dataverse.
- OneDrive: Will be indexed by OneDrive almost immediately after upload.

#### Document Types

- Markdown and html
  - In a web site: just html will be indexed, citations open as a web page
  - In files: (stored in Dataverse) both will be indexed, citations open as text only
  - In OneDrive: neither will be indexed
- PDF and Word
  - PDFs and Word docs get indexed everywhere
  - PDF citations open as documents, Word docs get downloaded instead of opening
- Excel and .csv
  - Both can be searched and understood when uploaded as files.




---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI lecture notes by [Brian Bird](https://profbird.dev), written in <time>2024</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

---

Note: Microsoft Copilot with GPT-4 was used to draft parts of these notes.

