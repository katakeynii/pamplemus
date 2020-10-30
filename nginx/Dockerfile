# Base image
FROM nginx:alpine
# Install dependencies

# RUN apt-get update -qq && apt-get -y install apache2-utils

# RUN apt-get update \
#     && apt-get install curl wget curl gnupg -yq

RUN rm /etc/nginx/conf.d/default.conf
# establish where Nginx should look for files
# ENV APP_ROOT /usr/src/app
# # Set our working directory inside the image
RUN mkdir -p /var/www/html

WORKDIR /var/www/html
# create log directory
RUN mkdir -p /var/www/html/log
RUN mkdir -p /var/www/html/public


COPY /build /var/www/html/public

# RUN wget -qO- https://deb.nodesource.com/setup_8.x | -E bash -

# RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
# RUN apt-get install -y nodejs
# copy over static assets
#COPY public public/
# Copy Nginx config template
# COPY docker/nginx/nginx.conf /tmp/docker.nginx
COPY nginx/prod.nginx.conf /tmp/prod.docker.nginx

# COPY docker/nginx/nginx.error.log /var/www/html/log/nginx.error.log
# COPY docker/nginx/nginx.access.log /var/www/html/log/nginx.access.log
#COPY dist/Frontend /usr/src/app
# substitute variable references in the Nginx config template for real values from the environment
# put the final config in its place

# add `/usr/src/app/node_modules/.bin` to $PATH

# install and cache app dependencies
# COPY package.json /usr/src/app/package.json
# COPY . /usr/src/app

# RUN npm i npm@latest -g
# RUN npm install -g @angular/cli
# RUN npm install
# RUN npm audit fix


# ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY nginx/prod.nginx.conf /etc/nginx/nginx.conf
# COPY /tmp/prod.docker.nginx /etc/nginx/nginx.conf

# RUN envsubst '$APP_ROOT' < /tmp/docker.nginx > /etc/nginx/conf.d/default.conf
# RUN envsubst '$APP_ROOT' < /tmp/prod.docker.nginx > /etc/nginx/conf.d/default.conf

EXPOSE 80
# Use the "exec" form of CMD so Nginx shuts down gracefully on SIGTERM (i.e. `docker stop`)
CMD [ "nginx", "-g", "daemon off;" ]
