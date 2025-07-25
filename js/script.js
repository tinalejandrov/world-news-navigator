// ===============================
// 0. Datos de diarios
// ===============================
const data = {
  south_america: {
    argentina: [
      { name: "Clarín", url: "https://www.clarin.com" },
      { name: "La Nación", url: "https://www.lanacion.com.ar" },
      { name: "Infobae", url: "https://www.infobae.com" },
      { name: "Página/12", url: "https://www.pagina12.com.ar" },
      { name: "Perfil", url: "https://www.perfil.com" },
      { name: "Crónica", url: "https://www.cronica.com.ar" },
      { name: "Ámbito Financiero", url: "https://www.ambito.com" },
      { name: "El Tribuno", url: "https://www.eltribuno.com" },
      { name: "Diario Río Negro", url: "https://www.rionegro.com.ar" },
      { name: "La Voz del Interior", url: "https://www.lavoz.com.ar" },
      { name: "El Litoral", url: "https://www.ellitoral.com" },
      { name: "Los Andes", url: "https://www.losandes.com.ar" },
      { name: "El Día", url: "https://www.eldia.com" },
      { name: "Diario Uno", url: "https://www.diariouno.com.ar" },
      { name: "Tiempo Argentino", url: "https://www.tiempoar.com.ar" }
    ],
    brazil: [
      { name: "O Globo", url: "https://oglobo.globo.com" },
      { name: "Folha de S.Paulo", url: "https://www.folha.uol.com.br" },
      { name: "Estadão (O Estado de S. Paulo)", url: "https://www.estadao.com.br" },
      { name: "Correio Braziliense", url: "https://www.correiobraziliense.com.br" },
      { name: "Zero Hora", url: "https://www.zh.clicrbs.com.br" },
      { name: "Diário do Nordeste", url: "https://diariodonordeste.verdesmares.com.br" },
      { name: "Gazeta do Povo", url: "https://www.gazetadopovo.com.br" },
      { name: "Extra", url: "https://extra.globo.com" },
      { name: "Jornal do Commercio", url: "https://jc.ne10.uol.com.br" },
      { name: "O Tempo", url: "https://www.otempo.com.br" },
      { name: "Meia Hora", url: "https://meiahora.ig.com.br" },
      { name: "A Tarde", url: "https://atarde.com.br" },
      { name: "Jornal do Brasil", url: "https://www.jb.com.br" },
      { name: "Correio da Bahia", url: "https://www.correio24horas.com.br" },
      { name: "Tribuna do Paraná", url: "https://tribunapr.uol.com.br" }            
    ],      
    chile: [
      { name: "El Mercurio", url: "https://www.elmercurio.com" },
      { name: "La Tercera", url: "https://www.latercera.com" },
      { name: "Diario Financiero", url: "https://www.df.cl" },
      { name: "El Mostrador", url: "https://www.elmostrador.cl" },
      { name: "La Cuarta", url: "https://www.lacuarta.com" },
      { name: "The Clinic", url: "https://www.theclinic.cl" },
      { name: "Biobío Chile", url: "https://www.biobiochile.cl" },
      { name: "Publimetro Chile", url: "https://www.publimetro.cl" },
      { name: "La Segunda", url: "https://www.lasegunda.com" },
      { name: "El Dínamo", url: "https://www.eldinamo.cl" },
      { name: "El Desconcierto", url: "https://www.eldesconcierto.cl" },
      { name: "La Discusión", url: "https://www.ladiscusion.cl" }
    ],
    uruguay: [
      { name: "El País", url: "https://www.elpais.com.uy" },
      { name: "El Observador", url: "https://www.elobservador.com.uy" },
      { name: "La Diaria", url: "https://ladiaria.com.uy" },
      { name: "Montevideo Portal", url: "https://www.montevideo.com.uy" },
      { name: "Brecha", url: "https://brecha.com.uy" },
      { name: "Caras y Caretas", url: "https://www.carasycaretas.com.uy" },
      { name: "MercoPress", url: "https://en.mercopress.com" }
    ],
    paraguay: [
      { name: "ABC Color", url: "https://www.abc.com.py" },
      { name: "Última Hora", url: "https://www.ultimahora.com" },
      { name: "La Nación", url: "https://www.lanacion.com.py" },
      { name: "Hoy", url: "https://www.hoy.com.py" },
      { name: "Extra", url: "https://www.extra.com.py" },
      { name: "5días", url: "https://www.5dias.com.py" }
    ],
    peru: [
      { name: "El Comercio", url: "https://elcomercio.pe" },
      { name: "La República", url: "https://larepublica.pe" },
      { name: "Perú21", url: "https://peru21.pe" },
      { name: "Diario Correo", url: "https://diariocorreo.pe" },
      { name: "RPP Noticias", url: "https://rpp.pe" },
      { name: "Gestión", url: "https://gestion.pe" },
      { name: "Trome", url: "https://trome.pe" },
      { name: "La República Sur", url: "https://larepublica.pe/sur" },
      { name: "El Popular", url: "https://elpopular.pe" },
      { name: "Exitosa Noticias", url: "https://exitosanoticias.pe" }
    ],
    bolivia: [
      { name: "El Deber", url: "https://eldeber.com.bo" },
      { name: "Página Siete", url: "https://paginasiete.bo" },
      { name: "Opinión", url: "https://www.opinion.com.bo" },
      { name: "Correo del Sur", url: "https://correodelsur.com" },
      { name: "La Razón (Bolivia)", url: "https://www.la-razon.com" },
      { name: "El Diario", url: "https://www.eldiario.net" }
    ],
    colombia: [
      { name: "El Tiempo", url: "https://www.eltiempo.com" },
      { name: "El Espectador", url: "https://www.elespectador.com" },
      { name: "Semana", url: "https://www.semana.com" },
      { name: "La República (Colombia)", url: "https://www.larepublica.co" },
      { name: "El Colombiano", url: "https://www.elcolombiano.com" },
      { name: "Vanguardia", url: "https://www.vanguardia.com" },
      { name: "El Heraldo", url: "https://www.elheraldo.co" },
      { name: "Publimetro Colombia", url: "https://www.publimetro.co" },
      { name: "El País Cali", url: "https://www.elpais.com.co" },
      { name: "KienyKe", url: "https://www.kienyke.com" },
      { name: "Las2Orillas", url: "https://www.las2orillas.co" },
      { name: "Noticias Caracol", url: "https://noticias.caracoltv.com" }
    ],
    ecuador: [
      { name: "El Comercio", url: "https://www.elcomercio.com" },
      { name: "El Universo", url: "https://www.eluniverso.com" },
      { name: "Expreso", url: "https://www.expreso.ec" },
      { name: "La Hora", url: "https://www.lahora.com.ec" },
      { name: "Metro Ecuador", url: "https://www.metroecuador.com.ec" },
      { name: "Primicias", url: "https://www.primicias.ec" },
      { name: "El Telégrafo", url: "https://www.eltelegrafo.com.ec" },
      { name: "Diario Extra", url: "https://www.extra.ec" }
    ],
    venezuela: [
      { name: "El Nacional", url: "https://www.elnacional.com" },
      { name: "Últimas Noticias", url: "https://ultimasnoticias.com.ve" },
      { name: "Tal Cual", url: "https://talcualdigital.com" },
      { name: "Efecto Cocuyo", url: "https://efectococuyo.com" },
      { name: "El Universal", url: "https://www.eluniversal.com" },
      { name: "La Patilla", url: "https://www.lapatilla.com" },
      { name: "Runrun.es", url: "https://runrun.es" },
      { name: "Noticiero Digital", url: "https://www.noticierodigital.com" }
    ],
    guyana: [
      { name: "Stabroek News", url: "https://www.stabroeknews.com" },
      { name: "Kaieteur News", url: "https://www.kaieteurnewsonline.com" },
      { name: "Guyana Chronicle", url: "https://guyanachronicle.com" }
    ],
    suriname: [
      { name: "De Ware Tijd", url: "https://www.dwtonline.com" },
      { name: "Starnieuws", url: "https://www.starnieuws.com" },
      { name: "Suriname Herald", url: "https://www.srherald.com" }
    ],
    french_guiana: [
      { name: "FranceGuyane", url: "https://www.franceguyane.fr" },
      { name: "Guyane la 1ère", url: "https://la1ere.francetvinfo.fr/guyane" },
      { name: "Blada.com", url: "http://www.blada.com" }
    ]
  },
  central_america: {
    mainland: {
      guatemala: [
        { name: "Prensa Libre", url: "https://www.prensalibre.com" },
        { name: "El Periódico", url: "https://elperiodico.com.gt" },
        { name: "Nuestro Diario", url: "https://www.nuestrodiario.com.gt" }
      ],
      el_salvador: [
        { name: "La Prensa Gráfica", url: "https://www.laprensagrafica.com" },
        { name: "El Diario de Hoy", url: "https://www.elsalvador.com" },
        { name: "El Mundo", url: "https://elmundo.sv" }
      ],
      honduras: [
        { name: "La Prensa", url: "https://www.laprensa.hn" },
        { name: "El Heraldo", url: "https://www.elheraldo.hn" },
        { name: "La Tribuna", url: "https://www.latribuna.hn" }
      ],
      nicaragua: [
        { name: "La Prensa", url: "https://www.laprensa.com.ni" },
        { name: "El Nuevo Diario", url: "https://www.elnuevodiario.com.ni" },
        { name: "Confidencial", url: "https://confidencial.digital" }
      ],
      costa_rica: [
        { name: "La Nación", url: "https://www.nacion.com" },
        { name: "Diario Extra", url: "https://www.diarioextra.com" },
        { name: "CRHoy", url: "https://www.crhoy.com" }
      ],
      panama: [
        { name: "La Prensa", url: "https://www.prensa.com" },
        { name: "Mi Diario", url: "https://www.midiario.com" },
        { name: "Panamá América", url: "https://www.panamaamerica.com.pa" }
      ]
    },
    islands: {
      cuba: [
        { name: "Granma", url: "https://www.granma.cu" },
        { name: "Juventud Rebelde", url: "https://www.juventudrebelde.cu" }
      ],
      dominican_republic: [
        { name: "Listín Diario", url: "https://listindiario.com" },
        { name: "Diario Libre", url: "https://www.diariolibre.com" },
        { name: "El Día", url: "https://eldia.com.do" },
        { name: "El Caribe", url: "https://www.elcaribe.com.do" }
      ],
      haiti: [
        { name: "Le Nouvelliste", url: "https://lenouvelliste.com" },
        { name: "Haiti Libre", url: "https://www.haitilibre.com" }
      ],
      puerto_rico: [
        { name: "El Nuevo Día", url: "https://www.elnuevodia.com" },
        { name: "Primera Hora", url: "https://www.primerahora.com" },
        { name: "NotiCel", url: "https://www.noticel.com" }
      ],
      jamaica: [
        { name: "The Gleaner", url: "https://jamaica-gleaner.com" },
        { name: "Jamaica Observer", url: "https://www.jamaicaobserver.com" }
      ],
      trinidad_and_tobago: [
        { name: "Trinidad and Tobago Guardian", url: "https://www.guardian.co.tt" },
        { name: "Trinidad Express", url: "https://trinidadexpress.com" }
      ],
      barbados: [
        { name: "Barbados Today", url: "https://barbadostoday.bb" },
        { name: "The Nation Barbados", url: "https://www.nationnews.com" }
      ],
      bahamas: [
        { name: "The Nassau Guardian", url: "https://thenassauguardian.com" },
        { name: "The Tribune", url: "https://www.tribune242.com" }
      ],
      saint_lucia: [
        { name: "The Voice", url: "https://thevoiceslu.com" },
        { name: "St. Lucia Times", url: "https://stluciatimes.com" }
      ],
      saint_vincent_and_the_grenadines: [
        { name: "Searchlight", url: "https://www.searchlight.vc" },
        { name: "The Vincentian", url: "http://thevincentian.com" }
      ],
      grenada: [
        { name: "The New Today", url: "https://www.thenewtodaygrenada.com" },
        { name: "NOW Grenada", url: "https://www.nowgrenada.com" }
      ],
      antigua_and_barbuda: [
        { name: "Antigua Observer", url: "https://antiguaobserver.com" },
        { name: "Caribbean News Global", url: "https://caribbeannewsglobal.com" }
      ],
      dominica: [
        { name: "Dominica News Online", url: "https://dominicanewsonline.com" },
        { name: "The Sun", url: "https://www.thesunnewspaper.com" }
      ],
      saint_kitts_and_nevis: [
        { name: "SKN Vibes", url: "https://www.sknvibes.com" },
        { name: "The St. Kitts-Nevis Observer", url: "https://www.thestkittsnevisobserver.com" }
      ]                                                      
    }
  },
  north_america: {
    canada: [
      { name: "The Globe and Mail", url: "https://www.theglobeandmail.com" },
      { name: "National Post", url: "https://nationalpost.com" },
      { name: "Toronto Star", url: "https://www.thestar.com" },
      { name: "Toronto Sun", url: "https://torontosun.com" },
      { name: "CBC News", url: "https://www.cbc.ca/news" },
      { name: "Le Devoir", url: "https://www.ledevoir.com" },
      { name: "La Presse", url: "https://www.lapresse.ca" },
      { name: "Vancouver Sun", url: "https://vancouversun.com" },
      { name: "Ottawa Citizen", url: "https://ottawacitizen.com" },
      { name: "Calgary Herald", url: "https://calgaryherald.com" },
      { name: "Montreal Gazette", url: "https://montrealgazette.com" },
      { name: "Edmonton Journal", url: "https://edmontonjournal.com" },
      { name: "The Chronicle Herald", url: "https://www.saltwire.com/halifax" },
      { name: "The Province", url: "https://theprovince.com" },
      { name: "Windsor Star", url: "https://windsorstar.com" }            
    ],      
    united_states: [
      { name: "The New York Times", url: "https://www.nytimes.com" },
      { name: "The Washington Post", url: "https://www.washingtonpost.com" },
      { name: "USA Today", url: "https://www.usatoday.com" },
      { name: "Los Angeles Times", url: "https://www.latimes.com" },
      { name: "The Wall Street Journal", url: "https://www.wsj.com" },
      { name: "New York Post", url: "https://nypost.com" },
      { name: "Chicago Tribune", url: "https://www.chicagotribune.com" },
      { name: "San Francisco Chronicle", url: "https://www.sfchronicle.com" },
      { name: "Boston Globe", url: "https://www.bostonglobe.com" },
      { name: "The Atlanta Journal-Constitution", url: "https://www.ajc.com" },
      { name: "Miami Herald", url: "https://www.miamiherald.com" },
      { name: "Houston Chronicle", url: "https://www.houstonchronicle.com" },
      { name: "Star Tribune", url: "https://www.startribune.com" },
      { name: "The Philadelphia Inquirer", url: "https://www.inquirer.com" },
      { name: "Newsday", url: "https://www.newsday.com" },
      { name: "The Denver Post", url: "https://www.denverpost.com" },
      { name: "The Dallas Morning News", url: "https://www.dallasnews.com" },
      { name: "Tampa Bay Times", url: "https://www.tampabay.com" },
      { name: "The Seattle Times", url: "https://www.seattletimes.com" },
      { name: "The Kansas City Star", url: "https://www.kansascity.com" }            
    ],
    alaska: [
      { name: "Anchorage Daily News", url: "https://www.adn.com" },
      { name: "Juneau Empire", url: "https://www.juneauempire.com" }
    ],
    mexico: [
      { name: "El Universal", url: "https://www.eluniversal.com.mx" },
      { name: "Reforma", url: "https://www.reforma.com" },
      { name: "Milenio", url: "https://www.milenio.com" },
      { name: "Excélsior", url: "https://www.excelsior.com.mx" },
      { name: "La Jornada", url: "https://www.jornada.com.mx" },
      { name: "El Financiero", url: "https://www.elfinanciero.com.mx" },
      { name: "El Economista", url: "https://www.eleconomista.com.mx" },
      { name: "Publimetro México", url: "https://www.publimetro.com.mx" },
      { name: "Diario de Yucatán", url: "https://www.yucatan.com.mx" },
      { name: "El Imparcial", url: "https://www.elimparcial.com" },
      { name: "El Heraldo de México", url: "https://heraldodemexico.com.mx" },
      { name: "Zócalo", url: "https://www.zocalo.com.mx" },
      { name: "El Sol de México", url: "https://www.elsoldemexico.com.mx" },
      { name: "24 Horas", url: "https://www.24-horas.mx" },
      { name: "Noroeste", url: "https://www.noroeste.com.mx" }            
    ],
    greenland: [
      { name: "Sermitsiaq", url: "https://www.sermitsiaq.ag" },
      { name: "Kalaallit Nunaata Radioa (KNR)", url: "https://knr.gl" }
    ]
  },
  
  asia_west: {
      saudi_arabia: [
        { name: "Arab News", url: "https://www.arabnews.com" },
        { name: "Al Riyadh", url: "https://www.alriyadh.com" },
        { name: "Saudi Gazette", url: "https://www.saudigazette.com.sa" }
      ],
      armenia: [
        { name: "Armenpress", url: "https://armenpress.am" },
        { name: "Hetq", url: "https://hetq.am" },
        { name: "News.am", url: "https://news.am/eng" }
      ],
      azerbaijan: [
        { name: "Trend News Agency", url: "https://en.trend.az" },
        { name: "APA", url: "https://apa.az" },
        { name: "Azertag", url: "https://azertag.az/en" }
      ],
      bahrain: [
        { name: "Gulf Daily News", url: "https://www.gdnonline.com" },
        { name: "The Daily Tribune", url: "https://www.newsofbahrain.com" },
        { name: "Bahrain Mirror", url: "https://bahrainmirror.com" }
      ],
      qatar: [
        { name: "The Peninsula", url: "https://thepeninsulaqatar.com" },
        { name: "Gulf Times", url: "https://www.gulf-times.com" },
        { name: "Qatar Tribune", url: "https://www.qatar-tribune.com" }
      ],
      emirates: [
          { name: "The National", url: "https://www.thenationalnews.com" },
          { name: "Gulf News", url: "https://gulfnews.com" },
          { name: "Khaleej Times", url: "https://www.khaleejtimes.com" }
        ],
        georgia: [
          { name: "Agenda.ge", url: "https://agenda.ge" },
          { name: "Georgia Today", url: "https://georgiatoday.ge" },
          { name: "The Messenger Online", url: "http://www.messenger.com.ge" }
        ],
        iraq: [
          { name: "Al Mada", url: "https://almadapaper.net" },
          { name: "Iraq News", url: "https://www.iraqinews.com" },
          { name: "Al-Sumaria", url: "https://www.alsumaria.tv" }
        ],
        israel: [
          { name: "The Jerusalem Post", url: "https://www.jpost.com" },
          { name: "Haaretz", url: "https://www.haaretz.com" },
          { name: "Times of Israel", url: "https://www.timesofisrael.com" }
        ],
        jordan: [
          { name: "Jordan Times", url: "https://www.jordantimes.com" },
          { name: "Al Ghad", url: "https://alghad.com" },
          { name: "Petra News Agency", url: "https://petra.gov.jo" }
        ],
        lebanon: [
          { name: "The Daily Star", url: "https://www.dailystar.com.lb" },
          { name: "L’Orient-Le Jour", url: "https://www.lorientlejour.com" },
          { name: "Al-Akhbar", url: "https://al-akhbar.com" }
        ],
        oman: [
          { name: "Times of Oman", url: "https://www.timesofoman.com" },
          { name: "Oman Observer", url: "https://www.omanobserver.om" },
          { name: "Muscat Daily", url: "https://www.muscatdaily.com" }
        ],
        palestine: [
          { name: "Palestine Chronicle", url: "https://www.palestinechronicle.com" },
          { name: "Ma’an News Agency", url: "https://www.maannews.net/eng" },
          { name: "WAFA", url: "https://english.wafa.ps" }
        ],
        syria: [
          { name: "SANA (Syrian Arab News Agency)", url: "https://sana.sy/en" },
          { name: "Tishreen", url: "http://tishreen.news.sy" },
          { name: "Al-Watan", url: "https://alwatan.sy" }
        ],
        turkey: [
          { name: "Hürriyet Daily News", url: "https://www.hurriyetdailynews.com" },
          { name: "Daily Sabah", url: "https://www.dailysabah.com" },
          { name: "Yeni Şafak", url: "https://www.yenisafak.com/en" }
        ]          
    },
    asia_central: {
      kazakhstan: [
        { name: "The Astana Times", url: "https://astanatimes.com" },
        { name: "Kazinform", url: "https://www.inform.kz/en" },
        { name: "Tengrinews", url: "https://en.tengrinews.kz" }
      ],
      kyrgyzstan: [
        { name: "24.kg News Agency", url: "https://24.kg/english" },
        { name: "AKIpress", url: "https://akipress.com" },
        { name: "Kabar News", url: "https://kabar.kg/eng" }
      ],
      tajikistan: [
        { name: "Asia-Plus", url: "https://asiaplustj.info/en" },
        { name: "Avesta News Agency", url: "https://avesta.tj" },
        { name: "Khovar", url: "https://khovar.tj/eng" }
      ],
      turkmenistan: [
        { name: "Chronicles of Turkmenistan", url: "https://en.hronikatm.com" },
        { name: "Turkmenistan.gov.tm", url: "https://turkmenistan.gov.tm/en" },
        { name: "Golden Age", url: "https://turkmenistan.gov.tm/en/golden_age" }
      ],
      uzbekistan: [
        { name: "UzDaily", url: "https://www.uzdaily.uz/en" },
        { name: "Gazeta.uz", url: "https://www.gazeta.uz/en" },
        { name: "Kun.uz", url: "https://kun.uz/en" }
      ]
    },
    asia_south: {
      afghanistan: [
        { name: "TOLOnews", url: "https://tolonews.com" },
        { name: "The Kabul Times", url: "https://thekabultimes.gov.af" },
        { name: "Pajhwok Afghan News", url: "https://pajhwok.com" }
      ],
      bangladesh: [
        { name: "The Daily Star", url: "https://www.thedailystar.net" },
        { name: "Prothom Alo", url: "https://en.prothomalo.com" },
        { name: "Dhaka Tribune", url: "https://www.dhakatribune.com" }
      ],
      bhutan: [
        { name: "Kuensel", url: "https://kuenselonline.com" },
        { name: "Bhutan Broadcasting Service", url: "http://www.bbs.bt" },
        { name: "The Bhutanese", url: "https://thebhutanese.bt" }
      ],
      india: [
        { name: "The Times of India", url: "https://timesofindia.indiatimes.com" },
        { name: "The Hindu", url: "https://www.thehindu.com" },
        { name: "Hindustan Times", url: "https://www.hindustantimes.com" },
        { name: "Indian Express", url: "https://indianexpress.com" },
        { name: "Deccan Herald", url: "https://www.deccanherald.com" },
        { name: "The Economic Times", url: "https://economictimes.indiatimes.com" },
        { name: "DNA India", url: "https://www.dnaindia.com" },
        { name: "India Today", url: "https://www.indiatoday.in" },
        { name: "Business Standard", url: "https://www.business-standard.com" },
        { name: "The Telegraph India", url: "https://www.telegraphindia.com" },
        { name: "Amar Ujala", url: "https://www.amarujala.com" },
        { name: "Dainik Jagran", url: "https://www.jagran.com" },
        { name: "LiveMint", url: "https://www.livemint.com" },
        { name: "Scroll.in", url: "https://scroll.in" },
        { name: "The Print", url: "https://theprint.in" }
      ],        
      iran: [
        { name: "Tehran Times", url: "https://www.tehrantimes.com" },
        { name: "Mehr News Agency", url: "https://en.mehrnews.com" },
        { name: "Tasnim News", url: "https://www.tasnimnews.com/en" }
      ],
      maldives: [
          { name: "The Edition", url: "https://edition.mv" },
          { name: "Sun Online", url: "https://sun.mv/english" },
          { name: "Raajje.mv", url: "https://raajje.mv" }
        ],
        nepal: [
          { name: "The Kathmandu Post", url: "https://kathmandupost.com" },
          { name: "The Himalayan Times", url: "https://thehimalayantimes.com" },
          { name: "Republica", url: "https://myrepublica.nagariknetwork.com" }
        ],
        pakistan: [
          { name: "Dawn", url: "https://www.dawn.com" },
          { name: "The Express Tribune", url: "https://tribune.com.pk" },
          { name: "The News International", url: "https://www.thenews.com.pk" }
        ],
        sri_lanka: [
          { name: "Daily Mirror", url: "https://www.dailymirror.lk" },
          { name: "Daily News", url: "https://www.dailynews.lk" },
          { name: "The Island", url: "https://island.lk" }
        ]          
    },
    asia_east: {
      china: [
        { name: "China Daily", url: "https://www.chinadaily.com.cn" },
        { name: "Global Times", url: "https://www.globaltimes.cn" },
        { name: "South China Morning Post", url: "https://www.scmp.com" }
      ],
      north_korea: [
        { name: "Rodong Sinmun", url: "http://www.rodong.rep.kp/en" },
        { name: "KCNA (Korean Central News Agency)", url: "http://www.kcna.kp" },
        { name: "Naenara", url: "http://naenara.com.kp/en" }
      ],
      south_korea: [
        { name: "The Korea Herald", url: "https://www.koreaherald.com" },
        { name: "The Korea Times", url: "https://www.koreatimes.co.kr" },
        { name: "Yonhap News", url: "https://en.yna.co.kr" }
      ],
      japan: [
        { name: "The Japan Times", url: "https://www.japantimes.co.jp" },
        { name: "The Asahi Shimbun", url: "https://www.asahi.com/ajw" },
        { name: "Mainichi", url: "https://mainichi.jp/english" }
      ],
      mongolia: [
        { name: "Montsame News Agency", url: "https://montsame.mn/en" },
        { name: "The UB Post", url: "https://ubpost.mongolnews.mn" },
        { name: "Gogo Mongolia", url: "https://gogo.mn" }
      ],
      taiwan: [
          { name: "Taipei Times", url: "https://www.taipeitimes.com" },
          { name: "Focus Taiwan (CNA)", url: "https://focustaiwan.tw" },
          { name: "Taiwan News", url: "https://www.taiwannews.com.tw/en" }
        ]          
    },
    asia_southeast: {
      myanmar: [
        { name: "The Irrawaddy", url: "https://www.irrawaddy.com" },
        { name: "Myanmar Times", url: "https://www.mmtimes.com" },
        { name: "Eleven Media Group", url: "https://elevenmyanmar.com" }
      ],
      brunei: [
        { name: "Borneo Bulletin", url: "https://borneobulletin.com.bn" },
        { name: "The Scoop", url: "https://thescoop.co" },
        { name: "Media Permata", url: "https://mediapermata.com.bn" }
      ],
      cambodia: [
        { name: "Khmer Times", url: "https://www.khmertimeskh.com" },
        { name: "The Phnom Penh Post", url: "https://www.phnompenhpost.com" },
        { name: "Cambodia Daily", url: "https://cambodiadaily.com" }
      ],
      philippines: [
        { name: "Philippine Daily Inquirer", url: "https://www.inquirer.net" },
        { name: "The Philippine Star", url: "https://www.philstar.com" },
        { name: "Manila Bulletin", url: "https://mb.com.ph" }
      ],
      indonesia: [
        { name: "The Jakarta Post", url: "https://www.thejakartapost.com" },
        { name: "Kompas", url: "https://www.kompas.com" },
        { name: "Tempo", url: "https://en.tempo.co" }
      ],
      laos: [
          { name: "Laotian Times", url: "https://laotiantimes.com" },
          { name: "Vientiane Times", url: "https://www.vientianetimes.org.la" },
          { name: "KPL (Lao News Agency)", url: "https://kpl.gov.la" }
        ],
        malaysia: [
          { name: "The Star", url: "https://www.thestar.com.my" },
          { name: "New Straits Times", url: "https://www.nst.com.my" },
          { name: "Malay Mail", url: "https://www.malaymail.com" }
        ],
        singapore: [
          { name: "The Straits Times", url: "https://www.straitstimes.com" },
          { name: "TODAY", url: "https://www.todayonline.com" },
          { name: "Mothership", url: "https://mothership.sg" }
        ],
        thailand: [
          { name: "Bangkok Post", url: "https://www.bangkokpost.com" },
          { name: "The Nation Thailand", url: "https://www.nationthailand.com" },
          { name: "Thai PBS World", url: "https://www.thaipbsworld.com" }
        ],
        timor_leste: [
          { name: "Tatoli", url: "https://en.tatoli.tl" },
          { name: "Timor Post", url: "https://timorpost.com" },
          { name: "Jornal Nacional Diário", url: "https://jornal.rede.tl" }
        ],
        vietnam: [
          { name: "VnExpress", url: "https://e.vnexpress.net" },
          { name: "Vietnam News", url: "https://vietnamnews.vn" },
          { name: "Tuổi Trẻ News", url: "https://tuoitrenews.vn" }
        ]          
    },
    europe: {
        albania: [
          { name: "BalkanWeb", url: "https://www.balkanweb.com" },
          { name: "Gazeta Tema", url: "https://www.gazetatema.net" },
          { name: "Koha Jonë", url: "https://kohajone.com" }
        ],
        andorra: [
          { name: "Diari d'Andorra", url: "https://www.diariandorra.ad" },
          { name: "Altaveu", url: "https://www.altaveu.com" },
          { name: "Bondia", url: "https://www.bondia.ad" }
        ],
        austria: [
          { name: "Der Standard", url: "https://www.derstandard.at" },
          { name: "Die Presse", url: "https://www.diepresse.com" },
          { name: "Kronen Zeitung", url: "https://www.krone.at" }
        ],
        belgium: [
          { name: "Le Soir", url: "https://www.lesoir.be" },
          { name: "De Standaard", url: "https://www.standaard.be" },
          { name: "Het Laatste Nieuws", url: "https://www.hln.be" }
        ],
        belarus: [
          { name: "BelTA", url: "https://eng.belta.by" },
          { name: "Nasha Niva", url: "https://nashaniva.com" },
          { name: "Zerkalo", url: "https://zerkalo.io" }
        ],
        bosnia_and_herzegovina: [
          { name: "Avaz", url: "https://avaz.ba" },
          { name: "Dnevni Avaz", url: "https://dnevniavaz.ba" },
          { name: "Oslobođenje", url: "https://oslobodjenje.ba" }
        ],
        bulgaria: [
          { name: "24 Chasa", url: "https://www.24chasa.bg" },
          { name: "Trud", url: "https://trud.bg" },
          { name: "Dnevnik", url: "https://www.dnevnik.bg" }
        ],
        croatia: [
          { name: "Jutarnji list", url: "https://www.jutarnji.hr" },
          { name: "Večernji list", url: "https://www.vecernji.hr" },
          { name: "Slobodna Dalmacija", url: "https://slobodnadalmacija.hr" }
        ],
        cyprus: [
          { name: "Cyprus Mail", url: "https://cyprus-mail.com" },
          { name: "Phileleftheros", url: "https://www.philenews.com" },
          { name: "In-Cyprus", url: "https://in-cyprus.philenews.com" }
        ],
        czech_republic: [
          { name: "Lidové noviny", url: "https://www.lidovky.cz" },
          { name: "Mladá fronta DNES", url: "https://www.idnes.cz" },
          { name: "Právo", url: "https://www.novinky.cz" }
        ],
        denmark: [
          { name: "Politiken", url: "https://politiken.dk" },
          { name: "Jyllands-Posten", url: "https://jyllands-posten.dk" },
          { name: "Berlingske", url: "https://www.berlingske.dk" }
        ],
        slovakia: [
          { name: "SME", url: "https://www.sme.sk" },
          { name: "Pravda", url: "https://www.pravda.sk" },
          { name: "Denník N", url: "https://dennikn.sk" }
        ],
        slovenia: [
          { name: "Delo", url: "https://www.delo.si" },
          { name: "Dnevnik", url: "https://www.dnevnik.si" },
          { name: "Večer", url: "https://www.vecer.com" }
        ],
        spain: [
          { name: "El País", url: "https://elpais.com" },
          { name: "El Mundo", url: "https://elmundo.es" },
          { name: "ABC", url: "https://www.abc.es" }
        ],
        estonia: [
          { name: "Postimees", url: "https://www.postimees.ee" },
          { name: "Eesti Päevaleht", url: "https://epl.delfi.ee" },
          { name: "Õhtuleht", url: "https://www.ohtuleht.ee" }
        ],
        finland: [
          { name: "Helsingin Sanomat", url: "https://www.hs.fi" },
          { name: "Ilta-Sanomat", url: "https://www.is.fi" },
          { name: "Iltalehti", url: "https://www.iltalehti.fi" }
        ],
        france: [
          { name: "Le Monde", url: "https://www.lemonde.fr" },
          { name: "Le Figaro", url: "https://www.lefigaro.fr" },
          { name: "Libération", url: "https://www.liberation.fr" },
          { name: "L’Équipe", url: "https://www.lequipe.fr" },
          { name: "Les Echos", url: "https://www.lesechos.fr" },
          { name: "Le Parisien", url: "https://www.leparisien.fr" },
          { name: "La Dépêche", url: "https://www.ladepeche.fr" },
          { name: "Nice-Matin", url: "https://www.nicematin.com" },
          { name: "Ouest-France", url: "https://www.ouest-france.fr" },
          { name: "La Provence", url: "https://www.laprovence.com" },
          { name: "Le Canard Enchaîné", url: "https://www.lecanardenchaine.fr" },
          { name: "La Croix", url: "https://www.la-croix.com" },
          { name: "L’Humanité", url: "https://www.humanite.fr" },
          { name: "Rue89", url: "https://www.nouvelobs.com/rue89" },
          { name: "Le Télégramme", url: "https://www.letelegramme.fr" }
        ],        
        georgia: [
          { name: "Agenda.ge", url: "https://agenda.ge" },
          { name: "Georgia Today", url: "https://www.georgiatoday.ge" },
          { name: "The Messenger", url: "https://www.messenger.com.ge" }
        ],
        germany: [
          { name: "Der Spiegel", url: "https://www.spiegel.de" },
          { name: "Die Welt", url: "https://www.welt.de" },
          { name: "Frankfurter Allgemeine", url: "https://www.faz.net" },
          { name: "Süddeutsche Zeitung", url: "https://www.sueddeutsche.de" },
          { name: "Bild", url: "https://www.bild.de" },
          { name: "Tagesschau", url: "https://www.tagesschau.de" },
          { name: "Focus Online", url: "https://www.focus.de" },
          { name: "Handelsblatt", url: "https://www.handelsblatt.com" },
          { name: "Berliner Zeitung", url: "https://www.berliner-zeitung.de" },
          { name: "taz – Die Tageszeitung", url: "https://taz.de" },
          { name: "Märkische Allgemeine", url: "https://www.maz-online.de" },
          { name: "Südwest Presse", url: "https://www.swp.de" },
          { name: "Nordwest-Zeitung", url: "https://www.nwzonline.de" },
          { name: "Neue Osnabrücker Zeitung", url: "https://www.noz.de" },
          { name: "Rheinische Post", url: "https://rp-online.de" }
        ],        
        greece: [
          { name: "Kathimerini", url: "https://www.ekathimerini.com" },
          { name: "Ta Nea", url: "https://www.tanea.gr" },
          { name: "Proto Thema", url: "https://www.protothema.gr" }
        ],
        hungary: [
          { name: "Magyar Nemzet", url: "https://magyarnemzet.hu" },
          { name: "Népszava", url: "https://nepszava.hu" },
          { name: "Index.hu", url: "https://index.hu" }
        ],
        ireland: [
          { name: "The Irish Times", url: "https://www.irishtimes.com" },
          { name: "Irish Independent", url: "https://www.independent.ie" },
          { name: "The Journal", url: "https://www.thejournal.ie" }
        ],
        iceland: [
          { name: "Morgunblaðið", url: "https://www.mbl.is" },
          { name: "Vísir", url: "https://www.visir.is" },
          { name: "Fréttablaðið", url: "https://www.frettabladid.is" }
        ],
        italy: [
          { name: "Corriere della Sera", url: "https://www.corriere.it" },
          { name: "La Repubblica", url: "https://www.repubblica.it" },
          { name: "Il Sole 24 Ore", url: "https://www.ilsole24ore.com" },
          { name: "La Stampa", url: "https://www.lastampa.it" },
          { name: "Il Messaggero", url: "https://www.ilmessaggero.it" },
          { name: "Il Giornale", url: "https://www.ilgiornale.it" },
          { name: "Avvenire", url: "https://www.avvenire.it" },
          { name: "Il Fatto Quotidiano", url: "https://www.ilfattoquotidiano.it" },
          { name: "Libero", url: "https://www.liberoquotidiano.it" },
          { name: "Il Manifesto", url: "https://ilmanifesto.it" },
          { name: "Il Tempo", url: "https://www.iltempo.it" },
          { name: "Gazzetta dello Sport", url: "https://www.gazzetta.it" },
          { name: "Tuttosport", url: "https://www.tuttosport.com" },
          { name: "L’Unione Sarda", url: "https://www.unionesarda.it" },
          { name: "Trentino", url: "https://www.giornaletrentino.it" }
        ],
        kazakhstan: [
          { name: "Kazinform", url: "https://www.inform.kz/en" },
          { name: "The Astana Times", url: "https://astanatimes.com" },
          { name: "Tengrinews", url: "https://en.tengrinews.kz" }
        ],
        kosovo: [
          { name: "Koha Ditore", url: "https://www.koha.net" },
          { name: "Gazeta Express", url: "https://www.gazetaexpress.com" },
          { name: "Zëri", url: "https://zeri.info" }
        ],
        latvia: [
          { name: "Latvijas Avīze", url: "https://www.la.lv" },
          { name: "Diena", url: "https://www.diena.lv" },
          { name: "TVNET", url: "https://www.tvnet.lv" }
        ],
        liechtenstein: [
          { name: "Vaterland", url: "https://www.vaterland.li" },
          { name: "Liechtensteiner Volksblatt", url: "https://www.volksblatt.li" },
          { name: "Lie:Zeit", url: "https://www.lie-zeit.li" }
        ],
        lithuania: [
          { name: "Lietuvos rytas", url: "https://www.lrytas.lt" },
          { name: "Delfi", url: "https://www.delfi.lt" },
          { name: "15min", url: "https://www.15min.lt" }
        ],
        luxembourg: [
          { name: "Luxemburger Wort", url: "https://www.wort.lu" },
          { name: "Tageblatt", url: "https://www.tageblatt.lu" },
          { name: "L'essentiel", url: "https://www.lessentiel.lu" }
        ],
        malta: [
          { name: "Times of Malta", url: "https://timesofmalta.com" },
          { name: "Malta Independent", url: "https://www.independent.com.mt" },
          { name: "Malta Today", url: "https://www.maltatoday.com.mt" }
        ],
        moldova: [
          { name: "Timpul", url: "https://timpul.md" },
          { name: "Ziarul de Gardă", url: "https://www.zdg.md" },
          { name: "Publika", url: "https://www.publika.md" }
        ],
        monaco: [
          { name: "Monaco Tribune", url: "https://www.monaco-tribune.com" },
          { name: "Monaco Life", url: "https://monacolife.net" },
          { name: "Riviera Times", url: "https://rivieratimes.com" }
        ],
        montenegro: [
          { name: "Vijesti", url: "https://www.vijesti.me" },
          { name: "Dan", url: "https://www.dan.co.me" },
          { name: "Pobjeda", url: "https://www.pobjeda.me" }
        ],
        netherlands: [
          { name: "De Telegraaf", url: "https://www.telegraaf.nl" },
          { name: "NRC", url: "https://www.nrc.nl" },
          { name: "de Volkskrant", url: "https://www.volkskrant.nl" }
        ],
        north_macedonia: [
          { name: "Nova Makedonija", url: "https://novamakedonija.com.mk" },
          { name: "Sloboden Pechat", url: "https://www.slobodenpecat.mk" },
          { name: "NetPress", url: "https://netpress.com.mk" }
        ],
        norway: [
          { name: "Aftenposten", url: "https://www.aftenposten.no" },
          { name: "VG (Verdens Gang)", url: "https://www.vg.no" },
          { name: "Dagbladet", url: "https://www.dagbladet.no" }
        ],
        poland: [
          { name: "Gazeta Wyborcza", url: "https://wyborcza.pl" },
          { name: "Rzeczpospolita", url: "https://www.rp.pl" },
          { name: "Dziennik Gazeta Prawna", url: "https://www.gazetaprawna.pl" }
        ],
        portugal: [
          { name: "Público", url: "https://www.publico.pt" },
          { name: "Diário de Notícias", url: "https://www.dn.pt" },
          { name: "Correio da Manhã", url: "https://www.cmjornal.pt" }
        ],
        england: [
          { name: "The Guardian", url: "https://www.theguardian.com" },
          { name: "The Times", url: "https://www.thetimes.co.uk" },
          { name: "The Telegraph", url: "https://www.telegraph.co.uk" },
          { name: "The Independent", url: "https://www.independent.co.uk" },
          { name: "Daily Mail", url: "https://www.dailymail.co.uk" },
          { name: "The Sun", url: "https://www.thesun.co.uk" },
          { name: "Metro", url: "https://metro.co.uk" },
          { name: "Evening Standard", url: "https://www.standard.co.uk" },
          { name: "Financial Times", url: "https://www.ft.com" },
          { name: "Daily Express", url: "https://www.express.co.uk" },
          { name: "Daily Mirror", url: "https://www.mirror.co.uk" },
          { name: "iNews", url: "https://inews.co.uk" },
          { name: "Daily Star", url: "https://www.dailystar.co.uk" },
          { name: "The Spectator", url: "https://www.spectator.co.uk" },
          { name: "New Statesman", url: "https://www.newstatesman.com" }
        ],        
        scotland: [
          { name: "The Scotsman", url: "https://www.scotsman.com" },
          { name: "The Herald", url: "https://www.heraldscotland.com" },
          { name: "Daily Record", url: "https://www.dailyrecord.co.uk" },
          { name: "The National", url: "https://www.thenational.scot" },
          { name: "Press and Journal", url: "https://www.pressandjournal.co.uk" }
        ],        
        wales: [
          { name: "Wales Online", url: "https://www.walesonline.co.uk" },
          { name: "Daily Post", url: "https://www.dailypost.co.uk" },
          { name: "South Wales Argus", url: "https://www.southwalesargus.co.uk" },
          { name: "Western Mail", url: "https://www.walesonline.co.uk/news/western-mail" },
          { name: "North Wales Chronicle", url: "https://www.northwaleschronicle.co.uk" }
        ],        
        northern_ireland: [
          { name: "Belfast Telegraph", url: "https://www.belfasttelegraph.co.uk" },
          { name: "The Irish News", url: "https://www.irishnews.com" },
          { name: "News Letter", url: "https://www.newsletter.co.uk" },
          { name: "Causeway Chronicle", url: "https://www.causewaychronicle.co.uk" },
          { name: "Newry Reporter", url: "https://www.newryreporter.com" }
        ],        
        romania: [
          { name: "Adevărul", url: "https://adevarul.ro" },
          { name: "România Liberă", url: "https://romanialibera.ro" },
          { name: "Evenimentul Zilei", url: "https://evz.ro" }
        ],
        russia: [
          { name: "Kommersant", url: "https://www.kommersant.ru" },
          { name: "Rossiyskaya Gazeta", url: "https://rg.ru" },
          { name: "The Moscow Times", url: "https://www.themoscowtimes.com" }
        ],
        san_marino: [
          { name: "San Marino RTV", url: "https://www.sanmarinortv.sm" },
          { name: "La Serenissima", url: "https://www.laserenissima.sm" },
          { name: "Libertas", url: "https://www.libertas.sm" }
        ],
        serbia: [
          { name: "Blic", url: "https://www.blic.rs" },
          { name: "Danas", url: "https://www.danas.rs" },
          { name: "Politika", url: "https://www.politika.rs" }
        ],
        sweden: [
          { name: "Dagens Nyheter", url: "https://www.dn.se" },
          { name: "Aftonbladet", url: "https://www.aftonbladet.se" },
          { name: "Svenska Dagbladet", url: "https://www.svd.se" }
        ],
        switzerland: [
          { name: "Neue Zürcher Zeitung", url: "https://www.nzz.ch" },
          { name: "Le Temps", url: "https://www.letemps.ch" },
          { name: "Blick", url: "https://www.blick.ch" }
        ],
        ukraine: [
          { name: "Kyiv Post", url: "https://www.kyivpost.com" },
          { name: "Ukrayinska Pravda", url: "https://www.pravda.com.ua/eng" },
          { name: "The Kyiv Independent", url: "https://kyivindependent.com" }
        ],
        vatican: [
          { name: "L'Osservatore Romano", url: "https://www.osservatoreromano.va" },
          { name: "Vatican News", url: "https://www.vaticannews.va" },
          { name: "ACI Stampa", url: "https://www.acistampa.com" }
        ]
    },
    africa: {
      nigeria: [
        { name: "The Punch", url: "https://punchng.com" },
        { name: "The Guardian Nigeria", url: "https://guardian.ng" },
        { name: "Vanguard", url: "https://www.vanguardngr.com" },
        { name: "Premium Times", url: "https://www.premiumtimesng.com" },
        { name: "Daily Post", url: "https://dailypost.ng" },
        { name: "The Nation", url: "https://thenationonlineng.net" },
        { name: "Leadership", url: "https://leadership.ng" },
        { name: "This Day", url: "https://www.thisdaylive.com" }
      ],
      egypt: [
        { name: "Al-Ahram", url: "https://english.ahram.org.eg" },
        { name: "Daily News Egypt", url: "https://dailynewsegypt.com" },
        { name: "Egypt Independent", url: "https://www.egyptindependent.com" },
        { name: "The Cairo Post", url: "https://thecairopost.youm7.com" },
        { name: "Youm7", url: "https://www.youm7.com" },
        { name: "Masrawy", url: "https://www.masrawy.com" },
        { name: "Shorouk News", url: "https://www.shorouknews.com" },
        { name: "Al-Masry Al-Youm", url: "https://www.almasryalyoum.com" }
      ],
      south_africa: [
        { name: "News24", url: "https://www.news24.com" },
        { name: "TimesLIVE", url: "https://www.timeslive.co.za" },
        { name: "IOL", url: "https://www.iol.co.za" },
        { name: "Mail & Guardian", url: "https://mg.co.za" },
        { name: "Eyewitness News", url: "https://ewn.co.za" },
        { name: "SowetanLIVE", url: "https://www.sowetanlive.co.za" },
        { name: "The Citizen", url: "https://www.citizen.co.za" },
        { name: "BusinessTech", url: "https://businesstech.co.za" }
      ],
      kenya: [
        { name: "Daily Nation", url: "https://nation.africa" },
        { name: "The Standard", url: "https://www.standardmedia.co.ke" },
        { name: "The Star", url: "https://www.the-star.co.ke" },
        { name: "Capital News", url: "https://www.capitalfm.co.ke/news" },
        { name: "Kenyans.co.ke", url: "https://www.kenyans.co.ke" },
        { name: "Citizen Digital", url: "https://citizen.digital" },
        { name: "Tuko News", url: "https://www.tuko.co.ke" },
        { name: "Business Daily Africa", url: "https://www.businessdailyafrica.com" }
      ],
      uganda: [
        { name: "Daily Monitor", url: "https://www.monitor.co.ug" },
        { name: "New Vision", url: "https://www.newvision.co.ug" },
        { name: "The Observer", url: "https://observer.ug" },
        { name: "ChimpReports", url: "https://chimpreports.com" },
        { name: "Red Pepper", url: "https://redpepper.co.ug" }
      ],
      tanzania: [
        { name: "The Citizen", url: "https://www.thecitizen.co.tz" },
        { name: "Daily News", url: "https://dailynews.co.tz" },
        { name: "The Guardian Tanzania", url: "https://www.ippmedia.com/en/the-guardian" },
        { name: "Habari Leo", url: "https://habarileo.co.tz" },
        { name: "Mwananchi", url: "https://www.mwananchi.co.tz" }
      ],
      ethiopia: [
        { name: "Addis Fortune", url: "https://addisfortune.news" },
        { name: "The Reporter Ethiopia", url: "https://www.thereporterethiopia.com" },
        { name: "Capital Ethiopia", url: "https://www.capitalethiopia.com" },
        { name: "Addis Standard", url: "https://addisstandard.com" },
        { name: "ENA - Ethiopian News Agency", url: "https://www.ena.et" }
      ],
      ghana: [
        { name: "GhanaWeb", url: "https://www.ghanaweb.com" },
        { name: "Graphic Online", url: "https://www.graphic.com.gh" },
        { name: "Citi Newsroom", url: "https://citinewsroom.com" },
        { name: "MyJoyOnline", url: "https://www.myjoyonline.com" },
        { name: "Peace FM Online", url: "https://www.peacefmonline.com" },
        { name: "Ghanaian Times", url: "https://www.ghanaiantimes.com.gh" },
        { name: "The Chronicle", url: "https://thechronicle.com.gh" },
        { name: "Pulse Ghana", url: "https://www.pulse.com.gh" }
      ],
      morocco: [
        { name: "Le Matin", url: "https://lematin.ma" },
        { name: "Aujourd'hui le Maroc", url: "https://aujourdhui.ma" },
        { name: "Hespress", url: "https://www.hespress.com" },
        { name: "TelQuel", url: "https://telquel.ma" },
        { name: "L'Économiste", url: "https://leconomiste.com" },
        { name: "Media24", url: "https://www.media24.com" },
        { name: "Yabiladi", url: "https://www.yabiladi.com" }
      ],
      algeria: [
        { name: "El Watan", url: "https://www.elwatan.com" },
        { name: "Liberté Algérie", url: "https://www.liberte-algerie.com" },
        { name: "Echorouk Online", url: "https://www.echoroukonline.com" },
        { name: "El Moudjahid", url: "https://www.elmoudjahid.com" },
        { name: "Algérie Presse Service", url: "https://www.aps.dz" },
        { name: "Le Quotidien d'Oran", url: "https://www.lequotidien-oran.com" }
      ],
      tunisia: [
        { name: "La Presse de Tunisie", url: "https://lapresse.tn" },
        { name: "Business News", url: "https://www.businessnews.com.tn" },
        { name: "Tunis Afrique Presse", url: "https://www.tap.info.tn" },
        { name: "Webdo", url: "https://www.webdo.tn" },
        { name: "Kapitalis", url: "https://kapitalis.com" },
        { name: "Réalités Online", url: "https://www.realites.com.tn" }
      ],
      angola: [
        { name: "Jornal de Angola", url: "https://www.jornaldeangola.ao" },
        { name: "O País", url: "https://opais.co.ao" },
        { name: "Novo Jornal", url: "https://www.novojornal.co.ao" },
        { name: "Angop", url: "https://www.angop.ao" },
        { name: "Correio da Kianda", url: "https://correiokianda.info" }
      ],
      senegal: [
        { name: "Le Soleil", url: "https://lesoleil.sn" },
        { name: "Seneweb", url: "https://www.seneweb.com" },
        { name: "Dakaractu", url: "https://www.dakaractu.com" },
        { name: "PressAfrik", url: "https://www.pressafrik.com" },
        { name: "Sud Quotidien", url: "https://www.sudonline.sn" },
        { name: "Rewmi", url: "https://www.rewmi.com" }
      ],
      mali: [
        { name: "L'Essor", url: "https://lessor.ml" },
        { name: "Journal du Mali", url: "https://www.journaldumali.com" },
        { name: "Maliweb", url: "https://www.maliweb.net" }
      ],
      rwanda: [
        { name: "The New Times", url: "https://www.newtimes.co.rw" },
        { name: "KT Press", url: "https://www.ktpress.rw" },
        { name: "Igihe", url: "https://en.igihe.com" }
      ],
      burundi: [
        { name: "Iwacu", url: "https://www.iwacu-burundi.org" },
        { name: "Burundi Eco", url: "https://burundieco.com" },
        { name: "Net Press", url: "https://netpress.bi" },
        { name: "Jimbere", url: "https://www.jimberemag.org" }
      ],
      mozambique: [
        { name: "Jornal Notícias", url: "https://www.jornalnoticias.co.mz" },
        { name: "O País Moçambique", url: "https://opais.co.mz" },
        { name: "Carta de Moçambique", url: "https://cartamz.com" }
      ],
      zambia: [
        { name: "Times of Zambia", url: "https://www.times.co.zm" },
        { name: "Zambia Daily Mail", url: "https://www.daily-mail.co.zm" },
        { name: "Lusaka Times", url: "https://www.lusakatimes.com" },
        { name: "Zambian Watchdog", url: "https://www.zambianwatchdog.com" },
        { name: "News Diggers", url: "https://diggers.news" },
        { name: "Daily Nation", url: "https://dailynationzambia.com" }
      ],
      zimbabwe: [
        { name: "The Herald", url: "https://www.herald.co.zw" },
        { name: "NewsDay", url: "https://www.newsday.co.zw" },
        { name: "The Chronicle", url: "https://www.chronicle.co.zw" }
      ],
      malawi: [
        { name: "The Nation", url: "https://www.mwnation.com" },
        { name: "Nyasa Times", url: "https://www.nyasatimes.com" },
        { name: "Malawi24", url: "https://malawi24.com" }
      ],
      botswana: [
        { name: "Mmegi", url: "https://www.mmegi.bw" },
        { name: "The Voice Botswana", url: "https://thevoicebw.com" },
        { name: "Sunday Standard", url: "https://www.sundaystandard.info" }
      ],
      namibia: [
        { name: "The Namibian", url: "https://www.namibian.com.na" },
        { name: "New Era", url: "https://neweralive.na" },
        { name: "Namibia Economist", url: "https://economist.com.na" }
      ],
      eswatini: [
        { name: "Times of Eswatini", url: "https://www.times.co.sz" },
        { name: "Swazi Observer", url: "https://www.observer.org.sz" }
      ],
      lesotho: [
        { name: "Lesotho Times", url: "https://lestimes.com" },
        { name: "Public Eye", url: "https://publiceyenews.com" }
      ],
      mauritius: [
        { name: "L'Express", url: "https://lexpress.mu" },
        { name: "Le Mauricien", url: "https://www.lemauricien.com" },
        { name: "Defi Media", url: "https://defimedia.info" }
      ],
      seychelles: [
        { name: "Seychelles Nation", url: "https://www.nation.sc" },
        { name: "Today in Seychelles", url: "https://www.todayinseychelles.com" }
      ],
      comoros: [
        { name: "Al-Watwan", url: "https://www.alwatwan.net" },
        { name: "La Gazette des Comores", url: "https://lagazettedescomores.com" }
      ],
      reunion: [
        { name: "Clicanoo", url: "https://www.clicanoo.re" },
        { name: "Zinfos974", url: "https://www.zinfos974.com" }
      ],
      benin: [
        { name: "La Nation Bénin", url: "https://lanation.bj" },
        { name: "24 Heures au Bénin", url: "https://24haubenin.info" },
        { name: "Matin Libre", url: "https://matinlibre.com" }
      ],
      burkina_faso: [
        { name: "Sidwaya", url: "https://www.sidwaya.info" },
        { name: "L’Observateur Paalga", url: "https://lobservateur.bf" },
        { name: "Aujourd'hui au Faso", url: "https://aujourdhui.bf" }
      ],
      cabo_verde: [
        { name: "A Nação", url: "https://anacao.cv" },
        { name: "Expresso das Ilhas", url: "https://expressodasilhas.cv" },
        { name: "Santiago Magazine", url: "https://santiagomagazine.cv" }
      ],
      cameroon: [
        { name: "Cameroon Tribune", url: "https://www.cameroon-tribune.cm" },
        { name: "Journal du Cameroun", url: "https://www.journalducameroun.com" },
        { name: "Cameroon Online", url: "https://www.cameroononline.org" },
        { name: "237online", url: "https://www.237online.com" },
        { name: "Actu Cameroun", url: "https://actucameroun.com" }
      ],
      central_african_republic: [
        { name: "Centrafrique Presse", url: "https://www.centrafrique-presse.info" },
        { name: "Radio Ndeke Luka", url: "https://www.radiondekeluka.org" },
        { name: "Corbeau News", url: "https://corbeaunews-centrafrique.com" }
      ],
      chad: [
        { name: "Alwihda Info", url: "https://www.alwihdainfo.com" },
        { name: "Tchad Infos", url: "https://tchadinfos.com" },
        { name: "Le Progrès", url: "https://www.leprogres.td" }
      ],
      congo: [
        { name: "Les Dépêches de Brazzaville", url: "https://www.adiac-congo.com" },
        { name: "Congo Media Time", url: "https://congomediatime.com" },
        { name: "Journal de Brazza", url: "https://journaldebrazza.com" }
      ],
      cote_d_ivoire: [
        { name: "Fraternité Matin", url: "https://www.fratmat.info" },
        { name: "L’Intelligent d’Abidjan", url: "https://www.lintelligentdabidjan.info" },
        { name: "Soir Info", url: "https://www.soirinfo.com" },
        { name: "Le Patriote", url: "https://www.lepatriote.ci" }
      ],
      djibouti: [
        { name: "La Nation", url: "https://www.lanation.dj" },
        { name: "Djibouti News", url: "https://djiboutinouvelles.com" },
        { name: "Horn Diplomat", url: "https://www.horndiplomat.com" }
      ],
      equatorial_guinea: [
        { name: "Ahora EG", url: "https://www.ahoraeg.com" },
        { name: "Guineanet", url: "https://www.guineanet.com" },
        { name: "La Gaceta de Guinea Ecuatorial", url: "https://lagacetadeguinea.com" }
      ],
      eritrea: [
        { name: "Shabait", url: "https://www.shabait.com" },
        { name: "TesfaNews", url: "https://www.tesfanews.net" },
        { name: "Eritrea Profile", url: "https://www.eritreadaily.net" }
      ],
      gabon: [
        { name: "Gabon Review", url: "https://gabonreview.com" },
        { name: "L'Union", url: "https://www.union.sonapresse.com" },
        { name: "Gabon Media Time", url: "https://gabonmediatime.com" }
      ],
      gambia: [
        { name: "The Point", url: "https://thepoint.gm" },
        { name: "Foroyaa Newspaper", url: "https://foroyaa.net" },
        { name: "The Voice Gambia", url: "https://voicegambia.com" }
      ],
      guinea: [
        { name: "Guinée News", url: "https://guineenews.org" },
        { name: "Mediaguinee", url: "https://mediaguinee.com" },
        { name: "Mosaiqueguinee", url: "https://mosaiqueguinee.com" }
      ],
      guinea_bissau: [
        { name: "No Pintcha", url: "https://nopintcha.gw" },
        { name: "O Democrata", url: "https://www.odemocratagb.com" },
        { name: "Bissau Digital", url: "https://bissaudigital.com" }
      ],
      liberia: [
        { name: "Daily Observer Liberia", url: "https://www.liberianobserver.com" },
        { name: "FrontPage Africa", url: "https://frontpageafricaonline.com" },
        { name: "The New Dawn", url: "https://thenewdawnliberia.com" }
      ],
      libya: [
        { name: "Libya Herald", url: "https://www.libyaherald.com" },
        { name: "The Libya Observer", url: "https://www.libyaobserver.ly" },
        { name: "Alwasat", url: "https://alwasat.ly" }
      ],
      madagascar: [
        { name: "L'Express de Madagascar", url: "https://lexpress.mg" },
        { name: "Midi Madagasikara", url: "https://midi-madagasikara.mg" },
        { name: "Madagascar Tribune", url: "https://www.madagascar-tribune.com" }
      ],
      mauritania: [
        { name: "Sahara Media", url: "https://www.saharamedias.net" },
        { name: "Alakhbar", url: "https://alakhbar.info" },
        { name: "CRIDEM", url: "https://cridem.org" }
      ],
      niger: [
        { name: "Le Sahel", url: "https://lesahel.org" },
        { name: "ActuNiger", url: "https://www.actuniger.com" },
        { name: "Niger Express", url: "https://nigerexpress.info" }
      ],
      sao_tome_and_principe: [
        { name: "Téla Nón", url: "https://www.telanon.info" },
        { name: "Jornal Transparência", url: "https://jornaltransparencia.st" }
      ],
      sierra_leone: [
        { name: "Awoko Newspaper", url: "https://awokonewspaper.sl" },
        { name: "Standard Times Press", url: "https://standardtimespress.org" },
        { name: "Concord Times", url: "https://www.concordtimes.com" }
      ],
      somalia: [
        { name: "Garowe Online", url: "https://www.garoweonline.com" },
        { name: "Hiiraan Online", url: "https://www.hiiraan.com" },
        { name: "Horseed Media", url: "https://horseedmedia.net" }
      ],
      south_sudan: [
        { name: "Eye Radio", url: "https://eyeradio.org" },
        { name: "Radio Tamazuj", url: "https://radiotamazuj.org" },
        { name: "Juba Monitor", url: "https://jubamonitor.com" }
      ],
      sudan: [
        { name: "Sudan Tribune", url: "https://sudantribune.com" },
        { name: "Radio Dabanga", url: "https://www.dabangasudan.org" },
        { name: "Alrakoba", url: "https://www.alrakoba.net" }
      ],
      togo: [
        { name: "Republicoftogo", url: "https://republicoftogo.com" },
        { name: "Togo Breaking News", url: "https://togobreakingnews.info" },
        { name: "Togo First", url: "https://www.togofirst.com" }
      ]      
    },
    oceania: {
      australia: [
        { name: "The Sydney Morning Herald", url: "https://www.smh.com.au" },
        { name: "The Australian", url: "https://www.theaustralian.com.au" },
        { name: "The Age", url: "https://www.theage.com.au" },
        { name: "ABC News", url: "https://www.abc.net.au/news" },
        { name: "News.com.au", url: "https://www.news.com.au" },
        { name: "The Guardian Australia", url: "https://www.theguardian.com/au" },
        { name: "Courier Mail", url: "https://www.couriermail.com.au" },
        { name: "The West Australian", url: "https://thewest.com.au" }
      ],
      new_zealand: [
        { name: "NZ Herald", url: "https://www.nzherald.co.nz" },
        { name: "Stuff", url: "https://www.stuff.co.nz" },
        { name: "The Press", url: "https://www.press.co.nz" },
        { name: "Otago Daily Times", url: "https://www.odt.co.nz" },
        { name: "Newshub", url: "https://www.newshub.co.nz" },
        { name: "Radio NZ", url: "https://www.rnz.co.nz" }
      ],
      papua_new_guinea: [
        { name: "Post-Courier", url: "https://postcourier.com.pg" },
        { name: "The National", url: "https://www.thenational.com.pg" },
        { name: "NBC PNG", url: "https://www.nbc.com.pg" }
      ],
      fiji: [
        { name: "Fiji Times", url: "https://www.fijitimes.com" },
        { name: "Fiji Sun", url: "https://www.fijisun.com.fj" },
        { name: "FBC News", url: "https://www.fbcnews.com.fj" }
      ],
      samoa: [
        { name: "Samoa Observer", url: "https://www.samoaobserver.ws" },
        { name: "Talamua Media", url: "https://talamua.com" }
      ],
      tonga: [
        { name: "Matangi Tonga", url: "https://matangitonga.to" },
        { name: "Kaniva Tonga", url: "https://kanivatonga.nz" }
      ],
      solomon_islands: [
        { name: "Solomon Star News", url: "https://www.solomonstarnews.com" },
        { name: "Island Sun", url: "https://theislandsun.com.sb" }
      ],
      vanuatu: [
        { name: "Vanuatu Daily Post", url: "https://www.dailypost.vu" }
      ],
      kiribati: [
        { name: "Kiribati Government Times", url: "https://kiribatigovernmenttimes.com/" }
      ],
      micronesia: [
        { name: "The Kaselehlie Press", url: "https://issuu.com/kpressfsm" }
      ],
      palau: [
        { name: "Island Times", url: "https://islandtimes.org" }
      ],
      marshall_islands: [
        { name: "Marianas Variety", url: "https://www.mvariety.com" }
      ],
      nauru: [
        { name: "The Nauru Herald", url: "https://www.nauruherald.com/" }
      ],
      tuvalu: [
        { name: "PMN Tuvalu", url: "https://pmn.co.nz/read/tuvalu" }
      ],
      new_caledonia: [
        { name: "Le Petit Journal", url: "https://lepetitjournal.com/nouvelle-caledonie" }
      ],
      french_polynesia: [
        { name: "Tahiti Infos", url: "https://www.tahiti-infos.com" }
      ],
      guam: [
        { name: "Pacific Daily News", url: "https://www.guampdn.com" }
      ],
      
      cook_islands: [
        { name: "Cook Islands News", url: "https://www.cookislandsnews.com" }
      ],
      american_samoa: [
        { name: "Samoa News", url: "https://www.samoanews.com" }
      ],
      wallis_and_futuna: [
        { name: "Wallis et Futuna 1ère", url: "https://la1ere.francetvinfo.fr/wallisfutuna/" }
      ]
    } 
    };
