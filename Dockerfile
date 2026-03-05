#utiliza a imagem oficial do Node.js para o estágio de build
FROM node:18 as build

#define o diretório de trabalho dentro do contêiner
WORKDIR /app

#copia os arquivos de dependências para o contêiner(para otimizar o cache do Docker e evitar reinstalações)
COPY package*.json ./

#instala as dependências do projeto
RUN npm install

#copia o restante dos arquivos do projeto para o contêiner
COPY . .

#executa o build do Vite, gerando os arquivos estáticos na pasta dist
RUN npm run build

#utiliza a imagem oficial do Nginx para servir os arquivos estáticos no estágio final
FROM nginx:alpine

#copia os arquivos gerados no estágio de build para o diretório padrão do Nginx 
COPY --from=build /app/dist /usr/share/nginx/html

#documenta que a aplicação estará disponível na porta 80
EXPOSE 80

#define o comando padrão para iniciar o Nginx, mantendo-o em primeiro plano para que o contêiner continue rodando
CMD ["nginx", "-g", "daemon off;"]