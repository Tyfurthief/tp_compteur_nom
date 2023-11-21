import React from "react";

function Counter({ countProps, isErrorProps, onClickPlus, onClickMinus }) {
  return (
    <div className="App">
      Compteur : {countProps} {/* Affichage de la valeur du compteur */}
      <div>

        <button onClick={onClickMinus}>-</button> {/* On appelle la fonction qui incrémente le compteur de 1*/}
        <button onClick={onClickPlus}>+</button> {/* On appelle la fonction qui décrémente le compteur de 1*/}

        {isErrorProps ? (
          <div className="App-error">WRONG WAY BRO</div> /* Affichage d'un message d'erreur si on veut descendre le compteur en dessous de 0*/
        ) : null}
      </div>
    </div>
  );
}

export default Counter;