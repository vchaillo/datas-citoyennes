/* Amounts are stored in millions of euros, at the published precision. */
const BUDGET = {
  year: 2025, status: 'Loi de finances initiale', checked: '9 octobre 2026',
  sources: {
    lfi: {title: 'Le budget de l’État voté pour 2025 — chiffres clés', publisher: 'Direction du Budget', date: 'Février 2025', url: 'https://www.budget.gouv.fr/documentation/file-download/29012', kind: 'PDF · Loi de finances initiale'},
    execution: {title: 'Résultats de la gestion de l’année 2025', publisher: 'Direction du Budget', date: '22 avril 2026', url: 'https://www.budget.gouv.fr/reperes/loi_de_finances/articles/publication-projet-loi-relatif-0', kind: 'PLRG · Résultats de gestion'},
    smbRevenue: {title: 'Situation mensuelle — recettes, décembre 2025', publisher: 'Direction du Budget', date: '31 décembre 2025', url: 'https://www.budget.gouv.fr/budget-etat/smb/2025-decembre-recettes', kind: 'SMB · Exécution provisoire'},
    smbExpense: {title: 'Situation mensuelle — dépenses, décembre 2025', publisher: 'Direction du Budget', date: '31 décembre 2025', url: 'https://www.budget.gouv.fr/budget-etat/smb/2025-decembre-depenses', kind: 'SMB · Exécution provisoire'}
  },
  revenue: [
    {name:'TVA · part de l’État', value:101436, note:'Taxe sur la valeur ajoutée, produit net revenant à l’État. Ce montant ne représente pas toute la TVA encaissée en France.'},
    {name:'Impôt sur le revenu', value:94519, note:'Produit net de l’impôt sur le revenu après remboursements et dégrèvements.'},
    {name:'Autres contributions fiscales', value:84137, note:'Catégorie officielle regroupant les autres impôts et contributions. Le document de synthèse ne fournit pas une ventilation exhaustive de cette catégorie.'},
    {name:'Impôt sur les sociétés', value:53043, note:'Produit net de l’impôt sur les bénéfices des sociétés.'},
    {name:'TICPE · part de l’État', value:16474, note:'Taxe intérieure de consommation sur les produits énergétiques, produit net revenant à l’État.'},
    {name:'Recettes non fiscales', value:20968, note:'Dividendes, revenus du domaine, ventes, intérêts, amendes et recettes diverses.', children:[['Dividendes et recettes assimilées',5953],['Produits du domaine de l’État',1624],['Ventes de biens et services',2467],['Remboursements et intérêts des prêts',1204],['Amendes, sanctions et pénalités',2753],['Divers',6967]]}
  ],
  missions: [
    ['Action extérieure de l’État',3457],['Administration générale et territoriale de l’État',4948],['Agriculture, alimentation, forêt et affaires rurales',4216],['Aide publique au développement',4373],['Anciens combattants, mémoire et liens avec la Nation',1854],['Cohésion des territoires',23122],['Conseil et contrôle de l’État',892],['Crédits non répartis',225],['Culture',3918],['Défense',59946],['Direction de l’action du Gouvernement',1026],['Écologie, développement et mobilité durables',21704],['Économie',3729],['Engagements financiers de l’État',56169],['Enseignement scolaire',88642],['Gestion des finances publiques',10859],['Immigration, asile et intégration',2081],['Investir pour la France de 2030',5265],['Justice',12683],['Médias, livre et industries culturelles',720],['Outre-mer',2980],['Plan de relance',0],['Pouvoirs publics',1138],['Recherche et enseignement supérieur',30909],['Régimes sociaux et de retraite',5992],['Relations avec les collectivités territoriales',3963],['Remboursements et dégrèvements',148306],['Santé',1482],['Sécurités',25258],['Solidarité, insertion et égalité des chances',30309],['Sport, jeunesse et vie associative',1499],['Transformation et fonction publiques',722],['Travail et emploi',20010]
  ].map(([name,value])=>({name,value})),
  annexes: [['Contrôle et exploitation aériens',2330],['Publications officielles et information administrative',149]],
  special: [
    ['Contrôle de la circulation et du stationnement routiers',1864],['Développement agricole et rural',146],['Électrification rurale',365],['Gestion du patrimoine immobilier de l’État',300],['Participations financières de l’État',4416],['Pensions',69340],['Accords monétaires internationaux',0],['Avances à l’audiovisuel public',3949],['Avances aux collectivités territoriales',134294],['Prêts à des États étrangers',968],['Prêts et avances aux particuliers et organismes privés',251],['Prêts et avances aux services de l’État et organismes publics',10418]
  ],
  totals: {tax:349609, nonTax:20968, beforeTransfers:370577, localTransfers:45232, euTransfers:23098, funds:6150, revenue:308397, expense:444970, netMissions:438820, grossMissions:582397, generalBalance:-136573, annexBalance:358, specialBalance:-2781, stateBalance:-138996}
};
const THEMES = [
  {id:'economie', title:'Économie & finances', icon:'◉', color:'#dcebc9', description:'Les recettes, les dépenses et les choix collectifs.', topics:['Budget de l’État','Dette & déficit','Fiscalité'], available:true},
  {id:'ecologie', title:'Écologie & énergie', icon:'❋', color:'#d5ece1', description:'Comprendre notre empreinte et nos ressources.', topics:['Climat','Mix énergétique','Biodiversité']},
  {id:'societe', title:'Société & population', icon:'◎', color:'#e5dffa', description:'La France, ses habitants et leurs conditions de vie.', topics:['Démographie','Revenus','Inégalités']},
  {id:'sante', title:'Santé & solidarité', icon:'✚', color:'#f8dfe4', description:'Les soins, la protection sociale et l’accès aux services.', topics:['Assurance maladie','Retraites','Accès aux soins']},
  {id:'education', title:'Éducation & recherche', icon:'◇', color:'#f8eacb', description:'De l’école à la recherche, les savoirs en chiffres.', topics:['École','Enseignement supérieur','Recherche']},
  {id:'territoires', title:'Territoires & mobilités', icon:'▦', color:'#dbe7fb', description:'Nos lieux de vie et les liens qui les relient.', topics:['Logement','Transports','Collectivités']}
];
