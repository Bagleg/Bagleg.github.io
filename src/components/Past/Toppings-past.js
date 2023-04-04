import React from 'react'
import './Toppings-past.css'

export default function Toppings() {
  return (
    <div className='toppings-grid'>
        <div className='toppings-text-one'>
        Take an article written by Jamie Ballard (2021), of YouGov America. 
        In the article, Ballard simply sums up the most liked and disliked toppings 
        in America as a whole, coming from a survey of more than 6,000 American 
        adults. They gave the ranking of the top five most coveted toppings and the 
        top 5 most disliked toppings. As a quick summary, pepperoni was the number 
        one most liked topping and anchovies were the number one most disliked 
        topping (Ballard, 2021). Wall (2013) also indicates that pepperoni reigns 
        supreme as number one as well (Wall, 2013). An article titled “Consumers’ 
        Preferences” (n.d.) goes on to state that 251,770,000 pounds of pepperoni 
        are consumed by Americans each year. The mention of a list of liked and 
        disliked toppings in the Ballard (2021) article is something that is more 
        unique to this source as something that not many people seemed to do. 
        
        <br></br>
        <br></br>
	      
        Beyond just pepperoni, all three of these sources seem to point to the same 
        assortment of top of toppings. As mentioned before, pepperoni is number one, 
        followed by sausage, then mushroom, extra cheese, then onion. It appears that
        the research out there seems to approach that these toppings reign supreme. 
        The next question, which this research project seeks to answer, is exactly
        who prefers what topping? 
        </div>
        <div className='toppings-image-one'>
            <img src={require('./images-past/topToppings.png')}></img>
        </div>
        <div className='toppings-text-two'>
        Next up is an article was written on Mintel by Bethany Wall. The article is 
        a large block of nationwide statistics, with no information on methodology. 
        The source looks at two other aspects with respect to toppings, such as age, 
        sex, and region. Regional data will be touched upon later, but the blog post 
        has some interesting comparisons between the sexes. A summary of these 
        comparisons was that women typically preferred vegetables, while men 
        preferred meats (Wall, 2013). The latter fact is backed up by Consumers’ 
        Preferences as they say something similar when listing their top toppings 
        (“Consumers’ Preferences.” n.d). This data is unique as not many other data 
        sources take this angle.
        </div>
    </div>
  )
}
