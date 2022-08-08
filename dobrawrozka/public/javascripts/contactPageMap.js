
// Mapbox js for the contact page

mapboxgl.accessToken = 'pk.eyJ1IjoicGFjaWVrZmx5IiwiYSI6ImNreHFpaXZtZjA1OHgyb3BjbjMxYnphNHcifQ.skpynqhjy74EPS8Gvu_m0w';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11?optimize=true', // style URL
    center: [19.01972, 49.80350], // starting position [lng, lat]
    zoom: 16, // starting zoom
    attributionControl: false
});

new mapboxgl.Marker({ color: 'blue', rotation: 0 })
    .setLngLat([19.01972, 49.80350])
    .addTo(map);

