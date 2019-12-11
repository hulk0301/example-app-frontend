# Build frontend
FROM node:12-slim AS build
COPY . /workspace
WORKDIR /workspace
RUN npm install && npm run-script build

# Use build artifacts and serve it
FROM node:12-slim
COPY run.js package.json ./
RUN npm install --only=production
COPY --from=build /workspace/build ./build

CMD ["node", "./run.js"]
EXPOSE 3000/tcp
