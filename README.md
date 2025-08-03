# Angular Client App

This is my client-side web application built with Angular 20. It includes navigation, API consumption, and reactive forms. I also deployed it on Vercel for easy access.

## What I built

- A navigation bar with three pages: **Home**, **API Data**, and **Form**  
- The **API Data** page fetches data from a public API using Angular HttpClient and displays it with loading/error handling  
- The **Form** page contains a reactive form with validation (name, email, message) and shows submitted data as JSON  
- The app uses standalone components and Angular routing for smooth navigation  
- I styled the app with CSS to make it clean and user-friendly  
- The app is deployed on Vercel with build config to serve the production-ready files correctly

### Prerequisites

- Node.js and npm installed  
- Angular CLI installed globally (`npm install -g @angular/cli`)

### Installation

- Clone the repository: git clone https://github.com/sonia2496/angular-app
- npm install
- ng serve
- http://localhost:4200

### Build for Production

- ng build --configuration production
- dist/angular-client-app/browser

### Deployment process on Vercel

- Build command: ng build
- Output directory: dist/angular-client-app/browser

### Technologies used

- Angular 20 with standalone components
- Angular HttpClient for API requests
- Reactive Forms with validation
- TypeScript
- Vercel for deployment