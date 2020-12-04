# File structure

server
│   app.js          # App entry point
└───api             # Express route controllers for all the endpoints of the app
└───config          # Environment variables and configuration related stuff 
└───controllers     # Define the response to the requests
└───middleware      # Contains modules for business logic
└───routes          # defines the actual routes
└───services        # defines service related functionality
└───subscribers     # define async tasks, if any
└───www             # Local port listening
└───loaders         # Split the startup process into modules
└───models          # Database models
└───services        # All the business logic is here
└───subscribers     # Event handlers for async task
