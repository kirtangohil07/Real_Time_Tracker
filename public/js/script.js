const socket = io(); 

const userId = generateUniqueId(); 
let userMarker; 

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;

            socket.emit("send-location", { id: userId, latitude, longitude });

            if (userMarker) {
                userMarker.setLatLng([latitude, longitude]); 
            } else {
                userMarker = L.marker([latitude, longitude]).addTo(map)
                    .bindPopup("You are here") 
                    .openPopup(); 
            }

            map.setView([latitude, longitude], 16);
        },
        (error) => {
            console.error("Geolocation error:", error);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }
    );
}

const map = L.map("map").setView([0, 0], 10); 

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
}).addTo(map);

const markers = {}; 

socket.on("receive-location", (data) => {
    const { id, latitude, longitude } = data;

    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]); 
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map) 
            .bindPopup(`User ${id}`); 
    }
});

socket.on("user-disconnect", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]); 
        delete markers[id]; 
    }
});

function generateUniqueId() {
    return 'user-' + Math.random().toString(36).substr(2, 9); 
}
