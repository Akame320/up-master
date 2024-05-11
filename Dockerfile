FROM node:20.12.2-alpine3.19

ENV PROJECT_ROOT=/project
ADD app app
WORKDIR app

RUN npm install --prefer-offline --no-audit --no-fund \
    && npm cache clean --force

RUN npm run build

CMD ["npm", "run", "start"]