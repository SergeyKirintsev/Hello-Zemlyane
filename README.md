# Hello-Zemlyane
## Using Ubuntu

### Update ubuntu
```
sudo apt-get update
sudo apt-get dist-upgrade
```

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
sudo npm install pm2 -g

pm2 start app.js
pm2 startup (копируем и выполняем полученную команду)
pm2 save

pm2 kill # Полностью отключает текущий PM2 и запущенные приложения
pm2 restart app 
```
---
## Clone and run project
```
git clone https://github.com/your.git
cd folderYourPrj
npm i

git pull origin main
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
---
### MongoDB
```
curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -

echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list

sudo apt update

sudo apt install -y mongodb-org
```
Следующая команда запустит mongo-сервер:
```
sudo service mongod start
```
Сделаем так, чтобы MongoDB запускался автоматически даже при перезагрузке удалённой машины:
```
sudo systemctl enable mongod.service
```
---
### Nginx
```
sudo apt update
sudo apt install -y nginx
```
Файрвол — ufw
```
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH

sudo ufw enable
```
```
sudo systemctl enable --now nginx
```
В nginx есть две директории для хранения конфигураций: sites-available/ и sites-enabled/. В первой хранятся конфигурации всех хостов, а во второй — ссылки только на активные. Перед редактированием конфигурации нужно создать символическую ссылку между sites-available и sites-enabled
```
sudo nano /etc/nginx/sites-available/default

# /etc/nginx/sites-available/default — путь к конфигурационному файлу nginx
```
тестировать конфигурацию «на лету»
```
sudo nginx -t
```
```
sudo systemctl reload nginx
```
```
/etc/nginx/sites-available/default

server {
    listen 80;
    server_name api.mesto.club;
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

server {
    listen 80;
    server_name mesto.club;
    location / {
        try_files $uri $uri/ /index.html;
    }
    root /home/kserg80/frontend;
}
```