// ===============================
// 1. Iconos por continente
// ===============================

const continentIcons = {
  asia_central: "🌏",
  asia_east: "🌏",
  asia_south: "🌏",
  asia_southeast: "🌏",
  asia_west: "🌏",
  europe: "🌍",
  north_america: "🌎",
  south_america: "🌎",
  central_america: "🌎",
  africa: "🌍",
  oceania: "🌏"
};


// ===============================
// 2. Banderas por país
// ===============================
const flags = {
  argentina: "🇦🇷",
  brazil: "🇧🇷",
  chile: "🇨🇱",
  uruguay: "🇺🇾",
  paraguay: "🇵🇾",
  peru: "🇵🇪",
  bolivia: "🇧🇴",
  colombia: "🇨🇴",
  ecuador: "🇪🇨",
  venezuela: "🇻🇪",
  guyana: "🇬🇾",
  suriname: "🇸🇷",
  french_guiana: "🇬🇫",
  guatemala: "🇬🇹",
  el_salvador: "🇸🇻",
  honduras: "🇭🇳",
  nicaragua: "🇳🇮",
  costa_rica: "🇨🇷",
  panama: "🇵🇦",
  cuba: "🇨🇺",
  dominican_republic: "🇩🇴",
  haiti: "🇭🇹",
  jamaica: "🇯🇲",
  puerto_rico: "🇵🇷",
  antigua_and_barbuda: "🇦🇬",
  bahamas: "🇧🇸",
  barbados: "🇧🇧",
  dominica: "🇩🇲",
  grenada: "🇬🇩",
  saint_kitts_and_nevis: "🇰🇳",
  saint_lucia: "🇱🇨",
  saint_vincent_and_the_grenadines: "🇻🇨",
  trinidad_and_tobago: "🇹🇹",
  mexico: "🇲🇽",
  canada: "🇨🇦",
  united_states: "🇺🇸",
  alaska: "🇺🇸",
  greenland: "🇬🇱",
  saudi_arabia: "🇸🇦",
  armenia: "🇦🇲",
  azerbaijan: "🇦🇿",
  bahrain: "🇧🇭",
  qatar: "🇶🇦",
  emirates: "🇦🇪",
  iraq: "🇮🇶",
  israel: "🇮🇱",
  jordan: "🇯🇴",
  lebanon: "🇱🇧",
  oman: "🇴🇲",
  palestine: "🇵🇸",
  syria: "🇸🇾",
  turkey: "🇹🇷",
  afghanistan: "🇦🇫",
  bangladesh: "🇧🇩",
  bhutan: "🇧🇹",
  india: "🇮🇳",
  iran: "🇮🇷",
  maldives: "🇲🇻",
  nepal: "🇳🇵",
  pakistan: "🇵🇰",
  sri_lanka: "🇱🇰",
  china: "🇨🇳",
  north_korea: "🇰🇵",
  south_korea: "🇰🇷",
  japan: "🇯🇵",
  mongolia: "🇲🇳",
  taiwan: "🇹🇼",
  myanmar: "🇲🇲",
  brunei: "🇧🇳",
  cambodia: "🇰🇭",
  philippines: "🇵🇭",
  indonesia: "🇮🇩",
  laos: "🇱🇦",
  malaysia: "🇲🇾",
  singapore: "🇸🇬",
  thailand: "🇹🇭",
  timor_leste: "🇹🇱",
  vietnam: "🇻🇳",
  kazakhstan: "🇰🇿",
  kyrgyzstan: "🇰🇬",
  tajikistan: "🇹🇯",
  turkmenistan: "🇹🇲",
  uzbekistan: "🇺🇿",
  georgia: "🇬🇪",
  albania: "🇦🇱",
  andorra: "🇦🇩",
  austria: "🇦🇹",
  belarus: "🇧🇾",
  belgium: "🇧🇪",
  bosnia_and_herzegovina: "🇧🇦",
  bulgaria: "🇧🇬",
  croatia: "🇭🇷",
  cyprus: "🇨🇾",
  czech_republic: "🇨🇿",
  denmark: "🇩🇰",
  estonia: "🇪🇪",
  finland: "🇫🇮",
  france: "🇫🇷",
  germany: "🇩🇪",
  greece: "🇬🇷",
  hungary: "🇭🇺",
  iceland: "🇮🇸",
  ireland: "🇮🇪",
  italy: "🇮🇹",
  kosovo: "🇽🇰",
  latvia: "🇱🇻",
  liechtenstein: "🇱🇮",
  lithuania: "🇱🇹",
  luxembourg: "🇱🇺",
  malta: "🇲🇹",
  moldova: "🇲🇩",
  monaco: "🇲🇨",
  montenegro: "🇲🇪",
  netherlands: "🇳🇱",
  north_macedonia: "🇲🇰",
  norway: "🇳🇴",
  poland: "🇵🇱",
  portugal: "🇵🇹",
  romania: "🇷🇴",
  russia: "🇷🇺",
  san_marino: "🇸🇲",
  serbia: "🇷🇸",
  slovakia: "🇸🇰",
  slovenia: "🇸🇮",
  spain: "🇪🇸",
  sweden: "🇸🇪",
  switzerland: "🇨🇭",
  ukraine: "🇺🇦",
  united_kingdom: "🇬🇧",
  vatican: "🇻🇦",
  england: "🇬🇧",
  scotland: "🇬🇧",
  wales: "🇬🇧",
  northern_ireland: "🇬🇧",
  algeria: "🇩🇿",
  angola: "🇦🇴",
  benin: "🇧🇯",
  botswana: "🇧🇼",
  burkina_faso: "🇧🇫",
  burundi: "🇧🇮",
  cabo_verde: "🇨🇻",
  cameroon: "🇨🇲",
  central_african_republic: "🇨🇫",
  chad: "🇹🇩",
  comoros: "🇰🇲",
  congo: "🇨🇬",
  cote_d_ivoire: "🇨🇮",
  djibouti: "🇩🇯",
  egypt: "🇪🇬",
  equatorial_guinea: "🇬🇶",
  eritrea: "🇪🇷",
  eswatini: "🇸🇿",
  ethiopia: "🇪🇹",
  gabon: "🇬🇦",
  gambia: "🇬🇲",
  ghana: "🇬🇭",
  guinea: "🇬🇳",
  guinea_bissau: "🇬🇼",
  kenya: "🇰🇪",
  lesotho: "🇱🇸",
  liberia: "🇱🇷",
  libya: "🇱🇾",
  madagascar: "🇲🇬",
  malawi: "🇲🇼",
  mali: "🇲🇱",
  mauritania: "🇲🇷",
  mauritius: "🇲🇺",
  morocco: "🇲🇦",
  mozambique: "🇲🇿",
  namibia: "🇳🇦",
  niger: "🇳🇪",
  nigeria: "🇳🇬",
  rwanda: "🇷🇼",
  sao_tome_and_principe: "🇸🇹",
  senegal: "🇸🇳",
  seychelles: "🇸🇨",
  sierra_leone: "🇸🇱",
  somalia: "🇸🇴",
  south_africa: "🇿🇦",
  south_sudan: "🇸🇸",
  sudan: "🇸🇩",
  tanzania: "🇹🇿",
  togo: "🇹🇬",
  tunisia: "🇹🇳",
  uganda: "🇺🇬",
  zambia: "🇿🇲",
  zimbabwe: "🇿🇼",
  reunion: "🇷🇪",
  australia: "🇦🇺",
  new_zealand: "🇳🇿",
  papua_new_guinea: "🇵🇬",
  fiji: "🇫🇯",
  samoa: "🇼🇸",
  tonga: "🇹🇴",
  solomon_islands: "🇸🇧",
  vanuatu: "🇻🇺",
  kiribati: "🇰🇮",
  micronesia: "🇫🇲",
  palau: "🇵🇼",
  marshall_islands: "🇲🇭",
  nauru: "🇳🇷",
  tuvalu: "🇹🇻",
  new_caledonia: "🇳🇨",
  french_polynesia: "🇵🇫",
  guam: "🇬🇺",
  cook_islands: "🇨🇰",
  american_samoa: "🇦🇸",
  wallis_and_futuna: "🇼🇫"
  };

