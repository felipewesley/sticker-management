# sticker-management-api

## Conteúdo

* [Sobre](#about)
* [Exemplos](#example)
* [App :computer:](#demo)
* [Métodos](#methods)
* [Tecnologias e recursos](#technologies)
* [Deixe o like :star:](#like)
* [Licença](#license)

<div id='about'/> &nbsp;

## :pushpin: Sobre

A ideia deste projeto é disponibilizar dados detalhados de figurinhas que compõem o **álbum da copa do mundo FIFA 2022**. <br>

- Trata-se de uma API Rest desenvolvida no processo de formação para especialização em desenvolvimento web full-stack;
- Desenvolvida sobre a **plataforma NodeJs**, com o framework **Express**;
- De fácil utilização para os diversos aplicativos que surgiram durante o período de comércio para controle de figurinhas faltantes dos colecionadores.

Dessa forma, as plataformas podem oferecer não somente os códigos das figurinhas (como foram disponibilizadas inicialmente),<br>
mas também detalhes relevantes de um jogador, estádio ou até mesmo de uma seleção inteira. <br>

Abaixo seguem alguns exemplos.

<div id='example'/> &nbsp;

## :pushpin: Exemplo

- [x] Fazendo uma chamada para, por exemplo, visualizar detalhes de um estádio ([demo - chamada API](https://sticker-management-api.herokuapp.com/stadium/FWC16)):

```http
GET /stadium/FWC16 HTTP/1.1
Host: sticker-management-api.herokuapp.com
Content-Type: application/json
```

Você obterá uma resposta parecida com esta:

```json
{
	"id": "FWC16",
	"name": "Lusail Stadium",
	"capacity": 80000,
	"openingMatch": false,
	"finalMatch": true
}
```

<div id='demo'/> &nbsp;

## :pushpin: App (demo)

Também foi implementada uma aplicação (visual) para demonstração de utilização deste serviço.
> Desenvolvida com Angular + Angular Material.

- Veja o [repositório](https://github.com/felipewesley/fwc-2022-sticker-viewer);
- Veja a [demo](https://felipewesley.github.io/fwc-2022-sticker-viewer/#/).

<div id='methods'/> &nbsp;

## :pushpin: Métodos

Segue na sequência alguns métodos disponibilizados pela API, com assinatura padrão do modelo HTTP.
> Alguns códigos serão declarados nas assinaturas dos métodos. Estes podem corresponder a:
> - Prefixo ou página do álbum de cada país (seleção);
> - Código da figurinha do estádio;
> - Código da figurinha do jogador;
> Um texto descritivo estará acompanhando a declaração dos métodos para melhor entendimento de cada código.

<hr>

- Detalhes de um estádio - chamada com o código da figurinha (Ex.: FWC0):
```http
GET /stadium/FWC0 HTTP/1.1
Host: sticker-management-api.herokuapp.com
Content-Type: application/json
```
- Modelo de resposta:
```ts
class Estadio {
  public id: string;
  public name: string;
  public capacity: number;
  public openingMatch: boolean;
  public finalMatch: boolean;
}
```

<hr>

- Detalhes de uma seleção - chamada com o prefixo do país (ex.: BRA):
```http
GET /country/BRA HTTP/1.1
Host: sticker-management-api.herokuapp.com
Content-Type: application/json
```
- Modelo de resposta:
```ts
type Grupo = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
class Selecao {
  public id: number;
  public name: string;
  public prefix: string;
  public teamName: string;
  public group: Grupo;
}
```

<hr>

- Detalhes de uma seleção - chamada com o número da página do álbum em que a seleção está localizada (Ex.: 1):
```http
GET /country/per-page/1 HTTP/1.1
Host: sticker-management-api.herokuapp.com
Content-Type: application/json
```
- Modelo de resposta:
```ts
type Grupo = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
class Selecao {
  public id: number;
  public name: string;
  public prefix: string;
  public teamName: string;
  public group: Grupo;
}
```

<hr>

- Detalhes de um jogador - chamada com o número da figurinha do jogador:
```http
GET /player/FWC0 HTTP/1.1
Host: sticker-management-api.herokuapp.com
Content-Type: application/json
```
- Modelo de resposta:
```ts
class Jogador {
  public id: string;
  public name: string;
  public position: string;
  public birthDate: Date;
  public height: number;
  public weight: number;
  public country: Selecao; // Modelo `Selecao` apresentado anteriormente
  public nationalTeamDebutYear: number;
  public hasExtraCromo?: boolean;
}
```

<hr>

> ### Base de dados incompleta
> O projeto está aceitando PRs (pull requests) para complemento gradativo da base de dados utilizada pela aplicação.

<div id='technologies'/> &nbsp;

## :pushpin: Tecnologias e recursos

Este serviço é desenvolvido sobre as seguintes tecnologias:

- [x] NodeJS + TypeScript + Nodemon
- [x] Express - Framework para NodeJS
- [x] Heroku - Servidor utilizado para publicação do serviço

Acerca destas tecnologias, alguns recursos/conceitos foram utilizados. Dentre eles, pode-se citar:

- [x] Tratamento de erros inteligente através da stack de handlers do Express;
- [x] Interface de repositórios para consulta à base de dados;
- [x] Abstração de tipos de resposta através de interfaces e classes;
- [x] Camada de domínio isolada contendo os modelos de negócio da solução;
- [x] Configuração de ambiente de deploy através da utilização de pipelines, integrado aos environments do GitHub;
- [x] Aprendizado do Markdown para desenvolvimento deste README elegante :rofl:;
- [x] Modelo proposto pelo W3C para apresentação de recursos no modelo HTTP (modelo este utilizado nesta documentação).

<div id='like'/> &nbsp;

## :pushpin: Deixe o like :star2:

- [x] Deixe seu like (:star:) para contribuir com o projeto! Muito obrigado! :star2:

<div id='license'/> &nbsp;

## :pushpin: Licença

[Licença MIT](https://github.com/felipewesley/sticker-management/blob/main/LICENSE)
