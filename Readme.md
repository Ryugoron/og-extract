# Opengraph Extract

Small Rest Endpoint to extract Opengraph Specifications from Webpages.

## Install

### NPM

For local development run

```bash
npm install
```

to install all dependencies.

### Docker

To build your docker container, run

```bash
docker build -t org/og-extract .
```

## Run

### Node

To run a local version use

```bash
npm start
```

And call the endpoint with

```bash
curl -XPOST --header "Content-Type: application/json" --data '{"url": "http://ogp.me/"}' localhost:8080
```

### Docker

Run your docker container detached with

```bash
docker run -p [TARGETPART]:8080 -d org/og-extract
```

And call the data accordingly

## Usage

The server is a shallow wrapper around [openGraphScraper](https://github.com/jshemas/openGraphScraper).

You can pass alongside the url all the parameters of the library. Results look correspondingly.
