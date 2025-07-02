// ===============================
// 0. Datos de diarios
// ===============================
const data = {
    south_america: {
      argentina: [
        { name: "Clarín", url: "https://www.clarin.com" },
        { name: "La Nación", url: "https://www.lanacion.com.ar" },
        { name: "Infobae", url: "https://www.infobae.com" }
      ],
      brazil: [
        { name: "O Globo", url: "https://oglobo.globo.com" },
        { name: "Folha de S.Paulo", url: "https://www.folha.uol.com.br" },
        { name: "Estadão", url: "https://www.estadao.com.br" }
      ],
      chile: [
        { name: "El Mercurio", url: "https://www.elmercurio.com" },
        { name: "La Tercera", url: "https://www.latercera.com" }
      ],
      uruguay: [
        { name: "El País", url: "https://www.elpais.com.uy" },
        { name: "El Observador", url: "https://www.elobservador.com.uy" },
        { name: "La Diaria", url: "https://ladiaria.com.uy" }
      ],
      paraguay: [
        { name: "ABC Color", url: "https://www.abc.com.py" },
        { name: "Última Hora", url: "https://www.ultimahora.com" },
        { name: "La Nación", url: "https://www.lanacion.com.py" }
      ],
      peru: [
        { name: "El Comercio", url: "https://elcomercio.pe" },
        { name: "La República", url: "https://larepublica.pe" },
        { name: "Perú21", url: "https://peru21.pe" }
      ],
      bolivia: [
        { name: "El Deber", url: "https://eldeber.com.bo" },
        { name: "Página Siete", url: "https://paginasiete.bo" },
        { name: "Opinión", url: "https://www.opinion.com.bo" }
      ],
      colombia: [
        { name: "El Tiempo", url: "https://www.eltiempo.com" },
        { name: "El Espectador", url: "https://www.elespectador.com" },
        { name: "Semana", url: "https://www.semana.com" }
      ],
      ecuador: [
        { name: "El Comercio", url: "https://www.elcomercio.com" },
        { name: "El Universo", url: "https://www.eluniverso.com" },
        { name: "Expreso", url: "https://www.expreso.ec" }
      ],
      venezuela: [
        { name: "El Nacional", url: "https://www.elnacional.com" },
        { name: "Últimas Noticias", url: "https://ultimasnoticias.com.ve" },
        { name: "Tal Cual", url: "https://talcualdigital.com" }
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
          { name: "El Periódico", url: "https://elperiodico.com.gt" }
        ],
        el_salvador: [
          { name: "La Prensa Gráfica", url: "https://www.laprensagrafica.com" },
          { name: "El Diario de Hoy", url: "https://www.elsalvador.com" }
        ],
        honduras: [
          { name: "La Prensa", url: "https://www.laprensa.hn" },
          { name: "El Heraldo", url: "https://www.elheraldo.hn" }
        ],
        nicaragua: [
          { name: "La Prensa", url: "https://www.laprensa.com.ni" },
          { name: "El Nuevo Diario", url: "https://www.elnuevodiario.com.ni" }
        ],
        costa_rica: [
          { name: "La Nación", url: "https://www.nacion.com" },
          { name: "Diario Extra", url: "https://www.diarioextra.com" }
        ],
        panama: [
          { name: "La Prensa", url: "https://www.prensa.com" },
          { name: "Mi Diario", url: "https://www.midiario.com" }
        ]
      },
      islands: {
        cuba: [
          { name: "Granma", url: "https://www.granma.cu" },
          { name: "Juventud Rebelde", url: "https://www.juventudrebelde.cu" }
        ],
        dominican_republic: [
          { name: "Listín Diario", url: "https://listindiario.com" },
          { name: "Diario Libre", url: "https://www.diariolibre.com" }
        ],
        haiti: [
          { name: "Le Nouvelliste", url: "https://lenouvelliste.com" },
          { name: "Haiti Libre", url: "https://www.haitilibre.com" }
        ],
        puerto_rico: [
          { name: "El Nuevo Día", url: "https://www.elnuevodia.com" },
          { name: "Primera Hora", url: "https://www.primerahora.com" }
        ],
        jamaica: [
          { name: "The Gleaner", url: "https://jamaica-gleaner.com" },
          { name: "Jamaica Observer", url: "https://www.jamaicaobserver.com" }
        ]
      }
    },
    north_america: {
      canada: [
        { name: "The Globe and Mail", url: "https://www.theglobeandmail.com" },
        { name: "National Post", url: "https://nationalpost.com" },
        { name: "Toronto Star", url: "https://www.thestar.com" }
      ],
      united_states: [
        { name: "The New York Times", url: "https://www.nytimes.com" },
        { name: "The Washington Post", url: "https://www.washingtonpost.com" },
        { name: "USA Today", url: "https://www.usatoday.com" }
      ],
      alaska: [
        { name: "Anchorage Daily News", url: "https://www.adn.com" },
        { name: "Juneau Empire", url: "https://www.juneauempire.com" }
      ],
      mexico: [
        { name: "El Universal", url: "https://www.eluniversal.com.mx" },
        { name: "Reforma", url: "https://www.reforma.com" },
        { name: "Milenio", url: "https://www.milenio.com" }
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
          { name: "Indian Express", url: "https://indianexpress.com" }
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
      } 
    };

  
  // ===============================
