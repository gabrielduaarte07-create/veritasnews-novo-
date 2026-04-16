
let paginaAtual = 'destaques';
let categoriaAnterior = 'destaques';
const banco = {

destaques: [
{
id: 1,
cat: "Tecnologia",
titulo: "IA Generativa: O Avanço Acadêmico",
foto: "imagens/iafuturo.png",
resumo: "Universidades brasileiras adotam IA no ensino.",
texto: `<h2>Inovação nas Salas de Aula</h2>
<p> Inteligência artificial generativa está transformando profundamente o ensino superior no Brasil. Instituições passaram a integrar ferramentas inteligentes que auxiliam alunos na escrita de código, interpretação de algoritmos e resolução de problemas complexos.</p>
<p>Esse avanço permite uma aprendizagem mais personalizada, adaptando o conteúdo conforme o ritmo de cada estudante.</p>

<h2>Impacto Educacional</h2>
<p>Especialistas afirmam que o uso da IA pode aumentar significativamente o desempenho acadêmico. Professores relatam maior engajamento dos alunos e melhor compreensão dos conteúdos técnicos.</p>

<h2>Desafios</h2>
<p>Apesar dos benefícios, o uso excessivo pode gerar dependência. Por isso, universidades estão adotando avaliações mais críticas e baseadas em argumentação.</p>
`

},
{
id: 2,
cat: "Negócios",
titulo: "Hidrogênio Verde no Ceará",
foto: "hverde.png",
resumo: "Brasil lidera energia limpa.",
texto: `<h1>Hidrogênio verde no Brasil: liderança e destaque do Ceará na produção</h1>

<p>O hidrogênio verde é uma das principais apostas da transição energética mundial. Produzido a partir de fontes renováveis, como energia eólica e solar, ele não emite gases poluentes durante sua geração, sendo considerado uma alternativa sustentável aos combustíveis fósseis.</p>

<h2>O que é hidrogênio verde?</h2>

<p>O hidrogênio verde é obtido por meio da eletrólise da água, processo que separa o hidrogênio do oxigênio utilizando energia limpa. Diferente de outras formas de hidrogênio, ele não depende de carvão ou gás natural, o que reduz drasticamente as emissões de carbono.</p>

<p>Essa tecnologia é vista como essencial para setores difíceis de descarbonizar, como indústria pesada, transporte marítimo e produção de aço.</p>

<h2>Brasil como país estratégico</h2>

<p>O Brasil se destaca no cenário global por seu enorme potencial de geração de energia renovável. A abundância de fontes como energia solar, eólica e hídrica coloca o país em posição privilegiada para liderar a produção de hidrogênio verde.</p>

<p>Esse potencial tem atraído investimentos internacionais e parcerias com empresas de energia interessadas em desenvolver projetos sustentáveis no território brasileiro.</p>

<h2>Ceará como líder na produção</h2>

<p>O estado do Ceará se consolidou como um dos principais polos de hidrogênio verde no Brasil. Sua localização estratégica, aliada à forte presença de energia eólica e solar, favorece a produção em larga escala.</p>

<p>O Porto do Pecém, em especial, tem sido um dos principais centros de desenvolvimento de projetos, recebendo investimentos para exportação de energia limpa e produção de combustíveis sustentáveis.</p>

<h2>Impactos econômicos e ambientais</h2>

<p>O desenvolvimento do hidrogênio verde pode gerar empregos, atrair investimentos e fortalecer a economia brasileira. Além disso, contribui para a redução das emissões de carbono e para o cumprimento de metas climáticas internacionais.</p>

<p>O Brasil, ao investir nesse setor, pode se tornar um dos maiores exportadores de energia limpa do mundo.</p>

<h2>Desafios e futuro</h2>

<p>Apesar do grande potencial, ainda existem desafios como o alto custo de produção, necessidade de infraestrutura adequada e desenvolvimento tecnológico contínuo.</p>

<p>No entanto, especialistas acreditam que o hidrogênio verde terá papel central na matriz energética global nas próximas décadas.</p>


`

},
{
id: 3,
cat: "Saúde",
titulo: "Cirurgia Robótica 5G",
foto: "cirurgia5G.png",
resumo: "Operações à distância avançam.",
texto: `<h2>Revolução na Medicina</h2>
<h1>Cirurgia robótica 5G e sua chegada ao Brasil</h1>

<p>A cirurgia robótica 5G representa um dos maiores avanços recentes da medicina moderna. Essa tecnologia combina sistemas cirúrgicos robóticos com conexões de internet ultrarrápidas de quinta geração, permitindo procedimentos mais precisos, seguros e até realizados à distância.</p>

<h2>O que é a cirurgia robótica 5G?</h2>

<p>A cirurgia robótica utiliza braços mecânicos controlados por médicos especialistas para realizar operações complexas com alta precisão. Com a chegada do 5G, a transmissão de dados se tornou quase instantânea, reduzindo atrasos na comunicação entre o cirurgião e o robô.</p>

<p>Isso abre caminho para a chamada telecirurgia, em que o médico pode operar um paciente mesmo estando em outra cidade ou país.</p>

<h2>Chegada ao Brasil</h2>

<p>No Brasil, hospitais de grande porte e centros de inovação em saúde já começaram a testar e implementar tecnologias de cirurgia robótica com suporte de redes avançadas. A introdução do 5G no país acelerou pesquisas e projetos voltados para esse tipo de procedimento.</p>

<p>A expectativa é que centros médicos de referência, especialmente em grandes capitais, ampliem o uso dessa tecnologia nos próximos anos.</p>

<h2>Vantagens da tecnologia</h2>

<p>Entre os principais benefícios da cirurgia robótica 5G estão a maior precisão nos movimentos, menor risco de erro humano, cortes menores e recuperação mais rápida dos pacientes.</p>

<p>Além disso, a possibilidade de realizar cirurgias remotas pode ajudar a levar atendimento especializado a regiões afastadas, onde faltam médicos especialistas.</p>

<h2>Desafios e limitações</h2>

<p>Apesar dos avanços, ainda existem desafios importantes, como o alto custo dos equipamentos, necessidade de infraestrutura hospitalar avançada e garantia de conexão estável e segura durante os procedimentos.</p>

<p>A segurança de dados e a confiabilidade da rede também são fatores críticos para o sucesso da telecirurgia.</p>

<h2>Conclusão</h2>

<p>A cirurgia robótica 5G representa uma revolução na medicina e já começa a ganhar espaço no Brasil. Com o avanço da tecnologia e investimentos no setor de saúde, essa inovação pode transformar a forma como cirurgias são realizadas, tornando o atendimento mais rápido, preciso e acessível.</p>
`
},
{
id: 4,
cat: "Educação",
titulo: "Programação no Ensino",
foto: "ensino.png",
resumo: "Nova disciplina obrigatória.",
texto: `<h1>Programação nas escolas e a redução das desigualdades tecnológicas</h1><p>A introdução da programação nas escolas tem sido cada vez mais discutida como uma estratégia essencial para preparar os estudantes para o futuro. Em um mundo cada vez mais digital, aprender a programar não é apenas uma habilidade técnica, mas também uma forma de ampliar oportunidades educacionais e profissionais.</p><h2>O que é o ensino de programação?</h2><p>O ensino de programação consiste em ensinar os alunos a criar códigos, desenvolver aplicativos, sites e resolver problemas usando lógica computacional. Essa prática estimula o pensamento crítico, a criatividade e a capacidade de resolução de problemas.</p><p>Além disso, ajuda os estudantes a entenderem melhor como funcionam as tecnologias que utilizam no dia a dia.</p><h2>Impacto na redução das desigualdades</h2><p>A inclusão da programação no currículo escolar pode ajudar a reduzir desigualdades tecnológicas ao democratizar o acesso ao conhecimento digital. Estudantes de diferentes classes sociais passam a ter contato com habilidades que antes eram restritas a cursos especializados.</p><p>Isso aumenta as chances de inserção no mercado de trabalho em áreas de alta demanda, como tecnologia da informação, ciência de dados e desenvolvimento de software.</p><h2>Benefícios para os estudantes</h2><p>Entre os principais benefícios do ensino de programação estão o desenvolvimento do raciocínio lógico, melhora no desempenho escolar e maior preparação para profissões do futuro.</p><p>Além disso, a programação incentiva a autonomia e a capacidade de inovação dos alunos.</p><h2>Desafios na implementação</h2><p>Apesar das vantagens, ainda existem desafios como a falta de professores capacitados, infraestrutura tecnológica insuficiente e desigualdade de acesso a computadores e internet em algumas regiões.</p><p>Superar esses obstáculos é fundamental para garantir que todos os estudantes possam se beneficiar dessa iniciativa.</p><h2>Conclusão</h2><p>A inclusão da programação nas escolas é uma medida importante para o futuro da educação e pode ser uma ferramenta poderosa na redução das desigualdades tecnológicas. Ao oferecer esse conhecimento desde cedo, o sistema educacional contribui para uma sociedade mais justa e preparada para a era digital.</p>
`
},
{
id: 5,
cat: "Espaço",
titulo: "Satélite Brasileiro",
foto: "satelite.png",
resumo: "Brasil avança no espaço.",
texto: `<h1>Satélite brasileiro lançado</h1>

<p>O Brasil lançou um satélite com tecnologia própria, marcando um avanço importante no setor espacial e no desenvolvimento científico do país.</p>

<h2>Objetivo</h2>

<p>O satélite foi criado para coletar dados ambientais, apoiar pesquisas científicas e melhorar o monitoramento do território brasileiro.</p>

<h2>Importância</h2>

<p>O projeto fortalece a autonomia tecnológica do Brasil e reduz a dependência de sistemas estrangeiros, além de incentivar a inovação no setor aeroespacial.</p>

<h2>Contribuição científica</h2>

<p>Os dados obtidos podem ser usados em pesquisas internacionais sobre clima, agricultura e meio ambiente, ampliando a participação do Brasil na ciência global.</p>

<h2>Conclusão</h2>

<p>O lançamento do satélite representa um avanço significativo para a tecnologia brasileira e para a cooperação científica internacional.</p>
`
}
],

// ===============================
// BRASIL
// ===============================
brasil: [
{
id: 6,
cat: "Economia",
titulo: "PIB Cresce 3.2%",
foto: "ponte.png",
resumo: "Economia em expansão.",
texto: `
<h1>Crescimento de 3,2% no PIB do Brasil</h1>

<p>O Produto Interno Bruto (PIB) do Brasil teve um crescimento de 3,2%, indicando uma expansão da economia no período analisado. Esse resultado mostra que o país aumentou sua produção de bens e serviços em comparação ao ano anterior.</p>

<h2>Setores responsáveis</h2>

<p>O crescimento foi impulsionado principalmente pelo setor de serviços, seguido pela indústria e pelo agronegócio, que tiveram desempenhos positivos e ajudaram a movimentar a economia.</p>

<h2>Impactos</h2>

<p>O aumento do PIB pode contribuir para a geração de empregos, maior circulação de renda e aumento dos investimentos no país, embora os efeitos dependam de outros fatores econômicos.</p>

<h2>Conclusão</h2>

<p>O crescimento de 3,2% do PIB brasileiro é um sinal positivo para a economia, mas ainda exige equilíbrio e políticas adequadas para manter o desenvolvimento sustentável.</p>
`
},

{
id: 7,
cat: "Ambiente",
titulo: "Queda no Desmatamento",
foto: "floresta.png",
resumo: "Menor índice histórico.",
texto: `
<h1>Queda do desmatamento no Brasil: avanços e desafios ambientais</h1>

<p>Nos últimos anos, o Brasil tem registrado variações importantes nos índices de desmatamento, especialmente na região amazônica. A redução da derrubada de vegetação nativa é vista como um avanço significativo na preservação ambiental e no combate às mudanças climáticas.</p>

<h2>O que está mudando?</h2>

<p>A diminuição do desmatamento está ligada ao reforço de políticas de fiscalização, uso de tecnologia de monitoramento por satélite e maior atuação de órgãos ambientais. Essas ações ajudam a identificar áreas ilegais de exploração florestal em tempo quase real.</p>

<p>Órgãos como o :contentReference[oaicite:0]{index=0} desempenham papel fundamental ao fornecer dados precisos sobre a cobertura florestal no território brasileiro.</p>

<h2>Resultados recentes</h2>

<p>Relatórios ambientais indicam que algumas regiões da Amazônia apresentaram queda nas taxas de desmatamento em determinados períodos recentes. Isso representa um sinal positivo para a conservação da biodiversidade e para o equilíbrio climático global.</p>

<p>Entretanto, os dados também mostram que a situação ainda exige atenção constante, já que fatores como exploração ilegal, expansão agropecuária e queimadas continuam sendo ameaças relevantes.</p>

<h2>Importância da Amazônia</h2>

<p>A Amazônia, localizada principalmente no :contentReference[oaicite:1]{index=1}, é considerada uma das maiores florestas tropicais do mundo e desempenha papel essencial na regulação do clima global, além de abrigar uma enorme diversidade de espécies.</p>

<p>A preservação dessa floresta é fundamental não apenas para o Brasil, mas para todo o planeta, devido à sua influência direta no ciclo da água e na absorção de carbono.</p>

<h2>Desafios ainda existentes</h2>

<p>Apesar da queda em alguns indicadores, o desmatamento ilegal ainda é um problema complexo. A fiscalização em áreas remotas, conflitos fundiários e atividades econômicas irregulares continuam dificultando o controle total da devastação.</p>

<p>Especialistas defendem que é necessário combinar fiscalização rigorosa com alternativas econômicas sustentáveis para as populações locais.</p>

`
},

{
id: 8,
cat: "Sociedade",
titulo: "Brasil Conectado",
foto: "homemnocomputador.png",
resumo: "Internet para todos.",
texto: `
<h1>Inclusão digital para todos: conectando a sociedade ao futuro</h1>

<p>A inclusão digital busca garantir que todas as pessoas tenham acesso à internet, dispositivos tecnológicos e conhecimento para usar essas ferramentas no dia a dia. Ela é essencial para reduzir desigualdades e ampliar oportunidades na educação, no trabalho e no acesso a serviços.</p>

<h2>Importância da conectividade</h2>

<p>Com a digitalização de serviços públicos, bancos e escolas, a internet se tornou indispensável. Ter acesso à rede significa mais participação social e melhores oportunidades de desenvolvimento.</p>

<h2>Desafios</h2>

<p>Apesar dos avanços, ainda existem obstáculos como o alto custo da internet, falta de equipamentos e baixa capacitação digital em algumas regiões. Isso contribui para a chamada “divisão digital”.</p>

<h2>Soluções</h2>

<p>Projetos de expansão da internet, distribuição de dispositivos e cursos de capacitação ajudam a diminuir essa desigualdade e ampliar o acesso à tecnologia.</p>

<h2>Conclusão</h2>

<p>A inclusão digital é fundamental para uma sociedade mais justa e conectada, garantindo que ninguém fique excluído do mundo tecnológico atual.</p>
`
},

{
id: 9,
cat: "Ciência",
titulo: "Vacina Brasileira",
foto: "vacina.png",
resumo: "Avanço na saúde.",
texto: `
<h1>Vacina contra a dengue desenvolvida no Brasil</h1>

<p>A dengue é uma doença viral transmitida pelo mosquito <i>Aedes aegypti</i> e continua sendo um dos maiores desafios de saúde pública no Brasil, principalmente em períodos de chuva e calor, quando há maior proliferação do mosquito.</p>

<h2>Avanço científico e desenvolvimento</h2>

<p>O desenvolvimento de vacinas contra a dengue representa um grande avanço da ciência. Pesquisas realizadas ao longo de anos, com testes clínicos e estudos de eficácia, permitiram a criação de imunizantes aprovados por órgãos reguladores como a ANVISA.</p>

<p>Um dos principais avanços recentes foi a disponibilização de vacinas que protegem contra diferentes sorotipos do vírus da dengue, ajudando a reduzir a chance de infecção grave e hospitalização.</p>

<h2>Como a vacina funciona</h2>

<p>A vacina atua estimulando o sistema imunológico a reconhecer os quatro tipos do vírus da dengue. Isso faz com que o corpo desenvolva defesa antes mesmo do contato com a doença, reduzindo significativamente o risco de complicações.</p>

<p>Embora não elimine totalmente a possibilidade de infecção, a vacinação ajuda a tornar os casos mais leves e menos perigosos.</p>

<h2>Impacto na saúde pública</h2>

<p>A vacinação em massa pode reduzir a pressão sobre hospitais, principalmente durante epidemias, além de diminuir o número de internações e mortes causadas pela dengue.</p>

<p>No Brasil, campanhas de imunização são especialmente importantes em regiões com maior incidência do mosquito transmissor.</p>

<h2>Desafios e prevenção</h2>

<p>Apesar dos avanços, ainda existem desafios como a ampliação do acesso à vacina e a conscientização da população. Além disso, o combate ao mosquito continua sendo essencial.</p>

<p>Medidas como eliminar água parada, usar repelente e manter ambientes limpos são fundamentais para reduzir a proliferação do <i>Aedes aegypti</i>.</p>

<h2>Conclusão</h2>

<p>A vacina contra a dengue representa um importante avanço científico no Brasil e no mundo. Quando combinada com ações de prevenção, ela pode ajudar a controlar significativamente a doença e salvar vidas.</p>
`
},

{
id: 10,
cat: "Turismo",
titulo: "Rio Ecoturismo",
foto: "pontoturistico.png",
resumo: "Turismo sustentável.",
texto: `
<h1>Ecoturismo no Brasil: Rio de Janeiro se destaca como principal destino</h1>

<p>O ecoturismo é uma forma de turismo voltada para a exploração sustentável de áreas naturais, promovendo a preservação ambiental e a valorização da biodiversidade. No Brasil, esse segmento tem crescido significativamente, atraindo visitantes interessados em experiências em contato com a natureza.</p>

<h2>O que é ecoturismo?</h2>

<p>O ecoturismo consiste em atividades turísticas realizadas em ambientes naturais, com foco na conservação ambiental, educação ecológica e desenvolvimento sustentável das comunidades locais.</p>

<p>Além de proporcionar lazer, essa prática incentiva a preservação de parques, reservas e áreas de proteção ambiental.</p>

<h2>Rio de Janeiro como principal destino</h2>

<p>O Rio de Janeiro é considerado um dos principais polos de ecoturismo do Brasil, reunindo praias, montanhas, florestas e parques naturais em uma mesma região. A cidade combina paisagens urbanas com áreas de natureza preservada, o que aumenta seu potencial turístico.</p>

<p>Locais como o Parque Nacional da Tijuca, o Jardim Botânico e a Pedra Bonita são exemplos de áreas muito procuradas por turistas que buscam trilhas, mirantes e contato direto com a Mata Atlântica.</p>

<h2>Importância econômica e ambiental</h2>

<p>O ecoturismo contribui para a economia local ao gerar empregos e movimentar setores como hospedagem, transporte e alimentação. Ao mesmo tempo, promove a conscientização ambiental e incentiva a preservação dos ecossistemas naturais.</p>

<p>No estado do Rio de Janeiro, essa atividade também ajuda a valorizar comunidades locais e projetos de conservação ambiental.</p>

<h2>Desafios do setor</h2>

<p>Apesar do crescimento, o ecoturismo enfrenta desafios como a necessidade de infraestrutura adequada, controle do impacto ambiental e educação dos visitantes para evitar degradação das áreas naturais.</p>
`
}
],

// ===============================
// MUNDO
// ===============================
mundo: [
{
id: 11,
cat: "Espaço",
titulo: "Colônia em Marte",
foto: "baselaranja.png",
resumo: "Primeira base humana.",
texto: `
<p>A possibilidade de uma colônia humana em Marte deixou de ser apenas ficção científica e passou a ser um dos principais objetivos de agências espaciais e empresas privadas ao redor do mundo. O planeta vermelho, conhecido cientificamente como Marte, é hoje o foco de missões exploratórias que buscam viabilizar a presença humana permanente fora da Terra.</p>

<h1>Missões preparatórias e avanços tecnológicos</h1>

<p>A NASA, em parceria com outras instituições internacionais, já realiza estudos avançados sobre habitação, produção de oxigênio e cultivo de alimentos em ambientes extremos. Robôs como o rover Perseverance têm coletado dados essenciais sobre o solo e a atmosfera marciana, ajudando cientistas a entenderem os desafios de uma futura ocupação humana.</p>

<p>Além disso, empresas privadas do setor aeroespacial estão investindo em naves reutilizáveis e sistemas de transporte interplanetário, com a meta de reduzir custos e tornar viagens a Marte mais frequentes.</p>

<h2>Como seria viver em Marte?</h2>

<p>Especialistas afirmam que uma colônia em Marte precisaria ser totalmente autossustentável. Isso inclui:</p>

<p>•Cúpulas pressurizadas para proteção contra radiação.</p>
<p>•Produção local de água e oxigênio.</p>
<p>•Agricultura em estufas fechadas.</p>
<p>•Uso de energia solar ou nuclear.</p>

<p>A gravidade reduzida e a ausência de uma atmosfera respirável tornam Marte um ambiente extremamente hostil, exigindo tecnologias ainda em desenvolvimento.</p>

Impacto para o futuro da humanidade

<p>A criação de uma colônia em Marte representa mais do que uma conquista científica: ela pode ser um passo decisivo para a sobrevivência da humanidade a longo prazo. Cientistas acreditam que estabelecer uma presença fora da Terra pode proteger a espécie humana de eventos catastróficos globais.

No entanto, o projeto ainda enfrenta desafios éticos, financeiros e tecnológicos. O custo estimado de uma missão tripulada continua extremamente alto, e ainda não há uma data oficial para o início da colonização.</p>

<p>Embora ainda estejamos nos estágios iniciais, a ideia de viver em Marte já não pertence apenas à ficção. Com o avanço da tecnologia espacial, o planeta vermelho pode se tornar, nas próximas décadas, o primeiro lar humano fora da Terra.</p>
`
},

{
id: 12,
cat: "Clima",
titulo: "Fim do Plástico",
foto: "tartaruga.png",
resumo: "Acordo global.",
texto: `
<h1>Acordo global para eliminar o plástico descartável avança entre países</h1>

<p>Em meio ao aumento da preocupação com a poluição ambiental, diversos países estão discutindo e implementando um acordo internacional para reduzir e, em alguns casos, eliminar o uso de plástico descartável. A iniciativa faz parte de um esforço global para combater os impactos ambientais causados pelo acúmulo de resíduos plásticos nos oceanos e nos ecossistemas terrestres.</p>

<h2>Um problema global urgente</h2>

<p>O plástico descartável, utilizado em itens como sacolas, copos, canudos e embalagens de uso único, se tornou um dos principais poluentes do planeta. Estima-se que milhões de toneladas desse material sejam descartadas de forma incorreta todos os anos, chegando aos oceanos e afetando a vida marinha.</p>

<p>Organizações internacionais como o Programa das Nações Unidas para o Meio Ambiente alertam que, sem ações imediatas, a produção de plástico pode continuar crescendo de forma descontrolada nas próximas décadas.</p>

<h2>O acordo entre países</h2>

<p>O novo acordo global envolve negociações entre diversos países para estabelecer metas comuns, como:</p>

<p>- Redução progressiva da produção de plástico descartável<br>
- Incentivo a materiais reutilizáveis e biodegradáveis<br>
- Investimento em reciclagem e economia circular<br>
- Proibição de itens de uso único em etapas</p>

<p>Blocos econômicos como a União Europeia já estão entre os mais avançados na adoção de políticas restritivas contra plásticos descartáveis, servindo como referência para outras regiões do mundo.</p>

<h2>Participação do Brasil e outros países</h2>

<p>O Brasil também participa das discussões internacionais e vem ampliando políticas internas de redução do plástico, especialmente em grandes cidades e setores comerciais. Outros países da América Latina, Ásia e África também demonstram interesse em aderir ao acordo global.</p>

<p>No entanto, países em desenvolvimento enfrentam desafios adicionais, como a necessidade de equilibrar crescimento econômico e sustentabilidade ambiental.</p>

<h2>Alternativas ao plástico descartável</h2>

<p>Com o avanço das discussões, cresce o investimento em soluções sustentáveis, como:</p>

<p>- Plásticos biodegradáveis<br>
- Embalagens feitas de papel ou amido vegetal<br>
- Reutilização de materiais industriais<br>
- Sistemas de retorno de embalagens</p>

<p>Empresas e governos estão sendo pressionados a inovar rapidamente para substituir materiais poluentes sem prejudicar o consumo e a logística global.</p>

<h2>Desafios e futuro do acordo</h2>

<p>Apesar do avanço das negociações, ainda existem obstáculos importantes, como a falta de consenso entre grandes produtores de plástico e a necessidade de financiamento para países mais pobres.</p>

<p>Mesmo assim, especialistas afirmam que o acordo representa um passo histórico na luta contra a poluição e pode marcar o início de uma nova era de sustentabilidade global.</p>
`
},

{
id: 13,
cat: "Tecnologia",
titulo: "Supremacia Quântica",
foto: "quantico.png",
resumo: "Novo marco tecnológico.",
texto: `
<h1>Supremacia quântica e a revolução na ciência moderna</h1>

<p>A supremacia quântica é um marco importante na área da computação avançada e representa o momento em que um computador quântico consegue resolver um problema que seria praticamente impossível para os computadores tradicionais. Esse avanço está diretamente ligado ao desenvolvimento da Computação Quântica, um campo da ciência que explora os princípios da mecânica quântica para processar informações de forma extremamente rápida e eficiente.</p>

<h2>O que é supremacia quântica?</h2>

<p>A supremacia quântica ocorre quando um computador quântico supera significativamente os supercomputadores clássicos em uma tarefa específica. Diferente dos computadores comuns, que usam bits (0 ou 1), os computadores quânticos utilizam qubits, que podem existir em múltiplos estados ao mesmo tempo graças aos fenômenos da superposição quântica e do emaranhamento.</p>

<p>Esses princípios permitem que cálculos complexos sejam realizados de forma paralela, aumentando drasticamente a capacidade de processamento.</p>

<h2>Os primeiros avanços</h2>

<p>Um dos momentos mais importantes desse campo foi alcançado pela empresa :contentReference[oaicite:0]{index=0}, que afirmou ter atingido a supremacia quântica em 2019 ao utilizar seu processador quântico para resolver um problema matemático em minutos, algo que levaria milhares de anos para um supercomputador tradicional.</p>

<p>Outra grande empresa que investe fortemente nessa área é a :contentReference[oaicite:1]{index=1}, que desenvolve computadores quânticos acessíveis via nuvem e pesquisa formas de tornar essa tecnologia mais estável e escalável.</p>

<h2>Impacto na ciência e na sociedade</h2>

<p>O avanço da computação quântica pode revolucionar diversas áreas da ciência, como química, medicina, física e inteligência artificial. Simulações moleculares, por exemplo, podem ajudar na criação de novos medicamentos e materiais com muito mais precisão.</p>

<p>Além disso, a criptografia moderna pode ser profundamente afetada, já que computadores quânticos teriam capacidade de quebrar sistemas de segurança atualmente considerados invioláveis.</p>

<h2>Desafios da tecnologia quântica</h2>

<p>Apesar do enorme potencial, a computação quântica ainda enfrenta grandes desafios. Os qubits são extremamente sensíveis a interferências externas, o que causa erros nos cálculos. Além disso, manter um sistema quântico estável exige condições extremas de temperatura e isolamento.</p>

<p>Por isso, cientistas e engenheiros ainda trabalham para tornar essa tecnologia mais confiável e acessível para uso prático em larga escala.</p>

<h2>O futuro da supremacia quântica</h2>

<p>A expectativa é que, nas próximas décadas, a computação quântica evolua de experimentos laboratoriais para aplicações reais no dia a dia. Isso pode transformar completamente a forma como resolvemos problemas complexos e impulsionar uma nova era tecnológica.</p>

`
},

{
id: 14,
cat: "Saúde",
titulo: "Terapia Alzheimer",
foto: "cientista.png",
resumo: "Nova esperança.",
texto: `
<h1>Terapias para o Alzheimer e as novas esperanças na ciência</h1>

<p>O avanço das pesquisas sobre o Alzheimer tem trazido novas esperanças para milhões de pessoas no mundo todo. A doença, conhecida cientificamente como :contentReference[oaicite:0]{index=0}, afeta a memória, o comportamento e a capacidade de raciocínio, sendo uma das principais causas de demência em idosos.</p>

<h2>O que é o Alzheimer?</h2>

<p>O Alzheimer é uma doença neurodegenerativa progressiva que provoca a morte gradual das células cerebrais. Com o tempo, o paciente perde habilidades cognitivas essenciais, como lembrar informações, reconhecer pessoas e realizar tarefas simples do dia a dia.</p>

<p>Embora ainda não exista cura definitiva, os tratamentos atuais buscam retardar a progressão da doença e melhorar a qualidade de vida dos pacientes.</p>

<h2>Avanços nas terapias</h2>

<p>Nos últimos anos, a ciência tem feito progressos significativos no desenvolvimento de terapias mais eficazes. Novos medicamentos estão sendo testados para reduzir o acúmulo de proteínas no cérebro, como a beta-amiloide, que está associada ao avanço da doença.</p>

<p>Além disso, terapias imunológicas têm mostrado resultados promissores ao estimular o sistema imunológico a combater essas proteínas prejudiciais.</p>

<h2>Tratamentos atuais</h2>

<p>Hoje, os tratamentos disponíveis incluem medicamentos que ajudam a melhorar temporariamente a memória e o comportamento dos pacientes. Também são utilizadas abordagens não farmacológicas, como estimulação cognitiva, fisioterapia e acompanhamento psicológico.</p>

<p>Instituições como a :contentReference[oaicite:1]{index=1} desempenham um papel fundamental no apoio a pacientes e no financiamento de pesquisas científicas.</p>

<h2>Esperanças para o futuro</h2>

<p>A comunidade científica acredita que os próximos anos podem trazer grandes avanços no tratamento do Alzheimer. Estudos em terapia genética, medicina personalizada e tecnologias de diagnóstico precoce estão em desenvolvimento e podem mudar completamente o cenário da doença.</p>

<p>O diagnóstico mais cedo também é uma das maiores esperanças, pois permitiria iniciar o tratamento antes que os danos cerebrais se tornem irreversíveis.</p>

<h2>Conclusão</h2>

<p>Embora o Alzheimer ainda seja uma doença sem cura, os avanços recentes mostram um futuro mais promissor. A combinação de novas terapias, tecnologia médica e pesquisa contínua abre caminho para tratamentos mais eficazes e uma melhor qualidade de vida para pacientes e familiares.</p>
`
},

{
id: 15,
cat: "Geopolítica",
titulo: "Cabo Europa-Brasil",
foto: "mapa.png",
resumo: "Internet mais rápida.",
texto: `
<h1>Cabo Europa-Brasil: a nova ponte digital entre continentes</h1>

<p>O cabo submarino Europa-Brasil é uma das mais importantes infraestruturas de comunicação do mundo moderno. Ele conecta diretamente a Europa à América do Sul, permitindo a transmissão de dados em alta velocidade e reduzindo a dependência de rotas que passam pelos Estados Unidos.</p>

<h2>O que é esse cabo submarino?</h2>

<p>Cabos submarinos são fibras ópticas instaladas no fundo do oceano responsáveis por transportar quase todo o tráfego de internet global. O cabo que liga Europa e Brasil faz parte dessa rede essencial que sustenta serviços digitais, comunicações internacionais e sistemas financeiros.</p>

<p>Um dos principais projetos dessa conexão é o sistema :contentReference[oaicite:0]{index=0}, que liga diretamente o continente europeu ao Brasil sem rotas intermediárias pela América do Norte.</p>

<h2>Como funciona a conexão</h2>

<p>O cabo utiliza tecnologia de fibra óptica para transmitir dados em forma de pulsos de luz. Isso permite uma comunicação extremamente rápida e estável entre países como :contentReference[oaicite:1]{index=1} e :contentReference[oaicite:2]{index=2}, reduzindo a latência em serviços digitais.</p>

<p>Essa ligação direta é especialmente importante para áreas como pesquisa científica, bancos, plataformas de streaming e serviços em nuvem.</p>

<h2>Importância estratégica</h2>

<p>A criação desse tipo de infraestrutura fortalece a soberania digital dos países envolvidos. No caso do Brasil, a conexão direta com a Europa melhora a segurança de dados e amplia a capacidade de troca de informações em alta velocidade.</p>

<p>Empresas globais de tecnologia, como a :contentReference[oaicite:3]{index=3}, também utilizam esses cabos para expandir seus serviços em nuvem e melhorar a experiência de usuários em diferentes regiões.</p>

<h2>Impactos para o futuro</h2>

<p>Com a expansão da internet e da inteligência artificial, a demanda por velocidade e estabilidade de conexão cresce rapidamente. Cabos submarinos como o Europa-Brasil serão fundamentais para suportar essa nova era digital.</p>

<p>Além disso, novos projetos continuam sendo desenvolvidos para criar rotas ainda mais rápidas e seguras, conectando continentes de forma cada vez mais eficiente.</p>

<h2>Conclusão</h2>

<p>O cabo Europa-Brasil representa um avanço significativo na infraestrutura global de internet. Ele não apenas aproxima continentes, mas também fortalece a economia digital e impulsiona a inovação tecnológica em escala mundial.</p>
`
}
],


// ===============================
// ECONOMIA
// ===============================
economia: [
{
id: 16,
cat: "Moedas",
titulo: "DREX Cresce",
foto: "moeda.png",
resumo: "Moeda digital.",
texto: `
<h1>DREX avança no Brasil e pode transformar o sistema financeiro</h1>

O projeto do *Real Digital, conhecido como DREX*, tem ganhado cada vez mais destaque no cenário econômico brasileiro. Desenvolvido pelo Banco Central do Brasil, o DREX surge como uma resposta à crescente digitalização das finanças e à necessidade de modernização do sistema monetário nacional.

Diferente das criptomoedas tradicionais, o DREX será uma moeda digital oficial, com regulamentação estatal e lastro garantido. A proposta é permitir transações mais rápidas, seguras e com menor custo, além de abrir espaço para novas tecnologias, como contratos inteligentes e integração com sistemas financeiros digitais.

Especialistas apontam que o DREX pode facilitar o acesso da população a serviços bancários, especialmente para pessoas que ainda estão fora do sistema financeiro tradicional. Além disso, a moeda digital pode aumentar a transparência nas transações e reduzir fraudes.

Por outro lado, o projeto ainda enfrenta desafios importantes. Questões relacionadas à privacidade dos usuários, segurança cibernética e adaptação das instituições financeiras tradicionais ainda estão em debate. O Banco Central segue realizando testes em ambiente controlado, com previsão de expansão gradual nos próximos anos.

Se implementado com sucesso, o DREX pode posicionar o Brasil como um dos líderes globais na adoção de moedas digitais estatais.
`
},

{
id: 17,
cat: "Trabalho",
titulo: "Semana 4 Dias",
foto: "escritorio.png",
resumo: "Produtividade cresce.",
texto: `
<h1>Semana de 4 dias de trabalho ganha força e divide opiniões</h1>

A proposta de uma semana de trabalho com apenas quatro dias tem ganhado espaço em diversos países e começa a chamar atenção também no Brasil. A ideia, que parecia distante há alguns anos, vem sendo testada por empresas que buscam aumentar a produtividade e melhorar a qualidade de vida dos funcionários.

Estudos realizados em países da Europa e na América do Norte indicam que a redução da jornada semanal pode trazer benefícios significativos. Entre eles, estão a diminuição do estresse, melhora na saúde mental e maior equilíbrio entre vida pessoal e profissional.

Empresas que adotaram o modelo relatam que, mesmo com menos horas de trabalho, os resultados foram mantidos ou até melhorados. Isso acontece porque os funcionários tendem a se concentrar mais e eliminar tarefas desnecessárias durante o expediente.

No Brasil, algumas empresas de tecnologia e startups já iniciaram projetos piloto. No entanto, a adoção em larga escala ainda enfrenta resistência, principalmente em setores mais tradicionais, que dependem de presença contínua e atendimento ao público.

Especialistas acreditam que o modelo pode se tornar mais comum no futuro, especialmente com o avanço do trabalho remoto e da automação. Ainda assim, a discussão sobre viabilidade econômica e impacto na produtividade segue em aberto.


`
},

{
id: 18,
cat: "Energia",
titulo: "Energia Eólica",
foto: "offshore.png",
resumo: "Investimentos crescem.",
texto: `
<h1>Energia eólica cresce e se consolida como solução sustentável</h1>

A busca por fontes de energia limpa tem impulsionado o crescimento da energia eólica em todo o mundo. No Brasil, essa modalidade tem se destacado especialmente na região Nordeste, onde os ventos constantes favorecem a geração de eletricidade.

Nos últimos anos, o país tem registrado aumento significativo na instalação de parques eólicos, atraindo investimentos nacionais e internacionais. Além de contribuir para a redução das emissões de gases poluentes, a energia eólica também gera empregos e movimenta a economia local.

Outro ponto positivo é o custo competitivo. Com o avanço da tecnologia, a produção de energia eólica se tornou mais eficiente e acessível, tornando-se uma alternativa viável em relação às fontes tradicionais.

Apesar dos benefícios, o setor ainda enfrenta desafios, como a necessidade de expansão da infraestrutura de transmissão e questões ambientais relacionadas à instalação de turbinas.

Ainda assim, especialistas apontam que a energia eólica deve continuar crescendo e desempenhar um papel fundamental na transição energética global.
`
},

{
id: 19,
cat: "Cidades",
titulo: "Fazendas Urbanas",
foto: "fazenda.png",
resumo: "Agricultura urbana.",
texto: `
<h1>Fazendas urbanas transformam a produção de alimentos nas cidades</h1>

As fazendas urbanas vêm ganhando espaço como uma solução inovadora para a produção de alimentos em grandes centros urbanos. Utilizando técnicas modernas como hidroponia e cultivo vertical, esses sistemas permitem o cultivo de hortaliças e vegetais em ambientes controlados.

A principal vantagem desse modelo é a proximidade com o consumidor final. Isso reduz custos de transporte, diminui o desperdício e garante alimentos mais frescos e saudáveis.

Além disso, as fazendas urbanas contribuem para a sustentabilidade, já que utilizam menos água e eliminam a necessidade de agrotóxicos em muitos casos. Em cidades com alta densidade populacional, essa alternativa surge como uma resposta à crescente demanda por alimentos de qualidade.

Empresas e startups têm investido nesse setor, criando modelos de negócios que vão desde pequenas produções locais até grandes operações tecnológicas.

Apesar do crescimento, o modelo ainda enfrenta desafios como o alto custo inicial e a necessidade de conhecimento técnico especializado.
`
},

{
id: 20,
cat: "Bolsa de Valores",
titulo: "Investidores Jovens",
foto: "bolsa.png",
resumo: "Recorde histórico.",
texto: `
<h1>Jovens investidores mudam o perfil do mercado financeiro</h1>

O mercado financeiro tem passado por uma transformação significativa com a entrada de jovens investidores. Impulsionados pela tecnologia e pelo acesso à informação, cada vez mais pessoas estão começando a investir ainda na juventude.

Aplicativos de investimento e plataformas digitais facilitaram o acesso a produtos financeiros, tornando o processo mais simples e acessível. Além disso, conteúdos educativos nas redes sociais têm contribuído para aumentar o interesse pelo tema.

Essa nova geração de investidores tende a ser mais aberta a riscos e inovação, incluindo investimentos em ações, criptomoedas e startups.

Por outro lado, especialistas alertam para a importância da educação financeira. A falta de conhecimento pode levar a decisões impulsivas e prejuízos.

Mesmo com os riscos, a presença dos jovens no mercado representa uma mudança importante, tornando o ambiente mais dinâmico e diversificado.
`
}
],

// ===============================
// HISTÓRICAS
// ===============================
historicas: [
{
id: 21,
cat: "Ciência",
titulo: "Penicilina 100 anos",
foto: "laboratorio.png",
resumo: "Marco histórico.",
texto: `
<h1>Penicilina completa 100 anos e segue essencial na medicina</h1>

A descoberta da penicilina por Alexander Fleming marcou um dos maiores avanços da história da medicina. Ao longo de um século, o antibiótico salvou milhões de vidas e revolucionou o tratamento de infecções bacterianas.

Antes de sua descoberta, doenças simples podiam ser fatais. Com a penicilina, tornou-se possível tratar infecções de forma eficaz, reduzindo drasticamente a mortalidade.

Atualmente, o medicamento ainda é amplamente utilizado. No entanto, o uso excessivo e inadequado de antibióticos tem levado ao surgimento de bactérias resistentes, um problema crescente na saúde global.

Organizações de saúde alertam para a necessidade de uso consciente e desenvolvimento de novos tratamentos para combater esse desafio.
`
},

{
id: 22,
cat: "Espaço",
titulo: "Apollo 11",
foto: "apollo.png",
resumo: "Lua em 8K.",
texto: `
<h1>Apollo 11: o marco que levou o homem à Lua</h1>

A missão Apollo 11, realizada pela NASA em 1969, continua sendo um dos maiores feitos da história da humanidade.

Comandada por Neil Armstrong, a missão marcou a primeira vez que seres humanos caminharam na superfície lunar.

O evento foi transmitido ao vivo para milhões de pessoas ao redor do mundo, simbolizando o avanço tecnológico e científico da época.

Até hoje, o feito inspira novas missões espaciais e projetos de exploração do espaço.
`
},

{
id: 23,
cat: "Brasil",
titulo: "Independência",
foto: "independencia.png",
resumo: "204 anos.",
texto: `
<h1>Independência do Brasil completa mais de dois séculos</h1>

<h2>O contexto histórico</h2>

<p>No início do século XIX, o Brasil ainda era colônia de Portugal e sofria com restrições econômicas impostas pela metrópole. A vinda da família real portuguesa em 1808 trouxe mudanças importantes, como a abertura dos portos e maior autonomia administrativa.</p>

<h2>Principais fatores da independência</h2>

<p>Entre os fatores que levaram à independência, destacam-se:</p>

<p>- Insatisfação com o controle político de Portugal<br>
- Interesses econômicos das elites brasileiras<br>
- Influência de ideias iluministas e movimentos de independência em outros países<br>
- Tentativas de recolonização por parte das Cortes portuguesas</p>

<h2>O momento da independência</h2>

<p>A independência foi proclamada em 7 de setembro de 1822, quando Dom Pedro I declarou a separação de Portugal às margens do rio Ipiranga. Esse evento ficou conhecido como o "Grito do Ipiranga".</p>

<h2>Impactos para o Brasil</h2>

<p>A independência permitiu ao Brasil organizar seu próprio governo e desenvolver sua economia de forma mais autônoma. No entanto, o país manteve uma monarquia e enfrentou desafios políticos e sociais ao longo dos anos seguintes.</p>
A Independência do Brasil é um dos momentos mais importantes da história nacional. Liderado por Dom Pedro I, o processo marcou o rompimento com Portugal e o início de uma nova fase política.

Desde então, o país passou por diversas transformações, consolidando sua identidade e estrutura como nação independente.

O tema continua sendo amplamente estudado e debatido, especialmente em contextos educacionais.
`
},

{
id: 24,
cat: "Geopolítica",
titulo: "Queda do Muro de Berlim",
foto: "muro.png",
resumo: "Fim da divisão.",
texto: `
<h1>Queda do Muro de Berlim simboliza fim de uma era</h1>
<h1>A Queda do Muro de Berlim e suas consequências globais</h1>

<p>A queda do muro de Berlim marcou o fim da divisão entre Alemanha Oriental e Ocidental e simbolizou o enfraquecimento da Guerra Fria. O muro, construído em 1961, era um dos maiores símbolos da separação ideológica entre o bloco socialista e o capitalista.</p>

<h2>Contexto histórico</h2>

<p>Durante décadas, o mundo esteve dividido entre duas grandes potências: os Estados Unidos e a União Soviética. A Alemanha tornou-se um dos principais pontos dessa divisão, sendo separada em duas partes com sistemas políticos e econômicos opostos.</p>

<p>O Muro de Berlim foi erguido para impedir a fuga de cidadãos da Alemanha Oriental para a Alemanha Ocidental, refletindo as tensões políticas da época.</p>

<h2>O momento da queda</h2>

<p>Em 1989, uma série de protestos populares, mudanças políticas na União Soviética e pressões internas levaram à abertura das fronteiras. Milhares de pessoas foram às ruas e começaram a derrubar o muro, em um momento histórico transmitido para todo o mundo.</p>

<p>A queda ocorreu de forma relativamente pacífica e marcou o início do fim da divisão alemã.</p>

<h2>Consequências imediatas</h2>

<p>Após a queda do muro, a Alemanha foi reunificada em 1990, consolidando a união entre o lado oriental e ocidental. Esse processo trouxe desafios econômicos e sociais, mas também simbolizou a superação de décadas de divisão.</p>

<p>Além disso, outros países do Leste Europeu passaram por transformações políticas, abandonando regimes socialistas e adotando sistemas mais democráticos.</p>

<h2>Impacto global</h2>

<p>O evento representou um momento de transformação política global, contribuindo para o fim da Guerra Fria e abrindo caminho para novas relações internacionais. Houve maior integração econômica, expansão do comércio global e fortalecimento de organizações internacionais.</p>

<p>A queda do muro também influenciou a expansão da União Europeia e mudanças na ordem geopolítica mundial.</p>


`
},

{
id: 25,
cat: "Invenções",
titulo: "Internet 60 anos",
foto: "computador.png",
resumo: "Evolução digital.",
texto: `
<h1>Internet completa 60 anos e redefine a sociedade moderna</h1>

A internet se tornou uma das maiores invenções da história recente, transformando completamente a forma como as pessoas se comunicam, trabalham e consomem informação.

Desde seus primeiros projetos, ligados ao governo dos Estados Unidos, até sua expansão global, a rede evoluiu de forma acelerada.

Hoje, é impossível imaginar a vida sem internet. No entanto, o avanço tecnológico também traz desafios, como segurança digital, privacidade e disseminação de informações falsas.
`
}

],

// ===============================
// 🆕 NOVIDADES
// ===============================
novidades: [
{
id: 30,
cat: "Desenvolvimento de website",
titulo: "Programação",
foto: "veritas.png",
resumo: "Desenvolvimento de habilidades.",
texto: "<p>Estamos desenvolvendo nossas habilidades em html, css e javascript para que possamos melhorar este site e também desenvolver novos.</p>"
},
{
id: 31,
cat: "Proteção",
titulo: "Tecnologia",
foto: "veritas.png",
resumo: "Verificação de fatos.",
texto: "<p>Uma das principais metas futuras da VeritasNews é implementar um sistema avançado de verificação de fatos (fact-checking), garantindo ainda mais confiabilidade nas informações divulgadas.</p>"
},
{
id: 32,
cat: "Melhorias",
titulo: "Melhoras neste website",
foto: "veritas.png",
resumo: "Verificação de fatos.",
texto: "<p>A VeritasNews pretende melhorar seu site para deixá-lo mais rápido, organizado e fácil de usar, facilitando o acesso às notícias pelos usuários.</p>"

},
{
id: 33,
cat: "Atualizações",
titulo: "Notícias",
foto: "veritas.png",
resumo: "Ampliação das atualizações de notícias.",
texto: "<p>A VeritasNews busca aumentar a frequência de publicações, trazendo notícias mais atualizadas ao longo do dia.</p>"


},
{
id: 34,
cat: "Comentários",
titulo: "Discussão sobre notícias",
foto: "veritas.png",
resumo: "Espaço para comentários.",
texto: "A VeritasNews pretende adicionar um sistema de comentários nas notícias, permitindo que os leitores interajam e compartilhem opiniões de forma simples.</p>"
},
{
id: 35,
cat: "Lembretes",
titulo: "Alertas sobre novas publicações",
foto: "veritas.png",
resumo: "Aviso de postagens.",
texto: "<p>A empresa planeja adicionar um sistema simples de aviso quando novas notícias forem publicadas.</p>"
},
]


};

