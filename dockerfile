FROM node:latest
MAINTAINER Felipe Cisotto
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
RUN npm install -g nodemon 
COPY . /usr/src/app
# install dependencies for speedtest
RUN apt-get update && apt-get install \
  bash \
  python3 \
  python3-pip -y

RUN pip3 install speedtest-cli

EXPOSE 3000
CMD nodemon app