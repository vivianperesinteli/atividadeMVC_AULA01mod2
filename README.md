# atividadeMVC_AULA01mod2
Atividade em sala da primeira aula do segundo módulo de computação.

Foram adicionadas as atualizações das aulas posteriores, até a aula 05, ministrada pelo professor Cristiano Benites. 

Pergunta do dia: 

Model - dentro da aplicação, ele está "explicando", dando as instruções ao banco de dados sobre como funcionam as tabelas aplicadas e as informações carrecagas em cada uma. Assim, definem-se as informações que a database encontrará. Por exemplo, usuários carrega nome e curso, por exemplo. 

Controller - Ferramenta responsável pelas lógicas aplicadas. Ele realiza as ações instruídas pelo models e devolve uma resposta. 

Endpoint - São as rotas que utilizamos. No exemplo, podemos citar /professores, que executa diiferentes resultados, do caminho /alunos por exemplo. 

Perguntas da aula 06: 

Explique com suas palavras o papel de cada camada da arquitetura MVC usada neste projeto.

Model: É responsável por acessar e manipular os dados presentes no banco de dados. No exemplo desse caso, nos arquivos alunos e cursos dentro de models, são criadas funções de busca, criação, atualização e exclusão de registros. 
View: Aqui, ele tem a função de apresentar esses dados presentes por meio da tela para o usuário. Exibimos assim arquivos .ejs presentes na pasta views, que unidos geram o HTML final que é apresentado ao usuário no navegador.
Controller: Tem a função de fazer a ponte entre o Model e o View. Ele recebe as requisições, chama as funções do Model para acessar os dados presentes e escolhe assim qual view será apresentada ou resposta enviada.
_______________________________________________________
Como o Model, o Controller e a View interagem entre si?

A interação entre os componentes do MVC ocorre no momento em que o usuário faz uma requisição, o controller a recebe, solicita ao Model os dados necessários e envia os dados selecionados para o View, que estrutura o HTML que é exibido para o usuário. Nas rotas que retornam JSON, o controller pega os dados do Modxel e responde diretamente em JSON, sem passar pela parte do View. 

____________________________________________________________
Como ocorre o envio e o recebimento de dados no formato JSON neste projeto?
Cite uma rota que responde em JSON e explique seu funcionamento.

Essa segmentação ocorre em rotas específicas do projeto - por exemplo /alunos/curso/:curso_id - pois quando é acessada, o controller busca no Model todos os alunos daquele curso e responde com um objeto JSON contendo esses alunos. Dessa forma, os sistemas externos ou front-ends podem consumir esses dados facilmente. 

_____________________________________________________________

Qual a importância de usar HTML básico com formulários e tabelas para organizar e manipular dados no navegador?
Por que esse tipo de estrutura ainda é útil em projetos back-end com Node.js?

Utilizar esse HTML básico com formulários e tabelas facilita a visualização, organização e manipulação dos dados diretamente no navegador, sem necessidade de frameworks complexos pra isso. Essa estrutura permite criar interfaces administrativas simples e funcionais, facilitando testes, prototipagem e manutenção do nosso sistema. 