// ===============================
// 3. Elementos del DOM
// ===============================
const continentSelect = document.getElementById("continente");
const countrySelect = document.getElementById("pais");
const newspaperList = document.getElementById("diarios");

// ===============================
// 4. Poblar select de continentes (orden manual fijo)
// ===============================

const orderedContinents = [
  "africa",
  "central_america",
  "north_america",
  "south_america",
  "europe", 
  "asia_central",
  "asia_east",
  "asia_south",
  "asia_southeast",
  "asia_west",
  "oceania"
];

const continentNames = {
  asia_central: "Asia Central",
  asia_east: "Asia East",
  asia_south: "Asia South",
  asia_southeast: "Asia Southeast",
  asia_west: "Asia West",
  europe: "Europe",
  central_america: "Central America",
  north_america: "North America",
  south_america: "South America",
  africa: "Africa",
  oceania: "Oceania"
};

for (let continent of orderedContinents) {
  const option = document.createElement("option");
  option.value = continent;
  option.textContent = `${continentIcons[continent] || "🌐"} ${continentNames[continent]}`;
  continentSelect.appendChild(option);
}

// ===============================
// 5. Cambio de continente: mostrar países
// ===============================
continentSelect.addEventListener("change", function () {
  const selectedContinent = this.value;

  // Limpiar anteriores
  newspaperList.innerHTML = "";
  countrySelect.innerHTML = '<option value="">-- Select --</option>';
  countrySelect.disabled = !data[selectedContinent];

  if (data[selectedContinent]) {
    if (selectedContinent === "central_america") {
      const mainlandGroup = document.createElement("optgroup");
      mainlandGroup.label = "🌄 Central America Mainland";

      const mainlandCountries = Object.keys(data[selectedContinent].mainland).sort();
        mainlandCountries.forEach((country) => {
        const opt = document.createElement("option");
        opt.value = country;
        opt.textContent = `${flags[country] || ""} ${formatName(country)}`;
        mainlandGroup.appendChild(opt);
      });

      const islandGroup = document.createElement("optgroup");
      islandGroup.label = "🏝️ Central America Islands";

      const islandCountries = Object.keys(data[selectedContinent].islands).sort();
      islandCountries.forEach((country) => {
        const opt = document.createElement("option");
        opt.value = country;
        opt.textContent = `${flags[country] || ""} ${formatName(country)}`;
        islandGroup.appendChild(opt);
});
      countrySelect.appendChild(mainlandGroup);
      countrySelect.appendChild(islandGroup);
    } else {
      const countries = Object.keys(data[selectedContinent]).sort();
    
      countries.forEach((country) => {
        const opt = document.createElement("option");
        opt.value = country;
        opt.textContent = `${flags[country] || ""} ${formatName(country)}`;
        countrySelect.appendChild(opt);
      });
    }      
  }
});

