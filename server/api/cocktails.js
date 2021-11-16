export default async (req, res) => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
  const cocktails = await response.json()

  return {
    cocktails: cocktails.drinks
  }
}
