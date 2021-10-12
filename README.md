# Discord Sonar Webhook

Esta é uma aplicação de ponte para a comunicação do Sonar com Discord via webhook

## Instalação

Na raiz do projeto, executar o comando

```bash
npm i
```

## Uso

Preencher o arquivo conf.json com os campos
 - serverUrl - raiz do endereço do Sonar server
 - webhookUrl - endereço do webhook obtido no servidor do Discord
 - port - porta para disponibilizar a api da aplicação

Nas configurações do servidor Sonar, criar um webhook com o endereço da aplicação desta maneira:
 http://ip:port/message

Na raiz do projeto, executar o comando

```bash
node app.js
```
Assim que um scan for executado, será enviada uma mensagem no canal configurado através do Discord



## Licença
[MIT](https://choosealicense.com/licenses/mit/)