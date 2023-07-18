<p align="center">
  <a href="" rel="noopener">
  <img src="images/banner.png" alt="Project logo"></a>
</p>
<h3 align="center">Bionic Hand</h3>

<div align="center">

[![ESPRESSIF](https://img.shields.io/static/v1?style=for-the-badge&message=Espressif&color=E7352C&logo=Espressif&logoColor=FFFFFF&label=)](https://www.espressif.com)
[![PLATFORMIO](https://img.shields.io/static/v1?style=for-the-badge&message=PlatformIO&color=orange&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PHBhdGggZD0iTTEyOCAwQzkzLjgxIDAgNjEuNjY2IDEzLjMxNCAzNy40OSAzNy40OSAxMy4zMTQgNjEuNjY2IDAgOTMuODEgMCAxMjhjMCAzNC4xOSAxMy4zMTQgNjYuMzM0IDM3LjQ5IDkwLjUxQzYxLjY2NiAyNDIuNjg2IDkzLjgxIDI1NiAxMjggMjU2YzM0LjE5IDAgNjYuMzM0LTEzLjMxNCA5MC41MS0zNy40OUMyNDIuNjg2IDE5NC4zMzQgMjU2IDE2Mi4xOSAyNTYgMTI4YzAtMzQuMTktMTMuMzE0LTY2LjMzNC0zNy40OS05MC41MUMxOTQuMzM0IDEzLjMxNCAxNjIuMTkgMCAxMjggMCIgZmlsbD0iI0ZGN0YwMCIvPjxwYXRoIGQ9Ik0yNDkuMzg2IDEyOGMwIDY3LjA0LTU0LjM0NyAxMjEuMzg2LTEyMS4zODYgMTIxLjM4NkM2MC45NiAyNDkuMzg2IDYuNjEzIDE5NS4wNCA2LjYxMyAxMjggNi42MTMgNjAuOTYgNjAuOTYgNi42MTQgMTI4IDYuNjE0YzY3LjA0IDAgMTIxLjM4NiA1NC4zNDYgMTIxLjM4NiAxMjEuMzg2IiBmaWxsPSIjRkZGIi8+PHBhdGggZD0iTTE2MC44NjkgNzQuMDYybDUuMTQ1LTE4LjUzN2M1LjI2NC0uNDcgOS4zOTItNC44ODYgOS4zOTItMTAuMjczIDAtNS43LTQuNjItMTAuMzItMTAuMzItMTAuMzJzLTEwLjMyIDQuNjItMTAuMzIgMTAuMzJjMCAzLjc1NSAyLjAxMyA3LjAzIDUuMDEgOC44MzdsLTUuMDUgMTguMTk1Yy0xNC40MzctMy42Ny0yNi42MjUtMy4zOS0yNi42MjUtMy4zOWwtMi4yNTggMS4wMXYxNDAuODcybDIuMjU4Ljc1M2MxMy42MTQgMCA3My4xNzctNDEuMTMzIDczLjMyMy04NS4yNyAwLTMxLjYyNC0yMS4wMjMtNDUuODI1LTQwLjU1NS01Mi4xOTd6TTE0Ni41MyAxNjQuOGMtMTEuNjE3LTE4LjU1Ny02LjcwNi02MS43NTEgMjMuNjQzLTY3LjkyNSA4LjMyLTEuMzMzIDE4LjUwOSA0LjEzNCAyMS41MSAxNi4yNzkgNy41ODIgMjUuNzY2LTM3LjAxNSA2MS44NDUtNDUuMTUzIDUxLjY0NnptMTguMjE2LTM5Ljc1MmE5LjM5OSA5LjM5OSAwIDAgMC05LjM5OSA5LjM5OSA5LjM5OSA5LjM5OSAwIDAgMCA5LjQgOS4zOTkgOS4zOTkgOS4zOTkgMCAwIDAgOS4zOTgtOS40IDkuMzk5IDkuMzk5IDAgMCAwLTkuMzk5LTkuMzk4em0yLjgxIDguNjcyYTIuMzc0IDIuMzc0IDAgMSAxIDAtNC43NDkgMi4zNzQgMi4zNzQgMCAwIDEgMCA0Ljc0OXoiIGZpbGw9IiNFNTcyMDAiLz48cGF0aCBkPSJNMTAxLjM3MSA3Mi43MDlsLTUuMDIzLTE4LjkwMWMyLjg3NC0xLjgzMiA0Ljc4Ni01LjA0IDQuNzg2LTguNzAxIDAtNS43LTQuNjItMTAuMzItMTAuMzItMTAuMzItNS42OTkgMC0xMC4zMTkgNC42Mi0xMC4zMTkgMTAuMzIgMCA1LjY4MiA0LjU5MiAxMC4yODkgMTAuMjY3IDEwLjMxN0w5NS44IDc0LjM3OGMtMTkuNjA5IDYuNTEtNDAuODg1IDIwLjc0Mi00MC44ODUgNTEuODguNDM2IDQ1LjAxIDU5LjU3MiA4NS4yNjcgNzMuMTg2IDg1LjI2N1Y2OC44OTJzLTEyLjI1Mi0uMDYyLTI2LjcyOSAzLjgxN3ptMTAuMzk1IDkyLjA5Yy04LjEzOCAxMC4yLTUyLjczNS0yNS44OC00NS4xNTQtNTEuNjQ1IDMuMDAyLTEyLjE0NSAxMy4xOS0xNy42MTIgMjEuNTExLTE2LjI4IDMwLjM1IDYuMTc1IDM1LjI2IDQ5LjM2OSAyMy42NDMgNjcuOTI2em0tMTguODItMzkuNDZhOS4zOTkgOS4zOTkgMCAwIDAtOS4zOTkgOS4zOTggOS4zOTkgOS4zOTkgMCAwIDAgOS40IDkuNCA5LjM5OSA5LjM5OSAwIDAgMCA5LjM5OC05LjQgOS4zOTkgOS4zOTkgMCAwIDAtOS4zOTktOS4zOTl6bS0yLjgxIDguNjcxYTIuMzc0IDIuMzc0IDAgMSAxIDAtNC43NDggMi4zNzQgMi4zNzQgMCAwIDEgMCA0Ljc0OHoiIGZpbGw9IiNGRjdGMDAiLz48L3N2Zz4=&logoColor=FFFFFF&label=)](https://platformio.org)
[![CPP](https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)]()
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()
[![JAVASCRIPT](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()

[![Hackathon](https://img.shields.io/badge/hackathon-name-orange.svg?style=for-the-badge)](http://hackathon.url.com)
[![Status](https://img.shields.io/badge/status-active-success.svg?style=for-the-badge)]()
[![GitHub Issues](https://img.shields.io/github/issues/MarcosHADM/bionichand?style=for-the-badge)](https://github.com/MarcosHADM/bionichand/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/MarcosHADM/bionichand?style=for-the-badge)](https://github.com/MarcosHADM/bionichand/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](LICENSE.md)

[![en](https://img.shields.io/badge/language-English-red?style=for-the-badge&)](README.md)
[![pt-BR](https://img.shields.io/badge/Linguagem-Português-green?style=for-the-badge&)](README_pt-BR.md)
[![es](https://img.shields.io/badge/Idioma-Español-yellow?style=for-the-badge&)](README_es.md)

</div>

---

<p align="center"> Este projeto visa projetar uma mão protética que possa simular o movimento de uma mão, usando o microcontroladores, é projetado para fornecer uma simulação básica dos movimentos da mão. O projeto foi desenvolvido como parte da Semana Nacional de Ciência e Tecnologia (SNCT) e Semana de Arte e Cultura (SEMAC) do IFPE - campus garanhuns <br> 
</p>

## 📝 Conteúdo da tabela

- [🧐 Problema](#problem_statement)
- [💡 Ideia / Solução](#idea)
- [⛓️ Dependencies / Limitations](#limitations)
- [🚀 Escopo Futuro](#future_scope)
- [🏁 Começando](#getting_started)
- [🎈 Utilização](#usage)
- [⛏️ Tecnologias Utilizadas](#tech_stack)
- [Contribuir](../CONTRIBUTING.md)
- [✍️ Autores](#authors)
- [🎉 Agradecimentos](#acknowledgments)

## 🧐 Problema <a name = "problem_statement"></a>

O projeto Braço Biônico tem como objetivo desenvolver um braço protético totalmente funcional que possa imitar os movimentos de uma mão humana real. O principal desafio é projetar um sistema que permita um controle intuitivo e movimentos precisos da mão, permitindo que os usuários realizem tarefas diárias com facilidade e naturalidade.

## 💡 Ideia / Solução <a name = "idea"></a>

O projeto Braço Biônico propõe uma solução onde o braço protético é controlado por meio de uma interface de um website. O website é construído utilizando HTML, CSS e JavaScript, fornecendo uma interface amigável ao usuário para comandar os movimentos da mão. Ao interagir com os controles do website, os usuários podem controlar a abertura e fechamento da mão, bem como a rotação e movimento dos dedos individualmente.

## ⛓️ Dependências / Limitações <a name = "limitations"></a>
#### O projeto Braço Biônico depende dos seguintes componentes e tecnologias:
- **Microcontrolador ESP32:** Ele atua como a unidade central de controle para o braço protético, recebendo comandos do website e traduzindo-os em ações para os servo motores.
- **5 x Servo Motores MG996R:** Esses motores são responsáveis por controlar o movimento dos dedos.
- **Placa Controladora de Servo Motores PCA9685:** Esta placa é utilizada para controlar e gerenciar os múltiplos servo motores conectados ao microcontrolador.
- **Braço Impresso em 3D:** A estrutura física do braço é fabricada utilizando tecnologia de impressão 3D, garantindo um design leve e personalizável.
- **Fonte de Energia:** Uma fonte de energia confiável, como baterias ou um adaptador AC, é necessária para alimentar o microcontrolador e os servo motores.

#### As limitações do projeto incluem:
- A amplitude de movimento da mão protética pode ser limitada em comparação com uma mão humana natural, devido às restrições mecânicas dos servo motores.
- O braço protético pode não fornecer feedback sensorial ao usuário, como sensibilidade ao toque ou pressão.
- A precisão de controle dos movimentos da mão pode ser influenciada pela precisão e calibração dos servo motores.

## 🚀 Escopo Futuro <a name = "future_scope"></a>
O projeto Braço Biônico possui perspectivas futuras promissoras, incluindo:
- Aumentar a amplitude de movimento da mão protética para imitar de forma mais próxima os movimentos da mão humana.
- Incorporar sensores avançados para fornecer feedback sensorial aos usuários, como detecção de temperatura e pressão.
- Integrar algoritmos de aprendizado de máquina para permitir que a mão aprenda e se adapte às necessidades e preferências específicas do usuário.

## 🏁 Começando <a name = "getting_started"></a>
### Prerequisites
- [Visual Studio Code](https://code.visualstudio.com)
- [PlatformIO](https://platformio.org/install/ide?install=vscode)
- ESP32 microcontroller

### Installing
1. 

## 🎈 Utilização <a name="usage"></a>
Para controlar o Braço Biônico, siga estes passos:

Certifique-se de que o microcontrolador e os servo motores estão devidamente conectados e alimentados.
Abra a interface do website em seu navegador da web preferido.
Utilize os controles do website para enviar comandos de movimentação da mão, como abrir, fechar, rotacionar a mão e dobrar os dedos individualmente.

## ⛏️ Tecnologias Utilizadas <a name = "tech_stack"></a>

- ESP32 microcontroller
- Arduino framework
- PlatformIO

O projeto Braço Biônico utiliza as seguintes tecnologias e componentes:

- [ESP32]() - Microcontrolador
- [PlatformIO]() -
- [HTML, CSS e JavaScript]() - para a interface do website
- [MG996R]() - Servo Motores
- [PCA9685]() Placa Controladora de Servo Motores 
- [Impressão 3D]() - estrutura do braço

## ✍️ Autores <a name = "authors"></a>
- [@Andrey Henrique]()
- [@Elton Martins]()
- [@Endrews Dias]()
- [@Iago Gomes]()
- [@João Augusto]()
- [@Kayque de Oliveira]()
- [@Marcos Helbert](https://github.com/MarcosHADM)
- [@Ricardo Marinho]()
- [@Ruan Severo]()
- [@Vinicius Rodrigues]()

Veja também a lista de [contribuidores](https://github.com/MarcosHADM/bionichand/contributors) que participaram neste projeto.

## 🎉 Agradecimentos <a name = "acknowledgments"></a>
O projeto Bionic Hand gostaria de agradecer o seguinte:

- A SNCT por fornecer a oportunidade de trabalhar neste projeto.
- A comunidade de código aberto por fornecer recursos valiosos e suporte.
- Os usuários e testadores do projeto Bionic Hand por seus feedbacks e sugestões.

---

<sub>🤫 Psst!</sub>