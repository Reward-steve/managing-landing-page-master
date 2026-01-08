# Frontend Mentor - Manage Landing Page Solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SL0qC6W9).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- See hover states for all interactive elements.
- View a functional horizontal testimonial slider on mobile.
- Validate the newsletter sign-up form.

### Screenshot

![Solution Screenshot](./screenshot.png)
_(Note: Take a screenshot of your finished site and save it in your project folder)_

### Links

- Solution URL: [Add your GitHub link here]
- Live Site URL: [Add your Vercel/Netlify link here]

## My process

### Built with

- **React** - UI Library
- **Tailwind CSS** - For styles and responsive design
- **CSS Scroll Snap** - For the mobile testimonial slider
- **Vite** - Build tool

### What I learned

In this project, I focused on mastering absolute positioning for decorative background patterns and creating a custom mobile navigation with an overlay.

**Smooth Mobile Dropdown Logic:**
To ensure the background doesn't scroll when the menu is open, I used a `useEffect` hook:

```javascript
useEffect(() => {
  document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
}, [isMenuOpen]);
```
