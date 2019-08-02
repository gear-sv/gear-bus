FROM node:10
RUN echo 'start'
RUN npm install -g bitbus --unsafe-perm
RUN echo 'done'
WORKDIR /mnt
COPY ./run.sh /mnt/run.sh
COPY ./gear.json /mnt/gear.json
EXPOSE 3007
CMD ["/bin/sh","run.sh"]
