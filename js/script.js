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
  central_america: "🌎"
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
  qatar: "🇶🇦" ,
  emirates: "🇦🇪",
  georgia: "🇬🇪",
  iraq: "🇮🇶",
  israel: "🇮🇱",
  jordan: "🇯🇴",
  lebanon: "🇱🇧",
  oman: "🇴🇲",
  palestine: "🇵🇸",
  syria: "🇸🇾",
  turkey: "🇹🇷",
  kazakhstan: "🇰🇿",
  kyrgyzstan: "🇰🇬",
  tajikistan: "🇹🇯",
  turkmenistan: "🇹🇲",
  uzbekistan: "🇺🇿",
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
  georgia: "🇬🇪",
  germany: "🇩🇪",
  greece: "🇬🇷",
  hungary: "🇭🇺",
  iceland: "🇮🇸",
  ireland: "🇮🇪",
  italy: "🇮🇹",
  kazakhstan: "🇰🇿",
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
  northern_ireland: "🇬🇧"
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
  "asia_central",
  "asia_east",
  "asia_south",
  "asia_southeast",
  "asia_west",
  "europe",
  "central_america",
  "north_america",
  "south_america"
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
  south_america: "South America"
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
});

// ===============================
// 8. Toggle Modo Claro/Oscuro
// ===============================


document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("modoToggle");
  const darkSheet = document.getElementById("dark-stylesheet");

  // Cargar estado guardado
  const isDark = localStorage.getItem("mode") === "dark";
  document.body.classList.toggle("dark-mode", isDark);
  darkSheet.disabled = !isDark;
  toggleButton.textContent = isDark ? "☀️" : "🌙";

  // Toggle
  toggleButton.addEventListener("click", () => {
    const nowDark = !document.body.classList.contains("dark-mode");
    document.body.classList.toggle("dark-mode", nowDark);
    darkSheet.disabled = !nowDark;
    localStorage.setItem("mode", nowDark ? "dark" : "light");
    toggleButton.textContent = nowDark ? "☀️" : "🌙";
  });
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
