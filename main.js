
var lang = getParameterByName('lang');
if(lang!=null && lang!=""){
  //set the locale in which the messages will be translated
  iJS.i18n.setlocale(lang) ;
  //add domain where to find messages data
  iJS.i18n.bindtextdomain(lang, "./locale", "po") ;
  //Always do this after a `setlocale` or a `bindtextdomain` call.
  iJS.i18n.try_load_lang() ; //will load and parse messages data from the setting catalog.
}
d3.select('h1').text(iJS._('Efectos de la contaminación atmosférica sobre la salud'));
d3.select('.cabeza h2').text(iJS._('Cabeza'));
d3.select('.respiratorio h2').text(iJS._('Aparato Respiratorio'));
d3.select('.corazon h2').text(iJS._('Corazón'));
d3.select('.arterias h2').text(iJS._('Arterias'));
d3.select('.feto h2').text(iJS._('Feto y placenta'));
d3.select('.reproductivo h2').text(iJS._('Aparato reproductivo'));


d3.select('.cabeza .content').html(iJS._('<p><b>Ictus:</b> 1,4 millones de muertes anuales.<br/> \
Según la OMS, un 34% de las muertes prematuras anuales atribuibles a contaminación del aire interior causada por combustibles sólidos se producen por accidentes cerebrovasculares.<br/> \
<span class="font">Fuente: <a href="http://www.who.int/mediacentre/factsheets/fs292/es/">http://www.who.int/mediacentre/factsheets/fs292/es/</a></span></p> \
<p><b>Daños en el desarrollo neuronal:</b> demostrados en animales y en fase de estudio en humanos.<br/>\
<span class="font">Fuentes: Environ Res. 2016 May;147:383­98 y Endocrinology. 2015 Oct;156(10):3473­82.</span></p>\
<p><b>Problemas de salud mental:</b> Autismo y problemas de conducta en niños.<br/>\
<span class="font">Fuentes: JAMA Psychiatry. 2013 Jan;70(1):71­7 y <a href="http://mentalhealthdaily.com/2015/08/11/air­pollution­causes­brain­damage">http://mentalhealthdaily.com/2015/08/11/air­pollution­causes­brain­damage</a></span></p>\
<p><b>Enfermedades neurodegenerativas:</b> Daños similares a los de un cerebro con Alzheimer.<br/>\
<span class="font">Fuente: J Alzheimers Dis. 2015;45(3):757­70.</span></p>'));

d3.select('.respiratorio .content').html(iJS._('<p><b>Enfermedad Pulmonar Obstructiva Crónica (EPOC):</b> Cerca de 950.000 muertes anuales.</br> \
Según la OMS, un 22% de las muertes prematuras anuales atribuibles a contaminación del aire interior causada por combustibles sólidos se producen por EPOC. </br>\
<span class="font">Fuente: <a href="http://www.who.int/mediacentre/factsheets/fs292/es/">http://www.who.int/mediacentre/factsheets/fs292/es/</a></span></p>\
<p><b>Cáncer de pulmón:</b> más de 255.000 muertes anuales.</br>\
Según la OMS, un 6% de las muertes prematuras anuales atribuibles a contaminación del aire interior causada por combustibles sólidos se producen por cáncer de pulmón.</br>\
<span class="font">Fuente: <a href="http://www.who.int/mediacentre/factsheets/fs292/es/">http://www.who.int/mediacentre/factsheets/fs292/es/</a></span></p>\
<p><b>Neumonía:</b> más de 510.000 muertes anuales.</br>\
Según la OMS, un 12% de las muertes prematuras anuales atribuibles a contaminación del aire interior causada por combustibles sólidos se producen por neumonías. </br>\
<span class="font">Fuente: <a href="http://www.who.int/mediacentre/factsheets/fs292/es/">http://www.who.int/mediacentre/factsheets/fs292/es/</a></span></p>\
<p><b>Afectación de la función pulmonar:</b> función pulmonar reducida y menor crecimiento de los pulmones.</br>\
<span class="font">Fuente: Thorax 2009 64: 645-646 y N Engl J Med. 2015 Mar 5;372(10):905-13).</span></p>\
<p><b>Asma:</b> Nuevos casos de asma y agravamiento de los ya existentes.</br>\
<span class="font">Fuente: Respirology. 2012 Aug;17(6):887-98.</span></p>'));

