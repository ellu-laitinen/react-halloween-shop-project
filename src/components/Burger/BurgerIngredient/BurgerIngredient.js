import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

const burgerIngredient = props => {

    let ingredient = null;

    switch (props.type) {
        /*      case ('bread-bottom'):
                 ingredient = <div className={classes.BreadBottom}></div>;
                 break;
             case ('bread-top'):
                 ingredient = (
                     <div className={classes.BreadTop}>
                         <div className={classes.Seeds1}></div>
                         <div className={classes.Seeds2}></div>
                     </div>
                 );
                 break; */
        /*      case ('meat'):
                 ingredient = <div className={classes.Meat}></div>;
                 break; */

        case ('candle'):
            ingredient = <div className={classes.Candle}>
                <div className={classes.Flame}> </div>
                <div className={classes.Drop}> </div>
            </div>;
            break;

        case ('pumpkin'):
            ingredient = <div className={classes.Pumpkin}>

                <div className={classes.PumpkinEyes}> </div>
                <div className={classes.PumpkinEyes2}> </div>
                <div className={classes.Stem}> </div>
                <div className={classes.PumpkinGrin}> </div>
                <div className={classes.PumpkinGrin2}> </div>
                <div className={classes.PumpkinGrin3}> </div>
                <div className={classes.PumpkinGrin4}> </div>
                <div className={classes.PumpkinGrin5}> </div>
                <div className={classes.PumpkinGrin6}> </div>
                <div className={classes.Nose}> </div>
            </div>;
            break;

        case ('ghost'):
            ingredient =
                <div className={classes.Ghost}>
                    <div className={classes.Eyes}> </div>
                </div>
                ;
            break;
        case ('eyeball'):
            ingredient = <div className={classes.Eyeball}>
                <div className={classes.Iris}> </div>
                <div className={classes.Pupil}> </div>
            </div>;
            break;
        default:
            ingredient = null;


    }

    return ingredient;


}

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired

}

export default burgerIngredient;
