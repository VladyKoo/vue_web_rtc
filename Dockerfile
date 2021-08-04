FROM node:16-alpine3.14

EXPOSE 5000
RUN mkdir /opt/web && chown node:node /opt/web
WORKDIR /opt/web
COPY --chown=node:node . .

USER node
CMD npm ci \
	&& npm run build \
	&& npm run start
