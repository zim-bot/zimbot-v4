<<<<<<< HEAD
FROM fusuf/whatsasena:latest

RUN git clone https://github.com/zim-bot/zimbot-v4  /Drips/Zimbotv4

WORKDIR /Drips/Zimbotv4

ENV TZ=Africa/Harare

RUN npm install

RUN npm install supervisor -g
RUN yarn install --ignore-engines
CMD ["node", "index.js"]
=======
FROM fedora:37

RUN sudo dnf -y update &&\
    sudo dnf install -y https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm &&\
    sudo dnf install -y git ffmpeg ImageMagick nodejs libwebp yarnpkg &&\
    sudo dnf clean all -y

WORKDIR /zimbot

COPY . /zimbot

RUN yarn

CMD ["node", "."]
>>>>>>> d904ae1d (new update)
