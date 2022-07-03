       import React, { Component } from 'react'
import NewsItem from './NewsItem'
       
       export default class News extends Component {
        constructor()
        {
          super();
          this.state={
            articles:this.articles,
            loading:false
          }
        }
       async componentDidMount()
        {
        let url=   'https://newsapi.org/v2/top-headlines?country=in&apiKey=6b09b83a612243e8b4cd3f3ea9e1d191' 
        let data= await fetch(url)
        let parsedData= await data.json();
      console.log(parsedData)
      this.setState({
        articles:parsedData.articles
      })
        }
         render() {
           return (
  
               <div className ="container my-2">
                <h2> News-Top Headlines</h2>
              <div className="row">
              {this.state.articles?.map((element)=>{
                return  <div className="col-md-4"  key={element.url}> 
                  <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />  
                  </div>
                })}
               </div>
             </div>
           )
         }
       }
       