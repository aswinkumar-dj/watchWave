
# WatchWave

WatchWave is a YouTube-inspired video browsing app built with React, Vite, Tailwind CSS, DaisyUI, React Router, and Zustand. It presents a home feed, a search experience, and a watch page with video playback, metadata, comments, and a simulated live chat panel.

## Project Overview

This project focuses on a responsive video platform UI with:

- A fixed top navigation bar
- A toggleable sidebar drawer
- A responsive home feed with video cards
- A search results page
- A watch page with embedded YouTube playback
- Loading skeletons for feed and watch-page states
- Local UI state handled with Zustand

The app uses the YouTube Data API for popular videos, search results, and video details. It also uses the YouTube suggestion endpoint for search suggestions.

## Features

- Responsive layout across mobile, tablet, laptop, and desktop
- Fixed header with searchable input and suggestions dropdown
- Sidebar that can be toggled globally
- Home feed with 1, 2, 3, or 4 cards per row depending on screen width
- Search results grid styled to match the main feed
- Watch page with embedded YouTube player
- Watch page metadata section with title, stats, channel section, and description
- Nested comments UI
- Simulated live chat with Zustand state
- Skeleton loaders for feed, search, and watch states

## Tech Stack

- React 19
- Vite 7
- React Router DOM 7
- Tailwind CSS 4
- DaisyUI 5
- Zustand 5
- ESLint 9

## Scripts

The project uses the following npm scripts:

- `npm run dev`
  Starts the Vite development server.
- `npm run build`
  Creates the production build.
- `npm run preview`
  Runs the built app locally for preview.
- `npm run lint`
  Runs ESLint across the project.

## Environment Variables

Create a `.env` file in the project root with:

```env
VITE_YT_API_KEY=your_youtube_api_key
```

This key is used for:

- Fetching popular videos
- Fetching search results
- Fetching video details on the watch page

Without a valid API key, feed, search, and watch metadata requests will fail.

## Installation and Setup

1. Install dependencies:

```bash
npm install
```

2. Add your YouTube API key to `.env`:

```env
VITE_YT_API_KEY=your_youtube_api_key
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local Vite URL shown in the terminal.

## Application Routes

The app router is defined in `src/App.jsx`.

- `/`
  Main home feed page.
- `/watch?v=<videoId>`
  Watch page for a selected video.
- `/search`
  Search results page.

## Project Structure

```text
src/
  components/
    body/
      Body.jsx
      SideBar.jsx
    header/
      Header.jsx
      NavBar.jsx
      SearchBar.jsx
    maincontainer/
      FeedSkeleton.jsx
      MainContainer.jsx
      SearchContainer.jsx
      VideoCard.jsx
      VideoContainer.jsx
    watchpage/
      ChatMsg.jsx
      Comments.jsx
      CommentsContainer.jsx
      LiveChat.jsx
      VideoDetails.jsx
      WatchPage.jsx
      WatchPageSkeleton.jsx
  utils/
    constants.js
    toggleSideBar.js
    useChatStore.js
  App.jsx
  main.jsx
