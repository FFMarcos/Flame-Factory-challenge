<p align="center">
 <img src="https://flamefactory.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fflamefactory-512.99aa3db6.png&w=640&q=75" alt="logo"></a>
</p>

<h3 align="center">Flame Factory takehome challenge </h3>

---

<p align = "center">💡 This document contains all the details for this takehome </p>

## Table of Contents

- [Introduction](#introduction)
- [Instructions](#instructions)

## Introduction <a name = "introduction"></a>

The task is to build a simple webapp that displays an infinite scrolling of some pictures fetched from an API. You should use React || NextJS as the
base framework, but feel free to use any library for the UI components.

There's a problem though. The server is a bit unstable, so it might fail responding to your requests due to some hardware issues.

<img src="https://media1.tenor.com/images/d6add31c664d6a7f9066d81d52a46259/tenor.gif?itemid=5182223" width=300 />

We'd like to see how you handle this scenario.

## Technologies used <a name = "instructions"></a>

**Instructions:**

The app should be intuitive and easy to use. It should display an infinite scroll of the the images from the data set in a clear way, and also we'd love to see some design using all the data in the response. such as the thumbnail, title, etc.

The technical requirements are:

- React / NextJS
- Use the API provided below

### API Endpoint

You can request data using the following endpoint:

    XXXX/photos

This route by itself will respond with all the images available or a server error!. You can use this endpoint with some parameters:

- `_limit=N`: how many objects we want to get with each request ( `N` is the number of images  we want to fetch)

For example, if you want to fetch only 10 images we would do:

    http://XXX/photo??limit=10

That's all the requirements we're going to give you, the rest is up to your creativity and experience.

## What we'll be looking for

- The architecture of your solution
- Performance (try to make just the necessary requests to the API)
- Sense of design
- Easy to install and use
- Link to a GitHub repo with your solution

## Things that are interesting to see how you resolve ( optional )

- What will happen when we fetch all the data  and reach the botom of the page?
- How will you handle the backend errors, such as the 'Internal Server Error' ?
- How will you retry the fetch if it fails ?
- Using Tailwind is a plus !
