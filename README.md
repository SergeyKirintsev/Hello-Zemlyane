# Hello-Zemlyane
## Using Ubuntu

### Install Node.js LTS
```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

sudo apt-get install -y nodejs
```

### For Ubuntu, this PPA provides the latest stable upstream Git version
```
add-apt-repository ppa:git-core/ppa

apt update; apt install git
```
### [PM2](https://www.npmjs.com/package/pm2)
```
npm install pm2 -g
```
---
## Clone and run project
```
git clone https://github.com/your.git
cd folderYourPrj
npm i

pm2 start app.js
pm2 startup
pm2 save
```
### Nano text editor
```
^O - Write Out

^X - Exit
```

### ssh
```
ssh-keygen
ssh-copy-id user@server
ssh user@server
```