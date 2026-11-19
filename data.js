/* Bloc sous contrôle : contenu pédagogique.
   Grades : ok (bonne pratique, 2 pts), partiel (1 pt), ecart (0 pt), critique (0 pt + erreur à risque).
   Type "multi" : l'apprenant sélectionne les non-conformités ; crit = écart à risque si non repéré. */

window.SOURCES = {
  S1: { t: "SF2H. Qualité de l'air au bloc opératoire et autres secteurs interventionnels. Recommandations, mai 2015.", u: "https://www.sf2h.net/k-stock/data/uploads/2015/05/SF2H_recommandations_qualite-de-l-air-au-bloc-operatoire-et-autres-secteurs-interventionnels-2015.pdf" },
  S2: { t: "SF2H. FAQ des recommandations Qualité de l'air au bloc opératoire, novembre 2015.", u: "https://www.sf2h.net/k-stock/data/uploads/2015/11/SF2H_recommandations_qualite-de-l-air-au-bloc-operatoire-et-autres-secteurs-interventionnels-2015_FAQ.pdf" },
  S3: { t: "SFAR, SF2H. Recommandations de pratiques professionnelles : tenue vestimentaire au bloc opératoire, septembre 2021.", u: "https://www.cpias-ile-de-france.fr/docprocom/doc/sfar-tenue-bloc-sept21.pdf" },
  S4: { t: "SF2H. Optimisation de l'efficience énergétique des zones à environnement maîtrisé des blocs opératoires et secteurs interventionnels, 2024.", u: "https://www.sf2h.net/k-stock/data/pdf/reco_ceres_eco_energie_en_zem_bo_et_si_2024.pdf" },
  S5: { t: "SF2H. Avis n° 2018-02 du 23 mars 2018 relatif au traitement d'air au bloc opératoire.", u: "https://www.sf2h.net/k-stock/data/uploads/2018/04/Avis_2018_02_SF2H_Traitement_air.pdf" },
  S6: { t: "SF2H. Recommandations : contrôles microbiologiques de l'environnement (Hygiènes XXVI-6), 2018.", u: "https://www.sf2h.net/k-stock/data/uploads/2019/01/HY-XXVI-6-SF2H-CONTROLES-ENVIRONNEMENT.pdf" },
  S7: { t: "Groupe de travail inter-CPias. Guide de la tenue professionnelle, mars 2026.", u: "https://cpias-occitanie.fr/wp-content/uploads/2026/04/Guide-inter-CPIAS-tenue-professionnelle-Mars-2026.pdf" },
  S8: { t: "CPias. Tout savoir sur le bloc opératoire : et si on parlait de la tenue ?", u: "https://www.cpias.fr/nosobase/recommandations/CPIAS_BLOC_web.pdf" },
  S9: { t: "Lucet JC. Dogmes et preuves au bloc opératoire (SF2H 2021), dont Roth JA et al., Clin Infect Dis 2019 : ouvertures de portes et ISO.", u: "https://www.sf2h.net/k-stock/data/uploads/2021/02/06102021SF2H_DogmesPreuvesBO_LUCET_Jean-Christophe.pdf" },
  S10: { t: "Grandbastien B. Environnement maîtrisé : état de l'art (congrès SF2H 2023), dont étude ARIBO, Birgand G, ICHE 2019.", u: "https://interactive-programme.europa-organisation.com/slides/programme_sf2h-2023/24-20230601_1115_Grand_Theatre_GRANDBASTIEN_Bruno_1111111_(149)/20230601_1115_SP01_-_Air_et_risque_infe_Grand_Theatre_GRANDBASTIEN_BRUNO.pdf" },
  S11: { t: "CPias Grand Est. Prévention des infections de site opératoire : hygiène du personnel, 2024.", u: "https://cpias-grand-est.fr/wp-content/files/2024/09/cpias-grand-est-documents-324.pdf" },
  S12: { t: "AFNOR. NF S90-351 (avril 2013) : établissements de santé, zones à environnement maîtrisé, exigences relatives à la maîtrise de la contamination aéroportée (valeurs reprises dans S1 et S5).", u: "https://www.sf2h.net/k-stock/data/uploads/2018/04/Avis_2018_02_SF2H_Traitement_air.pdf" }
};

