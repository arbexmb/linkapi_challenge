FROM node:12
RUN apt-get update -qq && apt-get install -y build-essential yarn
RUN mkdir /linkapi_challenge
WORKDIR /linkapi_challenge
COPY package.json /linkapi_challenge/package.json
COPY . .
RUN yarn
