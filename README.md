# tst-otel-jaeger

## Getting started

To install dependencies:

```sh
bun i
```

Running locally:

```sh
bun run start:dev
```

## Infrastructure

### Up

```sh
bun run infra:up
```

### Down

```sh
bun run infra:down
```

## Load testing

### K6

```sh
k6 run script.js
```

### Autocannon

```sh
bunx autocannon -c=25 -d=60 http://localhost:8080/api
```