// ===============================
// CARROSSEL
// ===============================
let indexCarrossel = 0;

function rodarCarrossel() {
    const inner = document.getElementById('carousel-inner');
    if (!inner) return;

    indexCarrossel = (indexCarrossel + 1) % 3;
    inner.style.transform = `translateX(-${indexCarrossel * 100}%)`;
}

setInterval(rodarCarrossel, 4000);

// ===============================
// NAVEGAÇÃO
// ===============================
function navegar(pagina, botao) {
    paginaAtual = pagina;

    // ativa botão
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    if (botao) botao.classList.add('active');

    // esconder tudo
    document.getElementById('home-header').style.display = 'none';
    document.getElementById('view-lista').style.display = 'none';
    document.getElementById('view-sobre').style.display = 'none';
    document.getElementById('view-contato').style.display = 'none';
    document.getElementById('view-leitura').style.display = 'none';
    document.getElementById('view-servicos').style.display = 'none'; // 👈 ESSENCIAL

    if (pagina === 'sobre') {
        document.getElementById('view-sobre').style.display = 'block';

    } else if (pagina === 'contato') {
        document.getElementById('view-contato').style.display = 'block';

    } else if (pagina === 'servicos') {
        document.getElementById('view-servicos').style.display = 'block';

    } else {
        
        if (pagina === 'destaques') {
            document.getElementById('home-header').style.display = 'block';
        }

        document.getElementById('view-lista').style.display = 'grid';
        renderizarGrid(pagina); // 👈 ESSENCIAL PARA VOLTAR AS NOTÍCIAS
    }

    window.scrollTo(0, 0);
}

