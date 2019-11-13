# MinasFut

Esta api fornece o elenco completo de todos os times de futebol de Minas Gerais.

#### Começando
Basta clonar este repositório, instalar as dependencias e ligar o servidor.
>Todos estes comandos devem ser executados na pasta raíz.
```npm install``` para instalar as dependências.
```node src/index.js``` para iniciar o servidor.

#### Dados fornecidos.

Informações dos times Mineiros: Nome do time, e elenco. Cada jogador do elenco possui um nome e o seu número da camisa.

Estrutura das informações gerais:

| Nome do campo | Valor |
| ------------- | ----- |
|    nomeTime   | String contendo o nome do time.|
|     elenco    | Vetor de objetos. Cada objeto é um jogador.|

Estrutura das informações de cada jogador:

| Nome do campo | Valor |
| ------------- | ----- |
| nome | String contendo o nome do jogador em questão. |
| numeroCamisa | String contendo o número da camisa do jogador |

Exemplo de JSON: 
```
{
    nomeTime: 'Time 1',
    elenco: [
        {
            nome: 'Jogador1',
            numeroCamisa: '24'
        },
        {
            nome: 'Jogador2',
            numeroCamisa: '42'
        },
        ...
    ]
}
```

#### Como usar ?
Neste exemplo utilizei o Axios para consumir a API.

Para instalar o Axios: ```npm install axios```

#### Utilizando o axios
Crie importe o Axios com o require: ```const axios = require('axios')```

Para utilizar existe uma rota com 3 possíveis argumentos.

A url base padrão é  ```http://localhost:8000```

A rota é ```/times```

Esta rota recebe um JSON com campo único de String chamado *query*. 

Estrutura: 
```
{
    query: 'Cruzeiro'
}
```

>Este campo recebe todos os argumentos possíveis. Você pode pesquisar nome dos times, dos jogadores ou enviar o argumento *all* para listar todos os times.
