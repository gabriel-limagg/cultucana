
# Projeto React - Cultucana

Este é um projeto React que contém um sistema de chatbot integrado ao componente do cabeçalho (`Header.jsx`). A estrutura do projeto está preparada para ser publicada utilizando o processo de build do React.

## Estrutura do Projeto

A estrutura básica do projeto é a seguinte:

```
/public
/src
  /componentes
    Header.jsx
index.html
package.json
package-lock.json
postcss.config.js
tailwind.config.js
vite.config.js
.env
.eslintrc.cjs
.gitignore
```

## Pré-requisitos

- Node.js instalado
- npm (gerenciador de pacotes do Node)

## Instalação

1. Clone este repositório:
   ```bash
   git clone git@github.com:franciscosouzti/web-cultucana.git
   ```
   
2. Navegue até a pasta do projeto:
   ```bash
   cd tcc-cultucana-main
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## Rodando o Projeto em Ambiente de Desenvolvimento

Para iniciar o projeto em um servidor local de desenvolvimento, execute:

```bash
npm run dev
```

O projeto será executado em um servidor local e pode ser acessado em `http://localhost:3000` (ou na porta indicada no terminal).

## Build do Projeto para Produção

Para realizar o build do projeto para produção, execute:

```bash
npm run build
```

Isso criará uma pasta `dist` contendo os arquivos estáticos do projeto, prontos para serem publicados em um servidor web.

## Chatbot

O componente de chatbot está integrado ao arquivo `Header.jsx`, localizado em:

```
/src/componentes/Header.jsx
```

O chatbot é chamado automaticamente quando o componente é carregado, permitindo a interação do usuário diretamente no cabeçalho da aplicação.

## Configurações de Ambiente

As variáveis de ambiente estão definidas no arquivo `.env`. Certifique-se de configurá-las conforme necessário antes de executar o projeto. As variáveis sensíveis não estão incluídas no repositório devido ao `.gitignore`.

## Upload para o Servidor

Para publicar o projeto no servidor remoto via SSH, siga estas etapas:

1. Conecte-se ao servidor via SSH:
   ```bash
   ssh root@192.34.59.102
   ```
   
2. Navegue até o diretório desejado e limpe o conteúdo atual:
   ```bash
   cd /home/web-cultucana/
   rm -rf *
   exit
   ```
   
3. No seu computador local, use o `rsync` para transferir o projeto sem a pasta `node_modules`:
   ```bash
   rsync -av --exclude='node_modules' /home/francisco/tcc-cultucana-main/ root@192.34.59.102:/home/web-cultucana/
   ```
   
4. No servidor, instale as dependências e faça o build:
   ```bash
   ssh root@192.34.59.102
   cd /home/web-cultucana/
   npm install
   npm run build
   ```

## Ajuste de Permissões no Servidor

Se você encontrar um erro **500 Internal Server Error** relacionado a permissões, siga estas etapas para ajustar as permissões do diretório no servidor:

1. Ajustar as permissões do diretório e dos arquivos:
   ```bash
   sudo chown -R www-data:www-data /home/web-cultucana
   sudo chmod -R 755 /home/web-cultucana
   ```
   
2. Verificar o acesso ao diretório pai:
   ```bash
   sudo chmod 755 /home
   sudo chmod 755 /home/web-cultucana
   ```

3. Reiniciar o Nginx:
   ```bash
   sudo systemctl restart nginx
   ```

## Licença

Este projeto é licenciado sob a licença XYZ.

## Contato

Para mais informações ou suporte, entre em contato em [seu-email@dominio.com].
