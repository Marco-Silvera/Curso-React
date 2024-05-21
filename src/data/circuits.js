const circuits = [
    {
        name: 'Aventura Inca',
        title: 'Descubre el Sur del Perú durante una aventura inolvidable',
        description: 'A lo largo de la costa desértica, podrán admirar la fauna variada de las islas Ballestas, divertirse y relájense en medio de las dunas del oasis de Huacachina antes de sobrevolar las enigmáticas líneas de Nazca. Descubran Arequipa, la ciudad “blanca”; exploren el Cañón de Colca, y naveguen en las aguas del lago Titicaca. Respirar el aire Andino durante un trek que los llevará a descubrir las comunidades locales a través de los paisajes increíbles de la Cordillera de los Andes. Visiten la capital del Imperio Inca, Cuzco, y el Valle Sagrado hasta llegar al famoso Machu Picchu. En cada uno de estos lugares, Lima, Arequipa, Puno y Cuzco tendrá la posibilidad de vivir distintas experiencias con comunidades locales compartiendo su cultura, sus tradiciones y su vida diaria, además de disfrutar de la naturaleza y apreciar impresionantes sitios arqueológicos.',
        path: 'aventura-inca',
    },
    {
        name: 'Corazón del Imperio Inca',
        title: '¡Un recorrido por el sur del Perú que te llevará al Corazón del Imperio Inca!',
        description: 'Pachamama es una agencia peruana de turismo alternativo promovida por la CIAP (Central Interregional de Artesanos del Perú), RELLACC (Red Latinoamericana de Comercialización) y 14 grupos de artesanos peruanos. Nosotros proponemos programas de viajes con importantes actividades de sensibilización y una visión  más real y profunda del destino turístico, respetando la integridad cultural, los procesos ecológicos esenciales, la diversidad biológica y los modos de vida. Los invitamos a descubrir el Perú en un espíritu de intercambio, respeto de los valores humanos y de la solidaridad, características de un turismo responsable.',
        path: 'corazon-del-imperio-inca',
    },
    {
        name: 'Esencia del Perú',
        title: '¡Un recorrido por los Imperdibles Destinos Turísticos del País!',
        description: 'Este circuito es perfecto para los viajeros que no quieren perderse las maravillas del Perú por disponibilidad de escaso tiempo. Desde Lima despegaremos hacia Arequipa, la “Ciudad Blanca”, para descubrir el encanto de la segunda ciudad importante del país y explorar el asombroso cañón de Colca, uno de los cañones más profundos del mundo. Luego continuaremos para visitar el Lago Titicaca gozando de las hermosas vistas de la cordillera occidental y seguiremos nuestra aventura hasta la antigua capital del imperio Inca, entre paisajes luminosos y vivaces tradiciones culturales, hasta el gran final: la visita del inolvidable Macchu Picchu.',
        path: 'esencia-del-peru',
    },
    {
        name: 'Panorama Peruano',
        title: 'Ten una visión panorámica de los lugares más importantes del Norte al Sur de Perú',
        description: 'Empezaremos admirando los nevados de la Cordillera Blanca, visitaremos el misterioso complejo arqueológico Chavín de Huantar, y si dispone de más días puede realizar impresionantes caminatas por la Cordillera Negra. Bajaremos a la costa norte para admirar los impresionante vestigios de las culturas Moche y Chimú como: Chan Chan, la Huaca del Sol y de Luna, el museo Tumbas Reales de Sipán y las pirámides de Túcume. Nos trasladaremos en avión hasta Puno para explorar las encantadoras islas del Lago Titicaca y descubrir las tradiciones locales de estas islas. Luego nos dirigiremos a la capital Imperial de Cuzco, donde visitaremos el Valle Sagrado y subiremos al emblemático Machu Picchu.',
        path: 'panorama-peruano',
    },
    {
        name: 'Del Pacífico al Amazonas',
        title: '¡Un viaje a lo largo de la Costa, Sierra y Selva!',
        description: 'Si quieres disfrutar de los principales atractivos turísticos del sur del Perú y descubrir una parte de la Amazonía, este viaje es el ideal. A lo largo de la costa desértica, admira la rica fauna de las islas Ballestas, disfruta en las dunas del oasis de Huacachina y sobrevuela las enigmáticas líneas de Nazca. Conoce Arequipa, la ciudad blanca; explora el Cañón de Colca uno de los más profundo del mundo; navega sobre el lago Titicaca hasta las encantadoras islas de Taquile y Amantani. Un viaje a través del Altiplano te conducirá a Cuzco, ciudad mítica y antigua capital del imperio Inca, aquí dispondrás de varios días para visitar algunos de los numerosos sitios arqueológicos del Valle Sagrado y en particular el famoso Machu Picchu. Finalmente un vuelo a Puerto Maldonado – Región de Madre de Dios, en donde podrás explorar y descubrir la Amazonía Peruana, una de las zonas de mayor riqueza biológica del mundo.',
        path: 'del-pacifico-al-amazonas',
    },
    {
        name: 'Tesoros del Norte',
        title: 'Un viaje a través la Historia, al encuentro de las Antiguas Culturas Peruanas y sus Herencias',
        description: 'En este viaje, atravesarás paisajes diferentes y aprenderás de distintas culturas. Recorreremos las 3 regiones peruanas, de la costa Pacífica a la Amazonia, pasando por las montañas Andinas. Descubrirás los tesoros del Norte del Perú, como los sitios arqueológicos de Chimú, la ciudad de Chan Chan o las pirámides de Tucume. Este viaje a través naturaleza e Historia, te llevará hasta la ciudadela de Kuelap, conocida como el Machu Picchu del Norte, de la cultura Chachapoyas. Desde la costa Pacifica desértica, a las cumbres nevadas de la Cordillera Blanca, desde las alturas Andinas hasta la Amazonia en Tarapoto, este viaje es lleno de magia. Ven a explorar los misterios del Norte!',
        path: 'tesoros-del-norte',
    },
    {
        name: 'Perú - Bolivia',
        title: 'Descubre las maravillosas del Altiplano del Perú y de Bolivia',
        description: 'De Lima hacía el sur del Perú, bordeando la costa del Pacifico pasarán por las ciudades de Pisco, Ica y Nazca en donde apreciarán la fauna de la costa meridional peruana y las enigmáticas Líneas de Nazca. Luego, en dirección a la ciudad blanca de Arequipa y el imponente Cañón de Colca, antes de dirigirse hacia Puno y el Lago Titicaca dónde podrán admirar la riqueza cultural, la generosidad de sus habitantes y los hermosos paisajes de los Andes. En Bolivia, visitarán pueblos tradicionales que conservan sus hábitos y los ritos de sus antepasados. Recorrerán lugares como La Paz, las islas del Sol y de la Luna, Copacabana, el Salar de Uyuni, que es uno de los desiertos de sal más grande del mundo, Potosí antiguamente conocida como la Villa Imperial, y la ciudad histórica de Sucre. Volveremos a Perú para visitar la a capital del imperio Inca Cusco y el célebre Machu Picchu así como comunidades locales en las cuales disfrutarán de una grata e enriquecedora experiencia de viaje.',
        path: 'peru-bolivia',
    },
    {
        name: 'A lo largo de los Andes',
        title: 'Recorre el Camino Inca cruzando los Andes del sur del Perú',
        description: 'Durante este viaje atravesarás tantos paisajes como Historia y Cultura. Viajarás por las 3 regiones del Perú, desde la costa del Pacífico hasta el Amazonas pasando por los Andes. Descubrirás los tesoros que el norte de Perú tiene reservado para ti, como los sitios arqueológicos de Cimu, la ciudad de Chan Chan o las pirámides de Túcume. Este viaje por la historia te llevará también a descubrir la fortaleza de Kuelap, también conocida como el Machu Picchu del Norte, de la civilización Chachapoyas. Paisajes muy variados se desplazan a lo largo de tu ruta: desde la costa desértica hasta los picos nevados de la Cordillera Blanca, desde las altas montañas andinas hasta los bosques amazónicos. En una atmósfera atemporal, por encima de las nubes y en armonía con la naturaleza, explorarás los misterios del norte del Perú y compartirás cultura y tradiciones con las comunidades locales que conocerás.',
        path: 'a-lo-largo-de-los-andes',
    }
]

export default circuits;