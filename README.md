# Project Overview

The Assignment Application is a web platform designed for user management, event tracking, teaching resources, and community interactions. It includes features like role-based access, resource filtering, and customizable settings, all implemented without a backend, using mock JSON data for dynamic functionality.

## Key Features

1. Authentication & User Management
    User Registration
    Login System

2. Navbar
    Navigation Menu

3. Homepage Feed
    News Feed with Pagination
    Comments and Reactions

4. Events System
    Event Listing
    Event Details

5. Teaching Resources
    Categorized Sections
    Resource Preview and Bookmarking

6. Community Features
    Real-Time Chat Room
    Teaching Q&A

7. Settings & Documentation
    Profile Customization and Privacy Settings

## 
If you're not using a backend, the README.md should be adjusted to reflect that the data is coming from a JSON file or mock data instead of an API. I'll update the instructions accordingly.

For screenshots, you can:

Place the images in a screenshots folder inside your project directory.
Use relative paths in the README.md to reference these screenshots.
Here’s the updated README.md tailored for your project:

Assignment Application
Project Overview
The Assignment Application is a web platform designed for user management, event tracking, teaching resources, and community interactions. It includes features like role-based access, resource filtering, and customizable settings, all implemented without a backend, using mock JSON data for dynamic functionality.

Screenshots/GIFs of Key Features
1. Authentication & User Management
User Registration

Login System

2. Navbar
Navigation Menu
3. Homepage Feed
News Feed with Pagination

Comments and Reactions

4. Events System
Event Listing

Event Details

5. Teaching Resources
Categorized Sections

Resource Preview and Bookmarking

6. Community Features
Real-Time Chat Room

Teaching Q&A

7. Settings & Documentation
Profile Customization and Privacy Settings

## Setup Instructions

* Prerequisites
    Node.js
    npm 

# Installation

1. Clone the Repository:

    git clone https://github.com/GSMunde/Expert_Buddy.git
    cd assignment-app

2. Install Dependencies:
    npm install

3. Start the Development Server:

    npm start

4. Access the Application: Open http://localhost:3000 in your browser.

## Tech Stack

# Frontend:
   * React.js: For building dynamic UI components.
   * React Router: For navigation and routing.
   * Context API: For state management.
   * Tailwind CSS: For responsive styling.
   * React Hook Form: For form handling and validation.

# Data:
   * Mock JSON data stored in src/Context/mockUsers.js.

## How the Application Works

1. Authentication:
   * The login system validates credentials against the mockData.json file and simulates authentication using state variables.
    
2. Event Management:
    * Events are stored in the JSON file and filtered on the frontend without requiring a backend.

3. Teaching Resources:
    * Resources are dynamically loaded and categorized using the data from the JSON file.

## Core Features

1. Authentication & User Management
   * User registration and login using mock data.
   * Role-based access (Admin, Tutor, Student).
   * Profile management with editable fields.

2. Navbar
   * Navigation menu includes links to Home, Events, Profile, and Resources.

3. Homepage Feed
   * Rich-text announcements with comments and reactions.
   * Pagination or infinite scroll for seamless browsing.

4. Events System
   * Filterable event listing.
   * RSVP functionality and detailed event view.

5. Teaching Resources
   * Categorized resources with preview and bookmarking options.
   * Searchable and filterable resource database.

6. Community Features
   * Real-time chat simulated with mock data.
   * Q&A section with voting and categorization.

7. Settings & Documentation
   * Profile customization and privacy toggles.
   * Onboarding guide with FAQs and tutorials.

## Future Improvements

1. Backend Integration:
 * Replace mock data with real backend APIs for dynamic updates.
 
2. Enhanced Features:
 * Add push notifications for events and messages.
 * Enable private messaging for community members.

3. Mobile App:
 * Develop a mobile-friendly version using React Native.

4. Improved Performance:
 * Implement lazy loading for components and assets.

## Contributing
    1. Fork the repository.
    2. Create a feature branch (git checkout -b feature-name).
    3. Commit your changes (git commit -m "Add feature name").
    4. Push to your branch (git push origin feature-name).
    5. Create a pull request.

## License
   * This project is licensed under the MIT License. See the LICENSE file for details.