FROM node

WORKDIR /var/www/web

COPY ./ /var/www/web

EXPOSE 5000

CMD npm i \
	&& npm run build \
	&& npm run start
