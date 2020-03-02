FROM node:12
WORKDIR /linkapi_challenge/client
COPY package.json /linkapi_challenge/client/package.json
RUN yarn
COPY . .

EXPOSE 8080
CMD ["yarn", "serve"]
