const RecipeInfo = ({name, ingredients, cookingSteps, photo}) => {

  return (
    <>
      <div className="w-100 p-5">
        <div className="d-flex">
          <h5>Назва страви: <h1>{name}</h1></h5>
        </div>

        <div className="mt-4">
          <h5 className="text-center" >Інгрідієнти</h5>
          <ul className="list-group">
            {ingredients.map((ingredient, index) => (
              <li className="list-group-item bg-warning-subtle p-3" key={index}>
                <span className="fw-bold">{index + 1}.) {ingredient}</span><br />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h5 className="text-center">Кроки приготування</h5>
          <ul className="list-group">
            {cookingSteps.map((step, index) => (
              <li className="list-group-item bg-warning-subtle p-3" key={index}>
                <span className="fw-bold">{index + 1}.) {step}</span><br />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div class="w-100 d-flex justify-content-center">
      <div class="recipe-photo d-block ">
        <div>
          <img src={photo} alt={name}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default RecipeInfo;