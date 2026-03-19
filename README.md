   <h1 align="center">
       Documentação LiPo
    <br />
    <br />
    <a href="https://docs.lipolang.dev/pages">
     <img src="https://github.com/user-attachments/assets/dd2fc824-4dcf-4205-a605-b50416f45e38" alt="LiPo" height="400">
    </a>
  </h1>

</div>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/Português-f89d00?style=flat&logo=google-translate&logoColor=white" alt="Portugol"></a>
  <a href="#"><img src="https://img.shields.io/badge/Markdown-000000?style=flat&logo=markdown" alt="Markdown"></a>
  <a href="#"><img src="https://img.shields.io/badge/Mintlify-00C09B?style=flat&logo=mintlify&logoColor=white" alt="Mintlify"></a>
  <a href="#"><img src="https://img.shields.io/badge/HTML/CSS/JS-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML/CSS/JS"></a>
  <a href="#"><img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" alt="Node.js"></a>
  <a href="#"><img src="https://img.shields.io/badge/Chrome-4285F4?style=flat&logo=googlechrome&logoColor=white" alt="Chrome"></a>
  <a href="#"><img src="https://img.shields.io/badge/Firefox-FF7139?style=flat&logo=firefox&logoColor=white" alt="Firefox"></a>
  <a href="#"><img src="https://img.shields.io/badge/Edge-0078D7?style=flat&logo=microsoftedge&logoColor=white" alt="Edge"></a>
  <a href="#"><img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white" alt="Git"></a>
  <a href="#"><img src="https://img.shields.io/badge/Internet-0078D7?style=flat&logo=internetexplorer&logoColor=white" alt="Internet"></a>
  <a href="#"><img src="https://img.shields.io/badge/Editor_de_Texto-0078D7?style=flat&logo=visualstudiocode&logoColor=white" alt="Editor de Texto"></a>
  <a href="https://github.com/StellaKarolinaNunes/lipo-docs-mintlify/blob/main/LICENSE"><img src="https://img.shields.io/github/license/StellaKarolinaNunes/lipo-docs-mintlify?style=flat&logo=open-source-initiative&logoColor=white" alt="Licença"></a>
</p>

<br>

---