window.MODULES = [
{
  id: 1, key: "attitudes", short: "Attitudes",
  title: "Les bonnes attitudes au bloc",
  pitch: "Tenue, portes, circulation, nombre de personnes : les comportements qui protègent l'air de la salle.",
  public: "Tout professionnel entrant au bloc : IBODE, IADE, IDE, AS, ASH, chirurgiens, anesthésistes, internes, étudiants, intervenants extérieurs.",
  items: [
  {
    id: "1.1", type: "multi", title: "Contrôle au vestiaire",
    context: "Camille, IDE de renfort, s'apprête à franchir le vestiaire pour entrer dans l'enceinte du bloc. Vous l'observez avant son entrée.",
    question: "Sélectionnez toutes les non-conformités.",
    options: [
      { t: "Tunique et pantalon de bloc propres, dédiés au bloc", nc: false },
      { t: "Alliance conservée « parce qu'elle est lisse »", nc: true },
      { t: "Montre connectée au poignet", nc: true },
      { t: "Charlotte laissant dépasser des mèches à la nuque", nc: true, crit: true },
      { t: "Sabots réservés au bloc, nettoyés", nc: false },
      { t: "Vernis semi-permanent", nc: true },
      { t: "Tee-shirt personnel à manches longues sous la tunique", nc: true },
      { t: "Ongles courts, avant-bras dégagés", nc: false }
    ],
    explain: "La tenue de bloc est dédiée, l'article coiffant recouvre toute la chevelure, et rien ne doit gêner l'hygiène des mains : ni bijou (alliance comprise), ni montre, ni vernis. Un vêtement personnel qui dépasse de la tunique n'est pas une tenue de bloc.",
    src: ["S3", "S1", "S7", "S11"]
  },
  {
    id: "1.2", type: "choice", title: "La barbe de Julien",
    context: "Julien, médecin anesthésiste, porte une barbe fournie. Il entre en salle pour l'induction d'une chirurgie digestive.",
    question: "Quel équipement pour la tête et le visage ?",
    options: [
      { t: "Une cagoule recouvrant chevelure et barbe, puis un masque chirurgical bien ajusté", g: "ok", fb: "Chevelure et barbe doivent être complètement recouvertes pour limiter la desquamation dans l'air de la salle." },
      { t: "Un calot et un masque chirurgical, même si la barbe dépasse un peu", g: "ecart", fb: "La barbe qui dépasse reste une source de squames : elle doit être couverte." },
      { t: "Une charlotte seule : il n'intervient pas dans le champ opératoire", g: "ecart", fb: "Le masque est porté par toute personne présente en salle, et la barbe doit être couverte." },
      { t: "Un masque FFP2, qui couvre davantage le visage", g: "ecart", fb: "Le FFP2 ne couvre pas la barbe et n'est pas étanche sur une barbe : ce n'est pas la réponse au risque de desquamation." }
    ],
    explain: "SF2H 2015, recommandation 29 : recouvrir complètement la chevelure et la barbe avec une cagoule ou une coiffe, de préférence à usage unique.",
    src: ["S1", "S3", "S8"]
  },
  {
    id: "1.3", type: "choice", title: "Salle vide, masque ou pas ?",
    context: "8 h 05. La salle 4 est en préparation, le patient n'est pas encore arrivé. Un aide-soignant entre pour installer la table et les accessoires.",
    question: "À quel moment met-il son masque ?",
    options: [
      { t: "Dès l'entrée en salle, même sans patient", g: "ok", fb: "Le masque est porté dès l'entrée en salle d'intervention, avec ou sans patient." },
      { t: "À l'arrivée du patient en salle", g: "partiel", fb: "Trop tard : la préparation de la salle et l'ouverture du matériel se font déjà masqué." },
      { t: "Porté en bavette au cou, remonté au moment de l'incision", g: "ecart", fb: "Un masque ne se porte jamais en collier : il se contamine et n'est pas repositionné." }
    ],
    explain: "SF2H 2015, recommandation 27 : porter un masque chirurgical dès l'entrée en salle d'opération. Le masque couvre nez, bouche et menton, et n'est pas porté en collier.",
    src: ["S1", "S3", "S8"]
  },
  {
    id: "1.4", type: "choice", title: "Masque humide",
    context: "Fin d'une intervention de 3 h 30. Le masque de l'IBODE instrumentiste est humide. Une autre intervention suit dans la même salle.",
    question: "Que fait-elle ?",
    options: [
      { t: "Elle le retire par les liens, l'élimine, réalise une friction hydro-alcoolique et met un masque neuf", g: "ok", fb: "Le masque humide a perdu son efficacité : il est éliminé immédiatement après usage." },
      { t: "Elle le garde jusqu'à la fin du programme pour limiter la consommation", g: "ecart", fb: "Un masque humide ou souillé doit être changé." },
      { t: "Elle le range dans sa poche pour le remettre après sa pause", g: "ecart", fb: "Tout masque retiré est éliminé, jamais réutilisé." }
    ],
    explain: "RFE SFAR-SF2H 2021, R3.2 : changer le masque quand il devient humide ou présente des projections. SF2H 2015, R28 : éliminer immédiatement tout masque après usage. L'efficacité diminue en quelques heures selon les études.",
    src: ["S3", "S1"]
  },
  {
    id: "1.5", type: "choice", title: "Il manque une boîte",
    context: "Prothèse totale de hanche, 40 minutes après l'incision. L'IBODE circulante s'aperçoit qu'il manque une boîte d'ancillaire stérile, stockée dans l'arsenal du bloc.",
    question: "Quelle conduite limite le plus la contamination de l'air ?",
    options: [
      { t: "Elle demande par téléphone ou interphone qu'un collègue apporte la boîte, et la réceptionne en une seule ouverture de porte", g: "ok", fb: "Une seule ouverture, pas d'aller-retour : c'est la conduite qui protège le mieux la surpression. L'anticipation par check-list matériel avant incision évite la situation." },
      { t: "Elle sort la chercher elle-même et revient par la porte principale", g: "partiel", fb: "Deux ouvertures et une salle privée de circulante. Acceptable faute d'autre solution, pas la meilleure." },
      { t: "Elle cale la porte ouverte le temps de l'aller-retour pour gagner du temps", g: "critique", fb: "Une porte calée fait tomber la surpression : l'air du couloir entre dans une salle de chirurgie prothétique." },
      { t: "Elle passe par la salle d'induction, dont la porte reste entrouverte", g: "ecart", fb: "Toute porte entrouverte compromet la cascade de pression." }
    ],
    explain: "SF2H 2015, R25 : réduire au minimum les allées et venues et les ouvertures de porte. En chirurgie cardiaque, une fréquence plus élevée d'ouvertures est associée à davantage d'ISO (Roth 2019 : HR ajusté 1,49 par tranche de 5 ouvertures par heure).",
    src: ["S1", "S9", "S10"]
  },
  {
    id: "1.6", type: "choice", title: "Du monde pour une prothèse",
    context: "Prothèse totale de genou en salle ISO 5. Trois étudiants et un représentant du fabricant de l'implant souhaitent assister.",
    question: "Que décide l'équipe ?",
    options: [
      { t: "Présence limitée au strict nécessaire : un étudiant et le représentant seulement si son aide est requise, en tenue complète, positionnés hors du flux, sans circuler", g: "ok", fb: "Chaque personne supplémentaire émet des particules et augmente les mouvements." },
      { t: "Tout le monde entre : la salle est grande", g: "ecart", fb: "La taille de la salle ne compense pas l'émission particulaire liée au nombre de personnes." },
      { t: "Tout le monde, mais en rotation toutes les 20 minutes", g: "ecart", fb: "La rotation multiplie les entrées et sorties, donc les ouvertures de porte." }
    ],
    explain: "SF2H 2015, R24 : limiter au minimum nécessaire le nombre de personnes présentes dans la salle pendant l'intervention. La qualité particulaire dépend aussi des facteurs humains (nombre de personnes, comportement, tenue).",
    src: ["S1", "S5"]
  },
  {
    id: "1.7", type: "multi", title: "Pendant l'intervention",
    context: "Vous observez la salle 2 pendant une cure de hernie sous cœlioscopie.",
    question: "Sélectionnez les comportements à corriger.",
    options: [
      { t: "Porte de la salle maintenue entrouverte par un chariot", nc: true, crit: true },
      { t: "Circulante qui regroupe ses demandes de matériel avant de sortir", nc: false },
      { t: "Interne avec le masque sous le nez", nc: true },
      { t: "Observateur immobile, adossé au mur, loin de la table", nc: false },
      { t: "Allées et venues répétées entre la salle et la salle de pause", nc: true },
      { t: "Conversation prolongée de deux personnes penchées près du champ", nc: true },
      { t: "Téléphone personnel manipulé en salle puis masque réajusté avec les doigts", nc: true }
    ],
    explain: "Portes fermées, mouvements réduits, masque bien porté et non manipulé : ces comportements conditionnent la qualité de l'air autant que la technique.",
    src: ["S1", "S3", "S10"]
  },
  {
    id: "1.8", type: "choice", title: "Pourquoi fermer les portes ?",
    context: "Un nouvel interne trouve la consigne « portes fermées » excessive : « l'air est filtré de toute façon ».",
    question: "Quelle explication lui donnez-vous ?",
    options: [
      { t: "La salle est en surpression (15 ± 5 Pa) : l'air va de la salle vers le couloir. Une porte ouverte annule ce gradient et laisse entrer l'air des zones moins propres", g: "ok", fb: "C'est la cascade de pression qui protège la salle, et elle ne fonctionne que portes fermées." },
      { t: "C'est surtout pour réduire le bruit et préserver la concentration", g: "ecart", fb: "Le bruit compte, mais l'enjeu principal est aéraulique." },
      { t: "Pour garder la température, le risque infectieux n'est pas concerné", g: "ecart", fb: "Les ouvertures sont associées à une hausse de l'aérobiocontamination." }
    ],
    explain: "SF2H 2015, R8 : la cascade de pression assure un gradient de 15 ± 5 Pa. L'ouverture de porte peut annuler la pression positive.",
    src: ["S1", "S5", "S12"]
  },
  {
    id: "1.9", type: "choice", title: "Sortie brève",
    context: "Un IADE doit se rendre 10 minutes en réanimation, hors du bloc, puis revenir prendre en charge le patient suivant.",
    question: "Quelle conduite est conforme ?",
    options: [
      { t: "Il ôte ou protège sa tenue selon le protocole local (blouse fermée à manches longues pour une sortie brève), puis change de tenue, de coiffe et de masque à son retour", g: "ok", fb: "La tenue est dédiée au bloc : elle est ôtée ou protégée à la sortie et changée au retour." },
      { t: "Il sort en tenue sans protection et revient directement en salle", g: "ecart", fb: "La tenue s'est contaminée hors du bloc : elle doit être changée avant de rentrer." },
      { t: "Il garde son masque autour du cou pour gagner du temps au retour", g: "ecart", fb: "Masque en collier et réutilisation : deux écarts." }
    ],
    explain: "RFE SFAR-SF2H 2021 et documents CPias : tenue dédiée, ôtée en cas de sortie, protégée pour une sortie de courte durée, changée en cas de retour et en fin de journée.",
    src: ["S3", "S7", "S8"]
  },
  {
    id: "1.10", type: "choice", title: "Le technicien biomédical",
    context: "Un technicien biomédical doit intervenir 15 minutes sur une colonne de cœlioscopie, en salle, entre deux interventions. Il arrive en tenue de ville.",
    question: "Comment l'équipez-vous ?",
    options: [
      { t: "Passage au vestiaire : tenue de bloc, article coiffant couvrant les cheveux, chaussures dédiées au bloc, masque en salle, hygiène des mains", g: "ok", fb: "Les règles valent pour tout intervenant, quelle que soit la durée." },
      { t: "Surblouse et surchaussures par-dessus sa tenue de ville, plus coiffe et masque", g: "partiel", fb: "Mieux que rien, mais la tenue de ville reste exposée. Les surchaussures exposent les mains lors de la pose et du retrait : elles sont, au mieux, réservées aux visiteurs sans chaussures dédiées." },
      { t: "Aucun équipement : la salle est vide entre deux interventions", g: "critique", fb: "La salle vide est en cours de remise en état : y entrer en tenue de ville la contamine juste avant le patient suivant." }
    ],
    explain: "Tenue de bloc, coiffe et chaussures dédiées s'appliquent à toute personne entrant dans l'enceinte. Les CPias déconseillent les surchaussures en routine en raison du risque de contamination des mains.",
    src: ["S3", "S8", "S11"]
  }
  ]
},
{
  id: 2, key: "environnement", short: "Environnement",
  title: "Maintenir l'environnement maîtrisé",
  pitch: "Classes de risque, seuils de la NF S90-351, temps de repos, mode veille, maintenance et contrôles.",
  public: "Cadres de bloc, IBODE référents, EOH, services techniques, membres du conseil de bloc et du CLIN.",
  items: [
  {
    id: "2.1", type: "choice", title: "Quelle classe pour l'orthopédie prothétique ?",
    context: "Le bloc ouvre une salle dédiée aux arthroplasties de hanche et de genou. Le conseil de bloc doit fixer la classe de risque avec les services techniques.",
    question: "Quel niveau de performance viser ?",
    options: [
      { t: "Classe de risque 4 : ISO 5 sous flux unidirectionnel, cinétique CP 5, classe microbiologique M1", g: "ok", fb: "La norme classe en ISO 5 les salles de chirurgie orthopédique, et la SF2H recommande le flux unidirectionnel en orthopédie prothétique." },
      { t: "Classe de risque 3 : ISO 7, brassage ≥ 15 vol/h", g: "ecart", fb: "C'est le niveau d'une salle polyvalente, pas celui attendu pour la prothèse orthopédique." },
      { t: "Classe de risque 2 : ISO 8, brassage ≥ 10 vol/h", g: "critique", fb: "Niveau très insuffisant pour de la chirurgie prothétique." }
    ],
    explain: "NF S90-351 (2013) reprise par la SF2H : classe 4 = ISO 5, CP 5, M1, flux unidirectionnel (0,25 à 0,35 m/s sous flux), air neuf ≥ 6 vol/h. Classe 3 = ISO 7, CP 10, M10, brassage ≥ 15 vol/h. Classe 2 = ISO 8, CP 20, M100, brassage ≥ 10 vol/h.",
    src: ["S1", "S2", "S5", "S12"]
  },
  {
    id: "2.2", type: "multi", title: "Requalification de la salle 3",
    context: "Rapport de requalification annuelle de la salle 3, polyvalente, classe de risque 3 (objectif ISO 7). Mesures au repos.",
    question: "Sélectionnez les valeurs non conformes.",
    table: true,
    options: [
      { t: "Pression différentielle : 17 Pa", nc: false },
      { t: "Température : 22 °C", nc: false },
      { t: "Taux de brassage : 12 vol/h", nc: true, crit: true },
      { t: "Classe particulaire mesurée : ISO 7", nc: false },
      { t: "Cinétique d'élimination des particules (90 % à 0,5 µm) : 18 min", nc: true },
      { t: "Taux d'air neuf : 7 vol/h", nc: false },
      { t: "Aérobiocontamination au repos : 6 UFC/m³", nc: false }
    ],
    explain: "Classe 3 : brassage ≥ 15 vol/h et cinétique CP 10 (moins de 10 minutes pour éliminer 90 % des particules ≥ 0,5 µm). Pression 15 ± 5 Pa, température 19 à 26 °C, M10 (≤ 10 UFC/m³).",
    src: ["S1", "S5", "S12"]
  },
  {
    id: "2.3", type: "multi", title: "Requalification de la salle 1",
    context: "Salle 1, orthopédie prothétique, classe de risque 4 (ISO 5 sous flux unidirectionnel). Mesures au repos.",
    question: "Sélectionnez les valeurs non conformes.",
    table: true,
    options: [
      { t: "Vitesse d'air sous le flux : 0,18 m/s", nc: true, crit: true },
      { t: "Classe particulaire sous le flux : ISO 5", nc: false },
      { t: "Pression différentielle : 23 Pa", nc: true },
      { t: "Température : 25 °C", nc: false },
      { t: "Aérobiocontamination sous flux : 4 UFC/m³", nc: true },
      { t: "Cinétique d'élimination : 4 min", nc: false }
    ],
    explain: "Classe 4 : vitesse sous flux de 0,25 à 0,35 m/s, pression 15 ± 5 Pa (soit 10 à 20 Pa), M1 (≤ 1 UFC/m³), CP 5. Une surpression excessive est aussi un écart : elle signale un déséquilibre des débits.",
    src: ["S1", "S5", "S12"]
  },
  {
    id: "2.4", type: "choice", title: "Temps entre deux interventions",
    context: "Salle 5 : cinétique d'élimination mesurée à 8 minutes. Le bionettoyage entre deux patients dure en moyenne 15 minutes. Le chirurgien demande de raccourcir le délai.",
    question: "Quelle règle appliquer ?",
    options: [
      { t: "Le temps de repos est au minimum égal à la cinétique mesurée de la salle ; en pratique le bionettoyage, plus long, fixe souvent le délai. L'établissement établit ce temps salle par salle", g: "ok", fb: "La cinétique est un minimum physique, mesuré à l'installation et à chaque requalification." },
      { t: "Aucun délai : le traitement d'air décontamine en continu", g: "ecart", fb: "La décontamination prend un temps mesurable, propre à chaque salle." },
      { t: "Un délai unique de 30 minutes pour toutes les salles", g: "partiel", fb: "Prudent mais non fondé : chaque salle a sa propre cinétique." }
    ],
    explain: "SF2H 2015, R30 : respecter un temps minimal entre deux interventions, déterminé par la cinétique d'élimination des particules de la salle. Le temps de bionettoyage est généralement plus long.",
    src: ["S1"]
  },
  {
    id: "2.5", type: "choice", title: "Arrêter la CTA la nuit ?",
    context: "Pour réduire la facture énergétique, les services techniques proposent d'arrêter totalement la centrale de traitement d'air du bloc la nuit et le week-end.",
    question: "Quelle position défendez-vous en conseil de bloc ?",
    options: [
      { t: "Pas d'arrêt total : un mode veille qui maintient la surpression, l'apport d'air neuf, une classe ISO 8 et une température entre 15 et 30 °C, avec information visible de l'état de veille", g: "ok", fb: "C'est l'équilibre recommandé entre économie d'énergie et sécurité du patient." },
      { t: "Arrêt total accepté : il suffit de relancer 30 minutes avant la première intervention", g: "ecart", fb: "Sans surpression, la salle subit des inductions d'air extérieur. La SF2H recommande de ne pas arrêter totalement le traitement d'air." },
      { t: "Refus de tout mode réduit : le régime nominal doit tourner en permanence", g: "partiel", fb: "Sûr mais non nécessaire : le mode veille est recommandé pour les périodes d'inactivité." }
    ],
    explain: "SF2H 2015, R34 : ne pas arrêter totalement le traitement d'air, fonctionner en veille en période d'inactivité. SF2H 2024, R6.1 à 6.3 : mode nominal et mode veille, information de l'utilisateur, pression positive maintenue.",
    src: ["S1", "S4"]
  },
  {
    id: "2.6", type: "choice", title: "Lundi, 7 h 30",
    context: "La salle 2 sort du mode veille du week-end. Le premier patient est attendu à 7 h 45. L'affichage indique encore « veille » il y a 3 minutes.",
    question: "Quelle condition avant d'installer le patient ?",
    options: [
      { t: "Affichage en mode nominal, délai au moins égal à la cinétique mesurée écoulé depuis la bascule, pression et température vérifiées et tracées à l'ouverture", g: "ok", fb: "L'utilisation est interdite jusqu'au rétablissement du régime nominal." },
      { t: "On installe : en veille, la pression est maintenue donc la salle est protégée", g: "critique", fb: "La veille garantit seulement ISO 8 : insuffisant pour opérer." },
      { t: "On attend systématiquement 1 heure après toute sortie de veille", g: "partiel", fb: "Sûr mais pénalisant : le délai se fonde sur la cinétique mesurée de la salle." }
    ],
    explain: "SF2H 2024, R6.4 et R6.5 : mesurer la cinétique lors du passage veille vers nominal et la respecter au minimum. SF2H 2015, R21 : surveiller et tracer chaque jour, à l'ouverture, pression et température.",
    src: ["S4", "S1"]
  },
  {
    id: "2.7", type: "choice", title: "Des prélèvements d'air chaque mois ?",
    context: "Un chirurgien demande des prélèvements microbiologiques de l'air dans toutes les salles, chaque mois, « pour être rassuré ».",
    question: "Que propose l'EOH ?",
    options: [
      { t: "Pas de contrôle microbiologique de l'air en routine systématique ; contrôle particulaire, qualification et requalification selon la norme, et prélèvements ciblés (ISO fongique, travaux, analyse des causes) ou dans une démarche qualité avec niveaux cible, alerte et action définis", g: "ok", fb: "Le contrôle particulaire donne un résultat immédiat et normé ; les prélèvements microbiologiques servent dans des situations définies." },
      { t: "Accord : prélèvements mensuels dans toutes les salles, l'interprétation se fera au cas par cas", g: "ecart", fb: "Sans objectif ni niveaux de maîtrise, les résultats sont ininterprétables et peuvent rassurer à tort." },
      { t: "Aucun contrôle d'aucune sorte n'est utile au bloc", g: "ecart", fb: "Le contrôle particulaire est fortement recommandé, et la requalification prévoit des contrôles microbiologiques." }
    ],
    explain: "SF2H 2015, R11 : contrôle particulaire (grade A) ; R12 : pas de contrôle microbiologique de l'air en routine. SF2H 2018 (contrôles de l'environnement), R11 : contrôles lors de la qualification et de la requalification, et prélèvements ciblés selon les situations.",
    src: ["S1", "S6"]
  },
  {
    id: "2.8", type: "choice", title: "Fréquence des contrôles particulaires",
    context: "Vous révisez le plan de contrôle du bloc : deux salles ISO 5 et quatre salles ISO 7.",
    question: "Quelle périodicité de référence pour le contrôle particulaire ?",
    options: [
      { t: "Tous les 6 mois pour les salles ISO 5, tous les 12 mois pour les salles ISO 7", g: "ok", fb: "C'est la périodicité de l'ISO 14644-2 reprise par la SF2H." },
      { t: "Tous les 12 mois pour toutes les salles", g: "partiel", fb: "Suffisant pour les salles ISO 7, pas pour les ISO 5." },
      { t: "Uniquement à la réception des travaux", g: "ecart", fb: "La performance doit être vérifiée périodiquement en exploitation." }
    ],
    explain: "SF2H 2015 citant l'ISO 14644-2 : niveau ≤ ISO 5 tous les 6 mois, niveau > ISO 5 tous les 12 mois. Maintenance préventive au moins annuelle (R18).",
    src: ["S1"]
  },
  {
    id: "2.9", type: "choice", title: "Intervention sur la CTA",
    context: "Un technicien veut remplacer un préfiltre de la CTA qui alimente la salle 2, maintenant, pendant l'intervention en cours : « vingt minutes, personne ne s'en rendra compte ».",
    question: "Que répondez-vous ?",
    options: [
      { t: "Non : la maintenance se fait hors activité opératoire, puis vérification des paramètres avant remise en service et traçabilité dans le carnet sanitaire", g: "ok", fb: "Toute intervention sur le traitement d'air peut perturber débits et pressions." },
      { t: "D'accord si l'intervention en cours est une chirurgie propre-contaminée", g: "critique", fb: "Le type de chirurgie ne change rien : pas de maintenance pendant l'activité." },
      { t: "D'accord à condition de garder les portes fermées", g: "ecart", fb: "Les portes ne compensent pas l'arrêt ou la perturbation de la ventilation." }
    ],
    explain: "SF2H 2015, R19 : maintenance curative en dehors de toute activité opératoire. R22 : carnet sanitaire de l'installation avec opérations, contrôles, résultats et actions correctrices.",
    src: ["S1"]
  },
  {
    id: "2.10", type: "choice", title: "Hygrométrie à 35 %",
    context: "À l'ouverture, l'afficheur de la salle 6 indique une humidité relative de 35 %. Une IBODE se souvient d'une « norme à 45-65 % ».",
    question: "Comment interpréter cette valeur ?",
    options: [
      { t: "Depuis 2013, la NF S90-351 n'impose plus de pourcentage en salle standard : on compare à la plage définie par le cahier des charges et la procédure locale, et on signale si elle est hors plage", g: "ok", fb: "L'hygrométrie reste à maîtriser et à tracer, selon les cibles de l'installation." },
      { t: "Non conforme : la norme impose 45 à 65 %, la salle doit être fermée", g: "ecart", fb: "Cette plage figurait dans la version 2003 de la norme, retirée en 2013." },
      { t: "L'humidité n'a aucune importance au bloc", g: "ecart", fb: "Elle fait partie des paramètres surveillés en exploitation (SF2H 2015, R20)." }
    ],
    explain: "SF2H 2015, R20 : l'hygrométrie fait partie des paramètres surveillés. L'avis SF2H 2018 confirme une maîtrise « comme il convient » sans valeur imposée en salle standard. Le protocole de l'établissement fixe la cible.",
    src: ["S1", "S5"]
  },
  {
    id: "2.11", type: "choice", title: "Traçabilité quotidienne",
    context: "L'audit interne constate que les relevés de pression et de température des salles ne sont tracés que « quand il y a un problème ».",
    question: "Quelle organisation mettre en place ?",
    options: [
      { t: "Relevé et traçabilité chaque jour à l'ouverture de chaque salle, avec une procédure écrite de conduite à tenir en cas de non-conformité", g: "ok", fb: "C'est la recommandation : surveillance quotidienne tracée et procédure connue de tous." },
      { t: "Relevé hebdomadaire par les services techniques via la GTC", g: "partiel", fb: "La GTC est utile, mais ne remplace pas la vérification par l'équipe à l'ouverture de la salle." },
      { t: "Pas de relevé : l'alarme sonnera en cas de problème", g: "ecart", fb: "Une alarme peut être mal paramétrée ou désactivée ; la vérification tracée reste nécessaire." }
    ],
    explain: "SF2H 2015, R21 : surveiller et tracer quotidiennement, à l'ouverture de la salle, les paramètres affichés ; disposer d'une procédure écrite en cas de non-conformité. R23 : communiquer le suivi au conseil de bloc.",
    src: ["S1"]
  }
  ]
},
{
  id: 3, key: "alertes", short: "Alertes",
  title: "Gérer les alertes",
  pitch: "Pression, température, brassage, prélèvements non conformes : face au tableau de supervision, quelle première décision ?",
  public: "Cadres et IBODE référents, équipes d'astreinte, EOH, services techniques, responsables de bloc.",
  items: [
  {
    id: "3.1", type: "choice", title: "Chute de pression en cours d'intervention",
    panel: { room: "Salle 1 · Orthopédie · classe 4", mode: "Nominal", activity: "Intervention en cours : PTG, incision il y a 40 min",
      params: [ { k: "ΔP salle / couloir", v: "3", u: "Pa", s: "alarm" }, { k: "Température", v: "21,5", u: "°C", s: "ok" }, { k: "Brassage", v: "52", u: "vol/h", s: "ok" }, { k: "Vitesse sous flux", v: "0,29", u: "m/s", s: "ok" } ],
      alert: "ALARME PRESSION BASSE · seuil 10 Pa · depuis 2 min" },
    context: "L'alarme de pression différentielle retentit pendant l'intervention.",
    question: "Quelle est votre première conduite ?",
    options: [
      { t: "Vérifier immédiatement que toutes les portes sont fermées et stopper les entrées. Si l'alarme persiste : prévenir services techniques et cadre, poursuivre l'intervention en protégeant le champ, tracer, et ne pas démarrer d'intervention suivante avant retour à la normale", g: "ok", fb: "La cause la plus fréquente est une porte ouverte. On ne met pas en danger le patient opéré en interrompant l'intervention." },
      { t: "Arrêter l'intervention et transférer le patient dans une autre salle", g: "critique", fb: "Interrompre une intervention en cours expose le patient à un risque bien supérieur." },
      { t: "Appeler les services techniques et attendre leur diagnostic", g: "partiel", fb: "Utile, mais la vérification des portes par l'équipe est immédiate et souvent suffisante." },
      { t: "Acquitter l'alarme : elle sonne souvent", g: "ecart", fb: "Une alarme banalisée est une alarme inutile." }
    ],
    explain: "La conduite détaillée relève de la procédure écrite de l'établissement (SF2H 2015, R21). Les ouvertures de porte font baisser la pression minimale enregistrée (étude ARIBO).",
    src: ["S1", "S10"]
  },
  {
    id: "3.2", type: "choice", title: "28 °C à l'ouverture",
    panel: { room: "Salle 3 · Polyvalente · classe 3", mode: "Nominal", activity: "Contrôle d'ouverture 7 h 45 · 1re intervention 8 h 15",
      params: [ { k: "ΔP salle / couloir", v: "16", u: "Pa", s: "ok" }, { k: "Température", v: "28,0", u: "°C", s: "alarm" }, { k: "Humidité relative", v: "52", u: "%", s: "ok" }, { k: "Brassage", v: "18", u: "vol/h", s: "ok" } ],
      alert: "ALARME TEMPÉRATURE HAUTE · plage 19-26 °C" },
    context: "Au relevé d'ouverture, la température est hors plage.",
    question: "Que faites-vous ?",
    options: [
      { t: "Tracer la non-conformité, alerter les services techniques et le cadre, ne pas démarrer avant retour dans la plage ; si la correction tarde, déplacer le programme dans une autre salle conforme", g: "ok", fb: "Hors plage, la salle n'est pas dans ses conditions de fonctionnement nominal." },
      { t: "Baisser la consigne et démarrer : la température va descendre pendant l'installation", g: "partiel", fb: "Possible seulement si la valeur revient effectivement dans la plage avant l'intervention, et après avoir signalé l'écart." },
      { t: "Démarrer sans rien signaler : la température ne joue que sur le confort", g: "ecart", fb: "La température fait partie des paramètres normés et tracés, et une dérive peut signaler une panne de la CTA." }
    ],
    explain: "NF S90-351 : température de 19 à 26 °C en fonctionnement nominal. SF2H 2015, R21 : relevé quotidien à l'ouverture et procédure écrite en cas de non-conformité.",
    src: ["S1", "S4", "S12"]
  },
  {
    id: "3.3", type: "choice", title: "Brassage insuffisant",
    panel: { room: "Salle 4 · Polyvalente · classe 3", mode: "Nominal", activity: "Programme du jour : 5 interventions dont 1 prothèse d'épaule",
      params: [ { k: "ΔP salle / couloir", v: "12", u: "Pa", s: "ok" }, { k: "Température", v: "22,0", u: "°C", s: "ok" }, { k: "Brassage", v: "11", u: "vol/h", s: "alarm" }, { k: "Perte de charge filtre", v: "↑ 85", u: "%", s: "warn" } ],
      alert: "DÉFAUT DÉBIT SOUFFLAGE · brassage < 15 vol/h" },
    context: "La supervision signale un débit de soufflage bas et une perte de charge élevée du filtre.",
    question: "Quelle décision ?",
    options: [
      { t: "Alerter services techniques, cadre et EOH ; décision partagée sur le programme selon une analyse de risque (déplacer la prothèse vers une salle conforme) ; maintenance hors activité, puis contrôle (particulaire, cinétique) avant remise en service", g: "ok", fb: "Le taux de brassage conditionne l'élimination des particules. Un filtre colmaté est une cause classique." },
      { t: "Maintenir tout le programme : la pression reste positive", g: "ecart", fb: "La surpression n'assure pas à elle seule la décontamination de la salle." },
      { t: "Faire changer le filtre immédiatement, entre deux interventions", g: "ecart", fb: "La maintenance se fait hors activité, et une remise en service suppose une vérification." },
      { t: "Installer un purificateur mobile et poursuivre sans autre action", g: "ecart", fb: "Un dispositif mobile ne s'utilise qu'en complément ou temporairement, avec un plan d'action et une validation de son efficacité." }
    ],
    explain: "SF2H 2015, R19 : maintenance curative en cas de modification des paramètres surveillés, hors activité. R10 : dispositifs mobiles non utilisés exclusivement. R16 : analyse des causes si non-conformité répétitive.",
    src: ["S1", "S12"]
  },
  {
    id: "3.4", type: "choice", title: "Aérobiocontamination non conforme",
    panel: { room: "Salle 1 · Orthopédie · classe 4", mode: "Requalification annuelle", activity: "Mesure au repos, salle bionettoyée",
      params: [ { k: "Aérobiocontamination", v: "9", u: "UFC/m³", s: "alarm" }, { k: "Objectif M1", v: "≤ 1", u: "UFC/m³", s: "ok" }, { k: "Classe particulaire", v: "ISO 5", u: "", s: "ok" }, { k: "ΔP salle / couloir", v: "15", u: "Pa", s: "ok" } ],
      alert: "RÉSULTAT NON CONFORME · laboratoire d'hygiène" },
    context: "Le laboratoire rend un résultat d'aérobiocontamination non conforme sous le flux, au repos.",
    question: "Quelle démarche ?",
    options: [
      { t: "Vérifier la technique de prélèvement et répéter la mesure ; si le dépassement persiste, rechercher une panne, contrôler filtres et vitesse du flux, analyser les causes et décider avec l'EOH des mesures pour prévenir les ISO", g: "ok", fb: "C'est la démarche graduée décrite par la SF2H, de la vérification à l'analyse des causes." },
      { t: "Fermer la salle immédiatement et pour une durée indéterminée", g: "ecart", fb: "Une fermeture peut se discuter après investigation, pas comme réflexe sur un résultat isolé." },
      { t: "Faire changer tous les filtres sans investigation", g: "partiel", fb: "Action coûteuse qui peut manquer la cause (technique, bionettoyage, flux)." },
      { t: "Ignorer le résultat : l'activité n'a pas été modifiée", g: "ecart", fb: "Un résultat hors objectif impose une démarche documentée." }
    ],
    explain: "SF2H 2015 citant l'HIS : hors activité, vérifier la technique et répéter ; si persistance, vérifier panne, filtres et vitesse du flux ; discuter avec l'équipe d'hygiène. La suspension d'activité dépend de l'évaluation du risque.",
    src: ["S1", "S6"]
  },
  {
    id: "3.5", type: "choice", title: "Une ISO à Aspergillus",
    panel: { room: "Bloc de chirurgie cardiaque", mode: "Nominal", activity: "Alerte microbiologique",
      params: [ { k: "ISO à Aspergillus fumigatus", v: "1", u: "cas", s: "alarm" }, { k: "Travaux en cours sur le site", v: "Oui", u: "", s: "warn" }, { k: "ΔP salles", v: "14-17", u: "Pa", s: "ok" }, { k: "Dernière requalification", v: "8", u: "mois", s: "ok" } ],
      alert: "INFECTION DU SITE OPÉRATOIRE FONGIQUE · J21 post-opératoire" },
    context: "Le laboratoire confirme une infection du site opératoire à Aspergillus fumigatus après un remplacement valvulaire. Des travaux de façade ont lieu sur le bâtiment.",
    question: "Que déclenche l'EOH ?",
    options: [
      { t: "Dès ce premier cas : prélèvements ciblés d'air et de surfaces au bloc, revue du confinement des travaux et de la filtration, recherche d'autres cas, signalement selon les critères (e-SIN)", g: "ok", fb: "Pour un champignon filamenteux, le premier cas suffit à déclencher l'investigation." },
      { t: "Attendre un deuxième cas pour parler d'épidémie", g: "critique", fb: "Pour les ISO fongiques, la SF2H recommande d'agir dès le premier cas." },
      { t: "Lancer des prélèvements bactériologiques de surfaces dans tout l'établissement", g: "ecart", fb: "Prélèvements non ciblés : il faut rechercher le champignon en cause, là où le risque se situe." }
    ],
    explain: "SF2H 2018 (contrôles de l'environnement), R11 (A-3) : prélèvements ciblés d'air et de surfaces dès le premier cas d'ISO à champignon filamenteux. R11 (B-3) : prélèvements pour surveiller le confinement en cas de travaux.",
    src: ["S6"]
  },
  {
    id: "3.6", type: "choice", title: "Inversion de pression",
    panel: { room: "Salle 6 · Polyvalente · classe 3", mode: "Nominal", activity: "Salle vide, bionettoyage terminé, portes fermées",
      params: [ { k: "ΔP salle / couloir", v: "−2", u: "Pa", s: "alarm" }, { k: "Température", v: "23,0", u: "°C", s: "ok" }, { k: "Brassage", v: "17", u: "vol/h", s: "ok" }, { k: "Extraction", v: "Débit ↑", u: "", s: "warn" } ],
      alert: "PRESSION NÉGATIVE · portes fermées" },
    context: "Portes fermées, la salle est passée en dépression par rapport au couloir.",
    question: "Que faites-vous ?",
    options: [
      { t: "Salle non utilisée : alerte des services techniques (équilibrage soufflage et extraction), programme déplacé, puis contrôle des paramètres avant remise en service, traçabilité", g: "ok", fb: "Portes fermées, une dépression traduit un défaut technique : l'air des zones moins propres entre dans la salle." },
      { t: "Utiliser la salle pour une chirurgie sale : la dépression n'a pas d'importance", g: "ecart", fb: "Une salle d'opération standard doit rester en surpression, quelle que soit l'intervention." },
      { t: "Ouvrir la porte quelques minutes pour équilibrer", g: "ecart", fb: "Cela ne corrige pas le défaut et contamine la salle." }
    ],
    explain: "SF2H 2015, R7 et R8 : le traitement d'air assure la surpression avec un gradient de 15 ± 5 Pa. R19 : maintenance curative avant toute reprise d'activité.",
    src: ["S1"]
  },
  {
    id: "3.7", type: "choice", title: "Urgence de nuit, salle en veille",
    panel: { room: "Salle 2 · Polyvalente · classe 3", mode: "Veille", activity: "2 h 10 · fracture ouverte de jambe, patient au bloc dans 25 min",
      params: [ { k: "ΔP salle / couloir", v: "13", u: "Pa", s: "ok" }, { k: "Température", v: "17,5", u: "°C", s: "warn" }, { k: "Brassage", v: "8", u: "vol/h", s: "warn" }, { k: "Cinétique mesurée", v: "9", u: "min", s: "ok" } ],
      alert: "SALLE EN MODE VEILLE · utilisation interdite" },
    context: "Appel pour une urgence orthopédique. La salle de garde est en mode veille.",
    question: "Que fait l'équipe ?",
    options: [
      { t: "Basculer la salle en mode nominal dès l'appel selon la procédure ; la préparation couvre la cinétique mesurée (9 min) ; vérifier l'affichage nominal, la pression et la température avant d'ouvrir le matériel stérile, et tracer", g: "ok", fb: "Anticiper la bascule évite à la fois de retarder l'urgence et d'opérer dans une salle non conforme." },
      { t: "Opérer en mode veille : la pression est maintenue", g: "critique", fb: "La veille ne garantit qu'ISO 8 et un brassage réduit : la salle n'est pas utilisable." },
      { t: "Attendre une heure après la bascule, par précaution", g: "partiel", fb: "Retard injustifié : le délai repose sur la cinétique mesurée de la salle." }
    ],
    explain: "SF2H 2024 : utilisation interdite jusqu'au rétablissement du régime nominal (R6.5 : respecter au minimum la cinétique mesurée). Bascule automatique ou manuelle selon des procédures validées.",
    src: ["S4"]
  },
  {
    id: "3.8", type: "choice", title: "Alarmes à répétition",
    panel: { room: "Salle 5 · Viscérale · classe 3", mode: "Nominal", activity: "Programme en cours, 3e intervention",
      params: [ { k: "Alarmes ΔP brèves", v: "25", u: "depuis 8 h", s: "alarm" }, { k: "ΔP moyenne", v: "14", u: "Pa", s: "ok" }, { k: "Ouvertures de porte", v: "≈ 30", u: "/h", s: "warn" }, { k: "Température", v: "21,0", u: "°C", s: "ok" } ],
      alert: "ALARMES RÉPÉTÉES · pression basse transitoire" },
    context: "L'alarme sonne brièvement à chaque ouverture de porte. L'équipe agacée demande de couper le signal sonore.",
    question: "Quelle réponse ?",
    options: [
      { t: "Ne pas désactiver l'alarme : rappel immédiat sur les ouvertures, regroupement des demandes de matériel, puis analyse des causes en équipe (organisation, flux, matériel manquant) et suivi en conseil de bloc", g: "ok", fb: "L'alarme révèle un problème de comportement et d'organisation : c'est lui qu'il faut traiter." },
      { t: "Couper le signal sonore jusqu'à la fin du programme", g: "critique", fb: "Une alarme désactivée ne protège plus contre une vraie défaillance." },
      { t: "Demander aux services techniques d'abaisser le seuil d'alarme à 5 Pa", g: "ecart", fb: "Modifier le seuil masque l'écart au lieu de le corriger." }
    ],
    explain: "SF2H 2015, R16 : analyse formalisée des causes en cas de non-conformité répétitive. R25 : réduire les ouvertures de porte. R23 : informer le conseil de bloc.",
    src: ["S1", "S9"]
  },
  {
    id: "3.9", type: "choice", title: "Travaux annoncés",
    panel: { room: "Couloir adjacent au bloc", mode: "Nominal", activity: "Démolition d'une cloison prévue dans 7 jours",
      params: [ { k: "Distance au bloc", v: "15", u: "m", s: "warn" }, { k: "Patients à risque fongique", v: "Oui", u: "", s: "warn" }, { k: "ΔP sas / couloir", v: "15", u: "Pa", s: "ok" }, { k: "Analyse de risque", v: "Non faite", u: "", s: "alarm" } ],
      alert: "TRAVAUX PROGRAMMÉS · avis EOH non sollicité" },
    context: "Les services techniques informent le bloc, une semaine avant, de travaux de démolition à proximité.",
    question: "Que faites-vous ?",
    options: [
      { t: "Analyse de risque préalable avec l'EOH : confinement du chantier, circuits, renforcement de la surveillance des pressions, bionettoyage, et prélèvements d'air et de surfaces pour vérifier l'efficacité du confinement", g: "ok", fb: "La prévention se prépare avant le premier coup de masse." },
      { t: "Rien de particulier : le bloc est en surpression", g: "ecart", fb: "La surpression ne suffit pas face à une forte émission de poussières et de spores." },
      { t: "Fermer le bloc pendant toute la durée des travaux", g: "partiel", fb: "Rarement nécessaire si le confinement est maîtrisé ; à décider selon l'analyse de risque." }
    ],
    explain: "SF2H 2018 (contrôles de l'environnement), R11 (B-3) et R12 (B-2) : prélèvements d'air et de surfaces pour surveiller le confinement lors de travaux impactant une ZEM. SF2H 2015, R15 : analyse a priori des risques.",
    src: ["S6", "S1"]
  }
  ]
}
];
