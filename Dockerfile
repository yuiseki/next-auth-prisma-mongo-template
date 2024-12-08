FROM node:22.12.0

WORKDIR /app
ENV PATH ./node_modules/.bin:$PATH

COPY . /app/
RUN npm ci

EXPOSE 3000

CMD ["npm", "run", "start"]
