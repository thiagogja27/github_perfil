import { useState, useEffect } from "react";

const Formulario = () => {
   const [materiaA, setMateriaA] = useState(0);
   const [materiaB, setMateriaB] = useState(0);
   const [materiaC, setMateriaC] = useState(0);
   const [nome, setNome] = useState('');
    useEffect(()=>{
        console.log("O componente iniciou")
    },[nome])

    useEffect(()=>{
        console.log("o estado nome mudou ");

        return () => {
            console.log(" o componente finalizou")
        }
    },[])

    useEffect(() => {
        if (materiaA > 0) {
            console.log("Matéria A mudou para: " + materiaA);
        }
    }, [materiaA]);

    useEffect(() => {
        if (materiaB > 0) {
            console.log("Matéria B mudou para: " + materiaB);
        }
    }, [materiaB]);

    useEffect(() => {
        if (materiaC > 0) {
            console.log("Matéria C mudou para: " + materiaC);
        }
    }, [materiaC]);


    const alteraNome = (evento) => {
        setNome(evento.target.value);
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = parseInt(soma / 3);
   
        if (media >= 7) {
            return <p>{nome}, você foi aprovado</p>;
        } else {
            return <p>{nome}, você não foi aprovado</p>;
        }
    };

    return (
        <form>

            <input 
                type="text" 
                placeholder="Seu nome" 
                onChange={alteraNome} 
            />
            <input
                type="number"
                placeholder="Nota matéria A"
                onChange={evento => setMateriaA(Number(evento.target.value))}
            />
            <input
                type="number"
                placeholder="Nota matéria B"
                onChange={evento => setMateriaB(Number(evento.target.value))}
            />
            <input
                type="number"
                placeholder="Nota matéria C"
                onChange={evento => setMateriaC(Number(evento.target.value))}
            />
            {renderizaResultado()}
        </form>
    );
};

export default Formulario;
