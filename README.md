# Vagalume API Integration

Este repositório contém um exemplo de integração com a API de Bandas e Cantores(as) da Vagalume utilizando o ServiceNow. A integração é demonstrada através de um Script Include e um Catalog Client Script.

## Descrição

Este projeto demonstra como integrar a API de Bandas e Cantores(as) da Vagalume com o ServiceNow. A API permite consultar informações sobre bandas e cantores(as) e exibir suas imagens em um formulário no ServicePortal.

## Estrutura do Projeto

- **Script Include:** Contém a lógica para se conectar e consultar a API da Vagalume.
- **Catalog Client Script:** Utiliza o Script Include para obter dados da API e exibi-los no formulário.
- **Vídeo de Demonstração:** Um vídeo que mostra a integração em funcionamento.

## Vídeo de Demonstração

Assista ao vídeo de demonstração para ver a integração em ação:

[![Demonstração da API Vagalume](https://img.youtube.com/vi/5kCezzLkfPg/maxresdefault.jpg)](https://youtu.be/5kCezzLkfPg)

## Como Utilizar

**Adicione o Script Include**

   - Navegue até a área de Script Includes no ServiceNow e crie um novo Script Include.
   - Copie e cole o código do repositório no novo Script Include.

**Adicione o Catalog Client Script**

   - Navegue até a área de Catalog Client Scripts no ServiceNow e crie um novo Client Script.
   - Copie e cole o código do repositório no novo Catalog Client Script.
   - O Catalog Client Script deve ser do tipo `onChange` e estar associado à variável de input que será utilizada para a consulta.

**Configure o Formulário**

   - Configure o formulário no ServicePortal para utilizar o Client Script e exibir a imagem retornada pela API.

**Clone o Repositório**

   ```bash
   git clone https://github.com/rafaelafae/Vagalume-API---ServiceNow-.git
