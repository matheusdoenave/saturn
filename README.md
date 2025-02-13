![Saturn](https://github.com/naveteam/saturn/blob/assets/header.png?raw=true)

<p align="center">Repositório de componentes React baseado no <a href='https://www.figma.com/file/O3bKxIcsj2rc1FNIRclJyT/Design-System'>design system</a> da Nave.</p>

![stability-wip](https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg)
[![NPM](https://img.shields.io/npm/v/@naveteam/saturn.svg)](https://www.npmjs.com/package/@naveteam/saturn)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
![ci](https://github.com/naveteam/saturn/workflows/ci/badge.svg)
[![All Contributors](https://img.shields.io/github/all-contributors/naveteam/saturn/main)](#contributors-)

## ❗️ Motivação

Diversas vezes precisamos prototipar rapidamente novas aplicações e sempre precisamos recorrer à libs de componentes de layout como [Material UI](https://material-ui.com/pt/) ou [Ant Design](https://ant.design/).

A criação de um design system próprio pode aumentar a familiaridade da equipe com determinado padrão de código, fazendo com que gradativamente esses protótipos sejam criados de forma mais rápida e homogênea, abstraindo a necessidade de se preocupar com o layout que a aplicação terá.

## 🛠 Tecnologias utilizadas

Baseamos nosso desenvolvimento em:

- [React](https://reactjs.org/)
- [Styled Components](https://www.styled-components.com/)
- [Styled System](https://styled-system.com/)
- [Storybook](https://github.com/storybooks/storybook)

## 🚀 Instalação

No terminal, execute

```shell
yarn add @naveteam/saturn
// ou npm install @naveteam/saturn
```

## 💡 Utilização

Com a lib instalada, o seguinte código já é o suficiente para iniciar o desenvolvimento da aplicação

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, TextField } from '@naveteam/saturn'

const App = () => {
  return (
    <SaturnProvider>
      <TextField name='base' label='Label' message='Message' placeholder='Placeholder' />
    </SaturnProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

Você pode encontrar em nosso [Storybook](https://saturn.nave.rs) a documentação necessária de todos os componentes disponíveis no projeto.

## 🤝 Contribuição

Sinta-se livre para contribuir com o projeto, criando novos componentes, abrindo PRs para ajustar bugs ou mesmo levantando dúvidas, sugestões ou pedidos de ajustes através de issues. Para contribuir com nosso projeto, por favor siga nosso guia de [CONTRIBUTING](CONTRIBUTING.md).

## 📚 Links úteis

- [Figma](https://www.figma.com/file/O3bKxIcsj2rc1FNIRclJyT/Design-System): Onde todo o design do projeto se encontra
- [Chromatic](https://www.chromatic.com/builds?appId=5ee911f58891670022043e8a): Local onde ocorre a revisão dos componentes pelo time de degisn
- [NPM](https://www.npmjs.com/package/@naveteam/saturn): Acesso ao pacote NPM do projeto
- [Github](https://github.com/naveteam/saturn): Repositório da lib
- [Storybook](https://saturn.nave.rs): Página com o projeto mais atualizado para referência
- [Miro](https://miro.com/app/board/o9J_kqytVp0=): Resumo do Workflow de desenvolvimento de um componente
- [Roadmap](https://github.com/naveteam/saturn/projects/2): Link do projeto do GitHub com o andamento do desenvolvimento

## 🐛 Bugs Conhecidos

### O Storybook não renderiza PropTypes passadas dinamicamente para meu componente

Isso é uma limitação do Addon do Storybook responsável por criar a tela de Docs. Esse comportamento já foi reportado e existe uma issue aberta para tratar essa questão [aqui](https://github.com/storybookjs/storybook/issues/10536). Enquanto esse problema não é resolvido, você pode declarar as PropTypes do Styled System de forma estática, ou informar na descrição do componente quais módulos do Design System estão importados no componente.

## Contribuidores ✨

Obrigado a essas maravilhosas pessoas que contribuíram de alguma maneira para o desenvolvimento da lib ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://bittencourt.dev"><img src="https://avatars1.githubusercontent.com/u/25224459?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Eduardo Bittencourt</b></sub></a><br /><a href="https://github.com/naveteam/saturn/commits?author=eduardobittencourt" title="Documentation">📖</a> <a href="https://github.com/naveteam/saturn/commits?author=eduardobittencourt" title="Code">💻</a> <a href="#ideas-eduardobittencourt" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-eduardobittencourt" title="Maintenance">🚧</a> <a href="https://github.com/naveteam/saturn/pulls?q=is%3Apr+reviewed-by%3Aeduardobittencourt" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/naveteam/saturn/issues?q=author%3Aeduardobittencourt" title="Bug reports">🐛</a> <a href="#example-eduardobittencourt" title="Examples">💡</a> <a href="#infra-eduardobittencourt" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#talk-eduardobittencourt" title="Talks">📢</a></td>
    <td align="center"><a href="https://github.com/dpnunez"><img src="https://avatars2.githubusercontent.com/u/46852072?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daniel Pôrto Nuñez</b></sub></a><br /><a href="https://github.com/naveteam/saturn/commits?author=dpnunez" title="Code">💻</a> <a href="https://github.com/naveteam/saturn/issues?q=author%3Adpnunez" title="Bug reports">🐛</a> <a href="https://github.com/naveteam/saturn/commits?author=dpnunez" title="Documentation">📖</a> <a href="#example-dpnunez" title="Examples">💡</a> <a href="#ideas-dpnunez" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-dpnunez" title="Maintenance">🚧</a> <a href="https://github.com/naveteam/saturn/pulls?q=is%3Apr+reviewed-by%3Adpnunez" title="Reviewed Pull Requests">👀</a> <a href="#research-dpnunez" title="Research">🔬</a> <a href="#projectManagement-dpnunez" title="Project Management">📆</a></td>
    <td align="center"><a href="https://github.com/mathfigue"><img src="https://avatars2.githubusercontent.com/u/51998795?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matheus Figueiredo</b></sub></a><br /><a href="https://github.com/naveteam/saturn/commits?author=mathfigue" title="Code">💻</a> <a href="#ideas-mathfigue" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-mathfigue" title="Maintenance">🚧</a> <a href="https://github.com/naveteam/saturn/pulls?q=is%3Apr+reviewed-by%3Amathfigue" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/gabrieldocouto"><img src="https://avatars0.githubusercontent.com/u/40507979?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gabriel Do Couto Santos</b></sub></a><br /><a href="https://github.com/naveteam/saturn/commits?author=gabrieldocouto" title="Documentation">📖</a></td>
    <td align="center"><a href="http://caaiosb.github.io"><img src="https://avatars0.githubusercontent.com/u/34246280?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Caio Silva</b></sub></a><br /><a href="https://github.com/naveteam/saturn/issues?q=author%3ACaaioSB" title="Bug reports">🐛</a> <a href="https://github.com/naveteam/saturn/commits?author=CaaioSB" title="Documentation">📖</a> <a href="#content-CaaioSB" title="Content">🖋</a></td>
    <td align="center"><a href="http://thiagonunesbatista.github.io"><img src="https://avatars3.githubusercontent.com/u/67487679?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Thiago Nunes Batista</b></sub></a><br /><a href="https://github.com/naveteam/saturn/commits?author=thiagonunesbatista" title="Code">💻</a> <a href="https://github.com/naveteam/saturn/commits?author=thiagonunesbatista" title="Documentation">📖</a> <a href="#example-thiagonunesbatista" title="Examples">💡</a></td>
    <td align="center"><a href="https://github.com/rbschumacher"><img src="https://avatars2.githubusercontent.com/u/54547117?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rafael Schumacher</b></sub></a><br /><a href="https://github.com/naveteam/saturn/commits?author=rbschumacher" title="Code">💻</a> <a href="https://github.com/naveteam/saturn/commits?author=rbschumacher" title="Documentation">📖</a> <a href="#example-rbschumacher" title="Examples">💡</a> <a href="https://github.com/naveteam/saturn/pulls?q=is%3Apr+reviewed-by%3Arbschumacher" title="Reviewed Pull Requests">👀</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/juliano-reis-2ab203142/"><img src="https://avatars0.githubusercontent.com/u/30237272?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Juliano Reis</b></sub></a><br /><a href="https://github.com/naveteam/saturn/pulls?q=is%3Apr+reviewed-by%3Ajulianoddreis" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/italonolasco"><img src="https://avatars0.githubusercontent.com/u/19333230?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ítalo Nolasco</b></sub></a><br /><a href="https://github.com/naveteam/saturn/commits?author=italonolasco" title="Code">💻</a> <a href="#maintenance-italonolasco" title="Maintenance">🚧</a> <a href="#talk-italonolasco" title="Talks">📢</a> <a href="#projectManagement-italonolasco" title="Project Management">📆</a> <a href="https://github.com/naveteam/saturn/pulls?q=is%3Apr+reviewed-by%3Aitalonolasco" title="Reviewed Pull Requests">👀</a> <a href="#example-italonolasco" title="Examples">💡</a> <a href="#ideas-italonolasco" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/matheus-cruz-54204b185/"><img src="https://avatars3.githubusercontent.com/u/33552730?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matheus Cruz</b></sub></a><br /><a href="https://github.com/naveteam/saturn/commits?author=devSiso" title="Code">💻</a> <a href="https://github.com/naveteam/saturn/commits?author=devSiso" title="Documentation">📖</a> <a href="#example-devSiso" title="Examples">💡</a> <a href="#maintenance-devSiso" title="Maintenance">🚧</a> <a href="https://github.com/naveteam/saturn/pulls?q=is%3Apr+reviewed-by%3AdevSiso" title="Reviewed Pull Requests">👀</a> <a href="#business-devSiso" title="Business development">💼</a> <a href="#ideas-devSiso" title="Ideas, Planning, & Feedback">🤔</a> <a href="#projectManagement-devSiso" title="Project Management">📆</a> <a href="#talk-devSiso" title="Talks">📢</a> <a href="#infra-devSiso" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#research-devSiso" title="Research">🔬</a> <a href="https://github.com/naveteam/saturn/issues?q=author%3AdevSiso" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/vitorwtavares"><img src="https://avatars3.githubusercontent.com/u/60239852?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vítor Tavares</b></sub></a><br /><a href="https://github.com/naveteam/saturn/commits?author=vitorwtavares" title="Code">💻</a> <a href="#maintenance-vitorwtavares" title="Maintenance">🚧</a> <a href="https://github.com/naveteam/saturn/pulls?q=is%3Apr+reviewed-by%3Avitorwtavares" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/naveteam/saturn/commits?author=vitorwtavares" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/coelhomariana/"><img src="https://avatars.githubusercontent.com/u/42039627?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mariana Coelho</b></sub></a><br /><a href="https://github.com/naveteam/saturn/commits?author=coelhomariana" title="Code">💻</a> <a href="https://github.com/naveteam/saturn/commits?author=coelhomariana" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/eduardaconde"><img src="https://avatars.githubusercontent.com/u/46696000?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Eduarda Eisfeld Conde</b></sub></a><br /><a href="https://github.com/naveteam/saturn/commits?author=eduardaconde" title="Code">💻</a> <a href="https://github.com/naveteam/saturn/commits?author=eduardaconde" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.twitter.com/jpbretanha"><img src="https://avatars.githubusercontent.com/u/7989125?v=4?s=100" width="100px;" alt=""/><br /><sub><b>João Pedro Bretanha</b></sub></a><br /><a href="https://github.com/naveteam/saturn/commits?author=jpbretanha" title="Code">💻</a> <a href="https://github.com/naveteam/saturn/commits?author=jpbretanha" title="Documentation">📖</a> <a href="#ideas-jpbretanha" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-jpbretanha" title="Maintenance">🚧</a> <a href="https://github.com/naveteam/saturn/issues?q=author%3Ajpbretanha" title="Bug reports">🐛</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://glauber@brack.com.br"><img src="https://avatars.githubusercontent.com/u/57924169?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Glauber Brack</b></sub></a><br /><a href="https://github.com/naveteam/saturn/commits?author=glauberbrack" title="Code">💻</a> <a href="#maintenance-glauberbrack" title="Maintenance">🚧</a> <a href="https://github.com/naveteam/saturn/issues?q=author%3Aglauberbrack" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/giuliane-oliveira-a3590316b/"><img src="https://avatars.githubusercontent.com/u/38573412?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Giuliane</b></sub></a><br /><a href="#maintenance-GiulianeOliveira" title="Maintenance">🚧</a> <a href="https://github.com/naveteam/saturn/issues?q=author%3AGiulianeOliveira" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/igorcasconi"><img src="https://avatars.githubusercontent.com/u/37385365?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Igor Casconi de Oliveira</b></sub></a><br /><a href="https://github.com/naveteam/saturn/commits?author=igorcasconi" title="Code">💻</a> <a href="https://github.com/naveteam/saturn/commits?author=igorcasconi" title="Documentation">📖</a> <a href="https://github.com/naveteam/saturn/pulls?q=is%3Apr+reviewed-by%3Aigorcasconi" title="Reviewed Pull Requests">👀</a> <a href="#projectManagement-igorcasconi" title="Project Management">📆</a> <a href="#maintenance-igorcasconi" title="Maintenance">🚧</a> <a href="#research-igorcasconi" title="Research">🔬</a> <a href="#ideas-igorcasconi" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/naveteam/saturn/issues?q=author%3Aigorcasconi" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/gcdpinho"><img src="https://avatars.githubusercontent.com/u/12126109?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gustavo Pinho</b></sub></a><br /><a href="https://github.com/naveteam/saturn/commits?author=gcdpinho" title="Code">💻</a> <a href="https://github.com/naveteam/saturn/commits?author=gcdpinho" title="Documentation">📖</a> <a href="https://github.com/naveteam/saturn/pulls?q=is%3Apr+reviewed-by%3Agcdpinho" title="Reviewed Pull Requests">👀</a> <a href="#maintenance-gcdpinho" title="Maintenance">🚧</a> <a href="#ideas-gcdpinho" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/naveteam/saturn/issues?q=author%3Agcdpinho" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/rickyalmeidadev"><img src="https://avatars.githubusercontent.com/u/60705947?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ricky Almeida</b></sub></a><br /><a href="https://github.com/naveteam/saturn/pulls?q=is%3Apr+reviewed-by%3Arickyalmeidadev" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/Carrilhos"><img src="https://avatars.githubusercontent.com/u/48035917?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gabriel Oliveira Carrilhos</b></sub></a><br /><a href="https://github.com/naveteam/saturn/commits?author=Carrilhos" title="Code">💻</a> <a href="#maintenance-Carrilhos" title="Maintenance">🚧</a> <a href="https://github.com/naveteam/saturn/pulls?q=is%3Apr+reviewed-by%3ACarrilhos" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/gabriel-ribeiro-8737021a6/"><img src="https://avatars.githubusercontent.com/u/45475094?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gabriel Ribeiro</b></sub></a><br /><a href="https://github.com/naveteam/saturn/commits?author=ghblue" title="Code">💻</a> <a href="#maintenance-ghblue" title="Maintenance">🚧</a> <a href="https://github.com/naveteam/saturn/pulls?q=is%3Apr+reviewed-by%3Aghblue" title="Reviewed Pull Requests">👀</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/powilliam"><img src="https://avatars.githubusercontent.com/u/55867831?v=4?s=100" width="100px;" alt=""/><br /><sub><b>William Porto</b></sub></a><br /><a href="https://github.com/naveteam/saturn/commits?author=powilliam" title="Code">💻</a> <a href="#maintenance-powilliam" title="Maintenance">🚧</a> <a href="https://github.com/naveteam/saturn/pulls?q=is%3Apr+reviewed-by%3Apowilliam" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="http://Tessmer"><img src="https://avatars.githubusercontent.com/u/70981644?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Samanta Tessmer</b></sub></a><br /><a href="https://github.com/naveteam/saturn/commits?author=Tessmer" title="Code">💻</a> <a href="#maintenance-Tessmer" title="Maintenance">🚧</a> <a href="https://github.com/naveteam/saturn/pulls?q=is%3Apr+reviewed-by%3ATessmer" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://ffzanini.github.io/"><img src="https://avatars.githubusercontent.com/u/20977822?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Felipe Frantz Zanini</b></sub></a><br /><a href="https://github.com/naveteam/saturn/commits?author=ffzanini" title="Code">💻</a> <a href="#maintenance-ffzanini" title="Maintenance">🚧</a> <a href="https://github.com/naveteam/saturn/pulls?q=is%3Apr+reviewed-by%3Affzanini" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

Esse projeto segue a especificação de [all-contributors](https://github.com/all-contributors/all-contributors). Qualquer tipo de contribuição será bem-vinda!

## Licença

MIT © [Nave Team](https://github.com/naveteam)
