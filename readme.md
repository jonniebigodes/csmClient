# CSM Web Client


Este repositorio contem a implementacao do cliente CSM (Crime Scene Magicians) 

# Methodologia usada
Em termos de metodologia usada usei a seguinte estrutura:
  - /src/
    - Contem os ficheiros que representam as views apresentadas ao utilizador.
      
  - /src/Assets/
    - Esta pasta contem os ficheiros css e outros tipos de media.
  - /src/client/components/Containers/
    - Dentro desta pasta estao contidos todos os containers("Componentes espertos") da aplicacao.
  - /src/client/components/Presentational/
    - Dentro desta pasta estao contidos todos os "Componentes burros"(componentes somente visualizacao) da aplicacao.
  - /dist/
    - Esta pasta contem os ficheiros que irão ser gerados para produção.
  - /src/common/actions
    - Esta pasta contem as accoes para a aplicacao(usadas pelo redux).
  - /src/common/api
    - Esta pasta contem os endpoints para pedidos externos.
 - /src/common/constants
    - Esta pasta contem todas as constantes inerentes a aplicação(i.e Tipos de accao disponiveis para a aplicacao).
  - /src/common/reducers
    - Aqui estao contidos os "redutores redux" existentes na aplicacao.
  - /src/common/store
    - Aqui está contida a "store"(sitio onde o estado global da aplicação reside e os redutores combinados) 
    
### Tech
Esta aplicação usa um numero algo grande de bibliotecas open source para funcionar corretamente:
* [React] - Excelente biblioteca Javascript para criar interfaces utilizador
* [React-Redux] - Redux é um container de estados previsivel para aplicações Javascript.
* [node.js] - evented I/O for the backend
* [Express] - framework de rede standard para conter aplicações Javascript.
* [Webpack] - Canivete suiço para efetuar deploy de aplicações.
* [Material-UI] - Google inspired material design framework
* [whatwg-fetch]- Biblioteca baseada em "promessas" para efectuar pedidos web no browser(e tem polyfill para browsers mais antigos(ie9, safari...i see you))
E claro está a implementação em si esta disponivel no [git-repo-url] como open source no Gitub


### Instalação de raiz

Cliente CSM necessita [Node.js](https://nodejs.org/) v4+ to run.

Download and extract the [latest pre-built release](https://github.com/jonniebigodes/csmClient/releases).



Para correr a aplicação localmente será necessario executar o que se encontra descrito abaixo
```sh
$ cd pasta 
$ npm install 
$ npm start

Abrir url http://localhost:5000
```
License
----
MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
   
   [React-Redux]: <https://github.com/reactjs/react-redux>
   [whatwg-fetch]: <https://github.com/github/fetch>
   [React-Bootstrap]: <https://react-bootstrap.github.io/>
   [git-repo-url]: <https://github.com/jonniebigodes/csmClient.git>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [React]: <https://facebook.github.io/react/>
   [Webpack]: <https://webpack.github.io/>
   [Material-UI]:<http://www.material-ui.com>
   [PlGh]:  <https://github.com/jonniebigodes/csmClient/tree/master/readme.md>
   
