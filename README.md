# Simple Todo

Created with React (React Context API) + TypeScript + Vite + tailwind CSS + MSWjs

## How to run for development

- Copy `.env.example` into `.env` and set values.
```
NODE_ENV=
VITE_API_URL=
```
- Run the following scripts
```bash

// install dependencies
npm install

// run development
npm run dev

```
This will run the project and mock the API from MSWjs. Plus hot-reload.

## How to run with preferred environment (staging/production)

- Copy `.env.example` into `.env` and set values.
```
NODE_ENV=staging
VITE_API_URL=https://staging.api
```
- Run the following scripts
```bash

// install dependencies
npm install

// build
npm run build

// run
npm run preview

```
So it will run the project without mocking the API from MSWjs.

## (Thought Process of how to run the project) Why do we need to copy `.env.example`? Why not just clone the project and run?
This is because `.env` always contains sensitive data, so we need to ignore it from git and let it stay on the local machine (server).

## View the video that explains how it works and the thought process behind it [here](https://drive.google.com/file/d/1zRW7u-EcIDIPcB-MsSSZmTpUzERiAefl/view?usp=sharing) (Thai language).
