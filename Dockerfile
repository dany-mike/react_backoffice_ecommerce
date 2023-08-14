FROM node:16 AS development
RUN mkdir /app && chown node:node /app
ENV NODE_ENV development
WORKDIR /app
USER node
COPY --chown=node:node package.json .
COPY --chown=node:node yarn.lock .
RUN yarn install
COPY --chown=node:node . .
EXPOSE 7003
CMD [ "yarn", "start" ]

FROM node:16-alpine AS production
WORKDIR /app
COPY --from=development /app/build ./build
EXPOSE 7003
RUN npm install -g serve
CMD [ "serve", "-s", "build", "-l", "7003"]