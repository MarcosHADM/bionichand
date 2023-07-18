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

<p align="center"> Este proyecto tiene como objetivo diseñar una mano protésica totalmente funcional que pueda imitar los movimientos de una mano humana real. El principal desafío es diseñar un sistema que permita un control intuitivo y movimientos precisos de la mano, permitiendo a los usuarios realizar tareas diarias con facilidad y naturalidad. El proyecto se desarrolló como parte de la Semana Nacional de Ciencia y Tecnología (SNCT) y la Semana de Arte y Cultura (SEMAC) en el campus Garanhuns del IFPE.<br> 
</p>

## 📝 Tabla de contenidos

- [🧐 Problema](#problem_statement)
- [💡 Idea / Solución](#idea)
- [⛓️ Dependencias / Limitaciones](#limitations)
- [🚀 Alcance futuro](#future_scope)
- [🏁 Empezando](#getting_started)
- [🎈 Uso](#usage)
- [⛏️ Tecnologías utilizadas](#tech_stack)
- [Contribución](../CONTRIBUTING.md)
- [✍️ Autores](#authors)
- [🎉 Agradecimientos](#acknowledgments)

## 🧐 Problema <a name = "problem_statement"></a>
El proyecto Mano Biónica tiene como objetivo desarrollar una mano protésica totalmente funcional que pueda imitar los movimientos de una mano humana real. El principal desafío es diseñar un sistema que permita un control intuitivo y movimientos precisos de la mano, permitiendo a los usuarios realizar tareas diarias con facilidad y naturalidad.

## 💡 Idea / Solución <a name = "idea"></a>
El proyecto Mano Biónica propone una solución en la cual la mano protésica se controla a través de una interfaz de sitio web. El sitio web se construye utilizando HTML, CSS y JavaScript, proporcionando una interfaz amigable para el usuario para comandar los movimientos de la mano. Al interactuar con los controles del sitio web, los usuarios pueden controlar la apertura y cierre de la mano, así como la rotación y movimiento de los dedos individualmente.

## ⛓️ Dependencias / Limitaciones <a name = "limitations"></a>
#### El proyecto Mano Biónica depende de los siguientes componentes y tecnologías:
- **Microcontrolador ESP32:** Actúa como la unidad central de control para la mano protésica, recibiendo comandos del sitio web y traduciéndolos en acciones para los servomotores.
- **5 x Servomotores MG996R:** Estos motores son responsables de controlar el movimiento de los dedos.
- **Placa controladora de servomotores PCA9685:** Esta placa se utiliza para controlar y gestionar los múltiples servomotores conectados al microcontrolador.
- **Brazo impreso en 3D:** La estructura física del brazo se fabrica utilizando tecnología de impresión 3D, lo que garantiza un diseño ligero y personalizable.
- **Fuente de alimentación:** Se requiere una fuente de alimentación confiable, como baterías o un adaptador de CA, para alimentar el microcontrolador y los servomotores.

#### Las limitaciones del proyecto incluyen:
- El rango de movimiento de la mano protésica puede ser limitado en comparación con una mano humana natural debido a las restricciones mecánicas de los servomotores.
- La mano protésica puede no proporcionar retroalimentación sensorial al usuario, como sensibilidad al tacto o a la presión.
- La precisión del control de los movimientos de la mano puede verse influenciada por la precisión y calibración de los servomotores.

## 🚀 Alcance futuro <a name = "future_scope"></a>
El proyecto Mano Biónica tiene perspectivas de futuro prometedoras, que incluyen:
- Aumentar el rango de movimiento de la mano protésica para imitar de cerca los movimientos de una mano humana.
- Incorporar sensores avanzados para proporcionar retroalimentación sensorial a los usuarios, como detección de temperatura y presión.
- Integrar algoritmos de aprendizaje automático para permitir que la mano aprenda y se adapte a las necesidades y preferencias específicas del usuario.

## 🏁 Empezando <a name = "getting_started"></a>
### Prerequisites

- [Visual Studio Code](https://code.visualstudio.com)
- [PlatformIO](https://platformio.org/install/ide?install=vscode)
- Microcontrolador ESP32

### Instalación

1. 


### Prerequisites

- ESP32 microcontroller
- PlatformIO
- 5 x Servo Motor

### Installing

1. Download and install the Arduino IDE from the official website.
2. Install the ESP32 board support in the Arduino IDE.
3. Install PlatformIO in the Arduino IDE.

## 🎈 Uso <a name="usage"></a>
Para controlar la Mano Biónica, siga estos pasos:

Asegúrese de que el microcontrolador y los servomotores estén conectados y alimentados correctamente.
Abra la interfaz del sitio web en su navegador web preferido.
Utilice los controles del sitio web para enviar comandos de movimiento de la mano, como abrir, cerrar, rotar la mano y doblar los dedos de forma individual.

## ⛏️ Tecnologías utilizadas <a name = "tech_stack"></a>
El proyecto Mano Biónica utiliza las siguientes tecnologías y componentes:

- [ESP32]() - Microcontrolador
- [PlatformIO]() -
- [HTML, CSS y JavaScript]() - para la interfaz del sitio web
- [MG996R]() - Servomotores
- [PCA9685]() - Placa controladora de servomotores
- [Impresión 3D]() - estructura del brazo

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

Consulta también la lista de [contribuidores](https://github.com/kylelobo/The-Documentation-Compendium/contributors) que participaron en este proyecto.

## 🎉 Agradecimientos <a name = "acknowledgments"></a>
El proyecto Bionic Hand desea agradecer a lo siguiente:

- La SNCT por brindar la oportunidad de trabajar en este proyecto.
- La comunidad de código abierto por proporcionar recursos valiosos y apoyo.
- Los usuarios y probadores del proyecto Bionic Hand por sus comentarios y sugerencias.

- Reconocimientos a cualquiera cuyo código se haya utilizado
- Inspiración
- Referencias
