//Navegar pelos tópicos do MENU-NAV
function encantos() {
    document.querySelector('.div-encantos').scrollIntoView();
}
function inicio() {
    document.querySelector('.banner').scrollIntoView();
}
function cultura() {
    document.querySelector('.div-cultura').scrollIntoView();
}
function sobre() {
    document.querySelector('.div-sobre').scrollIntoView();
}
function contato() {
    document.querySelector('.div-footer').scrollIntoView();
}
//Elementos ENCANTOS
var imagens = ['assets/encantos/img0.jpg','assets/encantos/img1.jpg','assets/encantos/img2.jpg','assets/encantos/img3.jpg','assets/encantos/img4.jpg','assets/encantos/img5.jpg','assets/encantos/img6.jpg','assets/encantos/img7.jpg'];

var cont = 0;
function autoSlide() {
    document.getElementById("imagem").src=imagens[cont];
    if(cont < imagens.length - 1){
        cont++;
    }
    else{
        cont = 0;
    }
    setTimeout("autoSlide()" , 4000);
}
window.onload = autoSlide;


//Elementos CULTURA
var title = ['Bumba meu boi','Personagens do Bumba meu boi','Arroz de Cuxá','Peixada maranhense','Sururu com leite de coco','Caranguejada','Torta maranhense','Guaraná Jesus'];

var textoCultura = ['O Bumba meu boi é uma dança do folclore popular brasileiro muito marcante em São Luís do Maranhão. A dança gira em torno da lenda sobre a morte e ressurreição de um boi. O Bumba meu boi maranhense recebeu do IPHAN (Instituto do Patrimônio Histórico e Artístico Nacional) o título de Patrimônio Cultural do Brasil.','Personagens do Bumba meu boi (da esquerda para a direita): Cazumbá, Pai Francisco, o Boi, Mãe Catirina. Foto do Arquivo Pessoal, do acervo existente na Casa do Maranhão, em São Luís.','O arroz de cuxá é um prato muito típico do Maranhão. É preparado misturando-se o arroz com a folha da vinagreira cozida, além do camarão seco. Seu preparo tem que ser feito na medida certa, pois a folha em excesso deixa o prato muito amargo. O arroz de cuxá é muito servido como acompanhamento dos pratos à base de peixe. Um prato praticamente obrigatório a quem quer experimentar a culinária do estado. Existe também o “cuxá”, que é um acompanhamento.','A peixada maranhense é um peixe cozido, com leite de coco, geralmente em postas. Nos restaurantes, o peixe mais encontrado é a pescada amarela. Um grande diferencial do prato é que dentro da peixada vai ovo cozido inteiro e batatas.','O sururu é um molusco muito consumido no litoral do Nordeste. Extremamente saboroso, permite várias combinações e na culinária maranhense ele se junta ao leite de coco para virar um ensopado parecido com uma moqueca, muito apetitoso e bem temperado com sabores típicos da região como dendê, coentro e pimenta-de-cheiro.','O prato é preparado cozinhando os caranguejos também inteiros em um molho com tomate, cebola e bastante cheiro verde e leite de coco. O acompanhamento tradicional é o arroz de toucinho, farofa e vinagrete. A diferença para o caranguejo toc toc é a forma como é cozido (toc toc é na água, caranguejada em um molho).','A torta maranhense é uma comida típica da casa do maranhense. A torta não leva farinha, sendo feita com ovos batidos, batata cozida e recheio. É assada no forno. As tortas de camarão seco, caranguejo e sururu são bastante típicas, inclusive nos arraiais de São João do Maranhão.','O refrigerante Guaraná Jesus é uma bebida típica muito consumida no Maranhão. De sabor doce, com um toque de canela, a bebida cor-de-rosa foi inventada por um farmacêutico: Jesus Norberto Gomes, em 1927. Foi em 1980 que a marca foi vendida a uma franqueada da Coca-Cola no Maranhão e em 2001 foi comprado pela Coca-Cola Brasil. A bebida era produzida no Maranhão, e distribuída exclusivamente para Maranhão, Piauí e Tocantins até 2016, quando passou a ser oficialmente distribuída para São Paulo, Minas Gerais e Paraná. A expansão, segundo a Coca-Cola Brasil, atendeu a uma solicitação dos consumidores nas redes sociais.'];

var imagesCultura = ['cultura/img01.jpg', 'cultura/img02.jpg', 'cultura/img03.jpg', 'cultura/img04.png', 'cultura/img05.jpg', 'cultura/img06.jpg', 'cultura/img07.jpg','cultura/img08.jpeg'];

var x = 0;

function anterior(){
    if (x <= 0) x = imagesCultura.length;
    x--;
    document.getElementById("imagemC").src=imagesCultura[x];
    document.getElementById("tituloCultura").innerHTML=title[x];
    document.getElementById("textoCultura").innerHTML=textoCultura[x];
}

function proximo(){
    if(x < imagesCultura.length - 1) {
        x++;
    }else{
        x = 0;
    }
    document.getElementById("imagemC").src=imagesCultura[x];
    document.getElementById("tituloCultura").innerHTML=title[x];
    document.getElementById("textoCultura").innerHTML=textoCultura[x];
}