# Intro to Servers and API's

---

## What is a server?

---

- A server is a program that returns data be be used by other applications or programs
- Servers can be public or private
- Servers are agnostic to programming language, they are a concept

---

## Why would you need a server?

---

- mobile apps or websites that have a lot of content
- personalize the content for a user
- want to store user data
- want to analyze data

---

## How do you deliver content?

---
## How do you deliver content?
### APIs / Clientside rendering
- Serve static assets, images, HTML, JS, CSS, etc
- Have logic in the JavaScript on how to get specific data and insert it into the DOM
- Serve data in specific format, JSON, XML, Protobuf, etc
- (Use JSON unless you really need to use something else)
- Many requests that are small

---

## How do you deliver content?
### APIs / Clientside rendering
Examples:
- Clientside: React, AngularJS, VueJS, Elm
- Serverside: Any server that returns data

---

## How do you deliver content?
### Serverside rendering
- Take template and fill in data, then serve completed HTML
- All data is served at one time
- Usually all processing happens on the server (minimal DOM manipulation on the clientside)
- One request that takes a lot of processing

---

## How do you deliver content?
### Serverside rendering
Examples:
- Ruby on Rails, Django, Jinja, handlebars, ejs
