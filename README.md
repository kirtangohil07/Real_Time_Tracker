# Real_Time_Tracker

The **Real-Time Location Tracker** is a web-based application that allows users to share and track their real-time location on a map. Multiple users can connect and see each other's locations live. It uses **Socket.IO** for real-time communication and **Leaflet.js** to display an interactive map.


## Features

- Real-time location tracking of multiple users.
- Automatically displays markers for connected users and updates them as they move.
- Removes a user's marker when they disconnect.
- Mobile and desktop support.
  
## Demo

[Live Demo](https://your-live-demo-url.com) <!-- Add a link to your deployed project demo -->

## Technologies Used

- **Node.js**: Backend server
- **Express.js**: Web framework for Node.js
- **Socket.IO**: Real-time, bidirectional communication between client and server
- **Leaflet.js**: JavaScript library for maps
- **OpenStreetMap**: Map data provider
- **EJS**: Embedded JavaScript templating for rendering views on the server-side

## Getting Started

### Prerequisites

To run this project locally, you need the following installed:

- [Node.js](https://nodejs.org/en/) (v12 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/Real_Time_Tracker.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Real_Time_Tracker
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Application Locally

1. Start the server:

    ```bash
    npm start
    ```

2. Open your browser and go to:

    ```bash
    http://localhost:3000
    ```

Your location should appear on the map (if location sharing is enabled on your device).

### Mobile Access

To access the app on your mobile device, make sure both your computer and phone are connected to the same local network. Then, find your computer's IP address and access the app by navigating to:

```bash
http://<your_local_ip>:3000
