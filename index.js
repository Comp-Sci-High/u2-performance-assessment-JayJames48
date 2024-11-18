async function fetchrecipe(){
    const response = await fetch ("https://api.spoonacular.com/recipes/1003464/information?apiKey=09d315013db244fa950dbb5656dac380")
        const data = await response.json()
        console.log(data)
        return data 
      }
       fetchrecipe()

    async function fetchimage(){
        const options = {}
            method:`post`,
            Headers{
             Authorization:
            }
        }
  














