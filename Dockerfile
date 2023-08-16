FROM node:16 AS development
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 7003
CMD [ "yarn", "start" ]

FROM node:16-alpine AS production
WORKDIR /app
COPY --from=development /app/build ./build
EXPOSE 7003
RUN npm install -g serve
CMD [ "serve", "-s", "build", "-l", "7003"]