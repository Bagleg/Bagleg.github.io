import React from 'react'
import './Research.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function Research() {
  return (
    <div className='research-grid'>
        <div className='research-header'>
            <Header title={"Conducting Research and Getting Results"}/>
        </div>
        <div className='research-navbar'>
            <Navbar />
        </div>
        <div className='survey-q'>
            <i>
                How was the survey conducted?
            </i>
        </div>
        <div className='research-survey1'>
            This study began with a survey which surfaced at numerous events sponsored
            by Lake Sumter State College. Those included: the Welcome Back Bash of 
            Fall 2023, Pumpkin Bowling of Fall 2023 on both campuses, and the Welcome 
            Back Bash of Spring 2023. Through these events, the survey was able to 
            meet the minimum acceptable sample size, for the sake of this study, of 
            100 responses. This meant that the survey’s respondents were primarily 
            college-age. Anyone who approached during the events in which the survey 
            was deployed was offered a cookie and asked to fill out the survey. 
            This meant that most people who visited the tables at these events filled 
            out a survey.
        </div>
        <div className='research-survey2'>
            The survey was conducted with little risk to the participants. While the 
            survey results would be put on a website, the participants are entirely 
            anonymous. No information was collected that could be used to identify any 
            of the survey respondents. <br></br> <br></br>

            The survey asked a few questions covering the work that previous studies have 
            done and differentiating itself from them. For instance, instead of asking 
            about crust type, the survey asked about crust style. This included New York 
            style, Chicago Deep Dish style, Detroit style, Neapolitan style, and an 
            “other” option so people could put their favorite pizza. This was done to 
            provide more depth. The questions included: What gender do you identify with? 
            What age range do you fall into? What is your race? Where did you grow up in 
            the United States? Which pizza style do you prefer? What does your ideal pizza 
            look like? These questions all seek to find answers similar to the other 
            studies. However, the results will be more unified. All of these questions 
            were fairly open-ended. Most, if not all, had the option for “other,” giving 
            the responders the freedom to identify themselves correctly and create their 
            perfect pizzas. This helps fill in some of the grey areas of the other 
            studies. There is not any non-binary representation in the studies from the 
            Literature Review. There is also little representation for those who like 
            cracker-style crust. This is one relevant way that this study seeks to 
            differentiate itself.
        </div>
        <div className='research-data-q'>
            <i>
                How did the data get analyzed?
            </i>
        </div>
        <div className='research-data1'>
            After the survey was distributed, data analysis began. When considering what 
            to use to conduct analysis of the data, there were two main options. One was 
            Microsoft Excel. This was the mainstream route. Microsoft Excel is a safe 
            option. It is widely used and simple, however might not be the most relevant 
            on a resume for experience. Thus, Python Pandas presented itself as another 
            option. With it requiring knowledge of Python, Matplotlib (a library of python),
            and Pandas itself, of course (which is also, another library,) this would be 
            the option that provides the most relevant experiences. It could have gone 
            either way, with Google Forms being able to convert results into an Excel or 
            CSV file easily, however, Pandas was the tougher option and would be the most 
            beneficial in the long run. Thus, Pandas was used to analyze the results of 
            this study. This involved importing the Google Form results to a Google Sheet, 
            downloading it as a CSV, and putting that into a Jupyter Notebook to start 
            analysis. This involved transforming the data into relevant graphs and 
            reorganizing the structure of the original dataset to ensure proper analysis 
            and visualization of data in novel forms.<br></br>

            The code for pie charts were simple enough. It starts by, of course, 
            importing the data and relevant libraries (Pandas and Matplotlib.) Then, 
            it categorizes the data, applies variables to them, and gets the values 
            of each category. The code with relevant labels for an example section 
            (Gender V.S Style) can be seen below.
        </div>
        <div className='organized'>
            <img src={require('./research-imgs/reorganizing-data.png')}></img>
        </div>
        {/* <div className='spacer'></div> */}
        <div className='organized-text'>
            This code organized the values of the study into a way in which Pandas
            can digest. It sets up variables so that pie charts and bar graphs could
            be set up later.
        </div>
        {/* <div className='spacer'></div> */}
        <div className='bar'>
            <img src={require('./research-imgs/making-bar-charts.png')}></img>
        </div>
        <div className='bar-text'>
            Making bar graphs required the data being
            completely reorganized and then pivoted. The styling included
            changing font size and label rotation to 
            keep the graphs legible.
        </div>
        <div className='research-site-q'>
            <i>
                How was the website made?
            </i>
        </div>
        <div className='research-site'>
            The next step was compiling images for the website to which this would 
            be uploaded. This meant all of the graphs were produced using Python 
            Pandas and charts from the sources mentioned in the literature review. 
            The programming languages that went into the creation of the website were
            HTML, CSS, and JavaScript—all very standard choices. However, the o
            pportunity to use React, which is a framework of JavaScript, was another 
            potential path. React was a good fit for this website, as in general, it 
            is a more organized, component-based package than vanilla JavaScript. 
            This would simply make the creation of the website, easier and make the 
            end product superior. So, React was chosen over vanilla JavaScript. 
            Additionally, CSS Grids, which is a particular style of doing CSS was 
            adopted on all pages of the website. Grids is something that is included 
            with CSS without the addition of other libraries. However, it’s 
            particular use here was quite widespread. Each page of this site uses 
            grids to organize its contents, and it’s like that because CSS Grids is 
            just another way to keep organized and secure the websites flow.
        </div>
    </div>
  )
}
