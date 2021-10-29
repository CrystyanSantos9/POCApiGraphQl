<h1> Entendo GraphQL </h1>

<p> Criado pelo facebook o GraphQl fornece uma nova maneira de trabalharmos com o transito de dados em um api. </p>

<p>
Assim como uma API no modelo REST o GraphQl também trabalha com a estruta de dados em JSON, o seu grande diferencial é que, diferente do REST que nos retorna blocos de já pré definidos de dados, o GraphQl possibilita uma definição precisa de que dados vamos realmente carregar, ou seja, ao invés de recebermos um bloco completo do tipo <pre> 
{ data :  {
    id: 1,
    name: 'Robson',
    roles: ['restrict', 'admin],
    region: 'RJ'
}}
</pre>
</p>
<p>
Posso receber apenas o campo que me interessa
<pre>{data: {id: 1}}</pre>
</p>

<p>Claro que a tecnologia não se resume apenas a isso, e entrega muitas outras operações que melhoram a manutenabilidade do código e da aplicação, maneiras de validações implicitas entre outras funcionalidades necessárias para o desenvolvimento de uma boa API.

<a href="https://graphql.org/" > Para mais informações e exemplos - Clique aqui</a>