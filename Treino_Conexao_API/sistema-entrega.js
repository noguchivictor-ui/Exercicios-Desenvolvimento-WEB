const prompt = require('prompt-sync')();

async function consultarEntrega() {
    const cep = prompt("Digite o CEP do destino: ");

    if(cep.length !== 8 || isNaN(cep)){
        console.log("Cep invalido. Digite 8 numeros.");
        return;
    }
    try{
        const respostaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        if(!respostaCep.ok){
            console.log("erro ao consultar o servico de CEp");
            return;
        }
        const endereco = await respostaCep.json();

        if(endereco.erro){
            console.log("Cep nao encontrado");
            return;
        }
        const cidade = endereco.localidade;
        const estado = endereco.estado;
        const local = encodeURIComponent(`${cidade}, ${estado}`);

        const respostaLocal = await fetch (`https://geocoding-api.open-meteo.com/v1/search?name=${local}&count=1&language=pt&countryCode=BR`);

        if(!respostaLocal.ok){
            console.log("erro ao localizar a cidade");
            return;
        }
        const localizacao = await respostaLocal.json();

        if(!localizacao.results || localizacao.results.length === 0){
            console.log("localizacao nao encontrada");
            return;
        }
        const longitude = localizacao.results[0].longitude;
        const latitude = localizacao.results[0].latitude;

        const respostaClima = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,precipitation,wind_speed_10m&timezone=auto`)
        
        if(!respostaClima.ok){
            console.log("erro ao consultar  o clima");
            return;
        }
        const clima = await respostaClima.json();
        console.log()
    console.log('DADOS DA ENTREGA')
    console.log('---------------------------')
    console.log('CEP:', endereco.cep)
    console.log('Logradouro:', endereco.logradouro)
    console.log('Bairro:', endereco.bairro)
    console.log('Cidade:', endereco.localidade)
    console.log('Estado:', endereco.uf)

    console.log()
    console.log('CONDIÇÕES NO DESTINO')
    console.log('---------------------------')
    console.log('Temperatura:', clima.current.temperature_2m, '°C')
    console.log('Sensação térmica:', clima.current.apparent_temperature, '°C')
    console.log('Precipitação:', clima.current.precipitation, 'mm')
    console.log('Vento:', clima.current.wind_speed_10m, 'km/h')

if (clima.current.precipitation > 0) {
    console.log('Atenção: pode haver impacto na entrega devido à chuva.')
} else {
    console.log('Condições favoráveis para a entrega.')
}

    }catch(erro){
        console.log("falha ao acessar servicos externos");
    }
}
consultarEntrega();