const countryDescriptions = {
  // 🌎 América
  argentina: "📰 Discover Argentina's top news outlets. Read about national updates, social issues, sports and global affairs.",
  brazil: "📰 These are the main online newspapers from Brazil. Stay updated with trusted sources covering politics, economy, sports, and more.",
  mexico: "📰 Follow the latest news from Mexico. Explore national issues, cultural topics and breaking headlines.",
  colombia: "📰 Colombian news at your fingertips. Discover coverage on politics, society, economy and more.",
  chile: "📰 Stay informed with top newspapers from Chile. Updates on government, finance, education and world news.",
  peru: "📰 Leading Peruvian news sources. National reports, sports, culture and Latin American affairs.",
  canada: "📰 Canada’s main digital newspapers. Get insights on politics, economy, environment and international news.",
  united_states: "📰 Leading newspapers from the United States. Follow breaking news, business, politics and innovation.",

  // 🌍 Europa
  england: "📰 Newspapers from the United Kingdom. Stay informed on global and national developments.",
  france: "📰 Read top newspapers from France. Covering politics, economy, culture and international affairs.",
  germany: "📰 Access the most influential newspapers in Germany. Get updates on technology, finance and EU matters.",
  italy: "📰 Discover Italy’s main news outlets. From politics to fashion, sports and global events.",
  spain: "📰 Follow the latest from Spain's top newspapers. Cultural, political and economic news in real time.",
  russia: "📰 Key news sources from Russia. National and global developments, analysis and reports.",
  ukraine: "📰 Ukraine’s major news outlets. Coverage on national defense, society, and international relations.",
  netherlands: "📰 Trusted news from the Netherlands. Explore stories on sustainability, economy and European affairs.",

  // 🌏 Asia
  india: "📰 Explore news from India’s top newspapers. Get coverage on technology, culture, cricket and world news.",
  china: "📰 Stay informed with top Chinese media. Updates on innovation, economy and international diplomacy.",
  japan: "📰 Leading news from Japan. Read about technology, society, economy and global influence.",
  south_korea: "📰 South Korea’s main digital outlets. Follow stories on tech, K-culture and international relations.",
  indonesia: "📰 Discover Indonesia's most popular newspapers. National updates, regional news and more.",
  philippines: "📰 Philippine newspapers offering insights into politics, society and Southeast Asian affairs.",
  pakistan: "📰 News from Pakistan’s leading outlets. Reports on local issues, regional dynamics and world news.",

  // 🌍 África
  nigeria: "📰 Nigeria's top newspapers. Politics, economy, local updates and pan-African news.",
  south_africa: "📰 Follow South African news. Coverage on business, justice, society and sports.",
  egypt: "📰 Major Egyptian news sources. Explore political updates, Arab world developments and cultural stories.",
  kenya: "📰 Read the most relevant Kenyan news. Economy, innovation and East African affairs.",
  morocco: "📰 Morocco’s top digital newspapers. Updates on governance, tourism and regional dynamics.",
  ghana: "📰 Stay informed with Ghanaian news outlets. Insights on national development and West African topics.",

  // 🌏 Oceanía
  australia: "📰 Australia's leading news platforms. Stories on politics, environment, science and global topics.",
  new_zealand: "📰 New Zealand’s main newspapers. National updates, Maori culture, sports and world news.",
  fiji: "📰 Fijian news coverage. Reports on local life, regional cooperation and tourism.",
  papua_new_guinea: "📰 PNG news from verified outlets. Community updates, governance and island affairs.",

  // 🌍 Oriente Medio
  turkey: "📰 Turkish news sources. Follow local politics, economy and international matters.",
  iran: "📰 News from Iran’s top outlets. Insights on Middle Eastern geopolitics, society and the world.",
  israel: "📰 Israel’s major newspapers. Security, innovation, society and global diplomacy.",
  saudi_arabia: "📰 Saudi Arabia’s leading news providers. Regional influence, economy and Middle East affairs.",
  uae: "📰 UAE news from Dubai and Abu Dhabi. Tech, economy and global partnerships."
};


