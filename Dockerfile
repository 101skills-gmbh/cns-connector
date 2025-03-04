FROM node:16.13.0 as builder
ARG COMMIT_HASH
ARG BUILD_NUMBER
ARG PACKAGE_VERSION

WORKDIR /usr/app
COPY package.json package-lock.json tsconfig.json ./
COPY .ci .ci

RUN npm ci
COPY src src

RUN npm install -g npm-run-all typescript
RUN npm run build

FROM node:16.13.0-alpine
ENV NODE_CONFIG_ENV=prod
WORKDIR /usr/app
COPY config config
COPY package.json package-lock.json ./

RUN npm ci --production

COPY --from=builder /usr/app/dist/ dist/

LABEL org.opencontainers.image.source = "https://github.com/nmshd/cns-connector"

ENTRYPOINT node ./dist/index.js
