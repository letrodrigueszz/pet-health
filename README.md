# Pet Health 🐾

**Status do Projeto:** Em Desenvolvimento 🚧

## 🎯 Objetivo

**Pet Health** é um aplicativo móvel multiplataforma (iOS e Android) desenvolvido para permitir que donos de pets cadastrem seus animais e mantenham um registro simplificado de informações vitais, funcionando como uma agenda de saúde digital de fácil acesso.

## ✨ Funcionalidades Principais

O aplicativo foi construído para ser simples, intuitivo e funcional, focando nas seguintes características:

* **🏠 Tela Principal (Home):** Uma tela de boas-vindas amigável que apresenta o aplicativo e oferece navegação clara para as seções principais: "Ver Meus Pets" e "Cadastrar Novo Pet".

* **📝 Formulário de Cadastro Interativo:**
    * Campos para **Nome**, **Espécie** e **Data de Nascimento**.
    * **Validação de dados** para garantir que informações essenciais não sejam deixadas em branco.
    * **Feedback instantâneo** para o usuário, com mensagens de erro ou sucesso.

* **📜 Lista Dinâmica de Pets:**
    * Exibição de todos os pets cadastrados em formato de "cards", utilizando `FlatList` para otimização.
    * Permite **adicionar** e **remover** pets da lista, com atualização da interface em tempo real.

* **🎨 Design Responsivo e Moderno:**
    * Interface adaptável que funciona bem em diferentes tamanhos de tela, de celulares a tablets.
    * Estilização organizada com `StyleSheet`, uma paleta de cores consistente e tipografia amigável (fonte Poppins).

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias e bibliotecas:

* [**React Native**](https://reactnative.dev/): Framework para desenvolvimento de aplicativos móveis nativos.
* [**Expo**](https://expo.dev/): Plataforma e conjunto de ferramentas para facilitar o desenvolvimento e build de apps React Native.
* [**Expo Router**](https://docs.expo.dev/router/introduction/): Sistema de roteamento e navegação baseado em arquivos.
* [**TypeScript**](https://www.typescriptlang.org/): Superset do JavaScript que adiciona tipagem estática ao código.
* **React Context API**: Para gerenciamento de estado global de forma limpa e eficiente.

## 🚀 Como Rodar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/pet-health.git](https://github.com/seu-usuario/pet-health.git)
    cd pet-health
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npx expo start
    ```

4.  **Execute o aplicativo:**
    * Pressione `w` no terminal para abrir a versão **web**.
    * Escaneie o QR Code com o aplicativo **Expo Go** (disponível para [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) e [iOS](https://apps.apple.com/us/app/expo-go/id982107779)) para rodar no seu celular.

---

Feito por Leticia Rodrigues
