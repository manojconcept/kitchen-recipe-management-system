import style from "./style.module.css"
import Card from "../Card";

const Grid = ({captureData}) => {
    return (
        <div className={style.cards__frame}>
            {
                captureData.map(
                    (ele)=><div key={ele._id} className={style.card__inside}><Card key={ele._id} ele={ele}/></div>
                )
            }
          

        </div>
    );
}

export default Grid;