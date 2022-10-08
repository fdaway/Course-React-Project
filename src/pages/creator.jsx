const Creator = ( { session }) => {
    return <div className="VerticalContainer">
     {session.isLogged? 
     <div className="Creator">Creator Area
        <form>
        <input type="text"  name="Lesson name" placeholder="Lesson name"></input>
        <input type="text"  name="videoID" placeholder="Youtube video ID"></input>
        <input type="submit" value="Add" ></input>
        </form>

        </div>
    :
    <div>Sign In</div>
    }
    </div>
}
export default Creator; 