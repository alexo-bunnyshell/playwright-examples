FROM node:20-bookworm


RUN mkdir /app
WORKDIR /app

RUN npm install @playwright/test@1.43.0
RUN npx playwright install --with-deps


COPY . .