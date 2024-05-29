const site:unknown = "https://hcode.com.br;";
let sitesFavoristos: string[] = [];

/**
 * afirmar que o tipo é uma string
 */
sitesFavoristos.push(site as string);

sitesFavoristos.push(<string>site);