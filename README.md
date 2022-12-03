# dreamdev.team

## Запуск проекта

- Запустить сервер для разработки: `npm run dev`
- Запустить сборку: `npm run build`
- Запустить сервер для продакшена: `docker compose up -d`

## Форматирование

Отформатировать код в директории src: `npm run format`

### Пример caddy_setting.env

```
HOST=dreamdev.team
CADDY_TLS_TYPE=internal # самоподписанные сертификаты
CADDY_TLS_TYPE=email@mail.ru # Let's encrypt сертификаты
```
