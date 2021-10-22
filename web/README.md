# Front-End

> O front-end será feito com React

> Vite

- É uma ferramenta para otimização de compilação
- ```yarn create vite [nome da pasta] --template react-ts

> Componentes

- Funções que retornam HTML

> CSS Modules (Vite)

- Permite o 'scoping' dos estilos CSS, por meio de geração de classes únicas

> SASS

- Pré-processador CSS
- Encadeamento

> Ícones

- ```react-icons```
- Ícones convertidos para SVG

> Utilizar imagens

- Para utilizar imagens no React precisamos importá-las no código

> Criar instância de API com baseURL no axios (para requests ao backend)

> useEffect

- Primeiro parâmetro: O que fazer (função de callback)
- Segundo parâmetro: Quando fazer (array de dependências)

> useState

- Forma de armazenar informações dentro do componente (variáveis do componente)
- Inicializar estado com tipo (array, string, number)
- Retorna variável e função para atualizar variável
- Conceito de Imutabilidade

> Props

- Informações compartilhadas de componente para componente, como atributos HTML.

> Contexts

- São utilizados para compartilhar informações entre um grande número de componentes
- Utilizar quando há informações necessárias em diversos componentes na aplicação
- Evitar grande número de props sendo passadas
- Código mais limpo, organizado e modularizado
- Todos componentes dentro do Provider compartilharão as informações