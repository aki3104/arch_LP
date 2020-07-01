FROM node:12.5.0-alpine

ENV HOME="/src/" \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo 

WORKDIR ${HOME}

RUN apk update && \
    apk upgrade && \
    npm install -g npm && \
    npm install -g @vue/cli && \
    npm install -g firebase-tools && \
    vue add storybook

ENV HOST 0.0.0.0

EXPOSE 3000
