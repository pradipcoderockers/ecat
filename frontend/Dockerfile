FROM node:12.18.1

RUN useradd --user-group --create-home --shell /bin/false app && npm install -g @angular/cli

ENV HOME=/home/app

WORKDIR $HOME

ENV APP_NAME=client

COPY . $HOME/$APP_NAME/

RUN chown -R app:app $HOME/*

USER app

WORKDIR $HOME/$APP_NAME

RUN npm install

EXPOSE 4200 49153

CMD ["npm", "start"]
