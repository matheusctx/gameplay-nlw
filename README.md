<h1 align="center">
  <img alt="GamePlay" height="80" title="GamePlay" src=".github/logo.png" />
</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033">
</p>


![cover](.github/cover.png?style=flat)

## Guia de navegação

 - [O Projeto](#o-projeto)
 - [Features](#features)
 - [Tecnologias](#tecnologias)
 - [Recursos e bibliotecas](#recursos-e-bibliotecas)
 - [Layout](#layout)
 - [Executando o projeto](#executando-o-projeto)


## 💻 O Projeto
Aplicativo para lhe ajudar a conectar-se e organiza o momento de diversão e jogar com os amigos. Crie grupos para jogar seus games favoritos com seus amigos com esse App que possui autenticação com Discord.


## 🛠️ Features 

-   Autenticação Social OAuth2 com servidor do Discord;
-   Obtém perfil do usuário cadastro no Discord (username e avatar);
-   Lista os servidores do Discord que o usuário faz parte;
-   Permite realizar o agendamento de partidas;
-   Permite filtrar as partidas por categoria;
-   Exibe se a partida foi agendada em um servidor próprio (anfitrião) ou em servidores de outros (convidado);
-   Compartilha o convite para ingressar no servidor do usuário;
-   Permite redirecionar o usuário para o seu próprio servidor;
-   Disponibiliza a função de Logout.
- NEW: Modal de confirmação do logout do usuário.


## ✨ Tecnologias

- [![Expo](https://img.shields.io/badge/-Expo-blue.svg?style=flat-square&logo=Expo&color=000020&logoColor=fff)](https://expo.io/)
- [![React Native](https://img.shields.io/badge/-ReactNative-blue.svg?style=flat-square&logo=React&color=61DAFB&logoColor=000)](https://reactnative.dev/)
- [![TypeScript](https://img.shields.io/badge/-TypeScript-blue.svg?style=flat-square&logo=TypeScript&color=007ACC&logoColor=fff)](https://www.typescriptlang.org/)

## 🧪 Recursos e bibliotecas

-   ContextAPI
-   Async Storage
-   Expo Vector Icons
-   React Native Svg e Svg Transform
-   Axios
-   Gradient colors
-   OAuth2 Discord 
-   Expo Google Fonts
-   React Navigation Stack
-   React Native Gesture Handler
-   Expo Authentication
-   React Native Share
-   Deep Link


## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/0kv33XYjvOgvKGKHBaiR07/GamePlay-NLW-Together/duplicate). Vale lembrar que é necessário ter conta no [Figma](http://figma.com/) para acessá-lo.


## 🚀 Executando o projeto

Clone o projeto e acesse a pasta de download.

```bash
> git clone https://github.com/matheusctx/gameplay-nlw.git
> cd gameplay-nlw
```

Follow the steps below:
```bash
# Instalar as dependências (yarn)
> yarn

# Caso contrário, utilizar o npm
> npm install

# Iniciar o projeto
> expo start
```

É válido ressaltar que vocẽ deve criar o seu App no [servidor do Discord](https://discord.com/developers/applications) para obter as credenciais de autenticação. Em seguida, crie e defina no arquivo .env as configurações do seu App (remova o example do arquivo .env.example).
 
 ```bash
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
```

<div align="center">
  <small>Desenvolvido por Matheus Teixeira</small>

  [![Instagram Badge](https://img.shields.io/badge/-matheusctx-0A1033?style=flat-square&labelColor=0A1033&logo=instagram&logoColor=white&link=https://www.instagram.com/matheusctx/)](https://www.instagram.com/matheusctx/) 
  [![Linkedin Badge](https://img.shields.io/badge/-Matheus%20Teixeira-0A1033?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/matheusctx/)](https://www.linkedin.com/in/matheusctx/) 
</div>