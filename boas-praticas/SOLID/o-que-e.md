# O que é S.O.L.I.D?


**SOLID** se resume a **5 príncípios** que ajudam o desenvolvedor a criar aplicações mais **parrudas / escalaveis / testaveis** e etc.

> Dentro dessa pasta chamada **SOLID** vou criar uma pasta com o início de cada sigla, e dentro dessa pasta vai ter o código **ERRADO** e o código **CORRETO** para você ter um melhor entendimento sobre os princípios, além desse conteúdo teórico logo abaixo.

1. Single Responsibility Principle (Princípio da Responsabilidade Única)
   
   - Exemplo ERRADO: 
     - crio uma classe `User`, dentro dela recebo 2 parametros `nome e email`, também crio um método que `enviaEmail` e também crio um método para `salvar` esse usuário
  
   - Exemplo CORRETO:
     - crio uma classe `User`, dentro dela recebo 2 parametros `nome e email`.
     - crio uma classe `UserRepository`, dentro dela eu crio o método `salvar`
     - crio uma classe `EmailService`, dentro dela eu crio o método `enviaEmail`

<br><br><br>


1. Open/Closed Principle (Princípio Aberto/Fechado)
2. Liskov Substitution Principle (Princípio da Substituição de Liskov)
3. Interface Segregation Principle (Princípio da Segregação de Interface)
4. Dependency Inversion Principle (Princípio da Inversão de Dependência)