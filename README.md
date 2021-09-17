# YT-Webservice
**A Node.js Webserver to simplify YT-Livetstreaming**

## About the YouTube-Webservice

This Node.js based webserver is hosted on the local machine. It simplifys the tasks a technician in church by controlling the livestream. The webserver is build to get its commands from [Companion](https://github.com/bitfocus/companion). The aim of this project is provide a better access to the YouTube Livestreams, so they can be controlled by a streamdeck.

## Implemented Commands

-   [ ] Create a new stream
-   [ ] Start a planned stream
-   [ ] End a running stream

## How it Works

The Webserver gets a command through an HTTP Request, with the wanted action in the querystring of the Request.
```
http://localhost:8004/send/?action=...&date=...
```
After parsing the URL, A function checks which action is triggered and then calls the requestet function.

## Future Plans for the service

-   [ ] Finish on top listed commands
-   [ ] Implement Livestreaming without using OBS
-   [ ] 