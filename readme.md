###### Intro à la programmation orientée objet

# Les modules et les classes en JavaScript

## Principe de base

Avant de commencer à parler à proprement dit de programmation en JavaScript, il faut parler des **"modules"**.

Les modules sont un équivalent des ```include``` et des ```require``` dans d'autre languages mais avec une organisation en *"librairie"* beaucoup plus poussée.

En effet, dans d'autres language, un ```include```, ou un ````require````, va charger l'ensemble du contenu d'un fichier.

Ici, la logique des modules de JavaScript, va nous permettre de ne charger que certaines parties, celles dont nous avons vraiment besoin.

## Exemple concret

Vous trouverez ci-joint un fichier **"oop-js-01-modules.js"**. Celui-ci est considéré par *node.js* comme étant un module grâce au fichier **"package.json"**.

Vous pouvez exécutez le script par la commande ```node oop-js-01-modules.js``` dans le terminal.

Notre fichier étant considéré comme un module, il peut lui-même charger un autre module via la ligne de code :

```javascript
import ANSIColours from './lib/ANSIColours.js';
```

Cette ligne dit *"Je vais chercher dans **'./lib/ANSIColours.js'** quelque chose qui s'appelle **ANSIColours**"*.

> Note : pour des raisons de sécurité, seul un module, peut charger un autre module (c'est étrange, mais c'est ainsi). Voilà pourquoi il est important que notre script principal, celui que nous exécutons, soit considéré par node comme étant lui-même un module. Sinon, l'instruction ```import``` nous serait interdite. 
Bien entendu, lorsque l'on charge un fichier Javacript dans le html, via la balise ```<script>``` il est également possible de déclarer que celui-ci est un module.

Regardez dans **'./lib/ANSIColours.js'**, vous y trouverez l'instruction suivante :

```javascript
export default class ANSIColours { 
    ...
}
```

Qui dit *"j'exporte quelque chose qui s'appelle **ANSIColours**"*.

> Ne nous attardons pas sur trop le mot *"default"*.Pour le moment, acceptons qu'il en  faut toujours un et un seul par fichier de module. Ou, dit autrement, il peut y avoir plusieur *"export"*, mais un seul *"export default"*.

Nous avons donc, d'un côté un fichier qui exporte quelque chose qui se nomme ***ANSIColours*** et de l'autre un autre fichier qui demande à importer ***ANSIColours***.

Voilà le principe de base des modules en JavaScript. Pour l'instant, inutile d'en savoir davantage pour faire de la P.O.O.

# La Classe ANSIColours

## Déclaration et usage de la classe

Prenons maintenant le temps de regarder le contenu du fichier **'./lib/ANSIColours.js'**

Si l'on met de côté ```export defaut```, tout le code du fichier se trouve contenu dans l'instruction suivante :

```javascript
class ANSIColours {
    ... 
}
```

Ceci permet de déclarer une ***Classe***, c'est à dire quelque chose que l'on va pouvoir ensuite utiliser n'importe où dans notre programme en le transformant en ***objet*** avec la commande ```new```.

**Syntaxe :**
```javascript
let monObjet = new MaClasse();
```

C'est exactement ce que vous avez déjà l'habitude de faire lorsque vous créez un tableau comme ceci :
```javascript
let monTableau = new Array();
```

On appelle cela *"instancier"* ou *"créer une instance"*.

Bien sûr, on peut créer plusieurs instances, d'une même classe (comme vous pouviez créer plusieurs Array).

## Le constructeur

Si vous y regardez d'encore plus prêt, vous verrez qu'à l'intérieur de la Classe **ANSIColours** ne se trouve qu'une seule fonction ```constructor()```.

La fonction ```constructor()``` est ce que l'on appelle le *constructeur* de la classe. C'est elle qui se charge de préparer tout ce qu'il y a à préparer lors de la création d'une instance avec ```new```.

C'est aussi cette fonction qui se charge de récupérer tous les arguments ajoutés lors de l'instanciation de la classe.

**En d'autres termes, lorsque vous écrivez :**

```javascript
let monTableau = new Array('lundi', 'mardi', 'mercredi', ...);
```

Vous créez un instance de la classe **Array** en passant à son constructeur une liste d'arguments qui seront utilisés pour remplir le tableau.

Vous pourrez bientôt créez vos propres constructeurs avec les arguments que vous désirez pour créer n'importe quel type d'objet.

## this

Si maintenant on regarde l'intérieur du constructeur de la classe **ANSIColours**, on constate qu'il ne fait qu'une longue suite d'instructions toutes semblables, comme celle-ci :

```javascript
this.RED    = "\x1b[31m";
```

Le constructeur déclare ici une *propriété*, c'est à dire une variable dans une classe, qui se nomme ```RED``` et dans laquelle il stocke la valeur ```"\x1b[31m"```.

pour cela il utilise le mot clé ```this``` qui en objet veut dire *"moi"*.

Donc, si, dans le constructeur de **ANSIColours**, il est écrit :

```javascript
this.RED    = "\x1b[31m";
```

Cela signifie "A l'intérieur de moi-même, **ANSIColours**, il existe une donnée ```RED``` qui vaut ```"\x1b[31m"```.

Et il en va de même pour toute une liste d'autres propriétés.

## Utilisation de la classe

Une fois la classe développée, son constructeur créé, ses propriétés déclarées et le fichier chargé via ``import```, il devient très simple d'utiliser son contenu comme suit :

```javascript
let AC =  new ANSIColours();

console.log(AC.BG_RED + "Texte sur fond rouge" + AC.RESET)
```

Essayez de faire fonctionner le script **"oop-js-01-modules.js"** et de l'utiliser pour afficher des tetes de différentes couleurs dans le terminal.

> Pensez bien à faire un *"reset"* de la couleur après avoir fait du texte en couleur, sinon les réglages risquent de rester sur les prochains textes.