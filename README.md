# YT-Webservice

A Node.js Webserver to simplify YT-Livestreaming

## About the YouTube-Webservice

This Node.js based webserver is hosted on the local machine. It simplifys the tasks a technician in church by controlling the livestream. The webserver is build to get its commands from [Companion](https://github.com/bitfocus/companion). The aim of this project is provide a better access to the YouTube Livestreams, so they can be controlled by a streamdeck.

## Implemented Commands

- [ ] Create a new stream
- [ ] Start a planned stream
- [ ] End a running stream

## How it Works

The Webserver gets a command through an HTTP Request, with the wanted action in the querystring of the Request.

```url
http://localhost:8004/send/?action=...&date=...
```

After parsing the URL, A function checks which action is triggered and then calls the requestet function.

## Future Plans for the service

- [ ] Adding a functional GUI
- [ ] Understand Googles OAuth2.0
- [ ] Implement Google OAuth2.0 with Refresh-Tokens
- [ ] Research exact api functionality
- [ ] Start with startStream
- [ ] Create and set Thumbnails automatically
- [ ] Implement Livestreaming without using OBS

## Developer

<img src="https://avatars.githubusercontent.com/ScheerleJo"   height="50px" title="Josia Scheerle"/> | [`@ScheerleJo`](https://github.com/ScheerleJo)
