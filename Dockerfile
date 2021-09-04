FROM alpine:latest
# RUN apk add --no-cache mysql-client
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN apk add yarn

RUN yarn

EXPOSE 3000
COPY . ./


RUN yarn build


# ENTRYPOINT [ "ls" ] 
