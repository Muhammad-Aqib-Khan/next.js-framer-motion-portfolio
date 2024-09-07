
export  default function Home(){
   const onClickHandler = () => {
      alert("Clicked");
    }
  
    return (
      <button onClick={onClickHandler}>Take the shot</button>
    );
  }