```

## Core Architecture

### 1. App Shell

`src/App.jsx` mounts:

- `Header`
- Router configuration
- `Body`, which wraps routed page content

The header remains visible across routes, while the body swaps page content using `Outlet`.

### 2. Header and Search

`NavBar.jsx` provides:

- Sidebar toggle button
- Brand link
- Search bar
- Profile dropdown

`SearchBar.jsx` provides:

- Controlled search input
- Debounced suggestion fetching
- Suggestion dropdown UI

The search suggestion endpoint comes from `YOUTUBE_SEARCH_API` in `src/utils/constants.js`.

### 3. Sidebar

`SideBar.jsx` renders the navigation drawer. Its visibility is controlled by Zustand through `toggleSideBar.js`.

Current sidebar behavior:

- Hidden by default
- Opens and closes through the hamburger button
- Closes automatically on the watch page

### 4. Home Feed

`MainContainer.jsx` is the shell for the home page content.

`VideoContainer.jsx`:

- Fetches popular videos from the YouTube API
- Shows a skeleton while loading
- Renders a responsive card grid after data is available

`VideoCard.jsx`:

- Displays thumbnail
- Title
- Channel name
- Video stats

### 5. Search Results

`SearchContainer.jsx`:

- Fetches search results from the YouTube Data API
- Filters results down to videos only
- Reuses `VideoCard`
- Uses the same responsive skeleton and grid system as the home feed

### 6. Watch Page

`WatchPage.jsx` handles the selected video route.

It contains:

- Responsive embedded YouTube iframe
- `VideoDetails`
- `CommentsContainer`
- `LiveChat`

`WatchPageSkeleton.jsx` is used for watch-page loading states when the route cannot render actual content yet.

`VideoDetails.jsx`:

- Fetches video metadata for the selected `videoId`
- Shows title, views, likes, channel name, and description
- Includes a local subscribe button toggle
- Displays an inline skeleton while details are loading

`CommentsContainer.jsx`:

- Renders static nested comment data
- Demonstrates recursive comment display

`LiveChat.jsx`:

- Simulates a live chat stream
- Allows manual message submission

## State Management

### Sidebar State

Managed in `src/utils/toggleSideBar.js` using Zustand.

Available state/actions:

- `isSideBarOpen`
- `toggleSideBar()`
- `closeSideBar()`

### Live Chat State

Managed in `src/utils/useChatStore.js`.

Behavior:

- Messages are stored in a global Zustand store
- New generated or submitted messages are added at the start
- Older messages are trimmed using `OFFSET_LIVE_CHAT`

## API and Utility Constants

Defined in `src/utils/constants.js`.

Important exports include:

- `YT_API_KEY`
- `YOUTUBE_VIDEO_API`
- `YOUTUBE_SEARCH_API`
- `PROFILE_URL`
- `HAMBURGER_ICON_URL`
- `OFFSET_LIVE_CHAT`
- `formatNumber()`
- `generateName()`

### API Usage

Popular videos:

- YouTube videos endpoint with `chart=mostPopular`

Search suggestions:

- YouTube suggestqueries endpoint

Search results:

- YouTube search endpoint

Video details:

- YouTube videos endpoint using the selected `videoId`

## Responsive Design Notes

The project has been tuned for better responsiveness:

- Feed layout uses explicit responsive breakpoints
- 1 column on small screens
- 2 columns on small tablets
- 3 columns on laptops
- 4 columns on larger desktops
- Watch page collapses from two columns to one column on smaller screens
- Sidebar uses a fixed drawer layout below the header
- Header search width is capped for better balance on larger screens

## Loading States

Custom skeleton components were added to improve perceived performance:

- `FeedSkeleton.jsx`
  Used by home feed and search results.
- `WatchPageSkeleton.jsx`
  Used by the watch experience when needed.
- `VideoDetails.jsx`
  Includes its own inline loading skeleton before metadata loads.

## Current Behavior Notes

- The search page currently uses a fixed query string: `legendfamily`
- Comments are static mock data
- Live chat is simulated locally and not connected to a backend
- The subscribe button is UI-only and not persisted

## Possible Future Improvements

- Connect the search bar to actual route-based searching
- Add route params for dynamic search queries
- Replace static comments with real API-backed comments
- Add error states for failed API requests
- Add reusable shared skeleton primitives
- Improve accessibility for keyboard navigation and dropdown behavior
- Add tests for components and store logic
- Add dark/light theme switching

## Development Notes

- The project is linted with ESLint and currently passes `npm run lint`
- Vite is used as the local dev/build tool
- Tailwind CSS and DaisyUI are used for styling utilities and UI primitives

## Summary

WatchWave is a polished frontend-focused React project that demonstrates:

- API-driven UI rendering
- Responsive layout design
- Router-based page composition
- Zustand-powered UI state
- Skeleton loading UX
- A modular component structure suitable for future expansion
