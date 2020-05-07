# Descrição do Projeto 
Serviço Feito para realizar medições de internet em um determinado periodo, e enviar para o telegram do usuário nos periodos solicitados. 

# Requisitos 
* docker 
* docker-compose 

# Passos para inicialização do Projeto

### Criação de BOT no teleagram
* Gerar BOT -> [Tutorial] (https://core.telegram.org/bots#6-botfather)
### Tutorias para instalação DOCKER e DOCKER-COMPOSE
Caso não tenha o docker ou o docker-compose instalado em sua máquina, é necessário seguir estes 2 tutoriais: 

* Docker -> [Tutorial] (https://docs.docker.com/get-docker/)
* Docker-Compose -> [Tutorial] (https://docs.docker.com/compose/install/)

### Criar .env 
Para que o serviço funcione é necessário adicionar um .env com alguns parametros 

RUN_MESUARE = Periodicidade que a leitura das velocidades devem ser feitas  
SEND_RESULT = Periodiciodade que os resultados devem ser enviados  
BOT_ID = ID do bot que deve ser recuperado atraves dos serviços do telegram   
USER_ID = ID do seu usuário no Teleagram, que de ser atraves dos serviços do telegram 
#### Exemplo 
RUN_MEASURE = 0 0 */1 * * *  
SEND_RESULT = 0 30 23 */1 * *  
BOT_ID = 12312312dasdasd  
USER_ID = 12312321  
### Baixando e iniciando o Projeto
* No Terminal: 

```language
    git clone https://github.com/felipecisotto/internetmeasurealert.git
    cd internetmeasurealert
    docker-compose up 
```

# Rotas Disponíveis 
* / (GET) -> Home com os gráficos das leituras realizadas. (EM CONSTRUÇÃO)
* /speedTest (GET) -> Retorna os dados do que foi lido hj
* /speedTest (Post) -> Realiza uma leitura e retorna json com os dados solicitados

