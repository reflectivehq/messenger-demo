## Getting Started

This demo project uses [React](https://reactjs.org) and [`create-react-app`](https://github.com/facebook/create-react-app) for the JS and HTML framework. For styles it is using [`styled-components`](https://styled-components.com), [tailwind](http://tailwindcss.com), and [`twin.macro`](https://github.com/ben-rogerson/twin.macro#readme) to tie the two together. It's using [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) as a data store and [`local_orm`](https://github.com/hiquest/local_orm/) to interface with the data.


In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Scenario

The project is a simple messaging app, users can enter their name to "sign in", then post messages into the log for other users to see and respond to. In this project you will implement the ability to highlight the text of messages that have previously been posted. Here are the requirements:

1. A user can highlight text with their mouse, when text is highlighted, a visual component is shown to allow the user to save the highlight. It's up to you to decide how the visual component is shown, it could be a tooltip, drawer, hotkey suggestion, or anything else.
1. When a highlight is saved it should be presisted to the data store (`localStorage`). The schema for highlights is up to you to create.
1. When a message is displayed, highlights should be shown as a semi-transparent color behind the text. Each user who submits highlights should have a unique color, and all of their highlights should always appear in that color.
1. Highlights are continguous and a single highlight cannot span multiple messages.
