var dict = {
  About: {
    es: "Acerca"
  },
  Projects: {
    es: "Proyectos"
  },
  Education: {
    es: "Educación"
  },
  Skills: {
    es: "Habilidades"
  },
  Interests: {
    es: "Intereses"
  },

  "I am web Developer living in Panamá with knowledge in programming and Marketing. My passion is understantd how the company works and how can be improved with different technology. Currently I´m working in Projects in Web Developer and Marketing": {
    es:
      "Soy un desarrollador web vivendo en Panamá con conocimiento en programación y marketing. Mi pasión es entender como las compañias trabajan y como se pueden mejorar con diferentes tecnologias, actualmente trabajando en proyectos web y marketing"
  },
  productsa: {
    en:
      "Products a&e is a billing online that provides the user upload of data in order to save the information of the products and have an inventory",
    es:
      "Productos a&e es una facturación online que provee al usuaria la carga de data con el proposito de guardar la información y tener un inventario "
  },
  tourave: {
    en:
      "Tour aventuras is service of transporting in the city of Panamá , the web is page made it in on wordpress and working with analytics ",
    es:
      "Tour aventuras es un servicio de transporte de turismo en la ciudad de Panamá , pagina hecha en wordpress"
  },
  fyc: {
    en:
      "F&C Abogados is law firm located in Panamá City, who provides different services. Page made it in Wordpress ",
    es:
      "F&C Abogados es una firma de abogados localizado en la ciudad de Panamá , que provee diferentes servios de legislatura. Hecha en Wordpress."
  },
  interestp1: {
    en:
      "Apart from being a web developer, I enjoy most of my time being sport person and hang out with my friends. I like reading and taking courses about topics of my interest and go to the meeting and know different persons.Even I study sofware development I like the Marketing, Bussiness Intelligence, Growth Hacking  and different topics that involves the growing of a company to sucess.",
    es:
      "Además de ser un desarrollador web, disfruto la mayor parte de mi tiempo como deportista y salgo con mis amigos. Me gusta leer y tomar cursos sobre temas de mi interés, ir a la reunión y conocer a diferentes personas. Incluso cuando estudio el desarrollo de software, me gusta Marketing, Bussiness Intelligence, Growth Hacking y diferentes temas que involucran el crecimiento de una empresa para el éxito."
  },
  interestp2: {
    en:
      " My main goal is works in enviroments that people like growing  in themselves and has different dreams about his company, for me this the most important thing in a company, create value and share that values around the world.",
    es:
      "Mi principal objetivo es trabajar en entornos que a la gente le guste crecer en sí mismos y tenga diferentes sueños sobre su compañía, para mí esto es lo más importante en una empresa, crear valor y compartir ese valor."
  }
};

var _t = $("body").translate({ lang: "en", t: dict });
var str = _t.g("translate");
console.log(str);

$(".lang_selector").click(function(e) {
  var lang = $(this).attr("data-value");
  _t.lang(lang);
  console.log(lang);
});
