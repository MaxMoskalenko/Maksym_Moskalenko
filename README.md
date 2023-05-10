# Maksym_Moskalenko

### WebAPI

To launch application:

1. Install the dependencies with `npm ci`
2. Launch server with `npm run server` command
3. You can check demo enpoints with commands `npm run upload`, `npm run get-metadata` and `npm run delete`
4. Or you can use `curl` for your custom commands

To upload file:

```
curl -X POST -F 'file=@{FILE_PATH} http://localhost:3002/upload
```

To get metadata:

```
curl -X GET http://localhost:3002/file?filename={FILE_PATH}
```

To delete file:

```
curl -X DELETE http://localhost:3002/file?filename={FILE_PATH}
```