d3.select('.corazon .content').html(iJS._('<p><b>Infarto de miocardio:</b> más de 1,1 millón de muertes anuales.</br>\
Según la OMS, un 26% de las muertes prematuras anuales atribuibles a contaminación del aire interior causada por combustibles sólidos se producen por infartos de miocardio. </br>\
<span class="font">Fuente: <a href="http://www.who.int/mediacentre/factsheets/fs292/es/">http://www.who.int/mediacentre/factsheets/fs292/es/</a></span></p>\
<p><b>Arritmia:</b> factor desencadenante de arritmias.</br>\
<span class="font">Fuente: Circulation 2010;121;2331-2378.</span></p>\
<p><b>Fallo congestivo cardíaco:</b> Evidencias consistentes relacionan contaminación atmosférica y mortalidad y morbilidad cardiovascular.</br> \
<span class="font">Fuente: Circulation 2010;121;2331-2378.</span></p>'));

d3.select('.arterias .content').html(iJS._('<p><b>Hipertensión:</b> mayor riesgo de hipertensión.</br>\
<span class="font">Fuente: Circulation 2010;121;2331-2378.</span></p>\
<p><b>Inflamación sistémica:</b> mayor riesgo de inflamación crónica.</br>\
<span class="font">Fuente: Circulation 2010;121;2331-2378.</span></p>\
<p><b>Trombosis venosa profunda:</b> indicios de un aumento del riesgo del 70%.</br>\
Un estudio en la región de Lombardía (Italia) halló que un aumento de la exposición a largo plazo a partículas PM10 incrementaba el riesgo de trombosis venosa profunda en un 70%.</br>\
<span class="font">Fuente: Circulation 2010;121;2331-2378.</span></p>\
<p><b>Diabetes:</b> incremento en el riesgo de diabetes tipos 1 y 2 y de resistencia a la insulina.</br>\
<span class="font">Fuente: <a href="http://www.diabetesandenvironment.org/home/contam/air">http://www.diabetesandenvironment.org/home/contam/air</a></span></p>'));

d3.select('.feto .content').html(iJS._('<p><b>Nacimiento prematuro:</b> incremento del riesgo, según múltiples estudios de CREAL-ISGlobal.</br>\
<span class="font">Fuente: Environ Health Perspect; DOI:10.1289/ehp.123-A242.</span></p>\
<p><b>Peso reducido al nacer:</b> incremento del riesgo, según múltiples estudios de CREAL-ISGlobal.</br>\
<span class="font">Fuente: Environ Health Perspect; DOI:10.1289/ehp.123-A242.</span></p>\
<p><b>Preclampsia:</b> incremento del riesgo, según múltiples estudios de CREAL-ISGlobal.</br>\
<span class="font">Fuente: Hypertension. 2014 Sep;64(3):494-500.</span></p>'));

d3.select('.reproductivo .content').html(iJS._('<p><b>Reducción en la calidad del esperma:</b> hipótesis todavía no probada.</p>'));

var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

