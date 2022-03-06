const monthMap = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sept",
  9: "Oct",
  10: "Nov",
  11: "Dec"
}
const getDateTime = () => {
  const date = new Date();
  const dateTime = `${date.getHours()}:${date.getMinutes()}`;
  const dateMonth = `${monthMap[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

  return dateTime + " " + dateMonth;
}

export const Tweet = () => {
  const onButtonClick= () => {
    window.open("https://twitter.com/intent/tweet/?text=America%20takes%20over%20Russia.%20One%20political%20party%20goes%20to%20Russia%20one%20stays%20in%20North%20America.%20We%20draw%20straws%20to%20see%20which%20goes%20where.%0D%0A%0D%0A&url=")
    console.log("Ankur is Madarchod")
  }
  return (
    <div className="prompt">
      <img src="https://img.icons8.com/color/344/twitter--v1.png" width="200rem" />
      <h2>
        If The Little Mermaid was remade or written for a modern audience, Ariel’s collection of treasure would not be framed as cute or quirky but probably as an environmental PSA for how much trash we toss in the ocean.
      </h2>
      <div className="promptFooter">
      <p>
      {getDateTime()}
      </p>
      <button className="SexyAnkur" onClick={onButtonClick}>Tweet</button>
      </div>
    </div>
  )
}