// ===============================
// GRID
// ===============================
function renderizarGrid(cat) {
    const grid = document.getElementById('view-lista');
    grid.innerHTML = "";

    const noticias = banco[cat] || [];

    noticias.forEach(n => {
        grid.innerHTML += `
            <div class="card" onclick="abrirArtigo('${cat}', ${n.id})">
                <img src="${n.foto}" onerror="this.src='https://via.placeholder.com/400x210?text=Veritas+News'">
                <div class="card-body">
                    <span>${n.cat}</span>
                    <h3>${n.titulo}</h3>
                    <p>${n.resumo}</p>
                </div>
            </div>
        `;
    });
}

// ===============================
// ARTIGO
// ===============================
function abrirArtigo(cat, id) {
    categoriaAnterior = cat;
    const n = banco[cat].find(x => x.id === id);
    if (!n) return;

    const container = document.getElementById('corpo-materia');

    document.getElementById('home-header').style.display = 'none';
    document.getElementById('view-lista').style.display = 'none';
    document.getElementById('view-leitura').style.display = 'block';
    document.getElementById('navbar').style.display = 'none';

    container.innerHTML = `
        <span>${n.cat}</span>
        <h1>${n.titulo}</h1>
        <div class="article-meta">Por Redação Veritas | Hoje</div>
        <img src="${n.foto}" class="article-img" onerror="this.src='https://via.placeholder.com/800x450'">
        <div class="article-content">${n.texto}</div>
    `;

    window.scrollTo(0, 0);
}

// ===============================
// VOLTAR
// ===============================
function voltar() {
    document.getElementById('view-leitura').style.display = 'none';
    document.getElementById('navbar').style.display = 'block';

    navegar(categoriaAnterior);
}

// ===============================
// FORMULÁRIO
// ===============================
function enviarDados() {
    const nome = document.getElementById('ipt-nome').value;
    const email = document.getElementById('ipt-email').value;
    const msg = document.getElementById('ipt-msg').value;

    if (!nome || !email) {
        alert("Preencha os campos obrigatórios!");
        return;
    }

    const assunto = encodeURIComponent("Contato pelo site");
    const corpo = encodeURIComponent(
        `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${msg}`
    );

   
    const destino = "veritasnews26@gmail.com";

    
    window.location.href = `mailto:${destino}?subject=${assunto}&body=${corpo}`;

    setTimeout(() => {
        document.getElementById('ipt-nome').value = "";
        document.getElementById('ipt-email').value = "";
        document.getElementById('ipt-msg').value = "";
    }, 300);
}

window.onload = () => {
    navegar('destaques', document.querySelector('.nav-btn'));
};
console.log("deploy refresh");

