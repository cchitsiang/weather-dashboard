FROM node:10.1.0

MAINTAINER cchitsiang <cchitsiang@hotmail.com>

WORKDIR /app

ADD . /app

RUN npm install

RUN npm run build

ENV PORT 80
EXPOSE ${PORT}

CMD ["npm", "start"]