function mostrarDescripcion(paisSeleccionado) {
  const descripcion = countryDescriptions[paisSeleccionado];
  const divDescripcion = document.getElementById("country-description");

  if (descripcion) {
    divDescripcion.textContent = descripcion;
    divDescripcion.classList.add("visible");
  } else {
    divDescripcion.textContent = "";
    divDescripcion.classList.remove("visible");
  }
}


// ===============================
// 6. Función para formatear nombres
// ===============================
function formatName(text) {
  return text.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

// ===============================
// 7. Cambio de país: mostrar diarios
// ===============================
countrySelect.addEventListener("change", function () {
  const selectedContinent = continentSelect.value;
  const selectedCountry = this.value;
  newspaperList.innerHTML = "";

  const newspapers =
    selectedContinent === "central_america"
      ? data[selectedContinent].mainland[selectedCountry] ||
        data[selectedContinent].islands[selectedCountry]
      : data[selectedContinent][selectedCountry];

  if (newspapers) {
    newspapers.forEach(entry => {
      const li = document.createElement("li");
      const link = document.createElement("a");

      link.href = entry.url;
      link.textContent = `📰 ${entry.name}`;
      link.target = "_blank";
      link.classList.add("diario-link");
      link.rel = "noopener"; // Recomendado por Lighthouse

      link.addEventListener("click", () => {
        document
          .querySelectorAll("#diarios a")
          .forEach(el => el.classList.remove("diario-seleccionado"));
        link.classList.add("diario-seleccionado");
      });

      li.appendChild(link);
      newspaperList.appendChild(li);
    });
  }
  mostrarDescripcion(selectedCountry);
});

function hideCookieBanner() {
  document.getElementById("cookie-banner").style.display = "none";
  localStorage.setItem("cookieAccepted", "true");
}

window.addEventListener("load", function () {
  if (!localStorage.getItem("cookieAccepted")) {
    document.getElementById("cookie-banner").style.display = "block";
  }
});

function buscarPorPais() {
  
  const input = document.getElementById("buscador-pais");
  const searchTerm = input.value.trim().toLowerCase();
  const countrySelect = document.getElementById("pais");
  const continentSelect = document.getElementById("continente");

  let found = false;

  for (let i = 0; i < countrySelect.options.length; i++) {
    const optionText = countrySelect.options[i].textContent.toLowerCase();
    if (optionText.includes(searchTerm)) {
      countrySelect.selectedIndex = i;
      found = true;
      break;
    }
  }

  if (!found) {
    alert("Country not found. Please try another name.");
  } else {
    const newspaperList = document.getElementById("diarios");
    mostrarDiarios(continentSelect.value, countrySelect.value, newspaperList);
    
  }
}


function mostrarDiarios(continent, country, newspaperList) {
  newspaperList.innerHTML = "";

  const newspapers =
    continent === "central_america"
      ? data[continent].mainland[country] || data[continent].islands[country]
      : data[continent][country];

  if (newspapers) {
    newspapers.forEach(entry => {
      const li = document.createElement("li");
      const link = document.createElement("a");

      link.href = entry.url;
      link.textContent = `📰 ${entry.name}`;
      link.target = "_blank";
      link.classList.add("diario-link");
      link.rel = "noopener";

      link.addEventListener("click", () => {
        document
          .querySelectorAll("#diarios a")
          .forEach(el => el.classList.remove("diario-seleccionado"));
        link.classList.add("diario-seleccionado");
      });

      li.appendChild(link);
      newspaperList.appendChild(li);
    });
  }
}

function capitalizarNombre(texto) {
  return texto
    .split(" ")
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
    .join(" ");
}

document.addEventListener("DOMContentLoaded", function () {
  const botonLimpiar = document.getElementById("boton-limpiar");
  const input = document.getElementById("buscador-pais");
  const boton = document.getElementById("boton-buscar");
  const countrySelect = document.getElementById("pais");
  const continentSelect = document.getElementById("continente");
  const newspaperList = document.getElementById("diarios");

  input.addEventListener("keydown", function (e) {
    const sugerenciasItems = document.querySelectorAll("#sugerencias div");
  
    if (e.key === "ArrowDown") {
      currentFocus++;
      addActive(sugerenciasItems);
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      currentFocus--;
      addActive(sugerenciasItems);
      e.preventDefault();
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (currentFocus > -1 && sugerenciasItems[currentFocus]) {
        sugerenciasItems[currentFocus].click();
      } else {
        boton.click(); // Si no hay sugerencia activa, busca igual
      }
    }
  });
  

  input.addEventListener("input", function () {
    const searchTerm = this.value.trim().toLowerCase();
    if (input.value.trim().length > 0) {
      botonLimpiar.classList.remove("oculto");
    } else {
      botonLimpiar.classList.add("oculto");
    }    
    const sugerenciasBox = document.getElementById("sugerencias");
    sugerenciasBox.innerHTML = "";
    currentFocus = -1;

    if (searchTerm.length < 2) return;
  
    const exactMatches = [];
const partialMatches = [];

for (const continent in data) {
  for (const country in data[continent]) {
    const countryName = country.replace(/_/g, " ");
    const lowerName = countryName.toLowerCase();

    const match = {
      country,
      countryName: capitalizarNombre(countryName),
      continent,
      flag: flags[country] || "🌐"
    };

    if (lowerName.startsWith(searchTerm)) {
      exactMatches.push(match);
    } else if (lowerName.includes(searchTerm)) {
      partialMatches.push(match);
    }
  }
}

const resultados = [...exactMatches, ...partialMatches];
const soloInput = document.querySelector(".solo-input");

if (resultados.length > 0) {
  soloInput.classList.add("has-suggestions");
} else {
  soloInput.classList.remove("has-suggestions");
}

    resultados.forEach(result => {
      const div = document.createElement("div");
      div.className = "sugerencia-item";
      div.textContent = `${result.flag} ${result.countryName}`;
      div.addEventListener("click", () => {
        const soloInput = document.querySelector(".solo-input");
        continentSelect.value = result.continent;
        countrySelect.innerHTML = '<option value="">-- Select --</option>';
        const option = document.createElement("option");
        option.value = result.country;
        option.textContent = `${result.flag} ${result.countryName}`;
        countrySelect.appendChild(option);
        countrySelect.disabled = false;
        countrySelect.value = result.country;
        sugerenciasBox.innerHTML = "";
        soloInput.classList.remove("has-suggestions");  
        input.value = result.countryName;
        buscarPorPais(newspaperList);
        mostrarDescripcion(result.country);
      });
      sugerenciasBox.appendChild(div);
    });
    
  });
  
  // ✅ Solo una vez
  document.addEventListener("click", function (event) {
    const sugerenciasBox = document.getElementById("sugerencias");
    const buscadorWrapper = document.getElementById("buscador-wrapper");
    const soloInput = document.querySelector(".solo-input"); // 👈 NUEVO
  
    // Si el clic fue fuera del buscador y del botón, ocultar sugerencias y restaurar borde
    if (!buscadorWrapper.contains(event.target)) {
      sugerenciasBox.innerHTML = "";
      soloInput.classList.remove("has-suggestions"); // 👈 NUEVO
    }
  });
  

  botonLimpiar.addEventListener("click", function () {
    input.value = "";
    countrySelect.innerHTML = '<option value="">-- Select --</option>';
    continentSelect.value = "";
    countrySelect.disabled = true;
    newspaperList.innerHTML = "";
    document.getElementById("sugerencias").innerHTML = "";
    botonLimpiar.classList.add("oculto"); // ✅ Ocultar botón después de limpiar
    const soloInput = document.querySelector(".solo-input");
    soloInput.classList.remove("has-suggestions");
    input.focus(); // 👈 Le devuelve el foco al input automáticamente
    document.getElementById("country-description").textContent = `🗞️ ${descripcion}`;
  });
  let currentFocus = -1;

function addActive(items) {
  if (!items || items.length === 0) return;
  removeActive(items);
  if (currentFocus >= items.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = items.length - 1;
  items[currentFocus].classList.add("active");
  items[currentFocus].scrollIntoView({ block: "nearest" }); // Que se vea si está fuera del scroll
}

function removeActive(items) {
  items.forEach((item) => item.classList.remove("active"));
}

});
