import React, {Component} from "react";








function MovieList() {
    return (
            <thead>
                <tr>
                    <th>title</th>
                    <th>actors</th>
                    <th>plot</th>
                    <th>imdbRating</th>
                    <th>director</th>
                    <th>year</th>
                    <th>title</th>
                    <th>poster</th>
                    <th>rated</th>
                    <th>released</th>
                    <th>runtime</th>
                    <th>genre</th>
                    <th>writer</th>
                    <th>title</th>
                </tr>
            </thead>
        
    )
}

const FilmBreaks = (props) => {


    //construct rows
    // use map to iterate over each row and wrap it in
    // a html table row  
    //registered an on click listener to remove the character

    
    const rows = props.list.map((row, index, exit) => {
      return (
        <tr key={index}>
          <td>{row.title}</td>
          <td>{row.job}</td>
          <td>{row.actors}</td>

          { /* <td>{row.plot}</td> 
               <td>{row.writer</td>
               <td>row.genre</td>
               <td>row.genre</td>
               <td>row.released</td>
               <td>row.runtime</td>
          */} 

          <td>{row.imdbRating}</td>
          <td>{row.director}</td>
          <td>{row.year}</td>
          <td><button onClick={()=>props.deleteMovie(index)}> Delete</button></td>
        </tr>
      )
    })
    return
  }


  class Table extends Component {
    render(){
        const {movieData, 
            deleteMovie
        } = this.props;
        return(
            <table>
                <FilmBreaks/>

                list ={movieData}
                deleteMovie ={deleteMovie}
                />
            </table>
        )
    }
  }
export default Table;

/* Creating the Component:

    Create a new functional component called MovieForm
    Be sure to include props as the first function parameter and be sure to have a single enclosing
    tag in the JSX of the return statement
    Add a title to the JSX of the MovieForm component inside the
    tags

    Movie Form
    Add as a new component inside of the JSX of the component between the two
    tags
    
    /*