// 1. Iconos por continente
// ===============================

const continentIcons = {
    asia_west: "🌍",
    asia_central: "🌏",
    asia_south: "🌏",
    asia_east: "🌏",
    asia_southeast: "🌏",
    central_america: "🌎",
    north_america: "🌎",
    south_america: "🌎"
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
    vietnam: "🇻🇳"
  };
  
  
  // ===============================
  // 3. Elementos del DOM
  // ===============================
  const continentSelect = document.getElementById("continente");
  const countrySelect = document.getElementById("pais");
  const newspaperList = document.getElementById("diarios");
  
  // ===============================
  // 4. Poblar select de continentes
  // ===============================
  // ===============================
// 4. Poblar select de continentes (orden alfabético)
// ===============================
const continentNames = {
    south_america: "South America",
    central_america: "Central America",
    north_america: "North America",
    asia_west: "Asia West",
    asia_central: "Asia Central",
    asia_south: "Asia South",
    asia_east: "Asia East",
    asia_southeast: "Asia Southeast"
  };
  
  const sortedContinents = Object.keys(data).sort((a, b) => {
    const nameA = continentNames[a];
    const nameB = continentNames[b];
    return nameA.localeCompare(nameB);
  });
  
  for (let continent of sortedContinents) {
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
  
        for (let country in data[selectedContinent].mainland) {
          const opt = document.createElement("option");
          opt.value = country;
          opt.textContent = `${flags[country] || ""} ${formatName(country)}`;
          mainlandGroup.appendChild(opt);
        }
  
        const islandGroup = document.createElement("optgroup");
        islandGroup.label = "🏝️ Central America Islands";
  
        for (let country in data[selectedContinent].islands) {
          const opt = document.createElement("option");
          opt.value = country;
          opt.textContent = `${flags[country] || ""} ${formatName(country)}`;
          islandGroup.appendChild(opt);
        }
  
        countrySelect.appendChild(mainlandGroup);
        countrySelect.appendChild(islandGroup);
      } else {
        for (let country in data[selectedContinent]) {
          const opt = document.createElement("option");
          opt.value = country;
          opt.textContent = `${flags[country] || ""} ${formatName(country)}`;
          countrySelect.appendChild(opt);
        }
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
    const savedMode = localStorage.getItem("mode");
  
    // Aplicar modo guardado
    if (savedMode === "dark") {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      toggleButton.textContent = "☀️";
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
      toggleButton.textContent = "🌙";
    }
  
    // Alternar tema al hacer clic
    toggleButton.addEventListener("click", () => {
      const isDark = document.body.classList.contains("dark-mode");
  
      if (isDark) {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        localStorage.setItem("mode", "light");
        toggleButton.textContent = "🌙";
      } else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        localStorage.setItem("mode", "dark");
        toggleButton.textContent = "☀️";
      }
    });
  });