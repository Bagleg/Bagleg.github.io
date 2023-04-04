import React from 'react'
import './Conclusion.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function Conclusion() {
  return (
    <div className='conclusion-grid'>
        <div className='conclusion-header'>
            <Header title={"In Conclusion..."} />
        </div>
        <div className='conclusion-navbar'>
            <Navbar />
        </div>
        <div className='conclusion-image'>
            <img src={require('../components/images/Pepperoni_pizza-resized.jpg')}></img>
        </div>
        <div className='conclusion-body'>
        Pizza is undeniably a cultural icon. Understanding its alluring features with
        respect to the population can lead to a better understanding of society as a
        whole. <br></br><br></br>

	    This study was flawed; however, it does open up new routes for questions. 
        If sample sizes were more proportionate in all aspects—from region to 
        age—would there be different answers? Would New York style reign supreme? 
        Other questions could also be brought up. Such as do people truly understand 
        what New York style is? How many people use New York style as a sort of 
        default answer? <br></br><br></br>

        The findings of this study has shown a few things. One: that New York Style 
        pizza is the most preferred style, regardless of all factors. Most of the 
        groups had New York style at around 50% of their respondents indicate that 
        New York style is their preferred style. Two: pepperoni still ranks rather 
        high for a topping. Three: demographically, there is not much of a difference 
        when you look at different groups. The numbers in nearly all categories 
        appeared to be the same across the board. There was not a significant impact 
        of demographics on an individual’s pizza preference.

        </div>
        <div className='conclusion-sources'>
            Sources:<br></br><br></br>
            Ballard, J. (2021, February 8). These are the most liked – and disliked – pizza toppings in America. YouGov. <a className='blue' target={'_blank'} href='https://today.yougov.com/topics/food/articles-reports/2021/02/08/most-liked-disliked-pizza-toppings-poll-data'>https://today.yougov.com/topics/food/articles-reports/2021/02/08/most-liked-disliked-pizza-toppings-poll-data</a> <br></br><br></br>
            Consumer trend report reveals favorite pizza styles. (2019, June 11). PMQ Pizza Magazine. <a className='blue' target={'_blank'} href='https://www.pmq.com/consumer-trend-report-reveals-favorite-pizza-styles/'>https://www.pmq.com/consumer-trend-report-reveals-favorite-pizza-styles/</a> <br></br><br></br>
            Consumers’ preferences. (2015, June 6). Restaurant Business, 114, 76–78. <br></br><br></br>
            Definition of 'icon'. Collins Dictionary. (n.d.). <a className='blue' target={'_blank'} href='https://www.collinsdictionary.com/us/dictionary/english/icon'>https://www.collinsdictionary.com/us/dictionary/english/icon</a> <br></br><br></br>
            Di Vita, G., De Salvo, G., Bracco, S., Gulisano, G., & D’Amico, M. (2016). Future market of pizza: Which attributes do they matter? Agris On-Line Papers in Economics & Informatics, 8(4), 59–71. <a className='blue' target={'_blank'} href='https://doi.org/10.7160/aol.2016.080406'>https://doi.org/10.7160/aol.2016.080406</a> <br></br><br></br>    
            Ghighi, A., Maioriello, G., Piper, D., Waters, B., & Vollmer, R. L. (2017). A serving of vegetables in pizza? Evaluating the nutritional value and likeability of pizza crust with the addition of zucchini or cauliflower. Journal of Family and Consumer Sciences, 109(2), 37–43. <a target={'_blank'} href='https://doi.org/10.14307/JFCS109.2.37'>https://doi.org/10.14307/JFCS109.2.37</a> <br></br><br></br>
            Hurley J, & Liebman B. (2003). In search of the perfect pizza. Nutrition Action Health Letter, 30(1), 13–15. <br></br><br></br>
            Morris, K. (2020, September 30). The most pizza loving states and each state's favorite slice. Zippia. <a className='blue' target={'_blank'} href='https://www.zippia.com/advice/states-eat-most-pizza-favorite/'>https://www.zippia.com/advice/states-eat-most-pizza-favorite/</a> <br></br><br></br>
            Pizza palates changing. (2009). Convenience Store Decisions, 20(6), 48. <br></br><br></br>
            The 2015 pizza power report (2014, November). PMQ Pizza Magazine. <a className='blue' target={'_blank'} href='https://www.pmq.com/the-2015-pizza-power-report/'>https://www.pmq.com/the-2015-pizza-power-report/</a> <br></br><br></br>
            Wall, B. (2013, July 23). America's favorite pizza toppings. Mintel. <a className='blue' target={'_blank'} href='https://www.mintel.com/blog/food-market-news/americas-favorite-pizza-toppings-top-ten-preferences'>https://www.mintel.com/blog/food-market-news/americas-favorite-pizza-toppings-top-ten-preferences</a> <br></br><br></br>                                                       

        </div>
    </div>
  )
}
