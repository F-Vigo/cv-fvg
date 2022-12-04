import { FC } from "react"

interface AboutProps {}

export const About: FC<AboutProps> = () => {
    return(
        <div id="about" className="page">
            <h1>Sobre mí</h1>
            <article>

                <p>¡Hola! Me llamo Francisco, o Fran o Vigo para los amigos. Soy graduado en Matemáticas por la Universidad de Málaga, aunque mientras lo estudiaba descubrí que me apasiona programar. Al acabar, empecé a trabajar como ingeniero de software <i>fullstack</i> con Java (con Spring) como principal lenguaje de programación. También he estudiado un Máster de Ciencia de datos por la Universidad de Granada.</p>

                <p>He trabajado con HTML5 y con el <i>framework</i> React en determinados proyectos personales (no dudes en pasarte por mi GitHub). También con Python, además de usarlo como herramienta de cálculo científico en el grado y de ciencia de datos y <i>Machine Learning</i> en el máster. Aun así, los lenguajes con los que más cómodo me siento son Java, mi principal herramienta de trabajo en mis años de experiencia laboral, y Scala, un lenguaje que, como Kotlin, trabaja sobra la JVM e integra de forma nativa la programación orientada a objetos y funcional. En «Conocimientos y aptitudes» tienes más información sobre las tecnologías que conozco.</p>
                
                <p>Siendo tan amplio (¡y cada día más!) el mundo de las nuevas tecnologías, intento ser cada día de trabajo el niño despierto que lo ve todo con fascinación y ganas de aprender, pero no creo que sea esa mi principal cualidad, ni de la que más me precio. La primera de ellas la entrené en mis años de universidad, y es mi enfoque analítico. Ante cualquier problema que venga, no hay nada como pararse y estudiarlo. Diseccionarlo, con papel y bolígrafo, permite entender cuáles son sus detalles, sus dificultades, las posibles soluciones y el valor que aporta cada una, los actores implicados y, en general, cualquier aspecto relevante. Planificar lo es todo. Mi otra virtud, no menos importante, es la de la comunicación. En cualquier ámbito de la vida, pero especialmente en un contexto tan potencialmente complejo como un ambiente de trabajo, una comunicación de calidad es imprescindible. Que el mensaje se transmita con claridad, con precisión, y sobre todo, con efectividad, es en ocasiones más complicado de lo que cabría esperar, como también puede serlo recibirlo y garantizar que se ha entendido. Por esta razón, me esfuerzo siempre por cuidar cómo me expreso como un artesano y cómo atendiendo cuando alguien más habla o escribe.</p>

                <p>Te doy la bienvenida a mi CV web. Si crees que puedo ayudarte con cualquier cosa, ¡pregúntame lo que quieras!</p>
            
            </article>
        </div>
    )
}