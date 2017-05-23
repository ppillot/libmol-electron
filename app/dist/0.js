webpackJsonp([0],{261:function(e,s){e.exports={colorBychain:"# Coloration par chaînes\nLa coloration par chaînes identifie les différentes chaînes présentes dans le modèle moléculaire et les colore de manière distincte.\n\nLes principales chaînes identifiées sont :\n* les [protéines](lexicon-protein), constituées d'une ou plusieurs chaînes d'acides aminés,\n* les [acides nucléiques](lexicon-nucleic) (ADN et ARN), constituées de chaînes de nucléotides.\n\nLes [ligands](lexicon-ligand) (eau, ion, hème, ...) associés à une chaîne (protéine ou acide nucléiques) sont également colorés avec les autres atomes de cette chaîne.   \n**Exemple d'une protéine à 4 chaînes :**\n![Sélection](static/img/colochain.png)    \nLa légende du modèle moléculaire indique les différentes chaînes repérées par leurs identifiants et par leurs colorations spécifiques.",colorByelement:"# Coloration par atomes\nLes atomes sont colorés selon les conventions de la chimie ([coloration CPK](lexicon-cpk)). Ce mode de coloration permet de distinguer les différents éléments chimiques d'une molécule.\n\nSymbole | Code couleur | Atome\n------------ | ------------- | -------------\n**C** | ![Carbone](static/img/c.png)| **Carbone**\n**H** | ![Hydrogène](static/img/h.png) | **Hydrogène**\n**O** | ![Oxygène](static/img/o.png) | **Oxygène** \n**N** | ![Azote](static/img/n.png) | **Azote**\n**S** | ![Soufre](static/img/s.png) | **Soufre** \n**P** | ![Phosphore](static/img/p.png) | **Phosphore** \n\n**Attention**, dans la plupart des modèles de macromolécules (protéines et acides nucléiques) les atomes d'**hydrogène**, bien que présents, ne sont pas représentés. Certaines [techniques](lexicon-technique) ne permettent pas de déterminer la position des atomes d'hydrogène lors de l'étude de la structure tridimensionnelle des molécules.  \n\nLa légende du modèle moléculaire indique les atomes identifiés et leurs colorations.",colorBynature:"# Coloration par nature\nLa coloration par nature identifie la nature chimique des constituants du modèle moléculaire et les colore en fonction de leur nature chimique.\n\nLes principaux groupes identifiés sont :\n* les protéines,\n* les acides nucléiques (ADN et ARN),\n* les glucides,\n* l'eau,\n* les ions,\n* les [autres atomes](lexicon-autre).\n**Exemple d'un modèle de natures variées :**\n![Sélection](static/img/colonat.png)   \nTout atome non affecté à un autre groupe est intégré aux autres atomes. Ce groupe est donc très hétérogène et regroupe toutes les molécules chimiques différentes de celles qui sont identifiées. \n\nLa légende du modèle moléculaire indique pour chaque type de nature chimique repéré son identifiant et sa coloration spécifique.",colorByresidue:"# Coloration par résidus\nUn résidu est un groupe d'atomes constituant une sous-unité d'une chaîne dans un modèle moléculaire. Chaque résidu est identifié par une coloration spécifique.\n\nIl y a plusieurs types de résidus selon la nature de la chaîne.  \nLes principaux résidus sont :\n* les [acides aminés](lexicon-aminoacid) formant les protéines,\n* les [nucléotides](lexicon-nucleotide) formant les [acides nucléiques](lexicon-nucleic) (ADN et ARN).\n\nDes résidus de différentes natures, les [ligands](lexicon-ligand), peuvent également être présents dans les modèles moléculaires :\n* des ligands organiques (glucides, lipides, hème, ...),\n* des ligands minéraux (eau, ions, atomes  métalliques, ...).\n\nLa légende du modèle moléculaire indique pour chaque type de résidu repéré, son identifiant et sa coloration spécifique.",colorBysstruc:"# Coloration par structure\n\nLa coloration par structure identifie des motifs particuliers dans la structure d'une chaine d'acides aminés des protéines et les colore de manière spécifique. Ce mode de coloration ne s'active que lorsque la sélection porte sur les protéines et pour des modes d'affichage simplifiés ([squelette](display-backbone) ou [ruban](display-cartoon)).\n\nLes motifs identifiés sont :\n* les [feuillets bêta](lexicon-feuillet),\n#### Un feuillet bêta est un motif formé par plusieurs segments de la chaine d'acides aminés qui s'alignent pour former des zones planes dans la protéine. \n* les [coudes](lexicon-coude),\n#### Un coude est un repli marqué, en épingle à cheveux, dans une chaine d'acides aminés d'une protéine.\n* les [hélices alpha](lexicon-helice),\n#### Une hélice alpha est un motif formé par l'enroulement de la chaine d'acides aminés pour former une hélice en général allongée. L'hélice alpha comporte 3,6 acides aminés par tour d'hélice.\n* les [hélices 3-10](lexicon-helice).\n#### Une hélice 3-10 est un motif en hélice plus court et plus compact (3 acides aminés par tour) que l'hélice alpha. \n\nLes différents motifs sont stabilisés par des liaisons hydrogènes établies entre les acides aminés impliqués dans les structures.\n\nLa légende du modèle moléculaire indique pour chaque type de motif structural repéré son identifiant et sa coloration spécifique.",colorPalette:"# Coloration par palette\nLa coloration par palette est définie par l'utilisateur. Elle s'applique à la sélection en cours.\nElle permet de repérer spécifiquement une partie du modèle moléculaire par sa couleur.\n\nPour l'utiliser :\n* Sélectionner une partie de la molécule,\n* Colorer cette sélection par un clic sur la couleur choisie sur la palette proposée.\n\nLa légende du modèle moléculaire indique la couleur définie par l'utilisateur.",displayBackbone:"# Affichage du squelette\nLe mode \"Squelette\" est un mode d'affichage simplifié qui ne s'applique qu'aux protéines et aux acides nucléiques (ADN et ARN).  \n![Squelette](static/img/squ2.png)  \nLa représentation de la molécule est limitée aux atomes qui sont responsables de la polymérisation de la chaine des résidus, le **squelette carboné** :\n* pour les protéines, ce sont les atomes impliqués dans les liaisons peptidiques entre les acides aminés d'une chaine, \n![Squelette](static/img/squ1.png)  \n* pour les acides nucléiques, ce sont les atomes impliqués dans les liaisons entre les nucléotides d'un brin.  \n![Squelette](static/img/sqeun.png)   \n\nCes enchainements d'atomes sont représentés sous la forme de bâtonnets qui correspondent à la stucture de base de la chaîne (le squelette) autour de laquelle s'organisent les autres atomes pour donner aux molécules leurs propriétés fonctionnelles.",displayBallstick:"# Affichage en boules et bâtonnets\n![Boules et bâtonnets](static/img/bs1.png)  \n\nL'affichage en boules et bâtonnets représente :\n* **(1)** les atomes par des sphères, **les boules**, \n* **(2)** les liaisons covalentes par des segments de droite, **les bâtonnets**.   \n\nElle permet de bien visualiser les atomes constituant une molécule et les liaisons covalentes entre ces atomes.",displayCartoon:"# Affichage en rubans\nLe mode \"Rubans\" est un mode d'affichage simplifié qui ne s'applique qu'aux **protéines** et aux **acides nucléiques** (ADN et ARN). Seuls les atomes constituant le squelette de la molécule sont représentés sous une forme symbolisée. ![Ruban](static/img/ruban2.png)   \nCette représentation permet d'approcher la stucture de base de la chaîne (le squelette) autour de laquelle s'organisent les autres atomes pour donner aux molécules leurs propriétés fonctionnelles.      \n      \nPour **les protéines** : \n![Protéine en ruban](static/img/rubanp.png)   \nLa représentation de la molécule est limitée aux atomes responsables de la polymérisation de la chaine des acides aminés. Ce sont les atomes impliqués dans les liaisons peptidiques entre les acides aminés d'une chaine.  La représentation du ruban est modulée pour faire mieux apparaitre les motifs particuliers dans la structure de la chaine (feuillets, coudes, hélices, ...).\n\nPour **les acides nucléiques** : \n![ADN en ruban](static/img/rubann.png)   \nLa représentation de la molécule est limitée aux atomes impliqués dans les liaisons entre les nucléotides d'un brin sous la forme d'un ruban et aux bases azotées sous la forme d'un bâtonnet perpendiculaire au ruban.",displaySpacefill:"# Affichage en sphères\n![Sphères](static/img/spf1.png)  \nL'affichage en sphères représente :  \n* **(1)** les atomes par une sphère dont le diamètre correspond au volume occupé par le nuage électronique de l'atome. Le rayon de cette sphère est le rayon de van der Waals.  \n* **(2)** L'intersection entre deux sphères  indique une liaison chimique entre deux atomes, ils partagent une partie de leurs nuages électroniques.\n\nElle permet de bien visualiser les atomes constituant une molécule et le volume occupé par les atomes et la molécule afin d'en deviner la forme générale.",displayStick:"# Affichage en bâtonnets\n![Bâtonnets](static/img/st1.png)   \n\nL'affichage en bâtonnets représente la molécule par des segments de droite de diamètre constant, **les bâtonnets**.   \nIls correspondent :\n* **(1)** aux **atomes**, situés aux extrémités des segments, en général marqués par des angles, \n* **(2)** et aux **liaisons covalentes**, reliant deux atomes.  \n\nElle permet de bien visualiser les liaisons chimiques reliant les atomes d'une molécule.  \nCe mode de représentation permet de simplifier la représentation d'une molécule ou d'une partie de molécule.",hide:"# Cacher / Montrer\nLa commande Cacher / Montrer permet de cacher ou de réafficher alternativement la sélection en cours.\n\n**Attention**, lorsqu'une sélection est **cachée** aucune action ne sera visible sur ces atomes tant que la commande **Montrer** n'aura pas été réalisée pour cette sélection.",lexiconAminoacid:"# Acides aminés",lexiconAutre:"# Autres atomes",lexiconCoude:"# Les coudes",lexiconCpk:"# Coloration CPK\nLe code de couleurs CPK (Corey, Pauling et Koltun) est la convention de coloration des atomes en chimie. Il permet d'identifier les atomes dans les modèles moléculaires.  \nCe code a été défini par les chimistes R. Corey et L. Pauling puis amélioré par W. Koltun. Actuellement les outils de visualisation moléculaire utilisent des variations de ce code initial. \n\nLe code des principaux atomes des molécules organiques est :\n\nSymbole | Code couleur | Atome\n------------ | ------------- | -------------\n**C** | ![Carbone](static/img/c.png)| **Carbone**\n**H** | ![Hydrogène](static/img/h.png) | **Hydrogène**\n**O** | ![Oxygène](static/img/o.png) | **Oxygène** \n**N** | ![Azote](static/img/n.png) | **Azote**\n**S** | ![Soufre](static/img/s.png) | **Soufre** \n**P** | ![Phosphore](static/img/p.png) | **Phosphore** \n\nChaque élément chimique du tableau de Medeleev est coloré selon une teinte de ce code de couleur CPK.",lexiconFeuillet:"# Les feuillets bêta",lexiconHelice:"# Les hélices",lexiconHetero:"# Hétéro-atomes",lexiconLigand:"# Ligands\nLes **ligands** sont des molécules de petite taille, liées aux macromolécules (protéines et acides nucléiques) étudiées. Les ligands participent généralement au fonctionnement de la molécule étudiée.  \nLa nature chimique des ligands est variable soit organique, soit minérale.\nLes ligands de nature organique peuvent être des glucides, des lipides, des hèmes ou encore d'autres molécules organiques.\nLes ligands de nature minérale ou inorganique peuvent être des ions, des atomes métalliques ou d'autres molécules inorganiques.\nLes ligands sont liés aux macromolécules par des liaisons non-covalentes qui peuvent être des liaisons ioniques, des liaisons hydrogènes ou encore des forces de van des Waals. \n",lexiconNucleic:"# Acides nucléiques (ADN - ARN)",lexiconNucleotide:"# Nucléotides",lexiconProtein:"# Protéine",lexiconTechnique:"# Les techniques de détermination de la structure des molécules.\n\nCristallographie aux rayons X\n\nSpectroscopie par résonance magnétique nucléaire (RMN)\n\nMicroscopie électronique 3D (3DEM)",selectAll:"# Sélectionner tous les atomes\nLa commande sélectionne l'**ensemble des atomes** du modèle moléculaire quelle que soit la nature chimique des atomes et quelle que soit la chaine à laquelle ils appartiennent.   \n![Sélection](static/img/select.png)   \nLa pré-visualisation de la sélection s'affiche transitoirement au passage de la souris et permet de vérifier la qualité de la sélection réalisée.",selectCommandLine:"# Sélectionner avec le langage de sélection\nCette zone de texte permet de saisir une commande de sélection pour réaliser des sélections plus complexes ou plus rapidement qu'avec le mode séquence.  \nTous les atomes dont les caractéristiques correspondent aux mots clés sont sélectionnés.\n\nPour valider la sélection, utiliser la touche Entrée ou cliquer sur le bouton de validation.  \n\nLa pré-visualisation de la sélection s'affiche transitoirement au survol de la souris et permet de vérifier la qualité de la sélection réalisée. Le nombre d'atomes correspondants est indiqué dans la barre de sélection. Si la sélection n'est pas reconnue par le logiciel, le texte apparaît en rouge.\n\n## Exemples de commandes de sélection\n| Commande | Sélection correspondante |\n|----------|--------------------------|\n|`val`     | toutes les valines       |\n|`val and 10`| toutes les valines en position 10 dans les chaînes  \n|`:B`      | chaîne B (**Attention à la majuscule**)\n|`10:B`    | l'acide aminé (ou le nucléotide) en position 10 dans la chaîne B\n|`_C`      | tous les atomes de carbone\n|`ala and .ca and not 10`  | tous les carbones alpha des alanines sauf dans l'acide aminé en position 10\n|`protein and not (:C,:B)`| tous les atomes appartenant à des protéines mais pas aux chaînes C et B\n\n## Mots clés\n| Mot clé   | Signification\n|-----------|------\n|`all`      | tous les atomes\n|`protein`  | protéines et acides aminés\n|`nucleic`  | ADN, ARN et nucléotides\n|`dna`      | ADN\n|`rna`      | ARN\n|`hetero`   | Hétéroatomes\n|`saccharide`| Glucides\n|`ion`      | Ions\n|`water`    | Eau\n|`polymer`  | Protéine, ADN ou ARN\n|`backbone` | Squelette d'une protéine  ou d'un acide nucléique\n|`sidechain`| Chaîne latérale (acide aminé) ou base nucléique\n|`helix`    | Hélices\n|`sheet`    | Feuillets\n|`turn`     | Structure secondaire ni en hélice, ni en feuillet\nVoir la suite des mots clés dans la documentation de [NGL](http://arose.github.io/ngl/api/tutorial-selection-language.html)\n\n## Syntaxe\n|Expression     | Signification\n|---------------|---------------\n|`1,2,3`        | Sélection des résidus par leur numéro\n|`1-10`         | Sélection d'une suite de résidus (ici, de 1 à 10)\n|`:A`           | Sélection d'une chaîne à partir de son identifiant\n|`#H,#C,#O`     | Sélection des atomes par leur symbole chimique\n|`.CA,.N3`      | Sélection des atomes par leur nom dans le fichier PDB\n|`ALA,HEM`      | Sélection des résidus par leurs noms\n|`[032],[CT1]`  | Sélection des résidus dont les noms contiennent des chiffres\nSe référer à la documentation de [NGL](http://arose.github.io/ngl/api/tutorial-selection-language.html) pour des exemples plus avancés\n\nLes expressions et les mots clés peuvent être combinés entre eux par des opérateurs logiques (`AND`, `OR`, `NOT`). Des parenthèses peuvent être utilisées pour grouper les expressions.\n",selectHetero:"# Sélectionner les autres atomes\nLa sélection s'applique aux atomes qui n'appartiennent à aucun des autres types de molécules identifiées.  \nIl s'agit donc d'une groupe hétérogène.   \n![Sélection](static/img/select.png)   \nLa pré-visualisation de la sélection s'affiche transitoirement au passage de la souris et permet de vérifier la qualité de la sélection réalisée.",selectNucleic:"# Sélectionner les acides nucléiques (ADN - ARN)\nLes **acides nucléiques** présents dans le modèle moléculaire sont repérés et sélectionnés. Lorsque plusieurs types d'acides nucléiques ou plusieurs brins sont présents, ils sont tous sélectionnés sans distinction.   \n \nAprès la sélection il est possible d'agir (afficher, colorer,...) spécifiquement sur cette sélection, sans modifier les autres atomes du modèle moléculaire.   \n\n![Sélection](static/img/selectnuc.png)  \nLa pré-visualisation de la sélection s'affiche transitoirement au passage de la souris et permet de vérifier la qualité de la sélection réalisée.",selectProtein:"# Sélectionner les protéines\nLes **protéines** présentes dans le modèle moléculaire sont repérées et sélectionnées. Lorsque plusieurs chaînes de protéines sont présentes elles sont toutes sélectionnées sans distinction.   \n\nAprès la sélection il est possible d'agir (afficher, colorer,...) spécifiquement sur cette sélection, sans modifier les autres atomes du modèle moléculaire. \n\n  ![Sélection](static/img/selectpro.png)   \nLa pré-visualisation de la sélection s'affiche transitoirement au passage de la souris et permet de vérifier la qualité de la sélection réalisée.",selectSaccharide:"# Sélectionner les glucides\nLes **glucides** présents dans le modèle moléculaire sont repérés et sélectionnés. Lorsque plusieurs types de glucides sont présents, ils sont tous sélectionnés sans distinction. Le passage de la souris sur les atomes permet d'identifier plus précisement les constituants du modèle moléculaire.   \n\nAprès la sélection il est possible d'agir (Afficher, Colorer,...) spécifiquement sur cette sélection, sans modifier les autres atomes du modèle moléculaire.   \n\n![Sélection](static/img/selectglu.png)  \nLa pré-visualisation de la sélection s'affiche transitoirement au passage de la souris et permet de vérifier la qualité de la sélection réalisée.",selectWater:"# Sélectionner l'eau\nLes molécules d'**eau** présentes dans le modèle moléculaire sont repérées et sélectionnées. En général, il s'agit d'atomes d'oxygène isolés.    \nEn effet, les techniques d'analyse de la structure tridimensionnelle des molécules ne révèlent pas la position des atomes d'hydrogène. Ils ne sont donc pas représentés dans la plupart des modèles moléculaires.    \n\nAprès la sélection il est possible d'agir (Afficher, Cacher,...) spécifiquement sur cette sélection, sans modifier les autres atomes du modèle moléculaire.   \n\n![Sélection](static/img/selecteau.png)  \nLa pré-visualisation de la sélection s'affiche transitoirement au passage de la souris et permet de vérifier la qualité de la sélection réalisée."}}});