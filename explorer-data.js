/* Source-linked snapshots. Values keep their original units and published precision. */
const DOSSIER_SOURCES = {
  "active": {
    "title": "Population active en 2025",
    "publisher": "Insee",
    "url": "https://www.insee.fr/fr/statistiques/8733063",
    "date": "2 juillet 2026"
  },
  "chomage": {
    "title": "L’essentiel sur le chômage",
    "publisher": "Insee",
    "url": "https://www.insee.fr/fr/statistiques/4805248",
    "date": "7 août 2026"
  },
  "secteurs": {
    "title": "Emploi salarié au deuxième trimestre 2026",
    "publisher": "Insee",
    "url": "https://www.insee.fr/fr/statistiques/2496914",
    "date": "28 août 2026"
  },
  "statuts": {
    "title": "Statuts d’emploi en 2025",
    "publisher": "Insee",
    "url": "https://www.insee.fr/fr/statistiques/8733045",
    "date": "2 juillet 2026"
  },
  "partiel": {
    "title": "Temps partiel en 2025",
    "publisher": "Insee",
    "url": "https://www.insee.fr/fr/statistiques/8733075",
    "date": "2 juillet 2026"
  },
  "salaires": {
    "title": "Les salaires dans le secteur privé en 2024",
    "publisher": "Insee",
    "url": "https://www.insee.fr/fr/statistiques/8657156",
    "date": "23 octobre 2025"
  },
  "alloc": {
    "title": "Le montant d’indemnisation chômage au quatrième trimestre 2025",
    "publisher": "Unédic",
    "url": "https://www.unedic.org/publications/le-montant-dindemnisation-chomage-au-4e-trimestre-2025",
    "date": "27 mai 2026"
  },
  "droits": {
    "title": "Les entrées à l’assurance chômage au premier trimestre 2026",
    "publisher": "Unédic",
    "url": "https://www.unedic.org/publications/les-entrees-a-lassurance-chomage-au-1er-trimestre-2026",
    "date": "24 septembre 2026"
  },
  "cotisations": {
    "title": "Masse salariale et recettes du régime général",
    "publisher": "Direction de la Sécurité sociale",
    "url": "https://evaluation.securite-sociale.fr/home/financement/1-4-2-evolution-de-la-masse-salariale-et-recettes-du-regime-general.html",
    "date": "Rapport 2026 · données 2025"
  },
  "ij": {
    "title": "Les indemnités journalières · fiche 25",
    "publisher": "DREES",
    "url": "https://www.drees.solidarites-sante.gouv.fr/sites/default/files/2025-12/CNS%20-%20Fiche%2025%20-%20Les%20indemnit%C3%A9s%20journali%C3%A8res.pdf",
    "date": "Décembre 2025"
  },
  "at": {
    "title": "L’Essentiel 2024 · santé et sécurité au travail",
    "publisher": "Assurance maladie",
    "url": "https://www.assurance-maladie.ameli.fr/sites/default/files/2026-01_lessentiel-2024-sante-securite-au-travail_assurance-maladie.pdf",
    "date": "Janvier 2026"
  },
  "crime": {
    "title": "Insécurité et délinquance en 2025 · bilan définitif",
    "publisher": "SSMSI",
    "url": "https://statistiques.interieur.gouv.fr/ssmsi/en/node/1488",
    "date": "9 juillet 2026"
  },
  "migrants": {
    "title": "Étrangers et immigrés en France en 2024",
    "publisher": "Insee",
    "url": "https://www.insee.fr/fr/statistiques/8651304",
    "date": "7 octobre 2025 · figure révisée le 4 juin 2026"
  },
  "pauvrete": {
    "title": "L’essentiel sur la pauvreté · données 2024",
    "publisher": "Insee",
    "url": "https://www.insee.fr/fr/statistiques/5759045",
    "date": "Édition 2026"
  },
  "titres": {
    "title": "Titres de séjour en 2025",
    "publisher": "DGEF · DSED",
    "url": "https://www.immigration.interieur.gouv.fr/documentation/etudes-et-statistiques/titres-de-sejour-en-2025-protections-subsidiaires-ont-plus-que-double.html",
    "date": "30 juin 2026"
  },
  "lpm": {
    "title": "Programmation militaire 2024–2030 · article 4",
    "publisher": "Légifrance",
    "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000047914986/",
    "date": "Loi du 1er août 2023"
  },
  "barkhane": {
    "title": "Opération Barkhane",
    "publisher": "Ministère des Armées",
    "url": "https://www.defense.gouv.fr/operations/bande-sahelo-saharienne/operation-barkhane",
    "date": "Repères historiques 2013–2022"
  },
  "chammal": {
    "title": "Opération Chammal",
    "publisher": "Ministère des Armées",
    "url": "https://www.defense.gouv.fr/operations/proche-moyen-orient/operations-militaires-au-proche-moyen-orient/operation-chammal",
    "date": "Présentation officielle consultée le 9 octobre 2026"
  },
  "operations": {
    "title": "Opérations achevées en Afrique",
    "publisher": "Ministère des Armées",
    "url": "https://www.defense.gouv.fr/operations/operations-achevees-afrique",
    "date": "Archives des opérations"
  },
  "calendrier": {
    "title": "Calendrier politique depuis 1958",
    "publisher": "Assemblée nationale",
    "url": "https://www.assemblee-nationale.fr/elections/dates.asp",
    "date": "Chronologie officielle"
  },
  "pm": {
    "title": "Anciens Premiers et Premières ministres",
    "publisher": "Gouvernement",
    "url": "https://www.info.gouv.fr/les-anciens-premiers-et-premieres-ministres-de-la-ve-republique",
    "date": "7 septembre 2026"
  },
  "ref": {
    "title": "Référendums sous la Ve République",
    "publisher": "Vie publique · DILA",
    "url": "https://www.vie-publique.fr/questions-reponses/290760-le-referendum-en-france-en-sept-questions",
    "date": "Historique 1961–2005",
    "related": {
      "title": "Les cohabitations · date du 27 avril 1969",
      "url": "https://www.vie-publique.fr/parole-dexpert/270319-les-cohabitations"
    }
  },
  "49": {
    "title": "Engagements de responsabilité · article 49 alinéa 3",
    "publisher": "Assemblée nationale",
    "url": "https://www.assemblee-nationale.fr/dyn/engagements_responsabilite-motions_censures/engagements-de-responsabilite-du-gouvernement-et-motions-de-censure-depuis-1958",
    "date": "Tableau historique · extraction limitée à 1959–2024"
  },
  "assemblee": {
    "title": "Statistiques de la XVIIe législature 2023–2024",
    "publisher": "Assemblée nationale",
    "url": "https://www2.assemblee-nationale.fr/static/17/statistiques/Ban_2023-2024_17e.pdf",
    "date": "Situation au 18 juillet 2024"
  },
  "legislatures": {
    "title": "Les législatures de la Ve République",
    "publisher": "Assemblée nationale",
    "url": "https://www.assemblee-nationale.fr/histoire/leg5repnew.asp",
    "date": "Archives historiques"
  },
  "dissolution": {
    "title": "Les cinq premières dissolutions",
    "publisher": "INA",
    "url": "https://www.ina.fr/ina-eclaire-actu/jacques-chirac-dissolution-assemblee-nationale-1997-vote-election-scrutin",
    "date": "9 juin 2024"
  },
  "diss2024": {
    "title": "Décret de dissolution du 9 juin 2024",
    "publisher": "Légifrance",
    "url": "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049689651",
    "date": "10 juin 2024"
  },
  "constitution": {
    "title": "Constitution de la Ve République",
    "publisher": "Élysée",
    "url": "https://www.elysee.fr/la-presidence/la-constitution-de-la-cinquieme-republique",
    "date": "Texte et présentation officiels"
  },
  "duree": {
    "title": "Chômage selon la durée, le sexe et l’âge",
    "publisher": "Insee",
    "url": "https://www.insee.fr/fr/statistiques/2417491",
    "date": "2026 · données 2025"
  },
  "financement": {
    "title": "Prévisions et comptes de l’assurance chômage",
    "publisher": "Unédic",
    "url": "https://www.unedic.org/actualites/synthese-du-conseil-dadministration-de-lunedic-du-30-juin-2026",
    "date": "10 juillet 2026 · prévisions de juin 2026"
  },
  "crimepdf": {
    "title": "Insécurité et délinquance 2025 · rapport complet",
    "publisher": "SSMSI",
    "url": "https://statistiques.interieur.gouv.fr/ssmsi/files/ssmsi/2026-07/Ins%C3%A9curit%C3%A9%20et%20d%C3%A9linquance%20en%202025%20-%20Bilan%20statistique%20-%20%C3%A9dition%202026%20-%20SSMSI.pdf",
    "date": "9 juillet 2026"
  },
  "guerres": {
    "title": "Ressources historiques · conflits contemporains",
    "publisher": "Ministère des Armées",
    "url": "https://www.defense.gouv.fr/chemins-memoire/histoire-memoires/ressources-historiques",
    "date": "Collection Chemins de la mémoire"
  },
  "indochine": {
    "title": "La fin de l’Indochine française",
    "publisher": "Ministère des Armées",
    "url": "https://www.defense.gouv.fr/sga/actualites/fin-lindochine-francaise-nouveau-numero-special-chemins-memoire",
    "date": "2024"
  },
  "algerie": {
    "title": "La guerre d’Algérie",
    "publisher": "Ministère des Armées",
    "url": "https://www.defense.gouv.fr/chemins-memoire/histoire-memoires/ressources-historiques/guerre-dalgerie",
    "date": "Collection Chemins de la mémoire"
  },
  "sentinelle": {
    "title": "Sentinelle · dix ans au service des Français",
    "publisher": "Ministère des Armées",
    "url": "https://www.defense.gouv.fr/actualites/operation-sentinelle-10-ans-au-service-francais",
    "date": "10 janvier 2025"
  },
  "daman": {
    "title": "Opération Daman",
    "publisher": "Ministère des Armées",
    "url": "https://www.defense.gouv.fr/en/node/147",
    "date": "Présentation consultée le 9 octobre 2026"
  },
  "cohabitations": {
    "title": "Les cohabitations",
    "publisher": "Vie publique · DILA",
    "url": "https://www.vie-publique.fr/parole-dexpert/270319-les-cohabitations",
    "date": "Repères historiques"
  }
};
const DOSSIERS = {
  "emploi": {
    "title": "Emploi & travail",
    "subtitle": "Des actifs aux salaires, du chômage à la santé au travail : comprendre les trajectoires et les conditions de travail.",
    "icon": "▥",
    "tabs": [
      {
        "id": "panorama",
        "title": "Vue d’ensemble",
        "cards": [
          {
            "title": "La population active en 2025",
            "kind": "donut",
            "rows": [
              {
                "name": "En emploi",
                "value": 29383,
                "unit": "milliers de personnes",
                "source": "chomage",
                "period": "2025 · moyenne annuelle",
                "note": "Actifs de 15 ans ou plus, au sens du BIT, en logement ordinaire. Emploi calculé : 31 834 − 2 451 ; population active issue de la fiche Insee Population active. Aucun inactif dans ce périmètre.",
                "digits": 0
              },
              {
                "name": "Au chômage",
                "value": 2451,
                "unit": "milliers de personnes",
                "source": "chomage",
                "period": "2025 · moyenne annuelle",
                "note": "Actifs de 15 ans ou plus, au sens du BIT, en logement ordinaire. Emploi calculé : 31 834 − 2 451 ; population active issue de la fiche Insee Population active. Aucun inactif dans ce périmètre.",
                "digits": 0
              }
            ],
            "note": "Actifs de 15 ans ou plus, au sens du BIT, en logement ordinaire. Emploi calculé : 31 834 − 2 451 ; population active issue de la fiche Insee Population active. Aucun inactif dans ce périmètre.",
            "period": "2025 · moyenne annuelle"
          },
          {
            "title": "Où travaillent les salariés ?",
            "kind": "donut",
            "rows": [
              {
                "name": "Tertiaire marchand",
                "value": 13336.6,
                "unit": "milliers de salariés",
                "source": "secteurs",
                "period": "T2 2026",
                "note": "France hors Mayotte. Emplois salariés publics et privés. Non marchand ne signifie pas uniquement fonction publique.",
                "digits": 1
              },
              {
                "name": "Tertiaire non marchand",
                "value": 8609.2,
                "unit": "milliers de salariés",
                "source": "secteurs",
                "period": "T2 2026",
                "note": "France hors Mayotte. Emplois salariés publics et privés. Non marchand ne signifie pas uniquement fonction publique.",
                "digits": 1
              },
              {
                "name": "Industrie",
                "value": 3240.6,
                "unit": "milliers de salariés",
                "source": "secteurs",
                "period": "T2 2026",
                "note": "France hors Mayotte. Emplois salariés publics et privés. Non marchand ne signifie pas uniquement fonction publique.",
                "digits": 1
              },
              {
                "name": "Construction",
                "value": 1519.4,
                "unit": "milliers de salariés",
                "source": "secteurs",
                "period": "T2 2026",
                "note": "France hors Mayotte. Emplois salariés publics et privés. Non marchand ne signifie pas uniquement fonction publique.",
                "digits": 1
              },
              {
                "name": "Agriculture",
                "value": 315.3,
                "unit": "milliers de salariés",
                "source": "secteurs",
                "period": "T2 2026",
                "note": "France hors Mayotte. Emplois salariés publics et privés. Non marchand ne signifie pas uniquement fonction publique.",
                "digits": 1
              }
            ],
            "note": "France hors Mayotte. Emplois salariés publics et privés. Non marchand ne signifie pas uniquement fonction publique.",
            "period": "T2 2026"
          },
          {
            "title": "Taux d’activité par âge",
            "kind": "bars",
            "rows": [
              {
                "name": "15–24 ans",
                "value": 43,
                "unit": "%",
                "source": "active",
                "period": "2025",
                "note": "Part des personnes actives dans chaque tranche d’âge. Tranches partiellement imbriquées : ne pas additionner.",
                "digits": 1
              },
              {
                "name": "25–49 ans",
                "value": 89,
                "unit": "%",
                "source": "active",
                "period": "2025",
                "note": "Part des personnes actives dans chaque tranche d’âge. Tranches partiellement imbriquées : ne pas additionner.",
                "digits": 1
              },
              {
                "name": "50–64 ans",
                "value": 72.9,
                "unit": "%",
                "source": "active",
                "period": "2025",
                "note": "Part des personnes actives dans chaque tranche d’âge. Tranches partiellement imbriquées : ne pas additionner.",
                "digits": 1
              },
              {
                "name": "55–59 ans",
                "value": 83,
                "unit": "%",
                "source": "active",
                "period": "2025",
                "note": "Part des personnes actives dans chaque tranche d’âge. Tranches partiellement imbriquées : ne pas additionner.",
                "digits": 1
              },
              {
                "name": "60–64 ans",
                "value": 47,
                "unit": "%",
                "source": "active",
                "period": "2025",
                "note": "Part des personnes actives dans chaque tranche d’âge. Tranches partiellement imbriquées : ne pas additionner.",
                "digits": 1
              },
              {
                "name": "65–69 ans",
                "value": 11.4,
                "unit": "%",
                "source": "active",
                "period": "2025",
                "note": "Part des personnes actives dans chaque tranche d’âge. Tranches partiellement imbriquées : ne pas additionner.",
                "digits": 1
              }
            ],
            "note": "Part des personnes actives dans chaque tranche d’âge. Tranches partiellement imbriquées : ne pas additionner.",
            "period": "2025"
          },
          {
            "title": "La population active progresse",
            "kind": "line",
            "rows": [
              {
                "name": "2022",
                "value": 30861,
                "unit": "milliers de personnes",
                "source": "active",
                "period": "2022–2025",
                "note": "Moyennes annuelles, 15 ans ou plus.",
                "digits": 0
              },
              {
                "name": "2023",
                "value": 31168,
                "unit": "milliers de personnes",
                "source": "active",
                "period": "2022–2025",
                "note": "Moyennes annuelles, 15 ans ou plus.",
                "digits": 0
              },
              {
                "name": "2024",
                "value": 31529,
                "unit": "milliers de personnes",
                "source": "active",
                "period": "2022–2025",
                "note": "Moyennes annuelles, 15 ans ou plus.",
                "digits": 0
              },
              {
                "name": "2025",
                "value": 31834,
                "unit": "milliers de personnes",
                "source": "active",
                "period": "2022–2025",
                "note": "Moyennes annuelles, 15 ans ou plus.",
                "digits": 0
              }
            ],
            "note": "Moyennes annuelles, 15 ans ou plus.",
            "period": "2022–2025"
          }
        ],
        "intro": ""
      },
      {
        "id": "chomage",
        "title": "Chômage & indemnisation",
        "cards": [
          {
            "title": "Le chômage sur une décennie",
            "kind": "line",
            "rows": [
              {
                "name": "2015",
                "value": 10.4,
                "unit": "%",
                "source": "chomage",
                "period": "2015–2025",
                "note": "Moyennes annuelles du taux de chômage BIT. Part des chômeurs dans la population active, pas dans l’ensemble des habitants.",
                "digits": 1
              },
              {
                "name": "2016",
                "value": 10.1,
                "unit": "%",
                "source": "chomage",
                "period": "2015–2025",
                "note": "Moyennes annuelles du taux de chômage BIT. Part des chômeurs dans la population active, pas dans l’ensemble des habitants.",
                "digits": 1
              },
              {
                "name": "2017",
                "value": 9.4,
                "unit": "%",
                "source": "chomage",
                "period": "2015–2025",
                "note": "Moyennes annuelles du taux de chômage BIT. Part des chômeurs dans la population active, pas dans l’ensemble des habitants.",
                "digits": 1
              },
              {
                "name": "2018",
                "value": 9.1,
                "unit": "%",
                "source": "chomage",
                "period": "2015–2025",
                "note": "Moyennes annuelles du taux de chômage BIT. Part des chômeurs dans la population active, pas dans l’ensemble des habitants.",
                "digits": 1
              },
              {
                "name": "2019",
                "value": 8.5,
                "unit": "%",
                "source": "chomage",
                "period": "2015–2025",
                "note": "Moyennes annuelles du taux de chômage BIT. Part des chômeurs dans la population active, pas dans l’ensemble des habitants.",
                "digits": 1
              },
              {
                "name": "2020",
                "value": 8.1,
                "unit": "%",
                "source": "chomage",
                "period": "2015–2025",
                "note": "Moyennes annuelles du taux de chômage BIT. Part des chômeurs dans la population active, pas dans l’ensemble des habitants.",
                "digits": 1
              },
              {
                "name": "2021",
                "value": 7.9,
                "unit": "%",
                "source": "chomage",
                "period": "2015–2025",
                "note": "Moyennes annuelles du taux de chômage BIT. Part des chômeurs dans la population active, pas dans l’ensemble des habitants.",
                "digits": 1
              },
              {
                "name": "2022",
                "value": 7.3,
                "unit": "%",
                "source": "chomage",
                "period": "2015–2025",
                "note": "Moyennes annuelles du taux de chômage BIT. Part des chômeurs dans la population active, pas dans l’ensemble des habitants.",
                "digits": 1
              },
              {
                "name": "2023",
                "value": 7.4,
                "unit": "%",
                "source": "chomage",
                "period": "2015–2025",
                "note": "Moyennes annuelles du taux de chômage BIT. Part des chômeurs dans la population active, pas dans l’ensemble des habitants.",
                "digits": 1
              },
              {
                "name": "2024",
                "value": 7.4,
                "unit": "%",
                "source": "chomage",
                "period": "2015–2025",
                "note": "Moyennes annuelles du taux de chômage BIT. Part des chômeurs dans la population active, pas dans l’ensemble des habitants.",
                "digits": 1
              },
              {
                "name": "2025",
                "value": 7.7,
                "unit": "%",
                "source": "chomage",
                "period": "2015–2025",
                "note": "Moyennes annuelles du taux de chômage BIT. Part des chômeurs dans la population active, pas dans l’ensemble des habitants.",
                "digits": 1
              }
            ],
            "note": "Moyennes annuelles du taux de chômage BIT. Part des chômeurs dans la population active, pas dans l’ensemble des habitants.",
            "period": "2015–2025"
          },
          {
            "title": "Les derniers trimestres",
            "kind": "line",
            "rows": [
              {
                "name": "2025 T1",
                "value": 7.5,
                "unit": "%",
                "source": "chomage",
                "period": "T1 2025–T2 2026",
                "note": "Taux BIT trimestriels corrigés des variations saisonnières. Incertitude d’enquête autour du dernier taux : ±0,3 point.",
                "digits": 1
              },
              {
                "name": "2025 T2",
                "value": 7.6,
                "unit": "%",
                "source": "chomage",
                "period": "T1 2025–T2 2026",
                "note": "Taux BIT trimestriels corrigés des variations saisonnières. Incertitude d’enquête autour du dernier taux : ±0,3 point.",
                "digits": 1
              },
              {
                "name": "2025 T3",
                "value": 7.8,
                "unit": "%",
                "source": "chomage",
                "period": "T1 2025–T2 2026",
                "note": "Taux BIT trimestriels corrigés des variations saisonnières. Incertitude d’enquête autour du dernier taux : ±0,3 point.",
                "digits": 1
              },
              {
                "name": "2025 T4",
                "value": 8,
                "unit": "%",
                "source": "chomage",
                "period": "T1 2025–T2 2026",
                "note": "Taux BIT trimestriels corrigés des variations saisonnières. Incertitude d’enquête autour du dernier taux : ±0,3 point.",
                "digits": 1
              },
              {
                "name": "2026 T1",
                "value": 8.1,
                "unit": "%",
                "source": "chomage",
                "period": "T1 2025–T2 2026",
                "note": "Taux BIT trimestriels corrigés des variations saisonnières. Incertitude d’enquête autour du dernier taux : ±0,3 point.",
                "digits": 1
              },
              {
                "name": "2026 T2",
                "value": 8.3,
                "unit": "%",
                "source": "chomage",
                "period": "T1 2025–T2 2026",
                "note": "Taux BIT trimestriels corrigés des variations saisonnières. Incertitude d’enquête autour du dernier taux : ±0,3 point.",
                "digits": 1
              }
            ],
            "note": "Taux BIT trimestriels corrigés des variations saisonnières. Incertitude d’enquête autour du dernier taux : ±0,3 point.",
            "period": "T1 2025–T2 2026"
          },
          {
            "title": "Allocation nette effectivement versée",
            "kind": "bars",
            "rows": [
              {
                "name": "Ensemble",
                "value": 1040,
                "unit": "€/mois",
                "source": "alloc",
                "period": "T4 2025",
                "note": "Moyenne mensuelle nette effectivement versée. L’activité peut réduire le nombre de jours indemnisés. Ce n’est pas un montant garanti à chaque allocataire.",
                "digits": 0
              },
              {
                "name": "Sans activité",
                "value": 1128,
                "unit": "€/mois",
                "source": "alloc",
                "period": "T4 2025",
                "note": "Moyenne mensuelle nette effectivement versée. L’activité peut réduire le nombre de jours indemnisés. Ce n’est pas un montant garanti à chaque allocataire.",
                "digits": 0
              },
              {
                "name": "Avec activité",
                "value": 856,
                "unit": "€/mois",
                "source": "alloc",
                "period": "T4 2025",
                "note": "Moyenne mensuelle nette effectivement versée. L’activité peut réduire le nombre de jours indemnisés. Ce n’est pas un montant garanti à chaque allocataire.",
                "digits": 0
              }
            ],
            "note": "Moyenne mensuelle nette effectivement versée. L’activité peut réduire le nombre de jours indemnisés. Ce n’est pas un montant garanti à chaque allocataire.",
            "period": "T4 2025"
          },
          {
            "title": "Les ouvertures de droits : motif de fin de contrat",
            "kind": "donut",
            "rows": [
              {
                "name": "Fin de CDD",
                "value": 27,
                "unit": "%",
                "source": "droits",
                "period": "T1 2026",
                "note": "426 100 entrées à l’assurance chômage. Autres motifs = complément à 100 des parts arrondies publiées. Une entrée n’est pas un chômeur supplémentaire au sens du BIT.",
                "digits": 0
              },
              {
                "name": "Licenciement personnel",
                "value": 23,
                "unit": "%",
                "source": "droits",
                "period": "T1 2026",
                "note": "426 100 entrées à l’assurance chômage. Autres motifs = complément à 100 des parts arrondies publiées. Une entrée n’est pas un chômeur supplémentaire au sens du BIT.",
                "digits": 0
              },
              {
                "name": "Rupture conventionnelle",
                "value": 20,
                "unit": "%",
                "source": "droits",
                "period": "T1 2026",
                "note": "426 100 entrées à l’assurance chômage. Autres motifs = complément à 100 des parts arrondies publiées. Une entrée n’est pas un chômeur supplémentaire au sens du BIT.",
                "digits": 0
              },
              {
                "name": "Fin de mission d’intérim",
                "value": 11,
                "unit": "%",
                "source": "droits",
                "period": "T1 2026",
                "note": "426 100 entrées à l’assurance chômage. Autres motifs = complément à 100 des parts arrondies publiées. Une entrée n’est pas un chômeur supplémentaire au sens du BIT.",
                "digits": 0
              },
              {
                "name": "Licenciement économique",
                "value": 9,
                "unit": "%",
                "source": "droits",
                "period": "T1 2026",
                "note": "426 100 entrées à l’assurance chômage. Autres motifs = complément à 100 des parts arrondies publiées. Une entrée n’est pas un chômeur supplémentaire au sens du BIT.",
                "digits": 0
              },
              {
                "name": "Autres motifs",
                "value": 10,
                "unit": "%",
                "source": "droits",
                "period": "T1 2026",
                "note": "426 100 entrées à l’assurance chômage. Autres motifs = complément à 100 des parts arrondies publiées. Une entrée n’est pas un chômeur supplémentaire au sens du BIT.",
                "digits": 0
              }
            ],
            "note": "426 100 entrées à l’assurance chômage. Autres motifs = complément à 100 des parts arrondies publiées. Une entrée n’est pas un chômeur supplémentaire au sens du BIT.",
            "period": "T1 2026"
          },
          {
            "title": "Droits et indemnisation à l’entrée",
            "kind": "bars",
            "rows": [
              {
                "name": "Durée potentielle moyenne",
                "value": 493,
                "unit": "jours",
                "source": "droits",
                "period": "T1 2026",
                "note": "Durée de droits ouverte à l’entrée. Elle ne mesure ni le temps passé au chômage ni la durée réellement indemnisée.",
                "digits": 0
              }
            ],
            "note": "Durée de droits ouverte à l’entrée. Elle ne mesure ni le temps passé au chômage ni la durée réellement indemnisée.",
            "period": "T1 2026"
          },
          {
            "title": "Allocation journalière théorique à l’entrée",
            "kind": "bars",
            "rows": [
              {
                "name": "Ensemble",
                "value": 44,
                "unit": "€ bruts/jour",
                "source": "droits",
                "period": "T1 2026",
                "note": "Allocation théorique moyenne lors de l’ouverture des droits ; périmètre distinct des allocations nettes effectivement versées.",
                "digits": 0
              },
              {
                "name": "Hommes",
                "value": 46,
                "unit": "€ bruts/jour",
                "source": "droits",
                "period": "T1 2026",
                "note": "Allocation théorique moyenne lors de l’ouverture des droits ; périmètre distinct des allocations nettes effectivement versées.",
                "digits": 0
              },
              {
                "name": "Femmes",
                "value": 41,
                "unit": "€ bruts/jour",
                "source": "droits",
                "period": "T1 2026",
                "note": "Allocation théorique moyenne lors de l’ouverture des droits ; périmètre distinct des allocations nettes effectivement versées.",
                "digits": 0
              }
            ],
            "note": "Allocation théorique moyenne lors de l’ouverture des droits ; périmètre distinct des allocations nettes effectivement versées.",
            "period": "T1 2026"
          },
          {
            "title": "Chômage selon l’ancienneté de recherche",
            "kind": "donut",
            "rows": [
              {
                "name": "Moins d’un an",
                "value": 1885,
                "unit": "milliers de chômeurs",
                "source": "duree",
                "period": "2025",
                "note": "Chômeurs BIT déclarant chercher un emploi. Calculs : moins d’un an = 2 451 − 566 ; un à moins de deux ans = 566 − 232. Catégories exclusives, contrairement aux totaux de longue et très longue durée.",
                "digits": 0
              },
              {
                "name": "De un à moins de deux ans",
                "value": 334,
                "unit": "milliers de chômeurs",
                "source": "duree",
                "period": "2025",
                "note": "Chômeurs BIT déclarant chercher un emploi. Calculs : moins d’un an = 2 451 − 566 ; un à moins de deux ans = 566 − 232. Catégories exclusives, contrairement aux totaux de longue et très longue durée.",
                "digits": 0
              },
              {
                "name": "Deux ans ou plus",
                "value": 232,
                "unit": "milliers de chômeurs",
                "source": "duree",
                "period": "2025",
                "note": "Chômeurs BIT déclarant chercher un emploi. Calculs : moins d’un an = 2 451 − 566 ; un à moins de deux ans = 566 − 232. Catégories exclusives, contrairement aux totaux de longue et très longue durée.",
                "digits": 0
              }
            ],
            "note": "Chômeurs BIT déclarant chercher un emploi. Calculs : moins d’un an = 2 451 − 566 ; un à moins de deux ans = 566 − 232. Catégories exclusives, contrairement aux totaux de longue et très longue durée.",
            "period": "2025"
          },
          {
            "title": "Le chômage des jeunes et des autres âges",
            "kind": "bars",
            "rows": [
              {
                "name": "15–24 ans",
                "value": 19.8,
                "unit": "%",
                "source": "duree",
                "period": "2025",
                "note": "Taux parmi les actifs de chaque âge. Beaucoup de jeunes poursuivent leurs études et sont inactifs : 19,8 % ne signifie pas un jeune sur cinq dans l’ensemble de la population.",
                "digits": 1
              },
              {
                "name": "25–49 ans",
                "value": 6.9,
                "unit": "%",
                "source": "duree",
                "period": "2025",
                "note": "Taux parmi les actifs de chaque âge. Beaucoup de jeunes poursuivent leurs études et sont inactifs : 19,8 % ne signifie pas un jeune sur cinq dans l’ensemble de la population.",
                "digits": 1
              },
              {
                "name": "50 ans ou plus",
                "value": 5,
                "unit": "%",
                "source": "duree",
                "period": "2025",
                "note": "Taux parmi les actifs de chaque âge. Beaucoup de jeunes poursuivent leurs études et sont inactifs : 19,8 % ne signifie pas un jeune sur cinq dans l’ensemble de la population.",
                "digits": 1
              }
            ],
            "note": "Taux parmi les actifs de chaque âge. Beaucoup de jeunes poursuivent leurs études et sont inactifs : 19,8 % ne signifie pas un jeune sur cinq dans l’ensemble de la population.",
            "period": "2025"
          },
          {
            "title": "Assurance chômage : recettes prévues",
            "kind": "line",
            "rows": [
              {
                "name": "2026",
                "value": 44.3,
                "unit": "Md€",
                "source": "financement",
                "period": "Prévisions de juin 2026",
                "note": "Prévisions, pas comptes exécutés. 2027–2028 supposent l’absence de nouveau prélèvement de l’État.",
                "digits": 1
              },
              {
                "name": "2027",
                "value": 49.6,
                "unit": "Md€",
                "source": "financement",
                "period": "Prévisions de juin 2026",
                "note": "Prévisions, pas comptes exécutés. 2027–2028 supposent l’absence de nouveau prélèvement de l’État.",
                "digits": 1
              },
              {
                "name": "2028",
                "value": 51.2,
                "unit": "Md€",
                "source": "financement",
                "period": "Prévisions de juin 2026",
                "note": "Prévisions, pas comptes exécutés. 2027–2028 supposent l’absence de nouveau prélèvement de l’État.",
                "digits": 1
              }
            ],
            "note": "Prévisions, pas comptes exécutés. 2027–2028 supposent l’absence de nouveau prélèvement de l’État.",
            "period": "Prévisions de juin 2026"
          },
          {
            "title": "Assurance chômage : dépenses prévues",
            "kind": "line",
            "rows": [
              {
                "name": "2026",
                "value": 46.6,
                "unit": "Md€",
                "source": "financement",
                "period": "Prévisions de juin 2026",
                "note": "Toutes dépenses du régime, pas seulement les allocations. Hypothèses susceptibles d’être révisées.",
                "digits": 1
              },
              {
                "name": "2027",
                "value": 47.5,
                "unit": "Md€",
                "source": "financement",
                "period": "Prévisions de juin 2026",
                "note": "Toutes dépenses du régime, pas seulement les allocations. Hypothèses susceptibles d’être révisées.",
                "digits": 1
              },
              {
                "name": "2028",
                "value": 47.2,
                "unit": "Md€",
                "source": "financement",
                "period": "Prévisions de juin 2026",
                "note": "Toutes dépenses du régime, pas seulement les allocations. Hypothèses susceptibles d’être révisées.",
                "digits": 1
              }
            ],
            "note": "Toutes dépenses du régime, pas seulement les allocations. Hypothèses susceptibles d’être révisées.",
            "period": "Prévisions de juin 2026"
          }
        ],
        "intro": ""
      },
      {
        "id": "conditions",
        "title": "Statuts & temps de travail",
        "cards": [
          {
            "title": "Les formes d’emploi",
            "kind": "donut",
            "rows": [
              {
                "name": "CDI ou fonctionnaire",
                "value": 72.8,
                "unit": "%",
                "source": "statuts",
                "period": "2025",
                "note": "Ensemble des personnes en emploi. Parts publiées arrondies : somme 100,1 %. Le cercle est normalisé sur cette somme ; les valeurs affichées restent celles de l’Insee.",
                "digits": 1
              },
              {
                "name": "CDD",
                "value": 7.6,
                "unit": "%",
                "source": "statuts",
                "period": "2025",
                "note": "Ensemble des personnes en emploi. Parts publiées arrondies : somme 100,1 %. Le cercle est normalisé sur cette somme ; les valeurs affichées restent celles de l’Insee.",
                "digits": 1
              },
              {
                "name": "Intérim",
                "value": 1.8,
                "unit": "%",
                "source": "statuts",
                "period": "2025",
                "note": "Ensemble des personnes en emploi. Parts publiées arrondies : somme 100,1 %. Le cercle est normalisé sur cette somme ; les valeurs affichées restent celles de l’Insee.",
                "digits": 1
              },
              {
                "name": "Alternance ou stage",
                "value": 3.5,
                "unit": "%",
                "source": "statuts",
                "period": "2025",
                "note": "Ensemble des personnes en emploi. Parts publiées arrondies : somme 100,1 %. Le cercle est normalisé sur cette somme ; les valeurs affichées restent celles de l’Insee.",
                "digits": 1
              },
              {
                "name": "Salariés sans contrat ou inconnu",
                "value": 0.9,
                "unit": "%",
                "source": "statuts",
                "period": "2025",
                "note": "Ensemble des personnes en emploi. Parts publiées arrondies : somme 100,1 %. Le cercle est normalisé sur cette somme ; les valeurs affichées restent celles de l’Insee.",
                "digits": 1
              },
              {
                "name": "Indépendants",
                "value": 13.5,
                "unit": "%",
                "source": "statuts",
                "period": "2025",
                "note": "Ensemble des personnes en emploi. Parts publiées arrondies : somme 100,1 %. Le cercle est normalisé sur cette somme ; les valeurs affichées restent celles de l’Insee.",
                "digits": 1
              }
            ],
            "note": "Ensemble des personnes en emploi. Parts publiées arrondies : somme 100,1 %. Le cercle est normalisé sur cette somme ; les valeurs affichées restent celles de l’Insee.",
            "period": "2025"
          },
          {
            "title": "Le temps partiel selon le sexe",
            "kind": "bars",
            "rows": [
              {
                "name": "Ensemble",
                "value": 17.6,
                "unit": "%",
                "source": "partiel",
                "period": "2025",
                "note": "Salariés hors apprentis, France hors Mayotte. Part du temps partiel dans chaque population, pas répartition des temps partiels.",
                "digits": 1
              },
              {
                "name": "Femmes",
                "value": 26.6,
                "unit": "%",
                "source": "partiel",
                "period": "2025",
                "note": "Salariés hors apprentis, France hors Mayotte. Part du temps partiel dans chaque population, pas répartition des temps partiels.",
                "digits": 1
              },
              {
                "name": "Hommes",
                "value": 8.4,
                "unit": "%",
                "source": "partiel",
                "period": "2025",
                "note": "Salariés hors apprentis, France hors Mayotte. Part du temps partiel dans chaque population, pas répartition des temps partiels.",
                "digits": 1
              }
            ],
            "note": "Salariés hors apprentis, France hors Mayotte. Part du temps partiel dans chaque population, pas répartition des temps partiels.",
            "period": "2025"
          },
          {
            "title": "Évolution du temps partiel",
            "kind": "line",
            "rows": [
              {
                "name": "2019",
                "value": 19.1,
                "unit": "%",
                "source": "partiel",
                "period": "2019–2025",
                "note": "Salariés hors apprentis.",
                "digits": 1
              },
              {
                "name": "2020",
                "value": 18.3,
                "unit": "%",
                "source": "partiel",
                "period": "2019–2025",
                "note": "Salariés hors apprentis.",
                "digits": 1
              },
              {
                "name": "2021",
                "value": 18.1,
                "unit": "%",
                "source": "partiel",
                "period": "2019–2025",
                "note": "Salariés hors apprentis.",
                "digits": 1
              },
              {
                "name": "2022",
                "value": 17.3,
                "unit": "%",
                "source": "partiel",
                "period": "2019–2025",
                "note": "Salariés hors apprentis.",
                "digits": 1
              },
              {
                "name": "2023",
                "value": 17.4,
                "unit": "%",
                "source": "partiel",
                "period": "2019–2025",
                "note": "Salariés hors apprentis.",
                "digits": 1
              },
              {
                "name": "2024",
                "value": 17.4,
                "unit": "%",
                "source": "partiel",
                "period": "2019–2025",
                "note": "Salariés hors apprentis.",
                "digits": 1
              },
              {
                "name": "2025",
                "value": 17.6,
                "unit": "%",
                "source": "partiel",
                "period": "2019–2025",
                "note": "Salariés hors apprentis.",
                "digits": 1
              }
            ],
            "note": "Salariés hors apprentis.",
            "period": "2019–2025"
          },
          {
            "title": "Évolution de l’emploi indépendant",
            "kind": "line",
            "rows": [
              {
                "name": "2019",
                "value": 12.2,
                "unit": "%",
                "source": "statuts",
                "period": "2019–2025",
                "note": "Part des indépendants dans l’emploi total.",
                "digits": 1
              },
              {
                "name": "2020",
                "value": 12.5,
                "unit": "%",
                "source": "statuts",
                "period": "2019–2025",
                "note": "Part des indépendants dans l’emploi total.",
                "digits": 1
              },
              {
                "name": "2021",
                "value": 12.6,
                "unit": "%",
                "source": "statuts",
                "period": "2019–2025",
                "note": "Part des indépendants dans l’emploi total.",
                "digits": 1
              },
              {
                "name": "2022",
                "value": 13.1,
                "unit": "%",
                "source": "statuts",
                "period": "2019–2025",
                "note": "Part des indépendants dans l’emploi total.",
                "digits": 1
              },
              {
                "name": "2023",
                "value": 12.9,
                "unit": "%",
                "source": "statuts",
                "period": "2019–2025",
                "note": "Part des indépendants dans l’emploi total.",
                "digits": 1
              },
              {
                "name": "2024",
                "value": 13.3,
                "unit": "%",
                "source": "statuts",
                "period": "2019–2025",
                "note": "Part des indépendants dans l’emploi total.",
                "digits": 1
              },
              {
                "name": "2025",
                "value": 13.5,
                "unit": "%",
                "source": "statuts",
                "period": "2019–2025",
                "note": "Part des indépendants dans l’emploi total.",
                "digits": 1
              }
            ],
            "note": "Part des indépendants dans l’emploi total.",
            "period": "2019–2025"
          }
        ],
        "intro": ""
      },
      {
        "id": "revenus",
        "title": "Salaires & cotisations",
        "cards": [
          {
            "title": "Repères de salaire mensuel privé",
            "kind": "bars",
            "rows": [
              {
                "name": "Moyenne brute",
                "value": 3602,
                "unit": "€/mois EQTP",
                "source": "salaires",
                "period": "2024",
                "note": "Équivalent temps plein. La médiane partage les salariés en deux moitiés ; les déciles délimitent les 10 % les moins et les mieux rémunérés. Nouveau champ incluant apprentis, stagiaires et Mayotte.",
                "digits": 0
              },
              {
                "name": "Moyenne nette",
                "value": 2733,
                "unit": "€/mois EQTP",
                "source": "salaires",
                "period": "2024",
                "note": "Équivalent temps plein. La médiane partage les salariés en deux moitiés ; les déciles délimitent les 10 % les moins et les mieux rémunérés. Nouveau champ incluant apprentis, stagiaires et Mayotte.",
                "digits": 0
              },
              {
                "name": "Médiane nette",
                "value": 2190,
                "unit": "€/mois EQTP",
                "source": "salaires",
                "period": "2024",
                "note": "Équivalent temps plein. La médiane partage les salariés en deux moitiés ; les déciles délimitent les 10 % les moins et les mieux rémunérés. Nouveau champ incluant apprentis, stagiaires et Mayotte.",
                "digits": 0
              },
              {
                "name": "Premier décile net",
                "value": 1492,
                "unit": "€/mois EQTP",
                "source": "salaires",
                "period": "2024",
                "note": "Équivalent temps plein. La médiane partage les salariés en deux moitiés ; les déciles délimitent les 10 % les moins et les mieux rémunérés. Nouveau champ incluant apprentis, stagiaires et Mayotte.",
                "digits": 0
              },
              {
                "name": "Neuvième décile net",
                "value": 4334,
                "unit": "€/mois EQTP",
                "source": "salaires",
                "period": "2024",
                "note": "Équivalent temps plein. La médiane partage les salariés en deux moitiés ; les déciles délimitent les 10 % les moins et les mieux rémunérés. Nouveau champ incluant apprentis, stagiaires et Mayotte.",
                "digits": 0
              }
            ],
            "note": "Équivalent temps plein. La médiane partage les salariés en deux moitiés ; les déciles délimitent les 10 % les moins et les mieux rémunérés. Nouveau champ incluant apprentis, stagiaires et Mayotte.",
            "period": "2024"
          },
          {
            "title": "Évolution du salaire net privé",
            "kind": "bars",
            "rows": [
              {
                "name": "Hausse nominale 2024",
                "value": 2.8,
                "unit": "%",
                "source": "salaires",
                "period": "2023–2024",
                "note": "Évolution du salaire moyen en EQTP. Le salaire réel tient compte de l’inflation. Les taux ne sont pas des niveaux de salaire.",
                "digits": 1
              },
              {
                "name": "Hausse réelle 2024",
                "value": 0.8,
                "unit": "%",
                "source": "salaires",
                "period": "2023–2024",
                "note": "Évolution du salaire moyen en EQTP. Le salaire réel tient compte de l’inflation. Les taux ne sont pas des niveaux de salaire.",
                "digits": 1
              },
              {
                "name": "Évolution réelle 2023",
                "value": -1,
                "unit": "%",
                "source": "salaires",
                "period": "2023–2024",
                "note": "Évolution du salaire moyen en EQTP. Le salaire réel tient compte de l’inflation. Les taux ne sont pas des niveaux de salaire.",
                "digits": 1
              }
            ],
            "note": "Évolution du salaire moyen en EQTP. Le salaire réel tient compte de l’inflation. Les taux ne sont pas des niveaux de salaire.",
            "period": "2023–2024"
          },
          {
            "title": "Croissance des encaissements Urssaf privés",
            "kind": "line",
            "rows": [
              {
                "name": "2023",
                "value": 5.6,
                "unit": "% par an",
                "source": "cotisations",
                "period": "2023–2025",
                "note": "Évolution des encaissements du secteur privé, assurance chômage comprise. Il s’agit de recettes collectées, pas des taux de cotisation d’une fiche de paie.",
                "digits": 1
              },
              {
                "name": "2024",
                "value": 4.8,
                "unit": "% par an",
                "source": "cotisations",
                "period": "2023–2025",
                "note": "Évolution des encaissements du secteur privé, assurance chômage comprise. Il s’agit de recettes collectées, pas des taux de cotisation d’une fiche de paie.",
                "digits": 1
              },
              {
                "name": "2025",
                "value": 2.9,
                "unit": "% par an",
                "source": "cotisations",
                "period": "2023–2025",
                "note": "Évolution des encaissements du secteur privé, assurance chômage comprise. Il s’agit de recettes collectées, pas des taux de cotisation d’une fiche de paie.",
                "digits": 1
              }
            ],
            "note": "Évolution des encaissements du secteur privé, assurance chômage comprise. Il s’agit de recettes collectées, pas des taux de cotisation d’une fiche de paie.",
            "period": "2023–2025"
          }
        ],
        "intro": ""
      },
      {
        "id": "sante",
        "title": "Santé au travail",
        "cards": [
          {
            "title": "Indemnités journalières : répartition",
            "kind": "donut",
            "rows": [
              {
                "name": "Maladie",
                "value": 12.1,
                "unit": "Md€",
                "source": "ij",
                "period": "2024",
                "note": "Tous régimes de base, hors fonction publique faute de données. Montants arrondis au dixième de milliard.",
                "digits": 1
              },
              {
                "name": "Accidents du travail et maladies professionnelles",
                "value": 5.3,
                "unit": "Md€",
                "source": "ij",
                "period": "2024",
                "note": "Tous régimes de base, hors fonction publique faute de données. Montants arrondis au dixième de milliard.",
                "digits": 1
              },
              {
                "name": "Maternité et paternité",
                "value": 3.9,
                "unit": "Md€",
                "source": "ij",
                "period": "2024",
                "note": "Tous régimes de base, hors fonction publique faute de données. Montants arrondis au dixième de milliard.",
                "digits": 1
              }
            ],
            "note": "Tous régimes de base, hors fonction publique faute de données. Montants arrondis au dixième de milliard.",
            "period": "2024"
          },
          {
            "title": "Évolution des indemnités journalières",
            "kind": "line",
            "rows": [
              {
                "name": "2020",
                "value": 19.1,
                "unit": "Md€",
                "source": "ij",
                "period": "2020–2024",
                "note": "Tous motifs, régimes de base hors fonction publique. Les années de pandémie comprennent des indemnités liées au Covid.",
                "digits": 1
              },
              {
                "name": "2021",
                "value": 18.7,
                "unit": "Md€",
                "source": "ij",
                "period": "2020–2024",
                "note": "Tous motifs, régimes de base hors fonction publique. Les années de pandémie comprennent des indemnités liées au Covid.",
                "digits": 1
              },
              {
                "name": "2022",
                "value": 20.9,
                "unit": "Md€",
                "source": "ij",
                "period": "2020–2024",
                "note": "Tous motifs, régimes de base hors fonction publique. Les années de pandémie comprennent des indemnités liées au Covid.",
                "digits": 1
              },
              {
                "name": "2023",
                "value": 20.1,
                "unit": "Md€",
                "source": "ij",
                "period": "2020–2024",
                "note": "Tous motifs, régimes de base hors fonction publique. Les années de pandémie comprennent des indemnités liées au Covid.",
                "digits": 1
              },
              {
                "name": "2024",
                "value": 21.3,
                "unit": "Md€",
                "source": "ij",
                "period": "2020–2024",
                "note": "Tous motifs, régimes de base hors fonction publique. Les années de pandémie comprennent des indemnités liées au Covid.",
                "digits": 1
              }
            ],
            "note": "Tous motifs, régimes de base hors fonction publique. Les années de pandémie comprennent des indemnités liées au Covid.",
            "period": "2020–2024"
          },
          {
            "title": "Sinistralité professionnelle",
            "kind": "bars",
            "rows": [
              {
                "name": "Accidents du travail",
                "value": 549614,
                "unit": "sinistres",
                "source": "at",
                "period": "2024",
                "note": "Régime général. Sinistres avec premier règlement ; ces deux catégories ne couvrent pas les maladies professionnelles.",
                "digits": 0
              },
              {
                "name": "Accidents de trajet",
                "value": 94654,
                "unit": "sinistres",
                "source": "at",
                "period": "2024",
                "note": "Régime général. Sinistres avec premier règlement ; ces deux catégories ne couvrent pas les maladies professionnelles.",
                "digits": 0
              }
            ],
            "note": "Régime général. Sinistres avec premier règlement ; ces deux catégories ne couvrent pas les maladies professionnelles.",
            "period": "2024"
          },
          {
            "title": "Évolution annuelle de la sinistralité",
            "kind": "bars",
            "rows": [
              {
                "name": "Accidents du travail",
                "value": -1.1,
                "unit": "%",
                "source": "at",
                "period": "2024 / 2023",
                "note": "Évolutions des sinistres pris en charge par le régime général. Le nombre dépend également de la reconnaissance et de la déclaration.",
                "digits": 1
              },
              {
                "name": "Accidents de trajet",
                "value": 0.7,
                "unit": "%",
                "source": "at",
                "period": "2024 / 2023",
                "note": "Évolutions des sinistres pris en charge par le régime général. Le nombre dépend également de la reconnaissance et de la déclaration.",
                "digits": 1
              },
              {
                "name": "Maladies professionnelles",
                "value": 6.7,
                "unit": "%",
                "source": "at",
                "period": "2024 / 2023",
                "note": "Évolutions des sinistres pris en charge par le régime général. Le nombre dépend également de la reconnaissance et de la déclaration.",
                "digits": 1
              }
            ],
            "note": "Évolutions des sinistres pris en charge par le régime général. Le nombre dépend également de la reconnaissance et de la déclaration.",
            "period": "2024 / 2023"
          }
        ],
        "intro": ""
      }
    ],
    "kpis": [
      {
        "name": "Actifs · moyenne annuelle 2025",
        "value": 31834,
        "unit": "milliers",
        "source": "active",
        "period": "2025",
        "note": "",
        "digits": 0
      },
      {
        "name": "Chômage · T2 2026",
        "value": 8.3,
        "unit": "%",
        "source": "chomage",
        "period": "T2 2026",
        "note": "",
        "digits": 1
      },
      {
        "name": "Salaire net médian privé",
        "value": 2190,
        "unit": "€/mois EQTP",
        "source": "salaires",
        "period": "2024",
        "note": "",
        "digits": 0
      },
      {
        "name": "IJ · tous motifs",
        "value": 21.3,
        "unit": "Md€",
        "source": "ij",
        "period": "2024",
        "note": "",
        "digits": 1
      }
    ],
    "note": "Les années et les champs diffèrent selon la disponibilité. Chômage BIT, inscription administrative et indemnisation sont trois mesures distinctes. Cliquez sur toute valeur pour retrouver sa définition et sa source."
  },
  "securite": {
    "title": "Sécurité & délinquance",
    "subtitle": "Lire les infractions enregistrées, leurs évolutions et le travail d’enquête, avec les définitions qui donnent du sens aux chiffres.",
    "icon": "◇",
    "tabs": [
      {
        "id": "panorama",
        "title": "Catégories",
        "cards": [
          {
            "title": "Panorama des catégories enregistrées",
            "kind": "table",
            "period": "2025",
            "note": "Unités distinctes. Pas de somme générale : catégories et personnes peuvent se recouper. Les mis en cause ne sont pas des condamnés.",
            "rows": [
              {
                "name": "Homicides",
                "value": 975,
                "unit": "victimes",
                "source": "crime",
                "period": "2025",
                "note": "France · police et gendarmerie. Valeur publiée à l’unité.",
                "digits": 0
              },
              {
                "name": "Tentatives d’homicide",
                "value": 4477,
                "unit": "victimes",
                "source": "crime",
                "period": "2025",
                "note": "France · police et gendarmerie. Valeur publiée à l’unité.",
                "digits": 0
              },
              {
                "name": "Violences physiques",
                "value": 472400,
                "unit": "victimes",
                "source": "crime",
                "period": "2025",
                "note": "France · police et gendarmerie. Valeur publiée arrondie à la centaine.",
                "digits": 0
              },
              {
                "name": "Violences sexuelles",
                "value": 132100,
                "unit": "victimes",
                "source": "crime",
                "period": "2025",
                "note": "France · police et gendarmerie. Valeur publiée arrondie à la centaine.",
                "digits": 0
              },
              {
                "name": "Vols avec armes",
                "value": 7900,
                "unit": "infractions",
                "source": "crime",
                "period": "2025",
                "note": "France · police et gendarmerie. Valeur publiée arrondie à la centaine.",
                "digits": 0
              },
              {
                "name": "Vols violents sans arme",
                "value": 49200,
                "unit": "infractions",
                "source": "crime",
                "period": "2025",
                "note": "France · police et gendarmerie. Valeur publiée arrondie à la centaine.",
                "digits": 0
              },
              {
                "name": "Vols sans violence contre des personnes",
                "value": 622100,
                "unit": "victimes entendues",
                "source": "crime",
                "period": "2025",
                "note": "France · police et gendarmerie. Valeur publiée arrondie à la centaine.",
                "digits": 0
              },
              {
                "name": "Cambriolages de logement",
                "value": 211600,
                "unit": "infractions",
                "source": "crime",
                "period": "2025",
                "note": "France · police et gendarmerie. Valeur publiée arrondie à la centaine.",
                "digits": 0
              },
              {
                "name": "Vols de véhicules",
                "value": 124800,
                "unit": "véhicules",
                "source": "crime",
                "period": "2025",
                "note": "France · police et gendarmerie. Valeur publiée arrondie à la centaine.",
                "digits": 0
              },
              {
                "name": "Vols dans les véhicules",
                "value": 233400,
                "unit": "véhicules",
                "source": "crime",
                "period": "2025",
                "note": "France · police et gendarmerie. Valeur publiée arrondie à la centaine.",
                "digits": 0
              },
              {
                "name": "Vols d’accessoires de véhicules",
                "value": 95300,
                "unit": "véhicules",
                "source": "crime",
                "period": "2025",
                "note": "France · police et gendarmerie. Valeur publiée arrondie à la centaine.",
                "digits": 0
              },
              {
                "name": "Destructions et dégradations",
                "value": 539100,
                "unit": "infractions",
                "source": "crime",
                "period": "2025",
                "note": "France · police et gendarmerie. Valeur publiée arrondie à la centaine.",
                "digits": 0
              },
              {
                "name": "Usage de stupéfiants",
                "value": 309800,
                "unit": "mis en cause",
                "source": "crime",
                "period": "2025",
                "note": "France · police et gendarmerie. Valeur publiée arrondie à la centaine.",
                "digits": 0
              },
              {
                "name": "Trafic de stupéfiants",
                "value": 57100,
                "unit": "mis en cause",
                "source": "crime",
                "period": "2025",
                "note": "France · police et gendarmerie. Valeur publiée arrondie à la centaine.",
                "digits": 0
              },
              {
                "name": "Escroqueries et fraudes",
                "value": 448300,
                "unit": "victimes",
                "source": "crime",
                "period": "2025",
                "note": "France · police et gendarmerie. Valeur publiée arrondie à la centaine.",
                "digits": 0
              },
              {
                "name": "Atteintes à l’environnement",
                "value": 44700,
                "unit": "infractions",
                "source": "crime",
                "period": "2025",
                "note": "France · police et gendarmerie. Valeur publiée arrondie à la centaine.",
                "digits": 0
              }
            ]
          },
          {
            "title": "Violences physiques : cadre des faits",
            "kind": "donut",
            "rows": [
              {
                "name": "Intrafamiliales",
                "value": 256700,
                "unit": "victimes",
                "source": "crime",
                "period": "2025",
                "note": "Ventilation des victimes de violences physiques enregistrées. Valeurs arrondies à la centaine.",
                "digits": 0
              },
              {
                "name": "Hors cadre familial",
                "value": 215700,
                "unit": "victimes",
                "source": "crime",
                "period": "2025",
                "note": "Ventilation des victimes de violences physiques enregistrées. Valeurs arrondies à la centaine.",
                "digits": 0
              }
            ],
            "note": "Ventilation des victimes de violences physiques enregistrées. Valeurs arrondies à la centaine.",
            "period": "2025"
          },
          {
            "title": "Dans les violences sexuelles",
            "kind": "donut",
            "rows": [
              {
                "name": "Viols et tentatives de viol",
                "value": 50100,
                "unit": "victimes",
                "source": "crime",
                "period": "2025",
                "note": "Autres = 132 100 − 50 100. Les victimes de plusieurs faits ne sont pas nécessairement des personnes uniques.",
                "digits": 0
              },
              {
                "name": "Autres violences sexuelles",
                "value": 82000,
                "unit": "victimes",
                "source": "crime",
                "period": "2025",
                "note": "Autres = 132 100 − 50 100. Les victimes de plusieurs faits ne sont pas nécessairement des personnes uniques.",
                "digits": 0
              }
            ],
            "note": "Autres = 132 100 − 50 100. Les victimes de plusieurs faits ne sont pas nécessairement des personnes uniques.",
            "period": "2025"
          }
        ],
        "intro": ""
      },
      {
        "id": "evolution",
        "title": "Évolutions",
        "cards": [
          {
            "title": "Homicides : dix années fiabilisées",
            "kind": "line",
            "rows": [
              {
                "name": "2016",
                "value": 911,
                "unit": "victimes",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 78. Y compris attentats et violences volontaires suivies de mort. Série annuelle fiabilisée ; les anciennes séries antérieures à 2016 ne sont pas directement comparables.",
                "digits": 0
              },
              {
                "name": "2017",
                "value": 826,
                "unit": "victimes",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 78. Y compris attentats et violences volontaires suivies de mort. Série annuelle fiabilisée ; les anciennes séries antérieures à 2016 ne sont pas directement comparables.",
                "digits": 0
              },
              {
                "name": "2018",
                "value": 831,
                "unit": "victimes",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 78. Y compris attentats et violences volontaires suivies de mort. Série annuelle fiabilisée ; les anciennes séries antérieures à 2016 ne sont pas directement comparables.",
                "digits": 0
              },
              {
                "name": "2019",
                "value": 857,
                "unit": "victimes",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 78. Y compris attentats et violences volontaires suivies de mort. Série annuelle fiabilisée ; les anciennes séries antérieures à 2016 ne sont pas directement comparables.",
                "digits": 0
              },
              {
                "name": "2020",
                "value": 823,
                "unit": "victimes",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 78. Y compris attentats et violences volontaires suivies de mort. Série annuelle fiabilisée ; les anciennes séries antérieures à 2016 ne sont pas directement comparables.",
                "digits": 0
              },
              {
                "name": "2021",
                "value": 882,
                "unit": "victimes",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 78. Y compris attentats et violences volontaires suivies de mort. Série annuelle fiabilisée ; les anciennes séries antérieures à 2016 ne sont pas directement comparables.",
                "digits": 0
              },
              {
                "name": "2022",
                "value": 959,
                "unit": "victimes",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 78. Y compris attentats et violences volontaires suivies de mort. Série annuelle fiabilisée ; les anciennes séries antérieures à 2016 ne sont pas directement comparables.",
                "digits": 0
              },
              {
                "name": "2023",
                "value": 996,
                "unit": "victimes",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 78. Y compris attentats et violences volontaires suivies de mort. Série annuelle fiabilisée ; les anciennes séries antérieures à 2016 ne sont pas directement comparables.",
                "digits": 0
              },
              {
                "name": "2024",
                "value": 976,
                "unit": "victimes",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 78. Y compris attentats et violences volontaires suivies de mort. Série annuelle fiabilisée ; les anciennes séries antérieures à 2016 ne sont pas directement comparables.",
                "digits": 0
              },
              {
                "name": "2025",
                "value": 975,
                "unit": "victimes",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 78. Y compris attentats et violences volontaires suivies de mort. Série annuelle fiabilisée ; les anciennes séries antérieures à 2016 ne sont pas directement comparables.",
                "digits": 0
              }
            ],
            "note": "Rapport, page 78. Y compris attentats et violences volontaires suivies de mort. Série annuelle fiabilisée ; les anciennes séries antérieures à 2016 ne sont pas directement comparables.",
            "period": "2016–2025"
          },
          {
            "title": "Violences sexuelles enregistrées",
            "kind": "line",
            "rows": [
              {
                "name": "2016",
                "value": 51900,
                "unit": "victimes",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 102. Effectifs arrondis. La hausse des enregistrements ne se confond pas avec celle des faits commis la même année : déclarations tardives et pratiques d’enregistrement interviennent.",
                "digits": 0
              },
              {
                "name": "2017",
                "value": 57000,
                "unit": "victimes",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 102. Effectifs arrondis. La hausse des enregistrements ne se confond pas avec celle des faits commis la même année : déclarations tardives et pratiques d’enregistrement interviennent.",
                "digits": 0
              },
              {
                "name": "2018",
                "value": 67500,
                "unit": "victimes",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 102. Effectifs arrondis. La hausse des enregistrements ne se confond pas avec celle des faits commis la même année : déclarations tardives et pratiques d’enregistrement interviennent.",
                "digits": 0
              },
              {
                "name": "2019",
                "value": 75300,
                "unit": "victimes",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 102. Effectifs arrondis. La hausse des enregistrements ne se confond pas avec celle des faits commis la même année : déclarations tardives et pratiques d’enregistrement interviennent.",
                "digits": 0
              },
              {
                "name": "2020",
                "value": 77100,
                "unit": "victimes",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 102. Effectifs arrondis. La hausse des enregistrements ne se confond pas avec celle des faits commis la même année : déclarations tardives et pratiques d’enregistrement interviennent.",
                "digits": 0
              },
              {
                "name": "2021",
                "value": 96400,
                "unit": "victimes",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 102. Effectifs arrondis. La hausse des enregistrements ne se confond pas avec celle des faits commis la même année : déclarations tardives et pratiques d’enregistrement interviennent.",
                "digits": 0
              },
              {
                "name": "2022",
                "value": 106100,
                "unit": "victimes",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 102. Effectifs arrondis. La hausse des enregistrements ne se confond pas avec celle des faits commis la même année : déclarations tardives et pratiques d’enregistrement interviennent.",
                "digits": 0
              },
              {
                "name": "2023",
                "value": 114100,
                "unit": "victimes",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 102. Effectifs arrondis. La hausse des enregistrements ne se confond pas avec celle des faits commis la même année : déclarations tardives et pratiques d’enregistrement interviennent.",
                "digits": 0
              },
              {
                "name": "2024",
                "value": 122400,
                "unit": "victimes",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 102. Effectifs arrondis. La hausse des enregistrements ne se confond pas avec celle des faits commis la même année : déclarations tardives et pratiques d’enregistrement interviennent.",
                "digits": 0
              },
              {
                "name": "2025",
                "value": 132100,
                "unit": "victimes",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 102. Effectifs arrondis. La hausse des enregistrements ne se confond pas avec celle des faits commis la même année : déclarations tardives et pratiques d’enregistrement interviennent.",
                "digits": 0
              }
            ],
            "note": "Rapport, page 102. Effectifs arrondis. La hausse des enregistrements ne se confond pas avec celle des faits commis la même année : déclarations tardives et pratiques d’enregistrement interviennent.",
            "period": "2016–2025"
          },
          {
            "title": "Vols dans les véhicules",
            "kind": "line",
            "rows": [
              {
                "name": "2016",
                "value": 273000,
                "unit": "véhicules",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 138. Nombre de véhicules, pas montant du préjudice. Le creux de 2020–2021 correspond à la période de crise sanitaire.",
                "digits": 0
              },
              {
                "name": "2017",
                "value": 271800,
                "unit": "véhicules",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 138. Nombre de véhicules, pas montant du préjudice. Le creux de 2020–2021 correspond à la période de crise sanitaire.",
                "digits": 0
              },
              {
                "name": "2018",
                "value": 269000,
                "unit": "véhicules",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 138. Nombre de véhicules, pas montant du préjudice. Le creux de 2020–2021 correspond à la période de crise sanitaire.",
                "digits": 0
              },
              {
                "name": "2019",
                "value": 269800,
                "unit": "véhicules",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 138. Nombre de véhicules, pas montant du préjudice. Le creux de 2020–2021 correspond à la période de crise sanitaire.",
                "digits": 0
              },
              {
                "name": "2020",
                "value": 223900,
                "unit": "véhicules",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 138. Nombre de véhicules, pas montant du préjudice. Le creux de 2020–2021 correspond à la période de crise sanitaire.",
                "digits": 0
              },
              {
                "name": "2021",
                "value": 225300,
                "unit": "véhicules",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 138. Nombre de véhicules, pas montant du préjudice. Le creux de 2020–2021 correspond à la période de crise sanitaire.",
                "digits": 0
              },
              {
                "name": "2022",
                "value": 245800,
                "unit": "véhicules",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 138. Nombre de véhicules, pas montant du préjudice. Le creux de 2020–2021 correspond à la période de crise sanitaire.",
                "digits": 0
              },
              {
                "name": "2023",
                "value": 254600,
                "unit": "véhicules",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 138. Nombre de véhicules, pas montant du préjudice. Le creux de 2020–2021 correspond à la période de crise sanitaire.",
                "digits": 0
              },
              {
                "name": "2024",
                "value": 256100,
                "unit": "véhicules",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 138. Nombre de véhicules, pas montant du préjudice. Le creux de 2020–2021 correspond à la période de crise sanitaire.",
                "digits": 0
              },
              {
                "name": "2025",
                "value": 233400,
                "unit": "véhicules",
                "source": "crimepdf",
                "period": "2016–2025",
                "note": "Rapport, page 138. Nombre de véhicules, pas montant du préjudice. Le creux de 2020–2021 correspond à la période de crise sanitaire.",
                "digits": 0
              }
            ],
            "note": "Rapport, page 138. Nombre de véhicules, pas montant du préjudice. Le creux de 2020–2021 correspond à la période de crise sanitaire.",
            "period": "2016–2025"
          },
          {
            "title": "Variation par catégorie",
            "kind": "bars",
            "rows": [
              {
                "name": "Homicides",
                "value": 0,
                "unit": "%",
                "source": "crime",
                "period": "2025 / 2024",
                "note": "Variations publiées arrondies. Enregistrements administratifs : les évolutions combinent les faits, les plaintes, les pratiques d’enregistrement et l’activité des services.",
                "digits": 0
              },
              {
                "name": "Tentatives d’homicide",
                "value": 4,
                "unit": "%",
                "source": "crime",
                "period": "2025 / 2024",
                "note": "Variations publiées arrondies. Enregistrements administratifs : les évolutions combinent les faits, les plaintes, les pratiques d’enregistrement et l’activité des services.",
                "digits": 0
              },
              {
                "name": "Violences physiques",
                "value": 5,
                "unit": "%",
                "source": "crime",
                "period": "2025 / 2024",
                "note": "Variations publiées arrondies. Enregistrements administratifs : les évolutions combinent les faits, les plaintes, les pratiques d’enregistrement et l’activité des services.",
                "digits": 0
              },
              {
                "name": "Violences sexuelles",
                "value": 8,
                "unit": "%",
                "source": "crime",
                "period": "2025 / 2024",
                "note": "Variations publiées arrondies. Enregistrements administratifs : les évolutions combinent les faits, les plaintes, les pratiques d’enregistrement et l’activité des services.",
                "digits": 0
              },
              {
                "name": "Vols avec armes",
                "value": -8,
                "unit": "%",
                "source": "crime",
                "period": "2025 / 2024",
                "note": "Variations publiées arrondies. Enregistrements administratifs : les évolutions combinent les faits, les plaintes, les pratiques d’enregistrement et l’activité des services.",
                "digits": 0
              },
              {
                "name": "Vols violents sans arme",
                "value": 2,
                "unit": "%",
                "source": "crime",
                "period": "2025 / 2024",
                "note": "Variations publiées arrondies. Enregistrements administratifs : les évolutions combinent les faits, les plaintes, les pratiques d’enregistrement et l’activité des services.",
                "digits": 0
              },
              {
                "name": "Vols sans violence contre des personnes",
                "value": 2,
                "unit": "%",
                "source": "crime",
                "period": "2025 / 2024",
                "note": "Variations publiées arrondies. Enregistrements administratifs : les évolutions combinent les faits, les plaintes, les pratiques d’enregistrement et l’activité des services.",
                "digits": 0
              },
              {
                "name": "Cambriolages de logement",
                "value": -3,
                "unit": "%",
                "source": "crime",
                "period": "2025 / 2024",
                "note": "Variations publiées arrondies. Enregistrements administratifs : les évolutions combinent les faits, les plaintes, les pratiques d’enregistrement et l’activité des services.",
                "digits": 0
              },
              {
                "name": "Vols de véhicules",
                "value": -9,
                "unit": "%",
                "source": "crime",
                "period": "2025 / 2024",
                "note": "Variations publiées arrondies. Enregistrements administratifs : les évolutions combinent les faits, les plaintes, les pratiques d’enregistrement et l’activité des services.",
                "digits": 0
              },
              {
                "name": "Vols dans les véhicules",
                "value": -9,
                "unit": "%",
                "source": "crime",
                "period": "2025 / 2024",
                "note": "Variations publiées arrondies. Enregistrements administratifs : les évolutions combinent les faits, les plaintes, les pratiques d’enregistrement et l’activité des services.",
                "digits": 0
              },
              {
                "name": "Vols d’accessoires de véhicules",
                "value": -1,
                "unit": "%",
                "source": "crime",
                "period": "2025 / 2024",
                "note": "Variations publiées arrondies. Enregistrements administratifs : les évolutions combinent les faits, les plaintes, les pratiques d’enregistrement et l’activité des services.",
                "digits": 0
              },
              {
                "name": "Destructions et dégradations",
                "value": 2,
                "unit": "%",
                "source": "crime",
                "period": "2025 / 2024",
                "note": "Variations publiées arrondies. Enregistrements administratifs : les évolutions combinent les faits, les plaintes, les pratiques d’enregistrement et l’activité des services.",
                "digits": 0
              },
              {
                "name": "Usage de stupéfiants",
                "value": 7,
                "unit": "%",
                "source": "crime",
                "period": "2025 / 2024",
                "note": "Variations publiées arrondies. Enregistrements administratifs : les évolutions combinent les faits, les plaintes, les pratiques d’enregistrement et l’activité des services.",
                "digits": 0
              },
              {
                "name": "Trafic de stupéfiants",
                "value": 9,
                "unit": "%",
                "source": "crime",
                "period": "2025 / 2024",
                "note": "Variations publiées arrondies. Enregistrements administratifs : les évolutions combinent les faits, les plaintes, les pratiques d’enregistrement et l’activité des services.",
                "digits": 0
              },
              {
                "name": "Escroqueries et fraudes",
                "value": 7,
                "unit": "%",
                "source": "crime",
                "period": "2025 / 2024",
                "note": "Variations publiées arrondies. Enregistrements administratifs : les évolutions combinent les faits, les plaintes, les pratiques d’enregistrement et l’activité des services.",
                "digits": 0
              },
              {
                "name": "Atteintes à l’environnement",
                "value": 4,
                "unit": "%",
                "source": "crime",
                "period": "2025 / 2024",
                "note": "Variations publiées arrondies. Enregistrements administratifs : les évolutions combinent les faits, les plaintes, les pratiques d’enregistrement et l’activité des services.",
                "digits": 0
              }
            ],
            "note": "Variations publiées arrondies. Enregistrements administratifs : les évolutions combinent les faits, les plaintes, les pratiques d’enregistrement et l’activité des services.",
            "period": "2025 / 2024"
          },
          {
            "title": "Le numérique dans les escroqueries",
            "kind": "bars",
            "rows": [
              {
                "name": "2016",
                "value": 31,
                "unit": "%",
                "source": "crime",
                "period": "2016 et 2025",
                "note": "Part des escroqueries et fraudes aux moyens de paiement enregistrées en lien avec le numérique. Deux observations, pas une série annuelle.",
                "digits": 0
              },
              {
                "name": "2025",
                "value": 53,
                "unit": "%",
                "source": "crime",
                "period": "2016 et 2025",
                "note": "Part des escroqueries et fraudes aux moyens de paiement enregistrées en lien avec le numérique. Deux observations, pas une série annuelle.",
                "digits": 0
              }
            ],
            "note": "Part des escroqueries et fraudes aux moyens de paiement enregistrées en lien avec le numérique. Deux observations, pas une série annuelle.",
            "period": "2016 et 2025"
          }
        ],
        "intro": ""
      },
      {
        "id": "enquetes",
        "title": "Enquêtes & lecture",
        "cards": [
          {
            "title": "Élucidation après un an",
            "kind": "bars",
            "rows": [
              {
                "name": "Homicides",
                "value": 68,
                "unit": "%",
                "source": "crime",
                "period": "Faits enregistrés en 2024 · suivi à 12 mois",
                "note": "Affaires pour lesquelles au moins un mis en cause a été identifié. Élucidation ne signifie ni condamnation ni résolution définitive.",
                "digits": 0
              },
              {
                "name": "Tentatives d’homicide",
                "value": 59,
                "unit": "%",
                "source": "crime",
                "period": "Faits enregistrés en 2024 · suivi à 12 mois",
                "note": "Affaires pour lesquelles au moins un mis en cause a été identifié. Élucidation ne signifie ni condamnation ni résolution définitive.",
                "digits": 0
              },
              {
                "name": "Violences physiques",
                "value": 66,
                "unit": "%",
                "source": "crime",
                "period": "Faits enregistrés en 2024 · suivi à 12 mois",
                "note": "Affaires pour lesquelles au moins un mis en cause a été identifié. Élucidation ne signifie ni condamnation ni résolution définitive.",
                "digits": 0
              },
              {
                "name": "Violences sexuelles",
                "value": 51,
                "unit": "%",
                "source": "crime",
                "period": "Faits enregistrés en 2024 · suivi à 12 mois",
                "note": "Affaires pour lesquelles au moins un mis en cause a été identifié. Élucidation ne signifie ni condamnation ni résolution définitive.",
                "digits": 0
              },
              {
                "name": "Cambriolages",
                "value": 7,
                "unit": "%",
                "source": "crime",
                "period": "Faits enregistrés en 2024 · suivi à 12 mois",
                "note": "Affaires pour lesquelles au moins un mis en cause a été identifié. Élucidation ne signifie ni condamnation ni résolution définitive.",
                "digits": 0
              },
              {
                "name": "Vols de véhicule",
                "value": 8,
                "unit": "%",
                "source": "crime",
                "period": "Faits enregistrés en 2024 · suivi à 12 mois",
                "note": "Affaires pour lesquelles au moins un mis en cause a été identifié. Élucidation ne signifie ni condamnation ni résolution définitive.",
                "digits": 0
              },
              {
                "name": "Vols dans les véhicules",
                "value": 6,
                "unit": "%",
                "source": "crime",
                "period": "Faits enregistrés en 2024 · suivi à 12 mois",
                "note": "Affaires pour lesquelles au moins un mis en cause a été identifié. Élucidation ne signifie ni condamnation ni résolution définitive.",
                "digits": 0
              },
              {
                "name": "Escroqueries et fraudes",
                "value": 8,
                "unit": "%",
                "source": "crime",
                "period": "Faits enregistrés en 2024 · suivi à 12 mois",
                "note": "Affaires pour lesquelles au moins un mis en cause a été identifié. Élucidation ne signifie ni condamnation ni résolution définitive.",
                "digits": 0
              }
            ],
            "note": "Affaires pour lesquelles au moins un mis en cause a été identifié. Élucidation ne signifie ni condamnation ni résolution définitive.",
            "period": "Faits enregistrés en 2024 · suivi à 12 mois"
          }
        ],
        "intro": ""
      }
    ],
    "kpis": [
      {
        "name": "Homicides enregistrés",
        "value": 975,
        "unit": "victimes",
        "source": "crime",
        "period": "2025",
        "note": "",
        "digits": 0
      },
      {
        "name": "Tentatives d’homicide",
        "value": 4477,
        "unit": "victimes",
        "source": "crime",
        "period": "2025",
        "note": "",
        "digits": 0
      },
      {
        "name": "Violences sexuelles enregistrées",
        "value": 132100,
        "unit": "victimes",
        "source": "crime",
        "period": "2025",
        "note": "Arrondi à la centaine.",
        "digits": 0
      }
    ],
    "note": "Ces données mesurent les faits connus des services de sécurité, pas toute la délinquance vécue. Elles ne permettent pas d’établir un lien causal avec une autre caractéristique de la population. Les enquêtes de victimation et l’atlas territorial sont accessibles dans les sources."
  },
  "migrations": {
    "title": "Migrations & population",
    "subtitle": "Distinguer les habitants, les arrivées, les titres de séjour et les protections ; explorer les parcours et les conditions de vie.",
    "icon": "◎",
    "tabs": [
      {
        "id": "population",
        "title": "Population & histoire",
        "cards": [
          {
            "title": "Deux populations qui se recoupent",
            "kind": "bars",
            "rows": [
              {
                "name": "Immigrés",
                "value": 7726,
                "unit": "milliers de personnes",
                "source": "migrants",
                "period": "2024 provisoire",
                "note": "Immigré : personne née étrangère à l’étranger, même devenue française. Étranger : personne sans nationalité française, quel que soit son lieu de naissance. Données 2024 provisoires ; rupture de série signalée par l’Insee en juin 2026.",
                "digits": 0
              },
              {
                "name": "Étrangers",
                "value": 6028,
                "unit": "milliers de personnes",
                "source": "migrants",
                "period": "2024 provisoire",
                "note": "Immigré : personne née étrangère à l’étranger, même devenue française. Étranger : personne sans nationalité française, quel que soit son lieu de naissance. Données 2024 provisoires ; rupture de série signalée par l’Insee en juin 2026.",
                "digits": 0
              }
            ],
            "note": "Immigré : personne née étrangère à l’étranger, même devenue française. Étranger : personne sans nationalité française, quel que soit son lieu de naissance. Données 2024 provisoires ; rupture de série signalée par l’Insee en juin 2026.",
            "period": "2024 provisoire"
          },
          {
            "title": "Repères historiques : population immigrée",
            "kind": "bars",
            "rows": [
              {
                "name": "1921",
                "value": 1429,
                "unit": "milliers de personnes",
                "source": "migrants",
                "period": "1921–2020",
                "note": "Points de recensement et estimations. France métropolitaine jusqu’en 1982 ; hors Mayotte jusqu’en 2013 ; avec Mayotte ensuite. Espacement des observations indiqué par les années. Les dernières estimations 2023–2024 restent séparées en raison de la rupture signalée.",
                "digits": 0
              },
              {
                "name": "1931",
                "value": 2729,
                "unit": "milliers de personnes",
                "source": "migrants",
                "period": "1921–2020",
                "note": "Points de recensement et estimations. France métropolitaine jusqu’en 1982 ; hors Mayotte jusqu’en 2013 ; avec Mayotte ensuite. Espacement des observations indiqué par les années. Les dernières estimations 2023–2024 restent séparées en raison de la rupture signalée.",
                "digits": 0
              },
              {
                "name": "1946",
                "value": 1986,
                "unit": "milliers de personnes",
                "source": "migrants",
                "period": "1921–2020",
                "note": "Points de recensement et estimations. France métropolitaine jusqu’en 1982 ; hors Mayotte jusqu’en 2013 ; avec Mayotte ensuite. Espacement des observations indiqué par les années. Les dernières estimations 2023–2024 restent séparées en raison de la rupture signalée.",
                "digits": 0
              },
              {
                "name": "1962",
                "value": 2861,
                "unit": "milliers de personnes",
                "source": "migrants",
                "period": "1921–2020",
                "note": "Points de recensement et estimations. France métropolitaine jusqu’en 1982 ; hors Mayotte jusqu’en 2013 ; avec Mayotte ensuite. Espacement des observations indiqué par les années. Les dernières estimations 2023–2024 restent séparées en raison de la rupture signalée.",
                "digits": 0
              },
              {
                "name": "1975",
                "value": 3887,
                "unit": "milliers de personnes",
                "source": "migrants",
                "period": "1921–2020",
                "note": "Points de recensement et estimations. France métropolitaine jusqu’en 1982 ; hors Mayotte jusqu’en 2013 ; avec Mayotte ensuite. Espacement des observations indiqué par les années. Les dernières estimations 2023–2024 restent séparées en raison de la rupture signalée.",
                "digits": 0
              },
              {
                "name": "1990",
                "value": 4222,
                "unit": "milliers de personnes",
                "source": "migrants",
                "period": "1921–2020",
                "note": "Points de recensement et estimations. France métropolitaine jusqu’en 1982 ; hors Mayotte jusqu’en 2013 ; avec Mayotte ensuite. Espacement des observations indiqué par les années. Les dernières estimations 2023–2024 restent séparées en raison de la rupture signalée.",
                "digits": 0
              },
              {
                "name": "1999",
                "value": 4374,
                "unit": "milliers de personnes",
                "source": "migrants",
                "period": "1921–2020",
                "note": "Points de recensement et estimations. France métropolitaine jusqu’en 1982 ; hors Mayotte jusqu’en 2013 ; avec Mayotte ensuite. Espacement des observations indiqué par les années. Les dernières estimations 2023–2024 restent séparées en raison de la rupture signalée.",
                "digits": 0
              },
              {
                "name": "2010",
                "value": 5514,
                "unit": "milliers de personnes",
                "source": "migrants",
                "period": "1921–2020",
                "note": "Points de recensement et estimations. France métropolitaine jusqu’en 1982 ; hors Mayotte jusqu’en 2013 ; avec Mayotte ensuite. Espacement des observations indiqué par les années. Les dernières estimations 2023–2024 restent séparées en raison de la rupture signalée.",
                "digits": 0
              },
              {
                "name": "2020",
                "value": 6847,
                "unit": "milliers de personnes",
                "source": "migrants",
                "period": "1921–2020",
                "note": "Points de recensement et estimations. France métropolitaine jusqu’en 1982 ; hors Mayotte jusqu’en 2013 ; avec Mayotte ensuite. Espacement des observations indiqué par les années. Les dernières estimations 2023–2024 restent séparées en raison de la rupture signalée.",
                "digits": 0
              }
            ],
            "note": "Points de recensement et estimations. France métropolitaine jusqu’en 1982 ; hors Mayotte jusqu’en 2013 ; avec Mayotte ensuite. Espacement des observations indiqué par les années. Les dernières estimations 2023–2024 restent séparées en raison de la rupture signalée.",
            "period": "1921–2020"
          }
        ],
        "intro": ""
      },
      {
        "id": "titres",
        "title": "Titres & protections",
        "cards": [
          {
            "title": "Pourquoi un premier titre est-il délivré ?",
            "kind": "donut",
            "rows": [
              {
                "name": "Études",
                "value": 116835,
                "unit": "premiers titres",
                "source": "titres",
                "period": "2025 provisoire",
                "note": "France, ressortissants de pays tiers. Motif administratif, pas enquête sur les raisons personnelles de migrer. Les Européens en libre circulation ne sont pas couverts.",
                "digits": 0
              },
              {
                "name": "Famille",
                "value": 90959,
                "unit": "premiers titres",
                "source": "titres",
                "period": "2025 provisoire",
                "note": "France, ressortissants de pays tiers. Motif administratif, pas enquête sur les raisons personnelles de migrer. Les Européens en libre circulation ne sont pas couverts.",
                "digits": 0
              },
              {
                "name": "Humanitaire",
                "value": 88001,
                "unit": "premiers titres",
                "source": "titres",
                "period": "2025 provisoire",
                "note": "France, ressortissants de pays tiers. Motif administratif, pas enquête sur les raisons personnelles de migrer. Les Européens en libre circulation ne sont pas couverts.",
                "digits": 0
              },
              {
                "name": "Économie",
                "value": 50848,
                "unit": "premiers titres",
                "source": "titres",
                "period": "2025 provisoire",
                "note": "France, ressortissants de pays tiers. Motif administratif, pas enquête sur les raisons personnelles de migrer. Les Européens en libre circulation ne sont pas couverts.",
                "digits": 0
              },
              {
                "name": "Divers",
                "value": 30819,
                "unit": "premiers titres",
                "source": "titres",
                "period": "2025 provisoire",
                "note": "France, ressortissants de pays tiers. Motif administratif, pas enquête sur les raisons personnelles de migrer. Les Européens en libre circulation ne sont pas couverts.",
                "digits": 0
              }
            ],
            "note": "France, ressortissants de pays tiers. Motif administratif, pas enquête sur les raisons personnelles de migrer. Les Européens en libre circulation ne sont pas couverts.",
            "period": "2025 provisoire"
          },
          {
            "title": "Évolution des premiers titres",
            "kind": "line",
            "rows": [
              {
                "name": "2022",
                "value": 330092,
                "unit": "premiers titres",
                "source": "titres",
                "period": "2022–2025",
                "note": "2024 définitif, 2025 provisoire. Un titre délivré n’équivaut pas à une entrée pendant l’année. Les délivrances liées au Brexit affectent notamment 2021, non affiché.",
                "digits": 0
              },
              {
                "name": "2023",
                "value": 340019,
                "unit": "premiers titres",
                "source": "titres",
                "period": "2022–2025",
                "note": "2024 définitif, 2025 provisoire. Un titre délivré n’équivaut pas à une entrée pendant l’année. Les délivrances liées au Brexit affectent notamment 2021, non affiché.",
                "digits": 0
              },
              {
                "name": "2024",
                "value": 345587,
                "unit": "premiers titres",
                "source": "titres",
                "period": "2022–2025",
                "note": "2024 définitif, 2025 provisoire. Un titre délivré n’équivaut pas à une entrée pendant l’année. Les délivrances liées au Brexit affectent notamment 2021, non affiché.",
                "digits": 0
              },
              {
                "name": "2025",
                "value": 377462,
                "unit": "premiers titres",
                "source": "titres",
                "period": "2022–2025",
                "note": "2024 définitif, 2025 provisoire. Un titre délivré n’équivaut pas à une entrée pendant l’année. Les délivrances liées au Brexit affectent notamment 2021, non affiché.",
                "digits": 0
              }
            ],
            "note": "2024 définitif, 2025 provisoire. Un titre délivré n’équivaut pas à une entrée pendant l’année. Les délivrances liées au Brexit affectent notamment 2021, non affiché.",
            "period": "2022–2025"
          },
          {
            "title": "Détail des premiers titres humanitaires",
            "kind": "donut",
            "rows": [
              {
                "name": "Réfugiés et apatrides",
                "value": 52191,
                "unit": "premiers titres",
                "source": "titres",
                "period": "2025 provisoire",
                "note": "Autres = 88 001 − 52 191 − 32 466 − 2 900. Réfugié et protection subsidiaire sont des statuts juridiques distincts ; tous les réfugiés ne sont pas des réfugiés pour motif politique.",
                "digits": 0
              },
              {
                "name": "Protection subsidiaire",
                "value": 32466,
                "unit": "premiers titres",
                "source": "titres",
                "period": "2025 provisoire",
                "note": "Autres = 88 001 − 52 191 − 32 466 − 2 900. Réfugié et protection subsidiaire sont des statuts juridiques distincts ; tous les réfugiés ne sont pas des réfugiés pour motif politique.",
                "digits": 0
              },
              {
                "name": "Étrangers malades",
                "value": 2900,
                "unit": "premiers titres",
                "source": "titres",
                "period": "2025 provisoire",
                "note": "Autres = 88 001 − 52 191 − 32 466 − 2 900. Réfugié et protection subsidiaire sont des statuts juridiques distincts ; tous les réfugiés ne sont pas des réfugiés pour motif politique.",
                "digits": 0
              },
              {
                "name": "Autres humanitaires",
                "value": 444,
                "unit": "premiers titres",
                "source": "titres",
                "period": "2025 provisoire",
                "note": "Autres = 88 001 − 52 191 − 32 466 − 2 900. Réfugié et protection subsidiaire sont des statuts juridiques distincts ; tous les réfugiés ne sont pas des réfugiés pour motif politique.",
                "digits": 0
              }
            ],
            "note": "Autres = 88 001 − 52 191 − 32 466 − 2 900. Réfugié et protection subsidiaire sont des statuts juridiques distincts ; tous les réfugiés ne sont pas des réfugiés pour motif politique.",
            "period": "2025 provisoire"
          },
          {
            "title": "Détail des premiers titres économiques",
            "kind": "donut",
            "rows": [
              {
                "name": "Salariés",
                "value": 32287,
                "unit": "premiers titres",
                "source": "titres",
                "period": "2025 provisoire",
                "note": "Autres = complément calculé au total officiel de 50 848 titres économiques.",
                "digits": 0
              },
              {
                "name": "Scientifiques",
                "value": 6760,
                "unit": "premiers titres",
                "source": "titres",
                "period": "2025 provisoire",
                "note": "Autres = complément calculé au total officiel de 50 848 titres économiques.",
                "digits": 0
              },
              {
                "name": "Actifs non salariés",
                "value": 2468,
                "unit": "premiers titres",
                "source": "titres",
                "period": "2025 provisoire",
                "note": "Autres = complément calculé au total officiel de 50 848 titres économiques.",
                "digits": 0
              },
              {
                "name": "Saisonniers",
                "value": 8506,
                "unit": "premiers titres",
                "source": "titres",
                "period": "2025 provisoire",
                "note": "Autres = complément calculé au total officiel de 50 848 titres économiques.",
                "digits": 0
              },
              {
                "name": "Autres économiques",
                "value": 827,
                "unit": "premiers titres",
                "source": "titres",
                "period": "2025 provisoire",
                "note": "Autres = complément calculé au total officiel de 50 848 titres économiques.",
                "digits": 0
              }
            ],
            "note": "Autres = complément calculé au total officiel de 50 848 titres économiques.",
            "period": "2025 provisoire"
          }
        ],
        "intro": ""
      },
      {
        "id": "social",
        "title": "Conditions de vie",
        "cards": [
          {
            "title": "Pauvreté selon le lien à l’immigration",
            "kind": "bars",
            "rows": [
              {
                "name": "Immigrés",
                "value": 32.8,
                "unit": "%",
                "source": "pauvrete",
                "period": "2024",
                "note": "France métropolitaine, logements ordinaires, ménages à revenu déclaré positif ou nul, personne de référence non étudiante. Seuil : 60 % du niveau de vie médian. Comparaison descriptive non corrigée de l’âge, du diplôme, du ménage ou de l’emploi.",
                "digits": 1
              },
              {
                "name": "Descendants d’immigrés",
                "value": 27,
                "unit": "%",
                "source": "pauvrete",
                "period": "2024",
                "note": "France métropolitaine, logements ordinaires, ménages à revenu déclaré positif ou nul, personne de référence non étudiante. Seuil : 60 % du niveau de vie médian. Comparaison descriptive non corrigée de l’âge, du diplôme, du ménage ou de l’emploi.",
                "digits": 1
              },
              {
                "name": "Ni immigrés ni descendants",
                "value": 11,
                "unit": "%",
                "source": "pauvrete",
                "period": "2024",
                "note": "France métropolitaine, logements ordinaires, ménages à revenu déclaré positif ou nul, personne de référence non étudiante. Seuil : 60 % du niveau de vie médian. Comparaison descriptive non corrigée de l’âge, du diplôme, du ménage ou de l’emploi.",
                "digits": 1
              },
              {
                "name": "Ensemble",
                "value": 15.4,
                "unit": "%",
                "source": "pauvrete",
                "period": "2024",
                "note": "France métropolitaine, logements ordinaires, ménages à revenu déclaré positif ou nul, personne de référence non étudiante. Seuil : 60 % du niveau de vie médian. Comparaison descriptive non corrigée de l’âge, du diplôme, du ménage ou de l’emploi.",
                "digits": 1
              }
            ],
            "note": "France métropolitaine, logements ordinaires, ménages à revenu déclaré positif ou nul, personne de référence non étudiante. Seuil : 60 % du niveau de vie médian. Comparaison descriptive non corrigée de l’âge, du diplôme, du ménage ou de l’emploi.",
            "period": "2024"
          },
          {
            "title": "Pauvreté selon le continent de naissance",
            "kind": "bars",
            "rows": [
              {
                "name": "Immigrés nés en Afrique",
                "value": 39.7,
                "unit": "%",
                "source": "pauvrete",
                "period": "2024",
                "note": "Même champ ERFS et seuil monétaire. Ces catégories couvrent des parcours et situations très divers ; elles ne mesurent pas une caractéristique intrinsèque des personnes.",
                "digits": 1
              },
              {
                "name": "Immigrés nés en Europe",
                "value": 23,
                "unit": "%",
                "source": "pauvrete",
                "period": "2024",
                "note": "Même champ ERFS et seuil monétaire. Ces catégories couvrent des parcours et situations très divers ; elles ne mesurent pas une caractéristique intrinsèque des personnes.",
                "digits": 1
              },
              {
                "name": "Autres continents ou apatrides",
                "value": 31,
                "unit": "%",
                "source": "pauvrete",
                "period": "2024",
                "note": "Même champ ERFS et seuil monétaire. Ces catégories couvrent des parcours et situations très divers ; elles ne mesurent pas une caractéristique intrinsèque des personnes.",
                "digits": 1
              }
            ],
            "note": "Même champ ERFS et seuil monétaire. Ces catégories couvrent des parcours et situations très divers ; elles ne mesurent pas une caractéristique intrinsèque des personnes.",
            "period": "2024"
          }
        ],
        "intro": ""
      }
    ],
    "kpis": [
      {
        "name": "Immigrés en France",
        "value": 7726,
        "unit": "milliers",
        "source": "migrants",
        "period": "2024 provisoire",
        "note": "Immigré : personne née étrangère à l’étranger, même devenue française. Étranger : personne sans nationalité française, quel que soit son lieu de naissance. Données 2024 provisoires ; rupture de série signalée par l’Insee en juin 2026.",
        "digits": 0
      },
      {
        "name": "Étrangers en France",
        "value": 6028,
        "unit": "milliers",
        "source": "migrants",
        "period": "2024 provisoire",
        "note": "Immigré : personne née étrangère à l’étranger, même devenue française. Étranger : personne sans nationalité française, quel que soit son lieu de naissance. Données 2024 provisoires ; rupture de série signalée par l’Insee en juin 2026.",
        "digits": 0
      },
      {
        "name": "Premiers titres délivrés",
        "value": 377462,
        "unit": "titres",
        "source": "titres",
        "period": "2025 provisoire",
        "note": "",
        "digits": 0
      }
    ],
    "note": "Les stocks de population, les flux migratoires, les demandes d’asile et les titres délivrés ont des périmètres différents. Aucune addition entre ces indicateurs. Les estimations récentes de population comportent une rupture de série signalée par l’Insee."
  },
  "defense": {
    "title": "Défense & opérations",
    "subtitle": "Les moyens programmés, les grandes missions et quelques repères historiques des engagements militaires français.",
    "icon": "◈",
    "tabs": [
      {
        "id": "moyens",
        "title": "Budget & moyens",
        "cards": [
          {
            "title": "Trajectoire de la programmation militaire",
            "kind": "line",
            "rows": [
              {
                "name": "2024",
                "value": 47.2,
                "unit": "Md€",
                "source": "lpm",
                "period": "LPM 2024–2030",
                "note": "Crédits budgétaires de la mission Défense hors pensions, dans la loi de programmation de 2023. Une programmation n’est pas une dépense exécutée et peut être modifiée.",
                "digits": 1
              },
              {
                "name": "2025",
                "value": 50.5,
                "unit": "Md€",
                "source": "lpm",
                "period": "LPM 2024–2030",
                "note": "Crédits budgétaires de la mission Défense hors pensions, dans la loi de programmation de 2023. Une programmation n’est pas une dépense exécutée et peut être modifiée.",
                "digits": 1
              },
              {
                "name": "2026",
                "value": 53.7,
                "unit": "Md€",
                "source": "lpm",
                "period": "LPM 2024–2030",
                "note": "Crédits budgétaires de la mission Défense hors pensions, dans la loi de programmation de 2023. Une programmation n’est pas une dépense exécutée et peut être modifiée.",
                "digits": 1
              },
              {
                "name": "2027",
                "value": 56.9,
                "unit": "Md€",
                "source": "lpm",
                "period": "LPM 2024–2030",
                "note": "Crédits budgétaires de la mission Défense hors pensions, dans la loi de programmation de 2023. Une programmation n’est pas une dépense exécutée et peut être modifiée.",
                "digits": 1
              },
              {
                "name": "2028",
                "value": 60.4,
                "unit": "Md€",
                "source": "lpm",
                "period": "LPM 2024–2030",
                "note": "Crédits budgétaires de la mission Défense hors pensions, dans la loi de programmation de 2023. Une programmation n’est pas une dépense exécutée et peut être modifiée.",
                "digits": 1
              },
              {
                "name": "2029",
                "value": 63.9,
                "unit": "Md€",
                "source": "lpm",
                "period": "LPM 2024–2030",
                "note": "Crédits budgétaires de la mission Défense hors pensions, dans la loi de programmation de 2023. Une programmation n’est pas une dépense exécutée et peut être modifiée.",
                "digits": 1
              },
              {
                "name": "2030",
                "value": 67.4,
                "unit": "Md€",
                "source": "lpm",
                "period": "LPM 2024–2030",
                "note": "Crédits budgétaires de la mission Défense hors pensions, dans la loi de programmation de 2023. Une programmation n’est pas une dépense exécutée et peut être modifiée.",
                "digits": 1
              }
            ],
            "note": "Crédits budgétaires de la mission Défense hors pensions, dans la loi de programmation de 2023. Une programmation n’est pas une dépense exécutée et peut être modifiée.",
            "period": "LPM 2024–2030"
          },
          {
            "title": "Les ressources extrabudgétaires programmées",
            "kind": "line",
            "rows": [
              {
                "name": "2024",
                "value": 1.316,
                "unit": "Md€",
                "source": "lpm",
                "period": "LPM 2024–2030",
                "note": "Prévisions de l’article 4 : total publié de 5,866 Md€. Ces ressources ne représentent pas tout l’écart entre les besoins physico-financiers de 413,3 Md€ et les crédits budgétaires de 400 Md€.",
                "digits": 3
              },
              {
                "name": "2025",
                "value": 1.049,
                "unit": "Md€",
                "source": "lpm",
                "period": "LPM 2024–2030",
                "note": "Prévisions de l’article 4 : total publié de 5,866 Md€. Ces ressources ne représentent pas tout l’écart entre les besoins physico-financiers de 413,3 Md€ et les crédits budgétaires de 400 Md€.",
                "digits": 3
              },
              {
                "name": "2026",
                "value": 0.899,
                "unit": "Md€",
                "source": "lpm",
                "period": "LPM 2024–2030",
                "note": "Prévisions de l’article 4 : total publié de 5,866 Md€. Ces ressources ne représentent pas tout l’écart entre les besoins physico-financiers de 413,3 Md€ et les crédits budgétaires de 400 Md€.",
                "digits": 3
              },
              {
                "name": "2027",
                "value": 0.694,
                "unit": "Md€",
                "source": "lpm",
                "period": "LPM 2024–2030",
                "note": "Prévisions de l’article 4 : total publié de 5,866 Md€. Ces ressources ne représentent pas tout l’écart entre les besoins physico-financiers de 413,3 Md€ et les crédits budgétaires de 400 Md€.",
                "digits": 3
              },
              {
                "name": "2028",
                "value": 0.649,
                "unit": "Md€",
                "source": "lpm",
                "period": "LPM 2024–2030",
                "note": "Prévisions de l’article 4 : total publié de 5,866 Md€. Ces ressources ne représentent pas tout l’écart entre les besoins physico-financiers de 413,3 Md€ et les crédits budgétaires de 400 Md€.",
                "digits": 3
              },
              {
                "name": "2029",
                "value": 0.63,
                "unit": "Md€",
                "source": "lpm",
                "period": "LPM 2024–2030",
                "note": "Prévisions de l’article 4 : total publié de 5,866 Md€. Ces ressources ne représentent pas tout l’écart entre les besoins physico-financiers de 413,3 Md€ et les crédits budgétaires de 400 Md€.",
                "digits": 3
              },
              {
                "name": "2030",
                "value": 0.629,
                "unit": "Md€",
                "source": "lpm",
                "period": "LPM 2024–2030",
                "note": "Prévisions de l’article 4 : total publié de 5,866 Md€. Ces ressources ne représentent pas tout l’écart entre les besoins physico-financiers de 413,3 Md€ et les crédits budgétaires de 400 Md€.",
                "digits": 3
              }
            ],
            "note": "Prévisions de l’article 4 : total publié de 5,866 Md€. Ces ressources ne représentent pas tout l’écart entre les besoins physico-financiers de 413,3 Md€ et les crédits budgétaires de 400 Md€.",
            "period": "LPM 2024–2030"
          }
        ],
        "intro": ""
      },
      {
        "id": "operations",
        "title": "Opérations & histoire",
        "cards": [
          {
            "title": "Engagements : repères sélectionnés",
            "kind": "timeline",
            "events": [
              {
                "date": "2013–2014",
                "name": "Serval · Mali",
                "note": "Intervention française à la demande des autorités maliennes ; achevée en juillet 2014.",
                "source": "barkhane"
              },
              {
                "date": "2014–2022",
                "name": "Barkhane · Sahel",
                "note": "Succède à Serval et Épervier. Fin annoncée le 9 novembre 2022.",
                "source": "barkhane"
              }
            ],
            "note": "Sélection de repères ; ne constitue pas une liste de tous les conflits."
          },
          {
            "title": "Chammal · Irak et Syrie",
            "kind": "timeline",
            "events": [
              {
                "date": "Depuis 2014",
                "name": "Participation française à la coalition contre Daech",
                "note": "Cadre de l’opération Inherent Resolve. Consulter la présentation ministérielle pour les évolutions du dispositif.",
                "source": "chammal"
              }
            ],
            "note": "La date de début ne décrit pas des effectifs ou des positions en temps réel."
          },
          {
            "title": "Protection sur le territoire national",
            "kind": "timeline",
            "events": [
              {
                "date": "Depuis janvier 2015",
                "name": "Sentinelle",
                "note": "Appui militaire aux forces de sécurité intérieure pour la protection de sites et de populations.",
                "source": "sentinelle"
              }
            ],
            "note": ""
          },
          {
            "title": "Maintien de la paix au Liban",
            "kind": "timeline",
            "events": [
              {
                "date": "1978",
                "name": "Création de la FINUL",
                "note": "La France participe à la force des Nations unies au Liban.",
                "source": "daman"
              },
              {
                "date": "2006",
                "name": "Élargissement du mandat de la FINUL",
                "note": "La participation française est présentée dans le dossier de l’opération Daman.",
                "source": "daman"
              }
            ],
            "note": ""
          }
        ],
        "intro": ""
      },
      {
        "id": "histoire",
        "title": "Conflits & mémoire",
        "cards": [
          {
            "title": "Les guerres mondiales",
            "kind": "timeline",
            "events": [
              {
                "date": "1914–1918",
                "name": "Première Guerre mondiale",
                "note": "Guerre mondiale et mobilisation française ; explorer les dossiers consacrés aux fronts, aux combattants et aux mémoires.",
                "source": "guerres"
              },
              {
                "date": "1939–1945",
                "name": "Seconde Guerre mondiale",
                "note": "Défaite, occupation, Résistance et Libération : des expériences multiples documentées dans les ressources historiques.",
                "source": "guerres"
              }
            ],
            "note": ""
          },
          {
            "title": "Guerre d’Indochine",
            "kind": "timeline",
            "events": [
              {
                "date": "1946–1954",
                "name": "France et Viêt Minh",
                "note": "Conflit de décolonisation en Indochine ; fin de la guerre en 1954.",
                "source": "indochine"
              }
            ],
            "note": ""
          },
          {
            "title": "Guerre d’Algérie",
            "kind": "timeline",
            "events": [
              {
                "date": "1954–1962",
                "name": "Guerre d’indépendance de l’Algérie",
                "note": "Début le 1er novembre 1954 ; accords d’Évian et indépendance en 1962. Les mémoires civiles et militaires du conflit font l’objet de dossiers dédiés.",
                "source": "algerie"
              }
            ],
            "note": ""
          }
        ],
        "intro": "Sélection de grands conflits impliquant la France au XXe siècle. Les dates ne résument ni les responsabilités ni l’ensemble des conséquences humaines. Les dossiers historiques permettent d’approfondir."
      }
    ],
    "kpis": [
      {
        "name": "Besoins programmés LPM",
        "value": 413.3,
        "unit": "Md€",
        "source": "lpm",
        "period": "2024–2030",
        "note": "",
        "digits": 1
      },
      {
        "name": "Crédits budgétaires LPM",
        "value": 400,
        "unit": "Md€",
        "source": "lpm",
        "period": "2024–2030",
        "note": "",
        "digits": 1
      }
    ],
    "note": "Budget voté, programmation et exécution sont différents. Le dossier Budget de l’État présente aussi la mission Défense, contributions aux pensions comprises. Les opérations présentées ici sont des repères publics et historiques."
  },
  "politique": {
    "title": "Vie politique & institutions",
    "subtitle": "Parcourir la Ve République : gouvernements, votes populaires, dissolutions et équilibres parlementaires.",
    "icon": "▦",
    "tabs": [
      {
        "id": "reperes",
        "title": "Repères & gouvernements",
        "cards": [
          {
            "title": "Qui a dirigé les gouvernements ? · 1959–2025",
            "kind": "timeline",
            "events": [
              {
                "date": "1959–1962",
                "name": "Michel Debré",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "1962–1968",
                "name": "Georges Pompidou",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "1968–1969",
                "name": "Maurice Couve de Murville",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "1969–1972",
                "name": "Jacques Chaban-Delmas",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "1972–1974",
                "name": "Pierre Messmer",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "1974–1976",
                "name": "Jacques Chirac",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "1976–1981",
                "name": "Raymond Barre",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "1981–1984",
                "name": "Pierre Mauroy",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "1984–1986",
                "name": "Laurent Fabius",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "1986–1988",
                "name": "Jacques Chirac",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "1988–1991",
                "name": "Michel Rocard",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "1991–1992",
                "name": "Édith Cresson",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "1992–1993",
                "name": "Pierre Bérégovoy",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "1993–1995",
                "name": "Édouard Balladur",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "1995–1997",
                "name": "Alain Juppé",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "1997–2002",
                "name": "Lionel Jospin",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "2002–2005",
                "name": "Jean-Pierre Raffarin",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "2005–2007",
                "name": "Dominique de Villepin",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "2007–2012",
                "name": "François Fillon",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "2012–2014",
                "name": "Jean-Marc Ayrault",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "2014–2016",
                "name": "Manuel Valls",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "2016–2017",
                "name": "Bernard Cazeneuve",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "2017–2020",
                "name": "Édouard Philippe",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "2020–2022",
                "name": "Jean Castex",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "2022–2024",
                "name": "Élisabeth Borne",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "2024",
                "name": "Gabriel Attal",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "2024",
                "name": "Michel Barnier",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              },
              {
                "date": "2024–2025",
                "name": "François Bayrou",
                "note": "Période à Matignon, regroupée par Premier ministre. Plusieurs gouvernements peuvent se succéder sous la même personne.",
                "source": "pm"
              }
            ],
            "note": "Frise historique en années. Fin de la sélection : gouvernement Bayrou. Le gouvernement en fonction et ses remaniements ne sont pas présentés comme une donnée en temps réel."
          },
          {
            "title": "Les cohabitations",
            "kind": "timeline",
            "events": [
              {
                "date": "1986–1988",
                "name": "Mitterrand / Chirac",
                "note": "Président et Premier ministre issus de camps politiques différents.",
                "source": "cohabitations"
              },
              {
                "date": "1993–1995",
                "name": "Mitterrand / Balladur",
                "note": "Deuxième cohabitation.",
                "source": "cohabitations"
              },
              {
                "date": "1997–2002",
                "name": "Chirac / Jospin",
                "note": "Troisième cohabitation.",
                "source": "cohabitations"
              }
            ],
            "note": ""
          }
        ],
        "intro": ""
      },
      {
        "id": "assemblee",
        "title": "Assemblée nationale",
        "cards": [
          {
            "title": "Les groupes à l’ouverture de la législature",
            "kind": "hemicycle",
            "rows": [
              {
                "name": "Rassemblement national",
                "value": 126,
                "unit": "sièges",
                "source": "assemblee",
                "period": "18 juillet 2024",
                "note": "Membres et apparentés compris ; non-inscrits séparés. Photographie historique de 577 sièges, pas la composition actuelle. Un groupe parlementaire n’est pas un parti politique.",
                "digits": 0
              },
              {
                "name": "Ensemble pour la République",
                "value": 99,
                "unit": "sièges",
                "source": "assemblee",
                "period": "18 juillet 2024",
                "note": "Membres et apparentés compris ; non-inscrits séparés. Photographie historique de 577 sièges, pas la composition actuelle. Un groupe parlementaire n’est pas un parti politique.",
                "digits": 0
              },
              {
                "name": "LFI–Nouveau Front populaire",
                "value": 72,
                "unit": "sièges",
                "source": "assemblee",
                "period": "18 juillet 2024",
                "note": "Membres et apparentés compris ; non-inscrits séparés. Photographie historique de 577 sièges, pas la composition actuelle. Un groupe parlementaire n’est pas un parti politique.",
                "digits": 0
              },
              {
                "name": "Socialistes et apparentés",
                "value": 66,
                "unit": "sièges",
                "source": "assemblee",
                "period": "18 juillet 2024",
                "note": "Membres et apparentés compris ; non-inscrits séparés. Photographie historique de 577 sièges, pas la composition actuelle. Un groupe parlementaire n’est pas un parti politique.",
                "digits": 0
              },
              {
                "name": "Droite républicaine",
                "value": 47,
                "unit": "sièges",
                "source": "assemblee",
                "period": "18 juillet 2024",
                "note": "Membres et apparentés compris ; non-inscrits séparés. Photographie historique de 577 sièges, pas la composition actuelle. Un groupe parlementaire n’est pas un parti politique.",
                "digits": 0
              },
              {
                "name": "Écologiste et social",
                "value": 38,
                "unit": "sièges",
                "source": "assemblee",
                "period": "18 juillet 2024",
                "note": "Membres et apparentés compris ; non-inscrits séparés. Photographie historique de 577 sièges, pas la composition actuelle. Un groupe parlementaire n’est pas un parti politique.",
                "digits": 0
              },
              {
                "name": "Les Démocrates",
                "value": 36,
                "unit": "sièges",
                "source": "assemblee",
                "period": "18 juillet 2024",
                "note": "Membres et apparentés compris ; non-inscrits séparés. Photographie historique de 577 sièges, pas la composition actuelle. Un groupe parlementaire n’est pas un parti politique.",
                "digits": 0
              },
              {
                "name": "Horizons & Indépendants",
                "value": 31,
                "unit": "sièges",
                "source": "assemblee",
                "period": "18 juillet 2024",
                "note": "Membres et apparentés compris ; non-inscrits séparés. Photographie historique de 577 sièges, pas la composition actuelle. Un groupe parlementaire n’est pas un parti politique.",
                "digits": 0
              },
              {
                "name": "LIOT",
                "value": 21,
                "unit": "sièges",
                "source": "assemblee",
                "period": "18 juillet 2024",
                "note": "Membres et apparentés compris ; non-inscrits séparés. Photographie historique de 577 sièges, pas la composition actuelle. Un groupe parlementaire n’est pas un parti politique.",
                "digits": 0
              },
              {
                "name": "Gauche démocrate et républicaine",
                "value": 17,
                "unit": "sièges",
                "source": "assemblee",
                "period": "18 juillet 2024",
                "note": "Membres et apparentés compris ; non-inscrits séparés. Photographie historique de 577 sièges, pas la composition actuelle. Un groupe parlementaire n’est pas un parti politique.",
                "digits": 0
              },
              {
                "name": "À droite",
                "value": 16,
                "unit": "sièges",
                "source": "assemblee",
                "period": "18 juillet 2024",
                "note": "Membres et apparentés compris ; non-inscrits séparés. Photographie historique de 577 sièges, pas la composition actuelle. Un groupe parlementaire n’est pas un parti politique.",
                "digits": 0
              },
              {
                "name": "Non-inscrits",
                "value": 8,
                "unit": "sièges",
                "source": "assemblee",
                "period": "18 juillet 2024",
                "note": "Membres et apparentés compris ; non-inscrits séparés. Photographie historique de 577 sièges, pas la composition actuelle. Un groupe parlementaire n’est pas un parti politique.",
                "digits": 0
              }
            ],
            "note": "Membres et apparentés compris ; non-inscrits séparés. Photographie historique de 577 sièges, pas la composition actuelle. Un groupe parlementaire n’est pas un parti politique.",
            "period": "18 juillet 2024"
          }
        ],
        "intro": ""
      },
      {
        "id": "dissolutions",
        "title": "Dissolutions",
        "cards": [
          {
            "title": "Les dissolutions : de Gaulle à Chirac",
            "kind": "timeline",
            "events": [
              {
                "date": "1962",
                "name": "Charles de Gaulle",
                "note": "Première dissolution de la Ve République.",
                "source": "dissolution"
              },
              {
                "date": "1968",
                "name": "Charles de Gaulle",
                "note": "Deuxième dissolution.",
                "source": "dissolution"
              },
              {
                "date": "1981",
                "name": "François Mitterrand",
                "note": "Dissolution après son élection.",
                "source": "dissolution"
              },
              {
                "date": "1988",
                "name": "François Mitterrand",
                "note": "Dissolution après sa réélection.",
                "source": "dissolution"
              },
              {
                "date": "21/04/1997",
                "name": "Jacques Chirac",
                "note": "Élections anticipées suivies de la cohabitation avec Lionel Jospin.",
                "source": "dissolution"
              }
            ],
            "note": ""
          },
          {
            "title": "La dissolution de 2024",
            "kind": "timeline",
            "events": [
              {
                "date": "09/06/2024",
                "name": "Emmanuel Macron",
                "note": "Décret de dissolution de l’Assemblée nationale ; élections les 30 juin et 7 juillet 2024.",
                "source": "diss2024"
              }
            ],
            "note": ""
          }
        ],
        "intro": ""
      },
      {
        "id": "referendums",
        "title": "Référendums",
        "cards": [
          {
            "title": "08/01/1961 · Autodétermination de l’Algérie",
            "kind": "donut",
            "rows": [
              {
                "name": "Oui",
                "value": 74.99,
                "unit": "% des exprimés",
                "source": "ref",
                "period": "08/01/1961",
                "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 26,24 % des inscrits.",
                "digits": 2
              },
              {
                "name": "Non",
                "value": 25.01,
                "unit": "% des exprimés",
                "source": "ref",
                "period": "08/01/1961",
                "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 26,24 % des inscrits.",
                "digits": 2
              }
            ],
            "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 26,24 % des inscrits.",
            "period": "08/01/1961"
          },
          {
            "title": "08/04/1962 · Accords d’Évian",
            "kind": "donut",
            "rows": [
              {
                "name": "Oui",
                "value": 90.81,
                "unit": "% des exprimés",
                "source": "ref",
                "period": "08/04/1962",
                "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 24,66 % des inscrits.",
                "digits": 2
              },
              {
                "name": "Non",
                "value": 9.19,
                "unit": "% des exprimés",
                "source": "ref",
                "period": "08/04/1962",
                "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 24,66 % des inscrits.",
                "digits": 2
              }
            ],
            "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 24,66 % des inscrits.",
            "period": "08/04/1962"
          },
          {
            "title": "28/10/1962 · Président élu au suffrage universel",
            "kind": "donut",
            "rows": [
              {
                "name": "Oui",
                "value": 62.25,
                "unit": "% des exprimés",
                "source": "ref",
                "period": "28/10/1962",
                "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 23,03 % des inscrits.",
                "digits": 2
              },
              {
                "name": "Non",
                "value": 37.75,
                "unit": "% des exprimés",
                "source": "ref",
                "period": "28/10/1962",
                "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 23,03 % des inscrits.",
                "digits": 2
              }
            ],
            "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 23,03 % des inscrits.",
            "period": "28/10/1962"
          },
          {
            "title": "27/04/1969 · Régionalisation et réforme du Sénat",
            "kind": "donut",
            "rows": [
              {
                "name": "Oui",
                "value": 47.59,
                "unit": "% des exprimés",
                "source": "ref",
                "period": "27/04/1969",
                "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 19,87 % des inscrits.",
                "digits": 2
              },
              {
                "name": "Non",
                "value": 52.41,
                "unit": "% des exprimés",
                "source": "ref",
                "period": "27/04/1969",
                "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 19,87 % des inscrits.",
                "digits": 2
              }
            ],
            "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 19,87 % des inscrits. Date du scrutin vérifiée dans le dossier DILA sur les cohabitations.",
            "period": "27/04/1969"
          },
          {
            "title": "23/04/1972 · Élargissement de la CEE",
            "kind": "donut",
            "rows": [
              {
                "name": "Oui",
                "value": 68.31,
                "unit": "% des exprimés",
                "source": "ref",
                "period": "23/04/1972",
                "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 39,76 % des inscrits.",
                "digits": 2
              },
              {
                "name": "Non",
                "value": 31.69,
                "unit": "% des exprimés",
                "source": "ref",
                "period": "23/04/1972",
                "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 39,76 % des inscrits.",
                "digits": 2
              }
            ],
            "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 39,76 % des inscrits.",
            "period": "23/04/1972"
          },
          {
            "title": "06/11/1988 · Statut de la Nouvelle-Calédonie",
            "kind": "donut",
            "rows": [
              {
                "name": "Oui",
                "value": 79.99,
                "unit": "% des exprimés",
                "source": "ref",
                "period": "06/11/1988",
                "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 63,11 % des inscrits.",
                "digits": 2
              },
              {
                "name": "Non",
                "value": 20.01,
                "unit": "% des exprimés",
                "source": "ref",
                "period": "06/11/1988",
                "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 63,11 % des inscrits.",
                "digits": 2
              }
            ],
            "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 63,11 % des inscrits.",
            "period": "06/11/1988"
          },
          {
            "title": "20/09/1992 · Traité de Maastricht",
            "kind": "donut",
            "rows": [
              {
                "name": "Oui",
                "value": 51.04,
                "unit": "% des exprimés",
                "source": "ref",
                "period": "20/09/1992",
                "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 30,3 % des inscrits.",
                "digits": 2
              },
              {
                "name": "Non",
                "value": 48.96,
                "unit": "% des exprimés",
                "source": "ref",
                "period": "20/09/1992",
                "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 30,3 % des inscrits.",
                "digits": 2
              }
            ],
            "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 30,3 % des inscrits.",
            "period": "20/09/1992"
          },
          {
            "title": "24/09/2000 · Quinquennat présidentiel",
            "kind": "donut",
            "rows": [
              {
                "name": "Oui",
                "value": 73.21,
                "unit": "% des exprimés",
                "source": "ref",
                "period": "24/09/2000",
                "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 69,81 % des inscrits.",
                "digits": 2
              },
              {
                "name": "Non",
                "value": 26.79,
                "unit": "% des exprimés",
                "source": "ref",
                "period": "24/09/2000",
                "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 69,81 % des inscrits.",
                "digits": 2
              }
            ],
            "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 69,81 % des inscrits.",
            "period": "24/09/2000"
          },
          {
            "title": "29/05/2005 · Constitution européenne",
            "kind": "donut",
            "rows": [
              {
                "name": "Oui",
                "value": 45.33,
                "unit": "% des exprimés",
                "source": "ref",
                "period": "29/05/2005",
                "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 30,63 % des inscrits.",
                "digits": 2
              },
              {
                "name": "Non",
                "value": 54.67,
                "unit": "% des exprimés",
                "source": "ref",
                "period": "29/05/2005",
                "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 30,63 % des inscrits.",
                "digits": 2
              }
            ],
            "note": "Suffrages exprimés : blancs et nuls exclus. Abstention distincte : 30,63 % des inscrits.",
            "period": "29/05/2005"
          }
        ],
        "intro": "Les neuf référendums nationaux organisés après l’entrée en vigueur de la Ve République. Le vote constituant du 28 septembre 1958 et les consultations locales sont hors de ce périmètre."
      },
      {
        "id": "49",
        "title": "Article 49.3",
        "cards": [
          {
            "title": "Recours par Premier ministre · jusqu’en 2024",
            "kind": "bars",
            "rows": [
              {
                "name": "Debré · 1959–1962",
                "value": 4,
                "unit": "engagements",
                "source": "49",
                "period": "1959–2024",
                "note": "Chaque engagement de responsabilité compte, y compris plusieurs lectures du même texte. Les Premiers ministres sans recours sont omis du graphique. Périmètre arrêté à 2024 pour éviter les incohérences entre le récapitulatif et le détail récent de la source.",
                "digits": 0
              },
              {
                "name": "Pompidou · 1962–1968",
                "value": 6,
                "unit": "engagements",
                "source": "49",
                "period": "1959–2024",
                "note": "Chaque engagement de responsabilité compte, y compris plusieurs lectures du même texte. Les Premiers ministres sans recours sont omis du graphique. Périmètre arrêté à 2024 pour éviter les incohérences entre le récapitulatif et le détail récent de la source.",
                "digits": 0
              },
              {
                "name": "Barre · 1976–1981",
                "value": 8,
                "unit": "engagements",
                "source": "49",
                "period": "1959–2024",
                "note": "Chaque engagement de responsabilité compte, y compris plusieurs lectures du même texte. Les Premiers ministres sans recours sont omis du graphique. Périmètre arrêté à 2024 pour éviter les incohérences entre le récapitulatif et le détail récent de la source.",
                "digits": 0
              },
              {
                "name": "Mauroy · 1981–1984",
                "value": 7,
                "unit": "engagements",
                "source": "49",
                "period": "1959–2024",
                "note": "Chaque engagement de responsabilité compte, y compris plusieurs lectures du même texte. Les Premiers ministres sans recours sont omis du graphique. Périmètre arrêté à 2024 pour éviter les incohérences entre le récapitulatif et le détail récent de la source.",
                "digits": 0
              },
              {
                "name": "Fabius · 1984–1986",
                "value": 4,
                "unit": "engagements",
                "source": "49",
                "period": "1959–2024",
                "note": "Chaque engagement de responsabilité compte, y compris plusieurs lectures du même texte. Les Premiers ministres sans recours sont omis du graphique. Périmètre arrêté à 2024 pour éviter les incohérences entre le récapitulatif et le détail récent de la source.",
                "digits": 0
              },
              {
                "name": "Chirac · 1986–1988",
                "value": 8,
                "unit": "engagements",
                "source": "49",
                "period": "1959–2024",
                "note": "Chaque engagement de responsabilité compte, y compris plusieurs lectures du même texte. Les Premiers ministres sans recours sont omis du graphique. Périmètre arrêté à 2024 pour éviter les incohérences entre le récapitulatif et le détail récent de la source.",
                "digits": 0
              },
              {
                "name": "Rocard · 1988–1991",
                "value": 28,
                "unit": "engagements",
                "source": "49",
                "period": "1959–2024",
                "note": "Chaque engagement de responsabilité compte, y compris plusieurs lectures du même texte. Les Premiers ministres sans recours sont omis du graphique. Périmètre arrêté à 2024 pour éviter les incohérences entre le récapitulatif et le détail récent de la source.",
                "digits": 0
              },
              {
                "name": "Cresson · 1991–1992",
                "value": 8,
                "unit": "engagements",
                "source": "49",
                "period": "1959–2024",
                "note": "Chaque engagement de responsabilité compte, y compris plusieurs lectures du même texte. Les Premiers ministres sans recours sont omis du graphique. Périmètre arrêté à 2024 pour éviter les incohérences entre le récapitulatif et le détail récent de la source.",
                "digits": 0
              },
              {
                "name": "Bérégovoy · 1992–1993",
                "value": 3,
                "unit": "engagements",
                "source": "49",
                "period": "1959–2024",
                "note": "Chaque engagement de responsabilité compte, y compris plusieurs lectures du même texte. Les Premiers ministres sans recours sont omis du graphique. Périmètre arrêté à 2024 pour éviter les incohérences entre le récapitulatif et le détail récent de la source.",
                "digits": 0
              },
              {
                "name": "Balladur · 1993–1995",
                "value": 1,
                "unit": "engagements",
                "source": "49",
                "period": "1959–2024",
                "note": "Chaque engagement de responsabilité compte, y compris plusieurs lectures du même texte. Les Premiers ministres sans recours sont omis du graphique. Périmètre arrêté à 2024 pour éviter les incohérences entre le récapitulatif et le détail récent de la source.",
                "digits": 0
              },
              {
                "name": "Juppé · 1995–1997",
                "value": 2,
                "unit": "engagements",
                "source": "49",
                "period": "1959–2024",
                "note": "Chaque engagement de responsabilité compte, y compris plusieurs lectures du même texte. Les Premiers ministres sans recours sont omis du graphique. Périmètre arrêté à 2024 pour éviter les incohérences entre le récapitulatif et le détail récent de la source.",
                "digits": 0
              },
              {
                "name": "Raffarin · 2002–2005",
                "value": 2,
                "unit": "engagements",
                "source": "49",
                "period": "1959–2024",
                "note": "Chaque engagement de responsabilité compte, y compris plusieurs lectures du même texte. Les Premiers ministres sans recours sont omis du graphique. Périmètre arrêté à 2024 pour éviter les incohérences entre le récapitulatif et le détail récent de la source.",
                "digits": 0
              },
              {
                "name": "Villepin · 2005–2007",
                "value": 1,
                "unit": "engagements",
                "source": "49",
                "period": "1959–2024",
                "note": "Chaque engagement de responsabilité compte, y compris plusieurs lectures du même texte. Les Premiers ministres sans recours sont omis du graphique. Périmètre arrêté à 2024 pour éviter les incohérences entre le récapitulatif et le détail récent de la source.",
                "digits": 0
              },
              {
                "name": "Valls · 2014–2016",
                "value": 6,
                "unit": "engagements",
                "source": "49",
                "period": "1959–2024",
                "note": "Chaque engagement de responsabilité compte, y compris plusieurs lectures du même texte. Les Premiers ministres sans recours sont omis du graphique. Périmètre arrêté à 2024 pour éviter les incohérences entre le récapitulatif et le détail récent de la source.",
                "digits": 0
              },
              {
                "name": "Philippe · 2017–2020",
                "value": 1,
                "unit": "engagements",
                "source": "49",
                "period": "1959–2024",
                "note": "Chaque engagement de responsabilité compte, y compris plusieurs lectures du même texte. Les Premiers ministres sans recours sont omis du graphique. Périmètre arrêté à 2024 pour éviter les incohérences entre le récapitulatif et le détail récent de la source.",
                "digits": 0
              },
              {
                "name": "Borne · 2022–2024",
                "value": 23,
                "unit": "engagements",
                "source": "49",
                "period": "1959–2024",
                "note": "Chaque engagement de responsabilité compte, y compris plusieurs lectures du même texte. Les Premiers ministres sans recours sont omis du graphique. Périmètre arrêté à 2024 pour éviter les incohérences entre le récapitulatif et le détail récent de la source.",
                "digits": 0
              },
              {
                "name": "Barnier · 2024",
                "value": 1,
                "unit": "engagements",
                "source": "49",
                "period": "1959–2024",
                "note": "Chaque engagement de responsabilité compte, y compris plusieurs lectures du même texte. Les Premiers ministres sans recours sont omis du graphique. Périmètre arrêté à 2024 pour éviter les incohérences entre le récapitulatif et le détail récent de la source.",
                "digits": 0
              }
            ],
            "note": "Chaque engagement de responsabilité compte, y compris plusieurs lectures du même texte. Les Premiers ministres sans recours sont omis du graphique. Périmètre arrêté à 2024 pour éviter les incohérences entre le récapitulatif et le détail récent de la source.",
            "period": "1959–2024"
          },
          {
            "title": "Comprendre la procédure",
            "kind": "timeline",
            "events": [
              {
                "date": "1958",
                "name": "Engagement de responsabilité sur un texte",
                "note": "Le texte est considéré adopté sauf si une motion de censure est votée.",
                "source": "constitution"
              },
              {
                "date": "2008",
                "name": "Une nouvelle limite pour les textes ordinaires",
                "note": "Un autre projet ou proposition de loi par session ; les projets de loi de finances et de financement de la Sécurité sociale relèvent d’un régime distinct.",
                "source": "constitution"
              }
            ],
            "note": "Le nombre de recours, le nombre de textes et le nombre de motions de censure sont trois indicateurs différents."
          }
        ],
        "intro": ""
      },
      {
        "id": "partis",
        "title": "Partis & législatures",
        "cards": [
          {
            "title": "Lire les changements de paysage parlementaire",
            "kind": "timeline",
            "events": [
              {
                "date": "1958–1967",
                "name": "UNR et famille gaulliste",
                "note": "Les archives des premières législatures permettent de retrouver les groupes et leurs changements de dénomination.",
                "source": "legislatures"
              },
              {
                "date": "1978–1997",
                "name": "RPR, UDF, socialistes et communistes",
                "note": "Alternances et cohabitations structurent le paysage des groupes. Les étiquettes électorales et les groupes ne se confondent pas.",
                "source": "legislatures"
              },
              {
                "date": "1998",
                "name": "Démocratie libérale et indépendants",
                "note": "Des députés quittent l’UDF et constituent un nouveau groupe : exemple de recomposition en cours de législature.",
                "source": "legislatures"
              }
            ],
            "note": "Sélection historique, pas un arbre généalogique exhaustif des partis. Les archives officielles donnent les compositions et résultats pour chaque législature."
          },
          {
            "title": "Les groupes au 2 juillet 1981",
            "kind": "donut",
            "rows": [
              {
                "name": "Socialiste",
                "value": 285,
                "unit": "sièges",
                "source": "legislatures",
                "period": "2 juillet 1981",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              },
              {
                "name": "RPR",
                "value": 88,
                "unit": "sièges",
                "source": "legislatures",
                "period": "2 juillet 1981",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              },
              {
                "name": "UDF",
                "value": 62,
                "unit": "sièges",
                "source": "legislatures",
                "period": "2 juillet 1981",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              },
              {
                "name": "Communiste",
                "value": 44,
                "unit": "sièges",
                "source": "legislatures",
                "period": "2 juillet 1981",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              },
              {
                "name": "Non-inscrits",
                "value": 12,
                "unit": "sièges",
                "source": "legislatures",
                "period": "2 juillet 1981",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              }
            ],
            "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
            "period": "2 juillet 1981"
          },
          {
            "title": "Les groupes au 1er avril 1986",
            "kind": "donut",
            "rows": [
              {
                "name": "Socialiste",
                "value": 212,
                "unit": "sièges",
                "source": "legislatures",
                "period": "1er avril 1986",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              },
              {
                "name": "RPR",
                "value": 155,
                "unit": "sièges",
                "source": "legislatures",
                "period": "1er avril 1986",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              },
              {
                "name": "UDF",
                "value": 131,
                "unit": "sièges",
                "source": "legislatures",
                "period": "1er avril 1986",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              },
              {
                "name": "Communiste",
                "value": 35,
                "unit": "sièges",
                "source": "legislatures",
                "period": "1er avril 1986",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              },
              {
                "name": "Front national",
                "value": 35,
                "unit": "sièges",
                "source": "legislatures",
                "period": "1er avril 1986",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              },
              {
                "name": "Non-inscrits",
                "value": 9,
                "unit": "sièges",
                "source": "legislatures",
                "period": "1er avril 1986",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              }
            ],
            "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
            "period": "1er avril 1986"
          },
          {
            "title": "Les groupes au 2 avril 1993",
            "kind": "donut",
            "rows": [
              {
                "name": "RPR",
                "value": 257,
                "unit": "sièges",
                "source": "legislatures",
                "period": "2 avril 1993",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              },
              {
                "name": "UDF",
                "value": 215,
                "unit": "sièges",
                "source": "legislatures",
                "period": "2 avril 1993",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              },
              {
                "name": "Socialiste",
                "value": 57,
                "unit": "sièges",
                "source": "legislatures",
                "period": "2 avril 1993",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              },
              {
                "name": "Communiste",
                "value": 23,
                "unit": "sièges",
                "source": "legislatures",
                "period": "2 avril 1993",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              },
              {
                "name": "Non-inscrits",
                "value": 25,
                "unit": "sièges",
                "source": "legislatures",
                "period": "2 avril 1993",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              }
            ],
            "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
            "period": "2 avril 1993"
          },
          {
            "title": "Les groupes au 28 mai 1998",
            "kind": "donut",
            "rows": [
              {
                "name": "Socialiste",
                "value": 250,
                "unit": "sièges",
                "source": "legislatures",
                "period": "28 mai 1998",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              },
              {
                "name": "RPR",
                "value": 142,
                "unit": "sièges",
                "source": "legislatures",
                "period": "28 mai 1998",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              },
              {
                "name": "UDF–Alliance",
                "value": 82,
                "unit": "sièges",
                "source": "legislatures",
                "period": "28 mai 1998",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              },
              {
                "name": "Communiste",
                "value": 36,
                "unit": "sièges",
                "source": "legislatures",
                "period": "28 mai 1998",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              },
              {
                "name": "Radical, citoyen et Vert",
                "value": 33,
                "unit": "sièges",
                "source": "legislatures",
                "period": "28 mai 1998",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              },
              {
                "name": "Démocratie libérale",
                "value": 30,
                "unit": "sièges",
                "source": "legislatures",
                "period": "28 mai 1998",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              },
              {
                "name": "Non-inscrits",
                "value": 4,
                "unit": "sièges",
                "source": "legislatures",
                "period": "28 mai 1998",
                "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
                "digits": 0
              }
            ],
            "note": "Photographie des groupes constitués à cette date, membres et apparentés inclus. Le nombre total de députés change entre 1981 et 1986. Comparer les parts plutôt que seulement les effectifs.",
            "period": "28 mai 1998"
          }
        ],
        "intro": ""
      }
    ],
    "kpis": [
      {
        "name": "Sièges à l’Assemblée",
        "value": 577,
        "unit": "sièges",
        "source": "assemblee",
        "period": "18 juillet 2024",
        "note": "",
        "digits": 0
      },
      {
        "name": "Référendums nationaux",
        "value": 9,
        "unit": "scrutins",
        "source": "ref",
        "period": "1961–2005",
        "note": "",
        "digits": 0
      },
      {
        "name": "Dissolutions présentées",
        "value": 6,
        "unit": "dissolutions",
        "source": "diss2024",
        "period": "1962–2024",
        "note": "Décompte des cinq repères INA et du décret de 2024.",
        "digits": 0
      }
    ],
    "note": "Une première exploration centrée sur la Ve République. Toutes les vues ont une borne historique explicite : la photographie de l’Assemblée de 2024 ne décrit pas les groupes actuels. Les dates des personnes à Matignon ne comptent pas chaque remaniement comme un nouveau mandat."
  }
};
