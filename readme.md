Rakanda Coffee Single Page Application

Short Description:
This project is a sleek and responsive single-page application designed for visitors to input their email addresses, view promotional offers, and get updates about Rakanda Coffee events. The app is deployed on Vercel for seamless scalability and performance.

Table of Contents

Overview

Features

Installation

Usage

Configuration

Deployment

Updating Content

Contributing

License

Contact

Overview

The Rakanda Coffee Single Page Application serves as an interactive digital platform for engaging visitors. It enables:

Email Collection: Visitors can subscribe to Rakanda Coffee's updates.

Promotions Display: Highlight special offers and new products.

Event Information: Showcase up-to-date locations and schedules for events.

Technologies Used

Frontend: React + TypeScript

Styling: TailwindCSS

Backend: Firebase for email storage and updates

Hosting: Vercel

Features

Email Subscription Form

Securely collect and store visitor emails.

Dynamic Promotions Section

Updateable promotional banners and offers.

Event Locations

Display live updates about Rakanda Coffee’s events and venues.

Responsive Design

Fully optimized for mobile, tablet, and desktop devices.

Installation

Follow these steps to set up the project locally:

Prerequisites

Node.js (v16 or higher)

npm or yarn

Steps

# Clone the repository

git clone https://github.com/username/rakanda-coffee.git

# Navigate into the project directory

cd rakanda-coffee

# Install dependencies

npm install

# Start the development server

npm run dev

Usage

Run Locally

Start the development server using:

npm run dev

Open your browser and navigate to:

http://localhost:5173

Production Build

To create a production-ready build:

npm run build

Configuration

Environment Variables

Create a .env file in the root directory and include:

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id

Firebase Setup

Go to Firebase Console.

Create a new project.

Enable Firestore and set up a collection for storing emails and promotions.

Deployment

Deploying to Vercel

Push your project to a GitHub repository.

Connect your GitHub account to Vercel.

Import your repository and configure the build settings:

Build Command: npm run build

Output Directory: dist

Set up environment variables in Vercel’s dashboard.

Deploy the project.

Updating Content

Promotions

Go to the Firebase Console.

Update the "Promotions" collection with new offers and details.

Event Locations

Access the Firebase Console.

Edit the "Events" collection to reflect current schedules and locations.

Contributing

Contribution Workflow

Fork the repository.

Create a feature branch:

git checkout -b feature-name

Make changes and commit:

git commit -m "Add feature description"

Push the branch:

git push origin feature-name

Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.
