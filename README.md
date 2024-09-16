# Real_Time_Tracker

Overview
The Real-Time Location Tracker is a web-based application that allows users to share their real-time location on a map. Users can view their location as well as the locations of other users connected to the platform in real time. This project uses Socket.IO for real-time communication, Leaflet.js for map display, and Express.js as the backend framework.

Features
Real-time location tracking of multiple users.
Users can see their own location and the locations of others on a shared map.
Automatically removes a user's marker when they disconnect.
Works across devices (e.g., mobile and desktop).
Demo
Add a link to the deployed version (e.g., Heroku, Vercel) once deployed:

Live Demo
Technologies Used
Node.js: Backend server.
Express.js: Web framework for Node.js.
Socket.IO: For real-time, bidirectional communication.
Leaflet.js: Open-source JavaScript library for maps.
OpenStreetMap: The map data provider for the project.
EJS: Templating engine to render HTML on the server side.
Getting Started
Prerequisites
Node.js and npm installed on your machine.
Basic understanding of JavaScript and web development.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/Real_Time_Tracker.git
Navigate to the project directory:

bash
Copy code
cd Real_Time_Tracker
Install the dependencies:

bash
Copy code
npm install
Running the Application Locally
Start the server:

bash
Copy code
npm start
By default, the server will run on http://localhost:3000.

Access the app:

Open your browser and navigate to http://localhost:3000. You should see the map interface, and your location will be tracked in real time.

Accessing on a Local Network (Mobile)
To access the app on a mobile device connected to the same local network:

Find your computer's local IP address (for example 192.168.1.x).
Run the app using http://<your_local_ip>:3000 (replace <your_local_ip> with the actual IP).
