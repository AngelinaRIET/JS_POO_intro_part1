
/**
 * Classe ANSIColours
 * Bilbiothèque de couleurs à utiliser pour colorer le texte dans la console
 */
export default class ANSIColours { 

  /**
   * Crée une nouvelle instance de la bibliothèque ANSIColours
   */
    constructor() {
      // COULEURS DE TEXTE
      this.BLACK    = "\x1b[30m";
      this.RED      = "\x1b[31m";
      this.GREEN    = "\x1b[32m";
      this.YELLOW   = "\x1b[33m";
      this.BLUE     = "\x1b[34m";
      this.MAGENTA  = "\x1b[35m";
      this.CYAN     = "\x1b[36m";
      this.WHITE    = "\x1b[37m";

      // BRIGHT COLOURS (COULEURS VIVES)
      this.BBLACK    = "\x1b[90m";
      this.BRED      = "\x1b[91m";
      this.BG_REEN   = "\x1b[92m";
      this.BYELLOW   = "\x1b[93m";
      this.BBLUE     = "\x1b[94m";
      this.BMAGENTA  = "\x1b[95m";
      this.BCYAN     = "\x1b[96m";
      this.BWHITE    = "\x1b[97m";   

      // COULEURS DE FOND
      this.BG_BLACK    = "\x1b[40m";
      this.BG_RED      = "\x1b[41m";
      this.BG_GREEN    = "\x1b[42m";
      this.BG_YELLOW   = "\x1b[43m";
      this.BG_BLUE     = "\x1b[44m";
      this.BG_MAGENTA  = "\x1b[45m";
      this.BG_CYAN     = "\x1b[46m";
      this.BG_WHITE    = "\x1b[47m";    

      // COULEURS DE FOND VIVES
      this.BG_BBLACK    = "\x1b[100m";
      this.BG_BRED      = "\x1b[101m";
      this.BG_BGREEN    = "\x1b[102m";
      this.BG_BYELLOW   = "\x1b[103m";
      this.BG_BBLUE     = "\x1b[104m";
      this.BG_BMAGENTA  = "\x1b[105m";
      this.BG_BCYAN     = "\x1b[106m";
      this.BG_BWHITE    = "\x1b[107m";   

      // RESET
      this.RESET    = "\x1b[0m";      
    }


  }