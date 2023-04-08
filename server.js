const express = require('express');
const app = express();

// Устанавливаем путь к статическим файлам
app.use(express.static('public'));

// Отправляем файл index.html при обращении к корню сайта
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Отправляем файл about.html при обращении к странице "О сайте"
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

// Отправляем файл games.html при обращении к странице игр
app.get('/games', (req, res) => {
  res.sendFile(__dirname + '/public/games.html');
});

// Отправляем файл news.html при обращении к странице новостей
app.get('/news', (req, res) => {
  res.sendFile(__dirname + '/public/news.html');
});

// Запускаем сервер на порте 3000
app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
