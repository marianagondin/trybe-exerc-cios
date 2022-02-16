import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        const element = (
            <h1 className="my-name">Mariana Gondin</h1>
        )

        return (
            <>
                {element}
                <p>
                    Estudante de Desenvolvimento Web Full Stack na Trybe.
                    Mãe de três cachorros. Filha de mãe solteira. Namorada de 
                    um futuro engenheiro. Amante de livros, séries e chá. 
                </p>
            </>
        );
    }
}

export default AboutMe;