let data = [
    {
        "e": "CN",
        "i": "US",
        "v": 3300000
    },
    {
        "e": "CN",
        "i": "RU",
        "v": 10000
    }
];

// Get the container to hold the IO globe
let container = document.getElementById( "globalArea" );
// Create Gio.controller
let controller = new GIO.Controller( container );
// Add data
controller.addData( data );
// Initialize and render the globe
controller.init();