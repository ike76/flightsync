const airportsMap = [
  {
    "label": "Anaa Airport Anaa, Tuamotu-Gambier",
    "value": "AAA"
  },
  {
    "label": "El Mellah Airport El Tarf, Annaba",
    "value": "AAE"
  },
  {
    "label": "Aalborg Airport Norresundby, Nordjylland",
    "value": "AAL"
  },
  {
    "label": "Mala Mala Mala Mala, ",
    "value": "AAM"
  },
  {
    "label": "Al Ain Airport Ayn al Faydah, Abu Dhabi",
    "value": "AAN"
  },
  {
    "label": "Olkhovka Airport Novorossiysk, Krasnodarskiy Kray",
    "value": "AAQ"
  },
  {
    "label": "Tirstrup Airport Kolind, Midtjylland",
    "value": "AAR"
  },
  {
    "label": "Altay Airport Altay, Xinjiang",
    "value": "AAT"
  },
  {
    "label": "Romeu Zuma Airport Araxá, Minas Gerais",
    "value": "AAX"
  },
  {
    "label": "Al Gaidah Airport Al Ghaydah, Hadramawt",
    "value": "AAY"
  },
  {
    "label": "Abakan Abakan, Khakasiya",
    "value": "ABA"
  },
  {
    "label": "Los Llanos Albacete, Castilla-la Mancha",
    "value": "ABC"
  },
  {
    "label": " Abadan, Khuzestan",
    "value": "ABD"
  },
  {
    "label": "Lehigh Valley International Airport Allentown, Pennsylvania",
    "value": "ABE"
  },
  {
    "label": "Abilene Regional Airport Abilene, Texas",
    "value": "ABI"
  },
  {
    "label": "Abidjan Port Bouet Airport Abidjan, Abidjan",
    "value": "ABJ"
  },
  {
    "label": "Kabri Dar Kabri Dar, Ogaden",
    "value": "ABK"
  },
  {
    "label": "Ambler Airport Kiana, Alaska",
    "value": "ABL"
  },
  {
    "label": "Bamaga Airport Seisia, Queensland",
    "value": "ABM"
  },
  {
    "label": "Albuquerque International Airport Albuquerque, New Mexico",
    "value": "ABQ"
  },
  {
    "label": "Aberdeen Regional Airport Aberdeen, South Dakota",
    "value": "ABR"
  },
  {
    "label": "Abu Simbel Airport Abu Simbel, Aswan",
    "value": "ABS"
  },
  {
    "label": "Al Baha Airport Al Aqiq, Al Baha",
    "value": "ABT"
  },
  {
    "label": "Abuja International Airport Gwagwa, Abuja Capital Territory",
    "value": "ABV"
  },
  {
    "label": "Albury Airport Albury, New South Wales",
    "value": "ABX"
  },
  {
    "label": "Southwest Georgia Regional Airport Albany, Georgia",
    "value": "ABY"
  },
  {
    "label": "Aberdeen Dyce International Airport Aberdeen, Scotland",
    "value": "ABZ"
  },
  {
    "label": "General Juan N Alvarez International Airport Acapulco, Guerrero",
    "value": "ACA"
  },
  {
    "label": "Kotoka International Airport Accra, Greater Accra",
    "value": "ACC"
  },
  {
    "label": "Arrecife Airport San Bartolomé, Canary Islands",
    "value": "ACE"
  },
  {
    "label": "Altenrhein Airport Altenrhein, Canton of St. Gallen",
    "value": "ACH"
  },
  {
    "label": "The Blaye Airport St. Peter Port, Channel Islands",
    "value": "ACI"
  },
  {
    "label": "Nantucket Memorial Airport Nantucket, Massachusetts",
    "value": "ACK"
  },
  {
    "label": "Sahand Airport Sahand, ",
    "value": "ACP"
  },
  {
    "label": " Achinsk, Krasnoyarskiy Kray",
    "value": "ACS"
  },
  {
    "label": "Waco Regional Airport Waco, Texas",
    "value": "ACT"
  },
  {
    "label": "Arcata Airport Mckinleyville, California",
    "value": "ACV"
  },
  {
    "label": "Xingyi Xingyi, Guizhou",
    "value": "ACX"
  },
  {
    "label": "Atlantic City International Airport Egg Harbor City, New Jersey",
    "value": "ACY"
  },
  {
    "label": "Zabol A/P Zabol, Sistan va Baluchestan",
    "value": "ACZ"
  },
  {
    "label": "Sakirpasa Airport Adana, Adana",
    "value": "ADA"
  },
  {
    "label": "Gaziemir Airport Azmir, İzmir",
    "value": "ADB"
  },
  {
    "label": "Bole International Airport Addis Ababa, Debub Shewa",
    "value": "ADD"
  },
  {
    "label": "Aden International Airport Ash Shaykh Uthman, `Adan",
    "value": "ADE"
  },
  {
    "label": "Adiyaman Airport Adiyaman, Adıyaman",
    "value": "ADF"
  },
  {
    "label": "Al Matar Airport Amman, 'Amman",
    "value": "ADJ"
  },
  {
    "label": "Adak Airport Adak, Alaska",
    "value": "ADK"
  },
  {
    "label": "Adelaide International Airport Adelaide, South Australia",
    "value": "ADL"
  },
  {
    "label": "Kodiak Airport Kodiak, Alaska",
    "value": "ADQ"
  },
  {
    "label": "Ardabil Airport Ardabil, Ardabil",
    "value": "ADU"
  },
  {
    "label": "Leuchars Airport St. Andrews, Scotland",
    "value": "ADX"
  },
  {
    "label": "Sesquicentenario Airport San Andrés, San Andres y Providencia",
    "value": "ADZ"
  },
  {
    "label": "Abeche Airport Abéché, Ouaddai",
    "value": "AEH"
  },
  {
    "label": "Aeroparque Jorge Newbery Buenos Aires, Ciudad de Buenos Aires",
    "value": "AEP"
  },
  {
    "label": "Adler Airport Sochi, Krasnodarskiy Kray",
    "value": "AER"
  },
  {
    "label": "Vigra Airport Vigra, More og Romsdal",
    "value": "AES"
  },
  {
    "label": "Allakaket Airport Allakaket, Alaska",
    "value": "AET"
  },
  {
    "label": "Alexandria International Airport Alexandria, Louisiana",
    "value": "AEX"
  },
  {
    "label": "Akureyri Airport Akureyri, Akureyri",
    "value": "AEY"
  },
  {
    "label": "San Rafael Airport San Rafael, Mendoza",
    "value": "AFA"
  },
  {
    "label": "Alta Floresta Airport Alta Floresta, Mato Grosso",
    "value": "AFL"
  },
  {
    "label": "Zarafshan Airport Zarafshan, Nawoiy",
    "value": "AFS"
  },
  {
    "label": "Afutara Aerodrome Afutara, Malaita",
    "value": "AFT"
  },
  {
    "label": "Sabzevar Airport Sabzevar, Khorasan",
    "value": "AFZ"
  },
  {
    "label": "Almassira Airport Agadir, Agadir",
    "value": "AGA"
  },
  {
    "label": "La Garenne Airport Laplume, Aquitaine",
    "value": "AGF"
  },
  {
    "label": "Angelholm Airport Angelholm, Skane",
    "value": "AGH"
  },
  {
    "label": "Wanigela Wanigela, Northern",
    "value": "AGL"
  },
  {
    "label": "Angmagssalik Airport Angmassalik, Ostgronland",
    "value": "AGM"
  },
  {
    "label": "Angoon Airport Angoon, Alaska",
    "value": "AGN"
  },
  {
    "label": "Malaga Airport Malaga, Andalucia",
    "value": "AGP"
  },
  {
    "label": "Agra Airport Agra, Uttar Pradesh",
    "value": "AGR"
  },
  {
    "label": "Bush Field Airport Augusta, Georgia",
    "value": "AGS"
  },
  {
    "label": "Alejo Garcia Airport Presidente Franco, Alto Paraná",
    "value": "AGT"
  },
  {
    "label": "Aguascalientes Airport Aguascalientes, Aguascalientes",
    "value": "AGU"
  },
  {
    "label": "Acarigua Acarigua, Portuguesa",
    "value": "AGV"
  },
  {
    "label": "Agatti Island Airport Agatti Island, Lakshadweep",
    "value": "AGX"
  },
  {
    "label": "Abha Airport Hajlah, Asir",
    "value": "AHB"
  },
  {
    "label": "Amedee Army Air Field Herlong, California",
    "value": "AHC"
  },
  {
    "label": "Ahe Airport Ahe, Tuamotu-Gambier",
    "value": "AHE"
  },
  {
    "label": "Alghero Airport Alghero, Sardinia",
    "value": "AHO"
  },
  {
    "label": "Ahuas Airport Auas, Gracias a Dios",
    "value": "AHS"
  },
  {
    "label": "Cote du Rif Airport Al Hoceima, Al Hoceima",
    "value": "AHU"
  },
  {
    "label": "Alliance Municipal Airport Alliance, Nebraska",
    "value": "AIA"
  },
  {
    "label": "Wainwright Airport Wainwright, Alaska",
    "value": "AIN"
  },
  {
    "label": "Aitutaki Airport Aitutaki, Aitutaki",
    "value": "AIT"
  },
  {
    "label": "Atiu Island Atiu Island, Atiu",
    "value": "AIU"
  },
  {
    "label": "Campo Dell Oro Airport Ajaccio, Corsica",
    "value": "AJA"
  },
  {
    "label": "Al Jouf Airport Sakakah, Al Jawf",
    "value": "AJF"
  },
  {
    "label": "Agri Airport Agrı, Ağrı",
    "value": "AJI"
  },
  {
    "label": "Aizwal Airport Aizawl, Mizoram",
    "value": "AJL"
  },
  {
    "label": "Comoros Anjouan, Anjouan",
    "value": "AJN"
  },
  {
    "label": "Arvidsjaur Airport Arvidsjaur, Norrbotten",
    "value": "AJR"
  },
  {
    "label": "Santa Maria Airport Aracaju, Sergipe",
    "value": "AJU"
  },
  {
    "label": "Ankang Airport Ankang, Shaanxi",
    "value": "AKA"
  },
  {
    "label": "Atka Airport Atka, Alaska",
    "value": "AKB"
  },
  {
    "label": "Kufra Airport Kufrah, Al Kufrah",
    "value": "AKF"
  },
  {
    "label": "Akiak Airport Bethel, Alaska",
    "value": "AKI"
  },
  {
    "label": "Asahikawa Airport Asahikawa-shi, Hokkaido Prefecture",
    "value": "AKJ"
  },
  {
    "label": "Akhiok Airport Kodiak, Alaska",
    "value": "AKK"
  },
  {
    "label": "Auckland International Airport Manukau City, Auckland",
    "value": "AKL"
  },
  {
    "label": "King Salmon Airport King Salmon, Alaska",
    "value": "AKN"
  },
  {
    "label": "Anaktuvuk Pass Airport Anaktuvuk Pass, Alaska",
    "value": "AKP"
  },
  {
    "label": "Kroonstad Airport Kroonstad, Free State",
    "value": "AKS"
  },
  {
    "label": "Aksu Airport Aksu, Xinjiang",
    "value": "AKU"
  },
  {
    "label": "Akulivik Airport Chisasibi, Quebec",
    "value": "AKV"
  },
  {
    "label": "Aktyubinsk Airport Aqtobe, Aqtobe",
    "value": "AKX"
  },
  {
    "label": "Sittwe Airport Sittwe, Rakhine State",
    "value": "AKY"
  },
  {
    "label": "Alma Ata Airport Almaty, Almaty",
    "value": "ALA"
  },
  {
    "label": "Albany International Airport Latham, New York",
    "value": "ALB"
  },
  {
    "label": "Alicante Airport Elx, Valencia",
    "value": "ALC"
  },
  {
    "label": "Alta Airport Alta, Finnmark Fylke",
    "value": "ALF"
  },
  {
    "label": "Houari Boumediene Airport Algiers, Alger",
    "value": "ALG"
  },
  {
    "label": "Albany Airport Albany, Western Australia",
    "value": "ALH"
  },
  {
    "label": "Alamogordo White Sands Regional Airport Alamogordo, New Mexico",
    "value": "ALM"
  },
  {
    "label": "Waterloo Municipal Airport Waterloo, Iowa",
    "value": "ALO"
  },
  {
    "label": "Aleppo International Airport Djibrine, H'alab",
    "value": "ALP"
  },
  {
    "label": "San Luis Valley Regional Airport Alamosa, Colorado",
    "value": "ALS"
  },
  {
    "label": "Walla Walla Regional Airport Walla Walla, Washington",
    "value": "ALW"
  },
  {
    "label": "An-Nuzhah Airport Alexandria, Al Iskandariyah",
    "value": "ALY"
  },
  {
    "label": "Alitak Seaplane Base Alitak, Alaska",
    "value": "ALZ"
  },
  {
    "label": "Amarillo International Airport Amarillo, Texas",
    "value": "AMA"
  },
  {
    "label": "Sardar Vallabhbhai Patel International Airport Ahmedabad, Gujarat",
    "value": "AMD"
  },
  {
    "label": "Ethiopia Arba Mintch, Gamo Gofa",
    "value": "AMH"
  },
  {
    "label": "Selaparang Mataram, Nusa Tenggara Barat",
    "value": "AMI"
  },
  {
    "label": "Queen Alia International Airport Amman, 'Amman",
    "value": "AMM"
  },
  {
    "label": "Pattimura Airport Ambon, Maluku",
    "value": "AMQ"
  },
  {
    "label": "Schiphol Airport Schiphol Zuid, North Holland",
    "value": "AMS"
  },
  {
    "label": "Amderma Airport Nar'yan-Mar, Nenetskiy Avtonomnyy Okrug",
    "value": "AMV"
  },
  {
    "label": "Ambatomainty Ambatomainty, Fianarantsoa",
    "value": "AMY"
  },
  {
    "label": "Anchorage International Airport Anchorage, Alaska",
    "value": "ANC"
  },
  {
    "label": "Aéroport d'Angers-Marcé Seiches-sur-le-Loir, Pays de la Loire",
    "value": "ANE"
  },
  {
    "label": "Cerro Moreno International Airport Antofagasta, Antofagasta",
    "value": "ANF"
  },
  {
    "label": "Brie Champniers Airport Champniers, Poitou-Charentes",
    "value": "ANG"
  },
  {
    "label": "Aniak Airport Bethel, Alaska",
    "value": "ANI"
  },
  {
    "label": "Madagascar Antalaha, null",
    "value": "ANM"
  },
  {
    "label": "Deurne Airport Antwerp, Antwerp",
    "value": "ANR"
  },
  {
    "label": "V C Bird International Airport Carlisle, Saint George",
    "value": "ANU"
  },
  {
    "label": "Anvik Airport Anvik, Alaska",
    "value": "ANV"
  },
  {
    "label": "Andoya Airport Andenes, Nordland Fylke",
    "value": "ANX"
  },
  {
    "label": "Altenburg Nobitz Altenburg, Thuringia",
    "value": "AOC"
  },
  {
    "label": "Anadolu University Airport Eskişehir, Eskişehir",
    "value": "AOE"
  },
  {
    "label": "Falconara Airport Falconara Marittima, Marche",
    "value": "AOI"
  },
  {
    "label": "Aomori Airport Aomori-shi, Aomori Prefecture",
    "value": "AOJ"
  },
  {
    "label": "Karpathos Airport Karpathos, Notio Aigaio",
    "value": "AOK"
  },
  {
    "label": "Altoona-Blair County Airport Martinsburg, Pennsylvania",
    "value": "AOO"
  },
  {
    "label": "Sultan Abdul Halim Airport Kepala Batas, Kedah",
    "value": "AOR"
  },
  {
    "label": "Amook Bay Seaplane Base Amook, Alaska",
    "value": "AOS"
  },
  {
    "label": "Centennial Airport Englewood, Colorado",
    "value": "APA"
  },
  {
    "label": "Naples Municipal Airport Naples, Florida",
    "value": "APF"
  },
  {
    "label": "French Polynesia Apataki, ",
    "value": "APK"
  },
  {
    "label": "Nampula Airport Nampula, Nampula",
    "value": "APL"
  },
  {
    "label": "Alpena County Regional Airport Alpena, Michigan",
    "value": "APN"
  },
  {
    "label": "Apartado Airport Apartadó, Antioquia",
    "value": "APO"
  },
  {
    "label": "Faleolo Airport Apia, A`ana",
    "value": "APW"
  },
  {
    "label": "Anqing Airport Anqing, Anhui",
    "value": "AQG"
  },
  {
    "label": "Hafr Al Batin Airport Qaisumah, ",
    "value": "AQI"
  },
  {
    "label": "Aqaba International Airport Aqaba, Al `Aqabah",
    "value": "AQJ"
  },
  {
    "label": "Rodriguez Ballon Airport Arequipa, Arequipa",
    "value": "AQP"
  },
  {
    "label": "Arctic Village Airport Arctic Village, Alaska",
    "value": "ARC"
  },
  {
    "label": "Alor Island Alor Island, ",
    "value": "ARD"
  },
  {
    "label": "Arkhangelsk Airport Arkhangel'sk, Arkhangelrskaya Oblast",
    "value": "ARH"
  },
  {
    "label": "Chacalluta Airport Arica, Tarapaca",
    "value": "ARI"
  },
  {
    "label": "Arusha Airport Arusha, Arusha",
    "value": "ARK"
  },
  {
    "label": "Armidale Airport Armidale, New South Wales",
    "value": "ARM"
  },
  {
    "label": "Arlanda Airport Märst, Stockholm",
    "value": "ARN"
  },
  {
    "label": "Watertown International Airport Dexter, New York",
    "value": "ART"
  },
  {
    "label": "Aracatuba Airport Araçatuba, Sao Paulo",
    "value": "ARU"
  },
  {
    "label": "Lakelan-Noble F. Lee Memerial Field Airport Woodruff, Wisconsin",
    "value": "ARV"
  },
  {
    "label": "Ceala Airport Arad, Arad",
    "value": "ARW"
  },
  {
    "label": "Assab Assab, ",
    "value": "ASA"
  },
  {
    "label": "Ashkhabad Northwest Airport Ashgabat, Ashkhabad",
    "value": "ASB"
  },
  {
    "label": "Andros Town Airport Fresh Creek, Central Andros",
    "value": "ASD"
  },
  {
    "label": "Aspen Pitkin County Airport-Sardy Field Aspen, Colorado",
    "value": "ASE"
  },
  {
    "label": "Astrakhan Southeast Airport Astrakhan', Astrakhanskaya Oblast",
    "value": "ASF"
  },
  {
    "label": "Wideawake Fld Georgetown, Ascension Island, Ascension",
    "value": "ASI"
  },
  {
    "label": "Amami Airport Amami O Shima, Mie Prefecture",
    "value": "ASJ"
  },
  {
    "label": "Yohannes Iv International Airport Asmara, Maekel",
    "value": "ASM"
  },
  {
    "label": "Ethiopia Asosa, Welega",
    "value": "ASO"
  },
  {
    "label": "Alice Springs Airport Alice Springs, Northern Territory",
    "value": "ASP"
  },
  {
    "label": "Erkilet Airport Kayseri, Kayseri",
    "value": "ASR"
  },
  {
    "label": "Silvio Pettirossi International Airport Colonia Mariano Roque Alonso, Central",
    "value": "ASU"
  },
  {
    "label": "Amboseli Amboseli, Rift Valley",
    "value": "ASV"
  },
  {
    "label": "Aswan Airport Aswan, Aswan",
    "value": "ASW"
  },
  {
    "label": "Atbara Atbara, Nahr an Nil",
    "value": "ATB"
  },
  {
    "label": "Arthur's Town Airport Arthur Town, Cat Island",
    "value": "ATC"
  },
  {
    "label": "Atoifi Atoifi, Malaita",
    "value": "ATD"
  },
  {
    "label": "Eleftherios Venizelos International Airport Athens, Attiki",
    "value": "ATH"
  },
  {
    "label": "Atqasuk Airport Atqasuk, Alaska",
    "value": "ATK"
  },
  {
    "label": "Hartsfield-Jackson Atlanta International Airport Atlanta, Georgia",
    "value": "ATL"
  },
  {
    "label": "Altamira Airport Altamira, Para",
    "value": "ATM"
  },
  {
    "label": "Raja Sansi Airport Raja Sansi, Punjab",
    "value": "ATQ"
  },
  {
    "label": "Atar Airport Atar, Adrar",
    "value": "ATR"
  },
  {
    "label": "Atmautluak Airport Atmautluak, Alaska",
    "value": "ATT"
  },
  {
    "label": "Outagamie County Airport Appleton, Wisconsin",
    "value": "ATW"
  },
  {
    "label": "Watertown Municipal Airport Watertown, South Dakota",
    "value": "ATY"
  },
  {
    "label": "Asyut Airport Asyut, Asyut",
    "value": "ATZ"
  },
  {
    "label": "Reina Beatrix International Airport Aruba, ",
    "value": "AUA"
  },
  {
    "label": "Santiago Perez Airport Arauca, Caldas",
    "value": "AUC"
  },
  {
    "label": "Augusta State Airport Augusta, Maine",
    "value": "AUG"
  },
  {
    "label": "Abu Dhabi International Airport Abu Dhabi, Abu Dhabi",
    "value": "AUH"
  },
  {
    "label": "Alakanuk Airport Alakanuk, Alaska",
    "value": "AUK"
  },
  {
    "label": "Atuona Airport Atuona, Marquesas Islands",
    "value": "AUQ"
  },
  {
    "label": "Aurillac Airport Aurillac, Auvergne",
    "value": "AUR"
  },
  {
    "label": "Austin-Bergstrom International Airport Austin, Texas",
    "value": "AUS"
  },
  {
    "label": "Araguaina Airport Araguaina, Norte",
    "value": "AUX"
  },
  {
    "label": "Vanuatu Aneityum, Tafea",
    "value": "AUY"
  },
  {
    "label": "Asheville Regional Airport Fletcher, North Carolina",
    "value": "AVL"
  },
  {
    "label": "Avignon-Caumont Airport Avignon, Provence-alpes-cote d'Azur",
    "value": "AVN"
  },
  {
    "label": "Wilkes Barre Scranton International Airport Pittston, Pennsylvania",
    "value": "AVP"
  },
  {
    "label": "Avu Avu Avu Avu, Guadalcanal",
    "value": "AVU"
  },
  {
    "label": "Avalon Airport Lara, Victoria",
    "value": "AVV"
  },
  {
    "label": "Awaba Awaba, ",
    "value": "AWB"
  },
  {
    "label": "Aniwa Airport Aniwa, Tafea",
    "value": "AWD"
  },
  {
    "label": "Ahvaz Airport Ahvaz, Khuzestan",
    "value": "AWZ"
  },
  {
    "label": "Wallblake Airport Anguilla, The Valley",
    "value": "AXA"
  },
  {
    "label": "Alexandroupolis Airport Alexandroupolis, Anatoliki Makedonia",
    "value": "AXD"
  },
  {
    "label": "El Eden Airport La Tebaida, Quindio",
    "value": "AXM"
  },
  {
    "label": "Spring Point Airport Spring Point, Acklins",
    "value": "AXP"
  },
  {
    "label": "French Polynesia Arutua, Tuamotu-Gambier",
    "value": "AXR"
  },
  {
    "label": "Akita Airport Akita-shi, Akita Prefecture",
    "value": "AXT"
  },
  {
    "label": "Axum Axum, Tigray",
    "value": "AXU"
  },
  {
    "label": "Ayers Rock Airport Ayers Rock, Northern Territory",
    "value": "AYQ"
  },
  {
    "label": "Antalya Airport Antalya, Antalya",
    "value": "AYT"
  },
  {
    "label": "Phoenix-Mesa Gateway Airport Phoenix, Arizona",
    "value": "AZA"
  },
  {
    "label": "Yazd Airport Yezd, Yazd",
    "value": "AZD"
  },
  {
    "label": "Andizhan Airport Andijon, Andijon",
    "value": "AZN"
  },
  {
    "label": "Kalamazoo-Battle Creek International Airport Kalamazoo, Michigan",
    "value": "AZO"
  },
  {
    "label": "Touat Airport Adrar, Adrar",
    "value": "AZR"
  },
  {
    "label": "Samana El Catey International Airport Samana, Samana",
    "value": "AZS"
  },
  {
    "label": "Baguio Airport Baguio City, Cordillera Administrative Region",
    "value": "BAG"
  },
  {
    "label": "Bahrain International Airport Al Muharraq, Al Manamah",
    "value": "BAH"
  },
  {
    "label": "Batman Airport Batman, Batman",
    "value": "BAL"
  },
  {
    "label": "Ernesto Cortissoz Airport Soledad, Atlantico",
    "value": "BAQ"
  },
  {
    "label": "Balalae Balalae, Western",
    "value": "BAS"
  },
  {
    "label": "Bauru Airport Bauru, Sao Paulo",
    "value": "BAU"
  },
  {
    "label": "Baotou Airport Baotou, Nei Mongol",
    "value": "BAV"
  },
  {
    "label": "Barnaui West Airport Barnaul, Altayskiy Kray",
    "value": "BAX"
  },
  {
    "label": "Baia Mare Baia Mare, ",
    "value": "BAY"
  },
  {
    "label": "Balmaceda Airport Balmaceda, Aisen del General Carlos Ibanez ",
    "value": "BBA"
  },
  {
    "label": "Bhubaneswar Airport Bhubaneswar, Orissa",
    "value": "BBI"
  },
  {
    "label": "Kasane Airport Kasane, Chobe",
    "value": "BBK"
  },
  {
    "label": "Bario Airport Nanga Medamit, Sarawak",
    "value": "BBN"
  },
  {
    "label": "Berbera Airport Berbera, Woqooyi Galbeed",
    "value": "BBO"
  },
  {
    "label": "Blackbushe Airport Camberley, England",
    "value": "BBS"
  },
  {
    "label": "Aeroportul National Bucuresti-Baneasa Bucharest, Bucuresti",
    "value": "BBU"
  },
  {
    "label": "Baracoa Airport Baracoa, Guantanamo",
    "value": "BCA"
  },
  {
    "label": "Bacolod Airport Bacolod City, Western Visayas",
    "value": "BCD"
  },
  {
    "label": "Barcaldine Aerodrome Barcaldine, Queensland",
    "value": "BCI"
  },
  {
    "label": "Barra Colorado Airport Colorado, Limon",
    "value": "BCL"
  },
  {
    "label": "Luizi Calugara Airport Bacæu, Bacau",
    "value": "BCM"
  },
  {
    "label": "Barcelona International Airport El Prat de Llobregat, Catalonia",
    "value": "BCN"
  },
  {
    "label": "Bermuda International Airport St. George, Pembroke",
    "value": "BDA"
  },
  {
    "label": "Bundaberg Airport Bundaberg, Queensland",
    "value": "BDB"
  },
  {
    "label": "Badu Island Airport Badu Island, Queensland",
    "value": "BDD"
  },
  {
    "label": "Bandar Lengeh Airport Bandar Abbas, Hormozgan",
    "value": "BDH"
  },
  {
    "label": "Syamsuddin Noor Airport Banjarmasin, Kalimantan Selatan",
    "value": "BDJ"
  },
  {
    "label": "Bradley International Airport Windsor Locks, Connecticut",
    "value": "BDL"
  },
  {
    "label": "Husein Sastranegara Airport Bandung, Jawa Barat",
    "value": "BDO"
  },
  {
    "label": "Bhadrapur Bhadrapur, West Bengal",
    "value": "BDP"
  },
  {
    "label": "Vadodara Airport Vadodara, Gujarat",
    "value": "BDQ"
  },
  {
    "label": "Igor I Sikorsky Memorial Airport Stratford, Connecticut",
    "value": "BDR"
  },
  {
    "label": "Casale Airport Brindisi, Puglia",
    "value": "BDS"
  },
  {
    "label": "Bardufoss Airport Bardufoss, Troms Fylke",
    "value": "BDU"
  },
  {
    "label": "Benbecula Airport Balivanich, Scotland",
    "value": "BEB"
  },
  {
    "label": "Surcin Airport Surčin, Beograd",
    "value": "BEG"
  },
  {
    "label": "Val de Caes International Airport Belem, Para",
    "value": "BEL"
  },
  {
    "label": "Benina Intl Benghazi, Banghazi",
    "value": "BEN"
  },
  {
    "label": "Guipavas Airport Guipavas, Brittany",
    "value": "BES"
  },
  {
    "label": "Bethel Airport Bethel, Alaska",
    "value": "BET"
  },
  {
    "label": "Bedourie Aerodrome Bedourie, Queensland",
    "value": "BEU"
  },
  {
    "label": "Beira Airport Beira, Sofala",
    "value": "BEW"
  },
  {
    "label": "Beirut International Airport Beirut, Jabal Lubnan",
    "value": "BEY"
  },
  {
    "label": "Bradford Regional Airport Lewis Run, Pennsylvania",
    "value": "BFD"
  },
  {
    "label": "Bielefeld Bielefeld, North-Rhine-Westphalia",
    "value": "BFE"
  },
  {
    "label": "William B Heilig Field Airport Scottsbluff, Nebraska",
    "value": "BFF"
  },
  {
    "label": "King County International Airport-Boeing Field Seattle, Washington",
    "value": "BFI"
  },
  {
    "label": "Kern County-Meadows Field Airport Bakersfield, California",
    "value": "BFL"
  },
  {
    "label": "J B M Hertzog Airport Bloemfontein, Free State",
    "value": "BFN"
  },
  {
    "label": "Aldergrove Airport Crumlin, Northern Ireland",
    "value": "BFS"
  },
  {
    "label": "Buri Ram Buri Ram, Buriram",
    "value": "BFV"
  },
  {
    "label": "Palonegro Airport Bucaramanga, Santander",
    "value": "BGA"
  },
  {
    "label": "Bangui M Poko Airport Bangui, Bangui",
    "value": "BGF"
  },
  {
    "label": "Grantley Adams International Airport Bridgetown, Christ Church",
    "value": "BGI"
  },
  {
    "label": "Greater Binghamton Edwin A Link Field Airport Johnson City, New York",
    "value": "BGM"
  },
  {
    "label": "Bergen Flesland Airport Blomsterdalen, Hordaland Fylke",
    "value": "BGO"
  },
  {
    "label": "Bangor International Airport Bangor, Maine",
    "value": "BGR"
  },
  {
    "label": "Al Muthana Airport Baghdad, Baghdad",
    "value": "BGW"
  },
  {
    "label": "Orio Al Serio Airport Grassobbio, Lombardy",
    "value": "BGY"
  },
  {
    "label": "Hancock County-Bar Harbor Airport Ellsworth, Maine",
    "value": "BHB"
  },
  {
    "label": "George Best Belfast City Airport Belfast, Northern Ireland",
    "value": "BHD"
  },
  {
    "label": "Woodbourne Airport Blenheim, Marlborough",
    "value": "BHE"
  },
  {
    "label": "Brus Laguna Airport Brus Laguna, Gracias a Dios",
    "value": "BHG"
  },
  {
    "label": "Bisha Airport Bisha, ",
    "value": "BHH"
  },
  {
    "label": "Bahia Blanca Cte Espora Naval Air Base Punta Alta, Buenos Aires",
    "value": "BHI"
  },
  {
    "label": "Bhuj Airport Bhuj, Gujarat",
    "value": "BHJ"
  },
  {
    "label": "Bukhara Airport Bukhara, Bukhoro",
    "value": "BHK"
  },
  {
    "label": "Birmingham International Airport Birmingham, Alabama",
    "value": "BHM"
  },
  {
    "label": "Bairagarh Airport Bhopal, Madhya Pradesh",
    "value": "BHO"
  },
  {
    "label": "Broken Hill Airport Broken Hill, New South Wales",
    "value": "BHQ"
  },
  {
    "label": "Bharatpur Bharatpur, Central",
    "value": "BHR"
  },
  {
    "label": "Bathurst Airport Bathurst, New South Wales",
    "value": "BHS"
  },
  {
    "label": "Bhavnagar Airport Bhavnagar, Gujarat",
    "value": "BHU"
  },
  {
    "label": "Bahawalpur Airport Bahawalpur, Punjab",
    "value": "BHV"
  },
  {
    "label": "Birmingham International Airport Birmingham, England",
    "value": "BHX"
  },
  {
    "label": "Beihai Beihai, Guangxi",
    "value": "BHY"
  },
  {
    "label": "Poretta Airport Borgo, Corsica",
    "value": "BIA"
  },
  {
    "label": "Block Island State Airport Block Island, Rhode Island",
    "value": "BID"
  },
  {
    "label": "Enyu Airfield Bikini Atoll, ",
    "value": "BII"
  },
  {
    "label": "Frans Kaisiepo Airport Biak, Irian Jaya",
    "value": "BIK"
  },
  {
    "label": "Logan International Airport Billings, Montana",
    "value": "BIL"
  },
  {
    "label": "South Bimini Airport Bailey's Town, Bimini",
    "value": "BIM"
  },
  {
    "label": "Bilbao Airport Loiu, Basque Country",
    "value": "BIO"
  },
  {
    "label": "Anglet Airport Anglet, Aquitaine",
    "value": "BIQ"
  },
  {
    "label": "Biratnagar Airport Biratnagur, Central",
    "value": "BIR"
  },
  {
    "label": "Bismarck Municipal Airport Bismarck, North Dakota",
    "value": "BIS"
  },
  {
    "label": "Soummam Airport Bejaia, Bejaia",
    "value": "BJA"
  },
  {
    "label": "Bojnord Bojnord, Khorasan",
    "value": "BJB"
  },
  {
    "label": "Batsfjord Airport Baasfjord, Finnmark Fylke",
    "value": "BJF"
  },
  {
    "label": "Bemidji-Beltrami County Airport Bemidji, Minnesota",
    "value": "BJI"
  },
  {
    "label": "Yundum International Airport Yundum, Western",
    "value": "BJL"
  },
  {
    "label": "Bujumbura Airport Bujumbura, Bujumbura",
    "value": "BJM"
  },
  {
    "label": "Ethiopia Bahar Dar, Misrak Gojam",
    "value": "BJR"
  },
  {
    "label": "Milas Airport Bodrum, Muğla",
    "value": "BJV"
  },
  {
    "label": "Bajawa Airport Ende, Nusa Tengarra Timur",
    "value": "BJW"
  },
  {
    "label": "Silao Airport Silao, Guanajuato",
    "value": "BJX"
  },
  {
    "label": "Talavera la Real Airport Badajoz, Extremadura",
    "value": "BJZ"
  },
  {
    "label": "Bykovo Airport Lyubertsy, Moskovskaya Oblast",
    "value": "BKA"
  },
  {
    "label": "Buckland Airport Buckland, Alaska",
    "value": "BKC"
  },
  {
    "label": "Kota Kinabalu Airport Kota Kinabalu, Sabah",
    "value": "BKI"
  },
  {
    "label": "Bangkok International Airport Lak Si, Bangkok",
    "value": "BKK"
  },
  {
    "label": "Burke Lakefront Airport Cleveland, Ohio",
    "value": "BKL"
  },
  {
    "label": "Malaysia Bakalalan, null",
    "value": "BKM"
  },
  {
    "label": "Bamako Senou Airport Kalaban, Bamako",
    "value": "BKO"
  },
  {
    "label": "Blackall Aerodrome Mount Enniskillen, Queensland",
    "value": "BKQ"
  },
  {
    "label": "Padangkemiling Airport Bengkulu, Bengkulu",
    "value": "BKS"
  },
  {
    "label": "Raleigh County Memorial Airport Beaver, West Virginia",
    "value": "BKW"
  },
  {
    "label": "Bukavu Kavumu Airport Bukavu, Democratic Republic of",
    "value": "BKY"
  },
  {
    "label": "Jose Antonio Anzoategui Airport Pariaguán, Anzoategui",
    "value": "BLA"
  },
  {
    "label": "Dala Airport Borlange, Dalarna",
    "value": "BLE"
  },
  {
    "label": "Bellingham International Airport Bellingham, Washington",
    "value": "BLI"
  },
  {
    "label": "Algeria Batna, Batna",
    "value": "BLJ"
  },
  {
    "label": "Blackpool Airport Blackpool, England",
    "value": "BLK"
  },
  {
    "label": "Billund Airport Billund, Syddanmark",
    "value": "BLL"
  },
  {
    "label": "Bologna Airport Bologna, Emilia Romagna",
    "value": "BLQ"
  },
  {
    "label": "HAL Bangalore International Airport Bangalore, Karnataka",
    "value": "BLR"
  },
  {
    "label": "Blackwater Aerodrome Baralaba, Queensland",
    "value": "BLT"
  },
  {
    "label": "Belleville Belleville, Illinois",
    "value": "BLV"
  },
  {
    "label": "Chileka International Airport Lunzu, Blantyre",
    "value": "BLZ"
  },
  {
    "label": "Bromma Airport Bromma, Stockholm",
    "value": "BMA"
  },
  {
    "label": "Broome International Airport Broome, Western Australia",
    "value": "BME"
  },
  {
    "label": "Bloomington Normal Airport Bloomington, Illinois",
    "value": "BMI"
  },
  {
    "label": "Borkum Airport Borkum, Lower Saxony",
    "value": "BMK"
  },
  {
    "label": "Bhamo Airport Bhamo, Kachin State",
    "value": "BMO"
  },
  {
    "label": "Mohammad Salahuddin Airport Raba, Nusa Tenggara Barat",
    "value": "BMU"
  },
  {
    "label": "Ban Me Thaut Banmethuot, Dak Lak",
    "value": "BMV"
  },
  {
    "label": "Algeria Bordj Badji Mokhtar, null",
    "value": "BMW"
  },
  {
    "label": "Belep Island Belep Island, Nord",
    "value": "BMY"
  },
  {
    "label": "Nashville International Airport Nashville, Tennessee",
    "value": "BNA"
  },
  {
    "label": "Bandar Abbass International Airport Bandar Abbas, Hormozgan",
    "value": "BND"
  },
  {
    "label": "Brisbane International Airport Brisbane, Queensland",
    "value": "BNE"
  },
  {
    "label": "Benin Airport Benin City, Edo",
    "value": "BNI"
  },
  {
    "label": "Hangelar Bonn, North-Rhine-Westphalia",
    "value": "BNJ"
  },
  {
    "label": "Ballina Airport Ballina, New South Wales",
    "value": "BNK"
  },
  {
    "label": "Bronnoy Airport Bronnoysund, Nordland Fylke",
    "value": "BNN"
  },
  {
    "label": "Barinas Airport Barinas, Barinas",
    "value": "BNS"
  },
  {
    "label": "Banja Luka Airport Banja Luka, Republika Srpska",
    "value": "BNX"
  },
  {
    "label": "Bellona Airport Bellona, Central",
    "value": "BNY"
  },
  {
    "label": "Motu-Mute Airport Papeete, Leeward Islands",
    "value": "BOB"
  },
  {
    "label": "Bocas del Toro Airport Bocas del Toro, Bocas del Toro",
    "value": "BOC"
  },
  {
    "label": "Bordeaux Airport Merignac, Aquitaine",
    "value": "BOD"
  },
  {
    "label": "Eldorado International Airport Fontibón, Distrito Especial",
    "value": "BOG"
  },
  {
    "label": "Bournemouth International Airport Christchurch, England",
    "value": "BOH"
  },
  {
    "label": "Boise Air Terminal Boise, Idaho",
    "value": "BOI"
  },
  {
    "label": "Bourgas Airport Burgas, Burgas",
    "value": "BOJ"
  },
  {
    "label": "Chhatrapati Shivaji International Airport Mumbai, Maharashtra",
    "value": "BOM"
  },
  {
    "label": "Flamingo Airport Kralendijk, Bonaire",
    "value": "BON"
  },
  {
    "label": "Bodo Airport Bodo, Nordland Fylke",
    "value": "BOO"
  },
  {
    "label": "Gen E L Logan International Airport Boston, Massachusetts",
    "value": "BOS"
  },
  {
    "label": "Bartow Municipal Airport Bartow, Florida",
    "value": "BOW"
  },
  {
    "label": "Bobo Dioulasso Airport Bobo-Dioulasso, Houet",
    "value": "BOY"
  },
  {
    "label": "Sepinggan Airport Balikpapan, Kalimantan Timur",
    "value": "BPN"
  },
  {
    "label": "Porto Seguro Airport Porto Seguro, Bahia",
    "value": "BPS"
  },
  {
    "label": "Jefferson County Airport Beaumont, Texas",
    "value": "BPT"
  },
  {
    "label": "Bangda Airport Qamdo, Tibet",
    "value": "BPX"
  },
  {
    "label": "Besalampy Airport Besalampy, Mahajanga",
    "value": "BPY"
  },
  {
    "label": "Glynco Jetport Airport Brunswick, Georgia",
    "value": "BQK"
  },
  {
    "label": "Boulia Aerodrome Boulia, Queensland",
    "value": "BQL"
  },
  {
    "label": "Rafael Hernandez Airport Aguadilla, Puerto Rico",
    "value": "BQN"
  },
  {
    "label": "Blagoveshchensk Northwest Airport Blagoveshchensk, Amurskaya Oblast",
    "value": "BQS"
  },
  {
    "label": "Barreiras Airport Barreiras, Bahia",
    "value": "BRA"
  },
  {
    "label": "San Carlos de Bariloche Airport San Carlos DeBariloche, Santa Fe",
    "value": "BRC"
  },
  {
    "label": "Brainerd-Crow Wing County Regional Airport Brainerd, Minnesota",
    "value": "BRD"
  },
  {
    "label": "Bremen Airport Bremen, Bremen",
    "value": "BRE"
  },
  {
    "label": "United Kingdom Bradford, null",
    "value": "BRF"
  },
  {
    "label": "Palese Macchie Airport Bari, Puglia",
    "value": "BRI"
  },
  {
    "label": "Bourke Airport Bourke, New South Wales",
    "value": "BRK"
  },
  {
    "label": "Burlington Municipal Airport Burlington, Iowa",
    "value": "BRL"
  },
  {
    "label": "Barquisimeto Airport Barquisimeto, Lara",
    "value": "BRM"
  },
  {
    "label": "Bern Belp Airport Belp, Canton of Berne",
    "value": "BRN"
  },
  {
    "label": "Brownsville-South Padre Island International Air Brownsville, Texas",
    "value": "BRO"
  },
  {
    "label": "Turany Airport Brno, Jihomoravský",
    "value": "BRQ"
  },
  {
    "label": "North Bay Airport Barra, England",
    "value": "BRR"
  },
  {
    "label": "Bristol International Airport Bristol, England",
    "value": "BRS"
  },
  {
    "label": "Brussels Airport Bruxelles, Vlaams Brabant",
    "value": "BRU"
  },
  {
    "label": "Bremerhaven Airport Bad Bederkesa, Lower Saxony",
    "value": "BRV"
  },
  {
    "label": "Wiley Post Will Rogers Memorial Airport Barrow, Alaska",
    "value": "BRW"
  },
  {
    "label": "Somalia Bossaso, Bari",
    "value": "BSA"
  },
  {
    "label": "Juscelino Kubitschek International Airport Lago Sul, Distrito Federal",
    "value": "BSB"
  },
  {
    "label": "Jose Celestino Mutis Airport Bahía Solano, Choco",
    "value": "BSC"
  },
  {
    "label": "Baoshan Airport Baoshan, Yunnan",
    "value": "BSD"
  },
  {
    "label": "Bata Airport Bata, Litoral",
    "value": "BSG"
  },
  {
    "label": "Brighton Airport Brighton, England",
    "value": "BSH"
  },
  {
    "label": "Biskra Airport Biskra, Biskra",
    "value": "BSK"
  },
  {
    "label": "Euroairport Basel-Mulhouse-Freiburg St-Ludwig, Alsace",
    "value": "BSL"
  },
  {
    "label": "Basco Airport Basco, Cagayan Valley",
    "value": "BSO"
  },
  {
    "label": "Basrah International Airport Gawad, Al Basrah",
    "value": "BSR"
  },
  {
    "label": "Bassein Bassein, Ayeyarwady",
    "value": "BSX"
  },
  {
    "label": "Hang Nadim Airport Batam, Riau",
    "value": "BTH"
  },
  {
    "label": "Barter Island Airport Kaktovik, Alaska",
    "value": "BTI"
  },
  {
    "label": "Blangbintang Airport Banda Aceh, Aceh",
    "value": "BTJ"
  },
  {
    "label": "Bratsk Bratsk, Irkutskaya Oblast",
    "value": "BTK"
  },
  {
    "label": "W K Kellogg Airport Battle Creek, Michigan",
    "value": "BTL"
  },
  {
    "label": "Bert Mooney Airport Butte, Montana",
    "value": "BTM"
  },
  {
    "label": "Baton Rouge Metropolitan Airport Baton Rouge, Louisiana",
    "value": "BTR"
  },
  {
    "label": "Bratislava Airport Bratislava, Bratislavsky",
    "value": "BTS"
  },
  {
    "label": "Bettles Airport Bettles, Alaska",
    "value": "BTT"
  },
  {
    "label": "Bintulu Airport Bintulu, Sarawak",
    "value": "BTU"
  },
  {
    "label": "Burlington International Airport South Burlington, Vermont",
    "value": "BTV"
  },
  {
    "label": "Bursa Airport Bursa, Bursa",
    "value": "BTZ"
  },
  {
    "label": "Buka Buka, Buka Island",
    "value": "BUA"
  },
  {
    "label": "Burketown Aerodrome Burketown, Queensland",
    "value": "BUC"
  },
  {
    "label": "Ferihegy Airport Budapest, Budapest",
    "value": "BUD"
  },
  {
    "label": "Greater Buffalo International Airport Buffalo, New York",
    "value": "BUF"
  },
  {
    "label": "Bulolo Bulolo, Manus",
    "value": "BUL"
  },
  {
    "label": "Buenaventura Airport Buenaventura, Valle del Cauca",
    "value": "BUN"
  },
  {
    "label": "Burao Burao, Togdheer",
    "value": "BUO"
  },
  {
    "label": "Bulawayo Airport Bulawayo, Matabeleland North",
    "value": "BUQ"
  },
  {
    "label": "Burbank Glendale Pasadena Airport Burbank, California",
    "value": "BUR"
  },
  {
    "label": "Batumi Batumi, Ajaria",
    "value": "BUS"
  },
  {
    "label": "Bunia Airport Bunia, Democratic Republic of",
    "value": "BUX"
  },
  {
    "label": "Bushehr Airport Bandar-e Bushehr, Bushehr",
    "value": "BUZ"
  },
  {
    "label": "Beauvais-Tille Airport Beauvais, Picardie",
    "value": "BVA"
  },
  {
    "label": "Boa Vista International Airport Boa Vista, Nordeste",
    "value": "BVB"
  },
  {
    "label": "Boa Vista Airport Boa Vista, Boa Vista",
    "value": "BVC"
  },
  {
    "label": "La Roche Airport Brive-la-Gaillarde, Limousin",
    "value": "BVE"
  },
  {
    "label": "Berlevag Airport Berlevaag, Finnmark Fylke",
    "value": "BVG"
  },
  {
    "label": "Brigadeiro Camarao Airport Vilhena, Rondonia",
    "value": "BVH"
  },
  {
    "label": "Birdsville Airport Birdsville, Queensland",
    "value": "BVI"
  },
  {
    "label": "Bhairawa Airport Bhairawa, West",
    "value": "BWA"
  },
  {
    "label": "Braunschweig Airport Braunschweig, Lower Saxony",
    "value": "BWE"
  },
  {
    "label": "Walney Island Airport Barrow in Furness, England",
    "value": "BWF"
  },
  {
    "label": "Baltimore-Washington International Thurgood Mars Baltimore, Maryland",
    "value": "BWI"
  },
  {
    "label": "Bol Bol, Splitsko-Dalmatinska",
    "value": "BWK"
  },
  {
    "label": "Brunei International Airport Bandar Seri Begawan, Brunei and Muara",
    "value": "BWN"
  },
  {
    "label": "Burnie Wynyard Airport Doctors Rocks, Tasmania",
    "value": "BWT"
  },
  {
    "label": "Santa Clara Airport Santa Clara, ",
    "value": "BWW"
  },
  {
    "label": " Bam, Kerman",
    "value": "BXR"
  },
  {
    "label": "Butuan Airport Buenavista, Caraga",
    "value": "BXU"
  },
  {
    "label": "Bayamo Airport Bayamo, Granma",
    "value": "BYM"
  },
  {
    "label": " Bayankhongor, Bayanhongor",
    "value": "BYN"
  },
  {
    "label": "Philip S W Goldson International Airport Hattieville, Belize",
    "value": "BZE"
  },
  {
    "label": "Szwederowo Airport Białe Błota, Kujawsko-Pomorskie",
    "value": "BZG"
  },
  {
    "label": "Briansk Briansk, Tsentral'Niy",
    "value": "BZK"
  },
  {
    "label": " Barisal, Barisal",
    "value": "BZL"
  },
  {
    "label": "Gallatin Field Airport Bozeman, Montana",
    "value": "BZN"
  },
  {
    "label": "Bolzano Airport Botzen, Trentino-Alto Adige",
    "value": "BZO"
  },
  {
    "label": "Vias Airport Villeneuve, Languedoc-Roussillon",
    "value": "BZR"
  },
  {
    "label": "Brazzaville Maya Maya Airport Brazzaville, Brazzaville",
    "value": "BZV"
  },
  {
    "label": "Brize Norton Airport Carterton, England",
    "value": "BZZ"
  },
  {
    "label": "Cabinda Airport Cabinda, Cabinda",
    "value": "CAB"
  },
  {
    "label": "Cascavel Airport Cascavel, Nordeste",
    "value": "CAC"
  },
  {
    "label": "Columbia Metropolitan Airport West Columbia, South Carolina",
    "value": "CAE"
  },
  {
    "label": "Elmas Airport Sardara, Sardinia",
    "value": "CAG"
  },
  {
    "label": "Camo Ca Mau, Ca Mau",
    "value": "CAH"
  },
  {
    "label": "Cairo International Airport Cairo, Al Qahirah",
    "value": "CAI"
  },
  {
    "label": "Akron Canton Regional Airport Canton, Ohio",
    "value": "CAK"
  },
  {
    "label": "Campbeltown Airport Campbeltown, Scotland",
    "value": "CAL"
  },
  {
    "label": "Baiyun Airport Guangzhou, Guangdong",
    "value": "CAN"
  },
  {
    "label": "Cap Haitien Airport Cap-Haïtien, Nord",
    "value": "CAP"
  },
  {
    "label": "Carlisle Airport Carlisle, England",
    "value": "CAX"
  },
  {
    "label": "Rochambeau Cayenne, Cayenne",
    "value": "CAY"
  },
  {
    "label": "Cobar Airport Canbelego, New South Wales",
    "value": "CAZ"
  },
  {
    "label": "Jorge Wilsterman Airport Cochabamba, Cochabamba",
    "value": "CBB"
  },
  {
    "label": "Cambridge Airport Cambridge, England",
    "value": "CBG"
  },
  {
    "label": "Bechar Airport Bechar, Bechar",
    "value": "CBH"
  },
  {
    "label": "Cotabato Airport Sultan Kudarat, Autonomous Region in Muslim Mind",
    "value": "CBO"
  },
  {
    "label": "Calabar Airport Duke Town, Cross River",
    "value": "CBQ"
  },
  {
    "label": "Canberra International Airport Canberra, Australian Capital Territory",
    "value": "CBR"
  },
  {
    "label": "Angola Catumbela, null",
    "value": "CBT"
  },
  {
    "label": "Cuba Cayo Coco, Ciego de Avila",
    "value": "CCC"
  },
  {
    "label": "Salvaza Airport Carcassonne, Languedoc-Roussillon",
    "value": "CCF"
  },
  {
    "label": "Kozhikode Airport Pallikkal, Kerala",
    "value": "CCJ"
  },
  {
    "label": "Cocos Airport West Island, ",
    "value": "CCK"
  },
  {
    "label": "Criciuma Airport Forquilhinha, Santa Catarina",
    "value": "CCM"
  },
  {
    "label": "Carriel Sur International Airport Hualpencillo, Bio-Bio",
    "value": "CCP"
  },
  {
    "label": "Simon Bolivar International Airport Catia la Mar, Vargas",
    "value": "CCS"
  },
  {
    "label": "Netaji Subhash Chandra Bose International Airpor Kolkata, West Bengal",
    "value": "CCU"
  },
  {
    "label": "Vanuatu Craig Cove, ",
    "value": "CCV"
  },
  {
    "label": "Chub Cay Airport Chub Cay, Berry Islands",
    "value": "CCZ"
  },
  {
    "label": "Cold Bay Airport Cold Bay, Alaska",
    "value": "CDB"
  },
  {
    "label": "Cedar City Municipal Airport Cedar City, Utah",
    "value": "CDC"
  },
  {
    "label": "Charles de Gaulle International Airport Le Mesnil-Amelot, Ile-de-France",
    "value": "CDG"
  },
  {
    "label": "Chadron Municipal Airport Chadron, Nebraska",
    "value": "CDR"
  },
  {
    "label": "Merle K Mudhole Smith Airport Cordova, Alaska",
    "value": "CDV"
  },
  {
    "label": "Essex County Airport Fairfield, New Jersey",
    "value": "CDW"
  },
  {
    "label": "Lahug Airport Cebu, Central Visayas",
    "value": "CEB"
  },
  {
    "label": "Jack Mcnamara Field Airport Crescent City, California",
    "value": "CEC"
  },
  {
    "label": "Ceduna Airport Ceduna, South Australia",
    "value": "CED"
  },
  {
    "label": "Cherepovets Airport Cherepovets, Vologodskaya Oblast",
    "value": "CEE"
  },
  {
    "label": "Hawarden Airport Chester, Wales",
    "value": "CEG"
  },
  {
    "label": "Chiang Rai Airport Chiang Rai, Chiang Rai",
    "value": "CEI"
  },
  {
    "label": "Chelyabinsk Balandino Airport Zlatoust, Chelyabinskaya Oblast",
    "value": "CEK"
  },
  {
    "label": "Central Airport Circle, Alaska",
    "value": "CEM"
  },
  {
    "label": "Ciudad Obregon Airport Ciudad Obregón, Sonora",
    "value": "CEN"
  },
  {
    "label": "Cortez-Montezuma County Airport Cortez, Colorado",
    "value": "CEZ"
  },
  {
    "label": "Cacador Airport Caçador, Santa Catarina",
    "value": "CFC"
  },
  {
    "label": "Aulnat Airport Aulnat, Auvergne",
    "value": "CFE"
  },
  {
    "label": "Abou Bakr Belkaid Chlef, Chlef",
    "value": "CFK"
  },
  {
    "label": "Carrickfin Airport Mullaghduff, ",
    "value": "CFN"
  },
  {
    "label": "Carpiquet Airport Carpiquet, Basse-Normandie",
    "value": "CFR"
  },
  {
    "label": "Coffs Harbour Airport Coffs Harbour, New South Wales",
    "value": "CFS"
  },
  {
    "label": "Kerkira Airport Corcyra, Nisia Ionioy",
    "value": "CFU"
  },
  {
    "label": "Craig Seaplane Base Craig, Alaska",
    "value": "CGA"
  },
  {
    "label": "Marechal Rondon International Airport Cuiaba, Centro-Oeste",
    "value": "CGB"
  },
  {
    "label": "Changde Airport Changde, Hunan",
    "value": "CGD"
  },
  {
    "label": "Congonhas International Airport Sao Paulo, Sao Paulo",
    "value": "CGH"
  },
  {
    "label": "Cape Girardeau Municipal Airport Scott City, Missouri",
    "value": "CGI"
  },
  {
    "label": "Jakarta International Airport Tangerang, Banten",
    "value": "CGK"
  },
  {
    "label": "Philippines Camiguin, Northern Mindanao",
    "value": "CGM"
  },
  {
    "label": "Cologne Bonn Airport Cologne, North Rhine-Westphalia",
    "value": "CGN"
  },
  {
    "label": "Zhengzhou Airport Zhengzhou, Henan",
    "value": "CGO"
  },
  {
    "label": "Chittagong Airport Chittagong, Chittagong",
    "value": "CGP"
  },
  {
    "label": "Dafang Shen Airport Changchun, Jilin",
    "value": "CGQ"
  },
  {
    "label": "Campo Grande International Airport Campo Grande, Mato Grosso do Sul",
    "value": "CGR"
  },
  {
    "label": "Cagayan de Oro Airport Cagayan de Oro, Northern Mindanao",
    "value": "CGY"
  },
  {
    "label": "Chattanooga Metropolitan Airport Chattanooga, Tennessee",
    "value": "CHA"
  },
  {
    "label": "Christchurch International Airport Christchurch, Canterbury",
    "value": "CHC"
  },
  {
    "label": "Charlottesville Albemarle Airport Earlysville, Virginia",
    "value": "CHO"
  },
  {
    "label": "Souda Airport Canea, Kriti",
    "value": "CHQ"
  },
  {
    "label": "Charleston International Airport North Charleston, South Carolina",
    "value": "CHS"
  },
  {
    "label": "Karewa Chatham Island, Canterbury",
    "value": "CHT"
  },
  {
    "label": "Chuathbaluk Chuathbaluk, Alaska",
    "value": "CHU"
  },
  {
    "label": "Choiseul Bay Choiseul Bay, Western",
    "value": "CHY"
  },
  {
    "label": "Ciampino Airport Rome, Lazio",
    "value": "CIA"
  },
  {
    "label": "Chico Municipal Airport Chico, California",
    "value": "CIC"
  },
  {
    "label": "Cedar Rapids Municipal Airport Cedar Rapids, Iowa",
    "value": "CID"
  },
  {
    "label": "Chifeng Chifeng, Nei Mongol",
    "value": "CIF"
  },
  {
    "label": "Changzhi Changzhi, Shanxi",
    "value": "CIH"
  },
  {
    "label": "E. Beltram Airport Cobija, Pando",
    "value": "CIJ"
  },
  {
    "label": "Chalkyitsik Airport Chalkyitsik, Alaska",
    "value": "CIK"
  },
  {
    "label": " Chipata, Eastern",
    "value": "CIP"
  },
  {
    "label": " Shimkent, ",
    "value": "CIT"
  },
  {
    "label": "Chippewa County International Airport Kincheloe, Michigan",
    "value": "CIU"
  },
  {
    "label": "Canouan Airport Canouan Island, Grenadines",
    "value": "CIW"
  },
  {
    "label": "Cap J A Quinones Gonzales Airport Chiclayo, Lambayeque",
    "value": "CIX"
  },
  {
    "label": "Maj Gen Fap A R Iglesias Airport Cajamarca, Cajamarca",
    "value": "CJA"
  },
  {
    "label": "Peelamedu Airport Coimbatore, Tamil Nadu",
    "value": "CJB"
  },
  {
    "label": "El Loa Airport Calama, Antofagasta",
    "value": "CJC"
  },
  {
    "label": "Cheongju International Airport Naesu-Eup, Chungcheongbuk-Do",
    "value": "CJJ"
  },
  {
    "label": "Chitral Airport Chitral, North-West Frontier",
    "value": "CJL"
  },
  {
    "label": "Ciudad Juarez International Airport Ciudad Juarez, Chihuahua",
    "value": "CJS"
  },
  {
    "label": "Cheju International Airport Jeju-Si, Jaeju-Do",
    "value": "CJU"
  },
  {
    "label": "Benedum Airport Clarksburg, West Virginia",
    "value": "CKB"
  },
  {
    "label": "Crooked Creek Airport Aniak, Alaska",
    "value": "CKD"
  },
  {
    "label": "Chongqing Jiangbei International Chongqing, Chongqing",
    "value": "CKG"
  },
  {
    "label": "Russia Chokurdah, Sakha",
    "value": "CKH"
  },
  {
    "label": "Carajas Airport Carajas, Para",
    "value": "CKS"
  },
  {
    "label": "Chicken Airport Tok, Alaska",
    "value": "CKX"
  },
  {
    "label": "Conakry Airport Conakry, Conakry",
    "value": "CKY"
  },
  {
    "label": "Abydus Canakkale, Çanakkale",
    "value": "CKZ"
  },
  {
    "label": "Mcclellan Palomar Airport Carlsbad, California",
    "value": "CLD"
  },
  {
    "label": "Hopkins International Airport Cleveland, Ohio",
    "value": "CLE"
  },
  {
    "label": "Someseni Airport Clausemburgo, Cluj",
    "value": "CLJ"
  },
  {
    "label": "Easterwood Field Airport College Station, Texas",
    "value": "CLL"
  },
  {
    "label": "William R Fairchild International Airport Port Angeles, Washington",
    "value": "CLM"
  },
  {
    "label": "Alfonso Bonilla Aragon International Airport Obando, Valle del Cauca",
    "value": "CLO"
  },
  {
    "label": "Clarks Point Airport Clarks Point, Alaska",
    "value": "CLP"
  },
  {
    "label": "Colima Airport Cuauhtémoc, Colima",
    "value": "CLQ"
  },
  {
    "label": "Douglas International Airport Charlotte, North Carolina",
    "value": "CLT"
  },
  {
    "label": "Ste Catherine Airport Calenzana, Corsica",
    "value": "CLY"
  },
  {
    "label": "Cunnamulla Cunnamulla, Queensland",
    "value": "CMA"
  },
  {
    "label": "Katunayake International Airport Gampaha, Western",
    "value": "CMB"
  },
  {
    "label": "Ciudad del Carmen Airport Carmen Olorón, Campeche",
    "value": "CME"
  },
  {
    "label": "Aix les Bains Airport La Motte, Rhone-Alpes",
    "value": "CMF"
  },
  {
    "label": "Corumba International Airport Corumba, Mato Grosso do Sul",
    "value": "CMG"
  },
  {
    "label": "Port Columbus International Airport Columbus, Ohio",
    "value": "CMH"
  },
  {
    "label": "University of Illinois-Willard Airport Savoy, Illinois",
    "value": "CMI"
  },
  {
    "label": "Mohamed V Airport Casablanca, Casablanca",
    "value": "CMN"
  },
  {
    "label": "Chimbu Airport Kundiawa, null",
    "value": "CMU"
  },
  {
    "label": "Ignacio Agramonte Airport Camagüey, Camaguey",
    "value": "CMW"
  },
  {
    "label": "Houghton County Memorial Airport Hancock, Michigan",
    "value": "CMX"
  },
  {
    "label": "Coonamble Airport Coonamble, New South Wales",
    "value": "CNB"
  },
  {
    "label": "Australia Coconut Island, Queensland",
    "value": "CNC"
  },
  {
    "label": "Constanta Mihail Kogalniceanu Airport Kustenje, Constanta",
    "value": "CND"
  },
  {
    "label": "Tancredo Neves International Airport Confins, Minas Gerais",
    "value": "CNF"
  },
  {
    "label": "Cloncurry Aerodrome Cloncurry, Queensland",
    "value": "CNJ"
  },
  {
    "label": "Cavern City Air Terminal Airport Carlsbad, New Mexico",
    "value": "CNM"
  },
  {
    "label": "Neerlerit Inaat Neerlerit Inaat, Ostgronland",
    "value": "CNP"
  },
  {
    "label": "Corrientes Airport Corrientes, Corrientes",
    "value": "CNQ"
  },
  {
    "label": "Cairns International Airport Cairns, Queensland",
    "value": "CNS"
  },
  {
    "label": "Chiang Mai International Airport Chiang Mai, Roi Et",
    "value": "CNX"
  },
  {
    "label": "Canyonlands Field Airport Thompson, Utah",
    "value": "CNY"
  },
  {
    "label": "Yellowstone Regional Airport Cody/Yellowstone, Wyoming",
    "value": "COD"
  },
  {
    "label": "Kochi Airport Kochi, Kerala",
    "value": "COK"
  },
  {
    "label": "Coll Island Airport Isle of coll, Scotland",
    "value": "COL"
  },
  {
    "label": "Cotonou Cadjehon Airport Cotonou, Atlantique",
    "value": "COO"
  },
  {
    "label": "Choybalsan Northeast Airport Choibalsan, Dornod",
    "value": "COQ"
  },
  {
    "label": "Ingeniero Ambrosio L.V. Taravella International  Cordoba, Cordoba",
    "value": "COR"
  },
  {
    "label": "City of Colorado Springs Municipal Airport Colorado Springs, Colorado",
    "value": "COS"
  },
  {
    "label": "Columbia Regional Airport Columbia, Missouri",
    "value": "COU"
  },
  {
    "label": "Chapelco Airport San Martin DeLos Andes, Buenos Aires",
    "value": "CPC"
  },
  {
    "label": "Coober Pedy Aerodrome Coober Pedy, South Australia",
    "value": "CPD"
  },
  {
    "label": "Ignacio Alberto Acuna Ongay Airport Campeche, Campeche",
    "value": "CPE"
  },
  {
    "label": "Copenhagen Airport Kastrup, Hovedstaden",
    "value": "CPH"
  },
  {
    "label": "Chamonate Airport Copiapó, Atacama",
    "value": "CPO"
  },
  {
    "label": "Campinas International Airport Campinas, Sao Paulo",
    "value": "CPQ"
  },
  {
    "label": "Natrona County International Airport Casper, Wyoming",
    "value": "CPR"
  },
  {
    "label": "D F Malan Airport Cape Town, Western Cape",
    "value": "CPT"
  },
  {
    "label": "Presidente Joao Suassuna Airport Campina Grande, Paraiba",
    "value": "CPV"
  },
  {
    "label": "Culebra Airport Culebra, Puerto Rico",
    "value": "CPX"
  },
  {
    "label": "Shahre-Kord Shahre-Kord, Chahar Mahall va Bakhtiari",
    "value": "CQD"
  },
  {
    "label": "Craiova Airport Croiova, Dolj",
    "value": "CRA"
  },
  {
    "label": "General Enrique Mosconi Airport Comodoro Rivadavia, Chubut",
    "value": "CRD"
  },
  {
    "label": "Colonel Hill Airport Colonel Hill, Crooked Island",
    "value": "CRI"
  },
  {
    "label": "Clark Field Airport Mabalacat, Central Luzon",
    "value": "CRK"
  },
  {
    "label": "Gosselies Airport Charleroi, Hainault",
    "value": "CRL"
  },
  {
    "label": "Catarman Airport Catarman, Eastern Visayas",
    "value": "CRM"
  },
  {
    "label": "Corpus Christi International Airport Corpus Christi, Texas",
    "value": "CRP"
  },
  {
    "label": "Yeager Airport Charleston, West Virginia",
    "value": "CRW"
  },
  {
    "label": "Isle Of Colonsay Isle Of Colonsay, Scotland",
    "value": "CSA"
  },
  {
    "label": "Columbus Metropolitan Airport Columbus, Georgia",
    "value": "CSG"
  },
  {
    "label": "Solovky Solovetsky, Arkhangelrskaya Oblast",
    "value": "CSH"
  },
  {
    "label": "Cap Skiring Airport Cap Skirring, ",
    "value": "CSK"
  },
  {
    "label": "Huanghua Airport Changsha, Hunan",
    "value": "CSX"
  },
  {
    "label": "Russia Cheboksary, Chuvashiya",
    "value": "CSY"
  },
  {
    "label": "Catania Fontanarossa Airport Catania, Sicily",
    "value": "CTA"
  },
  {
    "label": "Catamarca Airport San Isidro, Catamarca",
    "value": "CTC"
  },
  {
    "label": "Rafael Nunez Airport La Boquilla, Bolivar",
    "value": "CTG"
  },
  {
    "label": "Charleville Aerodrome Charleville, Queensland",
    "value": "CTL"
  },
  {
    "label": "Chetumal International Airport Chetumal, Quintana Roo",
    "value": "CTM"
  },
  {
    "label": "New Chitose Airport Chitose-shi, Hokkaido Prefecture",
    "value": "CTS"
  },
  {
    "label": "Chengdushuang Liu Airport Chengdu, Sichuan",
    "value": "CTU"
  },
  {
    "label": "Camilo Daza Airport Cúcuta, Norte de Santander",
    "value": "CUC"
  },
  {
    "label": "Mariscal Lamar Airport Cuenca, Azuay",
    "value": "CUE"
  },
  {
    "label": "Levaldigi Airport Fossano, Piedmont",
    "value": "CUF"
  },
  {
    "label": "Belize Caye Caulker, Belize",
    "value": "CUK"
  },
  {
    "label": "Culiacan Airport Culiacan, Sinaloa",
    "value": "CUL"
  },
  {
    "label": "Antonio Jose de Sucre Airport Cumaná, Sucre",
    "value": "CUM"
  },
  {
    "label": "Cancun Airport Cancun, Quintana Roo",
    "value": "CUN"
  },
  {
    "label": "Gen Jose Francisco Bermudez Airport El Pilar, Sucre",
    "value": "CUP"
  },
  {
    "label": "Hato Airport Curacao, Curacao",
    "value": "CUR"
  },
  {
    "label": "General R F Villalobos International Airport Chihuahua, Chihuahua",
    "value": "CUU"
  },
  {
    "label": "Velazco Astete Airport San Sebastián, Cusco",
    "value": "CUZ"
  },
  {
    "label": "Greater Cincinnati International Airport Hebron, Ohio",
    "value": "CVG"
  },
  {
    "label": "Ciudad Victoria Airport Güémez, Tamaulipas",
    "value": "CVM"
  },
  {
    "label": "Clovis Municipal Airport Texico, New Mexico",
    "value": "CVN"
  },
  {
    "label": "Carnarvon Airport Carnarvon, Western Australia",
    "value": "CVQ"
  },
  {
    "label": "Coventry Airport Coventry, England",
    "value": "CVT"
  },
  {
    "label": "Corvo Island Airport Corvo, Azores",
    "value": "CVU"
  },
  {
    "label": "Central Wisconsin Airport Mosinee, Wisconsin",
    "value": "CWA"
  },
  {
    "label": "Afonso Pena International Airport Sao Jose dos Pinhais, Parana",
    "value": "CWB"
  },
  {
    "label": "Chernovtsy Airport Chernivtsi, Chernivets´ka Oblast´",
    "value": "CWC"
  },
  {
    "label": "Cardiff International Airport Barry, Wales",
    "value": "CWL"
  },
  {
    "label": "Coxs Bazar Airport Cox's Bazar, Chittagong",
    "value": "CXB"
  },
  {
    "label": "Coal Harbour Airport Vancouver, British Columbia",
    "value": "CXH"
  },
  {
    "label": "Christmas Island Airport Christmas Island, Florida",
    "value": "CXI"
  },
  {
    "label": "Campo dos Bugres Airport Caxias do Sul, Rio Grande do Sul",
    "value": "CXJ"
  },
  {
    "label": "Nha-Trang Airport Nha Trang, Khanh Hoa",
    "value": "CXR"
  },
  {
    "label": "Gerrard Smith Airport Cayman Brac Is, Cayman Brac",
    "value": "CYB"
  },
  {
    "label": "Chefornak Airport Chefornak, Alaska",
    "value": "CYF"
  },
  {
    "label": "Chaiyi Airport Chiayi City, Taiwan Province",
    "value": "CYI"
  },
  {
    "label": "Cayo Largo del sur Airport Cayo Largo Del Sur, Isla de la Juventud",
    "value": "CYO"
  },
  {
    "label": "Calbayog Airport Calbayog, Eastern Visayas",
    "value": "CYP"
  },
  {
    "label": "Cheyenne Airport Cheyenne, Wyoming",
    "value": "CYS"
  },
  {
    "label": "Cuyo Cuyo, Western Visayas",
    "value": "CYU"
  },
  {
    "label": "Cherskiy Cherskiy, Sakha",
    "value": "CYX"
  },
  {
    "label": "Cauayan Airport Cauayan, Cagayan Valley",
    "value": "CYZ"
  },
  {
    "label": "Jose Leonardo Chirinos Airport La Vela de Coro, Falcon",
    "value": "CZE"
  },
  {
    "label": "Corozal Airport Corozal, Corozal",
    "value": "CZH"
  },
  {
    "label": "Ain El Bey Airport Constantine, Constantine",
    "value": "CZL"
  },
  {
    "label": "Cozumel International Airport San Miguel de Cozumel, Quintana Roo",
    "value": "CZM"
  },
  {
    "label": "Chisana Airport Gakona, Alaska",
    "value": "CZN"
  },
  {
    "label": "Cruzeiro do Sul International Airport Cruzeiro Do Sul, Acre",
    "value": "CZS"
  },
  {
    "label": "Las Brujas Airport Morroa, Sucre",
    "value": "CZU"
  },
  {
    "label": "Changzhou Airport Changzhou, Jiangsu",
    "value": "CZX"
  },
  {
    "label": "Daytona Beach International Airport Daytona Beach, Florida",
    "value": "DAB"
  },
  {
    "label": "Zia International Airport Dhaka Dhaka, Dhaka",
    "value": "DAC"
  },
  {
    "label": "Da Nang Airport Tourane, Da Nang",
    "value": "DAD"
  },
  {
    "label": "Dallas Love Field Airport Dallas, Texas",
    "value": "DAL"
  },
  {
    "label": "Damascus International Airport Damascus, Rif Dimashq",
    "value": "DAM"
  },
  {
    "label": "Dar Es Salaam Airport Dar es Salaam, Dar es Salaam",
    "value": "DAR"
  },
  {
    "label": " Datong, Shanxi",
    "value": "DAT"
  },
  {
    "label": "Daru Airport Daru, Western",
    "value": "DAU"
  },
  {
    "label": "Daxian Airport Daxian, Sichuan",
    "value": "DAX"
  },
  {
    "label": "James M Cox Dayton International Airport Dayton, Ohio",
    "value": "DAY"
  },
  {
    "label": "Pakistan Dalbandin, ",
    "value": "DBA"
  },
  {
    "label": "Dubbo Airport Dubbo, New South Wales",
    "value": "DBO"
  },
  {
    "label": "Dubuque Regional Airport Dubuque, Iowa",
    "value": "DBQ"
  },
  {
    "label": "Dubrovnik Airport Dubrovnik, Dubrovačko-neretvanska",
    "value": "DBV"
  },
  {
    "label": "Washington National Airport Arlington, Virginia",
    "value": "DCA"
  },
  {
    "label": "Cane Field Airport Portsmouth, Saint John",
    "value": "DCF"
  },
  {
    "label": "Mazamet Airport Labruguière, Midi-Pyrenees",
    "value": "DCM"
  },
  {
    "label": "Dodge City Regional Airport Dodge City, Kansas",
    "value": "DDC"
  },
  {
    "label": "Dandong Airport Dandong, Liaoning",
    "value": "DDG"
  },
  {
    "label": " Dera Ghazi Khan, Punjab",
    "value": "DEA"
  },
  {
    "label": "Decatur Airport Decatur, Illinois",
    "value": "DEC"
  },
  {
    "label": "Dehra Dun Dehra Dun, Uttaranchal",
    "value": "DED"
  },
  {
    "label": "Dezful Airport Dezful, Khuzestan",
    "value": "DEF"
  },
  {
    "label": "Indira Gandhi International Airport New Delhi, Madhya Pradesh",
    "value": "DEL"
  },
  {
    "label": "Denver International Airport Denver, Colorado",
    "value": "DEN"
  },
  {
    "label": "Deir Zzor Airport Dayr az Zawr, Dayr az Zawr",
    "value": "DEZ"
  },
  {
    "label": "Fort Worth International Airport Dallas, Texas",
    "value": "DFW"
  },
  {
    "label": "Dangriga Airport Dangriga, Stann Creek",
    "value": "DGA"
  },
  {
    "label": "Mudgee Aerodrome Apple Tree Flat, New South Wales",
    "value": "DGE"
  },
  {
    "label": "Dongguan Dongguan, 贵州省",
    "value": "DGM"
  },
  {
    "label": "Durango Airport Durango, ",
    "value": "DGO"
  },
  {
    "label": "Dumaguete Airport Sibulan, Central Visayas",
    "value": "DGT"
  },
  {
    "label": "Gaggal Airport Dharamsala, Himachal Pradesh",
    "value": "DHM"
  },
  {
    "label": "Dothan Airport Dothan, Alabama",
    "value": "DHN"
  },
  {
    "label": "Mohanbari Airport Dikhari, Assam",
    "value": "DIB"
  },
  {
    "label": "Antsiranana Arrachart Airport Antseranana, Antsiranana",
    "value": "DIE"
  },
  {
    "label": "Diqing Diqing, 贵州省",
    "value": "DIG"
  },
  {
    "label": "Dickinson Municipal Airport Dickinson, North Dakota",
    "value": "DIK"
  },
  {
    "label": "Comoro Dili, Dili",
    "value": "DIL"
  },
  {
    "label": "Dien Bien Dien Bien Phu, Dien Bien",
    "value": "DIN"
  },
  {
    "label": "Aba Tenna Dejazmatch Yilma Airport Dire Dawa, Ogaden",
    "value": "DIR"
  },
  {
    "label": "Loubomo Loubomo, Niari",
    "value": "DIS"
  },
  {
    "label": "Diu Airport Diu, Daman and Diu",
    "value": "DIU"
  },
  {
    "label": "Diyarbakir Airport Diyaribakir, Diyarbakır",
    "value": "DIY"
  },
  {
    "label": "Sultan Taha Airport Jambi, Jambi",
    "value": "DJB"
  },
  {
    "label": "Zarzis Airport Hawmat as Suq, Madanin",
    "value": "DJE"
  },
  {
    "label": "Tiska Airport Illizi, Illizi",
    "value": "DJG"
  },
  {
    "label": "Sentani Airport Jayapura, Irian Jaya",
    "value": "DJJ"
  },
  {
    "label": "Dakar Yoff Airport Ngor, Dakar",
    "value": "DKR"
  },
  {
    "label": "Douala Airport Douala, Littoral",
    "value": "DLA"
  },
  {
    "label": "Chou Shui Tzu Airport Dalian, Liaoning",
    "value": "DLC"
  },
  {
    "label": "Dillingham Municipal Airport Dillingham, Alaska",
    "value": "DLG"
  },
  {
    "label": "Duluth International Airport Duluth, Minnesota",
    "value": "DLH"
  },
  {
    "label": "Lien Khuong Airport Lam Dong, Lam Dong",
    "value": "DLI"
  },
  {
    "label": "Dalaman Airport Ortaca, Muğla",
    "value": "DLM"
  },
  {
    "label": "Dali Dali City, Yunnan",
    "value": "DLU"
  },
  {
    "label": "Vanuatu Dillons Bay, ",
    "value": "DLY"
  },
  {
    "label": "Dalanzadgad Dalanzadgad, Omnogov",
    "value": "DLZ"
  },
  {
    "label": "Doomadgee Doomadgee, Queensland",
    "value": "DMD"
  },
  {
    "label": "Domodedovo Airport Podol'sk, Moskovskaya Oblast",
    "value": "DME"
  },
  {
    "label": "Don Mueang Don Muang, Bangkok",
    "value": "DMK"
  },
  {
    "label": "King Fahd International Airport Khuwaylidiyah, Ash Sharqiyah",
    "value": "DMM"
  },
  {
    "label": "Dimapur Airport Dimapur, Nagaland",
    "value": "DMU"
  },
  {
    "label": "Dundee Airport Dundee, Scotland",
    "value": "DND"
  },
  {
    "label": "Dunhuang Dunhuang, Gansu",
    "value": "DNH"
  },
  {
    "label": "Voloskoye Airport Dnipropetrovs'k, Dnipropetrovs´ka Oblast´",
    "value": "DNK"
  },
  {
    "label": "Pleurtuit Airport Pleurtuit, Brittany",
    "value": "DNR"
  },
  {
    "label": "Cardak Airport Denizli, Denizli",
    "value": "DNZ"
  },
  {
    "label": "Dongola Airport Dongola, Ash Shamaliyah",
    "value": "DOG"
  },
  {
    "label": "Doha International Airport Doha, Doha",
    "value": "DOH"
  },
  {
    "label": "Donetsk Airport Donets'k, Donets´ka Oblast´",
    "value": "DOK"
  },
  {
    "label": "Melville Hall Airport Marigot, Saint Andrew",
    "value": "DOM"
  },
  {
    "label": "Nepal Dolpa, Midwest",
    "value": "DOP"
  },
  {
    "label": "Dourados Airport Dourados, Mato Grosso do Sul",
    "value": "DOU"
  },
  {
    "label": " Dongying, Shandong",
    "value": "DOY"
  },
  {
    "label": "Dipolog Airport Polanco, Zamboanga Peninsula",
    "value": "DPL"
  },
  {
    "label": "Devonport Airport Devonport, Tasmania",
    "value": "DPO"
  },
  {
    "label": "Bali International Airport Denpasar, Bali",
    "value": "DPS"
  },
  {
    "label": "Deering Airport Deering, Alaska",
    "value": "DRG"
  },
  {
    "label": "Durango la Plata County Airport Durango, Colorado",
    "value": "DRO"
  },
  {
    "label": "Ottendorf Okrilla Highway Strip Airport Ottendorf-Okrilla, Saxony",
    "value": "DRS"
  },
  {
    "label": "Del Rio International Airport Del Rio, Texas",
    "value": "DRT"
  },
  {
    "label": "Darwin International Airport Darwin, Northern Territory",
    "value": "DRW"
  },
  {
    "label": "Sheffield Airport Doncaster Sheffield, England",
    "value": "DSA"
  },
  {
    "label": "Des Moines International Airport Des Moines, Iowa",
    "value": "DSM"
  },
  {
    "label": "Dongsheng Airport Dongsheng, Nei Mongol",
    "value": "DSN"
  },
  {
    "label": "Dortmund Airport Dortmund, North Rhine-Westphalia",
    "value": "DTM"
  },
  {
    "label": "Detroit Metropolitan Wayne County Airport Detroit, Michigan",
    "value": "DTW"
  },
  {
    "label": "Dublin Airport Cloghran, ",
    "value": "DUB"
  },
  {
    "label": "Dunedin Airport Outram, Otago",
    "value": "DUD"
  },
  {
    "label": "Dundo Airport Dundo, Lunda Norte",
    "value": "DUE"
  },
  {
    "label": "Du Bois Jefferson County Airport Reynoldsville, Pennsylvania",
    "value": "DUJ"
  },
  {
    "label": "Duncan-Quamichan Lake Airport Duncan, British Columbia",
    "value": "DUQ"
  },
  {
    "label": "Louis Botha Airport Durban, Kwazulu Natal",
    "value": "DUR"
  },
  {
    "label": "Dusseldorf International Airport Dusseldorf, North Rhine-Westphalia",
    "value": "DUS"
  },
  {
    "label": "Unalaska Airport Unalaska, Alaska",
    "value": "DUT"
  },
  {
    "label": "Devils Lake Municipal Airport Devils Lake, North Dakota",
    "value": "DVL"
  },
  {
    "label": "Francisco Bangoy International Airport Davao City, Davao Region",
    "value": "DVO"
  },
  {
    "label": "Soalala Soalala, Mahajanga",
    "value": "DWB"
  },
  {
    "label": "Saudi Arabia Dawadmi, ",
    "value": "DWD"
  },
  {
    "label": "Dubai International Airport Dubai, Dubai",
    "value": "DXB"
  },
  {
    "label": "Dayong Dayong, Hunan",
    "value": "DYG"
  },
  {
    "label": "Anadyr-Ugolnyye Kopi Airport Anadyr', Chukotskiy Avtonomnyy Okrug",
    "value": "DYR"
  },
  {
    "label": "Tajikistan Dushanbe, Karategin",
    "value": "DYU"
  },
  {
    "label": "Dzaoudzi Pamanzi Airport Mamoudzou, Mamoudzou",
    "value": "DZA"
  },
  {
    "label": "Dzhezkazgan South Airport Zhezqazghan, Qaraghandy",
    "value": "DZN"
  },
  {
    "label": "Eagle Airport Tok, Alaska",
    "value": "EAA"
  },
  {
    "label": "Vanuatu Emae, Shefa",
    "value": "EAE"
  },
  {
    "label": "Elenak Kwajalein Atoll, Kwajalein",
    "value": "EAL"
  },
  {
    "label": "Nejran Airport Najran, Najran",
    "value": "EAM"
  },
  {
    "label": "Kearney Municipal Airport Kearney, Nebraska",
    "value": "EAR"
  },
  {
    "label": "San Sebastian Airport Hondarribia, Basque Country",
    "value": "EAS"
  },
  {
    "label": "Pangborn Memorial Airport East Wenatchee, Washington",
    "value": "EAT"
  },
  {
    "label": "Eau Claire County Airport Eau Claire, Wisconsin",
    "value": "EAU"
  },
  {
    "label": "Marina de Campo Airport Pianosa, Tuscany",
    "value": "EBA"
  },
  {
    "label": "Entebbe International Airport Entebbe, Wakiso",
    "value": "EBB"
  },
  {
    "label": "El Obeid Airport Al Ubayyid, Shamal Kurdufan",
    "value": "EBD"
  },
  {
    "label": "Esbjerg Airport Esbjerg, Syddanmark",
    "value": "EBJ"
  },
  {
    "label": "Erbil Erbil, Arbil",
    "value": "EBL"
  },
  {
    "label": "Ercan Airport Nicosia, Cyprus, TRNC",
    "value": "ECN"
  },
  {
    "label": "Edna Bay Seaplane Base Ketchikan, Alaska",
    "value": "EDA"
  },
  {
    "label": "Edinburgh International Airport Edinburgh, Scotland",
    "value": "EDI"
  },
  {
    "label": "Eldoret Airport Nakuru, Rift Valley",
    "value": "EDL"
  },
  {
    "label": "Edremit-Korfez Airport Edremit, Balıkesir",
    "value": "EDO"
  },
  {
    "label": "Edward River Edward River, Queensland",
    "value": "EDR"
  },
  {
    "label": "Eek Airport Eek, Alaska",
    "value": "EEK"
  },
  {
    "label": "Kefallinia Airport Dhilianata, Nisia Ionioy",
    "value": "EFL"
  },
  {
    "label": "Bergerac-Roumaniere Airport Bergerac, Aquitaine",
    "value": "EGC"
  },
  {
    "label": "Eagle County Regional Airport Gypsum, Colorado",
    "value": "EGE"
  },
  {
    "label": " Geneina, Gharb Darfur",
    "value": "EGN"
  },
  {
    "label": "Belgorod North Airport Belgorod, Belgorodskaya Oblast",
    "value": "EGO"
  },
  {
    "label": "Egilsstadir Airport Egilsstadir, Sudur-Mulasysla",
    "value": "EGS"
  },
  {
    "label": "Eagle River Union Airport Eagle River, Wisconsin",
    "value": "EGV"
  },
  {
    "label": "Egegik Airport Egegik, Alaska",
    "value": "EGX"
  },
  {
    "label": "Haina Airport Eisenach, Rhineland-Palatinate",
    "value": "EIB"
  },
  {
    "label": "Russia Eniseysk, Krasnoyarskiy Kray",
    "value": "EIE"
  },
  {
    "label": " Tonsberg, Vestfold Fylke",
    "value": "EIK"
  },
  {
    "label": "Eindhoven Airport Eindhoven, North Brabant",
    "value": "EIN"
  },
  {
    "label": "Beef Island-Roadtown Airport Beef Island, ",
    "value": "EIS"
  },
  {
    "label": "Yariguies Airport Barrancabermeja, Santander",
    "value": "EJA"
  },
  {
    "label": "Wejh Airport Wedjh, Tabuk",
    "value": "EJH"
  },
  {
    "label": "Elko Municipal Airport-J C Harris Field Elko, Nevada",
    "value": "EKO"
  },
  {
    "label": "Ennis Big Sky Airport , ",
    "value": "EKS"
  },
  {
    "label": "Elcho Island Airport Darwin, Northern Territory",
    "value": "ELC"
  },
  {
    "label": " El Fasher, Shamal Darfur",
    "value": "ELF"
  },
  {
    "label": "El Golea Airport El Golea, Ghardaia",
    "value": "ELG"
  },
  {
    "label": "North Eleuthera Airport The Bluff, North Eleuthera",
    "value": "ELH"
  },
  {
    "label": "Elim Airport Elim, Alaska",
    "value": "ELI"
  },
  {
    "label": "Elmira Corning Regional Airport Horseheads, New York",
    "value": "ELM"
  },
  {
    "label": "El Paso International Airport El Paso, Texas",
    "value": "ELP"
  },
  {
    "label": "Gassim Airport Al Qara', Al Qasim",
    "value": "ELQ"
  },
  {
    "label": "Ben Schoeman Airport East London, Eastern Cape",
    "value": "ELS"
  },
  {
    "label": "Guemar Airport El Oued, El Oued",
    "value": "ELU"
  },
  {
    "label": "Elfin Cove Airport Elfin Cove, Alaska",
    "value": "ELV"
  },
  {
    "label": "Yelland Field Airport Ely, Nevada",
    "value": "ELY"
  },
  {
    "label": "East Midlands International Airport Derby, England",
    "value": "EMA"
  },
  {
    "label": "Emerald Aerodrome Emerald, Queensland",
    "value": "EMD"
  },
  {
    "label": "Emden Airport Emden, Lower Saxony",
    "value": "EME"
  },
  {
    "label": "Emmonak Airport Alakanuk, Alaska",
    "value": "EMK"
  },
  {
    "label": "Kenai Municipal Airport Kenai, Alaska",
    "value": "ENA"
  },
  {
    "label": "Ende Airport Ende, Nusa Tengarra Timur",
    "value": "ENE"
  },
  {
    "label": "Enontekio Airport Leppäjärvi, Lapland",
    "value": "ENF"
  },
  {
    "label": "Enshi Airport Enshi, Hubei",
    "value": "ENH"
  },
  {
    "label": " El Nido, Western Visayas",
    "value": "ENI"
  },
  {
    "label": "Enschede Twente Enschede, Overijssel",
    "value": "ENS"
  },
  {
    "label": "Enugu Airport Enugu, Enugu",
    "value": "ENU"
  },
  {
    "label": "Kenosha Regional Airport Kenosha, Wisconsin",
    "value": "ENW"
  },
  {
    "label": "Yan'an Yan'an, Shaanxi",
    "value": "ENY"
  },
  {
    "label": "Olaya Herrera Airport Medellin, Antioquia",
    "value": "EOH"
  },
  {
    "label": "Elorza Airport Elorza, Apure",
    "value": "EOZ"
  },
  {
    "label": "Esperance Aerodrome Gibson, Western Australia",
    "value": "EPR"
  },
  {
    "label": "Esquel Airport Esquel, Chubut",
    "value": "EQS"
  },
  {
    "label": "Erzincan Airport Erzincan, Erzincan",
    "value": "ERC"
  },
  {
    "label": "Erfurt Airport Erfurt, Thuringia",
    "value": "ERF"
  },
  {
    "label": "Er Rachidia Airport Errachidia, Er Rachidia",
    "value": "ERH"
  },
  {
    "label": "Erie International Airport Erie, Pennsylvania",
    "value": "ERI"
  },
  {
    "label": "Comandante Kraemer Airport Erechim, Rio Grande do Sul",
    "value": "ERM"
  },
  {
    "label": "Eros Airport Windhoek, Khomas",
    "value": "ERS"
  },
  {
    "label": "Erzurum Airport Erzurum, Erzurum",
    "value": "ERZ"
  },
  {
    "label": "Esenboga Airport Çubuk, Ankara",
    "value": "ESB"
  },
  {
    "label": "Delta County Airport Escanaba, Michigan",
    "value": "ESC"
  },
  {
    "label": "Orcas Island Airport Eastsound, Washington",
    "value": "ESD"
  },
  {
    "label": "General Rivadeneira Airport Tachina, Esmeraldas",
    "value": "ESM"
  },
  {
    "label": "El Salvador Bajo Airport Diego de Almagro, Atacama",
    "value": "ESR"
  },
  {
    "label": "Essen-Mulheim Airport Mulheim-on-Ruhr, North Rhine-Westphalia",
    "value": "ESS"
  },
  {
    "label": "Morocco Essaouira, Essaouira",
    "value": "ESU"
  },
  {
    "label": "J Hozman Airport Elat, HaDarom",
    "value": "ETH"
  },
  {
    "label": "Lorraine Airport Verny, Lorraine",
    "value": "ETZ"
  },
  {
    "label": "Eua Island Eua, Tongatapu",
    "value": "EUA"
  },
  {
    "label": "Mahlon Sweet Field Airport Eugene, Oregon",
    "value": "EUG"
  },
  {
    "label": "Wasbek Airport Bordesholm, Schleswig-Holstein",
    "value": "EUM"
  },
  {
    "label": "Hassan I Laayoune, Sakia El Hamra",
    "value": "EUN"
  },
  {
    "label": "St. Eustatius Airport Oranjestad, St Eustatius",
    "value": "EUX"
  },
  {
    "label": "Evenes Airport Tarnstad, Nordland Fylke",
    "value": "EVE"
  },
  {
    "label": "Sveg Airport Sveg, Jamtland",
    "value": "EVG"
  },
  {
    "label": "Yerevan-Parakar Airport Yerevan, Armavir",
    "value": "EVN"
  },
  {
    "label": "Evansville Regional Airport Evansville, Indiana",
    "value": "EVV"
  },
  {
    "label": "New Bedford Municipal Airport New Bedford, Massachusetts",
    "value": "EWB"
  },
  {
    "label": "Wildman Lake Wildman Lake, Alaska",
    "value": "EWD"
  },
  {
    "label": "Craven County Regional Airport New Bern, North Carolina",
    "value": "EWN"
  },
  {
    "label": "Newark International Airport Newark, New Jersey",
    "value": "EWR"
  },
  {
    "label": "Exeter Airport Exeter, England",
    "value": "EXT"
  },
  {
    "label": "El Yopal Airport Yopal, Casanare",
    "value": "EYP"
  },
  {
    "label": "Key West International Airport Key West, Florida",
    "value": "EYW"
  },
  {
    "label": "Ministro Pistarini International Airport Ezeiza, Buenos Aires",
    "value": "EZE"
  },
  {
    "label": "Elazig Airport Elazığ, Elazığ",
    "value": "EZS"
  },
  {
    "label": "Farnborough Airport Farnborough, England",
    "value": "FAB"
  },
  {
    "label": "Vagar Airport Faroe Islands, Vága",
    "value": "FAE"
  },
  {
    "label": "Fairbanks International Airport Fairbanks, Alaska",
    "value": "FAI"
  },
  {
    "label": "Faro Airport Faro, Faro",
    "value": "FAO"
  },
  {
    "label": "Hector International Airport Fargo, North Dakota",
    "value": "FAR"
  },
  {
    "label": "Fresno Yosemite International Airport Fresno, California",
    "value": "FAT"
  },
  {
    "label": "French Polynesia Fakarava, Tuamotu-Gambier",
    "value": "FAV"
  },
  {
    "label": "Fayetteville Regional Airport Fayetteville, North Carolina",
    "value": "FAY"
  },
  {
    "label": "Lubumbashi Luano International Airport Lubumbashi, Democratic Republic of",
    "value": "FBM"
  },
  {
    "label": "Glacier Park International Airport Kalispell, Montana",
    "value": "FCA"
  },
  {
    "label": "Nordholz Cuxhaven, Lower-Saxony",
    "value": "FCN"
  },
  {
    "label": "Leonardo da Vinci International Airport Rome, Lazio",
    "value": "FCO"
  },
  {
    "label": "Bringeland Airport Bygstad, Sogn og Fjordane Fylke",
    "value": "FDE"
  },
  {
    "label": "Le Lamentin Airport Ducos, Fort-de-France",
    "value": "FDF"
  },
  {
    "label": "Friedrichshafen Airport Meckenbeuren, Baden-Wurttemberg",
    "value": "FDH"
  },
  {
    "label": "Fergana Fergana, Farghona",
    "value": "FEG"
  },
  {
    "label": "Fernando de Noronha Airport Vila dos Remédios, Pernambuco",
    "value": "FEN"
  },
  {
    "label": "Saiss Airport Fez, Fes",
    "value": "FEZ"
  },
  {
    "label": "French Polynesia Fangatau, Tuamotu-Gambier",
    "value": "FGU"
  },
  {
    "label": "French Polynesia Fakahina, ",
    "value": "FHZ"
  },
  {
    "label": "Kinshasa N Djili International Airport Kinshasa, Kinshasa",
    "value": "FIH"
  },
  {
    "label": "Fujairah Airport Al Fujayrah, Fujairah",
    "value": "FJR"
  },
  {
    "label": "Baden-Airpark Rheinmünster, Baden-Wurttemberg",
    "value": "FKB"
  },
  {
    "label": "Kisangani Bangoka International Airport Kisangani, Democratic Republic of",
    "value": "FKI"
  },
  {
    "label": "Chess Lamberton Airport Franklin, Pennsylvania",
    "value": "FKL"
  },
  {
    "label": "Indonesia Fak Fak, ",
    "value": "FKQ"
  },
  {
    "label": "Fukushima Airport Sukagawa-shi, Fukushima Prefecture",
    "value": "FKS"
  },
  {
    "label": "Gustavo Artunduaga Paredes Airport Florencia, Caqueta",
    "value": "FLA"
  },
  {
    "label": "Flagstaff Pulliam Airport Flagstaff, Arizona",
    "value": "FLG"
  },
  {
    "label": "Fort Lauderdale Hollywood International Airport Dania Beach, Florida",
    "value": "FLL"
  },
  {
    "label": "Hercilio Luz International Airport Florianopolis, Santa Catarina",
    "value": "FLN"
  },
  {
    "label": "Florence Regional Airport Florence, South Carolina",
    "value": "FLO"
  },
  {
    "label": "Florence Airport Florence, Tuscany",
    "value": "FLR"
  },
  {
    "label": "Flores Airport Flores Island, Azores",
    "value": "FLW"
  },
  {
    "label": "Formosa Airport Formosa, Formosa",
    "value": "FMA"
  },
  {
    "label": "Memmingen-Allgäu Airport Memmingen, Bavaria",
    "value": "FMM"
  },
  {
    "label": "Four Corners Regional Airport Farmington, New Mexico",
    "value": "FMN"
  },
  {
    "label": "Munster-Osnabruck International Airport Greven, North Rhine-Westphalia",
    "value": "FMO"
  },
  {
    "label": "Page Field Airport Fort Myers, Florida",
    "value": "FMY"
  },
  {
    "label": "Freetown Lungi Airport Freetown, Northern",
    "value": "FNA"
  },
  {
    "label": "Funchal Airport Madeira, Madeira",
    "value": "FNC"
  },
  {
    "label": "Garons Airport St-Gilles-du-Gard, Languedoc-Roussillon",
    "value": "FNI"
  },
  {
    "label": "Sunan Airport Sunan, P'yongan-namdo",
    "value": "FNJ"
  },
  {
    "label": "Fort Collins Loveland Municipal Airport Loveland, Colorado",
    "value": "FNL"
  },
  {
    "label": "Bishop International Airport Flint, Michigan",
    "value": "FNT"
  },
  {
    "label": "Fuzhou Airport Fuzhou, Fujian",
    "value": "FOC"
  },
  {
    "label": "Fort Dodge Regional Airport Fort Dodge, Iowa",
    "value": "FOD"
  },
  {
    "label": "Gino Lisa Airport Foggia, Puglia",
    "value": "FOG"
  },
  {
    "label": "Pinto Martins International Airport Fortaleza, Ceara",
    "value": "FOR"
  },
  {
    "label": "Freeport International Airport Freeport City, City of Freeport",
    "value": "FPO"
  },
  {
    "label": "Frankfurt International Airport Frankfurt, Hesse",
    "value": "FRA"
  },
  {
    "label": "Franca Airport Franca, Sao Paulo",
    "value": "FRC"
  },
  {
    "label": "Friday Harbor Airport Friday Harbor, Washington",
    "value": "FRD"
  },
  {
    "label": "Fera Island Fera Island, Isabel",
    "value": "FRE"
  },
  {
    "label": "Forli Airport Forli, Emilia Romagna",
    "value": "FRL"
  },
  {
    "label": "Flora Airport Floro, Sogn og Fjordane Fylke",
    "value": "FRO"
  },
  {
    "label": "Santa Elena Airport Flores, Peten",
    "value": "FRS"
  },
  {
    "label": "Vasilyevka Airport Bishkek, Chuy",
    "value": "FRU"
  },
  {
    "label": "Francistown Airport Francistown, North-East",
    "value": "FRW"
  },
  {
    "label": "Sud Corse Airport Figari, Corsica",
    "value": "FSC"
  },
  {
    "label": "Sioux Falls Regional Airport Sioux Falls, South Dakota",
    "value": "FSD"
  },
  {
    "label": "Smith Field Airport Fort Smith, Arkansas",
    "value": "FSM"
  },
  {
    "label": "St Pierre Airport St Pierre, Miquelon-Langlade",
    "value": "FSP"
  },
  {
    "label": "Futuna Futuna Island, Tafea",
    "value": "FTA"
  },
  {
    "label": "El Calafate International Airport El Calafate, Santa Cruz",
    "value": "FTE"
  },
  {
    "label": "Tolagnaro Airport Faradofay, Toliara",
    "value": "FTU"
  },
  {
    "label": "Puerto del Rosario Airport Antigua, Canary Islands",
    "value": "FUE"
  },
  {
    "label": " Fuyang, Zhejiang",
    "value": "FUG"
  },
  {
    "label": "Fukue Airport Goto-shi, Nagasaki Prefecture",
    "value": "FUJ"
  },
  {
    "label": "Fukuoka Airport Fukuoka-shi, Fukuoka Prefecture",
    "value": "FUK"
  },
  {
    "label": "Funafuti International Airport Funafuti, Funafuti",
    "value": "FUN"
  },
  {
    "label": "Futuna Island Futuna Island, Hahake",
    "value": "FUT"
  },
  {
    "label": "Fort Wayne Municipal Airport-Baer Field Fort Wayne, Indiana",
    "value": "FWA"
  },
  {
    "label": "Fort William Heliport Fort William, Scotland",
    "value": "FWM"
  },
  {
    "label": "Fort Yukon Airport Fort Yukon, Alaska",
    "value": "FYU"
  },
  {
    "label": "Filton Airport Bristol, England",
    "value": "FZO"
  },
  {
    "label": "Gabes Airport Gabes, Qabis",
    "value": "GAE"
  },
  {
    "label": "Gafsa Gafsa, Qafash",
    "value": "GAF"
  },
  {
    "label": "Yamagata Airport Higashine-shi, Yamagata Prefecture",
    "value": "GAJ"
  },
  {
    "label": "Galena Airport Galena, Alaska",
    "value": "GAL"
  },
  {
    "label": "Gambell Airport Gambell, Alaska",
    "value": "GAM"
  },
  {
    "label": "Gan Island Airport Hithadhoo, Seenu",
    "value": "GAN"
  },
  {
    "label": "Cuba Guantanamo, Guantanamo",
    "value": "GAO"
  },
  {
    "label": "Borjhar Gawahati, Assam",
    "value": "GAU"
  },
  {
    "label": "Gamba Gamba, ",
    "value": "GAX"
  },
  {
    "label": "Gaya Airport Gaya, Bihar",
    "value": "GAY"
  },
  {
    "label": "Great Bend Municipal Airport Great Bend, Kansas",
    "value": "GBD"
  },
  {
    "label": "Sir Seretse Khama International Airport Tlokweng, South-East",
    "value": "GBE"
  },
  {
    "label": "Marie Galante Airport Grand-Bourg, Pointe-À-Pitre",
    "value": "GBJ"
  },
  {
    "label": "Iran Gorgan, Golestan",
    "value": "GBT"
  },
  {
    "label": "Gillette Campbell County Airport Gillette, Wyoming",
    "value": "GCC"
  },
  {
    "label": "Guernsey Airport St. Peter Port, Channel Islands",
    "value": "GCI"
  },
  {
    "label": "Garden City Regional Airport Pierceville, Kansas",
    "value": "GCK"
  },
  {
    "label": "Owen Roberts International Airport Georgetown, Grand Cayman",
    "value": "GCM"
  },
  {
    "label": "Ididole Gode/Iddidole, Bale",
    "value": "GDE"
  },
  {
    "label": "Don Miguel Hidalgo International Airport Tlajomulco de Zúñiga, Jalisco",
    "value": "GDL"
  },
  {
    "label": "Rebiechowo Airport Gdansk, Pomorskie",
    "value": "GDN"
  },
  {
    "label": "Vare Maria Airport Barinas, Apure",
    "value": "GDO"
  },
  {
    "label": "Gondar Airport Azezo, Debub Gonder",
    "value": "GDQ"
  },
  {
    "label": "Grand Turk International Airport Grand Turk, Gand Turk",
    "value": "GDT"
  },
  {
    "label": "Magadan Northwest Airport Magadan, Magadanskaya Oblast",
    "value": "GDX"
  },
  {
    "label": "Magenta Airport Noumea, Sud",
    "value": "GEA"
  },
  {
    "label": "Spokane International Airport Spokane, Washington",
    "value": "GEG"
  },
  {
    "label": "Santo Angelo Airport Santo Angelo, Rio Grande do Sul",
    "value": "GEL"
  },
  {
    "label": "Timehri International Airport Hyde Park, Demerara-Mahaica",
    "value": "GEO"
  },
  {
    "label": "Nueva Gerona Airport Nueva Gerona, Isla de la Juventud",
    "value": "GER"
  },
  {
    "label": "General Santos Airport General Santos City, Soccsksargen",
    "value": "GES"
  },
  {
    "label": "Geraldton Airport Geraldton, Western Australia",
    "value": "GET"
  },
  {
    "label": "Lappland Airport Koskullskulle, Norrbotten",
    "value": "GEV"
  },
  {
    "label": "Griffith Airport Griffith, New South Wales",
    "value": "GFF"
  },
  {
    "label": "Grand Forks Mark Andrews International Airport Grand Forks, North Dakota",
    "value": "GFK"
  },
  {
    "label": "Grafton Airport Grafton, New South Wales",
    "value": "GFN"
  },
  {
    "label": "Gregg County Airport Longview, Texas",
    "value": "GGG"
  },
  {
    "label": "Exuma International Airport George Town, Exuma",
    "value": "GGT"
  },
  {
    "label": "Noumerate Airport Ghardaia, Ghardaia",
    "value": "GHA"
  },
  {
    "label": "Governors Harbour Airport Governor Harbour, Central Eleuthera",
    "value": "GHB"
  },
  {
    "label": "Ghat Airport Ghat, Awbari",
    "value": "GHT"
  },
  {
    "label": "Gibraltar Airport Gibraltar, ",
    "value": "GIB"
  },
  {
    "label": "Boigu Island Airport Kubin Village, Queensland",
    "value": "GIC"
  },
  {
    "label": "Rio de Janeiro-Antonio Carlos Jobim Internationa Rio de Janeiro, Rio de Janeiro",
    "value": "GIG"
  },
  {
    "label": "Gilgit Airport Gilgit, Northern Areas",
    "value": "GIL"
  },
  {
    "label": "Gisborne Airport Gisborne, Gisborne",
    "value": "GIS"
  },
  {
    "label": "Gizan Airport Jizan, Jizan",
    "value": "GIZ"
  },
  {
    "label": "Guanaja Airport Guanaja, Islas de la Bahía",
    "value": "GJA"
  },
  {
    "label": "Taher Airport Jijel, Jijel",
    "value": "GJL"
  },
  {
    "label": "Walker Field Airport Grand Junction, Colorado",
    "value": "GJT"
  },
  {
    "label": "Goroka Airport Goroka, Eastern Highlands",
    "value": "GKA"
  },
  {
    "label": "Glasgow International Airport Paisley, Scotland",
    "value": "GLA"
  },
  {
    "label": "Golfito Airport Palmar Sur, Puntarenas",
    "value": "GLF"
  },
  {
    "label": "Mid Delta Regional Airport Greenville, Mississippi",
    "value": "GLH"
  },
  {
    "label": "Galcaio Airport Gaalkacyo, Mudug",
    "value": "GLK"
  },
  {
    "label": "Guelmim Goulimime, Guelmim",
    "value": "GLN"
  },
  {
    "label": "Gloucestershire Airport Cheltenham, England",
    "value": "GLO"
  },
  {
    "label": "Gladstone Airport Gladstone, Queensland",
    "value": "GLT"
  },
  {
    "label": "Golovin Golovin, Alaska",
    "value": "GLV"
  },
  {
    "label": "Gemena Airport Gemena, Democratic Republic of",
    "value": "GMA"
  },
  {
    "label": " Gambela, Ilubabor",
    "value": "GMB"
  },
  {
    "label": "Gimpo International Airport Seoul, Seoul",
    "value": "GMP"
  },
  {
    "label": "Gambier Is Gambier Is, Windward Islands",
    "value": "GMR"
  },
  {
    "label": "La Gomera Airport Alajeró, Canary Islands",
    "value": "GMZ"
  },
  {
    "label": "St Geoirs Airport Sillans, Rhone-Alpes",
    "value": "GNB"
  },
  {
    "label": "Point Salines International Airport Grenada, Saint George",
    "value": "GND"
  },
  {
    "label": "Alaska Goodnews Bay, Alaska",
    "value": "GNU"
  },
  {
    "label": "Gainesville Regional Airport Gainesville, Florida",
    "value": "GNV"
  },
  {
    "label": "Genoa Cristoforo Colombo Airport Genoa, Liguria",
    "value": "GOA"
  },
  {
    "label": "Godthaab Airport Nuuk, Vestgronland",
    "value": "GOH"
  },
  {
    "label": "Dabolim Airport Vasco Da Gama, Goa",
    "value": "GOI"
  },
  {
    "label": "Strigino Airport Dzerzinsk, Nizhegorodskaya Oblast",
    "value": "GOJ"
  },
  {
    "label": "Goma International Airport Goma, Democratic Republic of",
    "value": "GOM"
  },
  {
    "label": "Gorakhpur Gorakhpur, Bihar",
    "value": "GOP"
  },
  {
    "label": "Golmud Airport Golmud, Qinghai",
    "value": "GOQ"
  },
  {
    "label": "Gothenburg Airport Härryda, Vastra Gotaland",
    "value": "GOT"
  },
  {
    "label": "Garoua Airport Garoua, Nord",
    "value": "GOU"
  },
  {
    "label": "Gove Aerodrome Gove, Northern Territory",
    "value": "GOV"
  },
  {
    "label": "Araxos Airport Lakkopetra, Dytiki Ellada",
    "value": "GPA"
  },
  {
    "label": "Guapi Airport Guapí, Cauca",
    "value": "GPI"
  },
  {
    "label": "Seymour Airport Puerto Ayora, Galapagos",
    "value": "GPS"
  },
  {
    "label": "Gulfport Biloxi Regional Airport Gulfport, Mississippi",
    "value": "GPT"
  },
  {
    "label": "Austin Straubel International Airport Green Bay, Wisconsin",
    "value": "GRB"
  },
  {
    "label": "P W Botha Airport George, Western Cape",
    "value": "GRJ"
  },
  {
    "label": "Killeen-Fort Hood Regional Airport Killeen, Texas",
    "value": "GRK"
  },
  {
    "label": "Gerona Airport Vilobí d'Onyar, Catalonia",
    "value": "GRO"
  },
  {
    "label": "Groningen Eelde Eelde, Drenthe",
    "value": "GRQ"
  },
  {
    "label": "Gerald R. Ford International Airport Grand Rapids, Michigan",
    "value": "GRR"
  },
  {
    "label": "Governador Andre Franco Montoro International Ai Guarulhos, Sao Paulo",
    "value": "GRU"
  },
  {
    "label": "Groznyy Airport Groznyy, Chechnya",
    "value": "GRV"
  },
  {
    "label": "Graciosa Airport Graciosa Island, Azores",
    "value": "GRW"
  },
  {
    "label": "Granada Airport Chauchina, Andalucia",
    "value": "GRX"
  },
  {
    "label": "Grimsey Airport Akureyri, Akureyri",
    "value": "GRY"
  },
  {
    "label": "Graz Airport Feldkirchen, Styria",
    "value": "GRZ"
  },
  {
    "label": "Save Airport Kyrkobyn, Vastra Gotaland",
    "value": "GSE"
  },
  {
    "label": " Gheshm, ",
    "value": "GSM"
  },
  {
    "label": "Triad International Airport Greensboro, North Carolina",
    "value": "GSO"
  },
  {
    "label": "Greenville Spartanburg International Airport Greer, South Carolina",
    "value": "GSP"
  },
  {
    "label": "Gustavus Airport Gustavus, Alaska",
    "value": "GST"
  },
  {
    "label": "Binbrook Airport Market Rasen, England",
    "value": "GSY"
  },
  {
    "label": "Solomon Islands Gatokae, ",
    "value": "GTA"
  },
  {
    "label": "Groote Eylandt Airport Darwin, Northern Territory",
    "value": "GTE"
  },
  {
    "label": "Great Falls International Airport Great Falls, Montana",
    "value": "GTF"
  },
  {
    "label": "Jalaluddin Airport Gorontalo, Sulawesi Utara",
    "value": "GTO"
  },
  {
    "label": "Golden Triangle Regional Airport Columbus, Mississippi",
    "value": "GTR"
  },
  {
    "label": "Australia Granites, ",
    "value": "GTS"
  },
  {
    "label": "La Aurora Airport Guatemala City, Guatemala",
    "value": "GUA"
  },
  {
    "label": "Gunnison County Airport Gunnison, Colorado",
    "value": "GUC"
  },
  {
    "label": "Antonio B Won Pat International Airport Hagåtña, Guam",
    "value": "GUM"
  },
  {
    "label": "Gurney Airport Alotau, Milne Bay",
    "value": "GUR"
  },
  {
    "label": "Guryev Airport Atyrau, Atyrau",
    "value": "GUW"
  },
  {
    "label": "Geneva Airport Geneva, Canton of Geneva",
    "value": "GVA"
  },
  {
    "label": "Governador Valadares Airport Governador Valadares, Minas Gerais",
    "value": "GVR"
  },
  {
    "label": "Gwadar Airport Gawadar, Balochistan",
    "value": "GWD"
  },
  {
    "label": "Gwalior Airport Gwalior, Madhya Pradesh",
    "value": "GWL"
  },
  {
    "label": "Westerland Airport Westerland, Schleswig-Holstein",
    "value": "GWT"
  },
  {
    "label": "Carnmore Airport Carnmore, ",
    "value": "GWY"
  },
  {
    "label": "Sayun Airport Seiyun, Hadramawt",
    "value": "GXF"
  },
  {
    "label": "Negage Airport Negage, Uige",
    "value": "GXG"
  },
  {
    "label": "Guayaramerin Airport Guayaramerín, El Beni",
    "value": "GYA"
  },
  {
    "label": "Azerbaijan Baku, Baki",
    "value": "GYD"
  },
  {
    "label": "Simon Bolivar International Airport Guayaquil, Guayas",
    "value": "GYE"
  },
  {
    "label": "Argyle Airport Argyle, Western Australia",
    "value": "GYL"
  },
  {
    "label": "General Jose Maria Yanez in Airport Guaymas, Sonora",
    "value": "GYM"
  },
  {
    "label": "Santa Genoveva Airport Goiania, Goias",
    "value": "GYN"
  },
  {
    "label": "Nusatupe Airport Gizo, Western",
    "value": "GZO"
  },
  {
    "label": "Gaziantep Airport Oğuzeli, Gaziantep",
    "value": "GZT"
  },
  {
    "label": "Hasvik Airport Hasvik, Finnmark Fylke",
    "value": "HAA"
  },
  {
    "label": "Hachijojima Airport Hachijo-machi, Tokyo Prefecture",
    "value": "HAC"
  },
  {
    "label": "Halmstad Airport Hamstad, Halland",
    "value": "HAD"
  },
  {
    "label": "Havasupai Havasupai, Arizona",
    "value": "HAE"
  },
  {
    "label": "Moroni Hahaia Airport Hahaia, Grande Comore",
    "value": "HAH"
  },
  {
    "label": "Hannover International Airport Langenhagen, Lower Saxony",
    "value": "HAJ"
  },
  {
    "label": "Haikou Airport Haikou, Hainan",
    "value": "HAK"
  },
  {
    "label": "Hamburg Airport Hamburg, Hamburg",
    "value": "HAM"
  },
  {
    "label": "Noi Bai Airport Hanoi, Ha Noi",
    "value": "HAN"
  },
  {
    "label": "Hanimadu Hanimaadhoo, Haa Dhaalu",
    "value": "HAQ"
  },
  {
    "label": "Hail Airport Ha'il, Hail",
    "value": "HAS"
  },
  {
    "label": "Haugesund Karmoy Airport Avaldsnes, Rogaland Fylke",
    "value": "HAU"
  },
  {
    "label": "Jose Marti International Airport Wajay, Ciudad de la Habana",
    "value": "HAV"
  },
  {
    "label": "Hobart International Airport Hobart, Tasmania",
    "value": "HBA"
  },
  {
    "label": "Borg El Arab International Airport Alexandria, Al Iskandariyah",
    "value": "HBE"
  },
  {
    "label": "Saudi Arabia Hafr Albatin, ",
    "value": "HBT"
  },
  {
    "label": "India Hubli, Karnataka",
    "value": "HBX"
  },
  {
    "label": "Hengchun Airport Hengchun, Taiwan Province",
    "value": "HCN"
  },
  {
    "label": "Alaska Holy Cross, Alaska",
    "value": "HCR"
  },
  {
    "label": "Heidelberg Airport Heidelberg, Baden-Wurttemberg",
    "value": "HDB"
  },
  {
    "label": "Hyderabad Airport Hyderabad, Sindh",
    "value": "HDD"
  },
  {
    "label": "Heringsdorf Heringsdorf, Mecklenburg-Vorpommern",
    "value": "HDF"
  },
  {
    "label": "Hamadan Airport Hamadan, Hamadan",
    "value": "HDM"
  },
  {
    "label": "Yampa Valley Airport Hayden, Colorado",
    "value": "HDN"
  },
  {
    "label": "Hoedspruit Afs Airport Phalaborwa, Limpopo",
    "value": "HDS"
  },
  {
    "label": "Hat Yai International Airport Hat Yai, Songkhla",
    "value": "HDY"
  },
  {
    "label": "Herat Airport Herat, Herat",
    "value": "HEA"
  },
  {
    "label": "Heho Airport Heho, Shan State",
    "value": "HEH"
  },
  {
    "label": "Heide-Busum Airport Heide-Buesum, Schleswig-Holstein",
    "value": "HEI"
  },
  {
    "label": "Heihe Airport Heihe, Heilongjiang",
    "value": "HEK"
  },
  {
    "label": "Helsinki Vantaa Airport Vantaa, Southern Finland",
    "value": "HEL"
  },
  {
    "label": "Iraklion Airport Iraklio, Kriti",
    "value": "HER"
  },
  {
    "label": "Huhehaote Airport Hohhot, Nei Mongol",
    "value": "HET"
  },
  {
    "label": "U Michaeli Airport Hefa, H'efa",
    "value": "HFA"
  },
  {
    "label": "Hefei-Luogang Airport Hefei, Anhui",
    "value": "HFE"
  },
  {
    "label": "Hagfors Airport Hagfors, ",
    "value": "HFS"
  },
  {
    "label": "Hammerfest Airport Hammerfest, Finnmark Fylke",
    "value": "HFT"
  },
  {
    "label": "Hargeisa Airport Hargeysa, Woqooyi Galbeed",
    "value": "HGA"
  },
  {
    "label": "Hughenden Aerodrome Hughenden, Queensland",
    "value": "HGD"
  },
  {
    "label": "Jianoiao Airport Hangzhou, Zhejiang",
    "value": "HGH"
  },
  {
    "label": "Germany Helgoland, null",
    "value": "HGL"
  },
  {
    "label": "Mae Hongson Airport Mae Hong Son, Mae Hong Son",
    "value": "HGN"
  },
  {
    "label": "Mount Hagen Airport Mount Hagen, Western Highlands",
    "value": "HGU"
  },
  {
    "label": "Hilton Head Airport Hilton Head Island, South Carolina",
    "value": "HHH"
  },
  {
    "label": "Frankfurt-Hahn Airport Dickenschied, Rheinland-Pfalz",
    "value": "HHN"
  },
  {
    "label": "Hua Hin Airport Hua Hin, Kalasin",
    "value": "HHQ"
  },
  {
    "label": "French Polynesia Hikueru, Tuamotu-Gambier",
    "value": "HHZ"
  },
  {
    "label": "Chisholm Hibbing Airport Hibbing, Minnesota",
    "value": "HIB"
  },
  {
    "label": "Horn Island Horn Island, Queensland",
    "value": "HID"
  },
  {
    "label": "Hiroshima Airport Mihara-shi, Hiroshima Prefecture",
    "value": "HIJ"
  },
  {
    "label": " Shillavo, ",
    "value": "HIL"
  },
  {
    "label": "Sacheon Airport Sacheon-Si, Gyeongsangnam-Do",
    "value": "HIN"
  },
  {
    "label": "Henderson Airport Honiara, Guadalcanal",
    "value": "HIR"
  },
  {
    "label": "Hayman Island Airport Hayman Island, Queensland",
    "value": "HIS"
  },
  {
    "label": "Zhi Jiang Zhi Jiang, Hunan",
    "value": "HJJ"
  },
  {
    "label": "Khajuraho Airport Khajuraho, Madhya Pradesh",
    "value": "HJR"
  },
  {
    "label": "Healy Lake Airport Healy Lake, Alaska",
    "value": "HKB"
  },
  {
    "label": "Hakodate Airport Hakodate-shi, Hokkaido Prefecture",
    "value": "HKD"
  },
  {
    "label": "Hong Kong International Airport Hong Kong, Hong Kong Island",
    "value": "HKG"
  },
  {
    "label": "Hokitika Airport Hokitika, West Coast",
    "value": "HKK"
  },
  {
    "label": "Hoskins Airport Kimbe, West New Britain",
    "value": "HKN"
  },
  {
    "label": "Phuket International Airport Thalang, Phuket",
    "value": "HKT"
  },
  {
    "label": "Lanseria Airport Johannesburg, Gauteng",
    "value": "HLA"
  },
  {
    "label": "Hailar Hailar, Nei Mongol",
    "value": "HLD"
  },
  {
    "label": "Ulanhot Airport Ulan Hot, Nei Mongol",
    "value": "HLH"
  },
  {
    "label": "Helena Regional Airport Helena, Montana",
    "value": "HLN"
  },
  {
    "label": "Holyhead Airport Holyhead, Wales",
    "value": "HLY"
  },
  {
    "label": "Hamilton Airport Hamilton, Waikato",
    "value": "HLZ"
  },
  {
    "label": "Khanty-Nansiysk Khanty-Mansiysk, Khanty-Mansiyskiy Avtonomnyy Okr",
    "value": "HMA"
  },
  {
    "label": "Oued Irara Airport Ouargla, Ouargla",
    "value": "HME"
  },
  {
    "label": "Gen Ignacio P Garcia International Airport Hermosillo, Sonora",
    "value": "HMO"
  },
  {
    "label": "Sweden Hemavan, null",
    "value": "HMV"
  },
  {
    "label": "Hanamaki Airport Hanamaki-shi, Iwate Prefecture",
    "value": "HNA"
  },
  {
    "label": "Tokyo International Airport Tokyo, Tokyo Prefecture",
    "value": "HND"
  },
  {
    "label": "Hoonah Airport Hoonah, Alaska",
    "value": "HNH"
  },
  {
    "label": "Honolulu International Airport Honolulu, Hawaii",
    "value": "HNL"
  },
  {
    "label": "Hana Airport Hana, Hawaii",
    "value": "HNM"
  },
  {
    "label": "Haines Airport Haines, Alaska",
    "value": "HNS"
  },
  {
    "label": "Lea County Regional Airport Hobbs, New Mexico",
    "value": "HOB"
  },
  {
    "label": "Hodeidah Airport Al Hudaydah, Al Hudaydah",
    "value": "HOD"
  },
  {
    "label": "Houeisay Houeisay, Houaphan",
    "value": "HOE"
  },
  {
    "label": "Saudi Arabia Alahsa, ",
    "value": "HOF"
  },
  {
    "label": "Holguin Airport San Pedro de Cacocum, Holguin",
    "value": "HOG"
  },
  {
    "label": "Hohenems Airport Hohenems, Vorarlberg",
    "value": "HOH"
  },
  {
    "label": "Hao Airport Papeete, Tuamotu-Gambier",
    "value": "HOI"
  },
  {
    "label": "Homer Airport Homer, Alaska",
    "value": "HOM"
  },
  {
    "label": "Howes Huron, South Dakota",
    "value": "HON"
  },
  {
    "label": "Hof-Plauen Airport Hof, Bavaria",
    "value": "HOQ"
  },
  {
    "label": "Horta Airport Horta, Azores",
    "value": "HOR"
  },
  {
    "label": "William P Hobby Airport Houston, Texas",
    "value": "HOU"
  },
  {
    "label": "Hovden Airport Hovdebygda, More og Romsdal",
    "value": "HOV"
  },
  {
    "label": "Salote Pilolevu Airport Pangai, Ha'apai",
    "value": "HPA"
  },
  {
    "label": "Hooper Bay Airport Hooper Bay, Alaska",
    "value": "HPB"
  },
  {
    "label": "Hai Phong Cat Bi Airport Häi Phòng, Hai Phong",
    "value": "HPH"
  },
  {
    "label": "Westchester County Airport Purchase, New York",
    "value": "HPN"
  },
  {
    "label": "Harbin Yangjiagang Airport Harbin, Heilongjiang",
    "value": "HRB"
  },
  {
    "label": "Harare International Airport Harare, Harare",
    "value": "HRE"
  },
  {
    "label": "Hurghada Airport Bor Safajah, Al Bahr al Ahmar",
    "value": "HRG"
  },
  {
    "label": "Kharkov Airport Kharkiv, Kharkivs´ka Oblast´",
    "value": "HRK"
  },
  {
    "label": "Grande Valley International Airport Harlingen, Texas",
    "value": "HRL"
  },
  {
    "label": "Linton-On-Ouse Harrogate, England",
    "value": "HRT"
  },
  {
    "label": "Saga Airport Saga, Tokyo Prefecture",
    "value": "HSG"
  },
  {
    "label": "Alaska Huslia, Alaska",
    "value": "HSL"
  },
  {
    "label": "Zhoushan Airport Shenjiamen Town, Zhejiang",
    "value": "HSN"
  },
  {
    "label": "Huntsville International Airport Huntsville, Alabama",
    "value": "HSV"
  },
  {
    "label": "Chita Airport Chita, Chitinskaya Oblast",
    "value": "HTA"
  },
  {
    "label": "Hatanga Airport Dudinka, Krasnoyarskiy Kray",
    "value": "HTG"
  },
  {
    "label": "Hamilton Island Airport Hamilton Island, Queensland",
    "value": "HTI"
  },
  {
    "label": "Hotan Hotan, 新疆维吾尔自治区",
    "value": "HTN"
  },
  {
    "label": "Tri State Walker Long Field Airport Huntington, West Virginia",
    "value": "HTS"
  },
  {
    "label": "Huahine Airport Papeete, Leeward Islands",
    "value": "HUH"
  },
  {
    "label": "Hue-Phu Bai Airport Hue, Thura Thien-Hue",
    "value": "HUI"
  },
  {
    "label": "Hwmlien Airport Hualien City, Taiwan Province",
    "value": "HUN"
  },
  {
    "label": "Hon Airport Houn, Al Jufrah",
    "value": "HUQ"
  },
  {
    "label": "Hughes Hughes, Alaska",
    "value": "HUS"
  },
  {
    "label": "Hudiksvall Airport Hudiksvall, Gavleborg",
    "value": "HUV"
  },
  {
    "label": "Bahias de Huatulco International Airport Santo Domingo de Morelos, Oaxaca",
    "value": "HUX"
  },
  {
    "label": "Humberside International Airport Ulceby, England",
    "value": "HUY"
  },
  {
    "label": "Huizhou Huizhou, Guangdong",
    "value": "HUZ"
  },
  {
    "label": "Analalava Airport Analalava, Mahajanga",
    "value": "HVA"
  },
  {
    "label": "Hervey Bay Airport Hervey Bay, Queensland",
    "value": "HVB"
  },
  {
    "label": "Mongolia Khovd, Hovd",
    "value": "HVD"
  },
  {
    "label": "Valan Airport Honningsvåg, Finnmark Fylke",
    "value": "HVG"
  },
  {
    "label": "Tweed New Haven Airport East Haven, Connecticut",
    "value": "HVN"
  },
  {
    "label": "Havre City-County Airport Havre, Montana",
    "value": "HVR"
  },
  {
    "label": "Barnstable Boardman Polando Airport Hyannis, Massachusetts",
    "value": "HYA"
  },
  {
    "label": "Begumpet Airport Hyderabad, Andhra Pradesh",
    "value": "HYD"
  },
  {
    "label": "Alaska Hydaburg, Alaska",
    "value": "HYG"
  },
  {
    "label": "SPB Hollis, Alaska",
    "value": "HYL"
  },
  {
    "label": " Huangyan, Zhejiang",
    "value": "HYN"
  },
  {
    "label": "Hays Municipal Airport Hays, Kansas",
    "value": "HYS"
  },
  {
    "label": "Hanzhong Airport Hanzhong, Shaanxi",
    "value": "HZG"
  },
  {
    "label": "Liping Liping City, 陝西省",
    "value": "HZH"
  },
  {
    "label": "Russia Igarka, Krasnoyarskiy Kray",
    "value": "IAA"
  },
  {
    "label": "Dulles International Airport Washington, Virginia",
    "value": "IAD"
  },
  {
    "label": "Niagara Falls International Airport Niagara Falls, New York",
    "value": "IAG"
  },
  {
    "label": "George Bush Intercontinental Airport Houston, Texas",
    "value": "IAH"
  },
  {
    "label": "In Amenas Airport Illizi, Illizi",
    "value": "IAM"
  },
  {
    "label": "Kiana Kiana, Alaska",
    "value": "IAN"
  },
  {
    "label": "Iasi North Airport Ilasi, Iasi",
    "value": "IAS"
  },
  {
    "label": "Ibadan Airport Ibadan, Oyo",
    "value": "IBA"
  },
  {
    "label": "Perales Airport Ibague, Tolima",
    "value": "IBE"
  },
  {
    "label": "Ibiza Airport San José, Balearic Islands",
    "value": "IBZ"
  },
  {
    "label": "Cicia Airport Cicia, Eastern",
    "value": "ICI"
  },
  {
    "label": "New Incheon International Airport Incheon, Incheon",
    "value": "ICN"
  },
  {
    "label": "Wichita Mid-Continent Airport Wichita, Kansas",
    "value": "ICT"
  },
  {
    "label": "Fanning Field Airport Idaho Falls, Idaho",
    "value": "IDA"
  },
  {
    "label": "Devi Ahilyabai Holkar International Airport Indore, Madhya Pradesh",
    "value": "IDR"
  },
  {
    "label": "Babimost Airport Babimost, Lubusz",
    "value": "IEG"
  },
  {
    "label": "Zhulyany Airport Kiev, Kyyivs´ka Oblast´",
    "value": "IEV"
  },
  {
    "label": "Isafjordur Airport Isafjordur, Isafjordur",
    "value": "IFJ"
  },
  {
    "label": "Esfahan International Airport Esfahan, Esfahan",
    "value": "IFN"
  },
  {
    "label": "Ivano-Frankovsk Airport Ivano-Frankivs'k, Ivano-Frankivs´ka Oblast´",
    "value": "IFO"
  },
  {
    "label": "Laughlin-Bullhead International Airport Bullhead City, Arizona",
    "value": "IFP"
  },
  {
    "label": "Great Inagua Airport Matthew Town, Inagua",
    "value": "IGA"
  },
  {
    "label": "Igiugig Igiugig, Alaska",
    "value": "IGG"
  },
  {
    "label": "Kingman Airport Kingman, Arizona",
    "value": "IGM"
  },
  {
    "label": "Cataratas del Iguazu Airport Puerto Esperanza, Misiones",
    "value": "IGR"
  },
  {
    "label": "Ingolstadt-Manching Ingolstadt-Manching, Bavaria",
    "value": "IGS"
  },
  {
    "label": "Cataratas International Airport Foz do Iguacu, Parana",
    "value": "IGU"
  },
  {
    "label": "Iran Iran Shahr, ",
    "value": "IHR"
  },
  {
    "label": "Iran Ilaam, ",
    "value": "IIL"
  },
  {
    "label": "Russia Izhevsk, Udmurtiya",
    "value": "IJK"
  },
  {
    "label": "Imam Khomeini International Airport Tehran, Tehran",
    "value": "IKA"
  },
  {
    "label": "Nikolski Nikolski, Alaska",
    "value": "IKO"
  },
  {
    "label": "Tiksi Airport Tiksi, ",
    "value": "IKS"
  },
  {
    "label": "Irkutsk Southeast Airport Irkutsk, Irkutskaya Oblast",
    "value": "IKT"
  },
  {
    "label": "Ilford Airport Nelson House, Manitoba",
    "value": "ILF"
  },
  {
    "label": "Iliamna Airport Iliamna, Alaska",
    "value": "ILI"
  },
  {
    "label": "Wilmington International Airport Wilmington, North Carolina",
    "value": "ILM"
  },
  {
    "label": "Airborne Airpark Wilmington, Ohio",
    "value": "ILN"
  },
  {
    "label": "Iloilo Airport Iloilo, Western Visayas",
    "value": "ILO"
  },
  {
    "label": "Moue Airport Vao, Sud",
    "value": "ILP"
  },
  {
    "label": "Ilorin Airport Ilorin, Kwara",
    "value": "ILR"
  },
  {
    "label": "Islay Airport Glenegedale, Scotland",
    "value": "ILY"
  },
  {
    "label": "Kotesovo Airport Bytča, Zilinsky",
    "value": "ILZ"
  },
  {
    "label": "Imphal Airport Lilong (Imphal West), Manipur",
    "value": "IMF"
  },
  {
    "label": "Nepal Simikot, Midwest",
    "value": "IMK"
  },
  {
    "label": "Prefeito Renato Moreira Airport Imperatriz, Maranhao",
    "value": "IMP"
  },
  {
    "label": "Ford Airport Kingsford, Michigan",
    "value": "IMT"
  },
  {
    "label": "Yinchuan Airport Yinchuan, Ningxia",
    "value": "INC"
  },
  {
    "label": "Indianapolis International Airport Indianapolis, Indiana",
    "value": "IND"
  },
  {
    "label": "Inhambane Airport Inhambane, Inhambane",
    "value": "INH"
  },
  {
    "label": "Nis Airport Nis, Nishava",
    "value": "INI"
  },
  {
    "label": "Falls International Airport International Falls, Minnesota",
    "value": "INL"
  },
  {
    "label": "Innsbruck Airport Innsbruck, Tyrol",
    "value": "INN"
  },
  {
    "label": "Smith Reynolds Airport Winston-Salem, North Carolina",
    "value": "INT"
  },
  {
    "label": "Nauru International Airport Yaren, Yaren",
    "value": "INU"
  },
  {
    "label": "Inverness Airport Inverness, Scotland",
    "value": "INV"
  },
  {
    "label": "In Salah Airport In Salah, Tamanghasset",
    "value": "INZ"
  },
  {
    "label": "Ioannina Airport Ioannina, Ipiros",
    "value": "IOA"
  },
  {
    "label": "Ronaldsway Airport Castletown, Isle of Man",
    "value": "IOM"
  },
  {
    "label": "Impfondo Airport Impfondo, Likuoala",
    "value": "ION"
  },
  {
    "label": "Jorge Amado Airport Ilhéus, Bahia",
    "value": "IOS"
  },
  {
    "label": " Ipota, Tafea",
    "value": "IPA"
  },
  {
    "label": "Mataveri International Airport Easter Island, Valparaiso",
    "value": "IPC"
  },
  {
    "label": "Ipoh Airport Ipoh, Perak",
    "value": "IPH"
  },
  {
    "label": "San Luis Airport Ipiales, Narino",
    "value": "IPI"
  },
  {
    "label": "Imperial County Airport Imperial, California",
    "value": "IPL"
  },
  {
    "label": "Usiminas Airport Santana do Paraíso, Minas Gerais",
    "value": "IPN"
  },
  {
    "label": "Williamsport-Lycoming County Airport Montoursville, Pennsylvania",
    "value": "IPT"
  },
  {
    "label": "Ipswich Airport Ipswich, England",
    "value": "IPW"
  },
  {
    "label": "Qiemo Qiemo, Xinjiang",
    "value": "IQM"
  },
  {
    "label": " Qingyang, Jiangsu",
    "value": "IQN"
  },
  {
    "label": "Diego Aracena International Airport Alto Hospicio, Tarapaca",
    "value": "IQQ"
  },
  {
    "label": "Cnl Fap Fran Seca Vignetta Airport Iquitos, Loreto",
    "value": "IQT"
  },
  {
    "label": "Kirakira Kirakira, Makira",
    "value": "IRA"
  },
  {
    "label": "Circle Circle, Alaska",
    "value": "IRC"
  },
  {
    "label": "Capitan Vicente A Almonacid Airport Chamical, La Rioja",
    "value": "IRJ"
  },
  {
    "label": " Irma, Wisconsin",
    "value": "IRM"
  },
  {
    "label": "Mount Isa Airport Mount Isa, Queensland",
    "value": "ISA"
  },
  {
    "label": "Islamabad International Airport Råwalpindi, Punjab",
    "value": "ISB"
  },
  {
    "label": "Saint Mary's Airport Rams Valley, England",
    "value": "ISC"
  },
  {
    "label": "Ishigaki Airport Ishigaki-shi, Okinawa Prefecture",
    "value": "ISG"
  },
  {
    "label": "Sloulin Field International Airport Williston, North Dakota",
    "value": "ISN"
  },
  {
    "label": "Kinston Jetport Stallings Airport Kinston, North Carolina",
    "value": "ISO"
  },
  {
    "label": "Long Island Macarthur Airport Ronkonkoma, New York",
    "value": "ISP"
  },
  {
    "label": "Ataturk Hava Limani Airport Bakırköy, Istanbul",
    "value": "IST"
  },
  {
    "label": "Tompkins County Airport Ithaca, New York",
    "value": "ITH"
  },
  {
    "label": "Osaka International Airport Itami-shi, Hyogo Prefecture",
    "value": "ITM"
  },
  {
    "label": "Hilo International Airport Hilo, Hawaii",
    "value": "ITO"
  },
  {
    "label": "Niue Niue Island, ",
    "value": "IUE"
  },
  {
    "label": "Invercargill Airport Invercargill, Southland",
    "value": "IVC"
  },
  {
    "label": "Ivalo Airport Ivalo, Lapland",
    "value": "IVL"
  },
  {
    "label": "Inverell Airport Inverell, New South Wales",
    "value": "IVR"
  },
  {
    "label": "Gogebic-Iron County Airport Ironwood, Michigan",
    "value": "IWD"
  },
  {
    "label": "Iwami Airport Iwami, Tottori Prefecture",
    "value": "IWJ"
  },
  {
    "label": "Agartala Airport Gandhigram, Tripura",
    "value": "IXA"
  },
  {
    "label": "Bagdogra Airport Bagdogra, West Bengal",
    "value": "IXB"
  },
  {
    "label": "Chandigarh Airport Bhabat, Chandigarh",
    "value": "IXC"
  },
  {
    "label": "Bamrauli Airport Allahabad, Uttar Pradesh",
    "value": "IXD"
  },
  {
    "label": "Mangalore Airport Mulur, Karnataka",
    "value": "IXE"
  },
  {
    "label": "Belgaum Airport Kangrali, Karnataka",
    "value": "IXG"
  },
  {
    "label": "India Lilabari, ",
    "value": "IXI"
  },
  {
    "label": "Jammu Airport Jammu Cantt, Jammu and Kashmir",
    "value": "IXJ"
  },
  {
    "label": "Leh Airport Leh, Jammu and Kashmir",
    "value": "IXL"
  },
  {
    "label": "Madurai Airport Harveypatti, Tamil Nadu",
    "value": "IXM"
  },
  {
    "label": "Birsa Munda Airport Ranchi, Jharkhand",
    "value": "IXR"
  },
  {
    "label": "Kumbhirgram Airport Tarapur, Assam",
    "value": "IXS"
  },
  {
    "label": "Aurangabad Airport Aurangabad, Maharashtra",
    "value": "IXU"
  },
  {
    "label": "Sonari Airport Jamshedpur, Jharkhand",
    "value": "IXW"
  },
  {
    "label": "Kandla Airport Gandhidham, Gujarat",
    "value": "IXY"
  },
  {
    "label": "Vir Savarkar Airport Port Blair, Andaman and Nicobar Islands",
    "value": "IXZ"
  },
  {
    "label": "Inyokern Airport Inyokern, California",
    "value": "IYK"
  },
  {
    "label": "Izumo Airport Hikawa-cho, Shimane Prefecture",
    "value": "IZO"
  },
  {
    "label": "Jackson Hole Airport Jackson, Wyoming",
    "value": "JAC"
  },
  {
    "label": "Sanganer Airport Jaipur, Rajasthan",
    "value": "JAI"
  },
  {
    "label": "Jalapa Airport Jalapa, ",
    "value": "JAL"
  },
  {
    "label": "Jackson International Airport Pearl, Mississippi",
    "value": "JAN"
  },
  {
    "label": "Ilulissat Airport Ilulissat, Vestgronland",
    "value": "JAV"
  },
  {
    "label": "Jacksonville International Airport Jacksonville, Florida",
    "value": "JAX"
  },
  {
    "label": "Joacaba Airport Joaçaba, Santa Catarina",
    "value": "JCB"
  },
  {
    "label": "Christianshab Airport Qasigiannguit, Vestgronland",
    "value": "JCH"
  },
  {
    "label": "Julia Creek Aerodrome Julia Creek, Queensland",
    "value": "JCK"
  },
  {
    "label": "Ceuta Heliport Ceuta, Ciudad Autónoma de Ceuta",
    "value": "JCU"
  },
  {
    "label": "Francisco de Assis Airport Juiz de Fora, Minas Gerais",
    "value": "JDF"
  },
  {
    "label": "Jodhpur Airport Jodhpur, Rajasthan",
    "value": "JDH"
  },
  {
    "label": "Cariri Regional Airport Juazeiro do Norte, Ceara",
    "value": "JDO"
  },
  {
    "label": "Jingde Town Jingdezhen, Jiangxi",
    "value": "JDZ"
  },
  {
    "label": "King Abdul Aziz International Airport Jeddah, Makka",
    "value": "JED"
  },
  {
    "label": "Jefferson City Memorial Airport Holts Summit, Missouri",
    "value": "JEF"
  },
  {
    "label": "Auisiait Airport Aasiaat, Vestgronland",
    "value": "JEG"
  },
  {
    "label": "Jeh Jeh, Jabat",
    "value": "JEJ"
  },
  {
    "label": "Jersey Airport St. Peter, Channel Islands",
    "value": "JER"
  },
  {
    "label": "John F Kennedy International Airport Jamaica, New York",
    "value": "JFK"
  },
  {
    "label": "Paamiut Paamiut, Vestgronland",
    "value": "JFR"
  },
  {
    "label": "Jamnagar Airport Jamnagar, Gujarat",
    "value": "JGA"
  },
  {
    "label": "Grand Canyon Heliport Williams, Arizona",
    "value": "JGC"
  },
  {
    "label": "Jiayuguan Airport Jiayuguan, Gansu",
    "value": "JGN"
  },
  {
    "label": "Godhavn Airport Qeqertarsuaq, Vestgronland",
    "value": "JGO"
  },
  {
    "label": "Ji An/Jing Gang Shan Ji An, Jiangxi",
    "value": "JGS"
  },
  {
    "label": "Sultan Ismail Airport Senai, Johor",
    "value": "JHB"
  },
  {
    "label": "Gasa Jinghong, Yunnan",
    "value": "JHG"
  },
  {
    "label": "Kapalua West Maui Airport Lahaina, Hawaii",
    "value": "JHM"
  },
  {
    "label": "Holsteinsborg Airport Sisimiut, Vestgronland",
    "value": "JHS"
  },
  {
    "label": "Chautauqua County-Jamestown Airport Jamestown, New York",
    "value": "JHW"
  },
  {
    "label": "Djibouti Ambouli Airport Djibouti City, Djibouti",
    "value": "JIB"
  },
  {
    "label": "Jijiga Jijiga, Ogaden",
    "value": "JIJ"
  },
  {
    "label": "Ikaria Island Airport Evdilos, Voreio Aigaio",
    "value": "JIK"
  },
  {
    "label": " Jimma, Kefa",
    "value": "JIM"
  },
  {
    "label": " Jiujiang, Jiangxi",
    "value": "JIU"
  },
  {
    "label": "Jinjiang Jinjiang, Fujian",
    "value": "JJN"
  },
  {
    "label": "Julianehab Heliport Qaqortoq, Vestgronland",
    "value": "JJU"
  },
  {
    "label": "Jonkoping Airport Jonkoping, Jonkoping",
    "value": "JKG"
  },
  {
    "label": "Chios Airport Khios, Voreio Aigaio",
    "value": "JKH"
  },
  {
    "label": "Julian Carroll Airport Jackson, Kentucky",
    "value": "JKL"
  },
  {
    "label": "Landskrona Heliport Landskrona, Skane",
    "value": "JLD"
  },
  {
    "label": "Joplin Regional Airport Webb City, Missouri",
    "value": "JLN"
  },
  {
    "label": "Jabalpur Airport Bilpura, Madhya Pradesh",
    "value": "JLR"
  },
  {
    "label": "Mikonos Airport Mikonos, Notio Aigaio",
    "value": "JMK"
  },
  {
    "label": "Jamestown Municipal Airport Jamestown, North Dakota",
    "value": "JMS"
  },
  {
    "label": "Jiamusi Jiamusi, Heilongjiang",
    "value": "JMU"
  },
  {
    "label": "OR Tambo International Airport Johannesburg, Gauteng",
    "value": "JNB"
  },
  {
    "label": "Nanortalik Airport Nanortalik, Vestgronland",
    "value": "JNN"
  },
  {
    "label": "Narsaq Heliport Narsaq, Vestgronland",
    "value": "JNS"
  },
  {
    "label": "Juneau International Airport Juneau, Alaska",
    "value": "JNU"
  },
  {
    "label": "Naxos Airport Naxos, Notio Aigaio",
    "value": "JNX"
  },
  {
    "label": "Jinzhou Jinzhou, Liaoning",
    "value": "JNZ"
  },
  {
    "label": "Joensuu Airport Ylämylly, Eastern Finland",
    "value": "JOE"
  },
  {
    "label": "Adisucipto Airport Yogyakarta, Yogyakarta",
    "value": "JOG"
  },
  {
    "label": "Lauro Carneiro de Loyola Airport Joinville, Santa Catarina",
    "value": "JOI"
  },
  {
    "label": "Jolo Airport Jolo, Autonomous Region in Muslim Mind",
    "value": "JOL"
  },
  {
    "label": "Presidente Castro Pinto International Airport Santa Rita, Paraiba",
    "value": "JPA"
  },
  {
    "label": "Ji Parana Airport Ji-Paraná, Rondonia",
    "value": "JPR"
  },
  {
    "label": "Greenland Qaarsut, Arkansas",
    "value": "JQA"
  },
  {
    "label": "Downtown Manhattan Heliport New York, New York",
    "value": "JRB"
  },
  {
    "label": "Jorhat Airport Senchoa Gaon, Assam",
    "value": "JRH"
  },
  {
    "label": "Kilimanjaro International Airport Sanya, Kilimanjaro",
    "value": "JRO"
  },
  {
    "label": "Jaisalmer Airport Jaisalmer, Rajasthan",
    "value": "JSA"
  },
  {
    "label": "Sitia Airport Seteia, Kriti",
    "value": "JSH"
  },
  {
    "label": "Skiathos Airport Skiathos, Thessalia",
    "value": "JSI"
  },
  {
    "label": "Jessore Airport Jessore, Khulna",
    "value": "JSR"
  },
  {
    "label": "Johnstown Cambria County Airport Johnstown, Pennsylvania",
    "value": "JST"
  },
  {
    "label": "Maniitsoq Heliport Maitsoq, Vestgronland",
    "value": "JSU"
  },
  {
    "label": "Syros Island Airport Ano Siros, Notio Aigaio",
    "value": "JSY"
  },
  {
    "label": "Santorini Airport Emborion, Notio Aigaio",
    "value": "JTR"
  },
  {
    "label": "Astypalaia Island Airport Astypalaea, Notio Aigaio",
    "value": "JTY"
  },
  {
    "label": "Juba Airport Juba, Bahr al Jabal",
    "value": "JUB"
  },
  {
    "label": "Jujuy Airport Santa Catalina, Jujuy",
    "value": "JUJ"
  },
  {
    "label": "Juliaca Airport Juliaca, Puno",
    "value": "JUL"
  },
  {
    "label": " Jumla, Midwest",
    "value": "JUM"
  },
  {
    "label": "Upernavik Heliport Upernavik, Vestgronland",
    "value": "JUV"
  },
  {
    "label": "Juzhou Juzhou, ",
    "value": "JUZ"
  },
  {
    "label": "Toliara Ankavandra, Toliara",
    "value": "JVA"
  },
  {
    "label": "Jiroft Jiroft, Kerman",
    "value": "JYR"
  },
  {
    "label": "Jyvaskyla Airport Tikkakoski, Western Finland",
    "value": "JYV"
  },
  {
    "label": "Jiu Zhai Huang Long Song Pan, 四川省",
    "value": "JZH"
  },
  {
    "label": "Kariba Airport Kariba, Mashonaland West",
    "value": "KAB"
  },
  {
    "label": "Kamishly Airport Al Qamishli, Al H'asakah",
    "value": "KAC"
  },
  {
    "label": "Kaduna Airport Afaka, Kaduna",
    "value": "KAD"
  },
  {
    "label": "Kajaani Airport Paltaniemi, Oulu Province",
    "value": "KAJ"
  },
  {
    "label": "Kaltag Kaltag, Alaska",
    "value": "KAL"
  },
  {
    "label": "Kano Mallam Aminu International Airport , Kano",
    "value": "KAN"
  },
  {
    "label": "Kuusamo Airport Kuusamo, Oulu Province",
    "value": "KAO"
  },
  {
    "label": "Kaitaia Aerodrome Kaitaia, Northland",
    "value": "KAT"
  },
  {
    "label": "Kawthaung Airport Kawthaung, Ranong",
    "value": "KAW"
  },
  {
    "label": "Kalbarri Kalbarri, Western Australia",
    "value": "KAX"
  },
  {
    "label": "Birch Creek Airport Birch Creek, Alaska",
    "value": "KBC"
  },
  {
    "label": "Kabul International Airport Kabul, Kabul",
    "value": "KBL"
  },
  {
    "label": "Borispol Airport Kiev, Kyyivs´ka Oblast´",
    "value": "KBP"
  },
  {
    "label": "Sultan Ismail Petra Airport Kota Baharu, Kelantan",
    "value": "KBR"
  },
  {
    "label": "Thailand Krabi, Krabi",
    "value": "KBV"
  },
  {
    "label": "Kuqa Kuqa, Xinjiang",
    "value": "KCA"
  },
  {
    "label": "Alaska Coffman Cove, Alaska",
    "value": "KCC"
  },
  {
    "label": "Pakistan Kadanwari, ",
    "value": "KCF"
  },
  {
    "label": "Chignik Fisheries Airport Chignik Lagoon, Alaska",
    "value": "KCG"
  },
  {
    "label": "Kuching Airport Kuching, Sarawak",
    "value": "KCH"
  },
  {
    "label": "Chignik Lagoon Airport Chignik Lagoon, Alaska",
    "value": "KCL"
  },
  {
    "label": "Kahramanmaras Airport Kahramanmaraş, Kahramanmaraş",
    "value": "KCM"
  },
  {
    "label": "Chignik Lake Airport Chignik, Alaska",
    "value": "KCQ"
  },
  {
    "label": "Kochi Airport Nankoku-shi, Kochi Prefecture",
    "value": "KCZ"
  },
  {
    "label": "Kandahar International Airport Alaqadari Daman, Kandahar",
    "value": "KDH"
  },
  {
    "label": "Wolter Monginsidi Airport Kendari, Sulawesi Tenggara",
    "value": "KDI"
  },
  {
    "label": "Kardla East Airport Kerdlya, Hiiumaa",
    "value": "KDL"
  },
  {
    "label": "Kaadedhdhoo Kaadedhdhoo, Guiglo",
    "value": "KDM"
  },
  {
    "label": "Kudadu Kadhdhoo, Baa",
    "value": "KDO"
  },
  {
    "label": "Skardu Airport Skardu, Jammu and Kashmir",
    "value": "KDU"
  },
  {
    "label": "Kandavu Airport Kandavu, Eastern",
    "value": "KDV"
  },
  {
    "label": "Nanwalek Nanwalek, Alaska",
    "value": "KEB"
  },
  {
    "label": "Keflavik International Reykjavik, Keflavik",
    "value": "KEF"
  },
  {
    "label": "Kemerovo Airport Kemerovo, Kemerovskaya Oblast",
    "value": "KEJ"
  },
  {
    "label": "Ekwok Ekwok, Alaska",
    "value": "KEK"
  },
  {
    "label": "Kemi Airport Kemi, Lapland",
    "value": "KEM"
  },
  {
    "label": " Nepalganj, Midwest",
    "value": "KEP"
  },
  {
    "label": "Kerman Airport Kerman, Kerman",
    "value": "KER"
  },
  {
    "label": "Kengtung Airport Keng Tung, Shan State",
    "value": "KET"
  },
  {
    "label": " Keewaywin, ",
    "value": "KEW"
  },
  {
    "label": "Kiffa Airport Kiffa, Assaba",
    "value": "KFA"
  },
  {
    "label": " False Pass, Alaska",
    "value": "KFP"
  },
  {
    "label": "Kananga Airport Kananga, Democratic Republic of",
    "value": "KGA"
  },
  {
    "label": "Kingscote Airport Kingscote, South Australia",
    "value": "KGC"
  },
  {
    "label": "Kaliningradskaya Oblast Kaliningrad, Kaliningradskaya Oblast",
    "value": "KGD"
  },
  {
    "label": "Kagau Kagau, Sabah",
    "value": "KGE"
  },
  {
    "label": "Karaganda Airport Qaraghandy, Qaraghandy",
    "value": "KGF"
  },
  {
    "label": "Kalgoorlie Bolder Airport Kalgoorlie, Western Australia",
    "value": "KGI"
  },
  {
    "label": "Koliganek Airport New Koliganek, Alaska",
    "value": "KGK"
  },
  {
    "label": "Kigali Airport Kigali, Kigali Province",
    "value": "KGL"
  },
  {
    "label": "Kogalym International Kogalym, Khanty-Mansiyskiy Avtonomnyy Okr",
    "value": "KGP"
  },
  {
    "label": "Kos Airport Antimacheia, Notio Aigaio",
    "value": "KGS"
  },
  {
    "label": "Alaska Grayling, Alaska",
    "value": "KGX"
  },
  {
    "label": "Kashi Airport Kashi, Xinjiang",
    "value": "KHG"
  },
  {
    "label": "Kaohsiung International Airport Kaohsiung City, Kaohsiung City",
    "value": "KHH"
  },
  {
    "label": "Karachi Civil Airport Karachi, Sindh",
    "value": "KHI"
  },
  {
    "label": " Khamti, ",
    "value": "KHM"
  },
  {
    "label": "Nanchang New Airport Nanchang, Jiangxi",
    "value": "KHN"
  },
  {
    "label": "Khasab Airport Khasab, Musandam",
    "value": "KHS"
  },
  {
    "label": "Khabarovsk Northeast Airport Khabarovsk, Khabarovskiy Kray",
    "value": "KHV"
  },
  {
    "label": "Iran Khoy, Azarbayjan-e Gharbi",
    "value": "KHY"
  },
  {
    "label": "French Polynesia Kauehi, Tuamotu-Gambier",
    "value": "KHZ"
  },
  {
    "label": "Kristianstad Airport Tollarp, Skane",
    "value": "KID"
  },
  {
    "label": "Kingfisher Lake Airport Casummit Lake, Ontario",
    "value": "KIF"
  },
  {
    "label": "Kish Island Airport Bandar Abbas, Hormozgan",
    "value": "KIH"
  },
  {
    "label": "Niigata Airport Niigata-shi, Niigata Prefecture",
    "value": "KIJ"
  },
  {
    "label": "Kirkuk Airport Kirkuk, At Ta'mim",
    "value": "KIK"
  },
  {
    "label": "B J Vorster Airport Kimberley, Northern Cape",
    "value": "KIM"
  },
  {
    "label": "Norman Manley Kingston, Kingston St John",
    "value": "KIN"
  },
  {
    "label": "Kerry County Airport Farranfore, ",
    "value": "KIR"
  },
  {
    "label": "Kisumu Airport Kisumu, Nyanza",
    "value": "KIS"
  },
  {
    "label": "Kithira Airport Potamos Kythiron, Attiki",
    "value": "KIT"
  },
  {
    "label": "Kishinev Southeast Airport Chisinau, Chisinau",
    "value": "KIV"
  },
  {
    "label": "Kansai International Airport Tajiri-cho, Osaka Prefecture",
    "value": "KIX"
  },
  {
    "label": "Yelovaya Airport Kansk, Krasnoyarskiy Kray",
    "value": "KJA"
  },
  {
    "label": "Koyuk Koyuk, Alaska",
    "value": "KKA"
  },
  {
    "label": "Kitoi Seaplane Base Kitoi Bay, Alaska",
    "value": "KKB"
  },
  {
    "label": "Khon Kaen Airport Khon Kaen, Khon Kaen",
    "value": "KKC"
  },
  {
    "label": "Northern Kokoda, Northern",
    "value": "KKD"
  },
  {
    "label": "Bay of Islands Airport Kerikeri, Northland",
    "value": "KKE"
  },
  {
    "label": "Alaska Kongiganak, Alaska",
    "value": "KKH"
  },
  {
    "label": "Akiachak Akiachak, Alaska",
    "value": "KKI"
  },
  {
    "label": "New Kitakyushu Airport Kita Kyushu, Kagoshima Prefecture",
    "value": "KKJ"
  },
  {
    "label": "Kirkenes Hoybuktmoen Airport Hesseng, Finnmark Fylke",
    "value": "KKN"
  },
  {
    "label": "French Polynesia Kaukura Atoll, Tuamotu-Gambier",
    "value": "KKR"
  },
  {
    "label": "Ekuk Airport Clarks Point, Alaska",
    "value": "KKU"
  },
  {
    "label": "Kalskag Kalskag, Alaska",
    "value": "KLG"
  },
  {
    "label": "Kolhapur Airport Kolhapur, Maharashtra",
    "value": "KLH"
  },
  {
    "label": "Levelock Levelock, Alaska",
    "value": "KLL"
  },
  {
    "label": "Larsen Bay Larsen Bay, Alaska",
    "value": "KLN"
  },
  {
    "label": "Kalib0 Airport Kalibo, Western Visayas",
    "value": "KLO"
  },
  {
    "label": "Kalmar Airport Kalmar, Kalmar",
    "value": "KLR"
  },
  {
    "label": "Klagenfurt Airport Celovec, Carinthia",
    "value": "KLU"
  },
  {
    "label": "Karlovy Vary Airport Carlsbad, Karlovarský",
    "value": "KLV"
  },
  {
    "label": "Klawock Seaplane Base Klawock, Alaska",
    "value": "KLW"
  },
  {
    "label": "Kalamata Airport Kalamae, Peloponnisos",
    "value": "KLX"
  },
  {
    "label": "Kerema Airport Kerema, Gulf",
    "value": "KMA"
  },
  {
    "label": "King Khalid Military King Khalid Mil. City, Alaska",
    "value": "KMC"
  },
  {
    "label": "Kamembe Airport Kamembe, Province de l'Ouest",
    "value": "KME"
  },
  {
    "label": "Wuchia Pa Airport Kunming, Yunnan",
    "value": "KMG"
  },
  {
    "label": "Miyazaki Airport Miyazaki-shi, Miyazaki Prefecture",
    "value": "KMI"
  },
  {
    "label": "Kumamoto Airport Kikuyo-machi, Kumamoto Prefecture",
    "value": "KMJ"
  },
  {
    "label": "Manokotak Manokotak, Alaska",
    "value": "KMO"
  },
  {
    "label": "Komatsu Airport Komatsu-shi, Ishikawa Prefecture",
    "value": "KMQ"
  },
  {
    "label": "Kumasi Airport New Tafo, Ashanti",
    "value": "KMS"
  },
  {
    "label": "Kalemyo Airport Kalemyo, Sagaing",
    "value": "KMV"
  },
  {
    "label": "Moser Bay Moser Bay, Alaska",
    "value": "KMY"
  },
  {
    "label": "Kindu Airport Kindu, Democratic Republic of",
    "value": "KND"
  },
  {
    "label": " Kings Lynn, England",
    "value": "KNF"
  },
  {
    "label": "West Irian Jaya Kaimana, West Irian Jaya",
    "value": "KNG"
  },
  {
    "label": "Kinmen County Kinmen, Fujian",
    "value": "KNH"
  },
  {
    "label": " Kakhonak, Alaska",
    "value": "KNK"
  },
  {
    "label": " Kone, Nord",
    "value": "KNQ"
  },
  {
    "label": "King Island Airport King Island, Tasmania",
    "value": "KNS"
  },
  {
    "label": "Kanpur Airport Kanpur, Uttar Pradesh",
    "value": "KNU"
  },
  {
    "label": "New Stuyahok New Stuyahok, Alaska",
    "value": "KNW"
  },
  {
    "label": "Kununurra Airport Durack, Western Australia",
    "value": "KNX"
  },
  {
    "label": "Kailua-Kona International Airport Kailua Kona, Hawaii",
    "value": "KOA"
  },
  {
    "label": " Koumac, Nord",
    "value": "KOC"
  },
  {
    "label": "El Tari Airport Kupang, Nusa Tengarra Timur",
    "value": "KOE"
  },
  {
    "label": "Kirkwall Airport Kirkwall, Scotland",
    "value": "KOI"
  },
  {
    "label": "Kagoshima Airport Kirishima-shi, Kagoshima Prefecture",
    "value": "KOJ"
  },
  {
    "label": "Kruunupyy Airport Kruunupyy, Western Finland",
    "value": "KOK"
  },
  {
    "label": "Nakhon Phanom Airport Nakhon Phanom, Nakhon Phanom",
    "value": "KOP"
  },
  {
    "label": "Kotlik Kotlik, Alaska",
    "value": "KOT"
  },
  {
    "label": " Koulamoutou, Ogooue-Lolo",
    "value": "KOU"
  },
  {
    "label": "Ganzhou Airport Ganzhou, Jiangxi",
    "value": "KOW"
  },
  {
    "label": "Olga Bay Olga Bay, Alaska",
    "value": "KOY"
  },
  {
    "label": "Alaska Ouzinkie, Alaska",
    "value": "KOZ"
  },
  {
    "label": "Point Baker Seaplane Base Point Baker, Alaska",
    "value": "KPB"
  },
  {
    "label": "Port Clarence Coast Guard Station Brevig Mission, Alaska",
    "value": "KPC"
  },
  {
    "label": "Kipnuk Kipnuk, Alaska",
    "value": "KPN"
  },
  {
    "label": "Pohang Airport Pohang-Si, Gyeongsangbuk-Do",
    "value": "KPO"
  },
  {
    "label": "Port Williams Port Williams, Alaska",
    "value": "KPR"
  },
  {
    "label": "Alaska Perryville, Alaska",
    "value": "KPV"
  },
  {
    "label": "Alaska Port Bailey, Alaska",
    "value": "KPY"
  },
  {
    "label": "Akutan Airport Akutan, Alaska",
    "value": "KQA"
  },
  {
    "label": "Kramfors Airport Nyland, Vasternorrland",
    "value": "KRF"
  },
  {
    "label": "Papua New Guinea Kikori, null",
    "value": "KRI"
  },
  {
    "label": "Balice Airport Zabierzów, Małopolskie",
    "value": "KRK"
  },
  {
    "label": "Korla Korla, Xinjiang",
    "value": "KRL"
  },
  {
    "label": "Kiruna Airport Kiruna, Norrbotten",
    "value": "KRN"
  },
  {
    "label": "Karup Airport Kårup, Midtjylland",
    "value": "KRP"
  },
  {
    "label": "Krasnodar-Pashovskiy Airport Krasnodar, Krasnodarskiy Kray",
    "value": "KRR"
  },
  {
    "label": "Kristiansand Airport Kjevic, Vest-Agder Fylke",
    "value": "KRS"
  },
  {
    "label": "Khartoum Airport Khartoum, Al Khartum",
    "value": "KRT"
  },
  {
    "label": "Karamay Airport Karamay, Xinjiang",
    "value": "KRY"
  },
  {
    "label": "Kosrae Island Airport Tofol, Kosrae",
    "value": "KSA"
  },
  {
    "label": "Barca Airport Kosice, Kosicky",
    "value": "KSC"
  },
  {
    "label": "Karlstad Airport Karlstad, Varmland",
    "value": "KSD"
  },
  {
    "label": "Kassel Calden Airport Kalden, Hesse",
    "value": "KSF"
  },
  {
    "label": "Bakhtaran Airport Kermanshah, Kermanshah",
    "value": "KSH"
  },
  {
    "label": "Kasos Airport St. Marina, Notio Aigaio",
    "value": "KSJ"
  },
  {
    "label": "Kassala Airport Kassala, Kassala",
    "value": "KSL"
  },
  {
    "label": "Alaska Saint Marys, Alaska",
    "value": "KSM"
  },
  {
    "label": "Kustanay Airport Qostanay, Qostanay",
    "value": "KSN"
  },
  {
    "label": "Kastoria Airport Argos Orestiko, Dytiki Makedonia",
    "value": "KSO"
  },
  {
    "label": "Karshi South Airport Qarshi, Qashqadaryo",
    "value": "KSQ"
  },
  {
    "label": "Kristiansund Kvernberget Airport Kristiansund Nord, More og Romsdal",
    "value": "KSU"
  },
  {
    "label": "Kars (abandoned) Airport Kars, Kars",
    "value": "KSY"
  },
  {
    "label": "Kotlas Southeast Airport Vel'sk, Arkhangelrskaya Oblast",
    "value": "KSZ"
  },
  {
    "label": "Karratha Airport Karratha, Western Australia",
    "value": "KTA"
  },
  {
    "label": "Alaska Thorne Bay, Alaska",
    "value": "KTB"
  },
  {
    "label": "Kerteh Airport Kerteh, Terengganu",
    "value": "KTE"
  },
  {
    "label": "Tribhuvan International Airport Kathmandu, Central",
    "value": "KTM"
  },
  {
    "label": "Ketchikan International Airport Ketchikan, Alaska",
    "value": "KTN"
  },
  {
    "label": " Teller Mission, Alaska",
    "value": "KTS"
  },
  {
    "label": "Kittila Airport Kittila, Lapland",
    "value": "KTT"
  },
  {
    "label": "Zendek Airport Ożarowice, Sląskie",
    "value": "KTW"
  },
  {
    "label": "Kuantan Airport Gambang, Pahang",
    "value": "KUA"
  },
  {
    "label": " Kudat, Sabah",
    "value": "KUD"
  },
  {
    "label": "Kurumoch Airport Syzran', Samarskaya Oblast",
    "value": "KUF"
  },
  {
    "label": "Australia Kubin Island, ",
    "value": "KUG"
  },
  {
    "label": "Kushiro Airport Kushiro, Hokkaido Prefecture",
    "value": "KUH"
  },
  {
    "label": "Kasigluk Kasigluk, Alaska",
    "value": "KUK"
  },
  {
    "label": "Kuala Lumpur International Airport Sepang, Putrajaya",
    "value": "KUL"
  },
  {
    "label": "Karmilava Airport Kovno, Kauno apskritis",
    "value": "KUN"
  },
  {
    "label": "Kuopio Airport Toivala, Eastern Finland",
    "value": "KUO"
  },
  {
    "label": "Kulusuk Airport Kulusuk, Ostgronland",
    "value": "KUS"
  },
  {
    "label": "Kopitnari Kutaisi, K´ut´aisi",
    "value": "KUT"
  },
  {
    "label": "Bhuntar Airport Bhuntar, Himachal Pradesh",
    "value": "KUU"
  },
  {
    "label": "Gunsan Airport Gunsan-Si, Jeollabuk-Do",
    "value": "KUV"
  },
  {
    "label": "Chrisoupolis Airport Khrysoupolis, Anatoliki Makedonia",
    "value": "KVA"
  },
  {
    "label": "Skovde Airport Väring, Vastra Gotaland",
    "value": "KVB"
  },
  {
    "label": " King Cove, Alaska",
    "value": "KVC"
  },
  {
    "label": "Elisavetpol Gyandzha, Ganca",
    "value": "KVD"
  },
  {
    "label": "Kavieng Airport Kavieng, New Ireland",
    "value": "KVG"
  },
  {
    "label": "Kirovsk Airport Kirovsk, Murmanskaya Oblast",
    "value": "KVK"
  },
  {
    "label": "Kivalina Kivalina, Alaska",
    "value": "KVL"
  },
  {
    "label": "Carpiquet Airport Carpiquet, Basse-Normandie",
    "value": "KVR"
  },
  {
    "label": "Bucholz Army Air Field Kwajalein, Kwajalein",
    "value": "KWA"
  },
  {
    "label": "Guizhou Guiyang, Guizhou",
    "value": "KWE"
  },
  {
    "label": "Kuwait International Airport Kuwait City, Al Farwaniyah",
    "value": "KWI"
  },
  {
    "label": "Gwangju Airport Gwangju, Gwangju",
    "value": "KWJ"
  },
  {
    "label": "Kwigillingok Kwigillingok, Alaska",
    "value": "KWK"
  },
  {
    "label": "Li Chia Tsun Airport Guilin, Guangxi",
    "value": "KWL"
  },
  {
    "label": "Kowanyama Kowanyama, Queensland",
    "value": "KWM"
  },
  {
    "label": "Quinhagak Quinhagak, Alaska",
    "value": "KWN"
  },
  {
    "label": "Village Seaplane Base-West Point West Point, Alaska",
    "value": "KWP"
  },
  {
    "label": "Kwethluk Airport Kwethluk, Alaska",
    "value": "KWT"
  },
  {
    "label": "Kolwezi Airport Kolwezi, Democratic Republic of",
    "value": "KWZ"
  },
  {
    "label": "Kasaan SPB Kasaan, Alaska",
    "value": "KXA"
  },
  {
    "label": "Koro Island Koro Island, Northern",
    "value": "KXF"
  },
  {
    "label": "Komsomolsk South Airport Komsomol'sk-na-Amure, Khabarovskiy Kray",
    "value": "KXK"
  },
  {
    "label": "Katiu Katiu, Tuamotu-Gambier",
    "value": "KXU"
  },
  {
    "label": "Konya Airport Konya, Konya",
    "value": "KYA"
  },
  {
    "label": "Karluk Airport Kodiak, Alaska",
    "value": "KYK"
  },
  {
    "label": "England Milton Keynes, England",
    "value": "KYN"
  },
  {
    "label": "Kyaukpyu Airport Kyaukpyu, Rakhine State",
    "value": "KYP"
  },
  {
    "label": "Kayes Airport Kayes, Kayes",
    "value": "KYS"
  },
  {
    "label": "Koyukuk Koyukuk, Alaska",
    "value": "KYU"
  },
  {
    "label": "Tyva Kyzyl, Tyva",
    "value": "KYZ"
  },
  {
    "label": "Zachar Bay Zachar Bay, Alaska",
    "value": "KZB"
  },
  {
    "label": "Kozani Airport Kozani, Dytiki Makedonia",
    "value": "KZI"
  },
  {
    "label": "Kirbi Airport Zelenodol'sk, Tatarstan",
    "value": "KZN"
  },
  {
    "label": "Kzyl Orda Airport Kzyl-Orda, Qyzylorda",
    "value": "KZO"
  },
  {
    "label": "Kastelorizo Airport Kastelorizo, New York",
    "value": "KZS"
  },
  {
    "label": "Luanda 4 de Fevereiro Airport Luanda, Luanda",
    "value": "LAD"
  },
  {
    "label": "Nadzab Airport Lae, Morobe",
    "value": "LAE"
  },
  {
    "label": "Servel Airport Lannion, Brittany",
    "value": "LAI"
  },
  {
    "label": "Lajes Airport Lages, Santa Catarina",
    "value": "LAJ"
  },
  {
    "label": "Aklavik Airport Hay River, Northwest Territories",
    "value": "LAK"
  },
  {
    "label": "Lansing Capital City Airport Lansing, Michigan",
    "value": "LAN"
  },
  {
    "label": "Laoag International Airport San Nicolas, Ilocos Region",
    "value": "LAO"
  },
  {
    "label": "General Manuel Marquez de Leon International Air La Paz, Baja California Sur",
    "value": "LAP"
  },
  {
    "label": "Al Bayda' Beida, Al Jabal al Akhdar",
    "value": "LAQ"
  },
  {
    "label": "General Brees Field Laramie, Wyoming",
    "value": "LAR"
  },
  {
    "label": "Mccarran International Airport Las Vegas, Nevada",
    "value": "LAS"
  },
  {
    "label": "Lamu Airport Lamu, Coast",
    "value": "LAU"
  },
  {
    "label": "Lawton Municipal Airport Lawton, Oklahoma",
    "value": "LAW"
  },
  {
    "label": "Los Angeles International Airport Los Angeles, California",
    "value": "LAX"
  },
  {
    "label": "Leeds Bradford Airport Leeds, England",
    "value": "LBA"
  },
  {
    "label": "Lubbock International Airport Lubbock, Texas",
    "value": "LBB"
  },
  {
    "label": "Lubeck Airport Lubeque, Schleswig-Holstein",
    "value": "LBC"
  },
  {
    "label": "Khujand Khudzhand, Leninobod",
    "value": "LBD"
  },
  {
    "label": "Westmoreland County Airport Latrobe, Pennsylvania",
    "value": "LBE"
  },
  {
    "label": "Lee Bird Field Airport North Platte, Nebraska",
    "value": "LBF"
  },
  {
    "label": "Mutiara Airport Ende, Nusa Tengarra Timur",
    "value": "LBJ"
  },
  {
    "label": "Liberal Municipal Airport Liberal, Kansas",
    "value": "LBL"
  },
  {
    "label": " Long Banga, ",
    "value": "LBP"
  },
  {
    "label": "Northern Labasa, Northern",
    "value": "LBS"
  },
  {
    "label": "Labuan Airport Victoria, Labuan",
    "value": "LBU"
  },
  {
    "label": "Libreville Leon M Ba Airport Libreville, Estuaire",
    "value": "LBV"
  },
  {
    "label": "Larnaca Airport Larnaca, Rep. Cyprus",
    "value": "LCA"
  },
  {
    "label": "Goloson International Airport La Ceiba, Atlántida",
    "value": "LCE"
  },
  {
    "label": "La Coruna Airport S Esteban, Galicia",
    "value": "LCG"
  },
  {
    "label": "Lake Charles Regional Airport Lake Charles, Louisiana",
    "value": "LCH"
  },
  {
    "label": "Lodz Lublinek Lodz, Woj. Lodzkie",
    "value": "LCJ"
  },
  {
    "label": "Rickenbacker International Airport Columbus, Ohio",
    "value": "LCK"
  },
  {
    "label": "La Chorrera Airport La Chorrera, Amazonas",
    "value": "LCR"
  },
  {
    "label": " Longyan, Fujian",
    "value": "LCX"
  },
  {
    "label": "London City Airport London, England",
    "value": "LCY"
  },
  {
    "label": "Londrina Airport Londrina, Parana",
    "value": "LDB"
  },
  {
    "label": "Ossun Airport Juillan, Midi-Pyrenees",
    "value": "LDE"
  },
  {
    "label": "Leshukonskoye Airport Leshukonskoye, Arkhangelrskaya Oblast",
    "value": "LDG"
  },
  {
    "label": "Lord Howe Island Airport Lord Howe Island, New South Wales",
    "value": "LDH"
  },
  {
    "label": "Lamidanda Airport Lamidanda, Central",
    "value": "LDN"
  },
  {
    "label": "Lahad Datu Airport Lahad Datu, Sabah",
    "value": "LDU"
  },
  {
    "label": "Landivisiau Airport Landivisiau, Brittany",
    "value": "LDV"
  },
  {
    "label": "City of Derry Airport Londonderry, Northern Ireland",
    "value": "LDY"
  },
  {
    "label": "Learmonth Airport Learmonth, Western Australia",
    "value": "LEA"
  },
  {
    "label": "Lebanon Municipal Airport West Lebanon, New Hampshire",
    "value": "LEB"
  },
  {
    "label": "Pulkuvo 2 Airport St. Petersburg, St. Peterburg",
    "value": "LED"
  },
  {
    "label": " Le Havre, Haute-Normandie",
    "value": "LEH"
  },
  {
    "label": "Almeria Airport Almeria, Andalucia",
    "value": "LEI"
  },
  {
    "label": "Leipzig-Halle Airport Schkeuditz, Saxony",
    "value": "LEJ"
  },
  {
    "label": "Aeropuero de Bajio Leon, Castille and Leon",
    "value": "LEN"
  },
  {
    "label": "Leinster Airport Sir Samuel, Western Australia",
    "value": "LER"
  },
  {
    "label": "Gen. A.V. Cobo Leticia, Amazonas",
    "value": "LET"
  },
  {
    "label": " Bureta, ",
    "value": "LEV"
  },
  {
    "label": "Blue Grass Field Lexington, Kentucky",
    "value": "LEX"
  },
  {
    "label": "Lamerd Lamerd, Fars",
    "value": "LFM"
  },
  {
    "label": "Lafayette Regional Airport Lafayette, Louisiana",
    "value": "LFT"
  },
  {
    "label": "Lome Tokoin Airport Lome, Lome",
    "value": "LFW"
  },
  {
    "label": "LaGuardia Airport Flushing, New York",
    "value": "LGA"
  },
  {
    "label": "Long Beach Daugherty Field Airport Long Beach, California",
    "value": "LGB"
  },
  {
    "label": "Bierset Airport Velroux, Liege",
    "value": "LGG"
  },
  {
    "label": "Deadmans Cay Airport Deadmans Cay, Long Island",
    "value": "LGI"
  },
  {
    "label": "Langkawi International Airport Kuah, Perlis",
    "value": "LGK"
  },
  {
    "label": "Long Lellang Long Lellang, ",
    "value": "LGL"
  },
  {
    "label": "Legazpi Airport Daraga, Bicol Region",
    "value": "LGP"
  },
  {
    "label": "Lago Agrio Airport Lago Agrio, Sucumbios",
    "value": "LGQ"
  },
  {
    "label": "London Gatwick Airport Horley, England",
    "value": "LGW"
  },
  {
    "label": "Lahore Airport Lahore, Punjab",
    "value": "LHE"
  },
  {
    "label": "New South Wales Lightning Ridge, New South Wales",
    "value": "LHG"
  },
  {
    "label": "London Heathrow Airport Hounslow, England",
    "value": "LHR"
  },
  {
    "label": "Lanzhou Airport Lanzhou, 甘肃省",
    "value": "LHW"
  },
  {
    "label": "Loyalty Islands Airport Wé, Loyaute",
    "value": "LIF"
  },
  {
    "label": "Bellegarde Airport Limoges, Limousin",
    "value": "LIG"
  },
  {
    "label": "Lihue Airport Lihue, Hawaii",
    "value": "LIH"
  },
  {
    "label": "Lesquin Airport Fretin, Nord-Pas-de-Calais",
    "value": "LIL"
  },
  {
    "label": "Jorge Chavez Airport Ventanilla, Provincia Constitucional del Cal",
    "value": "LIM"
  },
  {
    "label": "Linate Airport Peschiera Borromeo, Lombardy",
    "value": "LIN"
  },
  {
    "label": "Limon International Airport Pto. Limon, Limon",
    "value": "LIO"
  },
  {
    "label": "Tomas Guardia International Airport Liberia, Guanacaste",
    "value": "LIR"
  },
  {
    "label": "Lisbon Airport Lisbon, Lisbon",
    "value": "LIS"
  },
  {
    "label": "Adams Field Airport Little Rock, Arkansas",
    "value": "LIT"
  },
  {
    "label": "Loikaw Airport Loi-kaw, Kayan State",
    "value": "LIW"
  },
  {
    "label": "Lijiang Lijiang City, 山东省",
    "value": "LJG"
  },
  {
    "label": "Ljubljana Airport Ljubljana, Kranj",
    "value": "LJU"
  },
  {
    "label": "Larantuka Larantuka, Nusa Tengarra Timur",
    "value": "LKA"
  },
  {
    "label": "Lakemba Island Lakeba, Eastern",
    "value": "LKB"
  },
  {
    "label": "Lake Union Seaplane Base Seattle, Washington",
    "value": "LKE"
  },
  {
    "label": "Lokichoggio Airport Lokichoggio, Rift Valley",
    "value": "LKG"
  },
  {
    "label": "Long Akah Long Akah, Sarawak",
    "value": "LKH"
  },
  {
    "label": "Banak Airport Lakeselv, Finnmark Fylke",
    "value": "LKL"
  },
  {
    "label": "Leknes Airport Leknes, Nordland Fylke",
    "value": "LKN"
  },
  {
    "label": "Amausi International Airport Lucknow, Uttar Pradesh",
    "value": "LKO"
  },
  {
    "label": "Kallax Airport Lulea, Norrbotten",
    "value": "LLA"
  },
  {
    "label": "Lingling Airport LingLing, Hunan",
    "value": "LLF"
  },
  {
    "label": "Ethiopia Lalibela, Semen Welo",
    "value": "LLI"
  },
  {
    "label": "Alluitsup Paa Airport Alluitsup Paa, Vestgronland",
    "value": "LLU"
  },
  {
    "label": "Kamuzu International Airport Lumbadzi, Dowa",
    "value": "LLW"
  },
  {
    "label": "Lake Minchumina Lake Minchumina, Alaska",
    "value": "LMA"
  },
  {
    "label": "Lamacarena Airport San Juan de Arama, Meta",
    "value": "LMC"
  },
  {
    "label": "Los Mochis Airport Ahome, Sinaloa",
    "value": "LMM"
  },
  {
    "label": "Sarawak Limbang, Sarawak",
    "value": "LMN"
  },
  {
    "label": "Lampedusa Airport Caltabellotta, Sicily",
    "value": "LMP"
  },
  {
    "label": "Klamath Falls International Airport Klamath Falls, Oregon",
    "value": "LMT"
  },
  {
    "label": "Western Lake Murray, Western",
    "value": "LMY"
  },
  {
    "label": "Lamen Bay Airport Lamen Bay, ",
    "value": "LNB"
  },
  {
    "label": "Lonorore Airport Panngi, Penama",
    "value": "LNE"
  },
  {
    "label": "Yunnan Lincang, Yunnan",
    "value": "LNJ"
  },
  {
    "label": "Lincoln Municipal Airport Lincoln, Nebraska",
    "value": "LNK"
  },
  {
    "label": "Leonora Aerodrome Leonora, Western Australia",
    "value": "LNO"
  },
  {
    "label": "Gerrit Denys Island Lihir Island, New Ireland",
    "value": "LNV"
  },
  {
    "label": "Lanai Airport Lanai City, Hawaii",
    "value": "LNY"
  },
  {
    "label": "Linz Airport Hoersching, Upper Austria",
    "value": "LNZ"
  },
  {
    "label": " Longana, ",
    "value": "LOD"
  },
  {
    "label": "Loja Airport Loja, Loja",
    "value": "LOH"
  },
  {
    "label": "Lagos Murtala Muhammed Airport Ikeja, Lagos",
    "value": "LOS"
  },
  {
    "label": "Bowman Field Airport Louisville, Kentucky",
    "value": "LOU"
  },
  {
    "label": "Monclova Airport Frontera, Coahuila de Zaragoza",
    "value": "LOV"
  },
  {
    "label": "Las Palmas Airport Telde, Canary Islands",
    "value": "LPA"
  },
  {
    "label": "El Alto International Airport La Paz, La Paz",
    "value": "LPB"
  },
  {
    "label": "La Pedrera Airport La Pedrera, Amazonas",
    "value": "LPD"
  },
  {
    "label": "Saab Airport Linkoping, Ostergotland",
    "value": "LPI"
  },
  {
    "label": "Russia Lipetsk, Lipetskaya Oblast",
    "value": "LPK"
  },
  {
    "label": "Liverpool John Lennon Airport Liverpool, England",
    "value": "LPL"
  },
  {
    "label": "Lamap Airport Lamap, Malampa",
    "value": "LPM"
  },
  {
    "label": "Lappeenranta Airport Lappeenranta, Southern Finland",
    "value": "LPP"
  },
  {
    "label": "Louangphrabang Airport Louangphrabang, Louangphabang",
    "value": "LPQ"
  },
  {
    "label": "Lopez Island Airport Lopez Island, Washington",
    "value": "LPS"
  },
  {
    "label": "Lampang Airport Lampang, Lampang",
    "value": "LPT"
  },
  {
    "label": "Liepaja East Airport Liepaya, Liepajas Rajons",
    "value": "LPX"
  },
  {
    "label": "Loudes Airport Le Puy, Auvergne",
    "value": "LPY"
  },
  {
    "label": "Puerto Leguizamo Airport Puerto Leguízamo, Putumayo",
    "value": "LQM"
  },
  {
    "label": "Laredo International Airport Laredo, Texas",
    "value": "LRD"
  },
  {
    "label": "Longreach Aerodrome Longreach, Queensland",
    "value": "LRE"
  },
  {
    "label": "Laleu Airport La Rochelle, Pays de la Loire",
    "value": "LRH"
  },
  {
    "label": "La Romana Airport La Romana, Romana",
    "value": "LRM"
  },
  {
    "label": "Lar Lar, Fars",
    "value": "LRR"
  },
  {
    "label": "Leros Airport Lero, Notio Aigaio",
    "value": "LRS"
  },
  {
    "label": "Lann Bihoue Airport Ploemeur, Brittany",
    "value": "LRT"
  },
  {
    "label": "Papua New Guinea Losuia, null",
    "value": "LSA"
  },
  {
    "label": "La Florida Airport Compañía Alta, Coquimbo",
    "value": "LSC"
  },
  {
    "label": "La Crosse Municipal Airport La Crosse, Wisconsin",
    "value": "LSE"
  },
  {
    "label": "Lashio Airport Lashio, Shan State",
    "value": "LSH"
  },
  {
    "label": "Sumburgh Airport Shetland, Scotland",
    "value": "LSI"
  },
  {
    "label": "Josefa Camejo Airport Las Piedras, Falcon",
    "value": "LSP"
  },
  {
    "label": "Terre-De-Haut Airport Trois-Rivières, Basse-Terre",
    "value": "LSS"
  },
  {
    "label": "Launceston Airport Blessington, Tasmania",
    "value": "LST"
  },
  {
    "label": "Lismore Airport Lismore, New South Wales",
    "value": "LSY"
  },
  {
    "label": "Ghadames Ghadames, Ghadamis",
    "value": "LTD"
  },
  {
    "label": "Altay Altai, Govi-Altay",
    "value": "LTI"
  },
  {
    "label": "Latakia Airport Djeble, Al Ladhiqiyah",
    "value": "LTK"
  },
  {
    "label": "London Luton Airport Luton, England",
    "value": "LTN"
  },
  {
    "label": "Loreto Airport Comondú, Baja California Sur",
    "value": "LTO"
  },
  {
    "label": "La Mole Airport Grimaud, Provence-alpes-cote d'Azur",
    "value": "LTT"
  },
  {
    "label": " Latacunga, Cotopaxi",
    "value": "LTX"
  },
  {
    "label": "Lukla Airport Solukhumbu, Central",
    "value": "LUA"
  },
  {
    "label": "Luderitz Airport Luderitz, Karas",
    "value": "LUD"
  },
  {
    "label": "Luke Air Force Base Webb, Arizona",
    "value": "LUF"
  },
  {
    "label": "Lugano Airport Agno, Canton of Ticino",
    "value": "LUG"
  },
  {
    "label": "Mangshi Luxi, Yunnan",
    "value": "LUM"
  },
  {
    "label": "Lusaka International Airport Lusaka, Lusaka",
    "value": "LUN"
  },
  {
    "label": "Luena Luena, Moxico",
    "value": "LUO"
  },
  {
    "label": "Kalaupapa Airport Kalaupapa, Hawaii",
    "value": "LUP"
  },
  {
    "label": "San Luis Airport Villa General Roca, San Luis",
    "value": "LUQ"
  },
  {
    "label": "Cape Lisburne Long-Range Radar Station Point Hope, Alaska",
    "value": "LUR"
  },
  {
    "label": "Indonesia Langgur, ",
    "value": "LUV"
  },
  {
    "label": "Luxembourg Airport Sandweiler, Luxemburg",
    "value": "LUX"
  },
  {
    "label": "Livingstone Airport Livingstone, Southern",
    "value": "LVI"
  },
  {
    "label": "Laverton Aerodrome Laverton, Western Australia",
    "value": "LVO"
  },
  {
    "label": "Greenbrier Valley Airport Lewisburg, West Virginia",
    "value": "LWB"
  },
  {
    "label": "Indonesia Lewoleba, ",
    "value": "LWE"
  },
  {
    "label": "Gyumri Airport Gyumri, Shirak",
    "value": "LWN"
  },
  {
    "label": "Sknilov Airport L'viv, L´vivs´ka Oblast´",
    "value": "LWO"
  },
  {
    "label": "Lewiston Nez Perce County Airport Lewiston, Idaho",
    "value": "LWS"
  },
  {
    "label": "Lewistown Municipal Airport Lewistown, Montana",
    "value": "LWT"
  },
  {
    "label": "Lawas Lawas, Sarawak",
    "value": "LWY"
  },
  {
    "label": "Lhasa Lhasa, 西藏自治区",
    "value": "LXA"
  },
  {
    "label": "Luang Namtha Luang Namtha, Louangnamtha",
    "value": "LXG"
  },
  {
    "label": "Luxor Airport Luxor, Qina",
    "value": "LXR"
  },
  {
    "label": "Limnos Airport Moudhros, Voreio Aigaio",
    "value": "LXS"
  },
  {
    "label": "Luoyang Airport Luoyang, Henan",
    "value": "LYA"
  },
  {
    "label": "Boddenfield Airport Little Cayman, Little Cayman",
    "value": "LYB"
  },
  {
    "label": "Lycksele Airport Lyoksele, Vasterbotten",
    "value": "LYC"
  },
  {
    "label": "Lianyungang Lianyungang, Jiangsu",
    "value": "LYG"
  },
  {
    "label": "Lynchburg Regional Airport Lynchburg, Virginia",
    "value": "LYH"
  },
  {
    "label": "Linyi Linyi, Shandong",
    "value": "LYI"
  },
  {
    "label": "Faisalabad Airport Shah Faisalabad, Punjab",
    "value": "LYP"
  },
  {
    "label": "Svalbard Longyear Airport Longyearbyen, Svalbard",
    "value": "LYR"
  },
  {
    "label": "Lyon Airport Colombier, Rhone-Alpes",
    "value": "LYS"
  },
  {
    "label": "Lazaro Cardenas Airport Arteaga, Michoacan de Ocampo",
    "value": "LZC"
  },
  {
    "label": "Liuzhou Airport Linzhou, Guangxi",
    "value": "LZH"
  },
  {
    "label": "Nankan Nangan, Fujian",
    "value": "LZN"
  },
  {
    "label": "Luzhou Airport Luzhou, Sichuan",
    "value": "LZO"
  },
  {
    "label": "Chennai International Airport Kanchipuram, Tamil Nadu",
    "value": "MAA"
  },
  {
    "label": "Maraba Airport Marabá, Para",
    "value": "MAB"
  },
  {
    "label": "Barajas Airport Madrid, Madrid",
    "value": "MAD"
  },
  {
    "label": "Midland International Airport Midland, Texas",
    "value": "MAF"
  },
  {
    "label": "Madang Airport Madang, Madang",
    "value": "MAG"
  },
  {
    "label": "Menorca Airport Mao, Balearic Islands",
    "value": "MAH"
  },
  {
    "label": "Marshall Islands International Airport Majuro, Majuro",
    "value": "MAJ"
  },
  {
    "label": "Malakal Airport Malakal, A ali an Nil",
    "value": "MAK"
  },
  {
    "label": "General Sevando Canales Airport Matamoros, Tamaulipas",
    "value": "MAM"
  },
  {
    "label": "Manchester International Airport Manchester, England",
    "value": "MAN"
  },
  {
    "label": "Eduardo Gomes International Airport Manaus, Amazonas",
    "value": "MAO"
  },
  {
    "label": "La Chinita International Airport Maracaibo, Zulia",
    "value": "MAR"
  },
  {
    "label": "Manus Island Airport Lorengau, Manus",
    "value": "MAS"
  },
  {
    "label": "Society Islands Airport Papeete, Leeward Islands",
    "value": "MAU"
  },
  {
    "label": "Eugenio Maria de Hostos Airport Mayaguez, Puerto Rico",
    "value": "MAZ"
  },
  {
    "label": "Moi International Airport Mombasa, Coast",
    "value": "MBA"
  },
  {
    "label": "Mmabatho International Airport Mmabatho, North-west",
    "value": "MBD"
  },
  {
    "label": "Okhotsk-Monbetsu Airport Monbetsu-shi, Hokkaido Prefecture",
    "value": "MBE"
  },
  {
    "label": "Maryborough Airport Maryborough, Queensland",
    "value": "MBH"
  },
  {
    "label": "Sangster International Airport Montego Bay, Saint James",
    "value": "MBJ"
  },
  {
    "label": "Manistee County-Blacker Airport Manistee, Michigan",
    "value": "MBL"
  },
  {
    "label": "MBS International Airport Freeland, Michigan",
    "value": "MBS"
  },
  {
    "label": "Masbate Airport Masbate, Bicol Region",
    "value": "MBT"
  },
  {
    "label": "Mbambanakira Mbambanakira, Guadalcanal",
    "value": "MBU"
  },
  {
    "label": "Merced Municipal Airport-Macready Field Merced, California",
    "value": "MCE"
  },
  {
    "label": "Mcgrath Airport Mcgrath, Alaska",
    "value": "MCG"
  },
  {
    "label": "Kansas City International Airport Kansas City, Missouri",
    "value": "MCI"
  },
  {
    "label": "Mccook Municipal Airport Mccook, Nebraska",
    "value": "MCK"
  },
  {
    "label": "Monte Carlo Heliport Monaco-Ville, La Condamine",
    "value": "MCM"
  },
  {
    "label": "Middle Georgia Regional Airport Macon, Georgia",
    "value": "MCN"
  },
  {
    "label": "Orlando International Airport Orlando, Florida",
    "value": "MCO"
  },
  {
    "label": "Macapa International Airport Macapá, Amapa",
    "value": "MCP"
  },
  {
    "label": "Seeb International Airport Muscat, Masqat",
    "value": "MCT"
  },
  {
    "label": " Mcarthur River, Northern Territory",
    "value": "MCV"
  },
  {
    "label": "Mason City Municipal Airport Clear Lake, Iowa",
    "value": "MCW"
  },
  {
    "label": "Makhachkala-Uytash Airport Khasavyurt, Dagestan",
    "value": "MCX"
  },
  {
    "label": "Maroochydore Aerodrome Mudjimba, Queensland",
    "value": "MCY"
  },
  {
    "label": "Zumbi dos Palmares International Airport Maceio, Alagoas",
    "value": "MCZ"
  },
  {
    "label": "Sam Ratulangi Airport Manado, North Sulawesi",
    "value": "MDC"
  },
  {
    "label": "Jose Maria Cordova Airport Ríonegro, Antioquia",
    "value": "MDE"
  },
  {
    "label": "Mudanjiang Mudanjiang, 黑龙江省",
    "value": "MDG"
  },
  {
    "label": "Mbandaka Airport Mbandaka, Democratic Republic of",
    "value": "MDK"
  },
  {
    "label": "Mandalay Airport Mandalay, Mandalay",
    "value": "MDL"
  },
  {
    "label": "Mar del Plata Airport Mar del Plata, Buenos Aires",
    "value": "MDQ"
  },
  {
    "label": "Middle Caicos Airport Lorimers, Middle Caicos",
    "value": "MDS"
  },
  {
    "label": "Harrisburg International Airport Middletown, Pennsylvania",
    "value": "MDT"
  },
  {
    "label": "Papua New Guinea Mendi, null",
    "value": "MDU"
  },
  {
    "label": "Chicago Midway International Airport Chicago, Illinois",
    "value": "MDW"
  },
  {
    "label": "El Plumerillo Airport Mendoza, Mendoza",
    "value": "MDZ"
  },
  {
    "label": "Macae Airport Macae, Rio de Janeiro",
    "value": "MEA"
  },
  {
    "label": "Eloy Alfaro Airport Manta, Manabi",
    "value": "MEC"
  },
  {
    "label": "Madinah International Airport Al Madinah, Al Madinah",
    "value": "MED"
  },
  {
    "label": "Loyalty Islands Airport Tadine, Loyaute",
    "value": "MEE"
  },
  {
    "label": "Malanje Airport Malanje, Malanje",
    "value": "MEG"
  },
  {
    "label": "Mehamn Airport Mehavn, Finnmark Fylke",
    "value": "MEH"
  },
  {
    "label": "Key Field Airport Meridian, Mississippi",
    "value": "MEI"
  },
  {
    "label": "Melbourne International Airport Melbourne, Victoria",
    "value": "MEL"
  },
  {
    "label": "Memphis International Airport Memphis, Tennessee",
    "value": "MEM"
  },
  {
    "label": "Polonia Airport Medan, Sumatera Utara",
    "value": "MES"
  },
  {
    "label": "Lic Benito Juarez International Airport Mexico City, Distrito Federal",
    "value": "MEX"
  },
  {
    "label": " Meghauli, ",
    "value": "MEY"
  },
  {
    "label": "Miller International Airport Mcallen, Texas",
    "value": "MFE"
  },
  {
    "label": "Moala Airport Moala, Eastern",
    "value": "MFJ"
  },
  {
    "label": "Taiwan Matsu, null",
    "value": "MFK"
  },
  {
    "label": "Macau Airport Macau, Macau",
    "value": "MFM"
  },
  {
    "label": "Rogue Valley International-Medford Airport Central Point, Oregon",
    "value": "MFR"
  },
  {
    "label": "Mfuwe Airport Mfuwe, Eastern",
    "value": "MFU"
  },
  {
    "label": "Augusto Cesar Sandino International Airport Tipitapa, Managua",
    "value": "MGA"
  },
  {
    "label": "Mount Gambier Airport Mount Gambier, South Australia",
    "value": "MGB"
  },
  {
    "label": "Maringa Domestic Airport Maringa, Parana",
    "value": "MGF"
  },
  {
    "label": "Margate Airport Port Shepstone, Kwazulu Natal",
    "value": "MGH"
  },
  {
    "label": "Montgomery Regional Airport Montgomery, Alabama",
    "value": "MGM"
  },
  {
    "label": "Mogadishu Airport Mogadishu, Banaadir",
    "value": "MGQ"
  },
  {
    "label": "Mangaia Mangaia Island, Mangaia",
    "value": "MGS"
  },
  {
    "label": "Northern Territory Milingimbi, Northern Territory",
    "value": "MGT"
  },
  {
    "label": "Morgantown Municipal Airport-Hart Field Morgantown, West Virginia",
    "value": "MGW"
  },
  {
    "label": "Mergui Airport Mergui, Tenasserim",
    "value": "MGZ"
  },
  {
    "label": "Mashhad Airport Mashhad, Khorasan",
    "value": "MHD"
  },
  {
    "label": "Mannheim City Airport Mannheim, Baden-Wurttemberg",
    "value": "MHG"
  },
  {
    "label": "Marsh Harbour Airport Marsh Harbour, Central Abaco",
    "value": "MHH"
  },
  {
    "label": "Manhattan Municipal Airport Manhattan, Kansas",
    "value": "MHK"
  },
  {
    "label": "Minsk International 1 Minsk, Minskaya Voblasts'",
    "value": "MHP"
  },
  {
    "label": "Mariehamn Airport Maarianhamina, Aland Islands",
    "value": "MHQ"
  },
  {
    "label": "Mather Airport Mather, California",
    "value": "MHR"
  },
  {
    "label": "Manchester-Boston Regional Airport Manchester, New Hampshire",
    "value": "MHT"
  },
  {
    "label": "Miami International Airport Miami, Florida",
    "value": "MIA"
  },
  {
    "label": "Lic M Crecencio Rejon International Airport Mérida, Yucatan",
    "value": "MID"
  },
  {
    "label": "Mian Yang Mian Yang, Sichuan",
    "value": "MIG"
  },
  {
    "label": "Dr Gastao Vidigal Airport Marilia, Sao Paulo",
    "value": "MII"
  },
  {
    "label": "Merimbula Aerodrome Merimbula, New South Wales",
    "value": "MIM"
  },
  {
    "label": "Habib Bourguiba International Airport Sidi al Ghudamisi, Al Munastir",
    "value": "MIR"
  },
  {
    "label": "Saint Aignan Island Misima Island, Milne Bay",
    "value": "MIS"
  },
  {
    "label": "Toliara Manja, Toliara",
    "value": "MJA"
  },
  {
    "label": "Moenjodaro Airport Mohenjodaro, Sindh",
    "value": "MJD"
  },
  {
    "label": "Kjaerstad Airport Mosjoen, Nordland Fylke",
    "value": "MJF"
  },
  {
    "label": "Libya Mitiga, ",
    "value": "MJI"
  },
  {
    "label": "Shark Bay Airport Monkey Mia, Western Australia",
    "value": "MJK"
  },
  {
    "label": "Ngounie Mouila, Ngounie",
    "value": "MJL"
  },
  {
    "label": "Mbuji Mayi Airport Mbuji Mayi, Democratic Republic of",
    "value": "MJM"
  },
  {
    "label": "Mahajanga Amborovy Airport Mahajanga, Mahajanga",
    "value": "MJN"
  },
  {
    "label": "Mitilini Airport Mitilini, Voreio Aigaio",
    "value": "MJT"
  },
  {
    "label": "Murcia San Javier Airport San Javier, Murcia",
    "value": "MJV"
  },
  {
    "label": "Mirnyy Mirnyj, Sakha",
    "value": "MJZ"
  },
  {
    "label": "Kansas City Downtown Airport Kansas City, Missouri",
    "value": "MKC"
  },
  {
    "label": "General Mitchell International Airport Milwaukee, Wisconsin",
    "value": "MKE"
  },
  {
    "label": "Muskegon County Airport Muskegon, Michigan",
    "value": "MKG"
  },
  {
    "label": "Molokai Airport Hoolehua, Hawaii",
    "value": "MKK"
  },
  {
    "label": "Sarawak Mukah, Sarawak",
    "value": "MKM"
  },
  {
    "label": "Makemo Airport Makemo, Tuamotu-Gambier",
    "value": "MKP"
  },
  {
    "label": "Mopah Airport Merauke, Irian Jaya",
    "value": "MKQ"
  },
  {
    "label": "Meekatharra Airport Kumarina, Western Australia",
    "value": "MKR"
  },
  {
    "label": "Makokou Airport Makokou, Ogooue-Ivindo",
    "value": "MKU"
  },
  {
    "label": "Rendani Airport Manokwari, West Irian Jaya",
    "value": "MKW"
  },
  {
    "label": "Mackay Airport Mackay, Queensland",
    "value": "MKY"
  },
  {
    "label": "Luqa Airport Curmi, South Eastern",
    "value": "MLA"
  },
  {
    "label": "Melbourne International Airport Melbourne, Florida",
    "value": "MLB"
  },
  {
    "label": "Male International Airport Male, Maale",
    "value": "MLE"
  },
  {
    "label": "Malang Malang, Jawa Timur",
    "value": "MLG"
  },
  {
    "label": "Bale Mulhouse Airport Basel Mulhouse Freiburg, Alsace",
    "value": "MLH"
  },
  {
    "label": "Quad City Airport Coal Valley, Illinois",
    "value": "MLI"
  },
  {
    "label": "Marshall Marshall, Alaska",
    "value": "MLL"
  },
  {
    "label": "General Francisco J Mujica Airport Álvaro Obregón, Michoacan de Ocampo",
    "value": "MLM"
  },
  {
    "label": "Melilla Airport Melilla, Melilla Province",
    "value": "MLN"
  },
  {
    "label": "Milos Island Airport Apollonia, Notio Aigaio",
    "value": "MLO"
  },
  {
    "label": "Monroe Regional Airport Monroe, Louisiana",
    "value": "MLU"
  },
  {
    "label": "Monrovia Spriggs Payne Airport Monrovia, Montserrado",
    "value": "MLW"
  },
  {
    "label": "Erhac Airport Arga, Malatya",
    "value": "MLX"
  },
  {
    "label": "Manley Hot Springs Manley Hot Springs, Alaska",
    "value": "MLY"
  },
  {
    "label": "Memanbetsu Airport Ozora-cho, Hokkaido Prefecture",
    "value": "MMB"
  },
  {
    "label": "Durham Tees Valley Airport Darlington, England",
    "value": "MME"
  },
  {
    "label": "Western Australia Mount Magnet, Western Australia",
    "value": "MMG"
  },
  {
    "label": "Mammoth June Lakes Airport Mammoth Lakes, California",
    "value": "MMH"
  },
  {
    "label": "Murmashi Airport Apatity, Murmanskaya Oblast",
    "value": "MMK"
  },
  {
    "label": "Maio Airport Vila do Maio, Maio",
    "value": "MMO"
  },
  {
    "label": "Sturup Airport Svedala, Skane",
    "value": "MMX"
  },
  {
    "label": "Miyako Airport Miyako Jima, Iwate Prefecture",
    "value": "MMY"
  },
  {
    "label": "Mana Island Airstrip Mana Island, Western",
    "value": "MNF"
  },
  {
    "label": "Maningrida Airport Maningrida, Northern Territory",
    "value": "MNG"
  },
  {
    "label": "Mananjary Airport Mananjary, Fianarantsoa",
    "value": "MNJ"
  },
  {
    "label": "Ninoy Aquino International Airport Parañaque, National Capital Region",
    "value": "MNL"
  },
  {
    "label": "Minto Minto, Alaska",
    "value": "MNT"
  },
  {
    "label": "Moulmein Airport Moulmein, Mon State",
    "value": "MNU"
  },
  {
    "label": " Moa, Holguin",
    "value": "MOA"
  },
  {
    "label": "Mobile Regional Airport Mobile, Alabama",
    "value": "MOB"
  },
  {
    "label": "Montes Claros Airport Montes Claros, Minas Gerais",
    "value": "MOC"
  },
  {
    "label": "Modesto City County Airport-Harry Sham Field Modesto, California",
    "value": "MOD"
  },
  {
    "label": "Wai Oti Airport Maumere, Nusa Tengarra Timur",
    "value": "MOF"
  },
  {
    "label": " Mong Hsat, Rakhine State",
    "value": "MOG"
  },
  {
    "label": " Mitiaro Island, Mitiaro",
    "value": "MOI"
  },
  {
    "label": "Aro Airport Bolsøya, More og Romsdal",
    "value": "MOL"
  },
  {
    "label": "Morondava Airport Morondava, Toliara",
    "value": "MOQ"
  },
  {
    "label": "Minot International Airport Minot, North Dakota",
    "value": "MOT"
  },
  {
    "label": "Mountain Village Mountain Village, Alaska",
    "value": "MOU"
  },
  {
    "label": "Moranbah Airport Moranbah, Queensland",
    "value": "MOV"
  },
  {
    "label": "Society Islands Airport Papeete, Windward Islands",
    "value": "MOZ"
  },
  {
    "label": "Mpacha Airport Mpacha, ",
    "value": "MPA"
  },
  {
    "label": "Malay Caticlan, Western Visayas",
    "value": "MPH"
  },
  {
    "label": "Frejorgues Airport Mauguio, Languedoc-Roussillon",
    "value": "MPL"
  },
  {
    "label": "Maputo Airport Maputo, Maputo",
    "value": "MPM"
  },
  {
    "label": "Mount Pleasant Airport Mount Pleasant, East Falkland",
    "value": "MPN"
  },
  {
    "label": "Magnitogorsk Chelyabinsk, Chelyabinskaya Oblast",
    "value": "MQF"
  },
  {
    "label": "Mildura Airport Mildura, Victoria",
    "value": "MQL"
  },
  {
    "label": "Mardin Mardin, Mardin",
    "value": "MQM"
  },
  {
    "label": "Rossvoll Airport Skonseng, Nordland Fylke",
    "value": "MQN"
  },
  {
    "label": "Nelspruit Airport Nelspruit, ",
    "value": "MQP"
  },
  {
    "label": "Sawyer International Airport Marquette, Michigan",
    "value": "MQT"
  },
  {
    "label": " Makale, Tigray",
    "value": "MQX"
  },
  {
    "label": "Misurata Airport Misratah, Misratah",
    "value": "MRA"
  },
  {
    "label": "Alberto Carnevalli Airport Ejido, Mérida",
    "value": "MRD"
  },
  {
    "label": "Mara Serena Airport Mara Lodges, Rift Valley",
    "value": "MRE"
  },
  {
    "label": "Marignane Airport Marignane, Provence-alpes-cote d'Azur",
    "value": "MRS"
  },
  {
    "label": "Plaisance International Airport Mahebourg, Grand Port",
    "value": "MRU"
  },
  {
    "label": "Mineral'nyye Vody Mineralnye Vody, Stavropolrskiy Kray",
    "value": "MRV"
  },
  {
    "label": "Monterey Peninsula Airport Monterey, California",
    "value": "MRY"
  },
  {
    "label": "Moree Airport Moree, New South Wales",
    "value": "MRZ"
  },
  {
    "label": "Muskrat Dam Muskrat Dam, Ontario",
    "value": "MSA"
  },
  {
    "label": "Kent International Airport Manston, England",
    "value": "MSE"
  },
  {
    "label": "Misawa Airport Misawa-shi, Aomori Prefecture",
    "value": "MSJ"
  },
  {
    "label": "Muscle Shoals Regional Airport Muscle Shoals, Alabama",
    "value": "MSL"
  },
  {
    "label": "Dane County Regional Airport-Truax Field Madison, Wisconsin",
    "value": "MSN"
  },
  {
    "label": "Missoula International Airport Missoula, Montana",
    "value": "MSO"
  },
  {
    "label": "Minneapolis St Paul International Airport St. Paul, Minnesota",
    "value": "MSP"
  },
  {
    "label": "Velikiydvor Airport Minsk, Minskaya Voblasts'",
    "value": "MSQ"
  },
  {
    "label": "Mus Airport Mush, Muş",
    "value": "MSR"
  },
  {
    "label": "Massena International Airport Massena, New York",
    "value": "MSS"
  },
  {
    "label": "Maastricht Airport Maastricht-Airport, Limburg",
    "value": "MST"
  },
  {
    "label": "Maseru Moshoeshoe Airport Maseru, Maseru",
    "value": "MSU"
  },
  {
    "label": "Massawa Massawa, Semien-Keih-Bahri",
    "value": "MSW"
  },
  {
    "label": "New Orleans International Airport Kenner, Louisiana",
    "value": "MSY"
  },
  {
    "label": "Namibe Namibe, Namibe",
    "value": "MSZ"
  },
  {
    "label": "Montrose Regional Airport Montrose, Colorado",
    "value": "MTJ"
  },
  {
    "label": "Metlakatla Sea Plane Base Metlakatla, Alaska",
    "value": "MTM"
  },
  {
    "label": "Los Garzones Airport Los Garzones, Cordoba",
    "value": "MTR"
  },
  {
    "label": "Matsapa International Airport Manzini, Manzini",
    "value": "MTS"
  },
  {
    "label": "Minatitlan Airport Minatitlan, ",
    "value": "MTT"
  },
  {
    "label": "Mota Lava Mota Lava, Torba",
    "value": "MTV"
  },
  {
    "label": "Gen Mariano Escobedo International Airport Pesquería, Nuevo Leon",
    "value": "MTY"
  },
  {
    "label": "Munda Airport Munda, Western",
    "value": "MUA"
  },
  {
    "label": "Maun Airport Maun, Ngamiland",
    "value": "MUB"
  },
  {
    "label": "Franz-Josef-Strauss Airport Oberding, Bavaria",
    "value": "MUC"
  },
  {
    "label": "Waimea Kohala Airport Kamuela, Hawaii",
    "value": "MUE"
  },
  {
    "label": "Mersa Matruh Airport Marsa Matruh, Matruh",
    "value": "MUH"
  },
  {
    "label": "Mauke Island Mauke Island, Atiu",
    "value": "MUK"
  },
  {
    "label": "Maturin Airport Aguasay, Monagas",
    "value": "MUN"
  },
  {
    "label": "Marudi Airport Miri, Sarawak",
    "value": "MUR"
  },
  {
    "label": "Multan Airport Multan, Punjab",
    "value": "MUX"
  },
  {
    "label": "Mara Musoma, Mara",
    "value": "MUZ"
  },
  {
    "label": "Franceville Mvengue Airport Franceville, Haut-Ogooue",
    "value": "MVB"
  },
  {
    "label": "Carrasco International Airport Montevideo, Montevideo",
    "value": "MVD"
  },
  {
    "label": "Mitu Airport Mitu, Vaupes",
    "value": "MVP"
  },
  {
    "label": "Maroua Salak Airport Maroua, Extreme-Nord",
    "value": "MVR"
  },
  {
    "label": "Aeroporto Max Feffer Mucuri, Nordeste",
    "value": "MVS"
  },
  {
    "label": "French Polynesia Mataiva, Windward Islands",
    "value": "MVT"
  },
  {
    "label": "Marthas Vineyard Airport Vineyard Haven, Massachusetts",
    "value": "MVY"
  },
  {
    "label": "Williamson County Regional Airport Marion, Illinois",
    "value": "MWA"
  },
  {
    "label": "Vanuatu Maewo, Penama",
    "value": "MWF"
  },
  {
    "label": "Mwadui Mwadui, Shinyanga",
    "value": "MWN"
  },
  {
    "label": "Magwe Magwe, Magway",
    "value": "MWQ"
  },
  {
    "label": "Mwanza Airport Ilemera, Mwanza",
    "value": "MWZ"
  },
  {
    "label": "Papua New Guinea Moro, Southern Highlands",
    "value": "MXH"
  },
  {
    "label": "Gen Rodolfo Sanchez T International Airport Mexicali, Baja California",
    "value": "MXL"
  },
  {
    "label": "Morombe Airport Morombe, Toliara",
    "value": "MXM"
  },
  {
    "label": "Ploujean Airport Morlaix, Brittany",
    "value": "MXN"
  },
  {
    "label": "Malpensa International Airport Cardano al Campo, Lombardy",
    "value": "MXP"
  },
  {
    "label": " Maintirano, Mahajanga",
    "value": "MXT"
  },
  {
    "label": "Moron Airport Mörön, Hovsgol",
    "value": "MXV"
  },
  {
    "label": "Siljan Airport Mora, Dalarna",
    "value": "MXX"
  },
  {
    "label": "Meixian Meixian, 广东省",
    "value": "MXZ"
  },
  {
    "label": "Moruya Aerodrome Bingie, New South Wales",
    "value": "MYA"
  },
  {
    "label": "Malindi Airport Mombasa, Coast",
    "value": "MYD"
  },
  {
    "label": "Miyakejima Airport Miyake-mura, Tokyo Prefecture",
    "value": "MYE"
  },
  {
    "label": "Miltary & Civil Airport Abraham Bay, Mayaguana",
    "value": "MYG"
  },
  {
    "label": "Murray Island Murray Island, Queensland",
    "value": "MYI"
  },
  {
    "label": "Matsuyama Airport Matsuyama-shi, Ehime Prefecture",
    "value": "MYJ"
  },
  {
    "label": "Mccall Airport Mccall, Idaho",
    "value": "MYL"
  },
  {
    "label": "Myrtle Beach International Airport Myrtle Beach, South Carolina",
    "value": "MYR"
  },
  {
    "label": "Myitkyina Airport Myitkyina, Kachin State",
    "value": "MYT"
  },
  {
    "label": "Mekoryuk Mekoryuk, Alaska",
    "value": "MYU"
  },
  {
    "label": "Mtwara Airport Ziwani, Mtwara",
    "value": "MYW"
  },
  {
    "label": "Miri Airport Miri, Sarawak",
    "value": "MYY"
  },
  {
    "label": "Magong Airport Makung City, Taiwan Province",
    "value": "MZG"
  },
  {
    "label": "Merzifon Merzifon, ",
    "value": "MZH"
  },
  {
    "label": "Mopti Barbe Airport Mopti, Mopti",
    "value": "MZI"
  },
  {
    "label": "La Nubia Airport Villamaría, Caldas",
    "value": "MZL"
  },
  {
    "label": "Manzanillo Airport Manzanillo, Granma",
    "value": "MZO"
  },
  {
    "label": "Mazar I Sharif Airport Mazar-i-Sharif, Balkh",
    "value": "MZR"
  },
  {
    "label": "General Rafael Buelna International Airport Mazatlán, Sinaloa",
    "value": "MZT"
  },
  {
    "label": "Mulu Airport Mulu, Sarawak",
    "value": "MZV"
  },
  {
    "label": "Narrabri Airport Bohena Creek, New South Wales",
    "value": "NAA"
  },
  {
    "label": "Naracoorte Airport Naracoorte, South Australia",
    "value": "NAC"
  },
  {
    "label": "Sonegaon Airport Nagpur, Maharashtra",
    "value": "NAG"
  },
  {
    "label": " Nakhichevan, Naxcivan",
    "value": "NAJ"
  },
  {
    "label": "Nadi International Airport Nadi, Western",
    "value": "NAN"
  },
  {
    "label": "Nanchong Airport Nanchong, Sichuan",
    "value": "NAO"
  },
  {
    "label": "Naples International Airport Naples, Campania",
    "value": "NAP"
  },
  {
    "label": "Qaanaaq Qaanaaq, Nordgronland",
    "value": "NAQ"
  },
  {
    "label": "Nassau International Airport Nassau, New Providence",
    "value": "NAS"
  },
  {
    "label": "Augusto Severo International Airport Natal, Rio Grande do Norte",
    "value": "NAT"
  },
  {
    "label": "Napuka Island Napuka Island, Windward Islands",
    "value": "NAU"
  },
  {
    "label": " Nevsehir, Nevşehir",
    "value": "NAV"
  },
  {
    "label": "Narathiwat Airport Narathiwat, Narathiwat",
    "value": "NAW"
  },
  {
    "label": "Russia Naberevnye Chelny, ",
    "value": "NBC"
  },
  {
    "label": "Jomo Kenyatta International Airport Nairobi, Nairobi Area",
    "value": "NBO"
  },
  {
    "label": "Guantanamo Bay Naval Air Station Caimanera, Guantanamo",
    "value": "NBW"
  },
  {
    "label": "Nabire Airport Nabire, Irian Jaya",
    "value": "NBX"
  },
  {
    "label": "North Caicos Airport Bottle Creek Settlements, North Caicos",
    "value": "NCA"
  },
  {
    "label": "Nice-Cote d'Azur Airport Nice, Provence-alpes-cote d'Azur",
    "value": "NCE"
  },
  {
    "label": "Newcastle International Airport Newcastle, England",
    "value": "NCL"
  },
  {
    "label": "Chenega New Chenega, Alaska",
    "value": "NCN"
  },
  {
    "label": " Nukus, Qoraqalpoghiston",
    "value": "NCU"
  },
  {
    "label": "Meythet Airport Pringy, Rhone-Alpes",
    "value": "NCY"
  },
  {
    "label": "Nouadhibou Airport Port-Etienne, Dakhlet Nouadhibou",
    "value": "NDB"
  },
  {
    "label": "Qiqihar Qiqihar, Suhbaatar",
    "value": "NDG"
  },
  {
    "label": "Ndjamena Airport N'Djamena, Chari-Baguirmi",
    "value": "NDJ"
  },
  {
    "label": "Nador Airport Nador, Nador",
    "value": "NDR"
  },
  {
    "label": " Neryungri, Sakha",
    "value": "NER"
  },
  {
    "label": "Newcastle Airport Nevis, Saint James Windward",
    "value": "NEV"
  },
  {
    "label": "Niuafo'ou Airport , Vava'eu",
    "value": "NFO"
  },
  {
    "label": "Ningbo Airport Jiangshan, Zhejiang",
    "value": "NGB"
  },
  {
    "label": "Ngaoundere Airport Ngaoundéré, Adamaoua",
    "value": "NGE"
  },
  {
    "label": "Ngau Island Ngau Island, Eastern",
    "value": "NGI"
  },
  {
    "label": "Chubu International Airport Tokoname-shi, Aichi Prefecture",
    "value": "NGO"
  },
  {
    "label": "Nagasaki Airport Omura-shi, Nagasaki Prefecture",
    "value": "NGS"
  },
  {
    "label": "Nha-Trang Airport Nha Trang, Khanh Hoa",
    "value": "NHA"
  },
  {
    "label": "Marquesas Islands Airport Nuku Hiva, Marquesas Islands",
    "value": "NHV"
  },
  {
    "label": "Nikolai Nikolai, Alaska",
    "value": "NIB"
  },
  {
    "label": "Niamey Airport Niamey, Niamey",
    "value": "NIM"
  },
  {
    "label": "Jacksonville Naval Air Station Jacksonville, Florida",
    "value": "NIP"
  },
  {
    "label": "Honolulu International Airport Honolulu, Hawaii",
    "value": "NIU"
  },
  {
    "label": "Nizhnevartovsk Northwest Airport Nizhnevartovsk, Khanty-Mansiyskiy Avtonomnyy Okr",
    "value": "NJC"
  },
  {
    "label": "Nouakchott Airport Nouakchott, Nouakchott",
    "value": "NKC"
  },
  {
    "label": "Nanjing Lukou International Airport Nanjing, Jiangsu",
    "value": "NKG"
  },
  {
    "label": "Naukiti Airport Naukiti, Alaska",
    "value": "NKI"
  },
  {
    "label": "Nagoya Airport Toyoyama-cho, Aichi Prefecture",
    "value": "NKM"
  },
  {
    "label": "Ndola Airport Ndola, Copperbelt",
    "value": "NLA"
  },
  {
    "label": "Quetzalcoatl International Airport Nuevo Laredo, Tamaulipas",
    "value": "NLD"
  },
  {
    "label": "Darnley Island Airport Kubin Village, Queensland",
    "value": "NLF"
  },
  {
    "label": " Nelson Lagoon, Alaska",
    "value": "NLG"
  },
  {
    "label": "Norfolk Island Airport Kingston, ",
    "value": "NLK"
  },
  {
    "label": "Nikolaev Airport Mykolayiv, Mykolayivs´ka Oblast´",
    "value": "NLV"
  },
  {
    "label": "Namangan Airport Namangan, Namangan",
    "value": "NMA"
  },
  {
    "label": "Nightmute Airport Nightmute, Alaska",
    "value": "NME"
  },
  {
    "label": "Makira Santa Ana, Makira",
    "value": "NNB"
  },
  {
    "label": "Nanning-Wuyu Airport Wuxu, Guangxi",
    "value": "NNG"
  },
  {
    "label": " Nondalton, Alaska",
    "value": "NNL"
  },
  {
    "label": " Naryan-Mar, Nenetskiy Avtonomnyy Okrug",
    "value": "NNM"
  },
  {
    "label": "Nan Airport Nan, Nan",
    "value": "NNT"
  },
  {
    "label": "Nanyang Nanyang, Henan",
    "value": "NNY"
  },
  {
    "label": "Nosara Beach Airport Nosara, Guanacaste",
    "value": "NOB"
  },
  {
    "label": "Connaught Airport Knock, ",
    "value": "NOC"
  },
  {
    "label": " Nojabrxsk, ",
    "value": "NOJ"
  },
  {
    "label": "Nosy Be Fascene Airport Hell-Ville, Antsiranana",
    "value": "NOS"
  },
  {
    "label": "La Tontouta Airport , Sud",
    "value": "NOU"
  },
  {
    "label": "Huambo Airport Huambo, Huambo",
    "value": "NOV"
  },
  {
    "label": "Kemerovskaya Oblast Novokuznetsk, Kemerovskaya Oblast",
    "value": "NOZ"
  },
  {
    "label": "Hawkes Bay Airport Napier, Hawke's Bay",
    "value": "NPE"
  },
  {
    "label": "New Plymouth Airport New Plymouth, Taranaki",
    "value": "NPL"
  },
  {
    "label": "Neuquen Airport Neuquen, Neuquen",
    "value": "NQN"
  },
  {
    "label": "Nuqui Airport Nuquí, Choco",
    "value": "NQU"
  },
  {
    "label": "St Mawgan Airport Newquay, England",
    "value": "NQY"
  },
  {
    "label": "Narrandera Leeton Aerodrome Narrandera, New South Wales",
    "value": "NRA"
  },
  {
    "label": "Kungsangen Airport Norrkoping, Ostergotland",
    "value": "NRK"
  },
  {
    "label": "Airport Weeze Weeze, North Rhine-Westphalia",
    "value": "NRN"
  },
  {
    "label": "Narita International Airport Narita-shi, Chiba Prefecture",
    "value": "NRT"
  },
  {
    "label": " Now Shahr, Mazandaran",
    "value": "NSH"
  },
  {
    "label": "Nsimalen Airport Yaounde, Centre",
    "value": "NSI"
  },
  {
    "label": "Norilsk Alykel Airport Kansk, Krasnoyarskiy Kray",
    "value": "NSK"
  },
  {
    "label": "Nelson Airport Nelson, Nelson",
    "value": "NSN"
  },
  {
    "label": "Nakhon Si Thammarat Airport Phra Phrom, Nakhon Si Thammarat",
    "value": "NST"
  },
  {
    "label": "Chateau Bougon Airport Bouguenais, Pays de la Loire",
    "value": "NTE"
  },
  {
    "label": "Nantong Airport Nantong, Jiangsu",
    "value": "NTG"
  },
  {
    "label": "Williamtown Airport Ferodale, New South Wales",
    "value": "NTL"
  },
  {
    "label": "Normanton Normanton, Queensland",
    "value": "NTN"
  },
  {
    "label": "Noto Airport Anamizu-machi, Ishikawa Prefecture",
    "value": "NTQ"
  },
  {
    "label": "Niuatoputapu Airport Niuatoputapu, Vava'eu",
    "value": "NTT"
  },
  {
    "label": "Nurnberg Airport Nuremberg, Bavaria",
    "value": "NUE"
  },
  {
    "label": "Nuiqsut Nuiqsut, Alaska",
    "value": "NUI"
  },
  {
    "label": "Nukutavake Nukutavake, Windward Islands",
    "value": "NUK"
  },
  {
    "label": "Nulato Airport Nulato, Alaska",
    "value": "NUL"
  },
  {
    "label": "Alaska Nunapitchuk, Alaska",
    "value": "NUP"
  },
  {
    "label": " Norsup, ",
    "value": "NUS"
  },
  {
    "label": "Urengoy Airport Novy Urengoy, Yamalo-Nenetskiy Avtonomnyy Okru",
    "value": "NUX"
  },
  {
    "label": "Neiva Lamarguita Airport Neiva, Huila",
    "value": "NVA"
  },
  {
    "label": "Navoi Airport Navoi, Nawoiy",
    "value": "NVI"
  },
  {
    "label": "Framnes Airport Narvik, Nordland Fylke",
    "value": "NVK"
  },
  {
    "label": " Novgorod, Novgorodskaya Oblast",
    "value": "NVR"
  },
  {
    "label": "Ministro Victor Konder International Airport Navegantes, Santa Catarina",
    "value": "NVT"
  },
  {
    "label": " Moheli, Moheli",
    "value": "NWA"
  },
  {
    "label": "Norwich Airport Norwich, England",
    "value": "NWI"
  },
  {
    "label": " Norwood Young America, Minnesota",
    "value": "NYA"
  },
  {
    "label": "Nanyuki Airport Nyeri, Rift Valley",
    "value": "NYK"
  },
  {
    "label": "Nadym Airport Nadym, Yamalo-Nenetskiy Avtonomnyy Okru",
    "value": "NYM"
  },
  {
    "label": "Skavsta Airport Nykoping, Sodermanland",
    "value": "NYO"
  },
  {
    "label": "Nyaung U Airport Nyaung-u, Mandalay",
    "value": "NYU"
  },
  {
    "label": "Manzhouli Manzhouli, Nei Mongol",
    "value": "NZH"
  },
  {
    "label": "Springhill Airport Arthurville, New South Wales",
    "value": "OAG"
  },
  {
    "label": "Albert J Ellis Airport Richlands, North Carolina",
    "value": "OAJ"
  },
  {
    "label": "Oakland International Airport Oakland, California",
    "value": "OAK"
  },
  {
    "label": "Oamaru Airport Oamaru, Canterbury",
    "value": "OAM"
  },
  {
    "label": "Xoxocotlan Airport San Bernardo Mixtepec, Oaxaca",
    "value": "OAX"
  },
  {
    "label": "Oban Connel Airport Oban, Scotland",
    "value": "OBN"
  },
  {
    "label": "Obihiro Airport Obihiro-shi, Hokkaido Prefecture",
    "value": "OBO"
  },
  {
    "label": "Kobuk Airport Kobuk, Alaska",
    "value": "OBU"
  },
  {
    "label": "Obo Obo, Western",
    "value": "OBX"
  },
  {
    "label": "Coca Airport Chontapunta, Orellano",
    "value": "OCC"
  },
  {
    "label": "Sarawak Long Seridan, Sarawak",
    "value": "ODN"
  },
  {
    "label": "Odessa Central Airport Odesa, Odes´ka Oblast´",
    "value": "ODS"
  },
  {
    "label": "Oak Harbor Airpark Oak Harbor, Washington",
    "value": "ODW"
  },
  {
    "label": "Oudomxay Oudomxay, Houaphan",
    "value": "ODY"
  },
  {
    "label": "Ornskoldsvik Airport Husum, Vasternorrland",
    "value": "OER"
  },
  {
    "label": "Ouango Fitini Ouango Fitini, Bouna",
    "value": "OFI"
  },
  {
    "label": "Kahului Airport Kahului, Hawaii",
    "value": "OGG"
  },
  {
    "label": "Yonaguni Airport Yonaguni-cho, Okinawa Prefecture",
    "value": "OGN"
  },
  {
    "label": "Ogdensburg International Airport Ogdensburg, New York",
    "value": "OGS"
  },
  {
    "label": "Ain Beida Ouargla, Oum el Bouaghi",
    "value": "OGX"
  },
  {
    "label": "Ordzhonikidze North Airport Mozdok, Severnaya Osetiya-Alaniya",
    "value": "OGZ"
  },
  {
    "label": "Ohrid Airport Ohrid, Debarca",
    "value": "OHD"
  },
  {
    "label": "Hamburg Airport Hamburg, Hamburg",
    "value": "OHE"
  },
  {
    "label": "Okhotsk Airport Okhotsk, Khabarovskiy Kray",
    "value": "OHO"
  },
  {
    "label": "Oshima Airport Oshima-machi, Tokyo Prefecture",
    "value": "OIM"
  },
  {
    "label": "Oita Airport Kunisaki-shi, Oita Prefecture",
    "value": "OIT"
  },
  {
    "label": "Shimojishima Airport Naha-shi, Okinawa Prefecture",
    "value": "OKA"
  },
  {
    "label": "Will Rogers World Airport Oklahoma City, Oklahoma",
    "value": "OKC"
  },
  {
    "label": "Okadama Airport Sapporo-shi, Hokkaido Prefecture",
    "value": "OKD"
  },
  {
    "label": "Okayama Airport Okayama-shi, Okayama Prefecture",
    "value": "OKJ"
  },
  {
    "label": " Yorke Island, ",
    "value": "OKR"
  },
  {
    "label": "Oakey Aerodrome Oakey, Queensland",
    "value": "OKY"
  },
  {
    "label": "Orland Airport Orland, Sor-Trondelag",
    "value": "OLA"
  },
  {
    "label": "Olbia Costa Smeralda Airport Terranova, Sardinia",
    "value": "OLB"
  },
  {
    "label": "L. M. Clayton Airport Wolf Point, Montana",
    "value": "OLF"
  },
  {
    "label": "Alaska Old Harbor, Alaska",
    "value": "OLH"
  },
  {
    "label": "Malampa Olpoi, Malampa",
    "value": "OLJ"
  },
  {
    "label": "Olympic Dam Aerodrome Roxby Downs, South Australia",
    "value": "OLP"
  },
  {
    "label": "Eppley Airfield Omaha, Nebraska",
    "value": "OMA"
  },
  {
    "label": "Omboué Omboue, Ogooue-Martime",
    "value": "OMB"
  },
  {
    "label": "Ormoc Airport Ormoc, Eastern Visayas",
    "value": "OMC"
  },
  {
    "label": "Oranjemund Airport Oranjemund, Karas",
    "value": "OMD"
  },
  {
    "label": "Nome Airport Nome, Alaska",
    "value": "OME"
  },
  {
    "label": "Uromiyeh Airport Urmieh, Azarbayjan-e Gharbi",
    "value": "OMH"
  },
  {
    "label": "Mostar Airport Mostar, Federacija Bosne I Hercegovine",
    "value": "OMO"
  },
  {
    "label": "Oradea Airport Oradea-Mare, Bihor",
    "value": "OMR"
  },
  {
    "label": "Omsk Southwest Airport Omsk, Omskaya Oblast",
    "value": "OMS"
  },
  {
    "label": "Ondangwa Airport Ondangwa, Oshana",
    "value": "OND"
  },
  {
    "label": "Mornington Island Airport Mornington, Queensland",
    "value": "ONG"
  },
  {
    "label": "Odate-Noshiro Airport Kitakita-shi, Akita Prefecture",
    "value": "ONJ"
  },
  {
    "label": "The Oneill Municipal Airport O'neill, Nebraska",
    "value": "ONL"
  },
  {
    "label": "Ontario International Airport Ontario, California",
    "value": "ONT"
  },
  {
    "label": "Toksook Bay Toksook Bay, Alaska",
    "value": "OOK"
  },
  {
    "label": "Gold Coast (Coolangatta) Gold Coast, Queensland",
    "value": "OOL"
  },
  {
    "label": "Opa Locka Airport Opa-Locka, Florida",
    "value": "OPF"
  },
  {
    "label": "Porto Airport Maia, Porto",
    "value": "OPO"
  },
  {
    "label": "Sinop Airport Sinop, Mato Grosso",
    "value": "OPS"
  },
  {
    "label": "Balimo Balimo, Western",
    "value": "OPU"
  },
  {
    "label": "Orebro Airport Orebro, Orebro",
    "value": "ORB"
  },
  {
    "label": "Chicago O'Hare International Airport Chicago, Illinois",
    "value": "ORD"
  },
  {
    "label": "Norfolk International Airport Norfolk, Virginia",
    "value": "ORF"
  },
  {
    "label": "Worcester Municipal Airport Worcester, Massachusetts",
    "value": "ORH"
  },
  {
    "label": " Port Lions, Alaska",
    "value": "ORI"
  },
  {
    "label": "Orinduik Airport Rera, Roraima",
    "value": "ORJ"
  },
  {
    "label": "Cork Airport Fivemilebridge, ",
    "value": "ORK"
  },
  {
    "label": "Sywell Airport Northampton, England",
    "value": "ORM"
  },
  {
    "label": "Es Senia Airport Oran Rp, Oran",
    "value": "ORN"
  },
  {
    "label": "Curtis Memorial Noorvik, Alaska",
    "value": "ORV"
  },
  {
    "label": "Paris Orly Airport Paris, Ile-de-France",
    "value": "ORY"
  },
  {
    "label": "Ostersunds Airport Frösö, Jamtland",
    "value": "OSD"
  },
  {
    "label": "Osijek Airport Osijek, Osječko-baranjska",
    "value": "OSI"
  },
  {
    "label": "Oskarshamn Airport Fårbo, Kalmar",
    "value": "OSK"
  },
  {
    "label": "Oslo Gardermoen Airport Gardermoen, Akershus Fylke",
    "value": "OSL"
  },
  {
    "label": "Mosul Airport Mosul, Ninawa",
    "value": "OSM"
  },
  {
    "label": "Mosnov Airport Mošnov, Moravskoslezský",
    "value": "OSR"
  },
  {
    "label": "Osh Airport Osh, Osh",
    "value": "OSS"
  },
  {
    "label": "Oostende Airport Oostende, West-Vlaanderen",
    "value": "OST"
  },
  {
    "label": "Orsk Orsk, Orenburgskaya Oblast",
    "value": "OSW"
  },
  {
    "label": "Namsos Airport Namsos, Nord-Trondelag",
    "value": "OSY"
  },
  {
    "label": "Koszalin Airport Sianów, Zachodniopomorskie",
    "value": "OSZ"
  },
  {
    "label": "North Bend Municipal Airport North Bend, Oregon",
    "value": "OTH"
  },
  {
    "label": "Otopeni Airport Bucharest, Ilfov",
    "value": "OTP"
  },
  {
    "label": "Coto 47 Airport Coto 47, Puntarenas",
    "value": "OTR"
  },
  {
    "label": "Ralph Wien Memorial Airport Kotzebue, Alaska",
    "value": "OTZ"
  },
  {
    "label": "Ouagadougou Airport Ouagadougou, Kadiogo",
    "value": "OUA"
  },
  {
    "label": "Angads Airport Oujda, Oujda",
    "value": "OUD"
  },
  {
    "label": "Ouesso Airport Ouesso, Sangha",
    "value": "OUE"
  },
  {
    "label": "Oulu Airport Oulunsalo, Oulu Province",
    "value": "OUL"
  },
  {
    "label": "Mauritania Zouerate, Tiris Zemmour",
    "value": "OUZ"
  },
  {
    "label": "Tolmachevo Airport Novosibirsk, Novosibirskaya Oblast",
    "value": "OVB"
  },
  {
    "label": "Asturias Airport Castrillón, Asturias",
    "value": "OVD"
  },
  {
    "label": "Boscobel Airport Boscobel, Wisconsin",
    "value": "OVS"
  },
  {
    "label": "Bissau Oswaldo Vieira Airport Bissau, Biombo",
    "value": "OXB"
  },
  {
    "label": "Oxford Airport Kidlington, England",
    "value": "OXF"
  },
  {
    "label": "Oxnard Airport Oxnard, California",
    "value": "OXR"
  },
  {
    "label": "Oyem Airport Oyem, Woleu-Ntem",
    "value": "OYE"
  },
  {
    "label": "Moyo Moyo, Moyo",
    "value": "OYG"
  },
  {
    "label": "Ozamis-Mindanao Island Airport Ozamis City, Northern Mindanao",
    "value": "OZC"
  },
  {
    "label": "Zaporozhye East Airport Zaporizhzhya, Zaporiz´ka Oblast´",
    "value": "OZH"
  },
  {
    "label": "Ouarzazate Airport Ouarzazate, Ouarzazate",
    "value": "OZZ"
  },
  {
    "label": "Paderborn-Lippstadt Airport Büren, North Rhine-Westphalia",
    "value": "PAD"
  },
  {
    "label": "Barkley Regional Airport West Paducah, Kentucky",
    "value": "PAH"
  },
  {
    "label": "Pailin Airport Pailin, Pailin",
    "value": "PAI"
  },
  {
    "label": " Port Au Prince, Ouest",
    "value": "PAP"
  },
  {
    "label": "Paros Island Airport Levkai, Notio Aigaio",
    "value": "PAS"
  },
  {
    "label": "Lok Nayak Jaiprakash Airport Patna, Bihar",
    "value": "PAT"
  },
  {
    "label": "Tajin Airport Castillo de Teayo, Veracruz-Llave",
    "value": "PAZ"
  },
  {
    "label": "Puebla Airport Tlaltenango, Puebla",
    "value": "PBC"
  },
  {
    "label": "Porbandar Airport Porbandar, Gujarat",
    "value": "PBD"
  },
  {
    "label": "Plattsburgh Air Force Base Plattsburgh, New York",
    "value": "PBG"
  },
  {
    "label": "Paro Airport Paro, Paro",
    "value": "PBH"
  },
  {
    "label": "Palm Beach International Airport West Palm Beach, Florida",
    "value": "PBI"
  },
  {
    "label": "Malampa Paama, Malampa",
    "value": "PBJ"
  },
  {
    "label": "Zandery Airport Sabakoe, Para",
    "value": "PBM"
  },
  {
    "label": "Paraburdoo Airport Paraburdoo, Western Australia",
    "value": "PBO"
  },
  {
    "label": "Punta Islita Airport Punta Islita, Guanacaste",
    "value": "PBP"
  },
  {
    "label": "Putao Airport Putao, Kachin State",
    "value": "PBU"
  },
  {
    "label": "Painter Creek Painter Creek, Alaska",
    "value": "PCE"
  },
  {
    "label": "Pucallpa Airport Callaria, Ucayali",
    "value": "PCL"
  },
  {
    "label": "Puerto Carreno Airport Puerto Carreño, Vichada",
    "value": "PCR"
  },
  {
    "label": "Puerto Inirida Airport Guaviare, Guainia",
    "value": "PDA"
  },
  {
    "label": "Pedro Bay Pedro Bay, Alaska",
    "value": "PDB"
  },
  {
    "label": "Tabing Airport Padang, Sumatera Barat",
    "value": "PDG"
  },
  {
    "label": "Ponta Delgada Airport Ponta Delgada, Azores",
    "value": "PDL"
  },
  {
    "label": "Maldonado Airport Punta del Este, Maldonado",
    "value": "PDP"
  },
  {
    "label": "Piedras Negras International Airport Piedras Negras, Coahuila de Zaragoza",
    "value": "PDS"
  },
  {
    "label": "Eastern Oregon Regional Airport Pendleton, Oregon",
    "value": "PDT"
  },
  {
    "label": "Portland International Airport Portland, Oregon",
    "value": "PDX"
  },
  {
    "label": "Pelican Sea Plane Base Pelican, Alaska",
    "value": "PEC"
  },
  {
    "label": "Pardubice Pardubice, Pardubicky Kraj",
    "value": "PED"
  },
  {
    "label": "Bolshesavino Airport Perm', Permskiy Kray",
    "value": "PEE"
  },
  {
    "label": "Perugia Airport Assisi, Umbria",
    "value": "PEG"
  },
  {
    "label": "Matecana Airport Pereira, Risaralda",
    "value": "PEI"
  },
  {
    "label": "Beijing Capital Airport Shunyi, Beijing",
    "value": "PEK"
  },
  {
    "label": "Padre Aldamiz Airport Puerto Maldonado, Madre de Dios",
    "value": "PEM"
  },
  {
    "label": "Penang International Airport Batu Maung, Pulau Pinang",
    "value": "PEN"
  },
  {
    "label": "Perth International Airport Perth, Western Australia",
    "value": "PER"
  },
  {
    "label": "Petrozavodsk Northwest Airport Petrozavodsk, Kareliya",
    "value": "PES"
  },
  {
    "label": "Pelotas Airport Pelotas, Rio Grande do Sul",
    "value": "PET"
  },
  {
    "label": "Puerto Lempira Airport Puerto Lempira, Gracias a Dios",
    "value": "PEU"
  },
  {
    "label": "Peshawar Airport Peshawar, Federally Administered Tribal Ar",
    "value": "PEW"
  },
  {
    "label": "Pechora Southwest Airport Ukhta, Komi",
    "value": "PEX"
  },
  {
    "label": "Penza Penza, Privolzhskiy",
    "value": "PEZ"
  },
  {
    "label": "Lauro Kurtz Airport Passo Fundo, Rio Grande do Sul",
    "value": "PFB"
  },
  {
    "label": "Panama City Bay County Airport Panama City, Florida",
    "value": "PFN"
  },
  {
    "label": "Paphos International Airport Paphos, Rep. Cyprus",
    "value": "PFO"
  },
  {
    "label": " Parsabad, Ardabil",
    "value": "PFQ"
  },
  {
    "label": "Page Municipal Airport Page, Arizona",
    "value": "PGA"
  },
  {
    "label": "Rivesaltes Airport Perpignan, Languedoc-Roussillon",
    "value": "PGF"
  },
  {
    "label": "Pangkalpinang Airport Pangkalpinang, Bangka-Belitung",
    "value": "PGK"
  },
  {
    "label": "Port Graham Port Graham, Alaska",
    "value": "PGM"
  },
  {
    "label": "Page Municipal Airport Asalouyeh, ",
    "value": "PGU"
  },
  {
    "label": "Pitt Greenville Airport Greenville, North Carolina",
    "value": "PGV"
  },
  {
    "label": "Bassillac Airport St-Pierre, Aquitaine",
    "value": "PGX"
  },
  {
    "label": "Port Harcourt International Airport Port Harcourt, Rivers",
    "value": "PHC"
  },
  {
    "label": "Port Hedland Airport Port Hedland, Western Australia",
    "value": "PHE"
  },
  {
    "label": "Newport News-Williamsburg International Airport Newport News, Virginia",
    "value": "PHF"
  },
  {
    "label": "Port Harcourt City Port Harcourt, Rivers",
    "value": "PHG"
  },
  {
    "label": "Philadelphia International Airport Philadelphia, Pennsylvania",
    "value": "PHL"
  },
  {
    "label": "Point Hope Airport Point Hope, Alaska",
    "value": "PHO"
  },
  {
    "label": "Phitsanulok Airport Phitsanulok, Phitsanulok",
    "value": "PHS"
  },
  {
    "label": "Hendrik Van Eck Airport Phalaborwa, Limpopo",
    "value": "PHW"
  },
  {
    "label": "Sky Harbor International Airport Phoenix, Arizona",
    "value": "PHX"
  },
  {
    "label": "Greater Peoria Regional Airport Peoria, Illinois",
    "value": "PIA"
  },
  {
    "label": "Pine Belt Regional Airport Moselle, Mississippi",
    "value": "PIB"
  },
  {
    "label": "St. Petersburg-Clearwater International Airport Clearwater, Florida",
    "value": "PIE"
  },
  {
    "label": "Pingdong Airport Pingtung, Taiwan Province",
    "value": "PIF"
  },
  {
    "label": "Pocatello Municipal Airport Pocatello, Idaho",
    "value": "PIH"
  },
  {
    "label": "Glasgow Prestwick International Airport Prestwick, Scotland",
    "value": "PIK"
  },
  {
    "label": "Parintins Airport Parintins, Amazonas",
    "value": "PIN"
  },
  {
    "label": "Pilot Point Airport Pilot Point, Alaska",
    "value": "PIP"
  },
  {
    "label": "Pierre Municipal Airport Pierre, South Dakota",
    "value": "PIR"
  },
  {
    "label": "Biard Airport Vouneuil-sous-Biard, Poitou-Charentes",
    "value": "PIS"
  },
  {
    "label": "Pittsburgh International Airport Coraopolis, Pennsylvania",
    "value": "PIT"
  },
  {
    "label": "Capitan Concha Airport Piura, Piura",
    "value": "PIU"
  },
  {
    "label": "Pikwitonei Airport Nelson House, Manitoba",
    "value": "PIW"
  },
  {
    "label": "Pico Airport Madalena, Azores",
    "value": "PIX"
  },
  {
    "label": "Dew Station Point Lay, Alaska",
    "value": "PIZ"
  },
  {
    "label": "Sweden Pajala, ",
    "value": "PJA"
  },
  {
    "label": "Panjgur Airport Panjgur, Balochistan",
    "value": "PJG"
  },
  {
    "label": "Puerto Jimenez Airport Puerto Jiménez, Puntarenas",
    "value": "PJM"
  },
  {
    "label": "Alaska Napaskiak, Alaska",
    "value": "PKA"
  },
  {
    "label": "Wood County Airport-Gill Robb Wilson Field Williamstown, West Virginia",
    "value": "PKB"
  },
  {
    "label": "Petropavlovsk Yelizovo Airport Elizovo, Kamchatskaya Oblast",
    "value": "PKC"
  },
  {
    "label": "Parkes Airport Parkes, Australian Capital Territory",
    "value": "PKE"
  },
  {
    "label": "Pangkor Airport Pangkor, Perak",
    "value": "PKG"
  },
  {
    "label": "Pakokku Pakokku, Magway",
    "value": "PKK"
  },
  {
    "label": "French Polynesia Puka Puka, ",
    "value": "PKP"
  },
  {
    "label": "Pokhara Airport Pokhara, West",
    "value": "PKR"
  },
  {
    "label": "Simpang Tiga Airport Pekanbaru, Riau",
    "value": "PKU"
  },
  {
    "label": "Tjilik Riwut Airport Buntok, Kalimantan Tangah",
    "value": "PKY"
  },
  {
    "label": "Pakse Airport Pakxe, Champasak",
    "value": "PKZ"
  },
  {
    "label": "Playa Samara Airport Nicoya, Guanacaste",
    "value": "PLD"
  },
  {
    "label": "Roborough Airport Plymouth, England",
    "value": "PLH"
  },
  {
    "label": "Belize Placencia, ",
    "value": "PLJ"
  },
  {
    "label": "Sultan Mahmud Badaruddin Ii Airport Palembang, Sumatera Selatan",
    "value": "PLM"
  },
  {
    "label": "Pellston Regional Airport Pellston, Michigan",
    "value": "PLN"
  },
  {
    "label": "Port Lincoln Airport Port Lincoln, South Australia",
    "value": "PLO"
  },
  {
    "label": "Palanga International Klaipeda/Palanga, Klaipedos Apskritis",
    "value": "PLQ"
  },
  {
    "label": "Providenciales Airport The Bight Settlements, Providencales and West Caicos",
    "value": "PLS"
  },
  {
    "label": "Pampulha Airport Belo Horizonte, Minas Gerais",
    "value": "PLU"
  },
  {
    "label": "Mutiara Airport Palu, Sulawesi Tengah",
    "value": "PLW"
  },
  {
    "label": " Semipalatinsk, Shyghys Qazaqstan",
    "value": "PLX"
  },
  {
    "label": "H F Verwoerd Airport Port Elizabeth, Eastern Cape",
    "value": "PLZ"
  },
  {
    "label": "Pemba Airport Pemba, Pemba South",
    "value": "PMA"
  },
  {
    "label": "El Tepual International Airport Los Quemas, Los Lagos",
    "value": "PMC"
  },
  {
    "label": "Air Force Plant Nr 42 Palmdale Palmdale, California",
    "value": "PMD"
  },
  {
    "label": "Portsmouth Airport Portsmouth, England",
    "value": "PME"
  },
  {
    "label": "Parma Airport Parma, Emilia Romagna",
    "value": "PMF"
  },
  {
    "label": "Palma de Mallorca Airport Palma, Balearic Islands",
    "value": "PMI"
  },
  {
    "label": " Port Moller, Alaska",
    "value": "PML"
  },
  {
    "label": "Palermo Airport Cinisi, Sicily",
    "value": "PMO"
  },
  {
    "label": "Palmerston North Airport Palmerston North, Manawatu Wanganui",
    "value": "PMR"
  },
  {
    "label": "Del Caribe International Airport Pampatar, Nueva Esparta",
    "value": "PMV"
  },
  {
    "label": "Palmas Airport Palmas, Tocantins",
    "value": "PMW"
  },
  {
    "label": "El Tehuelche Airport Puerto Madryn, Chubut",
    "value": "PMY"
  },
  {
    "label": "Palmar Sur Airport Palmar Sur, Puntarenas",
    "value": "PMZ"
  },
  {
    "label": "Pamplona Airport Noáin, Navarre",
    "value": "PNA"
  },
  {
    "label": "Punta Gorda Airport Punta Gorda, Toledo",
    "value": "PND"
  },
  {
    "label": "Pochentong Airport Phnom Penh, Phnum Penh",
    "value": "PNH"
  },
  {
    "label": "Pohnpei International Airport Palikir, Pohnpei",
    "value": "PNI"
  },
  {
    "label": "Supadio Airport Pontianak, Kalimantan Barat",
    "value": "PNK"
  },
  {
    "label": "Pantelleria Airport Pantelleria, Sicily",
    "value": "PNL"
  },
  {
    "label": "Girua Airport Popondetta, Northern",
    "value": "PNP"
  },
  {
    "label": "Pune Airport Pune, Maharashtra",
    "value": "PNQ"
  },
  {
    "label": "Pointe Noire Airport Pointe-Noire, Kouilou",
    "value": "PNR"
  },
  {
    "label": "Pensacola Regional Airport Pensacola, Florida",
    "value": "PNS"
  },
  {
    "label": "Senador Nilo Coelho Airport Petrolina, Pernambuco",
    "value": "PNZ"
  },
  {
    "label": "Salgado Filho International Airport Porto Alegre, Rio Grande do Sul",
    "value": "POA"
  },
  {
    "label": "Port Gentil Airport Port-Gentil, Ogooue-Martime",
    "value": "POG"
  },
  {
    "label": "Pemba Airport Pemba, Cabo Delgado",
    "value": "POL"
  },
  {
    "label": "Port Moresby International Airport Port Moresby, National Capital",
    "value": "POM"
  },
  {
    "label": "Puerto Plata International Airport San Felipe de Puerto Plata, Puerto Plata",
    "value": "POP"
  },
  {
    "label": "Pori Airport Pori, Western Finland",
    "value": "POR"
  },
  {
    "label": "Piarco Airport Trinidad, Port of Spain",
    "value": "POS"
  },
  {
    "label": "Lawica Airport Poznan, Wielkopolskie",
    "value": "POZ"
  },
  {
    "label": "Presidente Prudente Airport Presidente Prudente, Sao Paulo",
    "value": "PPB"
  },
  {
    "label": "Punta Penasco Airport Pto. Penasco, Sonora",
    "value": "PPE"
  },
  {
    "label": "Pago Pago International Airport Pago Pago, American Samoa",
    "value": "PPG"
  },
  {
    "label": "Petropavlovsk Petropavlovsk, Soltustik Qazaqstan",
    "value": "PPK"
  },
  {
    "label": "Nepal Phaplu, ",
    "value": "PPL"
  },
  {
    "label": "Guillermo Leon Valencia Airport Popayán, Cauca",
    "value": "PPN"
  },
  {
    "label": "Proserpine Aerodrome Brandy Creek, Queensland",
    "value": "PPP"
  },
  {
    "label": "Puerto Princesa International Airport Puerto Princesa, Western Visayas",
    "value": "PPS"
  },
  {
    "label": "Tahiti Faaa Airport Papeete, Windward Islands",
    "value": "PPT"
  },
  {
    "label": "Alaska Port Protection, Alaska",
    "value": "PPV"
  },
  {
    "label": "Duong Dong Airport Kien Giang, Kien Giang",
    "value": "PQC"
  },
  {
    "label": "Northern Maine Regional Airport Presque Isle, Maine",
    "value": "PQI"
  },
  {
    "label": "Port Macquarie Airport Port Macquarie, New South Wales",
    "value": "PQQ"
  },
  {
    "label": "Pilot Station Pilot Station, Alaska",
    "value": "PQS"
  },
  {
    "label": "Ernest A Love Field Airport Prescott, Arizona",
    "value": "PRC"
  },
  {
    "label": "Prague Ruzyne Airport Prague 6, Hlavni mesto Praha",
    "value": "PRG"
  },
  {
    "label": "Praslin Airport Praslin Island, Grand Anse Praslin",
    "value": "PRI"
  },
  {
    "label": "Pristina Airport Prishtina, Kosovo",
    "value": "PRN"
  },
  {
    "label": "Pisa Airport Pisa, Tuscany",
    "value": "PSA"
  },
  {
    "label": "Tri Cities Airport Pasco, Washington",
    "value": "PSC"
  },
  {
    "label": "Mercedita Airport Coto Laurel, Puerto Rico",
    "value": "PSE"
  },
  {
    "label": "Petersburg James A Johnson Airport Petersburg, Alaska",
    "value": "PSG"
  },
  {
    "label": "Antonio Narino Airport Chachagüí, Narino",
    "value": "PSO"
  },
  {
    "label": "Palm Springs International Airport Palm Springs, California",
    "value": "PSP"
  },
  {
    "label": "Pescara Airport Pescara, Abruzzi",
    "value": "PSR"
  },
  {
    "label": "Posadas Airport Posadas, Misiones",
    "value": "PSS"
  },
  {
    "label": "Salvador Ogaya Gutierrez Airport Puerto Suárez, Santa Cruz",
    "value": "PSZ"
  },
  {
    "label": "Port Alsworth Port Alsworth, Alaska",
    "value": "PTA"
  },
  {
    "label": "Malololailai Airport Malololailai, Western",
    "value": "PTF"
  },
  {
    "label": "Pietersburg Municipal Airport Pietersburg, Limpopo",
    "value": "PTG"
  },
  {
    "label": "Port Heiden Airport Port Heiden, Alaska",
    "value": "PTH"
  },
  {
    "label": "Le Raizet Airport Les Abymes, Pointe-À-Pitre",
    "value": "PTP"
  },
  {
    "label": "Platinum Platinum, Alaska",
    "value": "PTU"
  },
  {
    "label": "Tocumen International Airport Tocumen, Panama",
    "value": "PTY"
  },
  {
    "label": "Pueblo Memorial Airport Pueblo, Colorado",
    "value": "PUB"
  },
  {
    "label": "Pont Long Uzein Airport Lescar, Aquitaine",
    "value": "PUF"
  },
  {
    "label": "Punta Cana Airport Salvaleón de Higüey, La Altagracia",
    "value": "PUJ"
  },
  {
    "label": " Pukarua, Tuamotu-Gambier",
    "value": "PUK"
  },
  {
    "label": "Carlos Ibanez de Campo International Airport Punta Arenas, Magallanes y Antartica Chilena",
    "value": "PUQ"
  },
  {
    "label": "Kimhae International Airport Busan, Busan",
    "value": "PUS"
  },
  {
    "label": "Puerto Asis Airport Puerto Asís, Putumayo",
    "value": "PUU"
  },
  {
    "label": "Pullman-Moscow Regional Airport Pullman, Washington",
    "value": "PUW"
  },
  {
    "label": "Pula Airport Pluj, Istarska",
    "value": "PUY"
  },
  {
    "label": "Providencia Island Airport San Andrés, San Andres y Providencia",
    "value": "PVA"
  },
  {
    "label": "Provincetown Municipal Airport Provincetown, Massachusetts",
    "value": "PVC"
  },
  {
    "label": "Theodore Francis Green State Airport Warwick, Rhode Island",
    "value": "PVD"
  },
  {
    "label": "Pudong International Airport Huinan, Shanghai",
    "value": "PVG"
  },
  {
    "label": "Governador Jorge Teixeira de Oliveira Internatio Pôrto Velho, Rondonia",
    "value": "PVH"
  },
  {
    "label": "Preveza Airport Paliambela, Dytiki Ellada",
    "value": "PVK"
  },
  {
    "label": "Lic Gustavo Diaz Ordaz International Airport Puerto Vallarta, Jalisco",
    "value": "PVR"
  },
  {
    "label": "Under Construction Pevek Airport Anadyr', Chukotskiy Avtonomnyy Okrug",
    "value": "PWE"
  },
  {
    "label": "Pal Waukee Airport Wheeling, Illinois",
    "value": "PWK"
  },
  {
    "label": "Jetport International Airport Portland, Maine",
    "value": "PWM"
  },
  {
    "label": "Pavlodar South Airport Pavlodar, Pavlodar",
    "value": "PWQ"
  },
  {
    "label": "Puerto Escondido Airport San Pedro Juchatengo, Oaxaca",
    "value": "PXM"
  },
  {
    "label": "Porto Santo Airport Porto Santo, Madeira",
    "value": "PXO"
  },
  {
    "label": "Pleiku Area Airport Gia Lai, Gia Lai",
    "value": "PXU"
  },
  {
    "label": "Puerto Ayacucho Airport Maroa, Amazonas",
    "value": "PYH"
  },
  {
    "label": "Russia Polyarnyj, Murmanskaya Oblast",
    "value": "PYJ"
  },
  {
    "label": "Pietermaritzburg Airport Pietermaritzburg, Kwazulu Natal",
    "value": "PZB"
  },
  {
    "label": "Penzance Heliport Penzance, England",
    "value": "PZE"
  },
  {
    "label": "Pan Zhi Hua Bao AnYing Pan Zhi Hua, Guangdong",
    "value": "PZI"
  },
  {
    "label": "Puerto Ordaz Airport Ciudad Guayana, Bolivar",
    "value": "PZO"
  },
  {
    "label": "Port Sudan International Airport Port Sudan, Al Bahr al Ahmar",
    "value": "PZU"
  },
  {
    "label": "Bella Coola Airport Masset, British Columbia",
    "value": "QBC"
  },
  {
    "label": "Ashford International Rail Station Ashford, England",
    "value": "QDH"
  },
  {
    "label": "Germany Dusseldorf, North-Rhine-Westphalia",
    "value": "QDU"
  },
  {
    "label": "Freiburg Hauptbahnhof Freiburg, Baden-Württemberg",
    "value": "QFB"
  },
  {
    "label": "Saarbruecken Rail Station Sarrebruck, Saar",
    "value": "QFZ"
  },
  {
    "label": "Cheju International Airport Jeju-Si, Jaeju-Do",
    "value": "QJY"
  },
  {
    "label": "France Nantes, null",
    "value": "QJZ"
  },
  {
    "label": "Koeln Hauptbahnhof Cologne, North-Rhine-Westphalia",
    "value": "QKL"
  },
  {
    "label": "Owerri Owerri, Imo",
    "value": "QOW"
  },
  {
    "label": "Dover Rail Station Dover, England",
    "value": "QQD"
  },
  {
    "label": "Harwich Rail Station Harwich, England",
    "value": "QQH"
  },
  {
    "label": "England London, England",
    "value": "QQK"
  },
  {
    "label": "Manchester International Airport Manchester, England",
    "value": "QQM"
  },
  {
    "label": "Birmingham International Airport Birmingham, England",
    "value": "QQN"
  },
  {
    "label": "Paddington Station London, England",
    "value": "QQP"
  },
  {
    "label": "St Pancras International Britrail Rail Zone S, ",
    "value": "QQS"
  },
  {
    "label": "Birmingham International Airport London, England",
    "value": "QQU"
  },
  {
    "label": "Waterloo Railway Station London, England",
    "value": "QQW"
  },
  {
    "label": "Bath Rail Service Bath, England",
    "value": "QQX"
  },
  {
    "label": "Birmingham International Airport York, England",
    "value": "QQY"
  },
  {
    "label": "Rotterdam Airport Rotterdam, ",
    "value": "QRH"
  },
  {
    "label": "Queretaro Airport Queretaro, Queretaro de Arteaga",
    "value": "QRO"
  },
  {
    "label": "Delta Warri, Delta",
    "value": "QRW"
  },
  {
    "label": "Setif Setif, Setif",
    "value": "QSF"
  },
  {
    "label": " Qulin, Missouri",
    "value": "QUL"
  },
  {
    "label": "Afonso Pena International Airport Sao Jose dos Pinhais, Parana",
    "value": "QWB"
  },
  {
    "label": "Aix Les Milles Airport Aix-les-milles, Provence-alpes-cote d'Azur",
    "value": "QXB"
  },
  {
    "label": "Pays de la Loire Angers, Pays de la Loire",
    "value": "QXG"
  },
  {
    "label": "Gavleborg Gefle, Gavleborg",
    "value": "QYU"
  },
  {
    "label": "Uppsala Station Uppsala, ",
    "value": "QYX"
  },
  {
    "label": "Rabaul Airport Rabaul, East New Britain",
    "value": "RAB"
  },
  {
    "label": "Arar Airport Arar, Al Hudud ash Shamaliyah",
    "value": "RAE"
  },
  {
    "label": "Rafha Airport Rafha, Al Hudud ash Shamaliyah",
    "value": "RAH"
  },
  {
    "label": "Francisco Mendes Airport Praia, Praia",
    "value": "RAI"
  },
  {
    "label": "Rajkot Airport Rajkot, Gujarat",
    "value": "RAJ"
  },
  {
    "label": "Menara Airport Marrakesh, Marrakech",
    "value": "RAK"
  },
  {
    "label": "Leite Lopes Airport Ribeirão Prêto, Sao Paulo",
    "value": "RAO"
  },
  {
    "label": "Rapid City Regional Airport Rapid City, South Dakota",
    "value": "RAP"
  },
  {
    "label": "Rarotonga International Airport Avarua, Rarotonga",
    "value": "RAR"
  },
  {
    "label": "Rasht Airport Rasht, Gilan",
    "value": "RAS"
  },
  {
    "label": "Sale Airport Rabat, Rabat-Sale",
    "value": "RBA"
  },
  {
    "label": "Brooks Lodge Brooks Lodge, Alaska",
    "value": "RBH"
  },
  {
    "label": "Rurrenabaque Airport Rurrenabaque, El Beni",
    "value": "RBQ"
  },
  {
    "label": "Presidente Medici International Airport Rio Branco, Norte",
    "value": "RBR"
  },
  {
    "label": "Ramata Ramata, Valmieras Rajons",
    "value": "RBV"
  },
  {
    "label": "Roundup Airport Roundup, Montana",
    "value": "RBX"
  },
  {
    "label": "Ruby Airport Ruby, Alaska",
    "value": "RBY"
  },
  {
    "label": "Richards Bay Airport Empangeni, Kwazulu Natal",
    "value": "RCB"
  },
  {
    "label": "Roche Harbor Airport Friday Harbor, Washington",
    "value": "RCE"
  },
  {
    "label": "Almirante Padilla Airport Ríohacha, La Guajira",
    "value": "RCH"
  },
  {
    "label": " Redcliffe, ",
    "value": "RCL"
  },
  {
    "label": "Richmond Aerodrome Bellfield, Queensland",
    "value": "RCM"
  },
  {
    "label": " Cinder River, Alaska",
    "value": "RCP"
  },
  {
    "label": "Red Dog Red Dog, Alaska",
    "value": "RDB"
  },
  {
    "label": "Redding Municipal Airport Redding, California",
    "value": "RDD"
  },
  {
    "label": "Roberts Field Airport Redmond, Oregon",
    "value": "RDM"
  },
  {
    "label": "Malaysia Redang, ",
    "value": "RDN"
  },
  {
    "label": "Durham International Airport Raleigh/Durham, North Carolina",
    "value": "RDU"
  },
  {
    "label": "Red Devil Red Devil, Alaska",
    "value": "RDV"
  },
  {
    "label": "Marcillac Airport Marcillac, Midi-Pyrenees",
    "value": "RDZ"
  },
  {
    "label": "Reao Reao, Tuamotu-Gambier",
    "value": "REA"
  },
  {
    "label": "Gilberto Freyre International Airport Recife, Pernambuco",
    "value": "REC"
  },
  {
    "label": "Reggio Calabria Airport Reggio di Calabria, Calabria",
    "value": "REG"
  },
  {
    "label": "Trelew Almirante Zar Airport Trelew, Chubut",
    "value": "REL"
  },
  {
    "label": "Orenburg East Airport Orenburg, Orenburgskaya Oblast",
    "value": "REN"
  },
  {
    "label": "Siem Reap Airport Siemrap, Siem Reab",
    "value": "REP"
  },
  {
    "label": "Resistencia Airport Makallé, Chaco",
    "value": "RES"
  },
  {
    "label": "Reus Airport Reus, Catalonia",
    "value": "REU"
  },
  {
    "label": "Reynosa International Airport Reynosa, Tamaulipas",
    "value": "REX"
  },
  {
    "label": "Greater Rockford Airport Rockford, Illinois",
    "value": "RFD"
  },
  {
    "label": "Raiatea Island Airport Papeete, Leeward Islands",
    "value": "RFP"
  },
  {
    "label": "Rio Grande Airport Río Grande, Tierra del Fuego",
    "value": "RGA"
  },
  {
    "label": "Rangiroa Airport Papeete, Tuamotu-Gambier",
    "value": "RGI"
  },
  {
    "label": "Rio Gallegos Airport Río Gallegos, Santa Cruz",
    "value": "RGL"
  },
  {
    "label": "Mingaladon Airport Insein, Yangon",
    "value": "RGN"
  },
  {
    "label": "Rhinelander-Oneida County Airport Rhinelander, Wisconsin",
    "value": "RHI"
  },
  {
    "label": "Paradisi Airport Rodhos, Notio Aigaio",
    "value": "RHO"
  },
  {
    "label": "Santa Maria Airport Santa Maria, Rio Grande do Sul",
    "value": "RIA"
  },
  {
    "label": "Gen. Buech Airport Riberalta, El Beni",
    "value": "RIB"
  },
  {
    "label": "Richmond International Airport Richmond, Virginia",
    "value": "RIC"
  },
  {
    "label": "Rio Grande Airport Rio Grande, Rio Grande do Sul",
    "value": "RIG"
  },
  {
    "label": "Rishiri Airport Rishirifuji-cho, Hokkaido Prefecture",
    "value": "RIS"
  },
  {
    "label": "March Air Force Base Alessandro, California",
    "value": "RIV"
  },
  {
    "label": "Riverton Regional Airport Riverton, Wyoming",
    "value": "RIW"
  },
  {
    "label": "Riga Airport Marupe, Rigas Rajons",
    "value": "RIX"
  },
  {
    "label": "Riyan Airport Shuhayr, Hadramawt",
    "value": "RIY"
  },
  {
    "label": "Rajahmundry Airport Kapavaram, Andhra Pradesh",
    "value": "RJA"
  },
  {
    "label": "Rijeka Krk Airport Rijeka, Primorsko-Goranska",
    "value": "RJK"
  },
  {
    "label": "Agoncillo Logrono, La Rioja",
    "value": "RJL"
  },
  {
    "label": "Kerman Rafsanjan, Kerman",
    "value": "RJN"
  },
  {
    "label": "Knox County Regional Airport Owls Head, Maine",
    "value": "RKD"
  },
  {
    "label": "Rock Springs-Sweetwater County Airport Rock Springs, Wyoming",
    "value": "RKS"
  },
  {
    "label": "Ras Al Khaimah International Airport , Ras Al Khaimah",
    "value": "RKT"
  },
  {
    "label": "Reykjavik Airport Reykjavik, Reykjavik",
    "value": "RKV"
  },
  {
    "label": " Rostock-laage, Mecklenburg-Vorpommern",
    "value": "RLG"
  },
  {
    "label": "Roma Aerodrome Blythdale, Queensland",
    "value": "RMA"
  },
  {
    "label": "Marsa Alam International Marsa Alam, Al Bahr al Ahmar",
    "value": "RMF"
  },
  {
    "label": "Rimini Airport Rimini, Emilia Romagna",
    "value": "RMI"
  },
  {
    "label": "Rampart Rampart, Alaska",
    "value": "RMP"
  },
  {
    "label": "Taiwan Taichung, null",
    "value": "RMQ"
  },
  {
    "label": "Remada Airport Tatawin, Tatawin",
    "value": "RMT"
  },
  {
    "label": "Ulawa Airport Arona, Toliara",
    "value": "RNA"
  },
  {
    "label": "Ronneby Airport Kallinge, Blekinge",
    "value": "RNB"
  },
  {
    "label": "Rennell Rennell, Central",
    "value": "RNL"
  },
  {
    "label": "Bornholm Airport Ronne, Hovedstaden",
    "value": "RNN"
  },
  {
    "label": "Reno-Tahoe International Airport Reno, Nevada",
    "value": "RNO"
  },
  {
    "label": "Rongelap Island Rongelap Island, Rongelap",
    "value": "RNP"
  },
  {
    "label": "St Jacques Airport St-Jacques, Brittany",
    "value": "RNS"
  },
  {
    "label": "Roanoke Regional Airport-Woodrum Field Roanoke, Virginia",
    "value": "ROA"
  },
  {
    "label": "Roberts International Airport Harbelville, Grand Bassa",
    "value": "ROB"
  },
  {
    "label": "Greater Rochester International Airport Rochester, New York",
    "value": "ROC"
  },
  {
    "label": "Mueang Poi Et Roi Et, Roi Et",
    "value": "ROI"
  },
  {
    "label": "Rockhampton Airport Rockhampton, Queensland",
    "value": "ROK"
  },
  {
    "label": "Rondonopolis Airport Rondonópolis, Mato Grosso",
    "value": "ROO"
  },
  {
    "label": "Rota International Airport Rota, Northern Mariana Islands",
    "value": "ROP"
  },
  {
    "label": "Koror Airport Koror, Koror",
    "value": "ROR"
  },
  {
    "label": "Rosario Airport Rosario, Santa Fe",
    "value": "ROS"
  },
  {
    "label": "Rotorua Airport Rotorua, Bay Of Plenty",
    "value": "ROT"
  },
  {
    "label": "Rostov East Airport Taganrog, Rostovskaya Oblast",
    "value": "ROV"
  },
  {
    "label": "Roswell Industrial Air Center Roswell, New Mexico",
    "value": "ROW"
  },
  {
    "label": "Raipur Airport Banarsi, Chhattisgarh",
    "value": "RPR"
  },
  {
    "label": "Mauritius Rodrigues Is, Rodrigues",
    "value": "RRG"
  },
  {
    "label": "Roeros Airport Roros, Sor-Trondelag",
    "value": "RRS"
  },
  {
    "label": "Santa Rosa Airport Santa Rosa, La Pampa",
    "value": "RSA"
  },
  {
    "label": "Rock Sound Airport Rock Sound, South Eleuthera",
    "value": "RSD"
  },
  {
    "label": "Russian Russian Mission, Alaska",
    "value": "RSH"
  },
  {
    "label": "Rosario Seaplane Base Olga, Washington",
    "value": "RSJ"
  },
  {
    "label": "Rochester International Airport Rochester, Minnesota",
    "value": "RST"
  },
  {
    "label": "Yeosu Airport Yeosu-Si, Jeollanam-Do",
    "value": "RSU"
  },
  {
    "label": "Southwest Florida International Airport Fort Myers, Florida",
    "value": "RSW"
  },
  {
    "label": "Rotuma Rotuma Island, Rotuma",
    "value": "RTA"
  },
  {
    "label": "Roatan Island Airport Roatán, Islas de la Bahía",
    "value": "RTB"
  },
  {
    "label": "Satartacik Airport Ruteng, Nusa Tengarra Timur",
    "value": "RTG"
  },
  {
    "label": "Rotterdam Airport Rotterdam, South Holland",
    "value": "RTM"
  },
  {
    "label": "Saratov Airport Saratov, Saratovskaya Oblast",
    "value": "RTW"
  },
  {
    "label": " Arua, Arua",
    "value": "RUA"
  },
  {
    "label": " Oslo, Oslo Fylke",
    "value": "RUD"
  },
  {
    "label": "King Khalid International Airport Riyadh, Ar Riyad",
    "value": "RUH"
  },
  {
    "label": "Nepal Rukumkot, Midwest",
    "value": "RUK"
  },
  {
    "label": "Rumjatar Airport Rumjatar, Central",
    "value": "RUM"
  },
  {
    "label": "Saint Denis Gillot Airport Sainte-Marie, St-Denis",
    "value": "RUN"
  },
  {
    "label": " Rurutu, Austral Islands",
    "value": "RUR"
  },
  {
    "label": "Rutland State Airport North Clarendon, Vermont",
    "value": "RUT"
  },
  {
    "label": " Farafangana, Fianarantsoa",
    "value": "RVA"
  },
  {
    "label": "Saravena El Eden Airport Saravena, Arauca",
    "value": "RVE"
  },
  {
    "label": "Ryumsjoen Airport Rorvik, Nord-Trondelag",
    "value": "RVK"
  },
  {
    "label": "Rovaniemi Airport Saarenkylä, Lapland",
    "value": "RVN"
  },
  {
    "label": "Western Australia Ravensthorpe, Western Australia",
    "value": "RVT"
  },
  {
    "label": "Raivavae Airport Rairua, Austral Islands",
    "value": "RVV"
  },
  {
    "label": "Roxas Airport Ivisan, Western Visayas",
    "value": "RXS"
  },
  {
    "label": "Moss Airport Rygge, ",
    "value": "RYG"
  },
  {
    "label": "Rahim Yar Khan Rahim Yar Khan, Punjab",
    "value": "RYK"
  },
  {
    "label": "Jasionka Airport Trzebownisko, Subcarpathia",
    "value": "RZE"
  },
  {
    "label": "Philippines Taytay Sandoval, Calabarzon",
    "value": "RZP"
  },
  {
    "label": "Ramsar Airport Ramsar, Mazandaran",
    "value": "RZR"
  },
  {
    "label": " Sawan, ",
    "value": "RZS"
  },
  {
    "label": "Yrausquin Airport , Saba",
    "value": "SAB"
  },
  {
    "label": "Sanaa International Airport Ar Raudha, San`a´",
    "value": "SAH"
  },
  {
    "label": "El Salvador International Airport San Luis, La Paz",
    "value": "SAL"
  },
  {
    "label": "San Diego International Airport San Diego, California",
    "value": "SAN"
  },
  {
    "label": "La Mesa International Airport San Pedro Sula, Cortés",
    "value": "SAP"
  },
  {
    "label": "San Andros Municipal Airport San Andros, North Andros",
    "value": "SAQ"
  },
  {
    "label": "San Antonio International Airport San Antonio, Texas",
    "value": "SAT"
  },
  {
    "label": "Savannah International Airport Savannah, Georgia",
    "value": "SAV"
  },
  {
    "label": "Istanbul Sabiha Gokcen Airport Umraniye, Istanbul",
    "value": "SAW"
  },
  {
    "label": "Santa Barbara Municipal Airport Goleta, California",
    "value": "SBA"
  },
  {
    "label": "Gustavia Airport Gustavia, Saint-Martin et Saint-Barthélé",
    "value": "SBH"
  },
  {
    "label": "Santa Ana de Yacuma Airport Santa Ana, El Beni",
    "value": "SBL"
  },
  {
    "label": "South Bend Regional Airport South Bend, Indiana",
    "value": "SBN"
  },
  {
    "label": "San Luis Obispo County Airport San Luis Obispo, California",
    "value": "SBP"
  },
  {
    "label": "Saibai Island Saibai Island, Queensland",
    "value": "SBR"
  },
  {
    "label": "Sibu Airport Sibu, Sarawak",
    "value": "SBW"
  },
  {
    "label": "Salisbury-Wicomico County Regional Airport Salisbury, Maryland",
    "value": "SBY"
  },
  {
    "label": "Turnisor Airport Sibiu, Sibiu",
    "value": "SBZ"
  },
  {
    "label": "Deadhorse Airport Prudhoe Bay, Alaska",
    "value": "SCC"
  },
  {
    "label": "University Park Airport State College, Pennsylvania",
    "value": "SCE"
  },
  {
    "label": "Stockton Metropolitan Airport Stockton, California",
    "value": "SCK"
  },
  {
    "label": "Arturo Merino Benitez International Airport Lo Amor, Santiago",
    "value": "SCL"
  },
  {
    "label": "Scammon Bay Scammon Bay, Alaska",
    "value": "SCM"
  },
  {
    "label": "Saarbrucken Airport Sarrebruck, Saar",
    "value": "SCN"
  },
  {
    "label": "Aktau Aktau, Mangghystau",
    "value": "SCO"
  },
  {
    "label": "Santiago Airport Santiago, Galicia",
    "value": "SCQ"
  },
  {
    "label": " Socotra, ",
    "value": "SCT"
  },
  {
    "label": "Antonio Maceo Airport , Santiago de Cuba",
    "value": "SCU"
  },
  {
    "label": "Suceava Salcea Airport , Suceava",
    "value": "SCV"
  },
  {
    "label": "Russia Syktyvkar, Komi",
    "value": "SCW"
  },
  {
    "label": "Salina Cruz Salina Cruz, ",
    "value": "SCX"
  },
  {
    "label": "San Cristobal Airport Puerto Baquerizo Moreno, Galapagos",
    "value": "SCY"
  },
  {
    "label": "Santa Cruz Is Santa Cruz Is, ",
    "value": "SCZ"
  },
  {
    "label": "Lubango Airport Lubango, Huila",
    "value": "SDD"
  },
  {
    "label": "Santiago del Estero Airport Frías, Santiago del Estero",
    "value": "SDE"
  },
  {
    "label": "Louisville International Airport Louisville, Kentucky",
    "value": "SDF"
  },
  {
    "label": "Sanandaj Airport Sanandaj, Kordestan",
    "value": "SDG"
  },
  {
    "label": "Sendai Airport Natori-shi, Miyagi Prefecture",
    "value": "SDJ"
  },
  {
    "label": "Sandakan Airport Sandakan, Sabah",
    "value": "SDK"
  },
  {
    "label": "Sundsvall Harnosand Airport Bergeforsen, Vasternorrland",
    "value": "SDL"
  },
  {
    "label": "Sandane Airport Sandene, Sogn og Fjordane Fylke",
    "value": "SDN"
  },
  {
    "label": "Sand Point Airport Sand Point, Alaska",
    "value": "SDP"
  },
  {
    "label": "De Las Americas International Airport Santo Domingo, Santo Domingo",
    "value": "SDQ"
  },
  {
    "label": "Santander Airport Santander, Cantabria",
    "value": "SDR"
  },
  {
    "label": "Saidu Sharif Airport Saidu, North-West Frontier",
    "value": "SDT"
  },
  {
    "label": "Santos Dumont Airport Rio de Janeiro, Rio de Janeiro",
    "value": "SDU"
  },
  {
    "label": "Sde Dov Airport Tel Aviv Yafo, Tel Aviv",
    "value": "SDV"
  },
  {
    "label": "Sidney Richland Municipal Airport Sidney, Montana",
    "value": "SDY"
  },
  {
    "label": "Tacoma International Airport Seattle, Washington",
    "value": "SEA"
  },
  {
    "label": "Sebha Airport Sabha, Sabha",
    "value": "SEB"
  },
  {
    "label": "Southend Airport Southend on Sea, England",
    "value": "SEN"
  },
  {
    "label": " Siwa, Matruh",
    "value": "SEW"
  },
  {
    "label": "Seychelles International Airport Victoria, English River",
    "value": "SEZ"
  },
  {
    "label": "El Maou Airport Safaqis, Safaqis",
    "value": "SFA"
  },
  {
    "label": "Orlando Sanford International Airport Sanford, Florida",
    "value": "SFB"
  },
  {
    "label": "San Fernando de Apure Airport San Fernando de Apure, Apure",
    "value": "SFD"
  },
  {
    "label": "San Fernando Airport San Fernando, Ilocos Region",
    "value": "SFE"
  },
  {
    "label": "Grand Case-Esperance Airport , Saint-Martin et Saint-Barthélé",
    "value": "SFG"
  },
  {
    "label": "Kangerlussuaq Kangerlussuaq, Vestgronland",
    "value": "SFJ"
  },
  {
    "label": " Sao Filipe, Fogo",
    "value": "SFL"
  },
  {
    "label": "Sauce Viejo Airport Santa Fe, Santa Fe",
    "value": "SFN"
  },
  {
    "label": "San Francisco International Airport San Francisco, California",
    "value": "SFO"
  },
  {
    "label": "Skelleftea Airport Skelleftea, Vasterbotten",
    "value": "SFT"
  },
  {
    "label": "Surgut North Airport Khanty-Mansiysk, Khanty-Mansiyskiy Avtonomnyy Okr",
    "value": "SGC"
  },
  {
    "label": "Sonderborg Airport Sonderborg, Syddanmark",
    "value": "SGD"
  },
  {
    "label": "Springfield Regional Airport Springfield, Missouri",
    "value": "SGF"
  },
  {
    "label": "Tan Son Nhut Airport Ho Chi Minh City, Ho Chi Minh",
    "value": "SGN"
  },
  {
    "label": "St George St George, Queensland",
    "value": "SGO"
  },
  {
    "label": "St George Municipal Airport St. George, Utah",
    "value": "SGU"
  },
  {
    "label": "Ruvuma Songea, Ruvuma",
    "value": "SGX"
  },
  {
    "label": "Skagway Airport Skagway, Alaska",
    "value": "SGY"
  },
  {
    "label": "Hongqiao Airport Shanghai, Shanghai",
    "value": "SHA"
  },
  {
    "label": "Nakashibetsu Airport Nakashibetsu-cho, Hokkaido Prefecture",
    "value": "SHB"
  },
  {
    "label": " Indaselassie, Tigray",
    "value": "SHC"
  },
  {
    "label": "Shenandoah Valley Regional Airport Weyers Cave, Virginia",
    "value": "SHD"
  },
  {
    "label": "Dongta Airport Shenyang, Liaoning",
    "value": "SHE"
  },
  {
    "label": "Shungnak Airport Shungnak, Alaska",
    "value": "SHG"
  },
  {
    "label": "Shishmaref Shishmaref, Alaska",
    "value": "SHH"
  },
  {
    "label": "Sharjah International Airport Ajman, Ajman",
    "value": "SHJ"
  },
  {
    "label": " Shillong, Assam",
    "value": "SHL"
  },
  {
    "label": "Nanki-Shirahama Airport Shirahama-cho, Wakayama Prefecture",
    "value": "SHM"
  },
  {
    "label": "Qinhuangdao Qinhuangdao, 内蒙古自治区",
    "value": "SHP"
  },
  {
    "label": "Sheridan County Airport Sheridan, Wyoming",
    "value": "SHR"
  },
  {
    "label": "Shreveport Regional Airport Shreveport, Louisiana",
    "value": "SHV"
  },
  {
    "label": "Sharurah Airport As-Saraura, Najran",
    "value": "SHW"
  },
  {
    "label": "Shageluk Shageluk, Alaska",
    "value": "SHX"
  },
  {
    "label": "Shinyanga Shinyanga, Shinyanga",
    "value": "SHY"
  },
  {
    "label": "Xiguan Airport Xi'an, Shaanxi",
    "value": "SIA"
  },
  {
    "label": " Sinop, Sinop",
    "value": "SIC"
  },
  {
    "label": "Amilcar Cabral International Airport Santa Maria, Sal",
    "value": "SID"
  },
  {
    "label": "Simara Airport Simara, Central",
    "value": "SIF"
  },
  {
    "label": "Isla Grande Airport San Juan, Puerto Rico",
    "value": "SIG"
  },
  {
    "label": "Singapore Changi Airport Singapore, South East",
    "value": "SIN"
  },
  {
    "label": "Simferopol North Airport Simferopol', Krym, Avtonomna Respublika",
    "value": "SIP"
  },
  {
    "label": "Sitka Airport Sitka, Alaska",
    "value": "SIT"
  },
  {
    "label": "Norman Y Mineta San Jose International Airport San Jose, California",
    "value": "SJC"
  },
  {
    "label": "Los Cabos International Airport S. Jose del Cabo, Baja California Sur",
    "value": "SJD"
  },
  {
    "label": "San Jose del Guaviaro Airport San Jose del Guavuare, Guavaire",
    "value": "SJE"
  },
  {
    "label": "San Jose Airport San Jose, Mimaropa",
    "value": "SJI"
  },
  {
    "label": "Sarajevo Airport Ilidža, Federacija Bosne I Hercegovine",
    "value": "SJJ"
  },
  {
    "label": "Sao Jose dos Campos Airport Sao Jose dos Campos, Sao Paulo",
    "value": "SJK"
  },
  {
    "label": "Juan Santamaria International Airport Heredia, Alajuela",
    "value": "SJO"
  },
  {
    "label": "Sao Jose do Rio Preto Airport São José do Rio Prêto, Sao Paulo",
    "value": "SJP"
  },
  {
    "label": "Mathis Field Airport San Angelo, Texas",
    "value": "SJT"
  },
  {
    "label": "Luis Munoz Marin Airport Carolina, Puerto Rico",
    "value": "SJU"
  },
  {
    "label": "Shijiazhuang Shijiazhuang, Hebei",
    "value": "SJW"
  },
  {
    "label": "Ilmajoki Airport Seinajoki, Western Finland",
    "value": "SJY"
  },
  {
    "label": "Sao Jorge Airport Velas, Azores",
    "value": "SJZ"
  },
  {
    "label": "Golden Rock Airport Basseterre, Saint George Basseterre",
    "value": "SKB"
  },
  {
    "label": "Papua New Guinea Suki, ",
    "value": "SKC"
  },
  {
    "label": "Samarqand Samarkand, Samarqand",
    "value": "SKD"
  },
  {
    "label": "Geiterygen Airport Skien, Telemark Fylke",
    "value": "SKE"
  },
  {
    "label": "Thessaloniki Airport Thessaloniki, Kentriki Makedonia",
    "value": "SKG"
  },
  {
    "label": "Surkhet Surkhet, Midwest",
    "value": "SKH"
  },
  {
    "label": "Shaktoolik Shaktoolik, Alaska",
    "value": "SKK"
  },
  {
    "label": "Stokmarknes Airport Stokkmarknes, Nordland Fylke",
    "value": "SKN"
  },
  {
    "label": "Sadiq Abubakar Iii Airport Shunni, Sokoto",
    "value": "SKO"
  },
  {
    "label": "Petrovec Skopje, Ilinden",
    "value": "SKP"
  },
  {
    "label": "Sialkot Sialkot, Punjab",
    "value": "SKT"
  },
  {
    "label": "Skiros Airport Skiros, Sterea Ellada",
    "value": "SKU"
  },
  {
    "label": "Sukkur Airport Sukkur, Sindh",
    "value": "SKZ"
  },
  {
    "label": "Salta Airport La Caldera, Salta",
    "value": "SLA"
  },
  {
    "label": "Salt Lake City International Airport Salt Lake City, Utah",
    "value": "SLC"
  },
  {
    "label": "Mcnary Field Airport Salem, Oregon",
    "value": "SLE"
  },
  {
    "label": "Torba Sola, Torba",
    "value": "SLH"
  },
  {
    "label": " Solwezi, North-Western",
    "value": "SLI"
  },
  {
    "label": "Adirondack Regional Airport Saranac Lake, New York",
    "value": "SLK"
  },
  {
    "label": "Salalah Airport Salalah, Zufar",
    "value": "SLL"
  },
  {
    "label": "Salamanca Airport Villagonzalo de Tormes, Castille and Leon",
    "value": "SLM"
  },
  {
    "label": "Salina Municipal Airport Salina, Kansas",
    "value": "SLN"
  },
  {
    "label": "San Luis Potosi Airport S. Luis Potosi, San Luis Potosi",
    "value": "SLP"
  },
  {
    "label": "Sleetmute Airport Sleetmute, Alaska",
    "value": "SLQ"
  },
  {
    "label": "Vigie Airport St Lucia, Castries",
    "value": "SLU"
  },
  {
    "label": "Simla Airport Jutogh, Himachal Pradesh",
    "value": "SLV"
  },
  {
    "label": "Plan de Guadalupe Airport General Cepeda, Coahuila de Zaragoza",
    "value": "SLW"
  },
  {
    "label": "Salt Cay Airport Salt Cay, Salt Cay",
    "value": "SLX"
  },
  {
    "label": "Russia Salekhard, Yamalo-Nenetskiy Avtonomnyy Okru",
    "value": "SLY"
  },
  {
    "label": "Marechal Cunha Machado International Airport Salvador, Nordeste",
    "value": "SLZ"
  },
  {
    "label": "Santa Maria Airport Vila do Porto, Azores",
    "value": "SMA"
  },
  {
    "label": "Sacramento International Airport Sacramento, California",
    "value": "SMF"
  },
  {
    "label": "Samos Airport Pithagorion, Voreio Aigaio",
    "value": "SMI"
  },
  {
    "label": "Alaska St Michael, Alaska",
    "value": "SMK"
  },
  {
    "label": "Stella Maris Airport Simms, Long Island",
    "value": "SML"
  },
  {
    "label": "Lemhi County Airport Salmon, Idaho",
    "value": "SMN"
  },
  {
    "label": "Simon Bolivar Airport , Magdalena",
    "value": "SMR"
  },
  {
    "label": "Sainte Marie Airport Toamasina, Toamasina",
    "value": "SMS"
  },
  {
    "label": "Santa Maria Public Airport Santa Maria, California",
    "value": "SMX"
  },
  {
    "label": "John Wayne Airport Santa Ana, California",
    "value": "SNA"
  },
  {
    "label": "General Ulpiano Paez Airport Salinas, Guayas",
    "value": "SNC"
  },
  {
    "label": "Preguica Airport Ribeira Brava, Sao Nicolau",
    "value": "SNE"
  },
  {
    "label": "Shannon Airport Shannon Airport, ",
    "value": "SNN"
  },
  {
    "label": "Sakon Nakhon Airport Sakon Nakhon, Sakon Nakhon",
    "value": "SNO"
  },
  {
    "label": "Saint Paul Island Saint Paul Island, Alaska",
    "value": "SNP"
  },
  {
    "label": "Montoir Airport Montoir-de-Bretagne, Pays de la Loire",
    "value": "SNR"
  },
  {
    "label": "Santa Clara Airport Esperanza, Villa Clara",
    "value": "SNU"
  },
  {
    "label": "Myanmar Thandwe, Rakhine State",
    "value": "SNW"
  },
  {
    "label": "Sarmellek Airport Zalavár, Zala",
    "value": "SOB"
  },
  {
    "label": "Adi Sumarmo Wiryokusumo Airport Surakarta, Jawa Tengah",
    "value": "SOC"
  },
  {
    "label": "Vrazhdebna Airport Sofia, Sofiya-Grad",
    "value": "SOF"
  },
  {
    "label": "Haukasen Airport Kaupanger, Sogn og Fjordane Fylke",
    "value": "SOG"
  },
  {
    "label": "Sorkjosen Airport Sørkjosen, Troms Fylke",
    "value": "SOJ"
  },
  {
    "label": "San Tome Airport Cantaura, Anzoategui",
    "value": "SOM"
  },
  {
    "label": "Santo Pekoa International Airport , Sanma",
    "value": "SON"
  },
  {
    "label": "Soderhamn Airport Soderhamn, Gavleborg",
    "value": "SOO"
  },
  {
    "label": "Jefman Airport Sorong, West Irian Jaya",
    "value": "SOQ"
  },
  {
    "label": "Southampton International Airport Southampton, England",
    "value": "SOU"
  },
  {
    "label": " Seldovia, Alaska",
    "value": "SOV"
  },
  {
    "label": "Show Low Municipal Airport Show Low, Arizona",
    "value": "SOW"
  },
  {
    "label": "St Thomas Seaplane Base Charlotte Amalie, US Virgin Islands",
    "value": "SPB"
  },
  {
    "label": "Santa Cruz de la Palma Airport Breña Alta, Canary Islands",
    "value": "SPC"
  },
  {
    "label": "Saidpur Airport Dinajpur, Rajshahi",
    "value": "SPD"
  },
  {
    "label": "Capital Airport Springfield, Illinois",
    "value": "SPI"
  },
  {
    "label": "Santa Maria Airport Vila do Porto, Azores",
    "value": "SPL"
  },
  {
    "label": "Saipan International Airport Saipan, Northern Mariana Islands",
    "value": "SPN"
  },
  {
    "label": "Menongue East Airport Menongue, Cuando Cubango",
    "value": "SPP"
  },
  {
    "label": "San Pedro Airport San Pedro, Belize",
    "value": "SPR"
  },
  {
    "label": "Sheppard Air Force Base Wichita Falls, Texas",
    "value": "SPS"
  },
  {
    "label": "Split Airport Split, Splitsko-Dalmatinska",
    "value": "SPU"
  },
  {
    "label": "Sweden Storuman, null",
    "value": "SQO"
  },
  {
    "label": "Santa Rosa Airport Santa Rosa, Rio Grande do Sul",
    "value": "SRA"
  },
  {
    "label": "Juana Azurduy de Padilla Airport Sucre, Chuquisaca",
    "value": "SRE"
  },
  {
    "label": "Achmad Yani Airport Semarang, Jawa Tengah",
    "value": "SRG"
  },
  {
    "label": "Capitan G Q Guardia San Borja, Santa Cruz",
    "value": "SRJ"
  },
  {
    "label": "Sorstukken Airport Skjold, Rogaland Fylke",
    "value": "SRP"
  },
  {
    "label": "Sarasota Bradenton Airport Sarasota, Florida",
    "value": "SRQ"
  },
  {
    "label": "Alaska Stony River, Alaska",
    "value": "SRV"
  },
  {
    "label": "Surt Sert, Surt",
    "value": "SRX"
  },
  {
    "label": " Sary, ",
    "value": "SRY"
  },
  {
    "label": "El Trompillo Airport Santa Cruz de la Sierra, Santa Cruz",
    "value": "SRZ"
  },
  {
    "label": "Deputado Luis Eduardo Magalhaes International Ai Salvador, Nordeste",
    "value": "SSA"
  },
  {
    "label": "Christiansted Harbor Seaplane Base Christiansted, US Virgin Islands",
    "value": "SSB"
  },
  {
    "label": "Malabo Airport Malabo, Bioko Norte",
    "value": "SSG"
  },
  {
    "label": "Ras Nasrani Airport Al Arish, Janub Sina'",
    "value": "SSH"
  },
  {
    "label": "Stokka Airport Sandnessjoen, Nordland Fylke",
    "value": "SSJ"
  },
  {
    "label": "Vanuatu Sara, ",
    "value": "SSR"
  },
  {
    "label": "Mbanza Congo Airport M'banza Congo, Zaire",
    "value": "SSY"
  },
  {
    "label": "St Cloud Regional Airport St. Cloud, Minnesota",
    "value": "STC"
  },
  {
    "label": "Mayor Buenaventura Vivas Airport Santa Ana del Tachira, Tachira",
    "value": "STD"
  },
  {
    "label": "Alaska St George Island, Alaska",
    "value": "STG"
  },
  {
    "label": "Cibao International Airport La Lomota, Santiago",
    "value": "STI"
  },
  {
    "label": "Lambert St Louis International Airport St. Louis, Missouri",
    "value": "STL"
  },
  {
    "label": "Santarem International Airport Santarém, Para",
    "value": "STM"
  },
  {
    "label": "London Stansted International Airport Stansted Mountfitchet, England",
    "value": "STN"
  },
  {
    "label": "Stuttgart Airport Stuttgart, Baden-Wurttemberg",
    "value": "STR"
  },
  {
    "label": "Sonoma County Airport Windsor, California",
    "value": "STS"
  },
  {
    "label": "Cyril E King International Airport Charlotte Amalie, US Virgin Islands",
    "value": "STT"
  },
  {
    "label": "Surat Airport Un, Gujarat",
    "value": "STV"
  },
  {
    "label": "Mikhaylovskoye Airport Stavropol', Stavropolrskiy Kray",
    "value": "STW"
  },
  {
    "label": "Henry E Rohlson International Airport Frederiksted, US Virgin Islands",
    "value": "STX"
  },
  {
    "label": "Juanda Airport Sidoarjo, Jawa Timur",
    "value": "SUB"
  },
  {
    "label": "Lamezia Terme Airport Case Cervi, Calabria",
    "value": "SUF"
  },
  {
    "label": "Surigao Airport Surigao City, Caraga",
    "value": "SUG"
  },
  {
    "label": "Satu Mare Airport Satu Mare, Satu Mare",
    "value": "SUJ"
  },
  {
    "label": "Friedman Memorial Airport Hailey, Idaho",
    "value": "SUN"
  },
  {
    "label": "Summer Beaver Summer Beaver, Ontario",
    "value": "SUR"
  },
  {
    "label": "Nausori International Airport Nausori, Central",
    "value": "SUV"
  },
  {
    "label": "Sioux Gateway Airport Sioux City, Iowa",
    "value": "SUX"
  },
  {
    "label": "Alaska Savoonga, Alaska",
    "value": "SVA"
  },
  {
    "label": "Sambava Sambava, Antsiranana",
    "value": "SVB"
  },
  {
    "label": "Silver City-Grant County Airport Silver City, New Mexico",
    "value": "SVC"
  },
  {
    "label": "E T Joshua Airport Kingstown, Saint George",
    "value": "SVD"
  },
  {
    "label": "Stavanger Sola Airport Rage, Rogaland Fylke",
    "value": "SVG"
  },
  {
    "label": "San Vicente del Caguan Airport San Vicente del Caguán, Caqueta",
    "value": "SVI"
  },
  {
    "label": "Helle Airport Svolvar, Nordland Fylke",
    "value": "SVJ"
  },
  {
    "label": "Savonlinna Airport Savonlinna, Eastern Finland",
    "value": "SVL"
  },
  {
    "label": "Sheremtyevo Airport Zelenograd, Moskovskaya Oblast",
    "value": "SVO"
  },
  {
    "label": "Sevilla Airport Seville, Andalucia",
    "value": "SVQ"
  },
  {
    "label": "Stevens Village Stevens Village, Alaska",
    "value": "SVS"
  },
  {
    "label": "Savusavu Airport Labasa, Northern",
    "value": "SVU"
  },
  {
    "label": "Koltsovo Airport Yekaterinburg, Sverdlovskaya Oblast",
    "value": "SVX"
  },
  {
    "label": "San Antonio del Tachira Airport Táriba, Tachira",
    "value": "SVZ"
  },
  {
    "label": "Shantou Northeast Airport Chenghai, Guangdong",
    "value": "SWA"
  },
  {
    "label": "Stewart International Airport New Windsor, New York",
    "value": "SWF"
  },
  {
    "label": "South West Bay Airport South West Bay, Malampa",
    "value": "SWJ"
  },
  {
    "label": "Segrate Airport Trezzano sul Naviglio, Lombardy",
    "value": "SWK"
  },
  {
    "label": "Stillwater Municipal Airport Stillwater, Oklahoma",
    "value": "SWO"
  },
  {
    "label": "Brang Bidji Airport Sumbawa Besar, Nusa Tenggara Barat",
    "value": "SWQ"
  },
  {
    "label": "Swansea Airport Swansea, Wales",
    "value": "SWS"
  },
  {
    "label": "Entzheim Airport Entzheim, Alsace",
    "value": "SXB"
  },
  {
    "label": "Berlin-Schonefeld International Airport Schönefeld, Bundesland Brandenburg",
    "value": "SXF"
  },
  {
    "label": "Sligo Airport Larass, ",
    "value": "SXL"
  },
  {
    "label": "Prinses Juliana International Airport , St Maarten",
    "value": "SXM"
  },
  {
    "label": "Sheldon SPB Sheldon Point, Alaska",
    "value": "SXP"
  },
  {
    "label": "Srinagar Airport Srinagar, Jammu and Kashmir",
    "value": "SXR"
  },
  {
    "label": "Seal Bay Airport Kodiak, Alaska",
    "value": "SYB"
  },
  {
    "label": "Kingsford Smith Airport Sydney, New South Wales",
    "value": "SYD"
  },
  {
    "label": " Sirjan, Kerman",
    "value": "SYJ"
  },
  {
    "label": "Simao Simao, Yunnan",
    "value": "SYM"
  },
  {
    "label": "Shonai Shonai, Yamagata Prefecture",
    "value": "SYO"
  },
  {
    "label": "Hancock International Airport Syracuse, New York",
    "value": "SYR"
  },
  {
    "label": "Australia Sue Island, ",
    "value": "SYU"
  },
  {
    "label": "Sanya Sanya, Hainan",
    "value": "SYX"
  },
  {
    "label": "Stornoway Airport Isle of lewis, Scotland",
    "value": "SYY"
  },
  {
    "label": "Shiraz International Airport Shiraz, Fars",
    "value": "SYZ"
  },
  {
    "label": "Soyo Airport Santo António do Zaire, Zaire",
    "value": "SZA"
  },
  {
    "label": "Sultan Abdul Aziz Shah Airport Kampong Baru Subang, Selangor",
    "value": "SZB"
  },
  {
    "label": "Sheffield City Airport Sheffield, England",
    "value": "SZD"
  },
  {
    "label": "Çarşamba Samsun, Samsun",
    "value": "SZF"
  },
  {
    "label": "Salzburg Airport Salzburg, Salzburg",
    "value": "SZG"
  },
  {
    "label": "China Suzhou, Jiangsu",
    "value": "SZV"
  },
  {
    "label": "Shenzhen Airport Shenzhen, Guangdong",
    "value": "SZX"
  },
  {
    "label": "Golenow Airport Goleniów, Zachodniopomorskie",
    "value": "SZZ"
  },
  {
    "label": "Crown Point Airport Plymouth, Tobago",
    "value": "TAB"
  },
  {
    "label": "Daniel Z Romualdez Airport Tacloban City, Eastern Visayas",
    "value": "TAC"
  },
  {
    "label": "Daegu International Airport Daegu, Daegu",
    "value": "TAE"
  },
  {
    "label": "Tagbilaran Airport Tagbilaran City, Central Visayas",
    "value": "TAG"
  },
  {
    "label": "Tanna Airport Isangel, Tafea",
    "value": "TAH"
  },
  {
    "label": "Taiz Ganed Airport Al-Ganad, Ta`izz",
    "value": "TAI"
  },
  {
    "label": "Japan Takamatsu, Kagawa Prefecture",
    "value": "TAK"
  },
  {
    "label": "Ralph Calhoun Tanana, Alaska",
    "value": "TAL"
  },
  {
    "label": "Gen Francisco J Mina International Airport Tampico, Tamaulipas",
    "value": "TAM"
  },
  {
    "label": "Liuting Airport Wanggezhuang, Shandong",
    "value": "TAO"
  },
  {
    "label": "Tapachula International Airport Tapachula, Chiapas",
    "value": "TAP"
  },
  {
    "label": "Tashkent South Airport Tashkent, Toshkent",
    "value": "TAS"
  },
  {
    "label": "Poprad Tatry Airport Poprad, Presovsky",
    "value": "TAT"
  },
  {
    "label": "Tuy Hoa Airport Tuy Hoa, Phu Yen",
    "value": "TBB"
  },
  {
    "label": "Western Tabubil, Western",
    "value": "TBG"
  },
  {
    "label": "Romblon Airport Alcantara, Mimaropa",
    "value": "TBH"
  },
  {
    "label": "The Bight Airport New Bight, Cat Island",
    "value": "TBI"
  },
  {
    "label": "Tabarka Airport Jundobah, Jundubah",
    "value": "TBJ"
  },
  {
    "label": "Waynesville Regional Airport At Forney Field Fort Leonard Wood, Missouri",
    "value": "TBN"
  },
  {
    "label": " Tabora, Tabora",
    "value": "TBO"
  },
  {
    "label": "Pedro Canga Airport Tumbes, Tumbes",
    "value": "TBP"
  },
  {
    "label": "Tbilisi-Noyo Alekseyevka Airport Tbilisi, Gardabanis Raioni",
    "value": "TBS"
  },
  {
    "label": "Fua'amotu International Airport Nuku'alofa, Tongatapu",
    "value": "TBU"
  },
  {
    "label": " Tambov, Tambovskaya Oblast",
    "value": "TBW"
  },
  {
    "label": "Tabriz Airport Tabriz, Azarbayjan-e Sharqi",
    "value": "TBZ"
  },
  {
    "label": "Treasure Cay Airport Green Turtle Cay, North Abaco",
    "value": "TCB"
  },
  {
    "label": "Cataloi Airport Tulcea, Tulcea",
    "value": "TCE"
  },
  {
    "label": " Tchibanga, Nyanga",
    "value": "TCH"
  },
  {
    "label": "La Florida Airport Tumaco, Narino",
    "value": "TCO"
  },
  {
    "label": "Taba Taba, Janub Sina'",
    "value": "TCP"
  },
  {
    "label": "Cor Fap Carlos C Santa Rosa Airport Tacna, Tacna",
    "value": "TCQ"
  },
  {
    "label": " Tuticorin, Tamil Nadu",
    "value": "TCR"
  },
  {
    "label": "Takotna Takotna, Alaska",
    "value": "TCT"
  },
  {
    "label": "Jorge Henrich Arauz Airport Trinidad, El Beni",
    "value": "TDD"
  },
  {
    "label": "Mueang Trat Trat, Trat",
    "value": "TDX"
  },
  {
    "label": "Teterboro Airport Teterboro, New Jersey",
    "value": "TEB"
  },
  {
    "label": "Tebessa Airport Tebessa, Tebessa",
    "value": "TEE"
  },
  {
    "label": "Tatitlek Seaplane Base Valdez, Alaska",
    "value": "TEK"
  },
  {
    "label": "Tongren Tongren, Qinghai",
    "value": "TEN"
  },
  {
    "label": "Lajes Airport Praia da Vitória, Azores",
    "value": "TER"
  },
  {
    "label": "Tete Chingozi Airport Tete, Tete",
    "value": "TET"
  },
  {
    "label": "Telluride Regional Airport Telluride, Colorado",
    "value": "TEX"
  },
  {
    "label": " Tufi, Northern",
    "value": "TFI"
  },
  {
    "label": "Norte-Los Rodeos Airport Tegueste, Canary Islands",
    "value": "TFN"
  },
  {
    "label": "Sur-Reina Sofia Airport Granadilla, Canary Islands",
    "value": "TFS"
  },
  {
    "label": "Gibson County Airport Milan, Tennessee",
    "value": "TGC"
  },
  {
    "label": "Titograd Airport Podgorica, Montenegro",
    "value": "TGD"
  },
  {
    "label": "Sultan Mahmud Airport Kuala Terengganu, Terengganu",
    "value": "TGG"
  },
  {
    "label": "Tongoa Airport , Shefa",
    "value": "TGH"
  },
  {
    "label": "Loyaute Tiga, Loyaute",
    "value": "TGJ"
  },
  {
    "label": "Vidrasau Airport , Mures",
    "value": "TGM"
  },
  {
    "label": "Tongliao Tongliao, Nei Mongol",
    "value": "TGO"
  },
  {
    "label": "Touggourt Airport Ouargla, Ouargla",
    "value": "TGR"
  },
  {
    "label": "Toncontin International Airport Tegucigalpa, Francisco Morazán",
    "value": "TGU"
  },
  {
    "label": "Tuxtla Gutierrez Airport San Fernando, Chiapas",
    "value": "TGZ"
  },
  {
    "label": "Senador Petronio Portella Airport Teresina, Maranhao",
    "value": "THE"
  },
  {
    "label": "Tempelhof Central Airport Berlin, Berlin",
    "value": "THF"
  },
  {
    "label": "Tachilek Airport Tachilek, Shan State",
    "value": "THL"
  },
  {
    "label": "Trollhattan Vanersborg Airport Trollhatan, Vastra Gotaland",
    "value": "THN"
  },
  {
    "label": "Thorshofn Airport Thorshofn, Nordur-Tingeyjarsysla",
    "value": "THO"
  },
  {
    "label": "Mehrabad International Airport Tehran, Tehran",
    "value": "THR"
  },
  {
    "label": "Sukhothai Airport Sawankhalok, Sukhothai",
    "value": "THS"
  },
  {
    "label": "Pituffik Pituffik, Nordgronland",
    "value": "THU"
  },
  {
    "label": "Tirane Rinas Airport Krna, Durrës",
    "value": "TIA"
  },
  {
    "label": "Taif Airport , Makka",
    "value": "TIF"
  },
  {
    "label": "French Polynesia Tikehau Atoll, ",
    "value": "TIH"
  },
  {
    "label": "General Abelardo L Rodriguez International Airpo Tijuana, Baja California",
    "value": "TIJ"
  },
  {
    "label": "Tembagapura Airport Nabire, Irian Jaya",
    "value": "TIM"
  },
  {
    "label": " Tindouf, Tindouf",
    "value": "TIN"
  },
  {
    "label": "International Tripoli, Sawfajjin",
    "value": "TIP"
  },
  {
    "label": "Tinian Tinian, Veneto",
    "value": "TIQ"
  },
  {
    "label": "Tirupathi Airport Renigunta, Andhra Pradesh",
    "value": "TIR"
  },
  {
    "label": "Thursday Island Airport Kubin Village, Queensland",
    "value": "TIS"
  },
  {
    "label": "Richard Pearse Airport Timaru, Canterbury",
    "value": "TIU"
  },
  {
    "label": "Tivat Airport Teodo, Tivat",
    "value": "TIV"
  },
  {
    "label": "Tari Airport Mendi, Southern Highlands",
    "value": "TIZ"
  },
  {
    "label": "Capitan Oriel Lea Plaza Airport Tarija, Tarija",
    "value": "TJA"
  },
  {
    "label": "Tyumen Northwest Airport Tyumen', Tyumenskaya Oblast",
    "value": "TJM"
  },
  {
    "label": "French Polynesia Takume, ",
    "value": "TJN"
  },
  {
    "label": "Bulutumbang Airport Tanjungpandan, Bangka-Belitung",
    "value": "TJQ"
  },
  {
    "label": "Tenakee Springs Tenakee Springs, Alaska",
    "value": "TKE"
  },
  {
    "label": "Branti Airport Tanjungkarang, Lampung",
    "value": "TKG"
  },
  {
    "label": " Tok, Alaska",
    "value": "TKJ"
  },
  {
    "label": "Truk International Airport Weno, Chuuk",
    "value": "TKK"
  },
  {
    "label": "Tokunoshima Airport Amagi-cho, Kagoshima Prefecture",
    "value": "TKN"
  },
  {
    "label": "French Polynesia Takapoto, Tuamotu-Gambier",
    "value": "TKP"
  },
  {
    "label": "Tanzania Kigoma, Kigoma",
    "value": "TKQ"
  },
  {
    "label": "Tokushima Airport Matsushige-cho, Tokushima Prefecture",
    "value": "TKS"
  },
  {
    "label": "Turku Airport Turku, Western Finland",
    "value": "TKU"
  },
  {
    "label": "French Polynesia Tatakoto, Tuamotu-Gambier",
    "value": "TKV"
  },
  {
    "label": "Takaroa Takaroa, Tuamotu-Gambier",
    "value": "TKX"
  },
  {
    "label": "Teller Teller, Alaska",
    "value": "TLA"
  },
  {
    "label": "Jose Maria Morelos Y Pavon Airport Toluca de Lerdo, Mexico",
    "value": "TLC"
  },
  {
    "label": "Toliara Airport Toliara, Toliara",
    "value": "TLE"
  },
  {
    "label": "Tallahassee Regional Airport Tallahassee, Florida",
    "value": "TLH"
  },
  {
    "label": " Tatalina, Alaska",
    "value": "TLJ"
  },
  {
    "label": "Ulemiste Airport Tallinn, Harjumaa",
    "value": "TLL"
  },
  {
    "label": "Zenata Airport Tlemcen, Tlemcen",
    "value": "TLM"
  },
  {
    "label": "Le Palyvestre Airport Hyeres, Provence-alpes-cote d'Azur",
    "value": "TLN"
  },
  {
    "label": "Blagnac Airport Blagnac, Midi-Pyrenees",
    "value": "TLS"
  },
  {
    "label": "Tuluksak Tuluksak, Alaska",
    "value": "TLT"
  },
  {
    "label": "Ben Gurion Airport Petaẖ Tiqwa, HaMerkaz",
    "value": "TLV"
  },
  {
    "label": "Tambolaka Airport Tambolaka, Nusa Tengarra Timur",
    "value": "TMC"
  },
  {
    "label": "Tame Airport Tame, Arauca",
    "value": "TME"
  },
  {
    "label": "Termez Airport Termiz, Surkhondaryo",
    "value": "TMJ"
  },
  {
    "label": "Tamale Airport Savelugu, Northern",
    "value": "TML"
  },
  {
    "label": "Toamasina Airport Toamasina, Toamasina",
    "value": "TMM"
  },
  {
    "label": "Tampere Pirkkala Airport Pitkäniemi, Western Finland",
    "value": "TMP"
  },
  {
    "label": "Tamanrasset Airport Tamanrasset, Tamanghasset",
    "value": "TMR"
  },
  {
    "label": "Sao Tome Salazar Airport Sao Tome, Sao Tome",
    "value": "TMS"
  },
  {
    "label": "Trombetas Trombetas, Para",
    "value": "TMT"
  },
  {
    "label": "Tambor Airport Lepanto, Puntarenas",
    "value": "TMU"
  },
  {
    "label": "Tamworth Airport Barry, New South Wales",
    "value": "TMW"
  },
  {
    "label": "Adrar Timimoun, Adrar",
    "value": "TMX"
  },
  {
    "label": "Shandong Jinan, Shandong",
    "value": "TNA"
  },
  {
    "label": "Tin City AFS Tin City, Alaska",
    "value": "TNC"
  },
  {
    "label": "Boukhalf Airport Tangiers, Tanger",
    "value": "TNG"
  },
  {
    "label": "Kijang Airport Tanjungpinang, Riau",
    "value": "TNJ"
  },
  {
    "label": "Tununak Airport Tununak, Alaska",
    "value": "TNK"
  },
  {
    "label": "Tainan Airport Tainan City, Taiwan Province",
    "value": "TNN"
  },
  {
    "label": "Tamarindo Airport Liberia, Guanacaste",
    "value": "TNO"
  },
  {
    "label": "Antananarivo Ivato Airport Ambohidratrimo, Antananarivo",
    "value": "TNR"
  },
  {
    "label": "Hovsgol Tosontsengel, Hovsgol",
    "value": "TNZ"
  },
  {
    "label": "Tioman Airport Kampung Genting, Pahang",
    "value": "TOD"
  },
  {
    "label": "Nefta Airport Tawzar, Tawzar",
    "value": "TOE"
  },
  {
    "label": " Tomsk, Tomskaya Oblast",
    "value": "TOF"
  },
  {
    "label": "Togiak Village Togiak Village, Alaska",
    "value": "TOG"
  },
  {
    "label": "Vanuatu Torres, ",
    "value": "TOH"
  },
  {
    "label": "Toledo Express Airport Swanton, Ohio",
    "value": "TOL"
  },
  {
    "label": "Tombouctou Airport , Tombouctou",
    "value": "TOM"
  },
  {
    "label": "Tromso Langnes Airport Tromso, Troms Fylke",
    "value": "TOS"
  },
  {
    "label": " Touho, Nord",
    "value": "TOU"
  },
  {
    "label": "Toyama Airport Toyama-shi, Toyama Prefecture",
    "value": "TOY"
  },
  {
    "label": "Tampa International Airport Tampa, Florida",
    "value": "TPA"
  },
  {
    "label": "Taiwan Taoyuan International Airport Taoyuan City, Taiwan Province",
    "value": "TPE"
  },
  {
    "label": "Taplejung Suketar Taplejung, Central",
    "value": "TPJ"
  },
  {
    "label": "Tarapoto Airport Tarapoto, San Martin",
    "value": "TPP"
  },
  {
    "label": "Tepic Airport Tepic, Nayarit",
    "value": "TPQ"
  },
  {
    "label": "Trapani Birgi Airport Trapani, Sicily",
    "value": "TPS"
  },
  {
    "label": " San Domino Island, Trentino-Alto Adige",
    "value": "TQR"
  },
  {
    "label": "Torreon International Airport Torreón, Coahuila de Zaragoza",
    "value": "TRC"
  },
  {
    "label": "Trondheim Vaernes Airport Stjordal, Nord-Trondelag",
    "value": "TRD"
  },
  {
    "label": "Tiree Aerodrome Crossapol, Scotland",
    "value": "TRE"
  },
  {
    "label": "Torp Airport Sandefjord, Vestfold Fylke",
    "value": "TRF"
  },
  {
    "label": "Tauranga Airport Tauranga, Bay Of Plenty",
    "value": "TRG"
  },
  {
    "label": "Tri-Cities Regional Airport Blountville, Tennessee",
    "value": "TRI"
  },
  {
    "label": "Tarakan Airport Tarakan, Kalimantan Timur",
    "value": "TRK"
  },
  {
    "label": "Turin International Airport Caselle, Piedmont",
    "value": "TRN"
  },
  {
    "label": "Taree Airport Taree, New South Wales",
    "value": "TRO"
  },
  {
    "label": "Ronchi Dei Legionari Airport Ronchi, Friuli-Venezia Giulia",
    "value": "TRS"
  },
  {
    "label": "Cap C Martinez de Pinillos Airport Huanchaco, La Libertad",
    "value": "TRU"
  },
  {
    "label": "Thiruvananthapuram Airport Thiruvananthapuram, Kerala",
    "value": "TRV"
  },
  {
    "label": "Bonriki International Airport Tarawa, ",
    "value": "TRW"
  },
  {
    "label": " Tiruchirapally, ",
    "value": "TRZ"
  },
  {
    "label": "Taipei Songshan Airport Taipei City, Taipei City",
    "value": "TSA"
  },
  {
    "label": "Tselinograd South Airport Aqmola, Aqmola",
    "value": "TSE"
  },
  {
    "label": "Treviso Airport Treviso, Veneto",
    "value": "TSF"
  },
  {
    "label": "Tsushima Airport Tsushima-shi, Nagasaki Prefecture",
    "value": "TSJ"
  },
  {
    "label": "Tamuin Airport Ciudad Valles, San Luis Potosi",
    "value": "TSL"
  },
  {
    "label": "Zhangguizhuang Airport Tanggu, Tianjin",
    "value": "TSN"
  },
  {
    "label": " Isles Of Scilly, England",
    "value": "TSO"
  },
  {
    "label": "Timisoara Northeast Airport , Timis",
    "value": "TSR"
  },
  {
    "label": "East 34th Street Heliport New York, New York",
    "value": "TSS"
  },
  {
    "label": "Trang Airport Muang Trang, Trang",
    "value": "TST"
  },
  {
    "label": "Townsville Airport Townsville, Queensland",
    "value": "TSV"
  },
  {
    "label": "Tan-Tan Tan Tan, Tan-Tan",
    "value": "TTA"
  },
  {
    "label": "Babullah Airport Ternate, Maluku Utara",
    "value": "TTE"
  },
  {
    "label": "Tottori Airport Tottori-shi, Tottori Prefecture",
    "value": "TTJ"
  },
  {
    "label": "Tortuquero Airport Colorado, Limon",
    "value": "TTQ"
  },
  {
    "label": "Taitung Airport Taitung City, Taiwan Province",
    "value": "TTT"
  },
  {
    "label": "Sania Ramel Airport Tetouan, Tetouan",
    "value": "TTU"
  },
  {
    "label": "El Rosal Teniente Guerrero Airport Urbina, Carchi",
    "value": "TUA"
  },
  {
    "label": " Tubuai, Austral Islands",
    "value": "TUB"
  },
  {
    "label": "Teniente Benjamin Matienzo Airport Banda del Río Salí, Tucuman",
    "value": "TUC"
  },
  {
    "label": "Tambacounda Airport Tambacounda, Tambacounda",
    "value": "TUD"
  },
  {
    "label": "St Symphorien Airport Tours, Centre",
    "value": "TUF"
  },
  {
    "label": "Tuguegarao Airport Tuguegarao, Cagayan Valley",
    "value": "TUG"
  },
  {
    "label": "Turaif Airport Turayf, Al Hudud ash Shamaliyah",
    "value": "TUI"
  },
  {
    "label": "Turbat Airport Turbat, Balochistan",
    "value": "TUK"
  },
  {
    "label": "Tulsa International Airport Tulsa, Oklahoma",
    "value": "TUL"
  },
  {
    "label": "Aeroport Tunis Tunis, Tunis",
    "value": "TUN"
  },
  {
    "label": "Taupo Aerodrome Taupo, Waikato",
    "value": "TUO"
  },
  {
    "label": "Tupelo Municipal-C D Lemons Airport Tupelo, Mississippi",
    "value": "TUP"
  },
  {
    "label": "Tucurui Airport Tucuruí, Para",
    "value": "TUR"
  },
  {
    "label": "Tucson International Airport Tucson, Arizona",
    "value": "TUS"
  },
  {
    "label": "Tabuk Airport Tabuk, Tabuk",
    "value": "TUU"
  },
  {
    "label": "Cherry Capital Airport Traverse City, Michigan",
    "value": "TVC"
  },
  {
    "label": "Thief River Falls Regional Airport Thief River Falls, Minnesota",
    "value": "TVF"
  },
  {
    "label": "Taveuni Airport Taveuni, Northern",
    "value": "TVU"
  },
  {
    "label": " Dawe, ",
    "value": "TVY"
  },
  {
    "label": "Twin Hills Twin Hills, Alaska",
    "value": "TWA"
  },
  {
    "label": "Toowoomba Airport Toowoomba, Queensland",
    "value": "TWB"
  },
  {
    "label": "Twin Falls-Sun Valley Regional Airport Twin Falls, Idaho",
    "value": "TWF"
  },
  {
    "label": "Tawitawi Tawitawi, Soccsksargen",
    "value": "TWT"
  },
  {
    "label": "Tawau Airport Tawau, Sabah",
    "value": "TWU"
  },
  {
    "label": "Texarkana Regional Airport Texarkana, Arkansas",
    "value": "TXK"
  },
  {
    "label": "Berlin-Tegel International Airport Berlin, Berlin",
    "value": "TXL"
  },
  {
    "label": "Tunxi Airport Haiyang, Anhui",
    "value": "TXN"
  },
  {
    "label": "Fryklanda Airport Torsby, Varmland",
    "value": "TYF"
  },
  {
    "label": "Taiyuan Wusu Airport Taiyuan, Shanxi",
    "value": "TYN"
  },
  {
    "label": "Tyler Pounds Field Airport Tyler, Texas",
    "value": "TYR"
  },
  {
    "label": "Mcghee Tyson Airport Knoxville, Tennessee",
    "value": "TYS"
  },
  {
    "label": "Belize City Municipal Airport Hattieville, Belize",
    "value": "TZA"
  },
  {
    "label": "South Andros Airport Mangrove Cay, Mangrove Cay",
    "value": "TZN"
  },
  {
    "label": "Trabzon Air Base Trabzon, Trabzon",
    "value": "TZX"
  },
  {
    "label": "French Polynesia Ua Huka, Marquesas Islands",
    "value": "UAH"
  },
  {
    "label": "Narsarsuaq Airport Narsarssurk, Vestgronland",
    "value": "UAK"
  },
  {
    "label": "French Polynesia Ua Pou, Marquesas Islands",
    "value": "UAP"
  },
  {
    "label": "San Juan Airport 9 de Julio, San Juan",
    "value": "UAQ"
  },
  {
    "label": "Samburu Airport Samburu, Eastern",
    "value": "UAS"
  },
  {
    "label": "Uberaba Uberaba, Sudeste",
    "value": "UBA"
  },
  {
    "label": "Yamaguchi-Ube Airport Ube-shi, Yamaguchi Prefecture",
    "value": "UBJ"
  },
  {
    "label": "Ubon Airport Don Mot Daeng, Ubon Ratchathani",
    "value": "UBP"
  },
  {
    "label": "Ust Ukhta Airport Ukhta, Komi",
    "value": "UCT"
  },
  {
    "label": "Coronel Aviador Cesar Bombonato Airport Uberlandia, Minas Gerais",
    "value": "UDI"
  },
  {
    "label": "Uzhgorod Airport Uzhhorod, Zakarpats´ka Oblast´",
    "value": "UDJ"
  },
  {
    "label": "Udaipur Airport Debari, Rajasthan",
    "value": "UDR"
  },
  {
    "label": "Quelimane Airport Quelimane, Zambezia",
    "value": "UEL"
  },
  {
    "label": "Kumejima Airport Kumejima-cho, Okinawa Prefecture",
    "value": "UEO"
  },
  {
    "label": "Quetta Airport , Balochistan",
    "value": "UET"
  },
  {
    "label": "Ufa South Airport Oufa, Bashkortostan",
    "value": "UFA"
  },
  {
    "label": "Ugashik Bay Airport Pilot Point, Alaska",
    "value": "UGB"
  },
  {
    "label": "Urganch Urgench, Qoraqalpoghiston",
    "value": "UGC"
  },
  {
    "label": "Uganik Airport Kodiak, Alaska",
    "value": "UGI"
  },
  {
    "label": "El Carano Airport Quibdó, Choco",
    "value": "UIB"
  },
  {
    "label": "Vietnam Qui Nhon, Binh Dinh",
    "value": "UIH"
  },
  {
    "label": "Utila Airport Utila, Islas de la Bahía",
    "value": "UII"
  },
  {
    "label": "Quincy Municipal Airport-Baldwin Field Quincy, Illinois",
    "value": "UIN"
  },
  {
    "label": "Mariscal Sucre International Airport Quito, Pichincha",
    "value": "UIO"
  },
  {
    "label": "Pluguffan Airport Plomelin, Brittany",
    "value": "UIP"
  },
  {
    "label": "Kobe Airport Kobe-shi, Hyogo Prefecture",
    "value": "UKB"
  },
  {
    "label": " Ust-kamenogorsk, ",
    "value": "UKK"
  },
  {
    "label": "Ulei Airport Port-Vato, Malampa",
    "value": "ULB"
  },
  {
    "label": "Ulaanbaatar Southwest Airport Ulan Bator, Tov",
    "value": "ULN"
  },
  {
    "label": "Ulaangom Ulaangom, Uvs",
    "value": "ULO"
  },
  {
    "label": "Quilpie Aerodrome Quilpie, Queensland",
    "value": "ULP"
  },
  {
    "label": "Gulu Airport Gulu, Gulu",
    "value": "ULU"
  },
  {
    "label": "Ulyanovsk Northeast Airport Dimitrovgrad, Ulryanovskaya Oblast",
    "value": "ULY"
  },
  {
    "label": "Uummannaq Airport Uummannaq, Vestgronland",
    "value": "UMD"
  },
  {
    "label": "Umea Airport Umea, Vasterbotten",
    "value": "UME"
  },
  {
    "label": " Kiunga, Western",
    "value": "UNG"
  },
  {
    "label": "Unalakleet Unalakleet, Alaska",
    "value": "UNK"
  },
  {
    "label": "Ranong Airport Ranong, Ranong",
    "value": "UNN"
  },
  {
    "label": "Playa Baracoa Havana, Ciudad de la Habana",
    "value": "UPB"
  },
  {
    "label": "Hasanuddin Airport Maros, Sulawesi Selatan",
    "value": "UPG"
  },
  {
    "label": "Podstepnyy Airport Oral, Batys Qazaqstan",
    "value": "URA"
  },
  {
    "label": "Diwopu Airport Urumqi, Xinjiang",
    "value": "URC"
  },
  {
    "label": "Kuressarre Airport Kingissepa, Saaremaa",
    "value": "URE"
  },
  {
    "label": "Rubem Berta International Airport Uruguaiana, Rio Grande do Sul",
    "value": "URG"
  },
  {
    "label": "Uraj Uraj, Khanty-Mansiyskiy Avtonomnyy Okr",
    "value": "URJ"
  },
  {
    "label": "Boos Airport St-Pierre, Haute-Normandie",
    "value": "URO"
  },
  {
    "label": " Kursk, Kurskaya Oblast",
    "value": "URS"
  },
  {
    "label": "Surat Thani Airport Phun Phin, Surat Thani",
    "value": "URT"
  },
  {
    "label": "Guriat Airport Gurayat, ",
    "value": "URY"
  },
  {
    "label": "Ushuaia Airport Ushuaia, Tierra del Fuego",
    "value": "USH"
  },
  {
    "label": " Usinsk, Komi",
    "value": "USK"
  },
  {
    "label": "Koh Samui Airport Ko Samui, Surat Thani",
    "value": "USM"
  },
  {
    "label": "Ulsan Airport Ulsan, Ulsan",
    "value": "USN"
  },
  {
    "label": " Usak, Uşak",
    "value": "USQ"
  },
  {
    "label": "Busuanga Airport Coron, Western Visayas",
    "value": "USU"
  },
  {
    "label": "Udon Airport Changwat Udon Thani; Udon Thani, Udon Thani",
    "value": "UTH"
  },
  {
    "label": "Pierre Van Ryneveld Airport Upington, Northern Cape",
    "value": "UTN"
  },
  {
    "label": "Rayong Airport Ban Chang, Rayong",
    "value": "UTP"
  },
  {
    "label": "K D Matanzima Airport Umtata, Eastern Cape",
    "value": "UTT"
  },
  {
    "label": "Ulan Ude-Mukhino Airport Kabansk, Buryatiya",
    "value": "UUD"
  },
  {
    "label": "Baruun Urt Airport Baruun-Urt, Suhbaatar",
    "value": "UUN"
  },
  {
    "label": "Yuzhno Sakhalinsk South Airport Kholmsk, Sakhalinskaya Oblast",
    "value": "UUS"
  },
  {
    "label": "Ouloup Airport Fayaoué, Loyaute",
    "value": "UVE"
  },
  {
    "label": "Hewanorra International Airport Vieux Fort, Vieux Fort",
    "value": "UVF"
  },
  {
    "label": "Metropolitan Area Wiesbaden, Hesse",
    "value": "UWE"
  },
  {
    "label": "Janub Darfur Nyala, Janub Darfur",
    "value": "UYL"
  },
  {
    "label": "Yulin Airport Yulin, Shaanxi",
    "value": "UYN"
  },
  {
    "label": "Vaasa Airport Vaasa, Western Finland",
    "value": "VAA"
  },
  {
    "label": " Vanimo, Sandaun",
    "value": "VAI"
  },
  {
    "label": "Chevak Airport Hooper Bay, Alaska",
    "value": "VAK"
  },
  {
    "label": "Van Airport Van, Van",
    "value": "VAN"
  },
  {
    "label": "Suavanao Airstrip Suavanao, ",
    "value": "VAO"
  },
  {
    "label": "Topoli Airport Varna, Varna",
    "value": "VAR"
  },
  {
    "label": "Sivas Airport Sivas, Sivas",
    "value": "VAS"
  },
  {
    "label": "Lupepau'u Airport Neiafu, Vava'eu",
    "value": "VAV"
  },
  {
    "label": "Vardoe Airport Vardo, Finnmark Fylke",
    "value": "VAW"
  },
  {
    "label": "Alaska Blue Mountain, Alaska",
    "value": "VBM"
  },
  {
    "label": "Brescia Montichiari Verona, Lombardy",
    "value": "VBS"
  },
  {
    "label": " Vanuabalavu, ",
    "value": "VBV"
  },
  {
    "label": "Visby Airport Visby, Gotland",
    "value": "VBY"
  },
  {
    "label": "Marco Polo International Airport Venice, Veneto",
    "value": "VCE"
  },
  {
    "label": "Chulai Tamky, ",
    "value": "VCL"
  },
  {
    "label": "Viracopos International Airport Campinas, Sao Paulo",
    "value": "VCP"
  },
  {
    "label": "Vietnam Con Dao, Ca Mau",
    "value": "VCS"
  },
  {
    "label": "Victoria Regional Airport Victoria, Texas",
    "value": "VCT"
  },
  {
    "label": "Southern California Logistics Airport Victorville, California",
    "value": "VCV"
  },
  {
    "label": "Ovda Airport Ovda, HaDarom",
    "value": "VDA"
  },
  {
    "label": "Fagernes Leirin Airport Fagernes, Oppland Fylke",
    "value": "VDB"
  },
  {
    "label": "Vitoria da Conquista Airport Vitória da Conquista, Bahia",
    "value": "VDC"
  },
  {
    "label": "Valverde Airport Valverde, Canary Islands",
    "value": "VDE"
  },
  {
    "label": "Gobernador Castello Airport Viedma, Rio Negro",
    "value": "VDM"
  },
  {
    "label": "Vadso Airport Vadso, Finnmark Fylke",
    "value": "VDS"
  },
  {
    "label": "Valdez Airport Valdez, Alaska",
    "value": "VDZ"
  },
  {
    "label": "Venetie Venetie, Alaska",
    "value": "VEE"
  },
  {
    "label": "Vernal Airport Vernal, Utah",
    "value": "VEL"
  },
  {
    "label": "General Heriberto Jara International Airport Teocelo, Veracruz-Llave",
    "value": "VER"
  },
  {
    "label": "Vestmannaeyjar Airport Vestmannaeyjar, Vestmannaeyjar",
    "value": "VEY"
  },
  {
    "label": "Victoria Falls Airport , Matabeleland North",
    "value": "VFA"
  },
  {
    "label": "Vijaywada Airport Manthena, Andhra Pradesh",
    "value": "VGA"
  },
  {
    "label": "Vigo Airport Vigo, Galicia",
    "value": "VGO"
  },
  {
    "label": "Villagarzon Airport Villagarzon, Putumayo",
    "value": "VGZ"
  },
  {
    "label": "Saurimo Airport Saurimo, Lunda Sul",
    "value": "VHC"
  },
  {
    "label": "Vilhelmina Airport Vilhelmina, Vasterbotten",
    "value": "VHM"
  },
  {
    "label": "French Polynesia Vahitahi, Tuamotu-Gambier",
    "value": "VHZ"
  },
  {
    "label": "Vienna Schwechat International Airport Klein-Neusiedl, Lower Austria",
    "value": "VIE"
  },
  {
    "label": " El Vigia, Mérida",
    "value": "VIG"
  },
  {
    "label": "Vinh Vinh City, Nghe An",
    "value": "VII"
  },
  {
    "label": "Virgin Gorda Airport Virgin Gorda, ",
    "value": "VIJ"
  },
  {
    "label": "Dakhla Airport Ad Dakhla, Oued Ed-Dahab",
    "value": "VIL"
  },
  {
    "label": "Visalia Municipal Airport Visalia, California",
    "value": "VIS"
  },
  {
    "label": "Vitoria Airport Vitoria, Basque Country",
    "value": "VIT"
  },
  {
    "label": "Goiabeiras Airport Vitoria, Espirito Santo",
    "value": "VIX"
  },
  {
    "label": "Kien Giang Airport Kien Giang, Kien Giang",
    "value": "VKG"
  },
  {
    "label": "Ynukovo Airport Podol'sk, Moskovskaya Oblast",
    "value": "VKO"
  },
  {
    "label": "Vorkuta Airport Ukhta, Komi",
    "value": "VKT"
  },
  {
    "label": "Valencia Airport Manises, Valencia",
    "value": "VLC"
  },
  {
    "label": "Valdosta Regional Airport Valdosta, Georgia",
    "value": "VLD"
  },
  {
    "label": "Port Vila Bauerfield Airport Port-Vila, Shefa",
    "value": "VLI"
  },
  {
    "label": "Valladolid Airport Valladolid, Castille and Leon",
    "value": "VLL"
  },
  {
    "label": "Zim Valencia Airport Valencia, Carabobo",
    "value": "VLN"
  },
  {
    "label": "Vanuatu Valesdir, Shefa",
    "value": "VLS"
  },
  {
    "label": "Dr Antonio Nicolas Briceno Airport Siquisique, Trujillo",
    "value": "VLV"
  },
  {
    "label": "Wales Anglesey, Wales",
    "value": "VLY"
  },
  {
    "label": "Vilnius Airport Vilnius, Vilniaus apskritis",
    "value": "VNO"
  },
  {
    "label": "Varanasi Airport Baragaon, Uttar Pradesh",
    "value": "VNS"
  },
  {
    "label": "Vilanculos Airport Vilanculos, Inhambane",
    "value": "VNX"
  },
  {
    "label": "Gumrak Airport Kamyshin, Volgogradskaya Oblast",
    "value": "VOG"
  },
  {
    "label": "Nea Anchialos Airport Almiros, Thessalia",
    "value": "VOL"
  },
  {
    "label": "Voronezh-Chertovitskoye Airport Semiluki, Voronezhskaya Oblast",
    "value": "VOZ"
  },
  {
    "label": "Ondjiva Ongiva, Cunene",
    "value": "VPE"
  },
  {
    "label": "Vopnafjordur Airport Egilsstadir, Nordur-Mulasysla",
    "value": "VPN"
  },
  {
    "label": "Eglin Air Force Base Eglin Village, Florida",
    "value": "VPS"
  },
  {
    "label": "Chimoio Airport Chimoio, Manica",
    "value": "VPY"
  },
  {
    "label": "Aeropuerto Antonio Rivera Rodríguez Puerto Ferro, Puerto Rico",
    "value": "VQS"
  },
  {
    "label": "Varadero Airport Varadero, Matanzas",
    "value": "VRA"
  },
  {
    "label": "Virac Airport Virac, Bicol Region",
    "value": "VRC"
  },
  {
    "label": "Varkaus Airport Varkaus, Eastern Finland",
    "value": "VRK"
  },
  {
    "label": "Verona Airport Sommacampagna, Veneto",
    "value": "VRN"
  },
  {
    "label": "Vaeroy Airport Varoy, Nordland Fylke",
    "value": "VRY"
  },
  {
    "label": "Villahermosa Airport Villahermosa, Tabasco",
    "value": "VSA"
  },
  {
    "label": "Lugansk Airport Luhans'k, Luhans´ka Oblast´",
    "value": "VSG"
  },
  {
    "label": "Hasslo Airport Vasteras, Vastmanland",
    "value": "VST"
  },
  {
    "label": "Vientiane Airport Vientiane, Viangchan",
    "value": "VTE"
  },
  {
    "label": "Las Tunas Airport Becerra, Las Tunas",
    "value": "VTU"
  },
  {
    "label": "Vishakapatnam Airport Visakhapatnam, Andhra Pradesh",
    "value": "VTZ"
  },
  {
    "label": "Alfonso Lopez Airport Valledupar, Cesar",
    "value": "VUP"
  },
  {
    "label": "Vanguardia Airport Villavicencio, Meta",
    "value": "VVC"
  },
  {
    "label": "Viru Viru International Airport Santa Cruz, Santa Cruz",
    "value": "VVI"
  },
  {
    "label": "Artem North Airport Nakhodka, Primorskiy Kray",
    "value": "VVO"
  },
  {
    "label": "Illizi Illizi, Illizi",
    "value": "VVZ"
  },
  {
    "label": "Lichinga Airport Lichinga, Niassa",
    "value": "VXC"
  },
  {
    "label": "San Pedro Airport Mindelo, Sao Vicente",
    "value": "VXE"
  },
  {
    "label": "Kronoberg Airport Vaxjo, Kronoberg",
    "value": "VXO"
  },
  {
    "label": "Wales Wales, Alaska",
    "value": "WAA"
  },
  {
    "label": "Saudi Arabia Wadi Ad Dawasir, ",
    "value": "WAE"
  },
  {
    "label": "Wanganui Airport Wanganui, Manawatu Wanganui",
    "value": "WAG"
  },
  {
    "label": "Mahajanga Antsalova, Mahajanga",
    "value": "WAQ"
  },
  {
    "label": "Waterford Airport Waterford, ",
    "value": "WAT"
  },
  {
    "label": "Okecie International Airport Warsaw, Mazowieckie",
    "value": "WAW"
  },
  {
    "label": "Stebbins Stebbins, Alaska",
    "value": "WBB"
  },
  {
    "label": "Alaska Beaver, Alaska",
    "value": "WBQ"
  },
  {
    "label": "Windhoek Airport , Khomas",
    "value": "WDH"
  },
  {
    "label": "Shandong Weifang, Shandong",
    "value": "WEF"
  },
  {
    "label": "Shandong Weihai, Shandong",
    "value": "WEH"
  },
  {
    "label": "Weipa Aerodrome Weipa, Queensland",
    "value": "WEI"
  },
  {
    "label": "Wagga Wagga Airport Forest Hill, New South Wales",
    "value": "WGA"
  },
  {
    "label": "Walgett Airport Walgett, New South Wales",
    "value": "WGE"
  },
  {
    "label": "Mau Hau Airport Waingapu, Nusa Tengarra Timur",
    "value": "WGP"
  },
  {
    "label": "Wadi Halfa' Wadi Halfa, Ash Shamaliyah",
    "value": "WHF"
  },
  {
    "label": "Whakatane Airport Whakatane, Bay Of Plenty",
    "value": "WHK"
  },
  {
    "label": "Wick Airport Wick, Scotland",
    "value": "WIC"
  },
  {
    "label": "Nairobi Wilson Airport Nairobi, Nairobi Area",
    "value": "WIL"
  },
  {
    "label": "Winton Aerodrome Corfield, Queensland",
    "value": "WIN"
  },
  {
    "label": "Woja Woja, Ailinglaplap",
    "value": "WJA"
  },
  {
    "label": "Wonju Airport WonJu, Kangwon-Do",
    "value": "WJU"
  },
  {
    "label": "Wanaka Airport Wanaka, Otago",
    "value": "WKA"
  },
  {
    "label": "Wakkanai Airport Wakkanai-shi, Hokkaido Prefecture",
    "value": "WKJ"
  },
  {
    "label": "Aleknagik Aleknagik, Alaska",
    "value": "WKK"
  },
  {
    "label": "Wellington International Airport Wellington, Wellington",
    "value": "WLG"
  },
  {
    "label": "Vanuatu Walaha, ",
    "value": "WLH"
  },
  {
    "label": "Alaska Selawik, Alaska",
    "value": "WLK"
  },
  {
    "label": "Wallis Island Wallis Island, Hahake",
    "value": "WLS"
  },
  {
    "label": "Meyers Chuck Meyers Chuck, Alaska",
    "value": "WMK"
  },
  {
    "label": "Maroantsetra Airport Maroantsetra, Toamasina",
    "value": "WMN"
  },
  {
    "label": "White Mountain White Mountain, Alaska",
    "value": "WMO"
  },
  {
    "label": "Mananara Mananara, Toamasina",
    "value": "WMR"
  },
  {
    "label": "Napaskiak Napakiak, Alaska",
    "value": "WNA"
  },
  {
    "label": "Wunnummin Lake Airport Casummit Lake, Ontario",
    "value": "WNN"
  },
  {
    "label": "Naga Airport Pili, Bicol Region",
    "value": "WNP"
  },
  {
    "label": "Windorah Airport Tanbar, Queensland",
    "value": "WNR"
  },
  {
    "label": "Nawabshah Airport Nawabshah, Sindh",
    "value": "WNS"
  },
  {
    "label": "Wenzhou Airport Wenzhou, Zhejiang",
    "value": "WNZ"
  },
  {
    "label": "Wipim Wipim, Western",
    "value": "WPM"
  },
  {
    "label": "Whangarei Airport Whangarei, Northland",
    "value": "WRE"
  },
  {
    "label": "Wrangell Airport Wrangell, Alaska",
    "value": "WRG"
  },
  {
    "label": "Worland Municipal Airport Worland, Wyoming",
    "value": "WRL"
  },
  {
    "label": "Strachowice Airport Wroclaw, Dolnosląskie",
    "value": "WRO"
  },
  {
    "label": "Naknek South Naknek, Alaska",
    "value": "WSN"
  },
  {
    "label": "Westerly State Airport Westerly, Rhode Island",
    "value": "WST"
  },
  {
    "label": "United States Westsound, Washington",
    "value": "WSX"
  },
  {
    "label": "Westport Airport Westport, West Coast",
    "value": "WSZ"
  },
  {
    "label": "Alaska Noatak, Alaska",
    "value": "WTK"
  },
  {
    "label": "Tuntutuliak Tuntutuliak, Alaska",
    "value": "WTL"
  },
  {
    "label": "Antananarivo Tsiroanomandidy, Antananarivo",
    "value": "WTS"
  },
  {
    "label": "Wu Hai Wu Hai, ",
    "value": "WUA"
  },
  {
    "label": "Wuchang Nanhu Airport Wuhan, Hubei",
    "value": "WUH"
  },
  {
    "label": " Wiluna, Western Australia",
    "value": "WUN"
  },
  {
    "label": "Wuyishan Wuyishan, ",
    "value": "WUS"
  },
  {
    "label": "Wuxi Wuxi, Jiangsu",
    "value": "WUX"
  },
  {
    "label": "Rooikop Walvis Bay, Murzuq",
    "value": "WVB"
  },
  {
    "label": "Wewak International Airport Wewak, East Sepik",
    "value": "WWK"
  },
  {
    "label": "Alaska Whale Pass, Alaska",
    "value": "WWP"
  },
  {
    "label": "Alaska Newtok, Alaska",
    "value": "WWT"
  },
  {
    "label": "Wanxian Wanxian, Chongqing",
    "value": "WXN"
  },
  {
    "label": "Whyalla Airport Whyalla, South Australia",
    "value": "WYA"
  },
  {
    "label": "Yellowstone Airport West Yellowstone, Montana",
    "value": "WYS"
  },
  {
    "label": "Churchill Rail Station Oro-Medonte, Ontario",
    "value": "XAD"
  },
  {
    "label": "Chapeco Airport Chapeco, Santa Catarina",
    "value": "XAP"
  },
  {
    "label": "Capreol Rail Service Capreol, Ontario",
    "value": "XAW"
  },
  {
    "label": "Dorval Rail Station Dorval, Quebec",
    "value": "XAX"
  },
  {
    "label": "Cambellton Cambellton, New Brunswick",
    "value": "XAZ"
  },
  {
    "label": "Bearskin Lake Airport Casummit Lake, Ontario",
    "value": "XBE"
  },
  {
    "label": "Birjand Airport Birjand, Khorasan",
    "value": "XBJ"
  },
  {
    "label": "Brockville Airport Brockville, Ontario",
    "value": "XBR"
  },
  {
    "label": "Christmas Island Airport The Settlement, ",
    "value": "XCH"
  },
  {
    "label": "Ontario Oro-Medonte, Ontario",
    "value": "XCI"
  },
  {
    "label": "Chatham Airport Chatham, Ontario",
    "value": "XCM"
  },
  {
    "label": "Europort Vatry Coole, Champagne-Ardenne",
    "value": "XCR"
  },
  {
    "label": "Lille-Europe Railway Station Lille, Nord-Pas-de-Calais",
    "value": "XDB"
  },
  {
    "label": " , ",
    "value": "XDD"
  },
  {
    "label": "Halifax Rail Service Halifax, Nova Scotia",
    "value": "XDG"
  },
  {
    "label": " , ",
    "value": "XDH"
  },
  {
    "label": "Drummondville Airport Drummondville, Quebec",
    "value": "XDM"
  },
  {
    "label": "Moncton Rail Service Moncton, New Brunswick",
    "value": "XDP"
  },
  {
    "label": "London Ontario Rail Service London, Ontario",
    "value": "XDQ"
  },
  {
    "label": "Ontario Oro-Medonte, Ontario",
    "value": "XDS"
  },
  {
    "label": " , ",
    "value": "XDU"
  },
  {
    "label": " Prince George, British Columbia",
    "value": "XDV"
  },
  {
    "label": "Canada Prince Rupert, British Columbia",
    "value": "XDW"
  },
  {
    "label": "Sarina Rail Station Sarina, ",
    "value": "XDX"
  },
  {
    "label": " Sudbury, Ontario",
    "value": "XDY"
  },
  {
    "label": "The Pas Rail Service The Pas, Manitoba",
    "value": "XDZ"
  },
  {
    "label": "Vancouver Rail Service Vancouver, British Columbia",
    "value": "XEA"
  },
  {
    "label": "Windsor Ontario Rail Service Windsor, Ontario",
    "value": "XEC"
  },
  {
    "label": "Disneyland Railway Station Paris, Île-de-France",
    "value": "XED"
  },
  {
    "label": "Lac Edouard Rail Service Lac Edouard, Quebec",
    "value": "XEE"
  },
  {
    "label": "Winnipeg Rail Service Winnipeg, Manitoba",
    "value": "XEF"
  },
  {
    "label": "Kingston Rail Service Kingston, Ontario",
    "value": "XEG"
  },
  {
    "label": "Ladysmith Rail Service Ladysmith, British Columbia",
    "value": "XEH"
  },
  {
    "label": "Saskatchewan Melville, Saskatchewan",
    "value": "XEK"
  },
  {
    "label": "Quebec New Carlisle, Quebec",
    "value": "XEL"
  },
  {
    "label": "Strasbourg Bus Station Strasbourg, Alsace",
    "value": "XER"
  },
  {
    "label": "London City Airport London, England",
    "value": "XET"
  },
  {
    "label": "Stockholm Central Station Stockholm, null",
    "value": "XEV"
  },
  {
    "label": "Sodertalje Sodertalje, Stockholm",
    "value": "XEZ"
  },
  {
    "label": "Stratford Stratford, Ontario",
    "value": "XFD"
  },
  {
    "label": "Parent Rail Service Parent, Quebec",
    "value": "XFE"
  },
  {
    "label": "Perce Rail Service Perce, Quebec",
    "value": "XFG"
  },
  {
    "label": "Eskilstuna Station Eskilstuna, null",
    "value": "XFJ"
  },
  {
    "label": "Senneterre Rail Service Senneterre, Quebec",
    "value": "XFK"
  },
  {
    "label": "Shawinigan Rail Station Shawinigan, Quebec",
    "value": "XFL"
  },
  {
    "label": "Shawnigan Rail Service Cowichan Valley, British Columbia",
    "value": "XFM"
  },
  {
    "label": "Xiangfan Xiangfan, 湖北省",
    "value": "XFN"
  },
  {
    "label": "Malmö Station Malmo, null",
    "value": "XFP"
  },
  {
    "label": "Weymont Rail Service Weymont, Quebec",
    "value": "XFQ"
  },
  {
    "label": "Malmo South Railway Malmo, ",
    "value": "XFR"
  },
  {
    "label": "Alexandria Alexandria, Ontario",
    "value": "XFS"
  },
  {
    "label": "Tierp Station Tierp, null",
    "value": "XFU"
  },
  {
    "label": "Brantford Brantford, Ontario",
    "value": "XFV"
  },
  {
    "label": "Finkenwerder Airport Hamburg, Hamburg",
    "value": "XFW"
  },
  {
    "label": "Sainte Foy Rail Service Quebec, Quebec",
    "value": "XFY"
  },
  {
    "label": "Charny Charny, Quebec",
    "value": "XFZ"
  },
  {
    "label": "Lund Lund, null",
    "value": "XGC"
  },
  {
    "label": "Cobourg Rail Station Cobourg, Ontario",
    "value": "XGJ"
  },
  {
    "label": "Coteau Rail Station Coteau, New Brunswick",
    "value": "XGK"
  },
  {
    "label": "England Grantham, England",
    "value": "XGM"
  },
  {
    "label": "Kangiqsualujjuaq Airport Chisasibi, Quebec",
    "value": "XGR"
  },
  {
    "label": "Ontario Grimsby, Ontario",
    "value": "XGY"
  },
  {
    "label": "Railway Station Aix La Chapelle, North-Rhine-Westphalia",
    "value": "XHJ"
  },
  {
    "label": "Valence Station Valence, Midi-Pyrénées",
    "value": "XHK"
  },
  {
    "label": "Georgetown Rail Station Georgetown, Prince Edward Island",
    "value": "XHM"
  },
  {
    "label": "Belgium Liege, Wallonie",
    "value": "XHN"
  },
  {
    "label": "British Columbia Chemainus, British Columbia",
    "value": "XHS"
  },
  {
    "label": "Guelph Airport Guelph, Ontario",
    "value": "XIA"
  },
  {
    "label": "Ontario Ingersoll, Ontario",
    "value": "XIB"
  },
  {
    "label": "Xichang North Airport Xichang, Sichuan",
    "value": "XIC"
  },
  {
    "label": "Maxville Rail Station Maxville, Ontario",
    "value": "XID"
  },
  {
    "label": "Ontario Napanee, Ontario",
    "value": "XIF"
  },
  {
    "label": "Xilinhot Airport Xilin Hot, Nei Mongol",
    "value": "XIL"
  },
  {
    "label": "Quebec Saint Hyacinthe, Quebec",
    "value": "XIM"
  },
  {
    "label": "St Marys Rail Station St Marys, New Brunswick",
    "value": "XIO"
  },
  {
    "label": "Woodstock Rail Service Woodstock, Ontario",
    "value": "XIP"
  },
  {
    "label": "London City Airport London, England",
    "value": "XIT"
  },
  {
    "label": "Hsien Yang Airport Xianyang, Shaanxi",
    "value": "XIY"
  },
  {
    "label": "Quebec Joliette, Quebec",
    "value": "XJL"
  },
  {
    "label": "Jonquiere Rail Station Jonquiere, Quebec",
    "value": "XJQ"
  },
  {
    "label": "Xieng Khouang Xieng Khouang, Xiangkhoang",
    "value": "XKH"
  },
  {
    "label": "Kuala Lumpur Central Station Kuala Lumpur, Wilayah Persekutuan",
    "value": "XKL"
  },
  {
    "label": "Kasabonika Airport Casummit Lake, Ontario",
    "value": "XKS"
  },
  {
    "label": "Sackville Rail Station Sackville, New Brunswick",
    "value": "XKV"
  },
  {
    "label": "Lac Brochet Lac Brochet, Manitoba",
    "value": "XLB"
  },
  {
    "label": "Quebec Stn. Rail Svce. Quebec, Quebec",
    "value": "XLJ"
  },
  {
    "label": "St Lambert Rail Svce. Montreal, Quebec",
    "value": "XLM"
  },
  {
    "label": " Guildwood, ",
    "value": "XLQ"
  },
  {
    "label": "Saint Louis Airport , St-Louis",
    "value": "XLS"
  },
  {
    "label": "Ontario Niagara Falls, Ontario",
    "value": "XLV"
  },
  {
    "label": "Aldershot Rail Station Aldershot, ",
    "value": "XLY"
  },
  {
    "label": "Nova Scotia Truro, Nova Scotia",
    "value": "XLZ"
  },
  {
    "label": "Manihi Airport Manihi, Tuamotu-Gambier",
    "value": "XMH"
  },
  {
    "label": "Xiamen Airport Xiamen, Fujian",
    "value": "XMN"
  },
  {
    "label": "Macas Airport Zúñac, Morona Santiago",
    "value": "XMS"
  },
  {
    "label": "Yam Island Yam Island, Queensland",
    "value": "XMY"
  },
  {
    "label": "Northwest Arkansas Regional Airport Bentonville, Arkansas",
    "value": "XNA"
  },
  {
    "label": "Sinop Airport Santo Antônio do Içá, Amazonas",
    "value": "XNB"
  },
  {
    "label": "Nottingham Airport Nottingham, England",
    "value": "XNM"
  },
  {
    "label": "Xining Airport Xining, Qinghai",
    "value": "XNN"
  },
  {
    "label": " Northallerton, England",
    "value": "XNO"
  },
  {
    "label": "Nuneaton Rail Station Nuneaton, England",
    "value": "XNV"
  },
  {
    "label": "York New York, New York",
    "value": "XNY"
  },
  {
    "label": "Ontario Oakville, Ontario",
    "value": "XOK"
  },
  {
    "label": "Poitou-Charentes Poitiers, Poitou-Charentes",
    "value": "XOP"
  },
  {
    "label": "Parksville Rail Service Parksville, British Columbia",
    "value": "XPB"
  },
  {
    "label": "Penrith Rail Station Penrith, England",
    "value": "XPF"
  },
  {
    "label": "Gare du Nord Rail Stn Paris, Île-de-France",
    "value": "XPG"
  },
  {
    "label": "Montpellier Railway Station Montpellier, Poitou-Charentes",
    "value": "XPJ"
  },
  {
    "label": " Brampton, Ontario",
    "value": "XPN"
  },
  {
    "label": " Port Klang, Selangor",
    "value": "XPQ"
  },
  {
    "label": "Preston Rail Station Preston, England",
    "value": "XPT"
  },
  {
    "label": "Pointe-aux-Trembles Rail Station Pointe-aux-Trembles, Quebec",
    "value": "XPX"
  },
  {
    "label": "United Kingdom London, null",
    "value": "XQE"
  },
  {
    "label": "Berwick Station Berwick, England",
    "value": "XQG"
  },
  {
    "label": "United Kingdom Nottingham, null",
    "value": "XQH"
  },
  {
    "label": "Lancaster Rail Station Lancaster, England",
    "value": "XQL"
  },
  {
    "label": "Quepos Managua Airport Quepos, Puntarenas",
    "value": "XQP"
  },
  {
    "label": "Qualicum Beach Airport Qualicum Beach, British Columbia",
    "value": "XQU"
  },
  {
    "label": "Runcorn Rail Station Runcorn, England",
    "value": "XRC"
  },
  {
    "label": "Marseille Railway Marseille, Centre",
    "value": "XRF"
  },
  {
    "label": "Pine Ridge Rail Station Pine Ridge, New Brunswick",
    "value": "XRP"
  },
  {
    "label": "Rugby Rail Station Rugby, England",
    "value": "XRU"
  },
  {
    "label": "Jerez Airport Jerez, Andalucia",
    "value": "XRY"
  },
  {
    "label": "South Caicos Airport Cockburn Harbour, South and East Caicos",
    "value": "XSC"
  },
  {
    "label": "Centre Tours, Centre",
    "value": "XSH"
  },
  {
    "label": "South Indian Lake Airport Nelson House, Manitoba",
    "value": "XSI"
  },
  {
    "label": "Seletar Airport Singapore, Central Singapore",
    "value": "XSP"
  },
  {
    "label": "England Salisbury, England",
    "value": "XSR"
  },
  {
    "label": "Thargomindah Aerodrome Thargomindah, Queensland",
    "value": "XTG"
  },
  {
    "label": "England Thirsk, England",
    "value": "XTK"
  },
  {
    "label": "Tadoule Lake Airport Nelson House, Manitoba",
    "value": "XTL"
  },
  {
    "label": "Strathroy Rail Station Strathroy, Ontario",
    "value": "XTY"
  },
  {
    "label": "Jiangsu Xuzhou, Jiangsu",
    "value": "XUZ"
  },
  {
    "label": "England Stockport, England",
    "value": "XVA"
  },
  {
    "label": "England Stafford, England",
    "value": "XVB"
  },
  {
    "label": "United Kingdom Crewe, null",
    "value": "XVC"
  },
  {
    "label": "Longville Municipal Airport Longville, Minnesota",
    "value": "XVG"
  },
  {
    "label": "United Kingdom Peterborough, null",
    "value": "XVH"
  },
  {
    "label": "Stevenage Rail Station Stevenage, England",
    "value": "XVJ"
  },
  {
    "label": "Durham Rail Station Durham, England",
    "value": "XVU"
  },
  {
    "label": "Belleville Rail Service Belleville, Ontario",
    "value": "XVV"
  },
  {
    "label": " Belleville, Scotland",
    "value": "XVW"
  },
  {
    "label": "Wakefield Westgate Rail Station Wakefield Westgate, England",
    "value": "XWD"
  },
  {
    "label": "Stroke on Trent Rail Station Stroke on Trent, England",
    "value": "XWH"
  },
  {
    "label": "Karlskrona Rail Svc. Karlskrona, null",
    "value": "XWK"
  },
  {
    "label": "Gothenburg Gothenburg, ",
    "value": "XWL"
  },
  {
    "label": "Hallsberg Rail Station Hallsberg, ",
    "value": "XWM"
  },
  {
    "label": "England Warrington, England",
    "value": "XWN"
  },
  {
    "label": "Sweden Hassleholm, null",
    "value": "XWP"
  },
  {
    "label": "Sweden Enkoping, null",
    "value": "XWQ"
  },
  {
    "label": "Orebro Railway Station Orebro, Orebro",
    "value": "XWR"
  },
  {
    "label": "United Kingdom Swindon, England",
    "value": "XWS"
  },
  {
    "label": "Varberg Rail Station Varberg, ",
    "value": "XWV"
  },
  {
    "label": "Wyoming Rail Station Wyoming, Ontario",
    "value": "XWY"
  },
  {
    "label": "Sweden Nykoping, null",
    "value": "XWZ"
  },
  {
    "label": "Sweden Alvesta, ",
    "value": "XXA"
  },
  {
    "label": "Degerfors Rail Station Degerfors, ",
    "value": "XXD"
  },
  {
    "label": "Katrineholm Katrineholm, ",
    "value": "XXK"
  },
  {
    "label": " Mjolby, Ostergotland",
    "value": "XXM"
  },
  {
    "label": "Riyadh Air Base Riyadh, ",
    "value": "XXN"
  },
  {
    "label": "Leksand Rail Station Leksand, ",
    "value": "XXO"
  },
  {
    "label": "Sophia Antipolis Heliport Valbonne, Provence-alpes-cote d'Azur",
    "value": "XXT"
  },
  {
    "label": "Sweden Hedemora, ",
    "value": "XXU"
  },
  {
    "label": "Sundsvall Railway Station Sundsvall, ",
    "value": "XXZ"
  },
  {
    "label": "Yandina Yandina, Guadalcanal",
    "value": "XYA"
  },
  {
    "label": "Borlange Borlänge, null",
    "value": "XYB"
  },
  {
    "label": "Sweden Herrljunga, ",
    "value": "XYC"
  },
  {
    "label": "Lyon Part-Dieu Railway Station Lyon, Rhone-Alpes",
    "value": "XYD"
  },
  {
    "label": "Falkoping Rail Station Falkoping, Vastra Gotaland",
    "value": "XYF"
  },
  {
    "label": "Helsingborg Railway Helsingborg, ",
    "value": "XYH"
  },
  {
    "label": "Sweden Flen, ",
    "value": "XYI"
  },
  {
    "label": "Norrkoping Railway Service Norrkoping, Ostergotland",
    "value": "XYK"
  },
  {
    "label": "Kristinehamn Kristinehamn, ",
    "value": "XYN"
  },
  {
    "label": "Kyrlbo Avesta Krylbo, Dalarna",
    "value": "XYP"
  },
  {
    "label": "Angelholm Railway Svc. Angelholm/Helsingborg, null",
    "value": "XYQ"
  },
  {
    "label": "Sala Sala, ",
    "value": "XYX"
  },
  {
    "label": "Arvika Airport Arvika, ",
    "value": "XYY"
  },
  {
    "label": "Harnosand Rail Station Harnosand, Vasternorrland",
    "value": "XYZ"
  },
  {
    "label": "Casselman Rail Station Casselman, Ontario",
    "value": "XZB"
  },
  {
    "label": " Glencoe, Ontario",
    "value": "XZC"
  },
  {
    "label": " Rail (Generic), ",
    "value": "XZJ"
  },
  {
    "label": "Edmonton International Airport Edmonton, Alberta",
    "value": "XZL"
  },
  {
    "label": "Macau Ferry Macau, Amazonas",
    "value": "XZM"
  },
  {
    "label": "Avignon Avignon, Provence-alpes-cote d'Azur",
    "value": "XZN"
  },
  {
    "label": "Oslo Central Station Oslo, ",
    "value": "XZO"
  },
  {
    "label": "Off line Point Rail (Generic), Missouri",
    "value": "XZU"
  },
  {
    "label": "TGV Station Toulon, Pays de la Loire",
    "value": "XZV"
  },
  {
    "label": "Anahim Lake Airport Alexis Creek, British Columbia",
    "value": "YAA"
  },
  {
    "label": "Cat Lake Airport Casummit Lake, Ontario",
    "value": "YAC"
  },
  {
    "label": "Fort Frances Municipal Airport Fort Frances, Ontario",
    "value": "YAG"
  },
  {
    "label": "Yakutat Airport Yakutat, Alaska",
    "value": "YAK"
  },
  {
    "label": "Sault Ste Marie Airport Sault Ste. Marie, Ontario",
    "value": "YAM"
  },
  {
    "label": "Yaounde Airport Yaounde, Centre",
    "value": "YAO"
  },
  {
    "label": "Yap International Airport Colonia, Yap",
    "value": "YAP"
  },
  {
    "label": "Attawapiskat Airport Winisk, Ontario",
    "value": "YAT"
  },
  {
    "label": "Angling Lake Airport Casummit Lake, Ontario",
    "value": "YAX"
  },
  {
    "label": "St Anthony Airport St. Anthony, Newfoundland and Labrador",
    "value": "YAY"
  },
  {
    "label": "Tofino Airport Lake Cowichan, British Columbia",
    "value": "YAZ"
  },
  {
    "label": "Pelly Bay Townsite Airport Cambridge Bay, Nunavut",
    "value": "YBB"
  },
  {
    "label": "Baie Comeau Airport Betsiamites, Quebec",
    "value": "YBC"
  },
  {
    "label": "Bagotville Airport Saguenay, Quebec",
    "value": "YBG"
  },
  {
    "label": "Black Tickle Airport St. Anthony, Newfoundland and Labrador",
    "value": "YBI"
  },
  {
    "label": "Baker Lake Airport Chesterfield Inlet, Nunavut",
    "value": "YBK"
  },
  {
    "label": "Campbell River Airport Gold River, British Columbia",
    "value": "YBL"
  },
  {
    "label": "Yibin Yibin, Sichuan",
    "value": "YBP"
  },
  {
    "label": "Brandon Airport Killarney, Manitoba",
    "value": "YBR"
  },
  {
    "label": "Brochet Brochet, Manitoba",
    "value": "YBT"
  },
  {
    "label": "Berens River Airport Nelson House, Manitoba",
    "value": "YBV"
  },
  {
    "label": " Bedwell Harbor, ",
    "value": "YBW"
  },
  {
    "label": "Lourdes-De-Blanc-Sablon Airport Havre-St-Pierre, Quebec",
    "value": "YBX"
  },
  {
    "label": "Toronto Downtown Airport Toronto, Ontario",
    "value": "YBZ"
  },
  {
    "label": "Courtenay Airport Courtenay, British Columbia",
    "value": "YCA"
  },
  {
    "label": "Cambridge Bay Airport Cambridge Bay, Nunavut",
    "value": "YCB"
  },
  {
    "label": "Cornwall Regional Airport Moose Creek, Ontario",
    "value": "YCC"
  },
  {
    "label": "Nanaimo Airport Nanaimo, British Columbia",
    "value": "YCD"
  },
  {
    "label": "Castlegar Airport Castlegar, British Columbia",
    "value": "YCG"
  },
  {
    "label": "Colville Lake Airport Hay River, Northwest Territories",
    "value": "YCK"
  },
  {
    "label": "St Catharines Airport Fonthill, Ontario",
    "value": "YCM"
  },
  {
    "label": "Coppermine Airport Cambridge Bay, Nunavut",
    "value": "YCO"
  },
  {
    "label": "Cross Lake Airport Nelson House, Manitoba",
    "value": "YCR"
  },
  {
    "label": "Chesterfield Inlet Airport Chesterfield Inlet, Nunavut",
    "value": "YCS"
  },
  {
    "label": "Cullaton Lake Airport Chesterfield Inlet, Manitoba",
    "value": "YCU"
  },
  {
    "label": "Clyde River Airport Iqaluit, Nunavut",
    "value": "YCY"
  },
  {
    "label": "Dawson Airport Dawson, Yukon Territory",
    "value": "YDA"
  },
  {
    "label": "Deer Lake Airport St. Anthony, Newfoundland and Labrador",
    "value": "YDF"
  },
  {
    "label": "Dauphin Airport Dauphin, Manitoba",
    "value": "YDN"
  },
  {
    "label": "Nain Airport Happy Valley-Goose Bay, Newfoundland and Labrador",
    "value": "YDP"
  },
  {
    "label": "Dawson Creek Airport Dawson Creek, British Columbia",
    "value": "YDQ"
  },
  {
    "label": "Edmonton International Airport Leduc, Alberta",
    "value": "YEG"
  },
  {
    "label": " Bursa, Bursa",
    "value": "YEI"
  },
  {
    "label": "Arviat Airport Chesterfield Inlet, Nunavut",
    "value": "YEK"
  },
  {
    "label": "Fort Severn Airport Casummit Lake, Ontario",
    "value": "YER"
  },
  {
    "label": " Yasouj, ",
    "value": "YES"
  },
  {
    "label": "Inuvik Airport Hay River, Northwest Territories",
    "value": "YEV"
  },
  {
    "label": "Fort Albany Airport Winisk, Ontario",
    "value": "YFA"
  },
  {
    "label": "Iqaluit Airport Iqaluit, Nunavut",
    "value": "YFB"
  },
  {
    "label": "Fredericton Airport Fredericton, New Brunswick",
    "value": "YFC"
  },
  {
    "label": "Fort Hope Airport Marathon, Ontario",
    "value": "YFH"
  },
  {
    "label": "Snare Lake Snare Lake, Northwest Territories",
    "value": "YFJ"
  },
  {
    "label": "Flin Flon Airport Flin Flon, Manitoba",
    "value": "YFO"
  },
  {
    "label": "Fort Simpson Airport Hay River, Northwest Territories",
    "value": "YFS"
  },
  {
    "label": "Fox Harbour Aerodrome St. Anthony, Newfoundland and Labrador",
    "value": "YFX"
  },
  {
    "label": "Gillies Bay Airport Gibsons, British Columbia",
    "value": "YGB"
  },
  {
    "label": "Ganges Harbor Airport Saltspring Island, British Columbia",
    "value": "YGG"
  },
  {
    "label": "Fort Good Hope Airport Hay River, Northwest Territories",
    "value": "YGH"
  },
  {
    "label": "Yonago Airport Sakaiminato-shi, Tottori Prefecture",
    "value": "YGJ"
  },
  {
    "label": "Kingston Airport Kingston, Ontario",
    "value": "YGK"
  },
  {
    "label": "La Grande Riviere Airport Chisasibi, Quebec",
    "value": "YGL"
  },
  {
    "label": "Gods Lake Narrows Airport Nelson House, Manitoba",
    "value": "YGO"
  },
  {
    "label": "Gaspe Airport Gaspé, Quebec",
    "value": "YGP"
  },
  {
    "label": "Iles de la Madeleine Airport Fatima, Quebec",
    "value": "YGR"
  },
  {
    "label": "Igloolik Airport Iqaluit, Nunavut",
    "value": "YGT"
  },
  {
    "label": "Harve-St-Pierre Airport Havre St Pierre, Quebec",
    "value": "YGV"
  },
  {
    "label": "Kuujjuarapik Airport Chisasibi, Quebec",
    "value": "YGW"
  },
  {
    "label": "Gillam Airport Nelson House, Manitoba",
    "value": "YGX"
  },
  {
    "label": "Grise Fiord Airport Iqaluit, Nunavut",
    "value": "YGZ"
  },
  {
    "label": "Port Hope Simpson Aerodrome St. Anthony, Newfoundland and Labrador",
    "value": "YHA"
  },
  {
    "label": "Hudson Bay Airport Melfort, Saskatchewan",
    "value": "YHB"
  },
  {
    "label": "Dryden Regional Airport Dryden, Ontario",
    "value": "YHD"
  },
  {
    "label": "Charlottetown Airport St. Anthony, Newfoundland and Labrador",
    "value": "YHG"
  },
  {
    "label": "Holman Airport Holman, ",
    "value": "YHI"
  },
  {
    "label": "Gjoa Haven Airport Cambridge Bay, Nunavut",
    "value": "YHK"
  },
  {
    "label": "Hamilton Airport Beamsville, Ontario",
    "value": "YHM"
  },
  {
    "label": "Hopedale Airport Happy Valley-Goose Bay, Newfoundland and Labrador",
    "value": "YHO"
  },
  {
    "label": "Poplar Hill Airport Casummit Lake, Ontario",
    "value": "YHP"
  },
  {
    "label": "Harrington Harbour Airport Havre-St-Pierre, Quebec",
    "value": "YHR"
  },
  {
    "label": "Sechelt Water Aerodrome Gibsons, British Columbia",
    "value": "YHS"
  },
  {
    "label": "Montreal St Hubert Airport St-Hubert, Quebec",
    "value": "YHU"
  },
  {
    "label": "Hay River Airport Hay River, Northwest Territories",
    "value": "YHY"
  },
  {
    "label": "Halifax International Airport Fall River, Nova Scotia",
    "value": "YHZ"
  },
  {
    "label": "Pakuashipi Airport Havre-St-Pierre, Quebec",
    "value": "YIF"
  },
  {
    "label": "China Yichang, Hubei",
    "value": "YIH"
  },
  {
    "label": "Ivujivik Airport Chisasibi, Quebec",
    "value": "YIK"
  },
  {
    "label": "Yining Yining, Xinjiang",
    "value": "YIN"
  },
  {
    "label": "Pond Inlet Airport Iqaluit, Nunavut",
    "value": "YIO"
  },
  {
    "label": "Willow Run Airport Ypsilanti, Michigan",
    "value": "YIP"
  },
  {
    "label": "Island Lake-Garden Hill Airport Nelson House, Manitoba",
    "value": "YIV"
  },
  {
    "label": " Yiwu, Zhejiang",
    "value": "YIW"
  },
  {
    "label": "Stephenville International Airport Stephenville, Newfoundland and Labrador",
    "value": "YJT"
  },
  {
    "label": "Kamloops Airport Kamloops, British Columbia",
    "value": "YKA"
  },
  {
    "label": "Kitchener Airport Kitchener, Ontario",
    "value": "YKF"
  },
  {
    "label": "Kangirsuk Airport Chisasibi, Quebec",
    "value": "YKG"
  },
  {
    "label": "Schefferville Airport Chisasibi, Quebec",
    "value": "YKL"
  },
  {
    "label": "Yakima Air Terminal Yakima, Washington",
    "value": "YKM"
  },
  {
    "label": "Waskaganish Airport Chisasibi, Quebec",
    "value": "YKQ"
  },
  {
    "label": "Yakutsk Airport Yakutsk, Sakha",
    "value": "YKS"
  },
  {
    "label": "Klemtu Water Aerodrome Masset, British Columbia",
    "value": "YKT"
  },
  {
    "label": "Chisasibi Aerodrome Chisasibi, Quebec",
    "value": "YKU"
  },
  {
    "label": "Lake Harbour Airport Iqaluit, Nunavut",
    "value": "YLC"
  },
  {
    "label": "Lac la Martre Aerodrome Hay River, Northwest Territories",
    "value": "YLE"
  },
  {
    "label": "Lansdowne House Airport Marathon, Ontario",
    "value": "YLH"
  },
  {
    "label": "Lloydminster Airport Vegreville, Alberta",
    "value": "YLL"
  },
  {
    "label": "La Tuque Airport La Tuque, Quebec",
    "value": "YLQ"
  },
  {
    "label": "Kelowna International Airport Kelowna, British Columbia",
    "value": "YLW"
  },
  {
    "label": "Mary's Harbour Airport St. Anthony, Newfoundland and Labrador",
    "value": "YMH"
  },
  {
    "label": "Fort Mcmurray Airport Fort Chipewyan, Alberta",
    "value": "YMM"
  },
  {
    "label": "Makkovik Airport Happy Valley-Goose Bay, Newfoundland and Labrador",
    "value": "YMN"
  },
  {
    "label": "Moosonee Airport Winisk, Ontario",
    "value": "YMO"
  },
  {
    "label": "Aéroport de Chapais-Chibougamau Métabetchouan, Quebec",
    "value": "YMT"
  },
  {
    "label": "Mirabel International Airport Mirabel, Quebec",
    "value": "YMX"
  },
  {
    "label": "Downtown Rail Station Montreal, Quebec",
    "value": "YMY"
  },
  {
    "label": "Natashquan Airport Havre-St-Pierre, Quebec",
    "value": "YNA"
  },
  {
    "label": "Yenbo Airport Yanbu al Bahr, Al Madinah",
    "value": "YNB"
  },
  {
    "label": "Wemindji Airport Chisasibi, Quebec",
    "value": "YNC"
  },
  {
    "label": "Ottawa Gatineau Airport Gatineau, Ontario",
    "value": "YND"
  },
  {
    "label": "Norway House Airport Nelson House, Manitoba",
    "value": "YNE"
  },
  {
    "label": "Youngstown-Warren Regional Airport Vienna, Ohio",
    "value": "YNG"
  },
  {
    "label": "Yanji Yanji, 吉林省",
    "value": "YNJ"
  },
  {
    "label": "North Spirit Lake Airport Casummit Lake, Ontario",
    "value": "YNO"
  },
  {
    "label": " Natuashish, ",
    "value": "YNP"
  },
  {
    "label": "Nemiscau Airport Chisasibi, Quebec",
    "value": "YNS"
  },
  {
    "label": "Yantai Airport Yantai, Shandong",
    "value": "YNT"
  },
  {
    "label": "Yang Yang International Airport Sonyang-Myeon, Kangwon-Do",
    "value": "YNY"
  },
  {
    "label": " Yancheng, Jiangsu",
    "value": "YNZ"
  },
  {
    "label": "Old Crow Airport Dawson, Yukon Territory",
    "value": "YOC"
  },
  {
    "label": "Ogoki Aerodrome Marathon, Ontario",
    "value": "YOG"
  },
  {
    "label": "Oxford House Airport Nelson House, Manitoba",
    "value": "YOH"
  },
  {
    "label": "High Level Airport Brownvale, Alberta",
    "value": "YOJ"
  },
  {
    "label": "Oshawa Airport Oshawa, Ontario",
    "value": "YOO"
  },
  {
    "label": "Rainbow Lake Airport Brownvale, Alberta",
    "value": "YOP"
  },
  {
    "label": "Ottawa International Airport Ottawa, Ontario",
    "value": "YOW"
  },
  {
    "label": "Port Alberni Airport Lake Cowichan, British Columbia",
    "value": "YPB"
  },
  {
    "label": "Paulatuk Airport Hay River, Northwest Territories",
    "value": "YPC"
  },
  {
    "label": "Peace River Airport Brownvale, Alberta",
    "value": "YPE"
  },
  {
    "label": "Inukjuak Airport Chisasibi, Quebec",
    "value": "YPH"
  },
  {
    "label": "Aupaluk Airport Chisasibi, Quebec",
    "value": "YPJ"
  },
  {
    "label": "Pickle Lake Airport Casummit Lake, Ontario",
    "value": "YPL"
  },
  {
    "label": "Pikangikum Airport Casummit Lake, Ontario",
    "value": "YPM"
  },
  {
    "label": "Peawanuck Airport Winisk, Ontario",
    "value": "YPO"
  },
  {
    "label": "Prince Rupert Airport Prince Rupert, British Columbia",
    "value": "YPR"
  },
  {
    "label": "Powell River Airport Powell River, British Columbia",
    "value": "YPW"
  },
  {
    "label": "Povungnituk Airport Chisasibi, Quebec",
    "value": "YPX"
  },
  {
    "label": "Burns Lake Airport Smithers, British Columbia",
    "value": "YPZ"
  },
  {
    "label": "Quebec Airport Ste-Foy, Quebec",
    "value": "YQB"
  },
  {
    "label": "Quaqtaq Airport Chisasibi, Quebec",
    "value": "YQC"
  },
  {
    "label": "The Pas Airport The Pas, Manitoba",
    "value": "YQD"
  },
  {
    "label": "Red Deer Regional Airport Sylvan Lake, Alberta",
    "value": "YQF"
  },
  {
    "label": "Windsor Airport Windsor, Ontario",
    "value": "YQG"
  },
  {
    "label": "Kenora Airport Kenora, Ontario",
    "value": "YQK"
  },
  {
    "label": "Lethbridge Airport Pincher, Alberta",
    "value": "YQL"
  },
  {
    "label": "Greater Moncton International Airport Moncton, New Brunswick",
    "value": "YQM"
  },
  {
    "label": "Nakina Airport Marathon, Ontario",
    "value": "YQN"
  },
  {
    "label": "Comox Airport Comox, British Columbia",
    "value": "YQQ"
  },
  {
    "label": "Regina Airport Regina, Saskatchewan",
    "value": "YQR"
  },
  {
    "label": "Thunder Bay International Airport Thunder Bay, Ontario",
    "value": "YQT"
  },
  {
    "label": "Grande Prairie Airport Brownvale, Alberta",
    "value": "YQU"
  },
  {
    "label": "Gander International Airport Gander, Newfoundland and Labrador",
    "value": "YQX"
  },
  {
    "label": "Sydney Airport Sydney, Nova Scotia",
    "value": "YQY"
  },
  {
    "label": "Quesnel Airport Quesnel, British Columbia",
    "value": "YQZ"
  },
  {
    "label": "Rae Lakes Aerodrome Hay River, Northwest Territories",
    "value": "YRA"
  },
  {
    "label": "Resolute Airport Iqaluit, Nunavut",
    "value": "YRB"
  },
  {
    "label": "Cartwright Airport St. Anthony, Newfoundland and Labrador",
    "value": "YRF"
  },
  {
    "label": "Rigolet Aerodrome Happy Valley-Goose Bay, Newfoundland and Labrador",
    "value": "YRG"
  },
  {
    "label": "Roberval Airport Roberval, Quebec",
    "value": "YRJ"
  },
  {
    "label": "Red Lake Airport Casummit Lake, Ontario",
    "value": "YRL"
  },
  {
    "label": "Red Sucker Lake Airport Nelson House, Manitoba",
    "value": "YRS"
  },
  {
    "label": "Rankin Inlet Airport Chesterfield Inlet, Nunavut",
    "value": "YRT"
  },
  {
    "label": "Sudbury Airport Garson, Ontario",
    "value": "YSB"
  },
  {
    "label": "Snowdrift Aerodrome Hay River, Northwest Territories",
    "value": "YSG"
  },
  {
    "label": "Smiths Falls Montague Township Russ Beach Airpor Smiths Falls, Ontario",
    "value": "YSH"
  },
  {
    "label": "Saint John Airport St. John, New Brunswick",
    "value": "YSJ"
  },
  {
    "label": "Sanikiluaq Airport Iqaluit, Nunavut",
    "value": "YSK"
  },
  {
    "label": "Fort Smith Airport Hay River, Northwest Territories",
    "value": "YSM"
  },
  {
    "label": "Postville Aerodrome Happy Valley-Goose Bay, Newfoundland and Labrador",
    "value": "YSO"
  },
  {
    "label": "Nanisivik Airport Iqaluit, Nunavut",
    "value": "YSR"
  },
  {
    "label": "Shante Airport Meiktila, Mandalay",
    "value": "YST"
  },
  {
    "label": "Sachs Harbour Airport Hay River, Nunavut",
    "value": "YSY"
  },
  {
    "label": "Thicket Portage Airport Nelson House, Manitoba",
    "value": "YTD"
  },
  {
    "label": "Cape Dorset Airport Iqaluit, Nunavut",
    "value": "YTE"
  },
  {
    "label": "Alma Alma, Quebec",
    "value": "YTF"
  },
  {
    "label": "Thompson Airport Nelson House, Manitoba",
    "value": "YTH"
  },
  {
    "label": "Big Trout Lake Airport Casummit Lake, Ontario",
    "value": "YTL"
  },
  {
    "label": "La Macaza Mont Tremblant, Quebec",
    "value": "YTM"
  },
  {
    "label": "Tasiujuaq Airport Chisasibi, Quebec",
    "value": "YTQ"
  },
  {
    "label": "Timmins Airport South Porcupine, Ontario",
    "value": "YTS"
  },
  {
    "label": "Toronto City Centre Airport Toronto, Ontario",
    "value": "YTZ"
  },
  {
    "label": "Tuktoyaktuk Airport Hay River, Northwest Territories",
    "value": "YUB"
  },
  {
    "label": "Umiujaq Airport Chisasibi, Quebec",
    "value": "YUD"
  },
  {
    "label": "Aéroport International Pierre-Elliott-Trudeau d Dorval, Quebec",
    "value": "YUL"
  },
  {
    "label": "Yuma International Airport Yuma, Arizona",
    "value": "YUM"
  },
  {
    "label": "Repulse Bay Airport Chesterfield Inlet, Nunavut",
    "value": "YUT"
  },
  {
    "label": "Hall Beach Airport Iqaluit, Nunavut",
    "value": "YUX"
  },
  {
    "label": "Rouyn Noranda Airport Évain, Quebec",
    "value": "YUY"
  },
  {
    "label": "Moroni Iconi Airport Moroni, Grande Comore",
    "value": "YVA"
  },
  {
    "label": "Bonaventure Airport Percé, Quebec",
    "value": "YVB"
  },
  {
    "label": "Broughton Island Airport Iqaluit, Nunavut",
    "value": "YVM"
  },
  {
    "label": "Val d'or Airport Val-d'or, Quebec",
    "value": "YVO"
  },
  {
    "label": "Kuujjuaq Airport Chisasibi, Quebec",
    "value": "YVP"
  },
  {
    "label": "Norman Wells Airport Hay River, Northwest Territories",
    "value": "YVQ"
  },
  {
    "label": "Vancouver International Airport Richmond, British Columbia",
    "value": "YVR"
  },
  {
    "label": "Deer Lake Airport Casummit Lake, Ontario",
    "value": "YVZ"
  },
  {
    "label": "Kangiqsujuaq Airport Chisasibi, Quebec",
    "value": "YWB"
  },
  {
    "label": "Winnipeg International Airport Winnipeg, Manitoba",
    "value": "YWG"
  },
  {
    "label": "Inner Harbour Airport Hay River, Nunavut",
    "value": "YWH"
  },
  {
    "label": "Fort Franklin Airport Hay River, Northwest Territories",
    "value": "YWJ"
  },
  {
    "label": "Wabush Airport Wabush, Newfoundland and Labrador",
    "value": "YWK"
  },
  {
    "label": "Williams Lake Airport Williams Lake, British Columbia",
    "value": "YWL"
  },
  {
    "label": "Williams Harbour Airport St. Anthony, Newfoundland and Labrador",
    "value": "YWM"
  },
  {
    "label": "Webequie Airport Marathon, Ontario",
    "value": "YWP"
  },
  {
    "label": "Green Lake Water Aerodrome Gibsons, British Columbia",
    "value": "YWS"
  },
  {
    "label": "Cranbrook Airport Cranbrook, British Columbia",
    "value": "YXC"
  },
  {
    "label": "John G Diefenbaker International Airport Saskatoon, Saskatchewan",
    "value": "YXE"
  },
  {
    "label": "Medicine Hat Airport Medicine Hat, Alberta",
    "value": "YXH"
  },
  {
    "label": "North Peace Airport Fort St. John, British Columbia",
    "value": "YXJ"
  },
  {
    "label": "Rimouski Airport Rimouski, Quebec",
    "value": "YXK"
  },
  {
    "label": "Sioux Lookout Airport Sioux Lookout, Ontario",
    "value": "YXL"
  },
  {
    "label": "Whale Cove Airport Chesterfield Inlet, Nunavut",
    "value": "YXN"
  },
  {
    "label": "Pangnirtung Airport Iqaluit, Nunavut",
    "value": "YXP"
  },
  {
    "label": "Prince George Airport Prince George, British Columbia",
    "value": "YXS"
  },
  {
    "label": "Terrace Airport Terrace, British Columbia",
    "value": "YXT"
  },
  {
    "label": "London International Airport London, Ontario",
    "value": "YXU"
  },
  {
    "label": "Abbotsford International Airport Abbotsford, British Columbia",
    "value": "YXX"
  },
  {
    "label": "Whitehorse International Airport Whitehorse, Yukon Territory",
    "value": "YXY"
  },
  {
    "label": "North Bay Airport North Bay, Ontario",
    "value": "YYB"
  },
  {
    "label": "Calgary International Airport Calgary, Alberta",
    "value": "YYC"
  },
  {
    "label": "Smithers Airport Smithers, British Columbia",
    "value": "YYD"
  },
  {
    "label": "Fort Nelson Airport Fort Nelson, British Columbia",
    "value": "YYE"
  },
  {
    "label": "Penticton Airport Penticton, British Columbia",
    "value": "YYF"
  },
  {
    "label": "Charlottetown Airport Charlottetown, Prince Edward Island",
    "value": "YYG"
  },
  {
    "label": "Taloyoak Airport Cambridge Bay, Nunavut",
    "value": "YYH"
  },
  {
    "label": "Victoria International Airport Sidney, British Columbia",
    "value": "YYJ"
  },
  {
    "label": "Lynn Lake Airport Nelson House, Manitoba",
    "value": "YYL"
  },
  {
    "label": "Churchill Airport Nelson House, Manitoba",
    "value": "YYQ"
  },
  {
    "label": "Goose Bay Airport Happy Valley-Goose Bay, Newfoundland and Labrador",
    "value": "YYR"
  },
  {
    "label": "St John's International Airport St. John's, Newfoundland and Labrador",
    "value": "YYT"
  },
  {
    "label": "Kapuskasing Airport Kapuskasing, Ontario",
    "value": "YYU"
  },
  {
    "label": "Mont Joli Airport Mont-Joli, Quebec",
    "value": "YYY"
  },
  {
    "label": "Toronto Lester B Pearson International Airport Mississauga, Ontario",
    "value": "YYZ"
  },
  {
    "label": "Yellowknife Airport Yellowknife, Northwest Territories",
    "value": "YZF"
  },
  {
    "label": "Salluit Airport Chisasibi, Quebec",
    "value": "YZG"
  },
  {
    "label": "Sandspit Airport Masset, British Columbia",
    "value": "YZP"
  },
  {
    "label": "Sarnia Airport Sarnia, Ontario",
    "value": "YZR"
  },
  {
    "label": "Coral Harbour Airport Chesterfield Inlet, Nunavut",
    "value": "YZS"
  },
  {
    "label": "Port Hardy Airport Gibsons, British Columbia",
    "value": "YZT"
  },
  {
    "label": "Sept Iles Airport Sept-Îles, Quebec",
    "value": "YZV"
  },
  {
    "label": "Trail Airport Trail, British Columbia",
    "value": "YZZ"
  },
  {
    "label": "York Landing Airport Nelson House, Manitoba",
    "value": "ZAC"
  },
  {
    "label": "Zadar Airport Zadar, Zadarsko-Kninska",
    "value": "ZAD"
  },
  {
    "label": "Zagreb Airport Nagygoricza, Zagrebačka",
    "value": "ZAG"
  },
  {
    "label": "Zahedan International Airport Dowzdab, Sistan va Baluchestan",
    "value": "ZAH"
  },
  {
    "label": "Pichoy Airport Pelchuquin, Los Lagos",
    "value": "ZAL"
  },
  {
    "label": "Zamboanga International Airport Zamboanga, Zamboanga Peninsula",
    "value": "ZAM"
  },
  {
    "label": "Bavaria Nuremberg, Bavaria",
    "value": "ZAQ"
  },
  {
    "label": "Zhaotong Zhaotong, Yunnan",
    "value": "ZAT"
  },
  {
    "label": "Zaragoza Air Base Zaragoza, Aragon",
    "value": "ZAZ"
  },
  {
    "label": "Switzerland Basel, Canton of Basel-City",
    "value": "ZBA"
  },
  {
    "label": "Bathurst Airport Bathurst, New Brunswick",
    "value": "ZBF"
  },
  {
    "label": "Australia Biloela, Queensland",
    "value": "ZBL"
  },
  {
    "label": " Baltimore, Maryland",
    "value": "ZBP"
  },
  {
    "label": "Chah Bahar Airport Chabahar, Sistan va Baluchestan",
    "value": "ZBR"
  },
  {
    "label": "Skopje Airport , Ilinden",
    "value": "ZCB"
  },
  {
    "label": "Zacatecas Airport Pánuco, Zacatecas",
    "value": "ZCL"
  },
  {
    "label": "Maquehue Airport Padre Las Casas, Araucania",
    "value": "ZCO"
  },
  {
    "label": "Basel SBB station Basel, Basel-Stadt",
    "value": "ZDH"
  },
  {
    "label": "Kingsford Smith Airport Sydney, New South Wales",
    "value": "ZDN"
  },
  {
    "label": "London City Airport London, England",
    "value": "ZDU"
  },
  {
    "label": "Kelsey Airport Kelsey, Manitoba",
    "value": "ZEE"
  },
  {
    "label": " Zei, Yobe",
    "value": "ZEI"
  },
  {
    "label": "Satu Mare Airport , Satu Mare",
    "value": "ZEJ"
  },
  {
    "label": "Bella Bella Airport Masset, British Columbia",
    "value": "ZEL"
  },
  {
    "label": "East Main Airport Chisasibi, Quebec",
    "value": "ZEM"
  },
  {
    "label": " London, England",
    "value": "ZEP"
  },
  {
    "label": " Zeu, Nebbi",
    "value": "ZEU"
  },
  {
    "label": "England Chesterfield, England",
    "value": "ZFI"
  },
  {
    "label": "France Rennes, null",
    "value": "ZFJ"
  },
  {
    "label": "Fort Mcpherson Airport Hay River, Northwest Territories",
    "value": "ZFM"
  },
  {
    "label": "Fort Norman Airport Hay River, Northwest Territories",
    "value": "ZFN"
  },
  {
    "label": "France Bordeaux, null",
    "value": "ZFQ"
  },
  {
    "label": "Philadelphia Rail Philadelphia, Pennsylvania",
    "value": "ZFV"
  },
  {
    "label": "New York Buffalo, New York",
    "value": "ZFZ"
  },
  {
    "label": "New London Groton, Connecticut",
    "value": "ZGD"
  },
  {
    "label": "United Kingdom Glasgow, Scotland",
    "value": "ZGG"
  },
  {
    "label": "Copenhagen Main Station Copenhagen, ",
    "value": "ZGH"
  },
  {
    "label": "Gods River Airport Nelson House, Manitoba",
    "value": "ZGI"
  },
  {
    "label": "Zhongshan Ferry Port Zhongshan, Guangdong",
    "value": "ZGN"
  },
  {
    "label": "Gotha Gotha, Thuringia",
    "value": "ZGO"
  },
  {
    "label": "Gethsemani Airport Havre-St-Pierre, Quebec",
    "value": "ZGS"
  },
  {
    "label": "Gaua Airport Gaua, ",
    "value": "ZGU"
  },
  {
    "label": "Zhanjiang Airport Zhanjiang, Guangdong",
    "value": "ZHA"
  },
  {
    "label": "Bus Station Houston, Texas",
    "value": "ZHO"
  },
  {
    "label": "Fallowfield Railway Ottawa, Ontario",
    "value": "ZIF"
  },
  {
    "label": "Ziguinchor Airport Ziguinchor, Ziguinchor",
    "value": "ZIG"
  },
  {
    "label": "Ixtapa Zihuatanejo International Airport Petatlán, Guerrero",
    "value": "ZIH"
  },
  {
    "label": "Inverness Rail Station Inverness, Scotland",
    "value": "ZIV"
  },
  {
    "label": " Tanjung Pelepas, ",
    "value": "ZJT"
  },
  {
    "label": "Kaschechewan Airport Winisk, Ontario",
    "value": "ZKE"
  },
  {
    "label": "Kegaska Airport Havre-St-Pierre, Quebec",
    "value": "ZKG"
  },
  {
    "label": "Le Mans Le Mans, Pays de la Loire",
    "value": "ZLN"
  },
  {
    "label": "Playa de Oro International Airport Manzanillo, Jalisco",
    "value": "ZLO"
  },
  {
    "label": "England London, England",
    "value": "ZLS"
  },
  {
    "label": "La Tabatiere Airport Havre-St-Pierre, Quebec",
    "value": "ZLT"
  },
  {
    "label": "Albany International Airport Albany, New York",
    "value": "ZLY"
  },
  {
    "label": "Hamburg Hauptbahnhof Hamburg, Hamburg",
    "value": "ZMB"
  },
  {
    "label": "New Jersey Newark, New Jersey",
    "value": "ZME"
  },
  {
    "label": "General Mitchell International Airport Milwaukee, Wisconsin",
    "value": "ZML"
  },
  {
    "label": "Masset Airport Masset, British Columbia",
    "value": "ZMT"
  },
  {
    "label": "Bavaria Munich, Bavaria",
    "value": "ZMU"
  },
  {
    "label": "Huangpu Harbour Huangpu, Shanghai",
    "value": "ZMY"
  },
  {
    "label": "Nanaimo Harbour Airport Nanaimo, British Columbia",
    "value": "ZNA"
  },
  {
    "label": "Sinop Airport Santo Antônio do Içá, Amazonas",
    "value": "ZNB"
  },
  {
    "label": "Newman Airport Newman, Western Australia",
    "value": "ZNE"
  },
  {
    "label": "Santa Elena Airport Santa Elena de Uairén, Bolivar",
    "value": "ZNV"
  },
  {
    "label": "Zanzibar Airport Stone Town, Zanzibar Urban/West",
    "value": "ZNZ"
  },
  {
    "label": "Canal Bajo Carlos H Siebert Airport Osorno, Los Lagos",
    "value": "ZOS"
  },
  {
    "label": "Sachigo Lake Airport Casummit Lake, Ontario",
    "value": "ZPB"
  },
  {
    "label": "Frankton Airport Queenstown, Otago",
    "value": "ZQN"
  },
  {
    "label": "Rheinland-Pfalz Zweibrucken, Rheinland-Pfalz",
    "value": "ZQW"
  },
  {
    "label": "Frankfurt International Airport Frankfurt, Hesse",
    "value": "ZRB"
  },
  {
    "label": "Richmond Richmond, Virginia",
    "value": "ZRD"
  },
  {
    "label": "Zurich International Airport Kloten, Canton of Zurich",
    "value": "ZRH"
  },
  {
    "label": "Round Lake Airport Casummit Lake, Ontario",
    "value": "ZRJ"
  },
  {
    "label": "Lancaster Lancaster, Pennsylvania",
    "value": "ZRL"
  },
  {
    "label": "Pennsylvania Station Newark, New Jersey",
    "value": "ZRP"
  },
  {
    "label": "Hartford Hartford, Connecticut",
    "value": "ZRT"
  },
  {
    "label": " Boston, Massachusetts",
    "value": "ZRU"
  },
  {
    "label": "Providence Providence, Rhode Island",
    "value": "ZRV"
  },
  {
    "label": "San Salvador Airport Cockburn Town, San Salvador",
    "value": "ZSA"
  },
  {
    "label": "Réunion St Pierre dela Reunion, St-Denis",
    "value": "ZSE"
  },
  {
    "label": "Springfield MA RR Springfield, Massachusetts",
    "value": "ZSF"
  },
  {
    "label": "Sandy Lake Airport Casummit Lake, Ontario",
    "value": "ZSJ"
  },
  {
    "label": "South Indian Lake Airport South Indian Lake, Manitoba",
    "value": "ZSN"
  },
  {
    "label": " Tureira, ",
    "value": "ZTA"
  },
  {
    "label": "Tete-a-la-Baleine Airport Havre-St-Pierre, Quebec",
    "value": "ZTB"
  },
  {
    "label": " Schenectady, New York",
    "value": "ZTD"
  },
  {
    "label": " Rochester, New York",
    "value": "ZTE"
  },
  {
    "label": " Stamford, Connecticut",
    "value": "ZTF"
  },
  {
    "label": "Zakinthos Airport Zante, Nisia Ionioy",
    "value": "ZTH"
  },
  {
    "label": "Humen Port Humen, Guangdong",
    "value": "ZTI"
  },
  {
    "label": "New Jersey Princeton, New Jersey",
    "value": "ZTJ"
  },
  {
    "label": "Shamattawa Airport Nelson House, Manitoba",
    "value": "ZTM"
  },
  {
    "label": " Philadelphia, New Jersey",
    "value": "ZTN"
  },
  {
    "label": " Boston, Massachusetts",
    "value": "ZTO"
  },
  {
    "label": "Louisville International Airport Louisville, Kentucky",
    "value": "ZTV"
  },
  {
    "label": " Boston, Massachusetts",
    "value": "ZTY"
  },
  {
    "label": "Utica Utica, New York",
    "value": "ZUA"
  },
  {
    "label": " Harrisburg, Pennsylvania",
    "value": "ZUG"
  },
  {
    "label": "Zhuhai Airport Zhuhai, Guangdong",
    "value": "ZUH"
  },
  {
    "label": "Churchill Falls Airport Wabush, Newfoundland and Labrador",
    "value": "ZUM"
  },
  {
    "label": "Black Rock Airport Zuni, New Mexico",
    "value": "ZUN"
  },
  {
    "label": "New Haven New Haven, Connecticut",
    "value": "ZVE"
  },
  {
    "label": "Savannakhet Airport Savannakhet, Savannahkhet",
    "value": "ZVK"
  },
  {
    "label": "Hannover Hauptbahnhof Hanover, Lower-Saxony",
    "value": "ZVR"
  },
  {
    "label": "Williamsburg Rail Hampton, Virginia",
    "value": "ZWB"
  },
  {
    "label": " , ",
    "value": "ZWE"
  },
  {
    "label": "Wilmington Rail Wilmington, Pennsylvania",
    "value": "ZWI"
  },
  {
    "label": "Stuttgart Hauptbahnhof Stuttgart, Baden-Württemberg",
    "value": "ZWS"
  },
  {
    "label": "Union Station Washington, Virginia",
    "value": "ZWU"
  },
  {
    "label": "Illinois Glenview, Illinois",
    "value": "ZWV"
  },
  {
    "label": "Newport News Hampton, Virginia",
    "value": "ZWW"
  },
  {
    "label": "Aberdeen railway station Aberdeen, Scotland",
    "value": "ZXA"
  },
  {
    "label": "Waverley station Edinburgh, Scotland",
    "value": "ZXE"
  },
  {
    "label": "Amsterdam Central Station Amsterdam, ",
    "value": "ZYA"
  },
  {
    "label": "Shekou Port Shekou, 湖北省",
    "value": "ZYK"
  },
  {
    "label": "Osmany Sylhet Airport Sylhet, Sylhet",
    "value": "ZYL"
  },
  {
    "label": "Nimes Rail Station Nimes, Languedoc-Roussillon",
    "value": "ZYN"
  },
  {
    "label": "Penn Station New York, New York",
    "value": "ZYP"
  },
  {
    "label": "Syracuse Syracuse, New York",
    "value": "ZYQ"
  },
  {
    "label": "Brussels Midi Railway Station Brussels, Vlaams Brabant",
    "value": "ZYR"
  },
  {
    "label": "Berchem Railway Stn. Antwerp, Flanders",
    "value": "ZYZ"
  },
  {
    "label": "Teniente R. Marsh Airport Teniente R. Marsh, ",
    "value": "TNM"
  }
]