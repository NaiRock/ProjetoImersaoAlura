function pesquisar () 
{    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    //se campoPesquisa for uma string sem nada, não mostre nada
   if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o que quer encontrar!</p>"
    return
   }
    
campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    // Laços de repetição: para cada dado dentro da lista de dados, a estrutura abaixo deve ser repetida
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) 
                //então, faça...(cria um novo elemento)
       {resultados += `
        <div class="item-resultado">
            <h2>
                <a href=${dado.instagram} target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Link para a Wikipédia</a> 
        </div>
        `} 
        
            }
    
if (!resultados) {   
        resultados = "<p>Nada foi encontrado.</p>"
        }


    section.innerHTML = resultados;
}



