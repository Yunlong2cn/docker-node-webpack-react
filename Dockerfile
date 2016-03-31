FROM daocloud.io/library/node:5.9.0
RUN curl -L https://npmjs.org/install.sh | sh
RUN npm i webpack -g
RUN npm i webpack-dev-server -g
WORKDIR /var/www
ADD start.sh /usr/local/bin/start.sh
EXPOSE 8888
EXPOSE 3000
CMD ["/bin/bash"]


# docker build -t node-webpack-react .
# docker build -t node-webpack-react /c/Users/Me/idoo
# docker run -it --rm --name inode -v `pwd`/www:/var/www -p 3000:3000 node-webpack-react
# docker run -it --rm --name inode -v /c/Users/Me/ido/www:/var/www -p 3000:3000 node-webpack-react /bin/bash