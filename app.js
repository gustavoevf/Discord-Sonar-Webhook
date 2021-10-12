const { Webhook, MessageBuilder } = require('discord-webhook-node');
const express = require('express');
const conf = require('./conf');

var app = express();
const hook = new Webhook(conf.webhookUrl);

async function sendMessage(title, text, footer, url) {
    const message = new MessageBuilder()
    .setTitle(title)
    .setText(text)
    .setFooter(footer)
    .setUrl(url);
    
    await hook.send(message);
}

app.post('/message', (req, res) => {
    const request = req.body;
    sendMessage(
        'Análise Sonar ' + request.project.name, 
        request.status, ' | ' + request.id,
        "Execução automática programada " + request.analysedAt + " | " + request.properties["sonar.analysis.detectedci"],
        "http://" + conf.serverUrl + "dashoboard?id=" + request.project.key
    ).then(() => {
        res.send("Mensagem Enviada")
    });
});

app.listen(conf.port, () => {
    console.log(`App disponivel na porta ${port}!`)
});



