global.sites = JSON.parse(`[
  {
    "name": "Portal",
    "country": "ALL",
    "solution": "NAP",
    "site": "POR",
    "url": {
      "test": {
        "direct": "http://test-portal.danskenet.net/"
      },
      "syst": {
        "direct": "http://syst-portal.danskenet.net/"
      },
      "prod": {
        "direct": "http://portal.danskenet.net/"
      }
    }
  },
  {
    "name": "ApplSIn",
    "country": "ALL",
    "solution": "NAP",
    "site": "POR",
    "url": {
      "test": {
        "direct": "http://test-portal.danskenet.net/?http://test-geminiportal03.danskenet.net/SBA/AdmPKI/ApplSInMain.aspx"
      },
      "syst": {
        "direct": "http://syst-portal.danskenet.net/?http://syst-geminiportal03.danskenet.net/SBA/AdmPKI/ApplSInMain.aspx"
      },
      "prod": {
        "direct": "http://portal.danskenet.net/?http://geminiportal03.danskenet.net/SBA/AdmPKI/ApplSInMain.aspx"
      }
    }
  },
  {
    "name": "eBanking SE",
    "country": "SE",
    "solution": "ESK",
    "site": "EBN",
    "url": {
      "test": {
        "direct": "http://test-hembanken2.danskebank.se/pub/logon/logon.aspx?ss=JS"
      },
      "syst": {
        "direct": "https://syst-hembanken2.danskebank.se/pub/logon/logon.aspx?ss=JS",
        "popup": "https://syst-www.danskebank.se/sv-se/Pages/default.aspx?secsystem=JS"
      },
      "prod": {
        "direct": "https://hembanken2.danskebank.se/pub/logon/logon.aspx?ss=JS",
        "popup": "https://www.danskebank.se/sv-se/privat/Pages/Privat.aspx?secsystem=JS"
      }
    }
  },
  {
    "name": "eBanking FI - EN",
    "country": "FI",
    "solution": "ESK",
    "site": "EBN",
    "url": {
      "test": {
        "direct": "http://test-ebanking2.danskebank.fi/pub/logon/logon.aspx?ss=JS"
      },
      "syst": {
        "direct": "https://syst-ebanking2.danskebank.fi/pub/logon/logon.aspx?ss=JS",
        "popup": "https://syst-www.danskebank.fi/en-fi/Pages/default.aspx?secsystem=JS"
      },
      "prod": {
        "direct": "https://ebanking2.danskebank.fi/pub/logon/logon.aspx?ss=JS",
        "popup": "https://www.danskebank.fi/en-fi/Personal/Pages/Personal.aspx?secsystem=JS"
      }
    }
  },
  {
    "name": "eBanking FI - SE",
    "country": "FI",
    "solution": "ESK",
    "site": "EBN",
    "url": {
      "test": {
        "direct": "http://test-webbank2.danskebank.fi/pub/logon/logon.aspx?ss=JS"
      },
      "syst": {
        "direct": "https://syst-webbank2.danskebank.fi/pub/logon/logon.aspx?ss=JS",
        "popup": "https://syst-www.danskebank.fi/sv-fi/Pages/default.aspx?secsystem=J2"
      },
      "prod": {
        "direct": "https://webbank2.danskebank.fi/pub/logon/logon.aspx?ss=JS",
        "popup": "https://www.danskebank.fi/sv-fi/Privat/Pages/Privat.aspx?secsystem=J2"
      }
    }
  },
  {
    "name": "eBanking FI - FI",
    "country": "FI",
    "solution": "ESK",
    "site": "EBN",
    "url": {
      "test": {
        "direct": "http://test-verkkopankki2.danskebank.fi/pub/logon/logon.aspx?ss=JS"
      },
      "syst": {
        "direct": "https://syst-verkkopankki2.danskebank.fi/pub/logon/logon.aspx?ss=JS",
        "popup": "https://syst-www.danskebank.fi/fi-fi/Henkiloasiakkaat/Pages/henkiloasiakkaat.aspx?secsystem=J3"
      },
      "prod": {
        "direct": "https://verkkopankki2.danskebank.fi/pub/logon/logon.aspx?ss=JS",
        "popup": "https://www.danskebank.fi/fi-fi/Henkiloasiakkaat/Pages/henkiloasiakkaat.aspx?secsystem=J3"
      }
    }
  },
  {
    "name": "eBanking NB",
    "country": "UK",
    "solution": "ESK",
    "site": "EBN",
    "url": {
      "test": {
        "direct": "http://test-ebanking2.danskebank.co.uk/pub/logon/logon.aspx?ss=JS"
      },
      "syst": {
        "direct": "http://syst-ebanking2.danskebank.co.uk/pub/logon/logon.aspx?ss=JS",
        "popup": "https://syst-www.danskebank.co.uk/en-gb/Pages/default.aspx?secsystem=JS"
      },
      "prod": {
        "direct": "http://ebanking2.danskebank.co.uk/pub/logon/logon.aspx?ss=JS",
        "popup": "https://www.danskebank.co.uk/en-gb/Personal/Pages/personal.aspx?secsystem=js"
      }
    }
  },
  {
    "name": "eBanking NIB",
    "country": "IE",
    "solution": "ESK",
    "site": "EBN",
    "url": {
      "test": {
        "direct": "http://test-ebanking2.danskebank.ie/pub/logon/logon.aspx?ss=JS"
      },
      "syst": {
        "direct": "https://syst-www.danskebank.ie/en-ie/Pages/default.aspx?secsystem=JS"
      },
      "prod": {
        "popup": "https://www.danskebank.ie/en-ie/Personal/Pages/personal.aspx?secsystem=js"
      }
    }
  },
  {
    "name": "eBanking LU",
    "country": "LU",
    "solution": "ESK",
    "site": "EBN",
    "url": {
      "test": {
        "direct": "http://test-ebanking2.danskebank.lu/pub/logon/logon.aspx?ss=JS"
      },
      "syst": {
        "direct": "http://syst-ebanking2.danskebank.lu/pub/logon/logon.aspx?ss=JS",
        "popup": "https://syst-www.danskebank.lu/en-ie/Pages/default.aspx?secsystem=JS"
      },
      "prod": {
        "direct": "http://ebanking2.danskebank.lu/pub/logon/logon.aspx?ss=JS",
        "popup": "https://www.danskebank.lu/en-lu/private-banking/pages/private-banking.aspx?secsystem=js"
      }
    }
  },
  {
    "name": "Business DB",
    "country": "DK",
    "solution": "ESK",
    "site": "BON",
    "url": {
      "test": {
        "direct": "http://test-business2.danskebank.dk/pub/logon/logon.aspx?ss=JS"
      },
      "syst": {
        "direct": "http://syst-business2.danskebank.dk/pub/logon/logon.aspx?ss=JS"
      },
      "prod": {
        "direct": "http://business2.danskebank.dk/pub/logon/logon.aspx?ss=JS",
        "popup": "https://www.danskebank.dk/da-dk/erhverv/Pages/Erhverv.aspx?secsystem=JB"
      }
    }
  },
  {
    "name": "Business SE",
    "country": "SE",
    "solution": "ESK",
    "site": "BON",
    "url": {
      "test": {
        "direct": "http://test-business2.danskebank.se/pub/logon/logon.aspx?ss=JS"
      },
      "syst": {
        "direct": "http://syst-business2.danskebank.se/pub/logon/logon.aspx?ss=JS"
      },
      "prod": {
        "direct": "http://business2.danskebank.se/pub/logon/logon.aspx?ss=JS",
        "popup": "https://www.danskebank.se/sv-se/Foretag/Pages/Foretag.aspx?secsystem=JB"
      }
    }
  },
  {
    "name": "Business NB",
    "country": "UK",
    "solution": "ESK",
    "site": "BON",
    "url": {
      "test": {
        "direct": "http://test-business2.danskebank.co.uk/pub/logon/logon.aspx?ss=JS"
      },
      "syst": {
        "direct": "http://syst-business2.danskebank.co.uk/pub/logon/logon.aspx?ss=JS"
      },
      "prod": {
        "direct": "http://business2.danskebank.co.uk/pub/logon/logon.aspx?ss=JS",
        "popup": "https://www.danskebank.co.uk/en-gb/Business/Pages/Business.aspx?secsystem=JB"
      }
    }
  },
  {
    "name": "Business NIB",
    "country": "IE",
    "solution": "ESK",
    "site": "BON",
    "url": {
      "test": {
        "direct": "http://test-business2.danskebank.ie/pub/logon/logon.aspx?ss=JS"
      },
      "syst": {
        "direct": "http://syst-business2.danskebank.ie/pub/logon/logon.aspx?ss=JS"
      },
      "prod": {
        "direct": "http://business2.danskebank.ie/pub/logon/logon.aspx?ss=JS",
        "popup": "https://www.danskebank.ie/en-ie/Business/Pages/business.aspx?secsystem=JB"
      }
    }
  },
  {
    "name": "Business COM",
    "country": "ALL",
    "solution": "ESK",
    "site": "BON",
    "url": {
      "test": {
        "direct": "http://test-business2.danskebank.com/pub/logon/logon.aspx?ss=JS"
      },
      "syst": {
        "direct": "http://syst-business2.danskebank.com/pub/logon/logon.aspx?ss=JS"
      },
      "prod": {
        "direct": "http://business2.danskebank.com/pub/logon/logon.aspx?ss=JS",
        "popup": "https://www.danskebank.com/da-dk/Pages/default.aspx?secsystem=JB"
      }
    }
  },
  {
    "name": "Business PO EN",
    "country": "PL",
    "solution": "ESK",
    "site": "BON",
    "url": {
      "test": {
        "direct": "http://test-business2.danskebank.pl/pub/logon/logon.aspx?ss=JS"
      },
      "syst": {
        "direct": "https://syst-business2.danskebank.pl/pub/logon/logon.aspx?ss=JS"
      },
      "prod": {
        "direct": "https://business2.danskebank.pl/pub/logon/logon.aspx?ss=JS",
        "popup": "https://www.danskebank.pl/pl-pl/Pages/WelcomePage.aspx?secsystem=JB"
      }
    }
  },
  {
    "name": "Business PO PO",
    "country": "PL",
    "solution": "ESK",
    "site": "BON",
    "url": {
      "test": {
        "direct": "http://test-business2.danskebank.pl/pub/logon/logon.aspx?ss=JS&gsSprog=PL"
      },
      "syst": {
        "direct": "https://syst-business2.danskebank.pl/pub/logon/logon.aspx?ss=JS&gsSprog=PL"
      },
      "prod": {
        "direct": "https://business2.danskebank.pl/pub/logon/logon.aspx?ss=JS&gsSprog=PL",
        "popup": "https://danskebank.pl/pl-pl/Pages/WelcomePage.aspx?secsystem=JP"
      }
    }
  },
  {
    "name": "One Trader COM",
    "country": "ALL",
    "solution": "ESK",
    "site": "ONT",
    "url": {
      "test": {
        "direct": "http://test-business2.danskebank.com/pub/logon/logon.aspx?ss=JS&DL=ONETRADER"
      },
      "syst": {
        "direct": "https://syst-business2.danskebank.com/pub/logon/logon.aspx?ss=JS&DL=ONETRADER"
      },
      "prod": {
        "direct": "https://business2.danskebank.com/pub/logon/logon.aspx?ss=JS&DL=ONETRADER",
        "popup": "https://www.danskebank.com/en-uk/ci/Pages/ci.aspx?secsystem=JB&DL=ONETRADER"
      }
    }
  },
  {
    "name": "One Trader FI - EN",
    "country": "FI",
    "solution": "ESK",
    "site": "ONT",
    "url": {
      "test": {
        "direct": "http://test-ebanking2.danskebank.fi/pub/logon/logon.aspx?ss=JS&DL=OTFI"
      },
      "syst": {
        "direct": "https://syst-ebanking2.danskebank.fi/pub/logon/logon.aspx?ss=JS&DL=OTFI",
        "popup": "https://syst-www.danskebank.fi/en-fi/Pages/default.aspx?secsystem=JS&DL=OTFI"
      },
      "prod": {
        "direct": "https://ebanking2.danskebank.fi/pub/logon/logon.aspx?ss=JS&DL=OTFI",
        "popup": "https://www.danskebank.fi/en-fi/Personal/Pages/Personal.aspx?secsystem=JS&DL=OTFI"
      }
    }
  },
  {
    "name": "One Trader FI - SE",
    "country": "FI",
    "solution": "ESK",
    "site": "ONT",
    "url": {
      "test": {
        "direct": "http://test-webbank2.danskebank.fi/pub/logon/logon.aspx?ss=JS&DL=OTFI"
      },
      "syst": {
        "direct": "https://syst-webbank2.danskebank.fi/pub/logon/logon.aspx?ss=JS&DL=OTFI",
        "popup": "https://syst-www.danskebank.fi/sv-fi/Pages/default.aspx?secsystem=J2&DL=OTFI"
      },
      "prod": {
        "direct": "https://webbank2.danskebank.fi/pub/logon/logon.aspx?ss=JS&DL=OTFI",
        "popup": "https://www.danskebank.fi/sv-fi/Privat/Pages/Privat.aspx?secsystem=J2&DL=OTFI"
      }
    }
  },
  {
    "name": "One Trader FI - FI",
    "country": "FI",
    "solution": "ESK",
    "site": "ONT",
    "url": {
      "test": {
        "direct": "http://test-verkkopankki2.danskebank.fi/pub/logon/logon.aspx?ss=JS&DL=OTFI"
      },
      "syst": {
        "direct": "https://syst-verkkopankki2.danskebank.fi/pub/logon/logon.aspx?ss=JS&DL=OTFI",
        "popup": "https://syst-www.danskebank.fi/fi-fi/Henkiloasiakkaat/Pages/henkiloasiakkaat.aspx?secsystem=J3&DL=OTFI"
      },
      "prod": {
        "direct": "https://verkkopankki2.danskebank.fi/pub/logon/logon.aspx?ss=JS&DL=OTFI",
        "popup": "https://www.danskebank.fi/fi-fi/Henkiloasiakkaat/Pages/henkiloasiakkaat.aspx?secsystem=J3&DL=OTFI"
      }
    }
  },
  {
    "name": "One Trader DB",
    "country": "DK",
    "solution": "ESK",
    "site": "ONT",
    "url": {
      "test": {
        "direct": "http://test-business2.danskebank.dk/pub/logon/logon.aspx?ss=JS&DL=OTDK"
      },
      "syst": {
        "direct": "https://syst-business2.danskebank.dk/pub/logon/logon.aspx?ss=JS&DL=OTDK"
      },
      "prod": {
        "direct": "https://business2.danskebank.dk/pub/logon/logon.aspx?ss=JS&DL=OTDK"
      }
    }
  },
  {
    "name": "One Trader UK",
    "country": "UK",
    "solution": "ESK",
    "site": "ONT",
    "url": {
      "test": {
        "direct": "http://test-business2.danskebank.co.uk/pub/logon/logon.aspx?ss=JS&DL=OTCOUK"
      },
      "syst": {
        "direct": "https://syst-business2.danskebank.co.uk/pub/logon/logon.aspx?ss=JS&DL=OTCOUK"
      },
      "prod": {
        "direct": "https://business2.danskebank.co.uk/pub/logon/logon.aspx?ss=JS&DL=OTCOUK"
      }
    }
  },
  {
    "name": "One Trader IE",
    "country": "IE",
    "solution": "ESK",
    "site": "ONT",
    "url": {
      "test": {
        "direct": "http://test-business2.danskebank.se/pub/logon/logon.aspx?ss=JS&DL=OTSE"
      },
      "syst": {
        "direct": "https://syst-business2.danskebank.se/pub/logon/logon.aspx?ss=JS&DL=OTSE"
      },
      "prod": {
        "direct": "https://business2.danskebank.se/pub/logon/logon.aspx?ss=JS&DL=OTSE"
      }
    }
  },
  {
    "name": "One Trader NO",
    "country": "NO",
    "solution": "ESK",
    "site": "ONT",
    "url": {
      "test": {
        "direct": "http://test-business2.danskebank.no/pub/logon/logon.aspx?ss=JS&DL=OTNO"
      },
      "syst": {
        "direct": "https://syst-business2.danskebank.no/pub/logon/logon.aspx?ss=JS&DL=OTNO"
      },
      "prod": {
        "direct": "https://business2.danskebank.no/pub/logon/logon.aspx?ss=JS&DL=OTNO"
      }
    }
  },
  {
    "name": "One Trader PL EN",
    "country": "PL",
    "solution": "ESK",
    "site": "ONT",
    "url": {
      "test": {
        "direct": "http://test-business2.danskebank.pl/pub/logon/logon.aspx?ss=JS&DL=OTPL"
      },
      "syst": {
        "direct": "https://syst-business2.danskebank.pl/pub/logon/logon.aspx?ss=JS&DL=OTPL"
      },
      "prod": {
        "direct": "https://business2.danskebank.pl/pub/logon/logon.aspx?ss=JS&DL=OTPL"
      }
    }
  },
  {
    "name": "One Trader PL PL",
    "country": "PL",
    "solution": "ESK",
    "site": "ONT",
    "url": {
      "test": {
        "direct": "http://test-business2.danskebank.pl/pub/logon/logon.aspx?ss=JS&DL=OTPL&gsSprog=PL"
      },
      "syst": {
        "direct": "https://syst-business2.danskebank.pl/pub/logon/logon.aspx?ss=JS&DL=OTPL&gsSprog=PL"
      },
      "prod": {
        "direct": "https://business2.danskebank.pl/pub/logon/logon.aspx?ss=JS&DL=OTPL&gsSprog=PL"
      }
    }
  },
  {
    "name": "MobilePay Business DB",
    "country": "DK",
    "solution": "ESK",
    "site": "OTH",
    "url": {
      "test": {
        "direct": "http://test-business2.danskebank.dk/pub/logon/logon.aspx?ss=JS&DL=MOBIPAY"
      },
      "syst": {
        "direct": "http://syst-business2.danskebank.dk/pub/logon/logon.aspx?ss=JS&DL=MOBIPAY",
        "popup": "https://syst-www.danskebank.dk/da-dk/Pages/default.aspx?secsystem=MP"
      },
      "prod": {
        "direct": "https://business2.danskebank.dk/pub/logon/logon.aspx?ss=JS&DL=MOBIPAY",
        "popup": "https://www.danskebank.dk/da-dk/erhverv/Pages/Erhverv.aspx?secsystem=MP"
      }
    }
  },
  {
    "name": "MobilePay Business COM",
    "country": "ALL",
    "solution": "ESK",
    "site": "OTH",
    "url": {
      "test": {
        "direct": "http://test-business2.danskebank.com/pub/logon/logon.aspx?ss=JS&DL=MOBIPAY"
      },
      "syst": {
        "direct": "http://syst-business2.danskebank.com/pub/logon/logon.aspx?ss=JS&DL=MOBIPAY",
        "popup": "https://syst-www.danskebank.com/en-uk/Pages/default.aspx?secsystem=MP"
      },
      "prod": {
        "direct": "https://business2.danskebank.com/pub/logon/logon.aspx?ss=JS&DL=MOBIPAY",
        "popup": "https://www.danskebank.com/da-dk/Pages/default.aspx?secsystem=MP"
      }
    }
  },
  {
    "name": "Danish Government",
    "country": "DK",
    "solution": "ESK",
    "site": "OTH",
    "url": {
      "test": {
        "direct": "http://test-business2.danskebank.dk/pub/logon/logon.aspx?ss=JS&DL=SKBOBS&site=SKBN"
      },
      "syst": {
        "direct": "https://syst-business2.danskebank.dk/pub/logon/logon.aspx?ss=JS&DL=SKBOBS&site=SKBN",
        "popup": "https://syst-www.danskebank.dk/da-dk/skbobs/Pages/skbobs.aspx?secsystem=DS"
      },
      "prod": {
        "direct": "https://business2.danskebank.dk/pub/logon/logon.aspx?ss=JS&DL=SKBOBS&site=SKBN",
        "popup": "https://www.danskebank.dk/da-dk/skbobs/Pages/skbobs.aspx?secsystem=DS"
      }
    }
  },
  {
    "name": "Swedish Government",
    "country": "SE",
    "solution": "ESK",
    "site": "OTH",
    "url": {
      "test": {
        "direct": "http://test-business2.danskebank.se/pub/logon/logon.aspx?ss=JS&site=RGBN"
      },
      "syst": {
        "direct": "https://syst-business2.danskebank.se/pub/logon/logon.aspx?ss=JS&site=RGBN",
        "popup": "https://syst-www.danskebank.se/sv-se/Pages/default.aspx?secsystem=RG"
      },
      "prod": {
        "direct": "https://business2.danskebank.se/pub/logon/logon.aspx?ss=JS&site=RGBN",
        "popup": "https://www.danskebank.se/sv-se/foretag/Pages/Foretag.aspx?secsystem=RG"
      }
    }
  },
  {
    "name": "Netpension Firma",
    "country": "DK",
    "solution": "ESK",
    "site": "OTH",
    "url": {
      "test": {
        "direct": "http://test-online2.danicapension.dk/pub/logon/logon.aspx?ss=JS"
      },
      "syst": {
        "direct": "https://syst-online2.danicapension.dk/pub/logon/logon.aspx?ss=JS",
        "popup": "https://syst-www.danicapension.dk/da-dk/Pages/default.aspx?SecSystem=JS"
      },
      "prod": {
        "direct": "https://online2.danicapension.dk/pub/logon/logon.aspx?ss=JS",
        "popup": "https://www.danicapension.dk/da-dk/Medarbejdere-og-private/selvbetjening/Teknisk-Support/Pages/Teknisk-support.aspx?SecSystem=JS"
      }
    }
  },
  {
    "name": "eBanking 3.0 - DK",
    "country": "DK",
    "solution": "ESK",
    "site": "EBN",
    "url": {
      "test": {
        "direct": "http://test-my.danskebank.dk/pub/logon/logon.aspx"
      },
      "syst": {
        "direct": "https://syst-my.danskebank.dk/pub/logon/logon.aspx"
      },
      "prod": {
        "direct": "https://my.danskebank.dk/pub/logon/logon.aspx"
      }
    }
  },
  {
    "name": "Financial Dashboard",
    "country": "ALL",
    "solution": "ESK",
    "site": "OTH",
    "url": {
      "test": {
        "direct": "http://test-business2.danskebank.com/pub/logon/logon.aspx?ss=JS&DL=FINDASH"
      },
      "syst": {
        "direct": "https://syst-business2.danskebank.com/pub/logon/logon.aspx?ss=JS&DL=FINDASH",
        "popup": "https://syst-www.danskebank.com/en-uk/Pages/default.aspx?secsystem=JB&DL=FINDASH"
      },
      "prod": {
        "direct": "https://business2.danskebank.com/pub/logon/logon.aspx?ss=JS&DL=FINDASH",
        "popup": "https://www.danskebank.com/en-uk/Pages/default.aspx?secsystem=JB&DL=FINDASH"
      }
    }
  },
  {
    "name": "NemID JavaScript (Danish)",
    "country": "DK",
    "solution": "NEM",
    "site": "EBN",
    "url": {
      "test": {
        "direct": "http://test-netbank2.danskebank.dk/pub/logon/logon.aspx?ss=JI"
      },
      "syst": {
        "direct": "https://syst-netbank2.danskebank.dk/pub/logon/logon.aspx?ss=JI",
        "popup": "https://syst-www.danskebank.dk/da-dk/Privat/Pages/Privat.aspx?secsystem=JI"
      },
      "prod": {
        "direct": "https://netbank2.danskebank.dk/pub/logon/logon.aspx?ss=JI",
        "popup": "https://www.danskebank.dk/da-dk/Privat/Pages/Privat.aspx?secsystem=JI"
      }
    }
  },
  {
    "name": "NemID JavaScript (English)",
    "country": "DK",
    "solution": "NEM",
    "site": "EBN",
    "url": {
      "test": {
        "direct": "http://test-ebanking2.danskebank.dk/pub/logon/logon.aspx?ss=JI"
      },
      "syst": {
        "direct": "https://syst-ebanking2.danskebank.dk/pub/logon/logon.aspx?ss=JI",
        "popup": "https://syst-www.danskebank.dk/en-dk/Pages/default.aspx?secsystem=J2"
      },
      "prod": {
        "direct": "http://ebanking2.danskebank.dk/pub/logon/logon.aspx?ss=JI",
        "popup": "https://www.danskebank.dk/en-dk/Personal/Pages/personal.aspx?secsystem=J2"
      }
    }
  },
  {
    "name": "Danica Netpension EN JavaScript",
    "country": "DK",
    "solution": "NEM",
    "site": "DAN",
    "url": {
      "test": {
        "direct": "http://test-online2.danicapension.dk/pub/logon/logon.aspx?ss=JO&secsystem=JO&gsSprog=EN"
      },
      "syst": {
        "direct": "https://syst-online2.danicapension.dk/pub/logon/logon.aspx?ss=JO&secsystem=JO&gsSprog=EN",
        "popup": "https://syst-www.danicapension.dk/da-dk/Pages/default.aspx?secsystem=JO&gsSprog=EN"
      },
      "prod": {
        "direct": "https://online2.danicapension.dk/pub/logon/logon.aspx?ss=JO&secsystem=JO&gsSprog=EN",
        "popup": "https://www.danicapension.dk/en-dk/pages/default.aspx?secsystem=JO&gsSprog=EN"
      }
    }
  },
  {
    "name": "Signing Portal DB",
    "country": "DK",
    "solution": "NEM",
    "site": "SIP",
    "url": {
      "test": {
        "direct": "http://test-digitalsignering.danskebank.dk/pub/logon/default.aspx?ss=JO&secsystem=JO&site=DBSP"
      },
      "syst": {
        "direct": "https://syst-digitalsignering.danskebank.dk/pub/logon/logon.aspx?ss=JO&secsystem=JO&site=DBSP",
        "popup": "https://syst-digitalsignering.danskebank.dk/pub/logon/default.aspx?ss=JO&secsystem=JO&site=DBSP"
      },
      "prod": {
        "direct": "https://digitalsignering.danskebank.dk/pub/logon/logon.aspx?ss=JO&secsystem=JO&site=DBSP",
        "popup": "https://digitalsignering.danskebank.dk/pub/logon/default.aspx?ss=JO&secsystem=JO&site=DBSP"
      }
    }
  },
  {
    "name": "Signing Portal DB - EN",
    "country": "DK",
    "solution": "NEM",
    "site": "SIP",
    "url": {
      "test": {
        "direct": "http://test-digitalsignering.danskebank.dk/pub/logon/logon.aspx?ss=JO&secsystem=JO&site=DBSP&gsSprog=EN",
        "popup": "http://test-digitalsignering.danskebank.dk/pub/logon/default.aspx?ss=JO&secsystem=JO&site=DBSP&gsSprog=EN"
      },
      "syst": {
        "direct": "https://syst-digitalsignering.danskebank.dk/pub/logon/logon.aspx?ss=JO&secsystem=JO&site=DBSP&gsSprog=EN",
        "popup": "https://syst-digitalsignering.danskebank.dk/pub/logon/default.aspx?ss=JO&secsystem=JO&site=DBSP&gsSprog=EN"
      },
      "prod": {
        "direct": "https://digitalsignering.danskebank.dk/pub/logon/logon.aspx?ss=JO&secsystem=JO&site=DBSP&gsSprog=EN",
        "popup": "https://digitalsignering.danskebank.dk/pub/logon/default.aspx?ss=JO&secsystem=JO&site=DBSP&gsSprog=EN"
      }
    }
  },
  {
    "name": "eBanking SE (BankID on File)",
    "country": "SE",
    "solution": "SID",
    "site": "EBN",
    "url": {
      "test": {
        "direct": "http://test-hembanken2.danskebank.se/pub/logon/logon.aspx?ss=SV&channel=C"
      },
      "syst": {
        "direct": "https://syst-hembanken2.danskebank.se/pub/logon/logon.aspx?ss=SV&channel=C",
        "popup": "https://syst-www.danskebank.se/sv-se/privat/Pages/Privat.aspx?secsystem=SC"
      },
      "prod": {
        "direct": "https://hembanken2.danskebank.se/pub/logon/logon.aspx?ss=SV&channel=C",
        "popup": "https://www.danskebank.se/sv-se/privat/Onlinetjanster/Support/Pages/Support.aspx?secsystem=SC"
      }
    }
  },
  {
    "name": "eBanking SE (BankID on Mobile)",
    "country": "SE",
    "solution": "SID",
    "site": "EBN",
    "url": {
      "test": {
        "direct": "http://test-hembanken2.danskebank.se/pub/logon/logon.aspx?ss=SV&channel=O"
      },
      "syst": {
        "direct": "https://syst-hembanken2.danskebank.se/pub/logon/logon.aspx?ss=SV&channel=O",
        "popup": "https://syst-www.danskebank.se/sv-se/privat/Pages/Privat.aspx?secsystem=SV"
      },
      "prod": {
        "direct": "https://hembanken2.danskebank.se/pub/logon/logon.aspx?ss=SV&channel=O",
        "popup": "https://www.danskebank.se/sv-se/privat/Onlinetjanster/Support/Pages/Support.aspx?secsystem=SV"
      }
    }
  },
  {
    "name": "Signing Portal SE (BankID on File)",
    "country": "SE",
    "solution": "SID",
    "site": "SIP",
    "url": {
      "test": {
        "direct": "http://test-digitalsignering.danskebank.se/pub/logon/default.aspx?ss=SV&channel=C&site=OESP"
      },
      "syst": {
        "direct": "https://syst-digitalsignering.danskebank.se/pub/logon/logon.aspx?ss=SV&channel=C&site=OESP",
        "popup": "https://syst-digitalsignering.danskebank.se/pub/logon/default.aspx?ss=SV&channel=C&site=OESP"
      },
      "prod": {
        "direct": "https://digitalsignering.danskebank.se/pub/logon/logon.aspx?ss=SV&channel=C&site=OESP",
        "popup": "https://digitalsignering.danskebank.se/pub/logon/default.aspx?ss=SV&channel=C&site=OESP"
      }
    }
  },
  {
    "name": "Signing Portal SE (BankID on Mobile)",
    "country": "SE",
    "solution": "SID",
    "site": "SIP",
    "url": {
      "test": {
        "direct": "http://test-digitalsignering.danskebank.se/pub/logon/logon.aspx?ss=SV&channel=O&site=OESP",
        "popup": "http://test-digitalsignering.danskebank.se/pub/logon/default.aspx?ss=SV&channel=O&site=OESP"
      },
      "syst": {
        "direct": "https://syst-digitalsignering.danskebank.se/pub/logon/logon.aspx?ss=SV&channel=O&site=OESP",
        "popup": "https://syst-digitalsignering.danskebank.se/pub/logon/default.aspx?ss=SV&channel=O&site=OESP"
      },
      "prod": {
        "direct": "https://digitalsignering.danskebank.se/pub/logon/logon.aspx?ss=SV&channel=O&site=OESP",
        "popup": "https://digitalsignering.danskebank.se/pub/logon/default.aspx?ss=SV&channel=O&site=OESP"
      }
    }
  },
  {
    "name": "Signing Portal SE - EN (BankID on File)",
    "country": "SE",
    "solution": "SID",
    "site": "SIP",
    "url": {
      "test": {
        "direct": "http://test-digitalsignering.danskebank.se/pub/logon/logon.aspx?ss=SV&channel=C&site=OESP&gsSprog=EN",
        "popup": "http://test-digitalsignering.danskebank.se/pub/logon/default.aspx?ss=SV&channel=C&site=OESP&gsSprog=EN"
      },
      "syst": {
        "direct": "https://syst-digitalsignering.danskebank.se/pub/logon/logon.aspx?ss=SV&channel=C&site=OESP&gsSprog=EN",
        "popup": "https://syst-digitalsignering.danskebank.se/pub/logon/default.aspx?ss=SV&channel=C&site=OESP&gsSprog=EN"
      },
      "prod": {
        "direct": "https://digitalsignering.danskebank.se/pub/logon/logon.aspx?ss=SV&channel=C&site=OESP&gsSprog=EN",
        "popup": "https://syst-digitalsignering.danskebank.se/pub/logon/logon.aspx?ss=SV&channel=C&site=OESP&gsSprog=EN"
      }
    }
  },
  {
    "name": "Signing Portal SE - EN (BankID on Mobile)",
    "country": "SE",
    "solution": "SID",
    "site": "SIP",
    "url": {
      "test": {
        "direct": "http://test-digitalsignering.danskebank.se/pub/logon/logon.aspx?ss=SV&channel=O&site=OESP&gsSprog=EN",
        "popup": "http://test-digitalsignering.danskebank.se/pub/logon/default.aspx?ss=SV&channel=O&site=OESP&gsSprog=EN"
      },
      "syst": {
        "direct": "https://syst-digitalsignering.danskebank.se/pub/logon/logon.aspx?ss=SV&channel=O&site=OESP&gsSprog=EN",
        "popup": "https://syst-digitalsignering.danskebank.se/pub/logon/default.aspx?ss=SV&channel=O&site=OESP&gsSprog=EN"
      },
      "prod": {
        "direct": "https://digitalsignering.danskebank.se/pub/logon/logon.aspx?ss=SV&channel=O&site=OESP&gsSprog=EN",
        "popup": "https://digitalsignering.danskebank.se/pub/logon/default.aspx?ss=SV&channel=O&site=OESP&gsSprog=EN"
      }
    }
  },
  {
    "name": "BankID NO JavaScript",
    "country": "NO",
    "solution": "NID",
    "site": "EBN",
    "url": {
      "test": {
        "direct": "https://test-nettbank2.danskebank.no/pub/logon/logon.aspx?ss=NS"
      },
      "syst": {
        "direct": "https://syst-nettbank2.danskebank.no/pub/logon/logon.aspx?ss=NS",
        "popup": "https://syst-www.danskebank.no/nb-no/Pages/default.aspx?secsystem=NS"
      },
      "prod": {
        "direct": "https://nettbank2.danskebank.no/pub/logon/logon.aspx?ss=NS",
        "popup": "https://www.danskebank.no/nb-no/Privat/Nettbank-og-Mobil/nettbank/support/Pages/support.aspx?secsystem=NS"
      }
    }
  },
  {
    "name": "Danica Netpensjon Javascript",
    "country": "NO",
    "solution": "NID",
    "site": "DAN",
    "url": {
      "test": {
        "direct": "https://test-privat2.danica.no/pub/logon/logon.aspx?ss=NS&site=FODP"
      },
      "syst": {
        "direct": "https://syst-privat2.danica.no/pub/logon/logon.aspx?ss=NS&site=FODP",
        "popup": "http://syst-www.danica.no/nb-no/Pages/default.aspx?secsystem=NS"
      },
      "prod": {
        "direct": "https://privat2.danica.no/pub/logon/logon.aspx?ss=NS&site=FODP",
        "popup": "http://www.danica.no/nb-no/Pages/default.aspx?secsystem=NS"
      }
    }
  },
  {
    "name": "Signing Portal NO",
    "country": "NO",
    "solution": "NID",
    "site": "SIP",
    "url": {
      "test": {
        "direct": "https://test-digitalsignering.danskebank.no/pub/logon/logon.aspx?ss=NS&site=FOSP",
        "popup": "https://test-digitalsignering.danskebank.no/pub/logon/default.aspx?ss=NS&site=FOSP"
      },
      "syst": {
        "direct": "https://syst-digitalsignering.danskebank.no/pub/logon/logon.aspx?ss=NS&site=FOSP",
        "popup": "https://syst-digitalsignering.danskebank.no/pub/logon/default.aspx?ss=NS&site=FOSP"
      },
      "prod": {
        "direct": "https://digitalsignering.danskebank.no/pub/logon/logon.aspx?ss=NS&site=FOSP",
        "popup": "https://digitalsignering.danskebank.no/pub/logon/default.aspx?ss=NS&site=FOSP"
      }
    }
  },
  {
    "name": "Signing Portal NO - EN",
    "country": "NO",
    "solution": "NID",
    "site": "SIP",
    "url": {
      "test": {
        "direct": "https://test-digitalsignering.danskebank.no/pub/logon/logon.aspx?ss=NS&site=FOSP",
        "popup": "https://test-digitalsignering.danskebank.no/pub/logon/logon.aspx?ss=NS&site=FOSP&gsSprog=EN"
      },
      "syst": {
        "direct": "https://syst-digitalsignering.danskebank.no/pub/logon/logon.aspx?ss=NS&site=FOSP",
        "popup": "https://syst-digitalsignering.danskebank.no/pub/logon/logon.aspx?ss=NS&site=FOSP&gsSprog=EN"
      },
      "prod": {
        "direct": "https://digitalsignering.danskebank.no/pub/logon/logon.aspx?ss=NS&site=FOSP",
        "popup": "https://digitalsignering.danskebank.no/pub/logon/default.aspx?ss=NS&site=FOSP&gsSprog=EN"
      }
    }
  },
  {
    "name": "NemID Backup solution DK",
    "country": "DK",
    "solution": "ESK",
    "site": "EBN",
    "url": {
      "test": {
        "direct": "http://test-netbank.danskebank.dk/test-html/index.html?site=DBNB&secsystem=E3&forcer"
      },
      "syst": {
        "direct": "https://syst-netbank.danskebank.dk/syst-html/index.html?site=DBNB&secsystem=E3&forcer"
      },
      "prod": {
        "direct": "https://netbank.danskebank.dk/html/index.html?site=DBNB&secsystem=E3&forcer"
      }
    }
  },
  {
    "name": "Danica Corporate (NO)",
    "country": "NO",
    "solution": "ESK",
    "site": "DAN",
    "url": {
      "test": {
        "direct": "http://test-portal.danica.no/test-html/index.html?site=DNNF&secsystem=E1&systemtype=TreS"
      },
      "syst": {
        "direct": "https://syst-portal.danica.no/syst-html/index.html?site=DNNF&secsystem=E1&systemtype=TreS"
      },
      "prod": {
        "direct": "https://portal.danica.no/html/index.html?site=DNNF&secsystem=E1&systemtype=TreS"
      }
    }
  },
  {
    "name": "Danske Netpost",
    "country": "DK",
    "solution": "OTH",
    "site": "OTH",
    "url": {
      "test": {
        "direct": "http://test-online.danskebank.dk/netbank/netpost.html"
      },
      "syst": {
        "direct": "https://syst-online.danskebank.dk/netbank/netpost.html"
      },
      "prod": {
        "direct": "https://online.danskebank.dk/netbank/netpost.html"
      }
    }
  },
  {
    "name": "eSecure NO",
    "country": "NO",
    "solution": "OTH",
    "site": "OTH",
    "url": {
      "test": {
        "direct": "http://test-online.danskebank.dk/netbank/netpost.html"
      },
      "syst": {
        "direct": "https://syst-online.danskebank.dk/netbank/netpost.html"
      },
      "prod": {
        "direct": "https://online.danskebank.dk/netbank/netpost.html"
      }
    }
  },
  {
    "name": "Payment Info",
    "country": "NO",
    "solution": "OTH",
    "site": "OTH",
    "url": {
      "test": {
        "direct": "http://test-business2.danskebank.com/pub/logon/logon.aspx?ss=PY"
      },
      "syst": {
        "direct": "https://syst-business2.danskebank.com/pub/logon/logon.aspx?ss=PY",
        "popup": "https://syst-www.danskebank.com/da-dk/ir/Pages/investor-relations.aspx?secsystem=PY"
      },
      "prod": {
        "direct": "https://business2.danskebank.com/pub/logon/logon.aspx?ss=PY",
        "popup": "https://www.danskebank.com/en-uk/ci/Pages/ci.aspx?secsystem=PY"
      }
    }
  },
  {
    "name": "Dynamic Pay",
    "country": "ALL",
    "solution": "OTH",
    "site": "OTH",
    "url": {
      "test": {
        "direct": "http://test-private.dynamicpay.com/pub/logon/logon.aspx?secsystem=UP&ss=UP"
      },
      "syst": {
        "direct": "https://syst-private.dynamicpay.com/pub/logon/logon.aspx?secsystem=UP&ss=UP",
        "popup": "http://syst.dynamicpay.com"
      },
      "prod": {
        "direct": "https://private.dynamicpay.com/pub/logon/logon.aspx?secsystem=UP&ss=UP",
        "popup": "http://dynamicpay.com"
      }
    }
  },
  {
    "name": "Danske Markets Research",
    "country": "DK",
    "solution": "OTH",
    "site": "OTH",
    "url": {
      "test": {
        "direct": "http://test-equities.danskemarkets.com/pub/logon/logon.aspx?ss=EP"
      },
      "syst": {
        "direct": "https://syst-equities.danskemarkets.com/pub/logon/logon.aspx?ss=EP"
      },
      "prod": {
        "direct": "https://equities.danskemarkets.com/pub/logon/logon.aspx?ss=EP"
      }
    }
  },
  {
    "name": "Dealer Finance (SPEED)",
    "country": "SE",
    "solution": "OTH",
    "site": "OTH",
    "url": {
      "test": {
        "direct": "http://test-dealerfinance.danskebank.se/pub/logon/logon.aspx?ss=EP"
      },
      "syst": {
        "direct": "http://syst-dealerfinance.danskebank.se/pub/logon/logon.aspx?ss=EP"
      },
      "prod": {
        "direct": "http://dealerfinance.danskebank.se/pub/logon/logon.aspx?ss=EP"
      }
    }
  },
  {
    "name": "MobileBank",
    "country": "NO",
    "solution": "NAP",
    "site": "OTH",
    "url": {
      "test": {
        "direct": "https://test-nettbank.danskebank.no/XI?WP=XAI&WO=Logon&WA=MBNOLogon&gsSprog=NO&gsBrand=FOK"
      },
      "syst": {
        "direct": "https://syst-nettbank.danskebank.no/XI?WP=XAI&WO=Logon&WA=MBNOLogon&gsSprog=NO&gsBrand=FOK"
      }
    }
  },
  {
    "name": "BankId NO Backup",
    "country": "NO",
    "solution": "NID",
    "site": "EBN",
    "url": {
      "test": {
        "direct": "http://test-nettbank.danskebank.no/test-html/index.html?site=FONB&secsystem=AC&bankidNO"
      },
      "syst": {
        "direct": "https://syst-nettbank.danskebank.no/syst-html/index.html?site=FONB&secsystem=AC&bankidNO"
      },
      "prod": {
        "direct": "https://nettbank.danskebank.no/html/index.html?site=FONB&secsystem=AC&bankidNO",
        "hidden": "https://hembanken.danskebank.se/html_frys/index.html?site=OENB&secsystem=KO"
      }
    }
  },
  {
    "name": "Mobile Life NemID OCES",
    "country": "DK",
    "solution": "OTH",
    "site": "OTH",
    "url": {
      "test": {
        "direct": "http://test-private.sunday.dk/pub/logon/logon.aspx?ss=JO&secSystem=JO&channel=H"
      },
      "syst": {
        "direct": "https://syst-private.sunday.dk/pub/logon/logon.aspx?ss=JO&secSystem=JO&channel=H"
      },
      "prod": {
        "direct": "https://private.sunday.dk/pub/logon/logon.aspx?ss=JO&secSystem=JO&channel=H"
      }
    }
  },
  {
    "name": "Mobilt Dankort",
    "country": "DK",
    "solution": "OTH",
    "site": "OTH",
    "url": {
      "test": {
        "direct": "http://test-mobiltdankort.danskebank.dk/pub/logon/logon.aspx?ss=JI&channel=H&DL=MDSGN"
      },
      "syst": {
        "direct": "https://syst-mobiltdankort.danskebank.dk/pub/logon/logon.aspx?ss=JI&channel=H&DL=MDSGN"
      },
      "prod": {
        "direct": "https://mobiltdankort.danskebank.dk/pub/logon/logon.aspx?ss=JI&channel=H&DL=MDSGN"
      }
    }
  },
  {
    "name": "Letbank (Danish)",
    "country": "DK",
    "solution": "NEM",
    "site": "EBN",
    "url": {
      "test": {
        "direct": "http://test-netbank2.danskebank.dk/pub/logon/logon.aspx?ss=JI&channel=S"
      },
      "syst": {
        "direct": "https://syst-netbank2.danskebank.dk/pub/logon/logon.aspx?ss=JI&channel=S",
        "popup": "https://syst-www.danskebank.dk/da-dk/Privat/Selvbetjening/Produkter/Letbank/Pages/Log-ind-ji.aspx"
      },
      "prod": {
        "direct": "https://netbank2.danskebank.dk/pub/logon/logon.aspx?ss=JI&channel=S",
        "popup": "https://www.danskebank.dk/da-dk/Privat/Selvbetjening/Produkter/Letbank/Pages/Log-ind-ji.aspx"
      }
    }
  },
  {
    "name": "Letbank (English)",
    "country": "DK",
    "solution": "NEM",
    "site": "EBN",
    "url": {
      "test": {
        "direct": "http://test-ebanking2.danskebank.dk/pub/logon/logon.aspx?ss=JI&channel=S"
      },
      "syst": {
        "direct": "https://syst-ebanking2.danskebank.dk/pub/logon/logon.aspx?ss=JI&channel=S"
      },
      "prod": {
        "direct": "https://ebanking2.danskebank.dk/pub/logon/logon.aspx?ss=JI&channel=S"
      }
    }
  },
  {
    "name": "Query Analyzer",
    "country": "ALL",
    "solution": "NAP",
    "site": "TOL",
    "url": {
      "test": {
        "direct": "http://queryanalyzer.danskenet.net/"
      }
    }
  },
  {
    "name": "DB2 Mini Tools",
    "country": "ALL",
    "solution": "NAP",
    "site": "TOL",
    "url": {
      "test": {
        "direct": "http://queryanalyzer.danskenet.net/Tools/"
      }
    }
  },
  {
    "name": "Net Bank Automated Test",
    "country": "ALL",
    "solution": "NAP",
    "site": "TOL",
    "url": {
      "test": {
        "direct": "http://w93952/SelectView.asp"
      }
    }
  },
  {
    "name": "Quality Center",
    "country": "ALL",
    "solution": "NAP",
    "site": "TOL",
    "url": {
      "test": {
        "direct": "http://qualitycenter/qcbin/start_a.htm"
      }
    }
  },
  {
    "name": "Solr Search",
    "country": "ALL",
    "solution": "NAP",
    "site": "TOL",
    "url": {
      "test": {
        "direct": "http://test-online.danskebank.dk/apls/solrsearch.html"
      }
    }
  },
  {
    "name": "eBanking FI - EN (TUPAS)",
    "country": "FI",
    "solution": "TUP",
    "site": "EBN",
    "url": {
      "test": {
        "direct": "http://test-ebanking2.danskebank.fi/pub/logon/logon.aspx?ss=TU"
      },
      "syst": {
        "direct": "https://syst-ebanking2.danskebank.fi/pub/logon/logon.aspx?ss=TU",
        "popup": "https://syst-www.danskebank.fi/en-fi/Pages/default.aspx?secsystem=TU"
      },
      "prod": {
        "direct": "https://ebanking2.danskebank.fi/pub/logon/logon.aspx?ss=TU",
        "popup": "https://www.danskebank.fi/en-fi/Personal/Pages/Personal.aspx?secsystem=TU"
      }
    }
  },
  {
    "name": "eBanking FI - SV (TUPAS)",
    "country": "FI",
    "solution": "TUP",
    "site": "EBN",
    "url": {
      "test": {
        "direct": "http://test-webbank2.danskebank.fi/pub/logon/logon.aspx?ss=TU"
      },
      "syst": {
        "direct": "https://syst-webbank2.danskebank.fi/pub/logon/logon.aspx?ss=TU",
        "popup": "https://syst-www.danskebank.fi/sv-fi/Pages/default.aspx?secsystem=T2"
      },
      "prod": {
        "direct": "https://webbank2.danskebank.fi/pub/logon/logon.aspx?ss=TU",
        "popup": "https://www.danskebank.fi/sv-fi/Privat/Pages/Privat.aspx?secsystem=T2"
      }
    }
  },
  {
    "name": "eBanking FI - FI (TUPAS)",
    "country": "FI",
    "solution": "TUP",
    "site": "EBN",
    "url": {
      "test": {
        "direct": "http://test-verkkopankki2.danskebank.fi/pub/logon/logon.aspx?ss=TU"
      },
      "syst": {
        "direct": "https://syst-verkkopankki2.danskebank.fi/pub/logon/logon.aspx?ss=TU",
        "popup": "https://syst-www.danskebank.fi/fi-fi/Henkiloasiakkaat/Pages/henkiloasiakkaat.aspx?secsystem=T3"
      },
      "prod": {
        "direct": "https://verkkopankki2.danskebank.fi/pub/logon/logon.aspx?ss=TU",
        "popup": "https://www.danskebank.fi/fi-fi/Henkiloasiakkaat/Pages/henkiloasiakkaat.aspx?secsystem=T3"
      }
    }
  },
  {
    "name": "Signing portal FI - EN",
    "country": "FI",
    "solution": "TUP",
    "site": "SIP",
    "url": {
      "test": {
        "direct": "http://test-allekirjoitus.danskebank.fi/pub/logon/logon.aspx?ss=TU&site=SBSP&gsSprog=EN",
        "popup": "http://test-allekirjoitus.danskebank.fi/pub/logon/default.aspx?ss=TU&site=SBSP&gsSprog=EN"
      },
      "syst": {
        "direct": "https://syst-allekirjoitus.danskebank.fi/pub/logon/logon.aspx?ss=TU&site=SBSP&gsSprog=EN",
        "popup": "https://syst-allekirjoitus.danskebank.fi/pub/logon/default.aspx?ss=TU&site=SBSP&gsSprog=EN"
      },
      "prod": {
        "direct": "https://allekirjoitus.danskebank.fi/pub/logon/logon.aspx?ss=TU&site=SBSP&gsSprog=EN",
        "popup": "https://allekirjoitus.danskebank.fi/pub/logon/default.aspx?ss=TU&site=SBSP&gsSprog=EN"
      }
    }
  },
  {
    "name": "Signing portal FI - SV",
    "country": "FI",
    "solution": "TUP",
    "site": "SIP",
    "url": {
      "test": {
        "direct": "http://test-allekirjoitus.danskebank.fi/pub/logon/logon.aspx?ss=TU&site=SBSP&gsSprog=SV",
        "popup": "http://test-allekirjoitus.danskebank.fi/pub/logon/default.aspx?ss=TU&site=SBSP&gsSprog=SV"
      },
      "syst": {
        "direct": "https://syst-allekirjoitus.danskebank.fi/pub/logon/logon.aspx?ss=TU&site=SBSP&gsSprog=SV",
        "popup": "https://syst-allekirjoitus.danskebank.fi/pub/logon/default.aspx?ss=TU&site=SBSP&gsSprog=SV"
      },
      "prod": {
        "direct": "https://allekirjoitus.danskebank.fi/pub/logon/logon.aspx?ss=TU&site=SBSP&gsSprog=SV",
        "popup": "https://allekirjoitus.danskebank.fi/pub/logon/default.aspx?ss=TU&site=SBSP&gsSprog=SV"
      }
    }
  },
  {
    "name": "Signing portal FI - FI",
    "country": "FI",
    "solution": "TUP",
    "site": "SIP",
    "url": {
      "test": {
        "direct": "http://test-allekirjoitus.danskebank.fi/pub/logon/logon.aspx?ss=TU&site=SBSP",
        "popup": "http://test-allekirjoitus.danskebank.fi/pub/logon/default.aspx?ss=TU&site=SBSP"
      },
      "syst": {
        "direct": "https://syst-allekirjoitus.danskebank.fi/pub/logon/logon.aspx?ss=TU&site=SBSP",
        "popup": "https://syst-allekirjoitus.danskebank.fi/pub/logon/default.aspx?ss=TU&site=SBSP"
      },
      "prod": {
        "direct": "https://allekirjoitus.danskebank.fi/pub/logon/logon.aspx?ss=TU&site=SBSP",
        "popup": "https://allekirjoitus.danskebank.fi/pub/logon/default.aspx?ss=TU&site=SBSP"
      }
    }
  },
  {
    "name": "Realkredit Danmark",
    "country": "DK",
    "solution": "NEM",
    "site": "OTH",
    "url": {
      "test": {
        "direct": "http://test-mit.rd.dk/pub/logon/logon.aspx?ss=JO"
      },
      "syst": {
        "direct": "https://syst-mit.rd.dk/pub/logon/logon.aspx?ss=JO&secsystem=JO",
        "popup": "https://syst-www.rd.dk/da-dk/privat/Pages/default.aspx?secsystem=JO"
      },
      "prod": {
        "direct": "https://mit.rd.dk/pub/logon/logon.aspx?ss=JO&secsystem=JO",
        "popup": "https://www.rd.dk/da-dk/privat/pages/privat.aspx?secsystem=JO"
      }
    }
  },
  {
    "name": "MobilePay Identification",
    "country": "DK",
    "solution": "NEM",
    "site": "OTH",
    "url": {
      "test": {
        "direct": "http://test-privatemobilepay.danskebank.com/pub/logon/logon.aspx?ss=JO&secsystem=JO&site=MPID"
      },
      "syst": {
        "direct": "https://syst-privatemobilepay.danskebank.com/pub/logon/logon.aspx?ss=JO&secsystem=JO&site=MPID",
        "popup": "https://syst-www.danskebank.com/da-dk/mobilepay/logon/logon.aspx"
      },
      "prod": {
        "direct": "https://privatemobilepay.danskebank.com/pub/logon/logon.aspx?ss=JO&secsystem=JO&site=MPID",
        "popup": "https://www.danskebank.com/da-dk/mobilepay/logon/logon.aspx"
      }
    }
  },
  {
    "name": "MobilePay Regain Access",
    "country": "DK",
    "solution": "NEM",
    "site": "OTH",
    "url": {
      "test": {
        "direct": "http://test-privatemobilepay.danskebank.com/pub/logon/logon.aspx?ss=JO&secsystem=JO&site=MPID&DL=regain"
      },
      "syst": {
        "direct": "https://syst-privatemobilepay.danskebank.com/pub/logon/logon.aspx?ss=JO&secsystem=JO&site=MPID&DL=regain",
        "popup": "https://syst-www.danskebank.com/da-dk/mobilepay/logon/logon.aspx?DL=regain"
      },
      "prod": {
        "direct": "https://privatemobilepay.danskebank.com/pub/logon/logon.aspx?ss=JO&secsystem=JO&site=MPID&DL=regain",
        "popup": "https://www.danskebank.com/da-dk/mobilepay/logon/logon.aspx?DL=regain"
      }
    }
  }
]`);