> **Documentação de Deploy**: Para configurar e visualizar a documentação do projeto localmente, siga o guia de deploy disponível na seção [Documentação de Deploy](#documentação-de-deploy). Nela você encontrará os passos para instalar o Mintlify, executar o ambiente de documentação e acessar a interface no navegador.


---

##  Introdução
**LIPO** (*Linguagem em Portugol*)  é uma linguagem de programação educacional que utiliza palavras-chave em português, projetada para ensinar lógica e conceitos de programação de forma clara e acessível. Esta documentação tem como objetivo fornecer orientações detalhadas sobre a sintaxe, comandos, estruturas e recursos do LIPO, servindo como referência oficial para estudantes e educadores que utilizam a linguagem em seus estudos e projetos.

<br>

## Por que Documentação LIPO?
A **Documentação LIPO** existe para servir como guia completo e confiável para quem utiliza a linguagem. Ela centraliza informações sobre sintaxe, comandos, estruturas de controle e boas práticas, ajudando estudantes e educadores a entenderem e aplicarem o LIPO de forma correta e eficiente, sem a necessidade de buscar informações dispersas ou em fontes externas. 

<br>

## Como acessar
 
<a href="https://docs.lipolang.dev/pages" target="_blank"> <img src="./images/deploy.png" width="900" alt="Documentação do Lipo 🤝"> </a>



<br>

## A Solução
A solução proposta é uma plataforma de documentação centralizada e intuitiva, construída com **Mintlify**. Ela resolve a fragmentação de informações sobre a linguagem **LiPo**, oferecendo um ambiente onde estudantes e desenvolvedores podem encontrar rapidamente referências de sintaxe, exemplos práticos e guias de instalação, tudo em um único lugar e com uma interface amigável.

<br>

## Funcionalidades Principais
- **Linguagem em Português:** Utiliza palavras-chave em português, facilitando o aprendizado e a compreensão.
- **Guia Completo:** Explica sintaxe, comandos, estruturas de controle e funções da linguagem.
- **Exemplos Práticos:** Apresenta exemplos que ajudam a entender a aplicação dos conceitos.
- **Foco Educacional:** Voltada para estudantes e professores, reforçando a lógica de programação.
- **Recursos de pesquisa rápida e navegação fácil**

<br>

 ---

 ##  Estrutura de Pastas

 A estrutura do projeto segue o padrão de organização por camadas, facilitando a manutenção e escalabilidade.

 ```bash
 lipo-docs-mintlify/
├── css/                            # Estilos do website
│   ├── styles.css/                 # Estilos do website
├── images/                         # Imagens do website
│   ├── banner_github.png           # Banner do GitHub
│   ├──banner.png                   # Banner do Mintlify
│   ├──ConsoleCodigoLipodark.png    # Banner do ConsoleCodigoLipo
│   ├──ConsoleCodigoLipolight.png   # Banner do ConsoleCodigoLipo
│   ├──dark.jpg                     # Banner do dark
│   ├──deploy.png                   # Banner do deploy
│   ├──EditorCodigoLipodark.png     # Banner do EditorCodigoLipo
│   ├──EditorCodigoLipolight.png    # Banner do EditorCodigoLipo
│   ├──Lipodark.png                 # Banner do Lipodark
├── logo/                           # Logo do website
│   ├──dark.svg                     # Logo do website
│   ├──light.svg                    # Logo do website
├── pages/                          # Conteúdo da Documentação em MDX
│   ├── essentials/                 # Conceitos básicos e fundamentais
│   ├── estruturas_de_controle/     # Estruturas condicionais e loops
│   ├── exemplos_praticos/          # Exemplos reais de uso
│   ├── funcoes/                    # Declaração e uso de funções
│   ├── gramatica_formal/           # Regras léxicas e gramaticais
│   ├── importante/                 # Guia de contribuição, licença etc..
│   ├── itens_geral/                # Comentários e bibliotecas
│   ├── operadores/                 # Aritméticos, lógicos e comparação
│   ├── sistema_imports/            # Sistema de módulos e imports
│   ├── variaveis_constantes/       # Declaração de variáveis e constantes
│   ├── index.mdx                   # Página inicial da doc
│   ├── inicio_rapido.mdx           # Guia de start rápido
│   ├── instalacao.mdx              # Instruções de instalação
│   └── editor_online.mdx           # Documentação do editor web
├── CODE_OF_CONDUCT.md              # Código de conduta
├── CONTRIBUTING.md                 # Guia de contribuição
├── LICENSE.md                      # Licença do projeto
├── README.md                       # Documentação do projeto
├── docs.json                       # Arquivo de configuração do Mintlify

```
 <br>

##  Instalação

### Pré-requisitos para Rodar LIPO na sua maquina 
*  **Navegador Atualizado:**  
  - [Chrome](https://www.google.com/intl/pt-BR/chrome/)
  - [Firefox](https://www.firefox.com/pt-BR/download/all/)
  - [Edge](https://www.microsoft.com/pt-br/edge/download?form=MA13FJ)
  - etc....
*  **Conexão com a Internet:** Para carregar conteúdos e exemplos online.
*   **[Conta Mintlify](https://www.mintlify.com) (opcional):** Apenas se quiser editar, colaborar ou gerar novas versões da documentação.
*   **Editor de Texto (opcional):** você pode utilizar:
    - [Visual Studio ](https://code.visualstudio.com/download)
    - [Sublime Text](https://www.sublimetext.com/3)
    - [notepad++](https://notepad-plus-plus.org/downloads/)
    - ou Qualquer outro editor de texto de sua preferência  
*   **Conhecimento Básico de Markdown:** Para entender a estrutura  
*   **[Git instalado](https://git-scm.com/downloads)**
*   **[Documentação Mitntlify](https://www.mintlify.com/docs)** Para qalquer duvida da instalação
*   **[Node.js (versão LTS)](https://nodejs.org/pt)** instalado na máquina.

> **Observação:**
>  * Não é necessário instalar nenhum software adicional, pois a documentação é totalmente web-based.
>  * Não é obrigatório criar conta no Mintlify se você só quer rodar a doc localmente. Conta é necessária apenas para editar ou publicar no site deles.

<br>

## Tecnologias Utilizadas
- **Mintlify**: Plataforma para criação de documentação técnica moderna.
- **Markdown**: Formatação de conteúdo simples e eficiente.
- **Node.js**: Gerenciamento de pacotes e execução do ambiente local.
- **GitHub**: Hospedagem do código-fonte e controle de versão.

###  Instalação Rápida

>  **Pré-requisito:** Por favor instale **[Node.js](https://nodejs.org/en/download)** antes de prosseguir.

####  1. Clone o repositório

```bash

git clone https://github.com/StellaKarolinaNunes/mintlify-docs
```

####  2. Clone repositorio 

```bash
cd mintlify-docs
```

####  3. Instale  a CLI.:

```bash
npm i -g mint
```

> **Alternativamente, se você não quiser instalar a CLI globalmente**, você pode executar um script único: ```npx mint dev```

#### 4. Rode o servidor local:

```bash
mint dev
```

#### 5. Abra o navegador e acesse:

```bash
http://localhost:porta
```

### 6. Scripts Disponíveis

Na pasta raiz do projeto, você pode executar os seguintes comandos:

* `mint dev` | Inicia o servidor de desenvolvimento local  
* `mint build` | Valida a estrutura e gera o build da documentação 
* `npm i -g mintlify` | Comando recomendado para instalar a CLI 

>**PARA MAIS DUVIDAS ACESSE: [PASSO A PASSO DA INSTALAÇÃO DO SITE DA MINTLIFY](https://www.mintlify.com/docs/installation)**

<br>

 ##  Roadmap

- [x] **Configuração Inicial**: Instalação da CLI e ambiente de desenvolvimento.
- [ ] **Personalização de Marca**: Configurar cores, logo e fontes no arquivo `mint.json`.
- [ ] **Arquitetura de Informação**: Definir a estrutura de navegação e grupos de páginas.
- [ ] **Desenvolvimento de Conteúdo**:
    - [ ] Guia de Introdução e Quickstart.
    - [ ] Documentação detalhada das funcionalidades.
    - [ ] Seção de FAQ e Troubleshooting.
- [ ] **Referência de API**: Integrar especificações OpenAPI/Swagger para documentação interativa.
- [ ] **Componentes Avançados**: Implementar callouts, tabs e snippets de código reutilizáveis.
- [ ] **Otimização e SEO**: Revisar metadados e performance das páginas.
- [ ] **Deploy Contínuo**: Configurar integração com GitHub para deploys automáticos na Mintlify.

<br>

##  Contribuição
Contribuições são muito bem-vindas! Siga estes passos:

### Como Contribuir
1. **Fork** este repositório
2. **Clone** seu fork localmente
3. **Crie** uma branch para sua feature: `git checkout -b feature/nova-funcionalidade`
4. **Faça** suas alterações e commits
5. **Teste** suas modificações
6. **Abra** um Pull Request detalhado

<br>

###  Diretrizes

- Código limpo e bem comentado
- Mensagens de commit claras e objetivas
- Teste todas as funcionalidades
- Mantenha a documentação atualizada
- Siga os padrões de código existentes

<br>

##  Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

``` bash
MIT License - você pode usar, modificar e distribuir livremente,
mantendo a referência ao repositório original.
```

 <br>

 ## Contato

 Se você tiver dúvidas, sugestões ou quiser saber mais sobre o projeto, entre em contato:

 - **Principais Desenvolvedores:** [Stella Karolina](https://github.com/StellaKarolinaNunes)
 - **Repositório:** [lipo-docs-mintlify no GitHub](https://github.com/StellaKarolinaNunes/lipo-docs-mintlify)
 - **LinkedIn:** [Stella Karolina Nunes](https://www.linkedin.com/in/stella-karolina/)

 <br>

  ## Créditos
   O **Lipo** é construído com o apoio de tecnologias e comunidades incríveis:

 - **Framework:** [Mintlify](https://www.mintlify.com/)
 - **Design:** [Theme maple]( https://maple.mintlify.app/welcome )
 - **Ícones:** [Iconify](https://iconify.design/)
 - **Professor Orientador:** [Deriks Karlay Dias Costa](https://github.com/karlaycosta)


### Desenvolvimento Principal

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/StellaKarolinaNunes">
        <img src="https://github.com/StellaKarolinaNunes.png" width="100px" alt="Stella Karolina"/>
        <br />
        <sub><b>Stella Karolina (Desenvolvedora)</b></sub>
        <br />
      </a>
    </td>
  </tr>
</table>
 

  ##  Agradecimentos

 Agradecemos a todos que contribuíram para o desenvolvimento deste projeto.

 <table>
  <tr>
    <td align="center">
      <a href="https://github.com/Gab0701">
        <img src="https://github.com/Gab0701.png" width="80px" alt="João Gabriel"/>
        <br />
        <sub><b>João Gabriel</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jhony996358">
        <img src="https://github.com/jhony996358.png" width="80px" alt="Jhonefer Vinicius"/>
        <br />
        <sub><b>Jhonefer Vinicius</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Igormachado90">
        <img src="https://github.com/Igormachado90.png" width="80px" alt="Igor Machado"/>
        <br />
        <sub><b>Igor Machado</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/italo-assuncao">
        <img src="https://github.com/italo-assuncao.png" width="80px" alt="Ítalo Assunção"/>
        <br />
        <sub><b>Ítalo Assunção</b></sub>
      </a>
    </td>
     <td align="center">
      <a href="https://github.com/NoanMoreira">
        <img src="https://github.com/NoanMoreira.png" width="80px" alt="Stella Karolina"/>
        <br />
        <sub><b>Noan Moreira</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Luitinho147">
        <img src="https://github.com/Luitinho147.png" width="80px" alt="Luiz"/>
        <br />
        <sub><b>Luiz</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/StellaKarolinaNunes">
        <img src="https://github.com/StellaKarolinaNunes.png" width="80px" alt="Stella Karolina"/>
        <br />
        <sub><b>Stella Karolina</b></sub>
      </a>
    </td>
  </tr>
</table>




 <br>