d3.xml("woman.svg", "image/svg+xml", function(error, xml) {
  if (error) throw error;
  document.body.appendChild(xml.documentElement);
  d3.select('#men').style("visibility", "hidden");

  var svg=d3.select('svg');
  // svg.attr("height", (d3.select(".tabs").node().getBoundingClientRect().height - 10)+"px");
  // svg.attr("width","auto")
  // svg.style({
  //   "right": "-" + ((svg.node().getBoundingClientRect().width/2) - (d3.select('g#layer1').node().getBoundingClientRect().width/2))  + "px",
  //   "top": (d3.select('h1').node().getBoundingClientRect().height + 5)+'px'
  // });

 d3.select(window).on('resize',resize)
 var aspectRatio =  svg.attr('width') / svg.attr('height');
 resize();
  // console.log((svg.node().getBoundingClientRect().width/2) - (d3.select('g#layer1').node().getBoundingClientRect().width/2) )
  // svg.style("visibility", "hidden");
  // console.log(svg)
  //translate
  // d3.select('.title').text(iJS._("El ébola frente a otras enfermedades en África"));
  // d3.select('.legend.malaria').text(iJS._("Malaria"));
  // d3.select('.legend.tuberculosis').text(iJS._("Tuberculosis"));
  // d3.select('.legend.ebola').text(iJS._("Ébola"));
  // d3.select('.country.guinea').text(iJS._("Guinea"));
  // d3.select('.country.sierra_leona').text(iJS._("Sierra Leona"));
  // d3.select('.country.liberia').text(iJS._("Liberia"));

  d3.selectAll('.tab h2').on("click", function(){

    console.log('click')
    var tab= d3.select(this.parentNode)
    // var svg=d3.select('svg');

    // tab.selectAll("tab")
    //   .filter(function(d){ console.log(d, this);return d;} )
    //   .style({"display":"none"});
    if(!tab.classed('reproductivo')){
      d3.select('#men').style("visibility", "hidden");
      d3.select('#woman').style("visibility", "visible");
    }else{
      d3.select('#men').style("visibility", "visible");
      d3.select('#woman').style("visibility", "hidden");

    }
    var c= tab.attr('class').split(" ")[0]

    if(!tab.classed("active")){
      var maxH = d3.select(".tabs").node().getBoundingClientRect().height - tab.select('h2').node().getBoundingClientRect().height;
      console.log('maxH',maxH)
      tab.select('.content').style({
        'height':maxH+"px"
      })
      tab.classed("active", true)
      d3.selectAll(".tab:not(.active)").classed("hide", true);
      d3.selectAll("g."+c).classed("active", true);
      // console.log()
    }else{

      tab.classed("active", false)
      d3.selectAll(".tab:not(.active)").classed("hide", false);
      d3.selectAll("g."+c).classed("active", false);
      d3.select('#men').style("visibility", "hidden");
      d3.select('#woman').style("visibility", "visible");
      resize();
    }



    // tab.style("max-height",maxH);

  })

  function resize(){
    console.log('resize')
    var svg=d3.select('svg');
    // var aspectRatio =  svg.attr('width') / svg.attr('height');
    console.log("d3.selectAll('.tab.active').length",d3.selectAll('.tab.active').length)
    if(d3.selectAll('.tab.active')[0].length == 0){
      svg.attr("height", (d3.select(".tabs").node().getBoundingClientRect().height - 10)+"px");
      svg.attr("width",(d3.select(".tabs").node().getBoundingClientRect().height*aspectRatio) +"px")
    }else{
      var h = (d3.select(".tabs").node().getBoundingClientRect().height + d3.select(".tab.active .content").node().getBoundingClientRect().height - 10)
      svg.attr("height", h+"px");
      svg.attr("width",(h*aspectRatio) +"px")
    }
    console.log(d3.select(".tabs").node().getBoundingClientRect().height,aspectRatio)
    svg.style({
      // "right": "-" + ((svg.node().getBoundingClientRect().width/2) - (d3.select('g#layer1').node().getBoundingClientRect().width/2))  + "px",
      "right":0,
      "top": (d3.select('h1').node().getBoundingClientRect().height + 5)+'px'
    });
    // console.log(((svg.node().getBoundingClientRect().width/2) - (d3.select('g#layer1').node().getBoundingClientRect().width/2)))
    d3.selectAll('.content').style({
      "padding-right":d3.select('#layer1').node().getBoundingClientRect().width+"px",
      // "width": d3.select(".tabs").node().getBoundingClientRect().width + "px"
          // "padding-right":"0px"
    })
  }

});
